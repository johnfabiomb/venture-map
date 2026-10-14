import {
  ChangeDetectionStrategy, Component, ElementRef, computed, effect,
  input, model, output, signal, viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

export interface SelectOption {
  value: string;
  label: string;
  /** Secondary text shown after the label — a date, a ref, a client. */
  hint?: string;
  /** Leading dot, e.g. a stage's calendar colour. */
  color?: string;
  disabled?: boolean;
}

/**
 * One select for the whole admin.
 *
 * A native `<select>` is drawn by the browser, so it looked different on every machine
 * and could not match the dark sidebar or carry a colour, a hint or a search box. This
 * renders everything itself, which is the only way those are possible.
 *
 * The panel goes through a CDK **overlay**, not an absolutely-positioned div: a dropdown
 * inside a scrolling sidebar or a modal gets clipped by its ancestors otherwise, which is
 * the classic reason hand-rolled selects break in exactly the places they are most needed.
 */
@Component({
  selector: 'app-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, OverlayModule],
  template: `
    <button type="button" class="sel__trigger" #trigger
            [class.sel__trigger--sm]="size() === 'sm'"
            [class.sel__trigger--dark]="variant() === 'dark'"
            [class.sel__trigger--open]="open()"
            [disabled]="disabled()"
            [attr.aria-expanded]="open()" aria-haspopup="listbox"
            (click)="toggle()" (keydown)="onTriggerKey($event)">
      @if (multiple()) {
        @if (chosen().length) {
          <span class="sel__chips">
            @for (c of chosen(); track c.value) {
              <span class="sel__chip">
                {{ c.label }}
                <span class="sel__chip-x" role="button" aria-label="Remove"
                      (click)="removeOne(c.value, $event)">×</span>
              </span>
            }
          </span>
        } @else {
          <span class="sel__value sel__value--empty">{{ placeholder() }}</span>
        }
      } @else {
        @if (selected()?.color) { <span class="sel__dot" [style.background]="selected()!.color"></span> }
        <span class="sel__value" [class.sel__value--empty]="!selected()">
          {{ selected()?.label ?? placeholder() }}
        </span>
      }
      @if (clearable() && selected() && !disabled()) {
        <span class="sel__clear" role="button" aria-label="Clear" (click)="clear($event)">×</span>
      }
      <svg class="sel__chev" viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
        <path d="M6 8l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <ng-template cdkConnectedOverlay
                 [cdkConnectedOverlayOrigin]="trigger"
                 [cdkConnectedOverlayOpen]="open()"
                 [cdkConnectedOverlayWidth]="panelWidth()"
                 [cdkConnectedOverlayViewportMargin]="8"
                 [cdkConnectedOverlayPositions]="positions"
                 (overlayOutsideClick)="close()"
                 (detach)="close()">
      <div class="sel__panel" role="listbox">
        @if (showSearch()) {
          <div class="sel__search">
            <input #search type="text" [ngModel]="query()" (ngModelChange)="query.set($event)"
                   name="selSearch" placeholder="Search…" autocomplete="off"
                   (keydown)="onSearchKey($event)" />
          </div>
        }
        <div class="sel__list">
          @for (o of filtered(); track o.value; let i = $index) {
            <button type="button" class="sel__opt"
                    [class.sel__opt--on]="isChosen(o.value)"
                    [class.sel__opt--active]="i === activeIndex()"
                    [disabled]="o.disabled"
                    role="option" [attr.aria-selected]="isChosen(o.value)"
                    (mouseenter)="activeIndex.set(i)" (click)="pick(o)">
              @if (o.color) { <span class="sel__dot" [style.background]="o.color"></span> }
              <span class="sel__opt-text">
                <span class="sel__opt-label">{{ o.label }}</span>
                @if (o.hint) { <span class="sel__opt-hint">{{ o.hint }}</span> }
              </span>
              @if (isChosen(o.value)) { <span class="sel__tick">✓</span> }
            </button>
          } @empty {
            <p class="sel__empty">{{ query() ? 'Nothing matches “' + query() + '”' : 'Nothing to choose' }}</p>
          }
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    /* min-width: 0 so that in a flex row this can SHRINK instead of forcing the row wider
       than its container. It does not grow on its own — a call site that wants the select
       to fill a row says so (e.g. .client-row app-select { flex: 1 }), because plenty of
       them deliberately sit next to a button at their natural size. */
    :host { display: block; position: relative; min-width: 0; }

    .sel__trigger {
      display: flex; align-items: center; gap: 8px; width: 100%;
      padding: 10px 12px; box-sizing: border-box;
      background: #fff; border: 1.5px solid #e2e8f0; border-radius: 8px;
      font-family: inherit; font-size: 14px; color: #0f172a; text-align: left; cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    /* Below 16px iOS zooms in when a field takes focus and never zooms back out. */
    @media (max-width: 560px) { .sel__trigger { font-size: 16px; } }
    .sel__trigger:hover:not(:disabled) { border-color: #cbd5e1; }
    .sel__trigger--open { border-color: #F4A922; }
    .sel__trigger--sm {
      padding: 5px 8px; font-size: 11.5px; gap: 5px; border-width: 1px; border-radius: 6px;
    }
    /* Kept small on a phone too: this variant only appears where space is the constraint,
       and it is a button, not a text field, so iOS has no focus-zoom to avoid. */
    @media (max-width: 560px) { .sel__trigger--sm { font-size: 12px; } }
    .sel__trigger--sm .sel__chev { width: 13px; height: 13px; }
    .sel__trigger:disabled { background: #f8fafc; color: #94a3b8; cursor: default; }

    /* The sidebar is dark; a white control there was the visual break. */
    .sel__trigger--dark {
      background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.12); color: #fff;
      font-size: 13px; font-weight: 700; padding: 9px 12px;
    }
    .sel__trigger--dark:hover:not(:disabled) { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.2); }
    .sel__trigger--dark.sel__trigger--open { border-color: #F4A922; }

    .sel__value { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .sel__value--empty { color: #94a3b8; }
    .sel__trigger--dark .sel__value--empty { color: rgba(255,255,255,0.5); }
    .sel__chev { flex-shrink: 0; color: #94a3b8; transition: transform 0.15s ease; }
    .sel__trigger--open .sel__chev { transform: rotate(180deg); }
    .sel__trigger--dark .sel__chev { color: rgba(255,255,255,0.6); }
    .sel__clear {
      flex-shrink: 0; width: 18px; height: 18px; line-height: 16px; text-align: center;
      border-radius: 50%; font-size: 15px; color: #94a3b8; cursor: pointer;
    }
    .sel__clear:hover { background: #f1f5f9; color: #475569; }
    .sel__dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }

    .sel__chips { flex: 1 1 auto; min-width: 0; display: flex; flex-wrap: wrap; gap: 4px; }
    .sel__chip {
      display: inline-flex; align-items: center; gap: 4px; max-width: 100%;
      padding: 2px 6px; border-radius: 6px; background: #f1f5f9;
      font-size: 11.5px; font-weight: 600; color: #334155;
    }
    .sel__chip-x { color: #94a3b8; cursor: pointer; font-size: 13px; line-height: 1; }
    .sel__chip-x:hover { color: #dc2626; }

    .sel__panel {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 10px;
      box-shadow: 0 10px 30px rgba(15,23,42,0.16);
      overflow: hidden; display: flex; flex-direction: column; max-height: 300px;
    }
    .sel__search { padding: 8px; border-bottom: 1px solid #f1f5f9; }
    .sel__search input {
      width: 100%; box-sizing: border-box; padding: 8px 10px;
      border: 1.5px solid #e2e8f0; border-radius: 7px;
      font-family: inherit; font-size: 13px; color: #0f172a;
    }
    @media (max-width: 560px) { .sel__search input { font-size: 16px; } }
    .sel__search input:focus { outline: none; border-color: #F4A922; }

    .sel__list { overflow-y: auto; padding: 5px; }
    .sel__opt {
      display: flex; align-items: center; gap: 8px; width: 100%;
      padding: 9px 10px; border: none; background: none; border-radius: 7px;
      font-family: inherit; font-size: 13.5px; color: #0f172a; text-align: left; cursor: pointer;
    }
    .sel__opt--active { background: #f1f5f9; }
    .sel__opt--on { font-weight: 700; }
    .sel__opt:disabled { opacity: 0.45; cursor: default; }
    /* The label and the hint stack in their own column rather than competing for one row.
       Side by side, the label had min-width: 0 (so it could shrink to nothing) while the
       hint was nowrap with the default min-width: auto (so it could not) — the hint
       therefore took the whole row and a client called "Andrew (Dru)" at
       "The Insynk Collective" rendered as a lone "A" beside grey company text. The label
       is the thing being chosen; a secondary detail must never squeeze it out.
       (No backticks in here: this block is a template literal.) */
    .sel__opt-text { display: flex; flex-direction: column; gap: 1px; flex: 1 1 auto; min-width: 0; }
    .sel__opt-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .sel__opt-hint {
      font-size: 11.5px; color: #94a3b8;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .sel__tick { color: #F4A922; font-weight: 800; }
    .sel__empty { margin: 0; padding: 16px 12px; font-size: 12.5px; color: #94a3b8; text-align: center; }
  `],
})
export class SelectComponent {
  readonly value = model<string>('');
  /** Multi-select. `values` is the model then; `value` is ignored. */
  readonly multiple = input(false);
  readonly values = model<string[]>([]);
  readonly options = input<SelectOption[]>([]);
  readonly placeholder = input('Select…');
  readonly disabled = input(false);
  readonly clearable = input(false);
  readonly variant = input<'light' | 'dark'>('light');
  /** 'sm' for dense places — a board card, a table row — where the default control is
   *  taller than everything beside it and breaks the row. */
  readonly size = input<'md' | 'sm'>('md');
  /** 'auto' shows the box once the list is long enough to be worth searching. */
  readonly searchable = input<boolean | 'auto'>('auto');
  readonly changed = output<string>();

