import { ChangeDetectionStrategy, Component, effect, inject, input, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { EarningsBasis, EarningsDetail, EarningsDetailRow } from '@booking/core/interfaces/earnings.interface';

/**
 * What is behind one bar of the dashboard chart.
 *
 * Loads its own data from (month, basis, worker) so every caller stays dumb, the same
 * recipe as `ui/invoice-send`. The money is NOT recomputed here: `total` and every row
 * amount come from `get_earnings_detail` (§34), whose filters mirror `get_earnings`, so
 * the heading always equals the bar that opened it.
 */
@Component({
  selector: 'app-earnings-breakdown',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './earnings-breakdown.component.html',
  styleUrl: './earnings-breakdown.component.scss',
})
export class EarningsBreakdownComponent {
  private readonly data = inject(BookingDataService);
  private readonly router = inject(Router);

  readonly open = model(false);
  /** 'YYYY-MM'. Null while no bar has been opened. */
  readonly month = input<string | null>(null);
  readonly basis = input<EarningsBasis>('work');
  readonly orgId = input<string | null>(null);
  readonly staffId = input<string | null>(null);
  /** Shown in the header so the reader knows whose money this is. */
  readonly whoLabel = input('Everyone');

  readonly detail = signal<EarningsDetail | null>(null);
  readonly loading = signal(false);
  /** Which rows have their charges expanded. Ids, not indexes, so a reload cannot
   *  leave the wrong row open. */
  private readonly expanded = signal<ReadonlySet<string>>(new Set());

  constructor() {
    // Re-reads whenever the bar, the basis or the worker filter changes, which is also
    // what makes the toggle at the top of the dashboard work while this is open.
    effect(() => {
      const org = this.orgId(), month = this.month();
      if (!this.open() || !org || !month) return;
      void this.load(org, month, this.basis(), this.staffId());
    });
  }

  private async load(org: string, month: string, basis: EarningsBasis, staff: string | null): Promise<void> {
    this.loading.set(true);
    this.detail.set(await this.data.getEarningsDetail(org, month, basis, staff));
    this.expanded.set(new Set());
    this.loading.set(false);
  }

  readonly rows = () => this.detail()?.rows ?? [];

  monthLabel(): string {
    const m = this.month();
    if (!m) return '';
    const [y, mo] = m.split('-').map(Number);
    return new Date(y, mo - 1, 1).toLocaleDateString('en', { month: 'long', year: 'numeric' });
  }

  heading(): string {
    return this.basis() === 'cash' ? 'Payments received' : 'Work billed';
  }

  /** Key a row by whichever id its basis gives it. */
  rowKey(r: EarningsDetailRow): string {
    return r.payment_id ?? r.invoice_id ?? '';
  }

  isOpen(r: EarningsDetailRow): boolean {
    return this.expanded().has(this.rowKey(r));
  }

  toggle(r: EarningsDetailRow): void {
    if (!r.lines?.length) return;
    const key = this.rowKey(r);
    const next = new Set(this.expanded());
    next.has(key) ? next.delete(key) : next.add(key);
    this.expanded.set(next);
  }

  /** The invoice editor is keyed on the INVOICE id; a booking-keyed route would open
   *  the booking's OLDEST invoice, which is not necessarily this row. */
  openInvoice(r: EarningsDetailRow): void {
    if (!r.invoice_id) return;
    this.open.set(false);
    void this.router.navigate(['/bookings/invoices/edit', r.invoice_id]);
  }

  openBooking(r: EarningsDetailRow, ev: Event): void {
    ev.stopPropagation();
    if (!r.booking_id) return;
    this.open.set(false);
    void this.router.navigate(['/bookings', r.booking_id]);
  }
}
