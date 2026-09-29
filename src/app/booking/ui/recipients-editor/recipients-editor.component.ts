import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Editable list of email addresses, two-way bound via `[(emails)]`.
 *
 * Follows the `links-editor` / `line-items-editor` recipe: immutable `model.update()`
 * writes and one-way `[ngModel]` + explicit `(ngModelChange)` per field — never
 * `[(ngModel)]` on an array element, which would mutate the bound array in place and
 * desynchronise the parent.
 */
@Component({
  selector: 'app-recipients-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  templateUrl: './recipients-editor.component.html',
  styleUrl: './recipients-editor.component.scss',
})
export class RecipientsEditorComponent {
  readonly emails = model.required<string[]>();
  readonly label = input('To');
  /** Addresses this invoice already went to, offered as a one-tap re-add. */
  readonly suggestions = input<string[]>([]);

  /**
   * Deliberately permissive. This is a warning shown to the owner, not a gate — the
   * Edge Function validates strictly before sending. Being stricter here would reject
   * perfectly valid addresses (long TLDs, `+` tags, sub-domains) and block a real send.
   */
  invalid(email: string): boolean {
    const t = email.trim();
    return !!t && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
  }

  /** Suggestions not already in the list — nothing to re-add if they're all present. */
  missing(): string[] {
    const have = new Set(this.emails().map(e => e.trim().toLowerCase()).filter(Boolean));
    return this.suggestions().filter(s => !have.has(s.trim().toLowerCase()));
  }

  add(): void { this.emails.update(list => [...list, '']); }

  addAll(): void {
    const extra = this.missing();
    if (extra.length) {
      // Drop blank rows while merging, so "+ Add all" on an empty row doesn't leave one behind.
      this.emails.update(list => [...list.filter(e => e.trim()), ...extra]);
    }
  }

  remove(i: number): void { this.emails.update(list => list.filter((_, idx) => idx !== i)); }

  set(i: number, value: string): void {
    this.emails.update(list => list.map((e, idx) => idx === i ? value : e));
  }
}
