import { Component, inject, signal, computed, effect } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass, DatePipe, CurrencyPipe } from '@angular/common';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { FormsModule } from '@angular/forms';
import { map, debounceTime } from 'rxjs';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { onScopeChange } from '@booking/core/utils/scope-reload.util';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { PaginatorComponent } from '@booking/ui/paginator/paginator.component';
import { paginate } from '@booking/core/utils/pagination.util';
import { BookingSummary, PaymentStatus } from '@booking/core/interfaces/booking.interface';
import {
  EMPTY_PERIOD, FilterGroup, FilterState, PeriodState, countsFor, isFilterEmpty,
} from '@booking/core/interfaces/list-filter.interface';
import { inPeriodAt, periodLabel } from '@booking/core/utils/period.util';
import { filtersFromParams, filtersToParams } from '@booking/core/utils/list-filter-url.util';
import { ListFiltersComponent } from '@booking/ui/list-filters/list-filters.component';
import { InvoiceListRow, DeletedBooking } from '@booking/core/interfaces/invoice.interface';

const PAYMENT_LABELS: Record<PaymentStatus, string> = {
  unpaid: 'Unpaid', partial: 'Deposit paid', paid: 'Paid', external: 'External',
};
// Raw status strings were rendered straight into the badge, so a job awaiting the
// client read as the bare word "pending".
const STATUS_LABELS: Record<string, string> = {
  draft: 'Draft', pending: 'To confirm', hold: 'Held', booked: 'Booked',
  in_progress: 'In progress', done: 'Done', cancelled: 'Cancelled', expired: 'Expired',
};
const STATUS_CLASSES: Record<string, string> = {
  pending: 'badge--toconfirm', hold: 'badge--toconfirm',
  cancelled: 'badge--off', expired: 'badge--off',
};

const WORK_LABELS: Record<string, string> = {
  to_edit: 'To edit', editing: 'Editing', to_deliver: 'To deliver', delivered: 'Delivered',
};

const PAYMENT_CLASSES: Record<PaymentStatus, string> = {
  unpaid: 'badge--unpaid', partial: 'badge--partial', paid: 'badge--paid', external: 'badge--external',
};

// The dimensions the list can be narrowed by. Order is the order they render in,
// and this array is also the allowlist the ?when=/?status=… params are read through.
const GROUP_KEYS = ['when', 'status', 'pay', 'kind'] as const;

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [RouterLink, NgClass, DatePipe, CurrencyPipe, CdkMenuTrigger, CdkMenu, CdkMenuItem, FormsModule, ModalComponent, PaginatorComponent, ListFiltersComponent],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss',
})
export class BookingListComponent {
  readonly data = inject(BookingDataService);
  readonly auth = inject(BookingsAuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);
  readonly copiedId = signal<string | null>(null);
  readonly busyId = signal<string | null>(null);

  goEdit(b: BookingSummary): void { this.router.navigate(['/bookings', b.id, 'edit']); }
  /** Clone this job into a new booking — same client, charges and settings, no times.
   *  Lands on /bookings/new because the result is a new booking, not an edit of this one. */
  goDuplicate(b: BookingSummary): void {
    this.router.navigate(['/bookings/new'], { queryParams: { from: b.id } });
  }
  goDetail(b: BookingSummary): void { this.router.navigate(['/bookings', b.id]); }

  // ── Filters (URL-driven dimensions) ──────────────────────────────────
  // A tab used to mix four unrelated questions into one row: WHEN a job is, WHAT state
  // it is in, whether it is PAID, and what KIND it is. Picking one therefore silently
  // answered the other three as "any", and two could never be combined. They are
  // separate dimensions now: multi-select inside one, combined across them.
  readonly search = signal('');
  private readonly debouncedSearch = toSignal(
    toObservable(this.search).pipe(debounceTime(250)), { initialValue: '' });

  readonly filterState = signal<FilterState>({});
  readonly period = signal<PeriodState>({ ...EMPTY_PERIOD, field: 'start_at' });

  /** Deleted rows come from an RPC and carry a different shape, so this is a VIEW,
   *  not a filter: it replaces the table rather than narrowing it. */
  readonly showDeleted = signal(false);

  readonly rows = signal<BookingSummary[]>([]);
  readonly rowsLoading = signal(true);
  /** Captured per load rather than read in a computed, so "upcoming" cannot shift
   *  under the reader while they are looking at the list. */
  private readonly nowMs = signal(Date.now());

