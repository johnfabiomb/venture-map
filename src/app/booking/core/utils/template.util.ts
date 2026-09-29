/**
 * One-pass `{placeholder}` substitution for the org-editable text templates (the invoice
 * footer, the invoice and reminder emails).
 *
 * WHY THIS EXISTS RATHER THAN A REGEX PER CALLER.
 * `invoice-footer.util.ts` used to keep its key list in THREE places — an exported
 * allowlist, a hand-written regex alternation, and the Settings help text — plus an
 * undocumented `{restOfPayment}` alias that appeared in only one of them. Adding a key
 * meant remembering all three, and forgetting the regex made the new key render as
 * literal braces in a document sent to a client. Here the pattern is DERIVED from the
 * value map, so there is no second list that can drift.
 */

/** A placeholder plus the one-line explanation Settings renders next to it. */
export interface TemplateKeyDef {
  /** Brace-inclusive, e.g. `'{total}'`. */
  key: string;
  describe: string;
}

/** Regex metacharacters, so a key containing `{`/`}`/`.` can't corrupt the pattern. */
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Replace every `{key}` present in `values`. Unknown placeholders are left untouched —
 * a template written against a newer key set degrades to visible braces rather than
 * silently deleting text from a client-facing document.
 */
export function renderTemplate(
  template: string | null | undefined,
  values: Readonly<Record<string, string>>,
): string {
  if (!template) return '';
  const keys = Object.keys(values);
  if (!keys.length) return template;
  // Longest-first is belt-and-braces: the closing `}` already makes these tokens
  // unambiguous, but the ordering means a future un-braced key could never be shadowed
  // by a shorter one that happens to prefix it.
  const pattern = keys.slice().sort((a, b) => b.length - a.length).map(escapeRe).join('|');
  return template.replace(new RegExp(pattern, 'g'), m => values[m] ?? m);
}

/**
 * Currency for humans, with a hard fallback.
 * `Intl` throws on an invalid currency code, and the code comes from per-org config the
 * owner types — so a typo in Settings must not blow up the invoice footer or an email.
 */
export function formatMoney(n: number, currency: string): string {
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(n);
  } catch {
    return `${currency} ${n.toFixed(2)}`;
  }
}

/** `2026-09-29` → `29 Sep 2026`. Empty string for a null date, never "Invalid Date". */
export function formatDate(iso: string | null | undefined): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat(undefined, {
    day: 'numeric', month: 'short', year: 'numeric',
  }).format(d);
}
