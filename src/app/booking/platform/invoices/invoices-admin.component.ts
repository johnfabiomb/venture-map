import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingAdminService } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { onScopeChange } from '@booking/core/utils/scope-reload.util';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { InvoiceListRow, DeletedInvoice } from '@booking/core/interfaces/invoice.interface';
import {
  EMPTY_PERIOD, FilterGroup, FilterState, PeriodState, countsFor, isFilterEmpty,
} from '@booking/core/interfaces/list-filter.interface';
import { inPeriod, periodLabel } from '@booking/core/utils/period.util';
import { ListFiltersComponent } from '@booking/ui/list-filters/list-filters.component';
import { InvoiceSendComponent } from '@booking/ui/invoice-send/invoice-send.component';
import { ExpenseDialogComponent } from '@booking/ui/expense-dialog/expense-dialog.component';
import { PaymentDialogComponent } from '@booking/ui/payment-dialog/payment-dialog.component';
import { SelectComponent, SelectOption } from '@booking/ui/select/select.component';
import { InvoiceActionsComponent } from '@booking/ui/invoice-actions/invoice-actions.component';
import { PaginatorComponent } from '@booking/ui/paginator/paginator.component';
import { paginate } from '@booking/core/utils/pagination.util';
import { InvoiceEmailKind } from '@booking/core/utils/invoice-email.util';

/** What a row's money actually is. */
type PaymentStatus = 'unpaid' | 'partial' | 'paid' | 'void';
/** `overdue` is a CROSS-CUTTING tab, not a payment status — an overdue invoice is also
 *  unpaid or partial. Kept out of PaymentStatus so the two can never be conflated. */
/** `deleted` is a different KIND of tab again: its rows come from an RPC (the hide_deleted
 *  policy blocks a normal read) and carry a different shape, so it renders its own table. */
