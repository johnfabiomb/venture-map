import { ServicePricing } from './org.interface';

/**
 * A single charge line on an invoice — description + amount (summed for the total).
 * When it came from a service it also carries `serviceId` + `hours`, which the
 * booking form uses to derive the calendar duration. Invoice renderers read only
 * description + amount; the extra keys are harmless metadata.
 */
export interface LineItem {
  description: string;
  amount: number;
  serviceId?: string | null;
  hours?: number;
}

/** Minimal service shape the line-items editor needs to price a service line. */
export interface ServiceOption {
  id: string;
  name: string;
  pricing: ServicePricing;
}

/** Draft = not yet numbered; issued = counted as revenue; void = cancelled, number kept. */
export type InvoiceStatus = 'draft' | 'issued' | 'void';

/**
 * Raw editable columns of one invoice, keyed on the INVOICE id.
 * This is the read path a standalone invoice needs: `get_invoice` is keyed on a
 * booking, which a standalone invoice doesn't have.
 */
export interface EditableInvoice {
  id: string;
  org_id: string;
  booking_id: string | null;
  client_id: string | null;
  staff_id: string | null;
  service_id: string | null;
  contact_name: string | null;
  title: string | null;
  service_date: string | null;
  issue_date: string | null;
  notes: string | null;
  line_items: LineItem[];
  status: InvoiceStatus;
  number_year: number | null;
  number_seq: number | null;
  amount_expenses: number;
}

/**
 * What `save_invoice` accepts. The RPC PATCHES: only the keys actually present here
 * are written, and a key present with `null` clears that column. So omit a field to
 * leave it untouched — never send `undefined` expecting it to be preserved, and never
 * send the whole object when you only mean to change part of it.
 */
export interface InvoiceInput {
  id?: string;
  booking_id?: string | null;
  client_id?: string | null;
  staff_id?: string | null;
  service_id?: string | null;
  contact_name?: string | null;
  title?: string | null;
  service_date?: string | null;   // yyyy-MM-dd
  issue_date?: string | null;     // yyyy-MM-dd — also decides the invoice number's year
  notes?: string | null;
  amount_expenses?: number;
  status?: InvoiceStatus;
}

/**
 * One row of the `invoice_list` view — the invoice-rooted read model.
 *
 * `id` is the INVOICE id, not a booking id. `booking_id` is separate and may be null
 * (a standalone invoice: work billed with no time slot). Anything that routes to
 * `/book/invoice/:id` or `/bookings/invoice-edit/:id` needs `booking_id`, so guard it
 * on `has_booking`.
 *
 * Every money field is computed in SQL — gross from the invoice's lines, net after
 * expenses, paid from linked payments, and `balance_due` floored at zero per invoice.
 * Never recompute them client-side; that divergence is what this restructure removes.
 */
export interface InvoiceListRow {
  id: string;
  booking_id: string | null;
  has_booking: boolean;
  status: InvoiceStatus;
  invoice_number: string | null;   // pre-formatted with the org's prefix, e.g. "JFMB-2026-125"
  number_year: number | null;
  number_seq: number | null;
  title: string | null;
  service_date: string | null;     // when the work happened — drives "work done" earnings
  issue_date: string | null;
  notes: string | null;
  client_id: string | null;
  client_name: string | null;
  staff_id: string | null;
  staff_name: string | null;
  service_id: string | null;
  service_name: string | null;     // null when the invoice's lines span several services
  booking_ref: string | null;
  booking_start_at: string | null;
  booking_status: string | null;
  amount_gross: number;
  amount_net: number;
  amount_expenses: number;
  amount_paid: number;
  balance_due: number;
  payment_status: 'unpaid' | 'partial' | 'paid';
}
