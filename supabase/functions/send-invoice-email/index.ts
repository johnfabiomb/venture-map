import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders as _cors } from '../_shared/cors.ts';
import { getOrgAccessToken, GoogleNotConnectedError, GoogleReauthRequiredError } from '../_shared/google-oauth.ts';
import { gmailSend, GmailApiError, type OutgoingMail, type MailAttachment } from '../_shared/gmail.ts';

// Emails an invoice (or a payment reminder) to a client through the ORG's OWN connected
// Gmail account — never a shared/platform mailbox — so the client sees it arrive from the
// business they actually booked with. Every attempt is logged to `invoice_sends` BEFORE
// the Google call is made (insert-first), so a crash mid-send is always a visible row,
// never silent nothing — mirrors _shared/record-payment.ts's "write the ledger row before
// the money moves" philosophy, applied to sends instead of payments.

const corsHeaders = { ..._cors, 'Content-Type': 'application/json' };
const json = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: corsHeaders });

// deno-lint-ignore no-explicit-any
type SupabaseClient = any;

const MAX_RECIPIENTS = 10;
const MAX_SUBJECT = 200;
const MAX_BODY = 20_000;
// ~4.5MB decoded. Gmail's simple (non-resumable) send caps the raw RFC2822 message at 5MB
// total; real invoice PDFs from this app run 100-400KB, so this is a guard rail against a
// mistaken/huge upload breaking the send late (after the row is already 'sending'), not a
// limit anyone should ever legitimately hit.
const MAX_PDF_B64 = 6_000_000;

// Practical (HTML5-input-style) address validator: local-part + "@" + a dotted domain.
// Deliberately NOT full RFC 5322 (quoted local-parts, comments, etc.) — an invoice
// recipient address never needs those, and accepting them would accept local-parts
// containing characters ("(", ")", a bare "\"") that are exactly the kind of thing a
// stricter validator exists to reject.
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function normalizeAddresses(list: string[] | undefined): string[] {
  return Array.from(new Set((list ?? []).map(a => a.trim().toLowerCase()).filter(Boolean)));
}

interface SendBody {
  orgId: string;
  invoiceId: string;
  kind: 'invoice' | 'reminder';
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  bodyText: string;
  shareUrl?: string;
  attachPdf: boolean;
  pdfBase64?: string;
  pdfFilename?: string;
  idempotencyKey: string;
}

