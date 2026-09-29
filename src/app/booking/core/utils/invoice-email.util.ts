/**
 * The invoice and reminder email templates: their placeholder allowlist, the defaults a
 * new org starts with, and the renderer that turns one into the text actually sent.
 *
 * ONE allowlist serves both kinds. A reminder is not a different document — it is the
 * same invoice, said again with the outstanding figure and how late it is — so keeping
 * two key sets would just mean two things to update. `{daysOverdue}` simply renders `0`
 * on an invoice that isn't late.
 */

import { TemplateKeyDef, renderTemplate, formatMoney, formatDate } from './template.util';

export type InvoiceEmailKind = 'invoice' | 'reminder';

export interface EmailTemplate {
  subject: string;
  body: string;
}

/** Rendered in Settings straight from this array — never restated in the HTML. */
export const INVOICE_EMAIL_KEY_DEFS: readonly TemplateKeyDef[] = [
  { key: '{clientFirstName}', describe: 'First name only — for the greeting' },
  { key: '{clientName}',      describe: 'Client or company name' },
  { key: '{invoiceNumber}',   describe: 'e.g. JFMB-2026-129' },
  { key: '{invoiceTitle}',    describe: 'What the invoice is for' },
  { key: '{total}',           describe: 'Invoice total' },
  { key: '{balance}',         describe: 'Still outstanding' },
  { key: '{amountPaid}',      describe: 'Already paid' },
  { key: '{issueDate}',       describe: 'Date issued' },
  { key: '{serviceDate}',     describe: 'When the work happened' },
  { key: '{dueDate}',         describe: 'Payment due date' },
  { key: '{daysOverdue}',     describe: 'Days past due (0 if not overdue)' },
  { key: '{paymentTerms}',    describe: 'e.g. "14 days"' },
  { key: '{invoiceLink}',     describe: 'Link to the live invoice page' },
  { key: '{businessName}',    describe: 'Your business name' },
] as const;

export const DEFAULT_INVOICE_EMAIL: EmailTemplate = {
  subject: 'Invoice {invoiceNumber} from {businessName}',
  body:
`Hi {clientFirstName},

Thanks for your business. Your invoice {invoiceNumber} for {invoiceTitle} is attached as a PDF, and you can also view it online here:

{invoiceLink}

Total: {total}
Payment due: {dueDate}

Any questions, just reply to this email.

{businessName}`,
};

export const DEFAULT_REMINDER_EMAIL: EmailTemplate = {
  subject: 'Reminder: invoice {invoiceNumber} is due',
  body:
`Hi {clientFirstName},

A quick reminder that invoice {invoiceNumber} for {invoiceTitle} has an outstanding balance of {balance}, which was due on {dueDate}.

{invoiceLink}

If you've already sent it, please ignore this — and thank you.

{businessName}`,
};

export function defaultTemplate(kind: InvoiceEmailKind): EmailTemplate {
  return kind === 'reminder' ? DEFAULT_REMINDER_EMAIL : DEFAULT_INVOICE_EMAIL;
}

/** Everything a template can refer to. Assembled by the caller from the invoice bundle. */
export interface InvoiceEmailContext {
  clientName: string | null;
  invoiceNumber: string | null;
  invoiceTitle: string | null;
  total: number;
  balance: number;
  amountPaid: number;
  issueDate: string | null;
  serviceDate: string | null;
  dueDate: string | null;
  daysOverdue: number;
  invoiceLink: string | null;
  businessName: string;
  paymentTermsDays: number | null;
  currency: string;
}

export function renderInvoiceEmail(tpl: EmailTemplate, ctx: InvoiceEmailContext): EmailTemplate {
  const money = (n: number) => formatMoney(n, ctx.currency);
  const name = (ctx.clientName ?? '').trim();
  const values: Record<string, string> = {
    // "Hi there," is the fallback rather than an empty greeting: a walk-in invoice has
    // only a typed contact name, and may have none at all.
    '{clientFirstName}': name ? name.split(/\s+/)[0] : 'there',
    '{clientName}':      name || 'there',
    '{invoiceNumber}':   ctx.invoiceNumber ?? '',
    '{invoiceTitle}':    (ctx.invoiceTitle ?? '').trim() || 'our work together',
    '{total}':           money(ctx.total),
    '{balance}':         money(ctx.balance),
    '{amountPaid}':      money(ctx.amountPaid),
    '{issueDate}':       formatDate(ctx.issueDate),
    '{serviceDate}':     formatDate(ctx.serviceDate),
    '{dueDate}':         formatDate(ctx.dueDate),
    '{daysOverdue}':     String(Math.max(0, ctx.daysOverdue || 0)),
    '{paymentTerms}':    ctx.paymentTermsDays ? `${ctx.paymentTermsDays} days` : '',
    '{invoiceLink}':     ctx.invoiceLink ?? '',
    '{businessName}':    ctx.businessName,
  };
  return {
    subject: renderTemplate(tpl.subject, values),
    body:    renderTemplate(tpl.body, values),
  };
}

/**
 * Build a `mailto:` URL for the draft path.
 *
 * Returns the URL plus whether the body had to be truncated, because the caller has to
 * tell the owner: Outlook on Windows drops mailto URLs somewhere around 2000 characters,
 * and a silently cut email to a client is worse than a warning. A rendered invoice body
 * runs 400-900 chars, so truncation is the exception, not the rule.
 *
 * RFC 6068: recipients are comma-separated. Semicolons fail in several clients.
 */
export function buildMailto(
  to: string[], cc: string[], subject: string, body: string,
): { url: string; truncated: boolean } {
  const enc = encodeURIComponent;
  const head = `mailto:${to.map(enc).join(',')}`;
  const build = (b: string) => {
    const parts = [`subject=${enc(subject)}`, `body=${enc(b)}`];
    if (cc.length) parts.unshift(`cc=${cc.map(enc).join(',')}`);
    return `${head}?${parts.join('&')}`;
  };

  let url = build(body);
  if (url.length <= 1900) return { url, truncated: false };

  // Cut at a paragraph boundary so the truncated version still reads as prose.
  let cut = body;
  while (cut.length > 200 && build(cut + '\n\n…').length > 1900) {
    const i = cut.lastIndexOf('\n\n');
    cut = i > 0 ? cut.slice(0, i) : cut.slice(0, Math.floor(cut.length * 0.8));
  }
  url = build(cut + '\n\n…');
  return { url, truncated: true };
}
