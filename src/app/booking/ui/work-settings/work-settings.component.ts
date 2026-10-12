import { ChangeDetectionStrategy, Component, effect, inject, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { BookingAdminService, WorkType } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';

/** Shipped default for how long delivered work stays on the board (§25). Mirrors the
 *  SQL fallback in `work_board.is_archived` — if one changes, change both. */
const DEFAULT_ARCHIVE_DAYS = 3;

/**
 * Everything about how the Work module behaves, in one place.
 *
 * Today that is the kinds of work this studio does and how long delivered cards stay on
 * the board. It is built as a settings SHEET rather than a one-purpose "work types"
 * dialog because the next work setting will not want its own cog — board columns already
 * have their own manager, and a third entry point in the board header would be the point
 * at which the header stops being readable.
 */
@Component({
  selector: 'app-work-settings',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ModalComponent],
  template: `
    <app-modal [open]="open()" (openChange)="open.set($event)" title="Work settings" [dismissable]="true">
      <div class="ws">
        <section class="ws__section">
          <h3 class="ws__h">Types of work</h3>
          <p class="ws__intro">
            What you pick on a task to say what the work actually is. The chosen type is
            the first line of the reserved time's Google Calendar event.
          </p>

          @if (rows().length === 0) {
            <p class="ws__empty">No types yet — add the first one below.</p>
          }
          <ul class="ws__list">
            @for (t of rows(); track t.id; let i = $index; let first = $first; let last = $last) {
              <li class="ws__row">
                <div class="ws__order">
                  <button type="button" [disabled]="first || busy()" (click)="move(i, -1)" title="Move up">↑</button>
                  <button type="button" [disabled]="last || busy()" (click)="move(i, 1)" title="Move down">↓</button>
                </div>
                <input class="ws__name" [ngModel]="t.label" (ngModelChange)="edit(t.id, $event)"
                       [name]="'wt' + t.id" placeholder="Type name" />
                <button type="button" class="ws__del" [disabled]="busy()"
                        (click)="remove(t)" title="Delete this type">×</button>
              </li>
            }
          </ul>

          <div class="ws__add">
            <input [ngModel]="newLabel()" (ngModelChange)="newLabel.set($event)" name="wsNew"
                   placeholder="Add a type — e.g. Drone footage sort" (keyup.enter)="add()" />
            <button type="button" class="btn btn--ghost btn--sm"
                    [disabled]="busy() || !newLabel().trim()" (click)="add()">Add</button>
          </div>
        </section>

        <section class="ws__section">
          <h3 class="ws__h">Board</h3>
          <label class="ws__field">
            <span>Keep delivered work on the board for</span>
            <div class="ws__days">
              <input type="number" min="0" max="365" step="1"
                     [ngModel]="archiveDays()" (ngModelChange)="setDays($event)" name="wsDays" />
              <em>days</em>
            </div>
          </label>
          <p class="ws__intro">
            After that a card drops off the board and lives under <strong>History</strong>.
            Nothing is deleted and nothing moves — it keeps its column, it just stops
            taking up room. <strong>0</strong> archives as soon as it's done.
          </p>
        </section>

        <div class="ws__actions">
          <button type="button" class="btn btn--ghost" (click)="open.set(false)">Close</button>
          <button type="button" class="btn btn--primary" [disabled]="busy() || !dirty()" (click)="saveAll()">
            {{ busy() ? 'Saving…' : 'Save changes' }}
          </button>
        </div>
      </div>
    </app-modal>
  `,
  styles: [`
    .ws__section { padding-bottom: 18px; margin-bottom: 18px; border-bottom: 1px solid #e2e8f0; }
    .ws__section:last-of-type { border-bottom: 0; margin-bottom: 0; padding-bottom: 0; }
    .ws__h { margin: 0 0 5px; font-size: 13px; font-weight: 700; color: #0f172a; }
    .ws__intro { margin: 0 0 12px; font-size: 12px; color: #64748b; line-height: 1.5; }
    .ws__empty { margin: 0 0 10px; font-size: 12px; color: #94a3b8; }
    .ws__list { list-style: none; margin: 0 0 12px; padding: 0; display: flex; flex-direction: column; gap: 8px; }
    .ws__row { display: flex; align-items: center; gap: 8px; }
    .ws__order { display: flex; flex-direction: column; gap: 1px; flex-shrink: 0; }
    .ws__order button {
      width: 22px; height: 17px; padding: 0; line-height: 1; font-size: 10px;
      background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; cursor: pointer; color: #475569;
    }
    .ws__order button:disabled { opacity: 0.35; cursor: default; }
    .ws__name {
      flex: 1 1 auto; min-width: 0; padding: 8px 10px; border: 1.5px solid #e2e8f0;
      border-radius: 8px; font-family: inherit; font-size: 13px; color: #0f172a; background: #fff;
    }
    .ws__name:focus { outline: none; border-color: #F4A922; }
    .ws__del {
      background: none; border: none; font-size: 17px; line-height: 1; color: #94a3b8;
      cursor: pointer; padding: 0 4px; flex-shrink: 0;
    }
    .ws__del:hover:not(:disabled) { color: #dc2626; }
    .ws__del:disabled { opacity: 0.3; cursor: default; }
    .ws__add { display: flex; gap: 8px; padding-top: 12px; border-top: 1px solid #e2e8f0; }
    .ws__add input {
      flex: 1 1 auto; min-width: 0; padding: 9px 11px; border: 1.5px solid #e2e8f0;
      border-radius: 8px; font-family: inherit; font-size: 13px;
    }
    .ws__add input:focus { outline: none; border-color: #F4A922; }
    .ws__field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px; }
    .ws__field > span { font-size: 12px; font-weight: 600; color: #475569; }
    .ws__days { display: flex; align-items: center; gap: 8px; }
    .ws__days input {
      width: 82px; padding: 9px 11px; border: 1.5px solid #e2e8f0; border-radius: 8px;
      font-family: inherit; font-size: 13px; color: #0f172a; background: #fff;
    }
    .ws__days input:focus { outline: none; border-color: #F4A922; }
    .ws__days em { font-size: 12.5px; color: #64748b; font-style: normal; }
    /* Below 16px iOS zooms in on focus and never zooms back out. */
    @media (max-width: 560px) {
      .ws__name, .ws__add input, .ws__days input { font-size: 16px; }
    }
    .ws__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 18px; }
    @media (max-width: 560px) { .ws__actions .btn { flex: 1 1 0; justify-content: center; } }
  `],
})
export class WorkSettingsComponent {
  private readonly admin = inject(BookingAdminService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);