  /** Everything the period allows. Counts are computed against THIS, so a chip's
   *  number always describes the window on screen. */
  readonly inWindow = computed(() =>
    this.rows().filter(b => inPeriodAt(b.next_start_at ?? b.start_at, this.period())));

  readonly visible = computed(() =>
    this.inWindow().filter(b => this.passesAll(b, this.filterState())));

  readonly filterGroups = computed<FilterGroup[]>(() => {
    const st = this.filterState(), base = this.inWindow();
    const build = (key: string, label: string, opts: ReadonlyArray<[string, string]>, alert = ''): FilterGroup => {
      const counts = countsFor(base, opts.map(o => o[0]),
        b => this.passesAll(b, st, key), (b, v) => this.optionMatches(b, key, v));
      return {
        key, label,
        options: opts.map(([value, text]) => ({
          value, label: text, count: counts[value] ?? 0, alert: value === alert,
        })),
      };
    };
    return [
      build('when',   'When',    [['upcoming', 'Upcoming'], ['past', 'Past']]),
      build('status', 'Status',  [['pending', 'To confirm'], ['booked', 'Confirmed'],
                                  ['in_progress', 'In progress'], ['done', 'Done'],
                                  ['cancelled', 'Cancelled'], ['expired', 'Expired']]),
      build('pay',    'Payment', [['unpaid', 'Unpaid'], ['partial', 'Partial'], ['paid', 'Paid']], 'unpaid'),
      build('kind',   'Kind',    [['external', 'From calendar']]),
    ];
  });

  /** One sentence describing what is on screen, because a filtered list with no
   *  statement of what it is filtered to reads as missing data. */
  readonly summary = computed(() => {
    const v = this.visible();
    if (!v.length) return '';
    const owed = v.reduce((n, b) => n + Math.max(0, (b.price_total ?? 0) - (b.total_paid ?? 0)), 0);
    const total = v.reduce((n, b) => n + (b.price_total ?? 0), 0);
    const money = (x: number) => `€${Math.round(x).toLocaleString('en')}`;
    return `${v.length} booking${v.length === 1 ? '' : 's'} · ${money(total)} billed`
         + (owed > 0.005 ? ` · ${money(owed)} still owed` : '')
         + ` · ${periodLabel(this.period())}`;
  });

  readonly emptyText = computed(() =>
    this.search().trim() ? 'No bookings match your search.'
      : isFilterEmpty(this.filterState(), this.period())
        ? 'No bookings yet.'
        : 'No bookings match these filters. Loosen one, or clear them.');

  private optionMatches(b: BookingSummary, group: string, value: string): boolean {
    switch (group) {
      case 'when':   return value === 'upcoming'
        ? new Date(b.next_end_at ?? b.end_at).getTime() >= this.nowMs()
        : new Date(b.next_end_at ?? b.end_at).getTime() <  this.nowMs();
      case 'status': return b.status === value;
      case 'pay':    return b.payment_status === value;
      case 'kind':   return value === 'external' ? !!b.is_external : false;
      default:       return true;
    }
  }

  /** `skip` leaves one dimension out, which is what makes its own counts meaningful. */
  private passesAll(b: BookingSummary, st: FilterState, skip?: string): boolean {
    for (const key of GROUP_KEYS) {
      if (key === skip) continue;
      const sel = st[key] ?? [];
      if (sel.length && !sel.some(v => this.optionMatches(b, key, v))) return false;
    }
    return true;
  }

  constructor() {
    // Seed from the URL, falling back to the last view used: returning from a booking
    // should land where you left, which is what the old per-tab memory did.
    const seeded = filtersFromParams(this.route.snapshot.queryParamMap, GROUP_KEYS, 'start_at');
    const hasUrl = GROUP_KEYS.some(k => this.route.snapshot.queryParamMap.get(k))
                || !!this.route.snapshot.queryParamMap.get('period');
    const restored = hasUrl ? seeded : this.readPersisted() ?? seeded;
    this.filterState.set(restored.state);
    this.period.set(restored.period);
    this.showDeleted.set(this.route.snapshot.queryParamMap.get('view') === 'deleted');

    // Re-query when the WINDOW, the search or the worker scope changes. The dimensions
    // are NOT here on purpose: they refine what is already loaded, so ticking a chip
    // costs nothing.
    effect(() => {
      const p = this.period();
      const q = this.debouncedSearch();
      this.auth.staffId();
      this.paged.reset();
      void this.loadRows(p, q);
    });

    // Mirror the state into the URL so a filtered view is shareable and survives a
    // refresh. `replaceUrl` because ticking six chips should not mean six presses of
    // the back button to leave the page.
    effect(() => {
      const params = filtersToParams(this.filterState(), this.period(), GROUP_KEYS);
      params['view'] = this.showDeleted() ? 'deleted' : null;
      this.persist();
      void this.router.navigate([], {
        queryParams: params, queryParamsHandling: 'merge', replaceUrl: true,
      });
    });

    onScopeChange(this.auth, () => { void this.loadDeleted(); });
  }

