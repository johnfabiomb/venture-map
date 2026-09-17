import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingAdminService } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { InvoiceListRow } from '@booking/core/interfaces/invoice.interface';

type InvoiceTab = 'all' | 'unpaid' | 'partial' | 'paid';
const STATUS_LABEL: Record<Exclude<InvoiceTab, 'all'>, string> = {
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
  imports: [DatePipe, CurrencyPipe, RouterLink, CdkMenuTrigger, CdkMenu, CdkMenuItem],
  templateUrl: './invoices-admin.component.html',
  styleUrl: './invoices-admin.component.scss',
})
export class InvoicesAdminComponent implements OnInit {
  readonly data = inject(BookingDataService);
  private readonly admin = inject(BookingAdminService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);

  readonly currency = signal('EUR');
  readonly invoices = signal<InvoiceListRow[]>([]);
  readonly loading = signal(true);

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
    { key: 'partial', label: 'Partially paid' },
    { key: 'paid',    label: 'Paid' },
  ];
  readonly tab = signal<InvoiceTab>('all');

  readonly counts = computed<Record<InvoiceTab, number>>(() => {
    const c: Record<InvoiceTab, number> = { all: 0, unpaid: 0, partial: 0, paid: 0 };
    for (const r of this.yearScoped()) { c.all++; c[r.payment_status]++; }
    return c;
  });

  /** Visible rows: year + payment-status tab, newest invoice number first. */
  readonly filtered = computed(() => {
    const t = this.tab();
    return t === 'all' ? this.yearScoped() : this.yearScoped().filter(r => r.payment_status === t);
  });

  // Summary reflects the whole period (year), independent of the active tab.
  readonly totalBilled = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_gross, 0));
  readonly totalNet    = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_net, 0));
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