  readonly open = model(false);
  readonly changed = output<void>();

  readonly busy = signal(false);
  readonly rows = signal<WorkType[]>([]);
  readonly newLabel = signal('');
  readonly archiveDays = signal<number>(DEFAULT_ARCHIVE_DAYS);
  readonly dirty = signal(false);

  constructor() {
    // Loaded on open rather than taken as an input: unlike the board's columns, nothing
    // else on the page needs the type list, so there is no reason to lift it.
    effect(() => {
      if (!this.open()) return;
      queueMicrotask(async () => {
        const org = this.auth.orgId();
        this.newLabel.set('');
        this.dirty.set(false);
        if (!org) { this.rows.set([]); return; }
        const [types, settings] = await Promise.all([
          this.admin.listWorkTypes(org), this.admin.getOrgSettings(org),
        ]);
        // Copied, never shared: edits have to be discardable by closing the dialog.
        this.rows.set(types.map(t => ({ ...t })));
        this.archiveDays.set(settings?.booking_params?.work_archive_days ?? DEFAULT_ARCHIVE_DAYS);
      });
    });
  }

  edit(id: string, label: string): void {
    this.rows.update(rs => rs.map(r => r.id === id ? { ...r, label } : r));
    this.dirty.set(true);
  }

  setDays(value: unknown): void {
    this.archiveDays.set(Number(value));
    this.dirty.set(true);
  }

  move(i: number, delta: number): void {
    const rs = [...this.rows()];
    const j = i + delta;
    if (j < 0 || j >= rs.length) return;
    [rs[i], rs[j]] = [rs[j], rs[i]];
    this.rows.set(rs);
    this.dirty.set(true);
  }

  async add(): Promise<void> {
    const org = this.auth.orgId();
    const label = this.newLabel().trim();
    if (!org || !label) return;
    this.busy.set(true);
    try {
      const res = await this.admin.saveWorkType(org, { label });
      if (res.error) { this.toast.error('Could not add that type.'); return; }
      this.newLabel.set('');
      this.rows.set((await this.admin.listWorkTypes(org)).map(t => ({ ...t })));
      this.changed.emit();
      this.toast.success(`"${label}" added`);
    } finally { this.busy.set(false); }
  }

  async remove(t: WorkType): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    // A type is optional on a card, so deleting it has an answer rather than a question —
    // but how many cards it touches is said up front, not discovered afterwards.
    if (!(await this.confirm.ask({
      title: `Delete "${t.label}"`,
      message: 'Any tasks using this type lose it — they keep everything else. This cannot be undone.',
      confirmLabel: 'Delete type', danger: true,
    }))) return;

    this.busy.set(true);
    try {
      const res = await this.admin.deleteWorkType(t.id);
      if (!res.ok) { this.toast.error('Could not delete that type.'); return; }
      this.rows.set((await this.admin.listWorkTypes(org)).map(x => ({ ...x })));
      this.changed.emit();
      this.toast.success(res.cleared
        ? `Deleted — cleared from ${res.cleared} task(s)`
        : 'Type deleted');
    } finally { this.busy.set(false); }
  }

  async saveAll(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    const rs = this.rows();
    if (rs.some(r => !r.label.trim())) { this.toast.error('Every type needs a name.'); return; }
    const days = this.archiveDays();
    if (!Number.isFinite(days) || days < 0 || days > 365) {
      this.toast.error('Days must be between 0 and 365.');
      return;
    }

    this.busy.set(true);
    try {
      for (const r of rs) await this.admin.saveWorkType(org, { id: r.id, label: r.label.trim() });
      await this.admin.reorderWorkTypes(rs.map(r => r.id));
      // PATCHED, not replaced: booking_params also holds the deposit policy and the hold
      // window, and writing a fresh object here would silently drop them.
      const settings = await this.admin.getOrgSettings(org);
      await this.admin.updateOrgSettings(org, {
        booking_params: { ...(settings?.booking_params ?? {}), work_archive_days: Math.round(days) },
      });
      this.dirty.set(false);
      this.changed.emit();
      this.toast.success('Work settings saved');
    } finally { this.busy.set(false); }
  }
}
