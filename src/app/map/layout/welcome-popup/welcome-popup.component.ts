import { Component, DestroyRef, OnInit, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, filter, map, merge, of, take } from 'rxjs';
import { AuthService } from '@map/core/services/auth.service';
import { SignInFormComponent, FormState } from '@map/ui/sign-in-form/sign-in-form.component';
import { InAppBrowserService } from '@map/core/services/in-app-browser.service';
import { BenefitsListComponent } from '@map/ui/benefits-list/benefits-list.component';

@Component({
  selector: 'app-welcome-popup',
  standalone: true,
  imports: [CommonModule, SignInFormComponent, BenefitsListComponent],
  template: `
    <div *ngIf="visible()" class="wp-backdrop" (click)="dismiss()">
      <div class="wp-card" (click)="$event.stopPropagation()">

        <!-- Welcome content: shown on default and IAB email-input states -->
        <ng-container *ngIf="formState() === 'default' || formState() === 'email-input'">
          <div class="wp-header">
            <span class="wp-emoji">🗺️</span>
            <img class="wp-photo" src="/assets/images/profile.webp" alt="John Montaño" width="52" height="52" style="flex-shrink:0">
          </div>
          <p class="wp-hey">Hey, I'm John 👋</p>
          <h2 class="wp-title">Welcome to My Malta Map!</h2>
          <p class="wp-sub">I've mapped out my favourite spots — sign in and I'll save yours too.</p>
          <app-benefits-list></app-benefits-list>
        </ng-container>

        <app-sign-in-form (stateChange)="formState.set($event)"></app-sign-in-form>

        <button *ngIf="formState() === 'default' || formState() === 'email-input'" class="wp-ghost" (click)="dismiss()">
          Continue as guest
        </button>

      </div>
    </div>
  `,
  styles: [`
    .wp-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1200;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 20px;
      overflow-y: auto;
      animation: wpFadeIn 0.3s ease;
    }

    .wp-card {
      background: var(--color-bg);
      border-radius: 22px;
      padding: 36px 24px 26px;
      width: 100%;
      max-width: 340px;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22), 0 4px 16px rgba(0, 0, 0, 0.1);
      animation: wpSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .wp-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 18px;
    }

    .wp-emoji {
      font-size: 56px;
      line-height: 1;
      width: 52px;
      text-align: center;
    }

    .wp-photo {
      width: 52px;
      height: 52px;
      border-radius: var(--radius-lg);
      object-fit: cover;
      object-position: center top;
      border: 2px solid var(--color-primary);
      box-shadow: 0 0 0 3px rgba(244, 169, 34, 0.15);
    }

    .wp-hey {
      margin: 0 0 4px;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-primary);
      letter-spacing: 0.01em;
    }

    .wp-title {
      margin: 0 0 8px;
      font-size: 20px;
      font-weight: 800;
      color: var(--color-text-base);
      letter-spacing: -0.4px;
      line-height: 1.2;
    }

    .wp-sub {
      margin: 0 0 20px;
      font-size: 12.5px;
      color: var(--color-text-muted);
      line-height: 1.5;
    }

    .wp-ghost {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: var(--color-text-muted);
      padding: 6px 0;
      transition: color var(--transition);
      &:hover { color: var(--color-text-secondary); }
    }

    @keyframes wpFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @keyframes wpSlideUp {
      from { opacity: 0; transform: translateY(24px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

  `],
})
export class WelcomePopupComponent implements OnInit {
  private readonly auth        = inject(AuthService);
  private readonly iab         = inject(InAppBrowserService);
  private readonly platformId  = inject(PLATFORM_ID);

  readonly visible   = signal(false);
  readonly formState = signal<FormState>('default');
  private readonly STORAGE_KEY = 'vm_welcome_shown';

  // Pages people arrive at to READ (the 30 Places list is what the Instagram "30"
  // DM links to). A sign-in wall there blocks the very thing they came for, so the
  // popup waits for the first map page instead.
  private static readonly QUIET_PATHS = ['/malta/30-places-2026'];

  private readonly router     = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // Initialize correct IAB state before first render so header/benefits stay visible
    if (isPlatformBrowser(this.platformId) && this.iab.isInAppBrowser()) {
      this.formState.set(this.iab.isAndroid() ? 'android-redirect' : 'email-input');
    }

    // Auto-dismiss when sign-in completes
    effect(() => {
      if (this.auth.isLoggedIn() && this.visible()) {
        this.visible.set(false);
      }
    });
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.auth.isLoggedIn()) return;
    if (localStorage.getItem(this.STORAGE_KEY)) return;

    // By the time this runs the landing navigation has usually already ended, so
    // start from the current URL; if one is still in flight, wait for it instead.
    const current$ = this.router.getCurrentNavigation() ? EMPTY : of(this.router.url);
    const ended$ = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => e.urlAfterRedirects),
    );
    merge(current$, ended$).pipe(
      map(url => url.split(/[?#]/)[0].replace(/\/$/, '')),
      filter(path => !WelcomePopupComponent.QUIET_PATHS.includes(path)),
      take(1),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => this.showAfterDelay());
  }

  private showAfterDelay(): void {
    setTimeout(() => {
      if (!this.auth.isLoggedIn()) {
        this.visible.set(true);
        localStorage.setItem(this.STORAGE_KEY, '1');
      }
    }, 2500);
  }

  dismiss(): void {
    this.visible.set(false);
  }
}
