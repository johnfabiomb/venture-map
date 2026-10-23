import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { SelectComponent, SelectOption } from '@booking/ui/select/select.component';
import { ToastHostComponent } from '@booking/ui/toast/toast-host.component';
import { ConfirmHostComponent } from '@booking/ui/confirm/confirm-host.component';
import { TourHostComponent } from '@booking/ui/tour/tour-host.component';
import { TourService } from '@booking/ui/tour/tour.service';
import { TOURS } from '@booking/core/tours/tours';

@Component({
  selector: 'app-platform-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ToastHostComponent, ConfirmHostComponent,
            TourHostComponent, SelectComponent],
  providers: [BookingDataService],
  templateUrl: './platform-shell.component.html',
  styleUrl: './platform-shell.component.scss',
})
export class PlatformShellComponent implements OnInit {
  readonly auth = inject(BookingsAuthService);

  /** '' is a real choice here, not an empty state: the whole organization. */
  readonly workerOptions = computed<SelectOption[]>(() => [
    { value: '', label: 'Whole organization' },
    ...this.auth.staff().map(w => ({ value: w.id, label: w.name })),
  ]);

  /** Switching worker changes what every page is allowed to show. The re-pull is NOT done
   *  here: BookingDataService reacts to the scope itself (onScopeChange), so the caches
   *  follow for every page rather than only for the ones the switcher knows about. */
  onWhoChange(value: string): void {
    this.auth.setActiveStaff(value || null);
  }
  readonly data = inject(BookingDataService);
  private readonly router = inject(Router);

  /** Mobile drawer open/closed. */
  readonly menuOpen = signal(false);

  /** The currently-active org (shown as the sidebar link to /organizations). */
  readonly activeOrg = computed(() =>
    this.auth.orgs().find(o => o.id === this.auth.orgId()) ?? null);

  // ── Guided tours ─────────────────────────────────────────────────────────
  readonly tours = inject(TourService);
  /** Which tour belongs to the page you are on. */
  private tourFor(url: string): typeof TOURS[string] | null {
    const u = url.split('?')[0];
    if (u.includes('/bookings/new') || /\/bookings\/[^/]+\/edit/.test(u)) return TOURS['bookingForm'];
    if (u.startsWith('/bookings/list')) return TOURS['bookings'];
    if (u.startsWith('/bookings/work')) return TOURS['work'];
    if (u.startsWith('/bookings/invoices')) return TOURS['invoices'];
    // Settings has seven tabs; only the Documents one has a tour. Keyed on the query
    // param, or landing on Company would offer help about something else entirely.
    if (u.startsWith('/bookings/settings')) {
      return url.includes('tab=documents') ? TOURS['documents'] : null;
    }
    // Keep last: '/bookings/:id' is the catch-all, so it must not swallow the routes above.
    if (/^\/bookings\/[0-9a-f-]{36}$/.test(u)) return TOURS['bookingDetail'];
    return null;
  }
  readonly pageTour = signal<typeof TOURS[string] | null>(null);
  /** Opens the tour for this page from the Help button. */
  startTour(): void { const t = this.pageTour(); if (t) this.tours.start(t); }
  /** The whole platform, across pages. */
  startPlatformTour(): void { this.tours.start(TOURS['platform']); }

  constructor() {
    // Close the mobile drawer whenever a navigation completes.
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => this.menuOpen.set(false));

    // Offer the page's tour, and open it by itself the first time — or when it has gained
    // steps since it was last read, showing only those. The delay lets the page render,
    // because a step whose control is not on screen yet is skipped.
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      const t = this.tourFor((e as NavigationEnd).urlAfterRedirects);
      this.pageTour.set(t ?? null);
      // A tour already running drives its own navigation — reacting to it would restart
      // the page tour on top of the platform tour mid-step.
      if (this.tours.open()) return;
      // The whole-app tour is the ONE that may open itself unprompted, and only on a
      // brand-new account where there is nothing in progress to interrupt.
      if (this.tours.autoStart(TOURS['platform'], { allowFirstRun: true })) return;
      // A page tour only interrupts to show what has CHANGED since it was last read.
      // Opening the full thing on every page not yet visited made the tour appear
      // whenever you were trying to get something done.
      if (t) setTimeout(() => this.tours.autoStart(t), 700);
    });

    // Redirect to login when auth resolves to a non-admin state.
    effect(() => {
      const s = this.auth.state();
      if (s !== 'loading' && s !== 'admin') {
        this.router.navigate(['/bookings', 'login'], { replaceUrl: true });
      }
    });
  }

  ngOnInit(): void {
    // Wait for getSession() to complete so the JWT is confirmed fresh before
    // any DB query runs — prevents the token-refresh race that hangs queries.
    // Resolving auth sets orgId, which is what BookingDataService's scope effect waits
    // for — so the first load follows from this rather than being triggered here.
    void this.auth.initialize();
  }
}
