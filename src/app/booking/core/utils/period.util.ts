import { PeriodPreset, PeriodState } from '@booking/core/interfaces/list-filter.interface';

/**
 * Period presets resolved in LOCAL time, deliberately.
 *
 * These windows are compared against date columns (`service_date`, `issue_date`) and
 * against timestamps rendered to the user in their own day. Resolving in UTC would put
 * a job on the 1st at 00:30 Malta time into the previous month for anyone reading the
 * list, which is exactly the kind of off-by-one that makes a money page untrustworthy.
 */

const iso = (d: Date): string =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

/** Last day of the month `d` lands in. Day 0 of the NEXT month, which handles February. */
const endOfMonth = (y: number, m: number): Date => new Date(y, m + 1, 0);

export const PERIOD_LABELS: ReadonlyArray<{ value: PeriodPreset; label: string }> = [
  { value: 'all',          label: 'All time' },
  { value: 'this_month',   label: 'This month' },
  { value: 'last_month',   label: 'Last month' },
  { value: 'this_quarter', label: 'This quarter' },
  { value: 'this_year',    label: 'This year' },
  { value: 'last_year',    label: 'Last year' },
  { value: 'custom',       label: 'Custom range…' },
];

/**
 * Turn a preset into an inclusive window. 'custom' keeps whatever dates are already
 * on the state (the picker owns them); 'all' clears them.
 */
export function resolvePeriod(preset: PeriodPreset, current: PeriodState, ref = new Date()): PeriodState {
  const y = ref.getFullYear(), m = ref.getMonth();
  switch (preset) {
    case 'all':
      return { ...current, preset, from: null, to: null };
    case 'this_month':
      return { ...current, preset, from: iso(new Date(y, m, 1)), to: iso(endOfMonth(y, m)) };
    case 'last_month':
      return { ...current, preset, from: iso(new Date(y, m - 1, 1)), to: iso(endOfMonth(y, m - 1)) };
    case 'this_quarter': {
      const q = Math.floor(m / 3) * 3;
      return { ...current, preset, from: iso(new Date(y, q, 1)), to: iso(endOfMonth(y, q + 2)) };
    }
    case 'this_year':
      return { ...current, preset, from: iso(new Date(y, 0, 1)), to: iso(new Date(y, 11, 31)) };
    case 'last_year':
      return { ...current, preset, from: iso(new Date(y - 1, 0, 1)), to: iso(new Date(y - 1, 11, 31)) };
    case 'custom':
      return { ...current, preset };
  }
}

/** Human summary of the window, for the line that says what is on screen. */
export function periodLabel(p: PeriodState): string {
  if (p.preset === 'all') return 'All time';
  if (p.preset !== 'custom') {
    return PERIOD_LABELS.find(x => x.value === p.preset)?.label ?? '';
  }
  const fmt = (s: string | null) =>
    s ? new Date(s + 'T00:00:00').toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
  if (p.from && p.to) return `${fmt(p.from)} to ${fmt(p.to)}`;
  if (p.from) return `From ${fmt(p.from)}`;
  if (p.to) return `Up to ${fmt(p.to)}`;
  return 'All time';
}

/**
 * Is a date inside the window? Accepts a date string or a timestamp and compares on
 * the DAY, so an end bound of the 31st includes work done at 18:00 on the 31st.
 */
export function inPeriod(value: string | null | undefined, p: PeriodState): boolean {
  if (p.preset === 'all' || (!p.from && !p.to)) return true;
  if (!value) return false;                 // an undated row cannot be in a dated window
  const day = value.length >= 10 ? value.slice(0, 10) : value;
  if (p.from && day < p.from) return false;
  if (p.to   && day > p.to)   return false;
  return true;
}

/**
 * The day a TIMESTAMP falls on, in the reader's timezone, as 'YYYY-MM-DD'.
 * ('sv-SE' is the locale that renders dates in ISO order, which is why it is used
 * here rather than hand-assembling the parts.)
 *
 * Needed because a period is a window of DAYS while `start_at` / `paid_at` are
 * instants in UTC: a job at 00:30 on 1 November in Malta is 23:30 on 31 October in
 * UTC, and comparing the raw string would file it under the wrong month.
 */
export const localDay = (value: string | null | undefined): string | null =>
  value ? new Date(value).toLocaleDateString('sv-SE') : null;

/** `inPeriod` for a timestamp rather than a date column. */
export const inPeriodAt = (ts: string | null | undefined, p: PeriodState): boolean =>
  inPeriod(localDay(ts), p);

/**
 * Widen a window before asking the server for it.
 *
 * The exact test is done locally (see `inPeriodAt`), because only the browser knows
 * the reader's timezone; the server bound is just there to stop the query dragging
 * back years of rows. A day either side covers every real offset.
 */
export function widen(p: PeriodState, days = 1): { from: string | null; to: string | null } {
  const shift = (s: string | null, by: number): string | null => {
    if (!s) return null;
    const d = new Date(s + 'T00:00:00');
    d.setDate(d.getDate() + by);
    return d.toLocaleDateString('sv-SE');
  };
  return { from: shift(p.from, -days), to: shift(p.to, days) };
}
