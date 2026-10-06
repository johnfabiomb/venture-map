/**
 * Shapes returned by the `get_profit` RPC — income against what it cost.
 *
 * Companion to `get_earnings`, which answers "what did I bill". This answers "what did I
 * keep", which the Invoices page structurally cannot: expenses attach to a JOB, invoices
 * are DOCUMENTS, and an overhead belongs to no invoice at all.
 *
 * Income is on the WORK-DONE basis (issued invoices by service date) because expenses
 * bucket by the date the money left. Nothing here is recomputed in the client — if a
 * figure is missing, add it to the RPC.
 */

export interface ProfitTotals {
  income: number;
  expenses: number;
  profit: number;
  /** Costs rebilled to the client. Already inside `income` as invoice lines, so this is
   *  reported for context and must never be subtracted again. */
  billable_expenses: number;
}

export interface ProfitMonth {
  month: string;      // 'YYYY-MM'
  income: number;
  expenses: number;
  profit: number;
}

export interface ProfitCategory {
  category: string;
  amount: number;
}

export interface ProfitClient {
  client_id: string | null;   // null = Unattributed (an overhead with no job)
  client_name: string;
  income: number;
  expenses: number;
  profit: number;
}

export interface Profit {
  totals: ProfitTotals;
  by_month: ProfitMonth[];
  by_category: ProfitCategory[];
  by_client: ProfitClient[];
}
