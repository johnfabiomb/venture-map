/**
 * Shapes returned by the `get_earnings` RPC — the single definition of the money.
 *
 * Two bases are returned deliberately, because they answer different questions:
 *   * work done — issued invoices bucketed by SERVICE DATE (when the work happened)
 *   * cash      — completed payments bucketed by PAYMENT DATE (when money arrived)
 *
 * Nothing here should be recomputed in the client. If a figure is missing, add it to
 * the RPC rather than deriving it on screen — divergent client-side money maths is
 * precisely what the invoice restructure exists to remove.
 */

/** Which reading of a period is on screen. */
export type EarningsBasis = 'cash' | 'work';

export interface EarningsTotals {
  work_done_gross: number;
  work_done_net: number;    // gross − expenses; equal to gross until expenses are recorded
  cash: number;
  outstanding: number;      // summed per invoice, floored at zero
  invoices: number;
}

/** One month bucket. `month` is 'YYYY-MM' in the org's timezone. */
export interface EarningsMonth {
  month: string;
  amount: number;
}

/** Grouped by LINE, never by invoice — one invoice can mix services.
 *  A null `service_id` is the "unattributed" bucket, not an error. */
export interface EarningsByService {
  service_id: string | null;
  service_name: string | null;
  amount: number;
}

export interface EarningsByWorker {
  staff_id: string | null;
  staff_name: string | null;
  gross: number;
  cash: number;
}

export interface Earnings {
  totals: EarningsTotals;
  work_done_by_month: EarningsMonth[];
  cash_by_month: EarningsMonth[];
  by_service: EarningsByService[];
  by_worker: EarningsByWorker[];
}

// ── Drill-down: what is BEHIND one month of one basis (§34) ────────────────
// `get_earnings_detail` mirrors get_earnings' filters exactly, so `total` here
// always equals that month's bar. Never re-sum these rows on screen to produce a
// different headline: if a figure is missing, it belongs in the RPC.

/** One charge on an invoice. Present only on the 'work' basis. */
export interface EarningsDetailLine {
  description: string | null;
  amount: number;
  hours: number | null;
  service_name: string | null;
}

/**
 * One document behind a month. The basis decides which identity it carries:
 *   * work — an INVOICE: `invoice_id` set, `amount` is its gross, `lines` populated
 *   * cash — a PAYMENT: `payment_id` set, `amount` is what arrived, `paid_on` is the
 *            date it was BUCKETED by, which is why it cannot contradict its month
 */
export interface EarningsDetailRow {
  invoice_id: string | null;
  invoice_number: string | null;
  title: string | null;
  client_name: string | null;
  staff_name: string | null;
  booking_id: string | null;
  booking_ref: string | null;
  amount: number;

  // work basis
  service_date?: string | null;
  paid?: number;
  balance?: number;
  expenses?: number;
  lines?: EarningsDetailLine[];

  // cash basis
  payment_id?: string | null;
  method?: string | null;
  type?: string | null;
  note?: string | null;
  paid_on?: string | null;
}

export interface EarningsDetail {
  basis: EarningsBasis;
  month: string;            // 'YYYY-MM'
  count: number;
  total: number;
  rows: EarningsDetailRow[];
}
