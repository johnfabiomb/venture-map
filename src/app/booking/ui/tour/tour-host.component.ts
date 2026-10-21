import { ChangeDetectionStrategy, Component, HostListener, computed, effect, inject, signal } from '@angular/core';
import { TourService } from './tour.service';

interface SpotBox { top: number; left: number; width: number; height: number; }

/**
 * The guided tour overlay: a spotlight on the control a step points at, and a card saying
 * what it does. Mounted ONCE in the platform shell, like the toast and confirm hosts.
 *
 * The spotlight is a box with a very large outward shadow rather than four dimming panels
 * or an SVG mask — one element, no seams between panels, and the hole follows the target
 * exactly as it moves or the window resizes.
 */
@Component({
  selector: 'app-tour-host',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (tour.open()) {
      <div class="tr" role="dialog" aria-modal="true" [attr.aria-label]="heading()">
        @if (spot(); as b) {
          <div class="tr__spot"
               [style.top.px]="b.top" [style.left.px]="b.left"
               [style.width.px]="b.width" [style.height.px]="b.height"></div>
        } @else {
          <div class="tr__dim"></div>
        }

        <div class="tr__card" [style.top.px]="cardTop()" [style.left.px]="cardLeft()">
          <div class="tr__head">
            <span class="tr__label">{{ heading() }}</span>
            <button type="button" class="tr__x" (click)="tour.dismiss()" aria-label="Close">×</button>
          </div>
          <h3 class="tr__title">{{ tour.current()?.title }}</h3>
          <p class="tr__text">{{ tour.current()?.text }}</p>
          @if (tour.moving()) { <p class="tr__moving">Taking you there…</p> }
          <div class="tr__foot">
            <span class="tr__count">{{ tour.index() + 1 }} / {{ tour.steps().length }}</span>
            <div class="tr__btns">
              @if (tour.index() > 0) {
                <button type="button" class="btn btn--ghost btn--sm" (click)="tour.back()">Back</button>
              }
              <button type="button" class="btn btn--primary btn--sm" (click)="tour.next()">
                {{ tour.atEnd() ? 'Done' : 'Next' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .tr { position: fixed; inset: 0; z-index: 1200; }
    /* No pointer-events on the backdrop itself: the spotlight's shadow IS the backdrop, and
       a transparent full-screen catcher would block the control being pointed at. */
    .tr__dim { position: absolute; inset: 0; background: rgba(15,23,42,0.55); }
    .tr__spot {
      position: absolute; border-radius: 10px; pointer-events: none;
      box-shadow: 0 0 0 9999px rgba(15,23,42,0.55), 0 0 0 3px #F4A922;
      transition: top 0.2s ease, left 0.2s ease, width 0.2s ease, height 0.2s ease;
    }
    .tr__card {
      position: absolute; width: min(330px, calc(100vw - 32px));
      background: #fff; border-radius: 12px; padding: 16px;
      box-shadow: 0 18px 50px rgba(15,23,42,0.3);
      display: flex; flex-direction: column; gap: 8px;
    }
    .tr__head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .tr__label {
      font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.07em;
      color: #92400e; background: rgba(244,169,34,0.16); padding: 3px 8px; border-radius: 10px;
    }
    .tr__x { border: 0; background: none; font-size: 20px; line-height: 1; color: #94a3b8; cursor: pointer; }
    .tr__x:hover { color: #0f172a; }
    .tr__title { margin: 0; font-size: 15px; font-weight: 800; color: #0f172a; }
    .tr__text { margin: 0; font-size: 13px; line-height: 1.55; color: #475569; }
    .tr__moving { margin: 0; font-size: 11.5px; font-weight: 700; color: #92400e; }
    .tr__foot { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 4px; }
    .tr__count { font-size: 11.5px; font-weight: 700; color: #94a3b8; }
    .tr__btns { display: flex; gap: 8px; }
  `],
})
export class TourHostComponent {
  readonly tour = inject(TourService);

  readonly spot = signal<SpotBox | null>(null);
  readonly cardTop = signal(80);
  readonly cardLeft = signal(24);

  readonly heading = computed(() => {
    const t = this.tour.tour();
    if (!t) return '';
    return this.tour.isWhatsNew() ? `New in ${t.label}` : t.label;
  });

  constructor() {
    // Re-measure whenever the step changes. queueMicrotask so the card exists first —
    // its height decides whether it sits above or below the target.
    effect(() => {
      this.tour.index();
      this.tour.steps();
      // `moving` is read so the effect re-runs when a cross-page step finishes navigating
      // — the measurement taken before the new page rendered would be of the old one.
      this.tour.moving();
      queueMicrotask(() => this.place());
    });
  }

  @HostListener('window:resize') onResize(): void { this.place(); }
  @HostListener('window:scroll') onScroll(): void { this.place(); }
  /** Escape dismisses without marking the tour read — see TourService.dismiss. */
  @HostListener('document:keydown.escape') onEsc(): void { if (this.tour.open()) this.tour.dismiss(); }

  private place(): void {
    const step = this.tour.current();
    const pad = 8;
    const el = step?.target ? document.querySelector(step.target) : null;

    if (!el) {
      this.spot.set(null);
      // Centred, because a step with no target is about the page as a whole.
      this.cardTop.set(Math.max(24, window.innerHeight / 2 - 110));
      this.cardLeft.set(Math.max(16, window.innerWidth / 2 - 165));
      return;
    }

    const r = el.getBoundingClientRect();
    // Bring it into view before measuring, or the spotlight lands off screen on a long page.
    if (r.top < 0 || r.bottom > window.innerHeight) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    const b = el.getBoundingClientRect();
    this.spot.set({ top: b.top - pad, left: b.left - pad, width: b.width + pad * 2, height: b.height + pad * 2 });

    const cardW = Math.min(330, window.innerWidth - 32);
    const cardH = 190;
    // Below the target when there is room, otherwise above it.
    const below = b.bottom + pad + 12;
    this.cardTop.set(below + cardH < window.innerHeight ? below : Math.max(16, b.top - cardH - 12));
    this.cardLeft.set(Math.min(Math.max(16, b.left), window.innerWidth - cardW - 16));
  }
}
