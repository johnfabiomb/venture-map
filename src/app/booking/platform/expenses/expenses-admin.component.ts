import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { ExpenseRow } from '@booking/core/interfaces/expense.interface';
import { Profit } from '@booking/core/interfaces/profit.interface';
import { ExpenseDialogComponent } from '@booking/ui/expense-dialog/expense-dialog.component';

/**
 * The costs ledger and the P&L behind it.
 *
 * This page exists because the Invoices page cannot answer "what did I keep": expenses
 * attach to a JOB, invoices are DOCUMENTS, and an overhead (software, insurance) belongs
 * to no invoice at all. Standalone costs are therefore first-class here, not an edge case.
 *
 * Every figure comes from `get_profit`. Nothing about income is recomputed on screen —
 * divergent client-side money maths is exactly what the invoice restructure removed.
 */
@Component({
  selector: 'app-expenses-admin',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, FormsModule, RouterLink, ExpenseDialogComponent],
  templateUrl: './expenses-admin.component.html',
  styleUrl: './expenses-admin.component.scss',
})
export class ExpensesAdminComponent implements OnInit {
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);
  readonly data = inject(BookingDataService);

  readonly loading = signal(true);
  readonly rows = signal<ExpenseRow[]>([]);
  readonly profit = signal<Profit | null>(null);

  /** Year scope. The whole page — ledger, totals, P&L — follows this one control. */
  readonly year = signal(String(new Date().getFullYear()));
  readonly years = computed(() => {
    const now = new Date().getFullYear();
    const seen = new Set<string>([String(now)]);
    for (const r of this.rows()) seen.add(r.spent_on.slice(0, 4));
    return [...seen].sort((a, b) => b.localeCompare(a));
  });

  // ── Add / edit, via the shared dialog ────────────────────────────────────
  readonly dialogOpen = signal(false);
  readonly editing = signal<ExpenseRow | null>(null);

  /** With a row, edits it; without, adds a new cost. */
  openDialog(r?: ExpenseRow): void {
    this.editing.set(r ?? null);
    this.dialogOpen.set(true);
  }

  // ── Derived ──────────────────────────────────────────────────────────────
  readonly totals = computed(() => this.profit()?.totals ?? null);
  readonly byCategory = computed(() => this.profit()?.by_category ?? []);
  readonly byMonth = computed(() => [...(this.profit()?.by_month ?? [])].reverse());
  /** Unattributed is a real bucket (overheads), so it is kept and labelled, not filtered. */
  readonly byClient = computed(() => this.profit()?.by_client ?? []);

  /** Share of the period's costs, for the category bars. */
  categoryShare(amount: number): number {
    const total = this.totals()?.expenses ?? 0;
    return total > 0 ? Math.round((amount / total) * 100) : 0;
  }

  monthLabel(m: string): string {
    const [y, mo] = m.split('-').map(Number);
    return new Date(y, mo - 1, 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
  }

  async ngOnInit(): Promise<void> {
    await this.auth.initialize();
    await this.reload();
    this.loading.set(false);
  }

  private range(): { from: string; to: string } {
    const y = this.year();
    return { from: `${y}-01-01`, to: `${y}-12-31` };
  }

  async reload(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    const { from, to } = this.range();
    const [rows, profit] = await Promise.all([
      this.data.listExpenses(org, from, to),
      this.data.getProfit(org, from, to),
    ]);
    this.rows.set(rows);
    this.profit.set(profit);
  }

  async setYear(y: string): Promise<void> {
    this.year.set(y);
    this.loading.set(true);
    await this.reload();
    this.loading.set(false);
  }

  async remove(r: ExpenseRow): Promise<void> {
    if (!(await this.confirm.ask({
      title: 'Remove cost',
      message: `Remove “${r.description}” (€${Number(r.amount).toFixed(2)})?`,
      confirmLabel: 'Remove', danger: true,
    }))) return;
    await this.data.deleteExpense(r.id);
    // If the dialog was open on this row, it no longer has anything to edit.
    if (this.editing()?.id === r.id) { this.editing.set(null); this.dialogOpen.set(false); }
    await this.reload();
    this.toast.success('Cost removed');
  }

  /** The ledger as CSV, for the accountant — same recipe as the invoice export. */
  exportCsv(): void {
    const rows = [['Date', 'Category', 'Description', 'Vendor', 'Job', 'Client', 'Rebilled', 'Amount']];
    for (const r of this.rows()) {
      rows.push([
        r.spent_on,
        r.category,
        r.description.replace(/"/g, '""'),
        (r.vendor ?? '').replace(/"/g, '""'),
        r.booking_ref ?? '',
        (r.client_name ?? '').replace(/"/g, '""'),
        r.billable ? 'yes' : 'no',
        Number(r.amount).toFixed(2),
      ]);
    }
    const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `expenses-${this.year()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
