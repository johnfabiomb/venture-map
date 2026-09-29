// Builds an RFC 2822 MIME message and sends it through the Gmail API's
// users.messages.send, given an already-valid per-org access token (see
// _shared/google-oauth.ts's getOrgAccessToken). Pure MIME/HTTP — no Supabase import,
// no knowledge of invoices; send-invoice-email owns all of that.

export interface MailAddress {
  email: string;
  name?: string | null;
}

export interface MailAttachment {
  filename: string;
  mimeType: string;
  base64: string;
}

export interface OutgoingMail {
  from: MailAddress;
  to: string[];
  cc?: string[];
  bcc?: string[];
  replyTo?: string | null;
  subject: string;
  text: string;
  attachments?: MailAttachment[];
}

/** Thrown by gmailSend on a non-2xx from the Gmail API, typed so callers can classify by status/body without regexing a message string. */
export class GmailApiError extends Error {
  constructor(public readonly status: number, public readonly body: string) {
    super(`Gmail send failed (${status}): ${body}`);
    this.name = 'GmailApiError';
  }
}

// MIME header injection guard: a bare CR or LF inside a header value could inject an
// extra header line (or start of a forged body) into the raw message. Strip rather than
// reject — send-invoice-email already validates its input, but this module must be safe
// on its own even if called directly with something unvalidated.
function stripHeaderUnsafe(s: string): string {
  return s.replace(/[\r\n]+/g, ' ').trim();
}

// RFC 2047 encoded-word, used for the From display name and Subject ONLY when they
// contain non-ASCII (this business has Serbian/Maltese clients — "Đorđe", "Żużana" —
// and a raw UTF-8 byte in a header is not legal RFC 2822). Uses STANDARD base64 (not
// base64url) — encoded-words are specified with the standard alphabet.
function rfc2047Encode(s: string): string {
  // \x00-\x7F is deliberate here (not a stray control-character escape): the whole point
  // of this check is "does this string contain a byte outside 7-bit ASCII", and 0x00-0x1F
  // legitimately belong to that ASCII range.
  // deno-lint-ignore no-control-regex
  if (!/[^\x00-\x7F]/.test(s)) return s;
  const bytes = new TextEncoder().encode(s);
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return `=?UTF-8?B?${btoa(binary)}?=`;
}

function wrapBase64(b64: string): string {
  const lines: string[] = [];
  for (let i = 0; i < b64.length; i += 76) lines.push(b64.slice(i, i + 76));
  return lines.join('\r\n');
}

// Encodes arbitrary UTF-8 TEXT (the email body) as base64 via raw bytes → binary string →
// btoa, avoiding the classic btoa(unescape(encodeURIComponent(x))) hack — that hack
// mangles multi-byte characters for some inputs. Paired with declaring
// Content-Transfer-Encoding: base64 on the text part below, this is what makes the
// ASSEMBLED message pure ASCII, which is what makes toBase64Url's plain btoa() safe.
function base64EncodeUtf8Text(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return wrapBase64(btoa(binary));
}