  readonly open = signal(false);
  readonly query = signal('');
  readonly activeIndex = signal(0);

  private readonly triggerEl = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');
  private readonly searchEl = viewChild<ElementRef<HTMLInputElement>>('search');

  readonly positions = [
    { originX: 'start' as const, originY: 'bottom' as const, overlayX: 'start' as const, overlayY: 'top' as const, offsetY: 4 },
    { originX: 'start' as const, originY: 'top' as const, overlayX: 'start' as const, overlayY: 'bottom' as const, offsetY: -4 },
  ];

  readonly selected = computed(() => this.options().find(o => o.value === this.value()) ?? null);
  /** Chosen options in the order the OPTIONS list defines, not the click order — chips
   *  that reshuffle as you tick are hard to scan. */
  readonly chosen = computed(() => this.options().filter(o => this.values().includes(o.value)));
  isChosen(v: string): boolean {
    return this.multiple() ? this.values().includes(v) : v === this.value();
  }
  readonly showSearch = computed(() => {
    const s = this.searchable();
    return s === 'auto' ? this.options().length > 7 : s;
  });
  /**
   * How well an option matches, 0 = not at all. Ranked rather than merely filtered,
   * because a plain substring match buries the obvious answer: typing "in" to find
   * "The Insynk Collective" also matches "Benjam-in" and "Bett-in-a", and with a hundred
   * clients the one you meant is somewhere in the middle of them.
   *
   * A match at the START of a word beats one buried inside it, and the label beats the
   * hint — the label is the thing being chosen.
   */
  private score(o: SelectOption, q: string): number {
    const label = o.label.toLowerCase();
    const hint = (o.hint ?? '').toLowerCase();
    // Does any WORD start with the query? Split rather than a regex so the query needs no
    // escaping — a client called "R&D (Malta)" would otherwise build an invalid pattern.
    const wordStart = (text: string) =>
      text.split(/[^a-z0-9]+/i).some(w => w.startsWith(q));
    if (label.startsWith(q)) return 5;
    if (wordStart(label)) return 4;
    if (hint.startsWith(q) || wordStart(hint)) return 3;
    if (label.includes(q)) return 2;
    if (hint.includes(q)) return 1;
    return 0;
  }

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return this.options();
    return this.options()
      .map(o => ({ o, s: this.score(o, q) }))
      .filter(r => r.s > 0)
      // Stable within a rank, so an unsearched list keeps the order its caller chose.
      .sort((a, b) => b.s - a.s)
      .map(r => r.o);
  });

  panelWidth(): number { return this.triggerEl().nativeElement.offsetWidth; }

  constructor() {
    // Focus the search as the panel opens, so typing filters immediately rather than
    // needing a second click.
    effect(() => {
      if (!this.open()) return;
      queueMicrotask(() => this.searchEl()?.nativeElement.focus());
    });
  }

  toggle(): void {
    if (this.disabled()) return;
    if (this.open()) { this.close(); return; }
    this.query.set('');
    this.activeIndex.set(Math.max(0, this.filtered().findIndex(o => this.isChosen(o.value))));
    this.open.set(true);
  }
  close(): void { this.open.set(false); this.query.set(''); }

  pick(o: SelectOption): void {
    if (o.disabled) return;
    if (this.multiple()) {
      // Stays open: picking several things one at a time, reopening between each, is the
      // thing multi-selects exist to avoid.
      const next = this.values().includes(o.value)
        ? this.values().filter(v => v !== o.value)
        : [...this.values(), o.value];
      this.values.set(next);
      return;
    }
    this.value.set(o.value);
    this.changed.emit(o.value);
    this.close();
    this.triggerEl().nativeElement.focus();
  }

  removeOne(v: string, e: Event): void {
    e.stopPropagation();           // or the trigger toggles the panel behind the chip
    this.values.set(this.values().filter(x => x !== v));
  }

  clear(e: Event): void {
    e.stopPropagation();          // or the trigger toggles the panel open behind it
    this.value.set('');
    this.changed.emit('');
  }

  onTriggerKey(e: KeyboardEvent): void {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key) && !this.open()) {
      e.preventDefault();
      this.toggle();
    }
  }

  onSearchKey(e: KeyboardEvent): void {
    const list = this.filtered();
    if (e.key === 'ArrowDown') { e.preventDefault(); this.activeIndex.update(i => Math.min(i + 1, list.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); this.activeIndex.update(i => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); const o = list[this.activeIndex()]; if (o) this.pick(o); }
    else if (e.key === 'Escape') { e.preventDefault(); this.close(); this.triggerEl().nativeElement.focus(); }
    else { this.activeIndex.set(0); }   // a new query invalidates the old position
  }
}
