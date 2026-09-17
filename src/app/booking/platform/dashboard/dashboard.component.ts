import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingAdminService, WorkJob, TaskRow, AdminStaff } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { BookingSummary } from '@booking/core/interfaces/booking.interface';
import { Earnings, EarningsBasis } from '@booking/core/interfaces/earnings.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  readonly data = inject(BookingDataService);
  private readonly admin = inject(BookingAdminService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);

  readonly jobs = signal<WorkJob[]>([]);
  readonly tasks = signal<TaskRow[]>([]);
  readonly busyId = signal<string | null>(null);

  // ── Earnings (all money comes from SQL, never recomputed here) ─────
  readonly earnings = signal<Earnings | null>(null);
  readonly staff = signal<AdminStaff[]>([]);
  /** '' = the whole organization; otherwise a single worker's staff id. */
  readonly who = signal<string>('');
  /** Cash received (by payment date) vs work done (by job date). */
  readonly basis = signal<EarningsBasis>('cash');

  private readonly CONFIRMED = ['booked', 'in_progress', 'done'];
  private readonly confirmed = computed(() =>
    this.data.bookings().filter(b => this.CONFIRMED.includes(b.status) && !b.is_external));

  readonly now = new Date();
  readonly greeting = (() => {
    const h = new Date().getHours();
    return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  })();

  // ── Bookings metrics (booking-domain: these stay booking-rooted) ───
  readonly requests = computed(() => this.data.bookings().filter(b => b.status === 'pending'));
  readonly upcoming = computed(() => {
    const now = Date.now();
    return this.confirmed()
      .filter(b => new Date(b.start_at).getTime() >= now)
      .sort((a, b) => new Date(a.start_at).getTime() - new Date(b.start_at).getTime());
  });
  readonly upcoming30 = computed(() => {
    const limit = Date.now() + 30 * 86_400_000;
    return this.upcoming().filter(b => new Date(b.start_at).getTime() <= limit).length;
  });

  // ── Money metrics (from get_earnings — includes invoices with no booking) ──
  readonly collected   = computed(() => this.earnings()?.totals.cash ?? 0);
  readonly outstanding = computed(() => this.earnings()?.totals.outstanding ?? 0);
  readonly workGross   = computed(() => this.earnings()?.totals.work_done_gross ?? 0);
  readonly workNet     = computed(() => this.earnings()?.totals.work_done_net ?? 0);

  readonly whoLabel = computed(() => {
    const id = this.who();
    return id ? (this.staff().find(s => s.id === id)?.name ?? 'Worker') : 'Everyone';
  });
  readonly chartTitle = computed(() =>
    this.basis() === 'cash' ? 'Cash received · last 6 months' : 'Work done · last 6 months');

  /**
   * A fixed six-month window, filled from the RPC's month buckets.
   * The window is built here on purpose: `work_done_by_month` legitimately spans
   * several years (a job billed late, a shoot booked for next year), and rendering
   * the raw buckets would splay the chart across them.
   */
  readonly revenueByMonth = computed(() => {
    const e = this.earnings();
    const src = !e ? [] : (this.basis() === 'cash' ? e.cash_by_month : e.work_done_by_month);
    const map = new Map(src.map(m => [m.month, Number(m.amount)]));
    const ref = new Date();
    return Array.from({ length: 6 }, (_, i) => {
      const d = new Date(ref.getFullYear(), ref.getMonth() - (5 - i), 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      return { label: d.toLocaleDateString('en', { month: 'short' }), total: map.get(key) ?? 0 };
    });
  });
  readonly maxMonth = computed(() => Math.max(1, ...this.revenueByMonth().map(m => m.total)));

  /** Per-worker split, shown only when there's more than one worker to compare. */
  readonly byWorker = computed(() => this.earnings()?.by_worker ?? []);
  readonly showWorkerSplit = computed(() => !this.who() && this.byWorker().length > 1);

  // ── Production metrics ────────────────────────────────────────────
  readonly inProduction = computed(() => this.jobs().filter(j => j.production_status !== 'delivered').length);
  readonly openTasks = computed(() => this.tasks().filter(t => !t.is_done).length);
  readonly stageCount = computed(() => {
    const m = { to_edit: 0, editing: 0, to_deliver: 0, delivered: 0 };
    for (const j of this.jobs()) m[j.production_status]++;
    return m;
  });
  readonly workEnabled = computed(() => !!this.auth.features().work_board);

  async ngOnInit(): Promise<void> {
    await this.auth.initialize();
    const org = this.auth.orgId();
    if (org) this.staff.set(await this.admin.listStaff(org));
    await Promise.all([this.loadProduction(), this.loadEarnings()]);
  }

  private async loadProduction(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    const [jobs, tasks] = await Promise.all([this.admin.loadJobs(org), this.admin.loadTasks(org)]);
    this.jobs.set(jobs); this.tasks.set(tasks);
  }

  /** Re-read the money whenever the "who" filter changes. The basis toggle needs no
   *  refetch — both bases come back in the same response. */
  private async loadEarnings(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    this.earnings.set(await this.data.getEarnings(org, this.who() || null));
  }
  async onWhoChange(id: string): Promise<void> { this.who.set(id); await this.loadEarnings(); }

  barHeight(total: number): string { return `${Math.round((total / this.maxMonth()) * 100)}%`; }

  async approve(b: BookingSummary): Promise<void> {
    this.busyId.set(b.id);
    try {
      const res = await this.data.approveRequest(b.id);
      if (res.error === 'slot_taken') this.toast.error(`${b.booking_ref}: that slot was just taken — decline this one.`);
      else if (res.error) this.toast.error(`Could not approve ${b.booking_ref}.`);
      else { this.toast.success(`${b.booking_ref} approved — added to your calendar`); await this.loadProduction(); await this.loadEarnings(); }
    } catch {
      this.toast.error(`Could not approve ${b.booking_ref}. Please try again.`);
    } finally { this.busyId.set(null); }
  }
  async decline(b: BookingSummary): Promise<void> {
    if (!(await this.confirm.ask({ title: 'Decline request', message: `Decline ${b.booking_ref}?`, confirmLabel: 'Decline', danger: true }))) return;
    this.busyId.set(b.id);
    try {
      await this.data.declineRequest(b.id);
      this.toast.info(`${b.booking_ref} declined`);
    } catch {
      this.toast.error(`Could not decline ${b.booking_ref}.`);
    } finally { this.busyId.set(null); }
  }
}