function formatFrom(from: MailAddress): string {
  const email = stripHeaderUnsafe(from.email);
  const rawName = from.name?.trim();
  if (!rawName) return email;
  const name = stripHeaderUnsafe(rawName);
  // deno-lint-ignore no-control-regex -- see rfc2047Encode above: intentional ASCII-range check
  if (/[^\x00-\x7F]/.test(name)) {
    // Non-ASCII display name → RFC 2047 encoded-word. NOT wrapped in quotes: the
    // encoded-word already stands in for the whole display-name token: quoting it would
    // send the literal "=?UTF-8?B?...?=" text to the recipient's mail client instead of
    // decoding it.
    return `${rfc2047Encode(name)} <${email}>`;
  }
  // ASCII — a normal quoted display name; escape embedded quotes/backslashes (RFC 5322 §3.2.4).
  const escaped = name.replace(/(["\\])/g, '\\$1');
  return `"${escaped}" <${email}>`;
}

/**
 * Assemble a multipart/mixed RFC 2822 message as a plain string. The result is
 * GUARANTEED pure ASCII by construction:
 *   - headers are RFC 2047-encoded when non-ASCII (From display name, Subject)
 *   - the text part is declared `Content-Transfer-Encoding: base64` and IS base64
 *   - every attachment part is already base64 (re-wrapped to 76 cols defensively)
 * That guarantee is exactly what makes toBase64Url's plain `btoa(raw)` safe to call on
 * the output — no unescape/encodeURIComponent workaround needed anywhere in this file.
 */
export function buildMimeMessage(mail: OutgoingMail): string {
  const boundary = `bnd_${crypto.randomUUID()}`;

  const headers: string[] = [
    `From: ${formatFrom(mail.from)}`,
    `To: ${mail.to.map(stripHeaderUnsafe).join(', ')}`,
  ];
  if (mail.cc?.length) headers.push(`Cc: ${mail.cc.map(stripHeaderUnsafe).join(', ')}`);
  // A Bcc: header in the RAW message IS honoured by the Gmail API for the send envelope
  // (those recipients get a copy) while being stripped from what every recipient actually
  // sees — the same semantics as SMTP Bcc, just expressed in the raw MIME we hand Gmail.
  if (mail.bcc?.length) headers.push(`Bcc: ${mail.bcc.map(stripHeaderUnsafe).join(', ')}`);
  if (mail.replyTo) headers.push(`Reply-To: ${stripHeaderUnsafe(mail.replyTo)}`);
  headers.push(`Subject: ${rfc2047Encode(stripHeaderUnsafe(mail.subject))}`);
  headers.push('MIME-Version: 1.0');
  headers.push(`Content-Type: multipart/mixed; boundary="${boundary}"`);

  const parts: string[] = [
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: base64',
    '',
    base64EncodeUtf8Text(mail.text),
  ];

  for (const att of mail.attachments ?? []) {
    // Escape stray quotes in the filename so it can't break out of the quoted
    // filename="..." attribute (not a header-injection risk without CR/LF, but a
    // malformed attachment name is still worth avoiding).
    const filename = stripHeaderUnsafe(att.filename).replace(/(["\\])/g, '\\$1');
    const mimeType = stripHeaderUnsafe(att.mimeType);
    parts.push(
      `--${boundary}`,
      `Content-Type: ${mimeType}; name="${filename}"`,
      `Content-Disposition: attachment; filename="${filename}"`,
      'Content-Transfer-Encoding: base64',
      '',
      // The attachment arrives already base64 — strip any existing whitespace/newlines
      // before re-wrapping so we never rely on the caller having wrapped it at all, let
      // alone at 76 columns.
      wrapBase64(att.base64.replace(/\s+/g, '')),
    );
  }
  parts.push(`--${boundary}--`);

  return [...headers, '', ...parts].join('\r\n');
}

/**
 * `raw` is guaranteed pure ASCII by buildMimeMessage's construction, so a plain `btoa()`
 * is safe here — never `btoa(unescape(encodeURIComponent(x)))`. That hack is the classic
 * way to "support UTF-8" in browser base64 encoding, but it corrupts non-Latin characters
 * for various inputs; this business has Serbian/Maltese clients, so getting this wrong
 * would silently mangle exactly the names most likely to need it.
 */
export function toBase64Url(raw: string): string {
  return btoa(raw).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/** POST the assembled message to Gmail's send endpoint using the caller's org-scoped access token. */
export async function gmailSend(accessToken: string, mail: OutgoingMail): Promise<{ id: string; threadId: string }> {
  const raw = toBase64Url(buildMimeMessage(mail));
  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ raw }),
  });
  if (!res.ok) throw new GmailApiError(res.status, await res.text());
  const data = await res.json();
  return { id: data.id, threadId: data.threadId };
}