  /** Drop the worker filter and show the whole organisation. The effect watching
   *  `auth.staffId()` reloads the rows and the Deleted view by itself. */
  showEveryone(): void {
    this.auth.setActiveStaff(null);
  }

  openDeleted(): void { this.showDeleted.set(true); void this.loadDeleted(); }
  closeDeleted(): void { this.showDeleted.set(false); }

  // ── Remembering the last view ───────────────────────────────────────────
  private readonly VIEW_STORE = 'jm.bookings.view';
  private persist(): void {
    try {
      localStorage.setItem(this.VIEW_STORE,
        JSON.stringify({ state: this.filterState(), period: this.period() }));
    } catch { /* storage blocked */ }
  }
  private readPersisted(): { state: FilterState; period: PeriodState } | null {
    try {
      const raw = localStorage.getItem(this.VIEW_STORE);
      if (!raw) return null;
      const v = JSON.parse(raw) as { state: FilterState; period: PeriodState };
      // A stored shape from an older build must never be trusted into the UI.
      if (!v?.state || !v?.period?.preset) return null;
      return v;
    } catch { return null; }
  }

  // ── Paging ──────────────────────────────────────────────────────────────
  // Pages what the filters left. The paginator only sees page/pageCount/total, so
  // moving to a server range later is a change to this helper alone.
  readonly paged = paginate(this.visible);

  private async loadRows(period: PeriodState, search: string): Promise<void> {
    this.rowsLoading.set(true);
    this.nowMs.set(Date.now());
    this.rows.set(await this.data.queryBookingsInPeriod(period, search));
    this.rowsLoading.set(false);
  }

  // ── Deleted / restore ───────────────────────────────────────────────────
  readonly deletedRows = signal<DeletedBooking[]>([]);
  readonly pagedDeleted = paginate(this.deletedRows);
  readonly restoring = signal('');

  async loadDeleted(): Promise<void> {
    this.deletedRows.set(await this.data.listDeletedBookings());
  }

  async restoreBooking(d: DeletedBooking): Promise<void> {
    if (this.restoring()) return;
    if (!(await this.confirm.ask({
      title: 'Restore booking',
      message: `Bring ${d.booking_ref} back, with its time blocks, invoice and payments?`,
      confirmLabel: 'Restore',
    }))) return;
    this.restoring.set(d.id);
    try {
      const res = await this.data.restoreBooking(d.id);
      if (!res.restored) { this.toast.error(res.error ?? 'Could not restore.'); return; }
      const clashes = res.slots_conflicted?.length ?? 0;
      if (clashes) {
        // Deliberately not a success message: the booking is back but its time is not, and
        // saying "restored" alone would leave the owner thinking the calendar is correct.
        this.toast.error(
          `${d.booking_ref} restored, but ${clashes} time block${clashes > 1 ? 's' : ''} ` +
          `could not be — that time is now taken. Re-pick them on the booking.`, 9000);
      } else {
        this.toast.success(`${d.booking_ref} restored`);
      }
      await Promise.all([this.refresh(), this.loadDeleted()]);
    } finally { this.restoring.set(''); }
  }
  /** After a mutation, re-pull the current tab's rows + the counts (stay fresh, no local edits). */
  private async refresh(): Promise<void> {
    await Promise.all([this.loadRows(this.period(), this.debouncedSearch()), this.loadDeleted()]);
  }

  // Both key off the block that matters NOW. start_at/end_at span the whole booking, so a
  // job with planning on Tuesday and filming on Friday kept reporting Tuesday all week.
  private startMs(b: BookingSummary): number { return new Date(b.next_start_at ?? b.start_at).getTime(); }
  private endMs(b: BookingSummary): number { return new Date(b.next_end_at ?? b.end_at).getTime(); }

  /**
   * Date format for the When column. The year appears only when it is not the current
   * one: BK-2026-116 is a 2027 job and rendered as "Thu 9 Sep, 16:00", which reads as
   * this September and looks badly out of order in a list sorted by date.
   */
  whenFmt(iso: string): string {
    return new Date(iso).getFullYear() === new Date().getFullYear()
      ? 'EEE d MMM, HH:mm' : 'EEE d MMM y, HH:mm';
  }

