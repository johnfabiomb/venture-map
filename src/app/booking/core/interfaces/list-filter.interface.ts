/**
 * The shared shape of a filtered list page (Bookings, Invoices, Work, Clients).
 *
 * The old single-select tabs could not express "pending AND unpaid in October",
 * because a tab mixed four different questions into one row: WHEN a job is, WHAT
 * state it is in, whether it is PAID, and what KIND it is. Those are separate
 * dimensions, so they are modelled separately: multi-select within a dimension
 * (an OR), combined across dimensions (an AND).
 *
 * An EMPTY selection means "no restriction", never "nothing" — that is what makes a
 * freshly opened page show everything rather than an empty table.
 */

export type PeriodPreset =
  | 'all' | 'this_month' | 'last_month' | 'this_quarter' | 'this_year' | 'last_year' | 'custom';

/** A resolved window. `from`/`to` are inclusive 'YYYY-MM-DD' in local time, null = open ended. */
export interface PeriodState {
  preset: PeriodPreset;
  from: string | null;
  to: string | null;
  /** WHICH date the window applies to. A page with two meaningful dates (an invoice
   *  has an issue date for VAT and a service date for when the work happened) offers
   *  the choice rather than picking one and being wrong half the time. */
  field: string;
}

export interface FilterOption {
  value: string;
  label: string;
  /** Rows this option would add, given everything else currently picked. */
  count?: number;
  /** Draws the count in alert colours (something owed, something overdue). */
  alert?: boolean;
}

export interface FilterGroup {
  key: string;
  label: string;
  options: FilterOption[];
}

/** group key → selected values. An absent or empty array means the group is off. */
export type FilterState = Record<string, string[]>;

export const EMPTY_PERIOD: PeriodState = { preset: 'all', from: null, to: null, field: '' };

/** True when nothing at all is narrowing the list. */
export const isFilterEmpty = (s: FilterState, p: PeriodState): boolean =>
  p.preset === 'all' && Object.values(s).every(v => !v?.length);

/** Does a row's value pass a group? An empty group passes everything. */
export const passes = (selected: string[] | undefined, value: string | null | undefined): boolean =>
  !selected?.length || (value != null && selected.includes(value));

/**
 * Counts for one group's options, each computed with THAT group's own selection
 * ignored but every other group applied.
 *
 * That is what makes a count worth reading: "Unpaid 18" has to mean "18 more rows if
 * you tick this", not "18 in the whole table". Counting with the group's own
 * selection applied would show 0 against every option you had not ticked.
 */
export function countsFor<T>(
  rows: readonly T[],
  options: readonly string[],
  passesOtherGroups: (row: T) => boolean,
  matchesOption: (row: T, option: string) => boolean,
): Record<string, number> {
  const base = rows.filter(passesOtherGroups);
  const out: Record<string, number> = {};
  for (const o of options) out[o] = base.reduce((n, r) => n + (matchesOption(r, o) ? 1 : 0), 0);
  return out;
}
