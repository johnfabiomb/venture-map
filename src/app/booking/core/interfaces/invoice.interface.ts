import { ServicePricing } from './org.interface';
import { InvoiceDetails } from '@booking/core/services/booking-admin.service';

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
  due_date: string | null;
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
  // yyyy-MM-dd. Omit it and `save_invoice` fills it at ISSUE time from the org's
  // payment terms; send it to override. Patch-guarded, so the booking form's
  // line-items-only saves leave an existing due date alone.
  due_date?: string | null;
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
  /** When payment is expected. Null on a draft — nothing has been issued to anyone yet. */
  due_date: string | null;
  /** The client's stored address, for prefilling the send dialog. Null for a walk-in. */
  client_email: string | null;
  /** Issued, past its due date, and still something owed. Computed in SQL on read. */
  is_overdue: boolean;
  /** Days past the due date; 0 when not overdue or when there is no due date. */
  days_overdue: number;
}

/**
 * One row of `invoice_sends` — the record of an invoice actually leaving.
 *
 * `drafted` is deliberately NOT `sent`: the mailto path hands the message to the owner's
 * own mail client, where delivery is unobservable. Claiming "sent" there would be a lie
 * the owner might rely on when chasing payment.
 */
export interface InvoiceSend {
  id: string;
  invoice_id: string;
  kind: 'invoice' | 'reminder';
  channel: 'gmail' | 'mailto';
  status: 'sending' | 'sent' | 'failed' | 'drafted';
  to_emails: string[];
  cc_emails: string[];
  subject: string | null;
  had_attachment: boolean;
  error: string | null;
  created_at: string;
}

/**
 * A soft-deleted row, as returned by list_deleted_bookings / list_deleted_invoices.
 *
 * These come from SECURITY DEFINER functions rather than a normal query because the
 * `hide_deleted` RESTRICTIVE policy means an admin's own SELECT can never return a deleted
 * row — which is exactly why deleted work was unreachable before restore existed.
 */
export interface DeletedBooking {
  id: string;
  booking_ref: string;
  title: string | null;
  status: string;
  start_at: string;
  price_total: number;
  deleted_at: string;
  client_name: string | null;
}

export interface DeletedInvoice {
  id: string;
  status: InvoiceStatus;
  title: string | null;
  invoice_number: string | null;
  service_date: string | null;
  deleted_at: string;
  has_booking: boolean;
  client_name: string | null;
  amount_gross: number;
}

/** Outcome of restore_booking — slots can fail individually, see `slots_conflicted`. */
export interface RestoreResult {
  restored: boolean;
  reason?: string;
  slots_restored?: number;
  /** Blocks whose time has since been given to another job; the booking is still restored. */
  slots_conflicted?: Array<{ start_at: string; end_at: string; label: string | null }>;
}

/** What Settings is allowed to know about the org's Google connection — never the token. */
export interface GoogleConnection {
  connected: boolean;
  email?: string;
  /** Connected is not enough: a connection predating the gmail.send scope cannot send. */
  can_send?: boolean;
  scopes?: string[];
  connected_at?: string;
  last_used_at?: string | null;
  last_error?: string | null;
}

/**
 * One charge line on a PRINTED invoice, as returned inside an `InvoiceBundle` — description
 * + amount only. Distinct from the editable `LineItem` above, which also carries
 * `serviceId`/`hours` for the line-items editor; a rendered invoice never needs those.
 */
export interface InvoiceLineItem { description: string; amount: number; }

/**
 * The full read model behind the printable A4 invoice sheet (`InvoiceSheetComponent`) and
 * every page that renders one from it (the public invoice page; the Stripe pay flow around
 * it). Returned by `get_invoice` / `get_invoice_by_token` / `get_invoice_by_id`.
 *
 * NOTE: `payment-success.component.ts` intentionally keeps its own smaller, separately
 * declared `InvoiceBundle`-shaped type for its receipt view rather than importing this one —
 * it renders a different (reduced) summary, not the full sheet, so it doesn't need every
 * field here (e.g. no `due_date`, no full client billing detail).
 */
export interface InvoiceBundle {
  org: { name: string; currency: string; invoice_details: InvoiceDetails };
  client: { name: string; company: string | null; vat_number: string | null; billing_address: string | null; email: string | null; phone: string | null } | null;
  // NULL for a standalone invoice — work billed with no time slot. Everything that
  // reads this must null-check it; it is the whole point of the invoice restructure.
  booking: { id: string; booking_ref: string; location: string | null; start_at: string; end_at: string; status: string; price_total: number; deposit_percent: number | null } | null;
  invoice: {
    id: string | null;
    line_items: InvoiceLineItem[];
    notes: string | null;
    /** The invoice's own title, falling back to the booking's. Drives {invoiceTitle}. */
    title: string | null;
    issue_date: string | null;
    customized: boolean;
    total: number;
    number: string | null;        // formatted server-side with the org's prefix
    service_date: string | null;  // the invoice's own date; falls back to the booking's
    due_date: string | null;      // when payment is expected; null on a draft
    status: string | null;
  };
  total_paid: number;
  payments: { amount: number; method: string; paid_at: string | null }[];
}