  /** Blocks after this one that are still to come. 0 once the job is finished. */
  blocksLeft(b: BookingSummary): number { return Math.max(0, (b.upcoming_slot_count ?? 0) - 1); }

  /** The soonest still-to-come booking (real or external) — highlighted as "NEXT". */
  readonly nextId = computed<string | null>(() => {
    const now = Date.now();
    const up = this.data.bookings()
      .filter(b => (b.status === 'booked' || b.status === 'in_progress') && this.endMs(b) >= now)
      .sort((a, b) => this.startMs(a) - this.startMs(b));
    return up.length ? up[0].id : null;
  });


  /** Post-production stage for a job, or '' when no work covers it. */
  workLabel(b: BookingSummary): string {
    if (!b.work_count) return '';
    const l = WORK_LABELS[b.work_status ?? ''] ?? '';
    return b.work_count > 1 ? `${l} +${b.work_count - 1}` : l;
  }
  workClass(b: BookingSummary): string {
    return b.work_status === 'delivered' ? 'badge--work-done' : 'badge--work';
  }

  statusLabel(st: string): string { return STATUS_LABELS[st] ?? st; }
  statusClass(st: string): string { return STATUS_CLASSES[st] ?? 'badge--status'; }
  /** A job the client has asked for but you have not accepted yet. */
  isPending(b: BookingSummary): boolean { return b.status === 'pending'; }

