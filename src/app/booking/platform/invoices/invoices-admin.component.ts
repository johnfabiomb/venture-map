import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingAdminService } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { InvoiceListRow, DeletedInvoice } from '@booking/core/interfaces/invoice.interface';
import { InvoiceSendComponent } from '@booking/ui/invoice-send/invoice-send.component';
import { InvoiceEmailKind } from '@booking/core/utils/invoice-email.util';

/** What a row's money actually is. */
type PaymentStatus = 'unpaid' | 'partial' | 'paid';
/** `overdue` is a CROSS-CUTTING tab, not a payment status — an overdue invoice is also
 *  unpaid or partial. Kept out of PaymentStatus so the two can never be conflated. */
/** `deleted` is a different KIND of tab again: its rows come from an RPC (the hide_deleted
 *  policy blocks a normal read) and carry a different shape, so it renders its own table. */
type InvoiceTab = 'all' | PaymentStatus | 'overdue' | 'deleted';
// Keyed on PaymentStatus, NOT on the tab union: statusLabel() renders a row's payment
// status, and no row's payment status is ever "overdue".
const STATUS_LABEL: Record<PaymentStatus, string> = {
  unpaid: 'Unpaid', partial: 'Partial', paid: 'Paid',
};

// The accounting view, read from the `invoice_list` view — the invoice IS the money
// record. It may be attached to a booking (the usual case) or stand alone: work billed
// with no time slot. The old version filtered the bookings list, which is exactly why a
// bookingless invoice could not exist.
//
// Money is NOT computed here. gross / net / paid / balance / payment status all come
// from SQL, so this page, the dashboard and the printable invoice can never disagree.
@Component({
  selector: 'app-invoices-admin',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, RouterLink, CdkMenuTrigger, CdkMenu, CdkMenuItem, InvoiceSendComponent],
  templateUrl: './invoices-admin.component.html',
  styleUrl: './invoices-admin.component.scss',
})
export class InvoicesAdminComponent implements OnInit {
  readonly data = inject(BookingDataService);
  private readonly admin = inject(BookingAdminService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);

  readonly currency = signal('EUR');
  readonly invoices = signal<InvoiceListRow[]>([]);
  readonly loading = signal(true);

  // ── Send-by-email dialog ────────────────────────────────────────────────
  // One instance hosted at page level rather than one per row: the dialog fetches its
  // own data from the invoice id, so N rows would mean N idle components.
  readonly sendOpen = signal(false);
  readonly sendId = signal('');
  readonly sendKind = signal<InvoiceEmailKind>('invoice');

  // ── Deleted / restore ───────────────────────────────────────────────────
  readonly deleted = signal<DeletedInvoice[]>([]);
  readonly restoring = signal('');

  async loadDeleted(): Promise<void> {
    this.deleted.set(await this.data.listDeletedInvoices());
  }

  async restore(d: DeletedInvoice): Promise<void> {
    if (this.restoring()) return;
    if (!(await this.confirm.ask({
      title: 'Restore invoice',
      message: `Bring ${d.invoice_number ?? 'this invoice'} back, with its lines and share links?`,
      confirmLabel: 'Restore',
    }))) return;
    this.restoring.set(d.id);
    try {
      const res = await this.data.restoreInvoice(d.id);
      if (!res.restored) { this.toast.error(res.error ?? 'Could not restore.'); return; }
      this.toast.success('Invoice restored');
      await Promise.all([this.reload(), this.loadDeleted()]);
    } finally { this.restoring.set(''); }
  }

  openSend(r: InvoiceListRow, kind: InvoiceEmailKind): void {
    this.sendId.set(r.id);
    this.sendKind.set(kind);
    this.sendOpen.set(true);
  }

  // Year filter (for VAT periods). 'all' or a 4-digit year string.
  readonly year = signal<string>('all');

  /** An invoice's year: its own service date, falling back to its number's year. */
  private rowYear(r: InvoiceListRow): string {
    if (r.service_date) return r.service_date.slice(0, 4);
    return r.number_year ? String(r.number_year) : '';
  }

  readonly years = computed(() => {
    const ys = new Set<string>();
    for (const r of this.invoices()) { const y = this.rowYear(r); if (y) ys.add(y); }
    return [...ys].sort((a, b) => b.localeCompare(a));
  });

  /** Invoices in the selected year (period scope — drives the summary + counts). */
  readonly yearScoped = computed(() => {
    const y = this.year();
    return y === 'all' ? this.invoices() : this.invoices().filter(r => this.rowYear(r) === y);
  });

  // Payment status tabs.
  readonly tabs: ReadonlyArray<{ key: InvoiceTab; label: string }> = [
    { key: 'all',     label: 'All' },
    { key: 'unpaid',  label: 'Unpaid' },
    { key: 'overdue', label: 'Overdue' },
    { key: 'partial', label: 'Partially paid' },
    { key: 'paid',    label: 'Paid' },
    { key: 'deleted', label: 'Deleted' },
  ];
  readonly tab = signal<InvoiceTab>('all');

