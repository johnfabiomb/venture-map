import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { PAGE_SIZE } from '@booking/core/utils/pagination.util';

/**
 * Pager for every admin table.
 *
 * Purely presentational: it knows the page, the page count and the total, and emits the
 * page wanted. It has no idea whether the rows were sliced in the browser or fetched from
 * the server, which is what lets the local helper be swapped for a server one later
 * without touching a single template.
 */
@Component({
  selector: 'app-paginator',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (pageCount() > 1) {
      <nav class="pg" role="navigation" aria-label="Pagination">
        <span class="pg__range">{{ from() }}–{{ to() }} of {{ total() }}</span>

        <div class="pg__controls">
          <button type="button" class="pg__btn" [disabled]="page() === 1"
                  (click)="go(page() - 1)" aria-label="Previous page">‹</button>

          @for (p of pages(); track p) {
            @if (p === 0) {
              <span class="pg__gap" aria-hidden="true">…</span>
            } @else {
              <button type="button" class="pg__btn pg__btn--num"
                      [class.pg__btn--on]="p === page()"
                      [attr.aria-current]="p === page() ? 'page' : null"
                      (click)="go(p)">{{ p }}</button>
            }
          }

          <button type="button" class="pg__btn" [disabled]="page() === pageCount()"
                  (click)="go(page() + 1)" aria-label="Next page">›</button>
        </div>
      </nav>
    }
  `,
  styles: [`
    .pg {
      display: flex; align-items: center; justify-content: space-between;
      gap: 12px; flex-wrap: wrap; margin-top: 14px;
    }
    .pg__range { font-size: 12px; font-weight: 600; color: #94a3b8; }
    .pg__controls { display: flex; align-items: center; gap: 4px; margin-left: auto; }
    .pg__btn {
      min-width: 34px; height: 34px; padding: 0 8px;
      display: inline-flex; align-items: center; justify-content: center;
      background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;
      font-family: inherit; font-size: 13px; font-weight: 700; color: #475569; cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    .pg__btn:hover:not(:disabled):not(.pg__btn--on) { border-color: #94a3b8; }
    .pg__btn:disabled { opacity: 0.4; cursor: default; }
    .pg__btn--on { background: #F4A922; border-color: #F4A922; color: #000; }
    .pg__gap { padding: 0 2px; color: #94a3b8; font-size: 13px; }

    /* On a phone the numbers are the first thing to go: prev/next plus the range line
       is enough, and a wrapped row of page buttons is worse than no page buttons. */
    @media (max-width: 560px) {
      .pg { justify-content: space-between; }
      .pg__btn--num, .pg__gap { display: none; }
      .pg__controls { gap: 8px; }
      .pg__btn { min-width: 44px; height: 40px; }
    }
  `],
})
export class PaginatorComponent {
  readonly page = input.required<number>();
  readonly pageCount = input.required<number>();
  readonly total = input.required<number>();
  readonly pageChange = output<number>();

  /** Taken, not derived: ceil(total / pageCount) is NOT the page size — 102 rows over 4
   *  pages gives 26, so the range read "1–26 of 102" while 30 rows sat on screen. */
  readonly pageSize = input<number>(PAGE_SIZE);

  readonly from = computed(() => this.total() === 0 ? 0 : (this.page() - 1) * this.pageSize() + 1);
  readonly to = computed(() => Math.min(this.page() * this.pageSize(), this.total()));

  /**
   * First, last, and a window around the current page. `0` is a gap marker — with 40
   * pages a full run of buttons would be its own scrollbar.
   */
  readonly pages = computed<number[]>(() => {
    const count = this.pageCount(), cur = this.page();
    if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1);
    const out = new Set<number>([1, count, cur, cur - 1, cur + 1]);
    if (cur <= 3) { out.add(2); out.add(3); out.add(4); }
    if (cur >= count - 2) { out.add(count - 1); out.add(count - 2); out.add(count - 3); }
    const sorted = [...out].filter(p => p >= 1 && p <= count).sort((a, b) => a - b);
    const withGaps: number[] = [];
    sorted.forEach((p, i) => {
      if (i > 0 && p - sorted[i - 1] > 1) withGaps.push(0);
      withGaps.push(p);
    });
    return withGaps;
  });

  go(p: number): void {
    if (p < 1 || p > this.pageCount() || p === this.page()) return;
    this.pageChange.emit(p);
  }
}