  /** Friendly relative day for the schedule ("Today", "Tomorrow", "in 3 days"). */
  relative(b: BookingSummary): string {
    const days = Math.round((this.startMs(b) - Date.now()) / 86_400_000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    if (days === -1) return 'Yesterday';
    if (days > 1 && days <= 14) return `in ${days} days`;
    if (days < -1 && days >= -14) return `${-days} days ago`;
    return '';
  }

  // Revenue/collected reflect only genuinely confirmed jobs — never pending,
  // hold, cancelled, expired or external blocks.
  private readonly CONFIRMED_STATES = ['booked', 'in_progress', 'done'];
  readonly confirmedJobs = computed(() =>
    this.data.bookings().filter(b => this.CONFIRMED_STATES.includes(b.status) && !b.is_external));
  /** What you expect to earn from confirmed jobs (total − expenses). */
  readonly expectedRevenue = computed(() => this.confirmedJobs().reduce((s, b) => s + b.price_revenue, 0));
  /** What's actually been received. */
  readonly collected = computed(() => this.confirmedJobs().reduce((s, b) => s + b.total_paid, 0));
  readonly unpaidCount = computed(() =>
    this.confirmedJobs().filter(b => b.payment_status === 'unpaid' || b.payment_status === 'partial').length);

  async copyLink(bookingId: string): Promise<void> {
    const url = await this.data.generateLink(bookingId);
    if (!url) { this.toast.error('Could not generate the client link.'); return; }
    await navigator.clipboard.writeText(url);
    this.copiedId.set(bookingId);
    setTimeout(() => this.copiedId.set(null), 2000);
    this.toast.success('Client link copied to clipboard');
  }

  async approve(b: BookingSummary): Promise<void> {
    this.busyId.set(b.id);
    try {
      const res = await this.data.approveRequest(b.id);
      if (res.error === 'slot_taken') this.toast.error(`${b.booking_ref}: that slot was just taken — decline this one.`);
      else if (res.error === 'not_pending') this.toast.error(`${b.booking_ref} is no longer pending.`);
      else if (res.error) this.toast.error(`Could not approve ${b.booking_ref}.`);
      else { this.toast.success(`${b.booking_ref} approved — added to your calendar`); await this.refresh(); }
    } catch {
      this.toast.error(`Could not approve ${b.booking_ref}. Please try again.`);
    } finally { this.busyId.set(null); }
  }

  async decline(b: BookingSummary): Promise<void> {
    if (!(await this.confirm.ask({ title: 'Decline request', message: `Decline ${b.booking_ref}?`, confirmLabel: 'Decline', danger: true }))) return;
    this.busyId.set(b.id);
    try {
      const res = await this.data.declineRequest(b.id);
      if (res.calendarCleared) this.toast.info(`${b.booking_ref} declined`);
      else this.toast.error(`${b.booking_ref} declined, but its Google Calendar event could NOT be removed: check the calendar connection.`);
      await this.refresh();
    } catch {
      this.toast.error(`Could not decline ${b.booking_ref}.`);
    } finally { this.busyId.set(null); }
  }

  async cancel(b: BookingSummary): Promise<void> {
    if (!(await this.confirm.ask({
      title: 'Cancel booking',
      message: `Cancel ${b.booking_ref} (${b.client_name ?? 'no client'})? This frees the slot and removes it from your calendar. This cannot be undone.`,
      confirmLabel: 'Cancel booking', cancelLabel: 'Keep it', danger: true,
    }))) return;
    let refund = false;
    if (b.total_paid > 0) {
      refund = await this.confirm.ask({
        title: 'Refund card payments?',
        message: `€${b.total_paid} has been paid on this booking. Refund any CARD payments via Stripe now? (Cash / Revolut / bank payments are settled by you directly.)`,
        confirmLabel: 'Refund now', cancelLabel: 'Don’t refund',
      });
    }
    this.busyId.set(b.id);
    try {
      const res = await this.data.cancelBooking(b.id, refund);
      if (res.error) { this.toast.error(`Could not cancel ${b.booking_ref}.`); return; }
      await this.refresh();
      if (res.calendar_cleared === false) {
        this.toast.error(`${b.booking_ref} cancelled, but its calendar event couldn't be removed — delete it manually.`);
      } else if (res.refunded) {
        this.toast.success(`${b.booking_ref} cancelled — €${res.refunded} refunded`);
      } else {
        this.toast.success(`${b.booking_ref} cancelled`);
      }
    } catch {
      this.toast.error(`Could not cancel ${b.booking_ref}. Please try again.`);
    } finally { this.busyId.set(null); }
  }

  // ── Delete an imported/external booking (single modal, with calendar choice) ──
  readonly deleteOpen = signal(false);
  readonly deleteTarget = signal<BookingSummary | null>(null);
  readonly removeEvent = signal(true);
  readonly deleting = signal(false);

  /** The invoice attached to the booking being deleted (null = it has none). */
  readonly invoiceForDelete = signal<InvoiceListRow | null>(null);
  /** Checked = also delete the invoice. Deleting a job and writing off its money are
   *  separate decisions, so it's asked every time rather than fixed by policy. */
  readonly deleteInvoice = signal(false);

  async askDelete(b: BookingSummary): Promise<void> {
    this.deleteTarget.set(b);
    this.removeEvent.set(true);   // default ON — deleting a booking should clear its calendar event
    this.invoiceForDelete.set(null);
    this.deleteInvoice.set(false);
    this.deleteOpen.set(true);
    const inv = await this.data.getInvoiceSummary(b.id);
    this.invoiceForDelete.set(inv);
    // Default OFF once money has been received against it — that's a financial record
    // you probably want to keep. With nothing paid, default to removing it.
    this.deleteInvoice.set(!!inv && inv.amount_paid === 0);
  }
  closeDelete(): void {
    this.deleteOpen.set(false);
    this.deleteTarget.set(null);
    this.invoiceForDelete.set(null);
  }

  async confirmDelete(): Promise<void> {
    const b = this.deleteTarget();
    if (!b) return;
    this.deleting.set(true);
    try {
      // Gate only on the checkbox — cancel-booking finds the events (booking row + every
      // slot) server-side, so we must NOT also require the list row to carry google_event_id.
      const remove = this.removeEvent();
      const keepInvoice = !this.deleteInvoice();
      const res = await this.data.deleteBooking(b.id, remove, keepInvoice);
      if (res.error) { this.toast.error(`Could not delete ${b.booking_ref}.`); return; }
      if (res.keptInvoice) {
        this.toast.info(`Invoice ${this.invoiceForDelete()?.invoice_number ?? ''} kept — it's now a standalone invoice.`);
      }
      // Only claim "removed from Google Calendar" when Google actually accepted it — a
      // failed removal (e.g. expired calendar connection) must not read as success.
      if (remove && res.calendarCleared === false) {
        this.toast.error(`${b.booking_ref} deleted, but its Google Calendar event could NOT be removed: check the calendar connection.`);
      } else {
        this.toast.success(`${b.booking_ref} deleted${remove ? ' · removed from Google Calendar' : ''}`);
      }
      await this.refresh();
      this.closeDelete();
    } catch {
      this.toast.error(`Could not delete ${b.booking_ref}. Please try again.`);
    } finally {
      this.deleting.set(false);
    }
  }

  paymentLabel(status: PaymentStatus): string { return PAYMENT_LABELS[status] ?? status; }
  paymentClass(status: PaymentStatus): string  { return PAYMENT_CLASSES[status] ?? ''; }
}
