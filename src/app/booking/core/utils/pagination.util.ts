import { Signal, computed, signal } from '@angular/core';

/**
 * One page size for every table in the admin, so the rhythm is the same wherever you are.
 * Change it here and every list follows.
 */
export const PAGE_SIZE = 30;

export interface Pagination<T> {
  /** 1-based, already clamped to the available pages. */
  readonly page: Signal<number>;
  readonly pageCount: Signal<number>;
  readonly total: Signal<number>;
  /** The rows for the current page. */
  readonly items: Signal<T[]>;
  setPage(p: number): void;
  /** Back to page one — call when the result SET changes (search, tab, year). */
  reset(): void;
}

/**
 * Local paging over a signal of rows.
 *
 * Deliberately split so the move to server-side paging is a change of ONE layer: the
 * paginator component only ever deals in `page` / `pageCount` / `total`, and a server
 * version swaps this helper for one that fetches a range. No template changes.
 */
export function paginate<T>(source: Signal<T[]>, size = PAGE_SIZE): Pagination<T> {
  const requested = signal(1);
  const total = computed(() => source().length);
  const pageCount = computed(() => Math.max(1, Math.ceil(total() / size)));

  // Clamped rather than stored raw: deleting the last row of page 4, or a filter that
  // shrinks the set, would otherwise leave you staring at an empty table.
  const page = computed(() => Math.min(Math.max(1, requested()), pageCount()));
  const items = computed(() => {
    const start = (page() - 1) * size;
    return source().slice(start, start + size);
  });

  return {
    page, pageCount, total, items,
    setPage: (p: number) => requested.set(p),
    reset: () => requested.set(1),
  };
}
