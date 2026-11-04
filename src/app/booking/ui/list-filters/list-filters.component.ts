import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectComponent, SelectOption } from '@booking/ui/select/select.component';
import {
  FilterGroup, FilterState, PeriodPreset, PeriodState, isFilterEmpty,
} from '@booking/core/interfaces/list-filter.interface';
import { PERIOD_LABELS, periodLabel, resolvePeriod } from '@booking/core/utils/period.util';

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
 */
@Component({
  selector: 'app-list-filters',
  standalone: true,
  imports: [FormsModule, SelectComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-filters.component.html',
  styleUrl: './list-filters.component.scss',
})
export class ListFiltersComponent {
  readonly groups = input<FilterGroup[]>([]);
  readonly state = model<FilterState>({});
  readonly period = model<PeriodState>({ preset: 'all', from: null, to: null, field: '' });

  /** Which dates this page can filter on. One entry hides the switch entirely. */
  readonly dateFields = input<ReadonlyArray<{ value: string; label: string }>>([]);
  /** A sentence describing what is on screen, e.g. "26 bookings · €6,220 · 18 unpaid". */
  readonly summary = input('');

  readonly presetOptions: SelectOption[] = PERIOD_LABELS.map(p => ({ value: p.value, label: p.label }));
  readonly fieldOptions = computed<SelectOption[]>(() =>
    this.dateFields().map(f => ({ value: f.value, label: f.label })));

  readonly isCustom = computed(() => this.period().preset === 'custom');
  readonly showFieldSwitch = computed(() => this.dateFields().length > 1);
  readonly anyActive = computed(() => !isFilterEmpty(this.state(), this.period()));
  readonly periodText = computed(() => periodLabel(this.period()));

  /** app-select is two-way on a string, so the preset arrives as one. */
  get presetValue(): string { return this.period().preset; }
  set presetValue(v: string) { this.period.set(resolvePeriod(v as PeriodPreset, this.period())); }

  get fieldValue(): string { return this.period().field; }
  set fieldValue(v: string) { this.period.set({ ...this.period(), field: v }); }

  setFrom(v: string): void { this.period.set({ ...this.period(), preset: 'custom', from: v || null }); }
  setTo(v: string): void   { this.period.set({ ...this.period(), preset: 'custom', to:   v || null }); }

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
  }
}