// The dimensions the list can be narrowed by. Order is render order, and this array
// is the allowlist the query params are read through.
const GROUP_KEYS = ['pay', 'flag', 'status', 'link'] as const;
// Keyed on PaymentStatus, NOT on the tab union: statusLabel() renders a row's payment
// status, and no row's payment status is ever "overdue".
const STATUS_LABEL: Record<PaymentStatus, string> = {
  unpaid: 'Unpaid', partial: 'Partial', paid: 'Paid', void: 'Void',
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
  imports: [DatePipe, CurrencyPipe, RouterLink, InvoiceSendComponent, ExpenseDialogComponent, PaginatorComponent, SelectComponent, InvoiceActionsComponent, PaymentDialogComponent, ListFiltersComponent],
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

  // ── Add a cost against this invoice's job ───────────────────────────────
  readonly costOpen = signal(false);
  readonly costBookingId = signal<string | null>(null);

  openCost(r: InvoiceListRow): void {
    if (!r.booking_id) return;
    this.costBookingId.set(r.booking_id);
    this.costOpen.set(true);
  }

  // ── Record a payment against this invoice ───────────────────────────────
  readonly payOpen = signal(false);
  readonly payRow = signal<InvoiceListRow | null>(null);

  openPay(r: InvoiceListRow): void {
    this.payRow.set(r);
    this.payOpen.set(true);
  }

  openSend(r: InvoiceListRow, kind: InvoiceEmailKind): void {
    this.sendId.set(r.id);
    this.sendKind.set(kind);
    this.sendOpen.set(true);
  }

  // ── Filters (dimensions) ─────────────────────────────────────────────
  // The year dropdown only ever answered "which VAT period", and the tabs answered one
  // of three different questions at a time (payment, invoice state, overdue). Both are
  // dimensions now, so "unpaid AND overdue in Q3" is sayable.
  readonly filterState = signal<FilterState>({});
  /** Defaults to the service date: "what work happened in October" is the question
   *  asked far more often than "what did I issue in October". The switch is on the
   *  control because for VAT it is the issue date that matters, and guessing wrong
   *  silently reports the wrong period. */
  readonly period = signal<PeriodState>({ ...EMPTY_PERIOD, field: 'service_date' });

  readonly dateFields = [
    { value: 'service_date', label: 'service date' },
    { value: 'issue_date',   label: 'issue date' },
  ];

  /** Deleted rows come from an RPC with a different shape, so this is a VIEW. */
  readonly showDeleted = signal(false);

  private rowDate(r: InvoiceListRow): string | null {
    // Falls back to the other date rather than dropping out of every window: an invoice
    // with no service date is still a real document that was issued on a day.
    return this.period().field === 'issue_date'
      ? (r.issue_date ?? r.service_date)
      : (r.service_date ?? r.issue_date);
  }

  /** Everything the period allows: the KPI block and every chip count read from this. */
  readonly inWindow = computed(() =>
    this.invoices().filter(r => inPeriod(this.rowDate(r), this.period())));

  readonly visible = computed(() =>
    this.inWindow().filter(r => this.passesAll(r, this.filterState())));

  private optionMatches(r: InvoiceListRow, group: string, value: string): boolean {
    switch (group) {
      case 'status': return r.status === value;
      case 'pay':    return r.payment_status === value;
      // Overdue CUTS ACROSS payment status rather than being one, which is why it is
      // its own dimension and not another payment chip.
      case 'flag':   return value === 'overdue' ? !!r.is_overdue : false;
      case 'link':   return value === 'linked' ? !!r.has_booking : !r.has_booking;
      default:       return true;
    }
  }

  private passesAll(r: InvoiceListRow, st: FilterState, skip?: string): boolean {
    for (const key of GROUP_KEYS) {
      if (key === skip) continue;
      const sel = st[key] ?? [];
      if (sel.length && !sel.some(v => this.optionMatches(r, key, v))) return false;
    }
    return true;
  }

  readonly filterGroups = computed<FilterGroup[]>(() => {
    const st = this.filterState(), base = this.inWindow();
    const build = (key: string, label: string, opts: ReadonlyArray<[string, string]>, alert = ''): FilterGroup => {
      const counts = countsFor(base, opts.map(o => o[0]),
        r => this.passesAll(r, st, key), (r, v) => this.optionMatches(r, key, v));
      return {
        key, label,
        options: opts.map(([value, text]) => ({
          value, label: text, count: counts[value] ?? 0, alert: value === alert,
        })),
      };
    };
    return [
      build('pay',    'Payment', [['unpaid', 'Unpaid'], ['partial', 'Partially paid'], ['paid', 'Paid']], 'unpaid'),
      build('flag',   'Flags',   [['overdue', 'Overdue']], 'overdue'),
      build('status', 'State',   [['draft', 'Draft'], ['issued', 'Issued'], ['void', 'Void']]),
      build('link',   'Job',     [['linked', 'Has a booking'], ['standalone', 'Standalone']]),
    ];
  });

  readonly summary = computed(() => {
    const v = this.visible();
    if (!v.length) return '';
    const money = (x: number) => `€${Math.round(x).toLocaleString('en')}`;
    const owed = v.reduce((s, r) => s + r.balance_due, 0);
    const late = v.reduce((s, r) => s + (r.is_overdue ? r.balance_due : 0), 0);
    return `${v.length} invoice${v.length === 1 ? '' : 's'} · ${money(v.reduce((s, r) => s + r.amount_gross, 0))} billed`
         + (owed > 0.005 ? ` · ${money(owed)} outstanding` : '')
         + (late > 0.005 ? ` · ${money(late)} overdue` : '')
         + ` · ${periodLabel(this.period())} by ${this.period().field === 'issue_date' ? 'issue date' : 'service date'}`;
  });

  readonly emptyText = computed(() =>
    isFilterEmpty(this.filterState(), this.period())
      ? 'No invoices yet.'
      : 'No invoices match these filters. Loosen one, or clear them.');

  openDeleted(): void { this.showDeleted.set(true); }
  closeDeleted(): void { this.showDeleted.set(false); }

  // Paging. `visible` already reflects the period and every dimension, so changing a
  // filter changes the set; the effect below returns to page one.
  readonly paged = paginate(this.visible);
  readonly pagedDeleted = paginate(this.deleted);

  // The KPI block reflects the whole PERIOD, deliberately independent of the chips:
  // it answers "how did this month go", while the filter bar's own summary line
  // describes the narrower set actually listed.
  readonly totalBilled = computed(() => this.inWindow().reduce((s, r) => s + r.amount_gross, 0));
  // Kept because invoice_list still exposes amount_net; no longer surfaced on this page.
  // See the comment on the summary block in the template for why.
  readonly totalNet    = computed(() => this.inWindow().reduce((s, r) => s + r.amount_net, 0));
  /** Money that is late, not merely unpaid — the balance on invoices past their due date. */
  readonly overdueTotal = computed(() =>
    this.inWindow().reduce((s, r) => s + (r.is_overdue ? r.balance_due : 0), 0));
  readonly totalPaid   = computed(() => this.inWindow().reduce((s, r) => s + r.amount_paid, 0));
  // Summed PER INVOICE (already floored at zero in SQL): one client's overpayment must
  // never cancel out what another client still owes.
  readonly outstanding = computed(() => this.inWindow().reduce((s, r) => s + r.balance_due, 0));

  constructor() {
    // Any change to the window or the chips changes the set, so a stale page number
    // would show an empty table on a list that has rows.
    effect(() => { this.filterState(); this.period(); this.paged.reset(); });

    // Invoices carry a staff_id and queryInvoices() is scoped, so the list and the
    // Deleted tab both have to re-pull when the worker being viewed changes. This is also
    // the page's FIRST load — ngOnInit only resolves auth.
    onScopeChange(this.auth, () => void this.loadAll());
  }

  async ngOnInit(): Promise<void> {
    await this.auth.initialize();
  }

  private async loadAll(): Promise<void> {
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
    for (const r of this.visible()) {
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
