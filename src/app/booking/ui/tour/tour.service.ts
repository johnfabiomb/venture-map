import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface TourStep {
  /** CSS selector for the control this step points at. Omit for a card with no target
   *  (a welcome or a closing step). Use a `data-tour` attribute, never a styling class —
   *  classes change whenever the page is restyled and the tour silently stops pointing
   *  at anything. */
  target?: string;
  title: string;
  text: string;
  /**
   * The tour version this step was ADDED in. This is what makes the tours useful after
   * the first week: when a module gains a feature, its version is bumped and only the
   * steps newer than what you last saw are shown, as "new in Bookings". Without it a
   * tour is read once and never again, which is exactly how you end up with a feature
   * you do not know how to use.
   */
  since?: number;
  /**
   * Go to this route before showing the step. Only the whole-platform tour uses it: a
   * tour explaining how the MODULES FIT cannot stay on one page, because the thing it is
   * explaining is the relationship between them.
   */
  route?: string;
}

export interface Tour {
  key: string;
  /** Shown in the header: "Bookings". */
  label: string;
  /** Bump whenever steps are added, and mark those steps with the same `since`. */
  version: number;
  steps: TourStep[];
}

const SEEN_KEY = 'jm-tours-seen';

@Injectable({ providedIn: 'root' })
export class TourService {
  private readonly router = inject(Router);
  /** True while a step's route is loading, so the card can say so instead of flashing
   *  an empty spotlight over a half-rendered page. */
  readonly moving = signal(false);

  readonly tour = signal<Tour | null>(null);
  readonly steps = signal<TourStep[]>([]);
  readonly index = signal(0);
  /** True when showing only what changed since this tour was last read. */
  readonly isWhatsNew = signal(false);

  readonly current = computed(() => this.steps()[this.index()] ?? null);
  readonly open = computed(() => this.tour() !== null && this.steps().length > 0);
  readonly atEnd = computed(() => this.index() >= this.steps().length - 1);

  /** Which version of each tour has been read. */
  /**
   * Tours put aside with × or Escape, for this browsing session only.
   *
   * Dismissing recorded nothing, so `autoStart` happily reopened the same tour on the
   * very next navigation — which, since it fires on every route change, meant the tour
   * reappeared every time you tried to get on with something. Marking it fully read would
   * be the other extreme: "not now" should not cost you the tour for ever. In memory, so
   * it comes back next time the app is opened.
   */
  private snoozed = new Set<string>();

  private seen(): Record<string, number> {
    try { return JSON.parse(localStorage.getItem(SEEN_KEY) ?? '{}'); } catch { return {}; }
  }
  private markSeen(key: string, version: number): void {
    try {
      localStorage.setItem(SEEN_KEY, JSON.stringify({ ...this.seen(), [key]: version }));
    } catch { /* storage blocked — the tour simply opens again next time */ }
  }

  /** A step can run when its control is actually on screen, or it has no control. A step
   *  pointing at something hidden behind a collapsed panel would spotlight nothing. */
  private visible(s: TourStep): boolean {
    if (!s.target) return true;
    const el = document.querySelector(s.target);
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }

  /**
   * Start the whole tour, from a button.
   *
   * Steps with a `route` are NOT pre-filtered on visibility: their control is on another
   * page and cannot be measured from here. They are filtered as they are reached instead.
   */
  start(tour: Tour): void {
    this.snoozed.delete(tour.key);
    const steps = tour.steps.filter(s => s.route || this.visible(s));
    if (!steps.length) return;
    this.isWhatsNew.set(false);
    this.tour.set(tour);
    this.steps.set(steps);
    this.index.set(0);
    void this.enter(0);
  }

  /**
   * Open on its own — but only when that is genuinely worth interrupting someone for.
   *
   * By default that is ONLY the "what's new" case: a module you have already read a tour
   * for has gained steps, and being told about a feature you asked for beats discovering
   * it by accident. A full first-time tour is NOT opened this way, because it fired on
   * every page you had not yet visited, which meant the tour appeared whenever you were
   * trying to get on with something. Those stay one click away on the sidebar button.
   *
   * `allowFirstRun` is for the whole-app tour on a brand-new account, where there is no
   * work in progress to interrupt.
   */
  autoStart(tour: Tour, opts: { allowFirstRun?: boolean } = {}): boolean {
    if (this.snoozed.has(tour.key)) return false;
    // Never interrupt a tour that is already running — including itself, since the
    // platform tour drives its own navigation.
    if (this.tour() !== null) return false;
    const seenVersion = this.seen()[tour.key];
    if (seenVersion === tour.version) return false;

    if (seenVersion === undefined) {
      if (!opts.allowFirstRun) return false;
      this.start(tour);
      return this.open();
    }

    const fresh = tour.steps.filter(s => (s.since ?? 0) > seenVersion && this.visible(s));
    if (!fresh.length) { this.markSeen(tour.key, tour.version); return false; }
    this.isWhatsNew.set(true);
    this.tour.set(tour);
    this.steps.set(fresh);
    this.index.set(0);
    return true;
  }

  next(): void {
    if (this.atEnd()) { this.finish(); return; }
    const i = this.index() + 1;
    this.index.set(i);
    void this.enter(i);
  }
  back(): void {
    const i = Math.max(0, this.index() - 1);
    this.index.set(i);
    void this.enter(i);
  }

  /**
   * Navigate if the step lives on another page, and give it a moment to render before the
   * overlay measures. Without the wait the spotlight is drawn against the OLD page and
   * lands on nothing — the single most visible way a cross-page tour looks broken.
   */
  private async enter(i: number): Promise<void> {
    const step = this.steps()[i];
    if (!step?.route) return;
    const here = this.router.url.split('?')[0];
    if (here === step.route) return;
    this.moving.set(true);
    try {
      await this.router.navigateByUrl(step.route);
      await new Promise(r => setTimeout(r, 450));
    } finally { this.moving.set(false); }
  }

  /** Ends the tour and records it as read, so it does not reopen until the next version. */
  finish(): void {
    const t = this.tour();
    if (t) this.markSeen(t.key, t.version);
    this.tour.set(null);
    this.steps.set([]);
    this.index.set(0);
    this.isWhatsNew.set(false);
  }

  /** Dismiss WITHOUT marking it read — "not now" should not cost you the tour for ever.
   *  It is snoozed for this session so it stops reappearing, and stays available from the
   *  sidebar button, which calls start() and ignores the snooze. */
  dismiss(): void {
    const t = this.tour();
    if (t) this.snoozed.add(t.key);
    this.tour.set(null);
    this.steps.set([]);
    this.index.set(0);
    this.isWhatsNew.set(false);
  }
}
