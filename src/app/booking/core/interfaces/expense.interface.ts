/**
 * A cost. One shape covers both kinds, which is why `booking_id` is nullable:
 *   * linked     — incurred FOR a job (second shooter, fuel, parking, props)
 *   * standalone — an overhead belonging to no job (software, insurance, gear)
 *
 * Deliberately NEVER reaches a client: `get_invoice_by_token` serves anon, and an expense
 * row states what you paid your crew and therefore what your margin is.
 */
export interface Expense {
  id: string;
  org_id: string;
  booking_id: string | null;
  category: string;
  description: string;
  amount: number;
  spent_on: string;        // YYYY-MM-DD — the date the money left, what a P&L buckets by
  vendor: string | null;
  notes: string | null;
  /** Rebilled to the client on the invoice. Separates a cost absorbed from one passed on. */
  billable: boolean;
  created_at: string;
}

/** What the editor submits. `id` present = update, absent = insert. */
export interface ExpenseInput {
  id?: string;
  bookingId: string | null;
  category: string;
  description: string;
  amount: number;
  spentOn: string;
  vendor: string | null;
  billable: boolean;
}

/**
 * Starting points for the category field, not a closed list — the column is free text so
 * a category nobody predicted never blocks recording a real cost. Offered as a datalist,
 * the same recipe as the time-block name presets.
 */
export const EXPENSE_CATEGORIES = [
  'Travel',
  'Crew',
  'Equipment',
  'Props & wardrobe',
  'Location fees',
  'Software',
  'Music & licensing',
  'Insurance',
  'Other',
] as const;

/**
 * An expense as the ledger page shows it: the row plus the job and client it belongs to.
 * All three join fields are null for a standalone overhead, which is a normal state here,
 * not missing data.
 */
export interface ExpenseRow extends Expense {
  booking_ref: string | null;
  booking_title: string | null;
  client_name: string | null;
}
