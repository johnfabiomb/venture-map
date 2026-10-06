import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

/**
 * A card that can be folded away.
 *
 * The booking page had nine cards all open at once — billing, invoices, facts, delivery,
 * payments, record-a-payment, costs — which is a wall on a desktop and endless scrolling
 * on a phone. Sections that belong to a later stage of the job (delivery) or that are a
 * task rather than a fact (record a payment) start closed.
 *
 * The toggle is its own <button> with the actions beside it, never wrapping them: a
 * button inside a button is invalid and the inner one stops responding.
 */
@Component({
  selector: 'app-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pn" [class.pn--open]="isOpen()">
      <div class="pn__head">
        <button type="button" class="pn__toggle" (click)="toggle()"
                [attr.aria-expanded]="isOpen()">
          <svg class="pn__chev" viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
            <path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="pn__title">{{ title() }}</span>
          @if (meta()) { <span class="pn__meta">{{ meta() }}</span> }
        </button>
        <div class="pn__actions"><ng-content select="[panel-actions]" /></div>
      </div>
      @if (isOpen()) {
        <div class="pn__body"><ng-content /></div>
      }
    </section>
  `,
  styles: [`
    .pn {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 14px;
      padding: 14px 18px; overflow: hidden;
    }
    .pn__head { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .pn__toggle {
      flex: 1 1 auto; min-width: 0;
      display: flex; align-items: center; gap: 8px;
      background: none; border: none; padding: 4px 0; margin: 0;
      font-family: inherit; cursor: pointer; text-align: left;
      -webkit-tap-highlight-color: transparent;
    }
    .pn__chev {
      flex-shrink: 0; color: #94a3b8; transition: transform 0.18s ease;
    }
    .pn--open .pn__chev { transform: rotate(90deg); }
    .pn__title {
      font-size: 14px; font-weight: 800; color: #0f172a;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .pn__meta { font-size: 12px; color: #94a3b8; font-weight: 600; white-space: nowrap; }
    .pn__actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
    .pn__body { margin-top: 14px; }
  `],
})
export class PanelComponent {
  readonly title = input.required<string>();
  /** A short count or status beside the title — visible while collapsed, so folding a
   *  section never hides whether there is anything in it. */
  readonly meta = input<string>('');
  /** Closed sections are the ones that are a later task, not a fact about the job. */
  readonly startOpen = input<boolean>(true);

  private readonly toggled = signal<boolean | null>(null);
  readonly isOpen = computed(() => this.toggled() ?? this.startOpen());

  toggle(): void { this.toggled.set(!this.isOpen()); }
}
