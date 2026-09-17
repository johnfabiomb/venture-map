import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders as _cors } from '../_shared/cors.ts';
import { platformStripe, resolveOrgStripe, chargeRouting } from '../_shared/stripe.ts';
const corsHeaders = { ..._cors, 'Content-Type': 'application/json' };
const json = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: corsHeaders });

// Card payment for an INVOICE, reached from its share link (/book/invoice?token=…).
//
// Deliberately separate from create-payment-intent rather than another branch inside it:
// that function resolves a BOOKING from a pay-link token and reads booking.allow_card,
// deposit_percent and price_total throughout. An invoice has none of those, and the
// booking pay path is live with client links in circulation — so it is left untouched.
//
// BALANCE ONLY: no deposit option on an invoice. There is no deposit concept on the
// record, so "deposit"/"remaining balance" wording is structurally impossible here
// rather than conditionally suppressed. Deposit columns can be added later without
// changing any copy.
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
  try {
    const { token } = await req.json() as { token: string };
    if (!token) return json({ error: 'token required' }, 400);

    const service = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // Resolve the invoice from its own share token. service_role bypasses RLS, so every
    // soft-delete and validity check is made explicitly here.
    const { data: link } = await service.from('invoice_links')
      .select('invoice_id, is_active, expires_at, deleted_at')
      .eq('token', token).maybeSingle();
    if (!link || !link.is_active || link.deleted_at) return json({ error: 'Invalid or expired link' }, 400);
    if (link.expires_at && new Date(link.expires_at) < new Date()) {
      return json({ error: 'Link has expired' }, 400);
    }

    const { data: inv } = await service.from('invoices')
      .select('id, org_id, booking_id, status, number_year, number_seq, title')
      .eq('id', link.invoice_id).is('deleted_at', null).maybeSingle();
    if (!inv) return json({ error: 'Invalid or expired link' }, 400);
    // A draft has not been issued to anyone, and a void invoice is withdrawn.
    if (inv.status !== 'issued') return json({ error: 'This invoice is not open for payment.' }, 400);

    // The amount owed, computed server-side from the invoice's own lines and payments —
    // never from anything the client sends. Same shape as invoice_list.balance_due.
    const [{ data: lines }, { data: pays }] = await Promise.all([
      service.from('invoice_lines').select('amount').eq('invoice_id', inv.id).is('deleted_at', null),
      service.from('payments').select('amount')
        .eq('invoice_id', inv.id).eq('status', 'completed').is('deleted_at', null),
    ]);
    const gross = (lines ?? []).reduce((s: number, l: { amount: number }) => s + Number(l.amount), 0);
    const paid  = (pays  ?? []).reduce((s: number, p: { amount: number }) => s + Number(p.amount), 0);
    const balance = Math.round((gross - paid) * 100) / 100;

    if (balance <= 0) return json({ error: 'This invoice is already fully paid' }, 400);

    const orgStripe = await resolveOrgStripe(service, inv.org_id);
    if (orgStripe.accountId && !orgStripe.chargesEnabled) {
      return json({ error: 'This business has not finished payment setup yet.' }, 400);
    }

    const amountCents = Math.round(balance * 100);
    const routing = chargeRouting(orgStripe, amountCents);
    const stripe = platformStripe();

    const number = inv.number_seq ? `${inv.number_year}-${String(inv.number_seq).padStart(3, '0')}` : inv.id;
    const intentParams = {
      amount: amountCents,
      currency: 'eur',
      description: `${inv.title ?? 'Invoice'} [${number}]`,
      // invoice_id ALWAYS; booking_id too when the invoice has one.
      //
      // Sending invoice_id alone looks tidier but is a double-charge waiting to happen: a
      // booking-linked invoice paid through its invoice link would record a payment with
      // booking_id NULL, and booking_summary joins payments on booking_id, as does
      // create-payment-intent's balance query. The job would read UNPAID and its pay link
      // would offer the FULL amount again — and the Math.min clamp there cannot help,
      // because it is computed from the same blind total.
      //
      // record-payment still keys the confirm + calendar sync off booking_id, so a genuinely
      // standalone invoice (booking_id null) skips both, exactly as before.
      metadata: {
        invoice_id: inv.id,
        ...(inv.booking_id ? { booking_id: inv.booking_id } : {}),
        invoice_number: number,
        org_id: inv.org_id,
        payment_type: 'full',
        token,
      },
      automatic_payment_methods: { enabled: true },
      ...routing.intentParams,
    };
    // Per-request options ONLY for a connected account — never an empty `{}`.
    const intent = routing.requestOptions
      ? await stripe.paymentIntents.create(intentParams, routing.requestOptions)
      : await stripe.paymentIntents.create(intentParams);

    // No `payments` row is written here: an intent is not a payment. It is recorded when
    // money actually moves, idempotently, by confirm-payment and stripe-webhook.
    return json({ clientSecret: intent.client_secret, stripeAccount: orgStripe.accountId, amount: balance });
  } catch (err) {
    return json({ error: (err as Error).message }, 500);
  }
});