// Turns a thrown error from the send step into one of the codes the client understands.
// Anything unrecognised (a network blip, a Google 5xx) falls through to a generic 502 —
// still a non-2xx, so a future retry mechanism knows it's worth trying again, exactly like
// _shared/record-payment.ts's "throw = transient, caller should get a non-2xx" convention.
function classifySendError(err: unknown): { code: string; status: number } {
  if (err instanceof GoogleNotConnectedError) return { code: 'google_not_connected', status: 400 };
  if (err instanceof GoogleReauthRequiredError) return { code: 'google_disconnected', status: 400 };
  if (err instanceof GmailApiError) {
    if ((err.status === 400 || err.status === 403) && /from|sendAs|Invalid From header/i.test(err.body)) {
      return { code: 'from_not_verified', status: 400 };
    }
    if (err.status === 429 || err.status >= 500) return { code: 'google_send_failed', status: 502 };
  }
  return { code: 'google_send_failed', status: 502 };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'auth required' }, 401);
    const body = await req.json() as Partial<SendBody>;
    const { orgId, invoiceId, kind, subject, bodyText, idempotencyKey } = body;
    if (!orgId || !invoiceId || !kind || !subject || !bodyText || !idempotencyKey) {
      return json({ error: 'orgId, invoiceId, kind, subject, bodyText and idempotencyKey are required' }, 400);
    }
    if (kind !== 'invoice' && kind !== 'reminder') return json({ error: 'kind must be invoice or reminder' }, 400);
    const attachPdf = body.attachPdf === true;
    if (attachPdf && (!body.pdfBase64 || !body.pdfFilename)) {
      return json({ error: 'pdfBase64 and pdfFilename are required when attachPdf is true' }, 400);
    }

    const url = Deno.env.get('SUPABASE_URL')!;
    const service: SupabaseClient = createClient(url, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
    const userClient = createClient(url, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return json({ error: 'not signed in' }, 401);

    const { data: member } = await service.from('org_members')
      .select('role').eq('org_id', orgId).eq('user_id', user.id).maybeSingle();
    if (!member || !['owner', 'admin'].includes(member.role)) return json({ error: 'forbidden' }, 403);

    // The invoice must both exist and belong to THIS org — folded into one `forbidden`
    // rather than a separate 404, so a guessed/foreign invoiceId can't be used to probe
    // whether it exists.
    const { data: invoice } = await service.from('invoices')
      .select('id, org_id').eq('id', invoiceId).is('deleted_at', null).maybeSingle();
    if (!invoice || invoice.org_id !== orgId) return json({ error: 'forbidden' }, 403);

    // ── Validate recipients ────────────────────────────────────────────────
    const toIn = normalizeAddresses(body.to);
    let cc = normalizeAddresses(body.cc);
    let bcc = normalizeAddresses(body.bcc);
    // Cross-list dedupe (priority to > cc > bcc): the same address listed in two headers
    // would otherwise get a duplicate copy from Gmail, and an address meant to stay blind
    // could leak into a visible header if it's ALSO (accidentally) in to/cc.
    cc = cc.filter(a => !toIn.includes(a));
    bcc = bcc.filter(a => !toIn.includes(a) && !cc.includes(a));

    if (toIn.length === 0) return json({ error: 'invalid_recipient' }, 400);
    const allAddresses = [...toIn, ...cc, ...bcc];
    if (allAddresses.length > MAX_RECIPIENTS) return json({ error: 'invalid_recipient' }, 400);
    if (!allAddresses.every(a => EMAIL_RE.test(a))) return json({ error: 'invalid_recipient' }, 400);

    // ── Validate subject / body / attachment ───────────────────────────────
    // Stripped/capped here for the STORED audit row and for a clean 400 up front;
    // _shared/gmail.ts strips CR/LF again independently as a MIME header-injection guard,
    // so the two checks are intentionally redundant rather than trusting one call site.
    const subjectClean = subject.replace(/[\r\n]+/g, ' ').trim().slice(0, MAX_SUBJECT);
    if (!subjectClean) return json({ error: 'subject required' }, 400);
    if (bodyText.length > MAX_BODY) return json({ error: 'bodyText too long' }, 400);
    if (attachPdf && body.pdfBase64!.length > MAX_PDF_B64) return json({ error: 'attachment_too_large' }, 400);

    // ── Resolve the org's Google connection + "From" identity ──────────────
    // Checked BEFORE the idempotency insert below: "never connected" is a known, permanent,
    // non-retryable precondition — creating a sending→failed audit row for it would just be
    // noise every time an admin tries to send before finishing Settings setup.
    const { data: account } = await service.from('org_google_accounts')
      .select('google_email').eq('org_id', orgId).maybeSingle();
    if (!account) return json({ error: 'google_not_connected' }, 400);

    const { data: org } = await service.from('organizations')
      .select('name, invoice_settings').eq('id', orgId).maybeSingle();
    const settings = (org?.invoice_settings ?? {}) as {
      email_from?: string; email_from_name?: string; email_reply_to?: string; email_bcc_self?: boolean;
    };
    const fromEmail: string = settings.email_from || account.google_email;
    const fromName: string | undefined = settings.email_from_name || org?.name || undefined;
    const replyTo: string | null = settings.email_reply_to || null;
    // email_bcc_self is an org SETTING, not user input, so it's applied after (and exempt
    // from) the anti-abuse MAX_RECIPIENTS cap above — it must never be the reason a
    // legitimately-sized send to real recipients gets rejected.
    if (settings.email_bcc_self && fromEmail && !toIn.includes(fromEmail) && !cc.includes(fromEmail) && !bcc.includes(fromEmail)) {
      bcc = [...bcc, fromEmail];
    }

    // ── Idempotency: insert-first ───────────────────────────────────────────
    const sendRow = {
      org_id: orgId, invoice_id: invoiceId, kind, channel: 'gmail' as const,
      status: 'sending' as const,
      to_emails: toIn, cc_emails: cc, bcc_emails: bcc,
      from_email: fromEmail, subject: subjectClean,
      body_preview: bodyText.slice(0, 500),
      had_attachment: attachPdf,
      share_url: body.shareUrl ?? null,
      idempotency_key: idempotencyKey,
      sent_by: user.id,
      updated_at: new Date().toISOString(),
    };

    let sendId: string;
    const { data: inserted, error: insertErr } = await service.from('invoice_sends')
      .insert(sendRow).select('id').single();

    if (insertErr) {
      if ((insertErr as { code?: string }).code !== '23505') throw insertErr;
      // Same idempotency key seen before — look at what happened to it rather than
      // silently resending. service_role bypasses `hide_deleted`, so exclude a
      // soft-deleted row explicitly (it can still hold the unique key but must not be
      // treated as a live in-progress/sent/failed send).
      const { data: existing } = await service.from('invoice_sends')
        .select('id, status, provider_message_id, invoice_id')
        .eq('org_id', orgId).eq('idempotency_key', idempotencyKey).is('deleted_at', null).maybeSingle();
      if (!existing) throw insertErr; // conflicting row is gone/soft-deleted — surface as a real error rather than guessing
      if (existing.invoice_id !== invoiceId) {
        // The SAME key reused for a DIFFERENT invoice is a caller bug, not a legitimate
        // retry — refuse rather than silently attaching this send to the wrong invoice.
        return json({ error: 'idempotency_key_reused_for_different_invoice' }, 409);
      }
      if (existing.status === 'sent') {
        return json({ ok: true, sendId: existing.id, messageId: existing.provider_message_id, alreadySent: true });
      }
      if (existing.status === 'sending') return json({ error: 'in_progress' }, 409);
      // 'failed' → flip back to 'sending' and retry, refreshing the stored content to
      // THIS attempt's (possibly corrected) values so the audit row reflects what was
      // actually resent rather than the failed attempt's stale content.
      const { error: flipErr } = await service.from('invoice_sends')
        .update({ ...sendRow, status: 'sending', error: null })
        .eq('id', existing.id);
      if (flipErr) throw flipErr;
      sendId = existing.id;
    } else {
      sendId = inserted!.id;
    }

    // ── Send ─────────────────────────────────────────────────────────────
    try {
      const mail: OutgoingMail = {
        from: { email: fromEmail, name: fromName },
        to: toIn,
        cc: cc.length ? cc : undefined,
        bcc: bcc.length ? bcc : undefined,
        replyTo, subject: subjectClean, text: bodyText,
      };
      if (attachPdf) {
        const attachment: MailAttachment = { filename: body.pdfFilename!, mimeType: 'application/pdf', base64: body.pdfBase64! };
        mail.attachments = [attachment];
      }

      const accessToken = await getOrgAccessToken(service, orgId);
      const result = await gmailSend(accessToken, mail);

      await service.from('invoice_sends').update({
        status: 'sent', provider_message_id: result.id, provider_thread_id: result.threadId,
        error: null, updated_at: new Date().toISOString(),
      }).eq('id', sendId);

      return json({ ok: true, sendId, messageId: result.id });
    } catch (sendErr) {
      // Never leave the row stuck in 'sending' — this UPDATE always runs before the
      // function returns, whichever branch below decided the response.
      const { code, status } = classifySendError(sendErr);
      await service.from('invoice_sends').update({
        status: 'failed', error: (sendErr as Error).message, updated_at: new Date().toISOString(),
      }).eq('id', sendId);
      return json({ error: code }, status);
    }
  } catch (err) {
    console.error('[send-invoice-email] failed:', (err as Error).message);
    return json({ error: (err as Error).message }, 500);
  }
});
