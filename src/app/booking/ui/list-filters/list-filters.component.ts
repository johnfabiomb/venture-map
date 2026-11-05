import { ChangeDetectionStrategy, Component, computed, input, model, signal } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  EMPTY_PERIOD, FilterGroup, FilterState, PeriodPreset, PeriodState, isFilterEmpty,
} from '@booking/core/interfaces/list-filter.interface';
import { PERIOD_LABELS, periodLabel, resolvePeriod } from '@booking/core/utils/period.util';

/** The period menu is addressed by the same signal as the groups, so it needs a key no
 *  group can ever collide with. */
const PERIOD_KEY = '__period';

/**
 * The filter bar shared by every list page.
 *
 * Presentational on purpose: it renders the groups it is given and reports what is
 * picked. It never knows what a "booking" or an "invoice" is, which is why the same
 * control serves four pages whose data could not be less alike.
 *
 * Counts belong to the HOST, because only the host can say how many rows an option
 * would add given everything else already picked. Computing them here would mean this
 * component holding the rows, and then it would no longer be shareable.
 *
 * It is ONE ROW: a button per dimension that opens its options in an overlay, the way
 * Stripe, Airtable and Linear all do it. Laying every option out flat read well with
 * three of them and cost six rows of screen with five — the table, which is the thing
 * being filtered, was pushed below the fold before a single filter had been used. The
 * counts are not lost, they move inside the menus; what stays on the collapsed button
 * is the one number worth seeing without opening anything (what is unpaid, what is
 * overdue), because that is the number that makes someone open it.
 */
@Component({
  selector: 'app-list-filters',
  standalone: true,
  imports: [OverlayModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeMenu()' },
  templateUrl: './list-filters.component.html',
  styleUrl: './list-filters.component.scss',
})
export class ListFiltersComponent {
  readonly groups = input<FilterGroup[]>([]);
  readonly state = model<FilterState>({});
  readonly period = model<PeriodState>(EMPTY_PERIOD);

  /** Which dates this page can filter on. One entry hides the switch entirely. */
  readonly dateFields = input<ReadonlyArray<{ value: string; label: string }>>([]);
  /** A sentence describing what is on screen, e.g. "26 bookings · €6,220 · 18 unpaid". */
  readonly summary = input('');

  readonly PERIOD_KEY = PERIOD_KEY;
  readonly presets = PERIOD_LABELS;

  /** Which menu is open, by group key. One at a time: two open panels overlap. */
  readonly openKey = signal<string | null>(null);

  readonly isCustom = computed(() => this.period().preset === 'custom');
  readonly showFieldSwitch = computed(() => this.dateFields().length > 1);
  readonly anyActive = computed(() => !isFilterEmpty(this.state(), this.period()));
  readonly periodText = computed(() => periodLabel(this.period()));
  readonly periodOn = computed(() => this.period().preset !== 'all');

  /** Below the trigger, flipping above it when the viewport runs out. */
  readonly positions = [
    { originX: 'start' as const, originY: 'bottom' as const, overlayX: 'start' as const, overlayY: 'top' as const, offsetY: 5 },
    { originX: 'start' as const, originY: 'top' as const, overlayX: 'start' as const, overlayY: 'bottom' as const, offsetY: -5 },
    { originX: 'end' as const, originY: 'bottom' as const, overlayX: 'end' as const, overlayY: 'top' as const, offsetY: 5 },
  ];

  toggleMenu(key: string): void { this.openKey.update(k => (k === key ? null : key)); }
  closeMenu(): void { this.openKey.set(null); }

  selected(groupKey: string): string[] { return this.state()[groupKey] ?? []; }

  isOn(groupKey: string, value: string): boolean {
    return this.selected(groupKey).includes(value);
  }

  /** Toggling writes a NEW object: the host's computeds are signals, and mutating the
   *  array in place would change nothing on screen. */
  toggle(groupKey: string, value: string): void {
    const current = this.selected(groupKey);
    const next = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    this.state.set({ ...this.state(), [groupKey]: next });
  }

  clearGroup(groupKey: string): void {
    this.state.set({ ...this.state(), [groupKey]: [] });
  }

  clearAll(): void {
    const cleared: FilterState = {};
    for (const g of this.groups()) cleared[g.key] = [];
    this.state.set(cleared);
    this.period.set(resolvePeriod('all', this.period()));
    this.closeMenu();
  }

  /**
   * What a button has been narrowed to, or '' while it is untouched. The dimension name
   * is rendered separately and stays quiet: "Payment" is the question and is always
   * there, "Unpaid +1" is the answer and is the only part worth reading twice. With
   * four filters on, emphasising both turns the row into a wall of highlight.
   */
  valueLabel(g: FilterGroup): string {
    const picked = g.options.filter(o => this.isOn(g.key, o.value));
    if (!picked.length) return '';
    return picked.length > 1 ? `${picked[0].label} +${picked.length - 1}` : picked[0].label;
  }

  /**
   * The number worth seeing before anything is opened: what is unpaid, what is overdue.
   * Shown only while the group is untouched — next to a chosen filter the same red
   * number would read as that filter's count and say the opposite of what it means.
   */
  alertCount(g: FilterGroup): number {
    if (this.selected(g.key).length) return 0;
    return g.options.reduce((n, o) => n + (o.alert ? o.count ?? 0 : 0), 0);
  }

  alertTitle(g: FilterGroup): string {
    return g.options
      .filter(o => o.alert && (o.count ?? 0) > 0)
      .map(o => `${o.count} ${o.label.toLowerCase()}`)
      .join(', ');
  }

  pickPreset(preset: PeriodPreset): void {
    this.period.set(resolvePeriod(preset, this.period()));
    // A custom range is not chosen until its dates are, and they are in this panel.
    if (preset !== 'custom') this.closeMenu();
  }

  setFrom(v: string): void { this.period.set({ ...this.period(), preset: 'custom', from: v || null }); }
  setTo(v: string): void   { this.period.set({ ...this.period(), preset: 'custom', to:   v || null }); }
  setField(v: string): void { this.period.set({ ...this.period(), field: v }); }
}
