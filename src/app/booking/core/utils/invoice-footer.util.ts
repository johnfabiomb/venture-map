// Replaces template keys in an org's invoice footer with a booking's real figures, so the
// payment-terms note (deposit / balance) is always correct for that booking's deposit %.
//
// The key list now lives in ONE place: INVOICE_FOOTER_KEYS below. renderTemplate derives
// its pattern from the value map, and Settings renders the help text from the same array,
// so a new key cannot be added to two of the three and forgotten in the third.

import { TemplateKeyDef, renderTemplate, formatMoney } from './template.util';

export const INVOICE_FOOTER_KEY_DEFS: readonly TemplateKeyDef[] = [
  { key: '{depositPercent}', describe: 'Deposit as a percentage, e.g. 30%' },
  { key: '{deposit}',        describe: 'Deposit amount' },
  { key: '{balancePercent}', describe: 'Remaining percentage, e.g. 70%' },
  { key: '{balance}',        describe: 'Remaining amount' },
  { key: '{total}',          describe: 'Invoice total' },
  // Kept working because live footers may already use it, but now DOCUMENTED rather than
  // hidden in the implementation the way it was before.
  { key: '{restOfPayment}',  describe: 'Alias for {balance}' },
] as const;

/** Back-compat: the original export was a plain array of key strings. */
export const INVOICE_FOOTER_KEYS = INVOICE_FOOTER_KEY_DEFS.map(k => k.key);

export function renderInvoiceFooter(
  template: string | null | undefined,
  opts: { total: number; depositPercent: number | null; currency: string },
): string {
  if (!template) return '';
  const pct = Math.max(0, Math.min(100, opts.depositPercent ?? 0));
  const deposit = Math.round(opts.total * pct) / 100;            // pct is whole (e.g. 50 → 50%)
  const balance = Math.round((opts.total - deposit) * 100) / 100;
  const money = (n: number) => formatMoney(n, opts.currency);
  return renderTemplate(template, {
    '{deposit}': money(deposit),
    '{balance}': money(balance),
    '{restOfPayment}': money(balance),
    '{depositPercent}': `${pct}%`,
    '{balancePercent}': `${100 - pct}%`,
    '{total}': money(opts.total),
  });
}
