import { ParamMap, Params } from '@angular/router';
import {
  EMPTY_PERIOD, FilterState, PeriodPreset, PeriodState,
} from '@booking/core/interfaces/list-filter.interface';
import { resolvePeriod } from '@booking/core/utils/period.util';

/**
 * Filters live in the URL, as the bookings tabs already did.
 *
 * That is what makes a filtered view shareable, survive a refresh, and work with the
 * browser's back button. State held only in a signal silently resets the moment the
 * page is reopened, which on a money page reads as the numbers having changed.
 *
 * Encoding is deliberately readable (`?status=pending,booked&period=this_month`) so a
 * link can be understood, and edited, by a human.
 */

const PRESETS: ReadonlySet<string> =
  new Set(['all', 'this_month', 'last_month', 'this_quarter', 'this_year', 'last_year', 'custom']);

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Query params for a filter state. Empty groups are OMITTED, so a default view has a clean URL. */
export function filtersToParams(state: FilterState, period: PeriodState,
                                groupKeys: readonly string[]): Params {
  const params: Params = {};
  for (const key of groupKeys) {
    const vals = state[key] ?? [];
    params[key] = vals.length ? vals.join(',') : null;   // null REMOVES the param
  }
  params['period'] = period.preset === 'all' ? null : period.preset;
  params['by']     = period.field || null;
  params['from']   = period.preset === 'custom' ? period.from : null;
  params['to']     = period.preset === 'custom' ? period.to   : null;
  return params;
}

/** Read a filter state back out of the URL, ignoring anything malformed. */
export function filtersFromParams(map: ParamMap, groupKeys: readonly string[],
                                  defaultField: string): { state: FilterState; period: PeriodState } {
  const state: FilterState = {};
  for (const key of groupKeys) {
    const raw = map.get(key);
    state[key] = raw ? raw.split(',').map(v => v.trim()).filter(Boolean) : [];
  }

  const rawPreset = map.get('period') ?? 'all';
  const preset: PeriodPreset = (PRESETS.has(rawPreset) ? rawPreset : 'all') as PeriodPreset;
  const field = map.get('by') || defaultField;

  if (preset === 'custom') {
    // A half-open custom range is legitimate (everything after a date), but a malformed
    // one must not silently filter the list down to nothing.
    const from = map.get('from'), to = map.get('to');
    return {
      state,
      period: {
        preset, field,
        from: from && DATE_RE.test(from) ? from : null,
        to:   to   && DATE_RE.test(to)   ? to   : null,
      },
    };
  }
  return { state, period: resolvePeriod(preset, { ...EMPTY_PERIOD, field }) };
}
