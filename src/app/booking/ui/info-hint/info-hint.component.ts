import { ChangeDetectionStrategy, Component, HostListener, input, signal } from '@angular/core';

/**
 * The (i) next to a field label. Help text belongs behind this, not permanently under
 * the input: a form whose every field carries a paragraph reads as a manual, and the
 * owner fills this one in several times a week and needs none of it.
 *
 * Click, not hover — hover has no meaning on a phone, and this app is mobile-first.
 */
@Component({
  selector: 'app-info-hint',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" class="ih__btn" [class.ih__btn--on]="open()"
            [attr.aria-expanded]="open()"
            [attr.aria-label]="(open() ? 'Hide help for ' : 'Help for ') + label()"
            (click)="toggle($event)">
      <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
        <circle cx="8" cy="4.2" r="1.2" fill="currentColor"/>
        <path d="M8 7.2v4.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    @if (open()) {
      <span class="ih__pop" role="tooltip"><ng-content /></span>
    }
  `,
  styles: [`
    :host { position: relative; display: inline-flex; vertical-align: middle; }

    .ih__btn {
      /* The visible dot is 18px, but the button is 28px so it clears the 24px minimum
         touch target without pushing the label line taller. */
      width: 28px; height: 28px; margin: -5px; padding: 0;
      display: inline-flex; align-items: center; justify-content: center;
      background: none; border: none; cursor: pointer; color: #94a3b8;
      -webkit-tap-highlight-color: transparent;
    }
    .ih__btn svg {
      box-sizing: content-box; padding: 2px;
      border: 1.3px solid currentColor; border-radius: 50%;
    }
    .ih__btn:hover, .ih__btn--on { color: #F4A922; }
    .ih__btn:focus-visible { outline: 2px solid #F4A922; outline-offset: 2px; border-radius: 50%; }

    .ih__pop {
      position: absolute; top: calc(100% + 6px); left: -6px; z-index: 40;
      /* Clamped against the viewport, not just a fixed width — at 320px the fixed 260px
         box plus the field's own padding would have run off the right edge. */
      width: max-content; max-width: min(280px, calc(100vw - 40px));
      background: #1e293b; color: #f1f5f9;
      font-size: 12px; font-weight: 400; line-height: 1.5; text-transform: none;
      letter-spacing: normal; text-align: left;
      padding: 9px 11px; border-radius: 8px;
      box-shadow: 0 6px 20px rgba(15, 23, 42, 0.22);
    }
    .ih__pop::before {
      content: ''; position: absolute; bottom: 100%; left: 11px;
      border: 5px solid transparent; border-bottom-color: #1e293b;
    }
    .ih__pop strong { color: #fff; font-weight: 700; }
  `],
})
export class InfoHintComponent {
  /** What this explains — read out by screen readers, never shown. */
  readonly label = input('this field');
  readonly open = signal(false);

  toggle(e: Event): void {
    // Without this the document listener below fires on the same click and closes it again.
    e.stopPropagation();
    this.open.update(v => !v);
  }

  @HostListener('document:click')
  closeOnOutsideClick(): void { if (this.open()) this.open.set(false); }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void { if (this.open()) this.open.set(false); }
}
