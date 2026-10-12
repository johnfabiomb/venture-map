import { ChangeDetectionStrategy, Component, effect, inject, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { BookingAdminService, WorkStage, GCAL_COLORS, colorHex } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';

/**
 * The board's columns, as data.
 *
 * The colour is Google's own event colour id, not a hex: Google has eleven fixed event
 * colours and nothing else, so offering a colour wheel would promise something the
 * calendar cannot render. Picking from Google's palette means the board and the calendar
 * always agree.
 */
@Component({
  selector: 'app-stage-manager',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ModalComponent],
  template: `
    <app-modal [open]="open()" (openChange)="open.set($event)" title="Board columns" [dismissable]="true">
      <div class="sm">
        <p class="sm__intro">
          Your own stages. Renaming one is safe — cards follow it. The colour is the one
          Google Calendar will use for reserved time in that stage.
        </p>

        <ul class="sm__list">
          @for (s of rows(); track s.id; let i = $index; let first = $first; let last = $last) {
            <li class="sm__row">
              <div class="sm__order">
                <button type="button" [disabled]="first || busy()" (click)="move(i, -1)" title="Move up">↑</button>
                <button type="button" [disabled]="last || busy()" (click)="move(i, 1)" title="Move down">↓</button>
              </div>
              <input class="sm__name" [ngModel]="s.label" (ngModelChange)="edit(s.id, 'label', $event)"
                     [name]="'lbl' + s.id" placeholder="Stage name" />
              <select class="sm__color" [ngModel]="s.color_id ?? ''" (ngModelChange)="edit(s.id, 'color_id', $event || null)"
                      [name]="'col' + s.id" [style.borderColor]="hex(s.color_id)">
                <option value="">Default</option>
                @for (c of colors; track c.id) { <option [value]="c.id">{{ c.name }}</option> }
              </select>
              <label class="sm__done" title="Work is finished at this stage">
                <input type="checkbox" [ngModel]="s.is_done" (ngModelChange)="edit(s.id, 'is_done', $event)"
                       [name]="'done' + s.id" />
                <span>Done</span>
              </label>
              <button type="button" class="sm__del" [disabled]="busy() || rows().length < 2"
                      (click)="remove(s)" title="Delete this column">×</button>
            </li>
          }
        </ul>

        <div class="sm__add">
          <input [ngModel]="newLabel()" (ngModelChange)="newLabel.set($event)" name="smNew"
                 placeholder="Add a stage — e.g. Client review" (keyup.enter)="add()" />
          <button type="button" class="btn btn--ghost btn--sm" [disabled]="busy() || !newLabel().trim()" (click)="add()">Add</button>
        </div>

        <div class="sm__actions">
          <button type="button" class="btn btn--ghost" (click)="open.set(false)">Close</button>
          <button type="button" class="btn btn--primary" [disabled]="busy() || !dirty()" (click)="saveAll()">
            {{ busy() ? 'Saving…' : 'Save changes' }}
          </button>
        </div>
      </div>
    </app-modal>
  `,
  styles: [`
    .sm__intro { margin: 0 0 14px; font-size: 12px; color: #64748b; line-height: 1.5; }
    .sm__list { list-style: none; margin: 0 0 14px; padding: 0; display: flex; flex-direction: column; gap: 8px; }
    .sm__row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .sm__order { display: flex; flex-direction: column; gap: 1px; }
    .sm__order button {
      width: 22px; height: 17px; padding: 0; line-height: 1; font-size: 10px;
      background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; cursor: pointer; color: #475569;
    }
    .sm__order button:disabled { opacity: 0.35; cursor: default; }
    .sm__name { flex: 1 1 130px; min-width: 0; padding: 8px 10px; border: 1.5px solid #e2e8f0; border-radius: 8px;
                font-family: inherit; font-size: 13px; color: #0f172a; }
    .sm__color { padding: 8px 8px; border: 2px solid #e2e8f0; border-radius: 8px;
                 font-family: inherit; font-size: 12px; background: #fff; cursor: pointer; }
    .sm__name:focus, .sm__color:focus { outline: none; border-color: #F4A922; }
    @media (max-width: 560px) { .sm__name, .sm__color { font-size: 16px; } }
    .sm__done { display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; color: #475569; cursor: pointer; }
    .sm__done input { width: 15px; height: 15px; accent-color: #F4A922; }
    .sm__del { background: none; border: none; font-size: 17px; line-height: 1; color: #94a3b8; cursor: pointer; padding: 0 4px; }
    .sm__del:hover:not(:disabled) { color: #dc2626; }
    .sm__del:disabled { opacity: 0.3; cursor: default; }
    .sm__add { display: flex; gap: 8px; padding-top: 12px; border-top: 1px solid #e2e8f0; }
    .sm__add input { flex: 1 1 auto; padding: 9px 11px; border: 1.5px solid #e2e8f0; border-radius: 8px;
                     font-family: inherit; font-size: 13px; }
    @media (max-width: 560px) { .sm__add input { font-size: 16px; } }
    .sm__add input:focus { outline: none; border-color: #F4A922; }
    .sm__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 18px; }
  `],
})
export class StageManagerComponent {
  private readonly admin = inject(BookingAdminService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);