  readonly counts = computed<Record<InvoiceTab, number>>(() => {
    const c: Record<InvoiceTab, number> = {
      all: 0, unpaid: 0, partial: 0, paid: 0, overdue: 0,
      // Counted from its own list, not from yearScoped — deleted rows never appear there.
      deleted: this.deleted().length,
    };
    for (const r of this.yearScoped()) {
      c.all++;
      c[r.payment_status]++;
      // Counted on its own: overdue is not a payment status, so the indexed increment
      // above can never produce it.
      if (r.is_overdue) c.overdue++;
    }
    return c;
  });

  /** Visible rows: year + tab, newest invoice number first. */
  readonly filtered = computed(() => {
    const t = this.tab();
    // Deleted rows are a different shape and render in their own table; this list stays
    // strictly the live ones so nothing downstream has to null-check.
    if (t === 'deleted') return [];
    if (t === 'all') return this.yearScoped();
    // Overdue needs its own arm — it cuts across payment status rather than being one,
    // so comparing it to `payment_status` would always match nothing.
    if (t === 'overdue') return this.yearScoped().filter(r => r.is_overdue);
    return this.yearScoped().filter(r => r.payment_status === t);
  });

  // Summary reflects the whole period (year), independent of the active tab.
  readonly totalBilled = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_gross, 0));
  // Kept because invoice_list still exposes amount_net; no longer surfaced on this page.
  // See the comment on the summary block in the template for why.
  readonly totalNet    = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_net, 0));
  /** Money that is late, not merely unpaid — the balance on invoices past their due date. */
  readonly overdueTotal = computed(() =>
    this.yearScoped().reduce((s, r) => s + (r.is_overdue ? r.balance_due : 0), 0));
  readonly totalPaid   = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_paid, 0));
  // Summed PER INVOICE (already floored at zero in SQL): one client's overpayment must
  // never cancel out what another client still owes.
  readonly outstanding = computed(() => this.yearScoped().reduce((s, r) => s + r.balance_due, 0));

  async ngOnInit(): Promise<void> {
    await this.auth.initialize();
    const org = this.auth.orgId();
    if (org) {
      const s = await this.admin.getOrgSettings(org);
      this.currency.set(s?.currency || 'EUR');
    }
    this.invoices.set(await this.data.queryInvoices());
    this.loading.set(false);
    // Not awaited: the Deleted tab is rarely the first thing looked at, so its count can
    // fill in a moment later rather than holding up the page.
    void this.loadDeleted();
  }

  /** Re-pull the rows. Sending can ISSUE a draft, which gives it a number and changes
   *  which tab it belongs to — so the list must refresh, not just the dialog. */
  async reload(): Promise<void> {
    this.invoices.set(await this.data.queryInvoices());
  }

  statusLabel(r: InvoiceListRow): string { return STATUS_LABEL[r.payment_status]; }

  /** Open the printable invoice. A booking-linked one keeps its existing URL so old
   *  links stay valid; a standalone invoice is addressed by its own id via `?inv=`. */
  open(r: InvoiceListRow): void {
    const url = r.booking_id ? `/book/invoice/${r.booking_id}` : `/book/invoice?inv=${r.id}`;
    window.open(url, '_blank', 'noopener');
  }

  /** Booking-linked invoices keep the booking-keyed editor route (the booking detail
   *  page links there); a standalone invoice opens by its own id. */
  editLink(r: InvoiceListRow): string[] {
    return r.booking_id
      ? ['/bookings/invoice-edit', r.booking_id]
      : ['/bookings/invoices/edit', r.id];
  }

  /** Copy the client-shareable (no-login) invoice link.
   *  A booking-linked invoice reuses its pay-link token so nothing changes for existing
   *  clients. A standalone invoice mints an INVOICE token, which grants only "view this
   *  invoice" — not the pay page and the deliverables a pay link would also open. */
  async copyShareLink(r: InvoiceListRow): Promise<void> {
    const url = r.booking_id
      ? await this.data.invoiceShareLink(r.booking_id)
      : await this.data.invoiceShareLinkById(r.id);
    if (!url) { this.toast.error('Could not create the invoice link.'); return; }
    await navigator.clipboard.writeText(url);
    this.toast.success('Invoice link copied — share it with your client');
  }

  /** Download the visible list as CSV for the accountant. */
  exportCsv(): void {
    const rows = [['Invoice', 'Date', 'Client', 'Worker', 'Service', 'Gross', 'Net', 'Paid', 'Balance', 'Status']];
    for (const r of this.filtered()) {
      rows.push([
        r.invoice_number ?? '',
        (r.service_date ?? '').slice(0, 10),
        (r.client_name ?? '').replace(/"/g, '""'),
        (r.staff_name ?? '').replace(/"/g, '""'),
        (r.service_name ?? '').replace(/"/g, '""'),
        r.amount_gross.toFixed(2), r.amount_net.toFixed(2),
        r.amount_paid.toFixed(2), r.balance_due.toFixed(2),
        r.payment_status,
      ]);
    }
    const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoices-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
