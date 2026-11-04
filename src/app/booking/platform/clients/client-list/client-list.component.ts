import { Component, computed, effect, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ClientEditorComponent } from '@booking/ui/client-editor/client-editor.component';
import { Client, ClientSummary } from '@booking/core/interfaces/booking.interface';
import {
  EMPTY_PERIOD, FilterGroup, FilterState, PeriodState, countsFor, isFilterEmpty,
} from '@booking/core/interfaces/list-filter.interface';
import { inPeriodAt, periodLabel } from '@booking/core/utils/period.util';
import { ListFiltersComponent } from '@booking/ui/list-filters/list-filters.component';
import { PaginatorComponent } from '@booking/ui/paginator/paginator.component';
import { paginate } from '@booking/core/utils/pagination.util';
import { onScopeChange } from '@booking/core/utils/scope-reload.util';

const GROUP_KEYS = ['money', 'activity', 'details'] as const;

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, ClientEditorComponent, PaginatorComponent, ListFiltersComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss',
})
export class ClientListComponent {
  readonly data = inject(BookingDataService);
  private readonly auth = inject(BookingsAuthService);

  /**
   * Reads `client_summary` (§35) rather than the plain `clients` table, because a
   * client record on its own is a name and an address: it cannot answer "who owes me"
   * or "who have I not worked with this year", which is most of what this page is for.
   * The money arrives computed; nothing here re-derives it.
   */
  readonly rows = signal<ClientSummary[]>([]);
  readonly loading = signal(true);

  readonly filterState = signal<FilterState>({});
  /** Last job rather than "since": when you last worked with someone is the useful
   *  question, and the date they were added answers almost nothing. */
  readonly period = signal<PeriodState>({ ...EMPTY_PERIOD, field: 'last_job_at' });
  readonly dateFields = [
    { value: 'last_job_at', label: 'last job' },
    { value: 'created_at',  label: 'date added' },
  ];

  private rowDate(c: ClientSummary): string | null {
    return this.period().field === 'created_at' ? c.created_at : c.last_job_at;
  }

  readonly inWindow = computed(() =>
    this.rows().filter(c => inPeriodAt(this.rowDate(c), this.period())));

  readonly visible = computed(() =>
    this.inWindow().filter(c => this.passesAll(c, this.filterState())));

  private optionMatches(c: ClientSummary, group: string, value: string): boolean {
    switch (group) {
      case 'money':
        if (value === 'owes')    return c.outstanding > 0.005;
        if (value === 'overdue') return c.overdue > 0.005;
        if (value === 'settled') return c.outstanding <= 0.005 && c.billed > 0.005;
        return false;
      case 'activity':
        if (value === 'worked')  return c.jobs > 0;
        if (value === 'never')   return c.jobs === 0;
        return false;
      case 'details':
        return value === 'billable' ? c.billable : !c.billable;
      default: return true;
    }
  }

  private passesAll(c: ClientSummary, st: FilterState, skip?: string): boolean {
    for (const key of GROUP_KEYS) {
      if (key === skip) continue;
      const sel = st[key] ?? [];
      if (sel.length && !sel.some(v => this.optionMatches(c, key, v))) return false;
    }
    return true;
  }

  readonly filterGroups = computed<FilterGroup[]>(() => {
    const st = this.filterState(), base = this.inWindow();
    const build = (key: string, label: string, opts: ReadonlyArray<[string, string]>, alert = ''): FilterGroup => {
      const counts = countsFor(base, opts.map(o => o[0]),
        c => this.passesAll(c, st, key), (c, v) => this.optionMatches(c, key, v));
      return {
        key, label,
        options: opts.map(([value, text]) => ({
          value, label: text, count: counts[value] ?? 0, alert: value === alert,
        })),
      };
    };
    return [
      build('money',    'Money',   [['owes', 'Owes me'], ['overdue', 'Overdue'], ['settled', 'All settled']], 'overdue'),
      build('activity', 'Work',    [['worked', 'Has worked with me'], ['never', 'No jobs yet']]),
      build('details',  'Billing', [['billable', 'Ready to invoice'], ['incomplete', 'Missing details']]),
    ];
  });

  readonly summary = computed(() => {
    const v = this.visible();
    if (!v.length) return '';
    const money = (x: number) => `€${Math.round(x).toLocaleString('en')}`;
    const owed = v.reduce((s, c) => s + c.outstanding, 0);
    return `${v.length} client${v.length === 1 ? '' : 's'} · ${money(v.reduce((s, c) => s + c.billed, 0))} billed`
         + (owed > 0.005 ? ` · ${money(owed)} outstanding` : '')
         + ` · ${periodLabel(this.period())} by ${this.period().field === 'created_at' ? 'date added' : 'last job'}`;
  });

  readonly emptyText = computed(() =>
    isFilterEmpty(this.filterState(), this.period())
      ? "No clients yet. Add one, or they'll appear here after your first booking."
      : 'No clients match these filters. Loosen one, or clear them.');

  readonly paged = paginate(this.visible);

  readonly editorOpen = signal(false);
  readonly editClient = signal<Client | null>(null);

  constructor() {
    // Also the page's FIRST load, exactly as the other list pages do it.
    onScopeChange(this.auth, () => void this.load());
    effect(() => { this.filterState(); this.period(); this.paged.reset(); });
  }

  private async load(): Promise<void> {
    this.loading.set(true);
    this.rows.set(await this.data.getClientSummary());
    this.loading.set(false);
  }

  openNew(): void { this.editClient.set(null); this.editorOpen.set(true); }
  openEdit(c: ClientSummary): void { this.editClient.set(c); this.editorOpen.set(true); }
  /** The editor writes through the service; re-read so the money columns follow. */
  async onSaved(): Promise<void> { await this.load(); }
}