  readonly open = model(false);
  readonly stages = input<WorkStage[]>([]);
  readonly changed = output<void>();

  readonly colors = GCAL_COLORS;
  readonly busy = signal(false);
  readonly rows = signal<WorkStage[]>([]);
  readonly newLabel = signal('');
  readonly dirty = signal(false);

  hex(id: string | null): string { return colorHex(id); }

  constructor() {
    effect(() => {
      if (!this.open()) return;
      const src = this.stages();
      queueMicrotask(() => {
        // Copied, never shared: edits must be discardable by closing the dialog.
        this.rows.set(src.map(s => ({ ...s })));
        this.newLabel.set('');
        this.dirty.set(false);
      });
    });
  }

  edit(id: string, field: 'label' | 'color_id' | 'is_done', value: unknown): void {
    this.rows.update(rs => rs.map(r => r.id === id ? { ...r, [field]: value } as WorkStage : r));
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
      const res = await this.admin.saveWorkStage(org, { label });
      if (res.error) { this.toast.error('Could not add that stage.'); return; }
      this.newLabel.set('');
      await this.refresh(org);
      this.changed.emit();
      this.toast.success(`"${label}" added`);
    } finally { this.busy.set(false); }
  }

  async remove(s: WorkStage): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    const others = this.rows().filter(r => r.id !== s.id);
    if (!others.length) return;
    // Cards cannot be left pointing at a stage that is gone, so where they go is part of
    // the question rather than a surprise afterwards.
    const target = others[0];
    if (!(await this.confirm.ask({
      title: `Delete "${s.label}"`,
      message: `Any cards in this column move to "${target.label}". This cannot be undone.`,
      confirmLabel: 'Delete column', danger: true,
    }))) return;

    this.busy.set(true);
    try {
      const res = await this.admin.deleteWorkStage(s.id, target.id);
      if (!res.ok) {
        this.toast.error(res.error === 'last_stage'
          ? 'A board needs at least one column.'
          : 'Could not delete that column.');
        return;
      }
      await this.refresh(org);
      this.changed.emit();
      this.toast.success(res.moved ? `Deleted — ${res.moved} card(s) moved to "${target.label}"` : 'Column deleted');
    } finally { this.busy.set(false); }
  }

  async saveAll(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    this.busy.set(true);
    try {
      const rs = this.rows();
      for (const r of rs) {
        if (!r.label.trim()) { this.toast.error('Every column needs a name.'); return; }
        await this.admin.saveWorkStage(org, r);
      }
      await this.admin.reorderWorkStages(rs.map(r => r.id));
      await this.refresh(org);
      this.dirty.set(false);
      this.changed.emit();
      this.toast.success('Columns saved');
    } finally { this.busy.set(false); }
  }

  private async refresh(org: string): Promise<void> {
    this.rows.set((await this.admin.listWorkStages(org)).map(s => ({ ...s })));
  }
}
