import { ChangeDetectionStrategy, Component, computed, effect, inject, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { SelectComponent, SelectOption } from '@booking/ui/select/select.component';
import { AvailabilityPickerComponent, PickedSlot } from '@booking/platform/bookings/booking-form/availability-picker.component';
import { BookingAdminService, WorkJob, WorkStage, WorkType, TaskRow, colorHex } from '@booking/core/services/booking-admin.service';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { BookingSlot } from '@booking/core/interfaces/booking.interface';

/** Backlog is not a stage — it is the absence of `activated_at` — but it IS a column, so
 *  the Status field has to offer it or the only way back is dragging. */
const BACKLOG = 'backlog';

/** A checklist row being edited. `id` null = not saved yet. Everything is buffered and
 *  committed on Save, so Cancel really cancels — a checklist that wrote through
 *  immediately while the rest of the modal waited would be a trap. */
interface TaskDraft { id: string | null; title: string; done: boolean; }

/**
 * The work task, edited in full — Trello/Jira-style.
 *
 * It holds everything about the card that is worth stating: what it is, what kind of work
 * it is, which column it sits in, who owns it, when it is due, which jobs it covers, its
 * checklist, and the time reserved for it.
 *
 * Two fields earn their place over the earlier version. WORK TYPE, because the calendar
 * event's first line used to read "Work: To edit" — the board column, which looked like a
 * choice that had never been made. And DESCRIPTION, because a one-line title cannot hold
 * a brief, and it goes into the calendar event where it is actually read.
 *
 * The time picker is the SAME component the booking form uses — deliberately. It already
 * reads the worker's real diary, so reserving an evening for editing shows the shoots
 * already in the way; and because work blocks are rows in `booking_slots`, the no-overlap
 * constraint stops the two colliding for real rather than just visually.
 */
@Component({
  selector: 'app-work-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ModalComponent, AvailabilityPickerComponent, SelectComponent],
  template: `
    <app-modal [open]="open()" (openChange)="open.set($event)"
               [title]="job() ? 'Work task' : 'New work task'" [dismissable]="true">
      <div class="we">
        <label class="we__field">
          <span>What needs doing?</span>
          <input [ngModel]="title()" (ngModelChange)="title.set($event)" name="weTitle"
                 placeholder="e.g. Edit the Prohealth interviews" />
        </label>

        <label class="we__field">
          <span>Details <em>optional</em></span>
          <textarea [ngModel]="description()" (ngModelChange)="description.set($event)"
                    name="weDesc" rows="3"
                    placeholder="The brief, what the client asked for, anything you'd forget"></textarea>
          <small class="we__sub">Goes into the calendar event, so it's there on your phone.</small>
        </label>

        <div class="we__row">
          <label class="we__field">
            <span>Status</span>
            <app-select [value]="stageKey()" (changed)="stageKey.set($event)"
                        [options]="stageOptions()" [searchable]="false" />
          </label>
          <label class="we__field">
            <span>Type of work</span>
            <app-select [value]="workType()" (changed)="workType.set($event)"
                        [options]="typeOptions()" placeholder="Not set" [clearable]="true" />
          </label>
        </div>

        <div class="we__row">
          <label class="we__field">
            <span>Who</span>
            <app-select [value]="assigneeId()" (changed)="assigneeId.set($event)"
                        [options]="staffOptions()" placeholder="Unassigned" [clearable]="true" />
            @if (scopedWorkerName(); as w) {
              <small class="we__sub">Pre-filled from the worker you're viewing ({{ w }}).</small>
            }
          </label>
          <label class="we__field">
            <span>Deliver by <em>optional</em></span>
            <input type="date" [ngModel]="dueOn()" (ngModelChange)="dueOn.set($event)" name="weDue" />
          </label>
        </div>

        <!-- Many-to-many: a week's edit can cover several shoots, and one shoot can need
             several tasks. Behind a checkbox because most cards cover nothing, and an
             always-open list of every recent booking was the tallest thing in the modal. -->
        <div class="we__field">
          <label class="we__check">
            <input type="checkbox" [checked]="coversJob()" (change)="toggleCovers()" />
            <span>This task covers a job</span>
          </label>
          @if (coversJob()) {
            @if (jobOptions().length === 0) {
              <p class="we__hint">No jobs to link yet.</p>
            } @else {
              <app-select [multiple]="true" [(values)]="linked" [options]="jobOptions()"
                          placeholder="Search by client, title or reference…" [searchable]="true" />
              <small class="we__sub">Their references show on the calendar event, so you can match the block back to the shoot.</small>
            }
          }
        </div>

        <div class="we__field">
          <span>Checklist @if (checklist().length) { <em>{{ doneCount() }}/{{ checklist().length }}</em> }</span>
          @if (checklist().length) {
            <div class="we__tasks">
              @for (t of checklist(); track $index) {
                <div class="we__task" [class.we__task--done]="t.done">
                  <label class="we__task-check">
                    <input type="checkbox" [checked]="t.done" (change)="toggleTask($index)" />
                    <span>{{ t.title }}</span>
                  </label>
                  <button type="button" class="we__task-del" (click)="removeTask($index)" title="Remove">×</button>
                </div>
              }
            </div>
          }
          <div class="we__task-add">
            <input [ngModel]="newTask()" (ngModelChange)="newTask.set($event)" name="weNewTask"
                   placeholder="Add a step…" (keyup.enter)="addTask()" />
            <button type="button" class="btn btn--ghost btn--sm" [disabled]="!newTask().trim()" (click)="addTask()">Add</button>
          </div>
        </div>

        <div class="we__field">
          <span>Reserved time</span>
          @if (!assigneeId()) {
            <p class="we__hint">Pick who is doing it first — the time is reserved against their calendar.</p>
          } @else {
            <p class="we__hint">This time becomes unavailable to clients and warns you, exactly like a shoot.</p>
            <app-availability-picker
              [staffId]="assigneeId()"
              [timezone]="timezone()"
              [initialSlots]="initialSlots()"
              (slotsChange)="onSlots($event)">
            </app-availability-picker>
          }
        </div>

        <div class="we__actions">
          <button type="button" class="btn btn--ghost" (click)="open.set(false)">Cancel</button>
          <button type="button" class="btn btn--primary" [disabled]="saving() || !title().trim()" (click)="save()">
            {{ saving() ? 'Saving…' : 'Save' }}
          </button>
        </div>
      </div>
    </app-modal>
  `,
  styles: [`
    .we__field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 14px; }
    .we__field > span { font-size: 12px; font-weight: 600; color: #475569; }
    .we__field em { color: #94a3b8; font-style: normal; font-weight: 400; }
    .we__field input, .we__field textarea {
      padding: 10px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px;
      font-size: 14px; font-family: inherit; color: #0f172a; background: #fff;
      width: 100%; box-sizing: border-box;
    }
    .we__field textarea { resize: vertical; min-height: 68px; line-height: 1.5; }
    /* Below 16px iOS zooms in on focus and never zooms back out. */
    @media (max-width: 560px) { .we__field input, .we__field textarea { font-size: 16px; } }
    .we__field input:focus, .we__field textarea:focus { outline: none; border-color: #F4A922; }
    .we__sub { font-size: 11px; color: #94a3b8; line-height: 1.4; }
    .we__row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    @media (max-width: 520px) { .we__row { grid-template-columns: 1fr; } }
    .we__hint { margin: 0 0 8px; font-size: 11.5px; color: #64748b; line-height: 1.45; }

    .we__check {
      display: flex; align-items: center; gap: 9px; padding: 10px 12px; margin-bottom: 2px;
      border: 1.5px solid #e2e8f0; border-radius: 8px; cursor: pointer;
      font-size: 13px; font-weight: 600; color: #334155;
      &:hover { border-color: #cbd5e1; }
    }
    .we__check input { width: 16px; height: 16px; accent-color: #F4A922; flex-shrink: 0; margin: 0; }

    .we__tasks { display: flex; flex-direction: column; gap: 4px; }
    .we__task {
      display: flex; align-items: center; gap: 8px; padding: 6px 8px;
      border-radius: 7px; background: #f8fafc; font-size: 12.5px;
    }
    .we__task--done .we__task-check span { text-decoration: line-through; color: #94a3b8; }
    .we__task-check { display: flex; align-items: center; gap: 8px; flex: 1 1 auto; min-width: 0; cursor: pointer; }
    .we__task-check input { width: 15px; height: 15px; accent-color: #F4A922; flex-shrink: 0; margin: 0; }
    .we__task-check span { min-width: 0; overflow-wrap: anywhere; color: #334155; }
    .we__task-del {
      border: 0; background: none; color: #cbd5e1; font-size: 16px; line-height: 1;
      cursor: pointer; padding: 0 2px; flex-shrink: 0;
      &:hover { color: #dc2626; }
    }
    .we__task-add { display: flex; gap: 8px; align-items: stretch; margin-top: 6px; }
    .we__task-add input { flex: 1 1 auto; min-width: 0; }
    .we__task-add .btn { flex-shrink: 0; }

    .we__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 18px; }
    @media (max-width: 560px) { .we__actions .btn { flex: 1 1 0; justify-content: center; } }
  `],
})
export class WorkEditorComponent {
  private readonly admin = inject(BookingAdminService);
  private readonly data = inject(BookingDataService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);

  readonly open = model(false);
  /** Existing card to edit; null creates a new one. */
  readonly job = input<WorkJob | null>(null);
  readonly staff = input<{ id: string; name: string }[]>([]);
  readonly saved = output<void>();

  readonly saving = signal(false);
  readonly title = signal('');
  readonly description = signal('');
  readonly stageKey = signal<string>(BACKLOG);
  readonly workType = signal('');
  readonly assigneeId = signal('');
  readonly dueOn = signal('');
  readonly coversJob = signal(false);
  readonly linked = signal<string[]>([]);
  readonly initialSlots = signal<BookingSlot[]>([]);
  private picked: PickedSlot[] = [];

  // ── Checklist (buffered; committed on Save) ─────────────────────────────
  readonly checklist = signal<TaskDraft[]>([]);
  readonly newTask = signal('');
  /** Saved tasks removed in this session — deleted only once Save is pressed. */
  private removedTaskIds: string[] = [];
  /** Loaded done-state per saved task, so Save writes only what actually changed. */
  private originalDone = new Map<string, boolean>();
  readonly doneCount = computed(() => this.checklist().filter(t => t.done).length);

  readonly stages = signal<WorkStage[]>([]);
  readonly types = signal<WorkType[]>([]);

  readonly timezone = computed(() => 'Europe/Malta');
  readonly scopedWorkerName = computed(() => this.auth.activeStaff()?.name ?? '');
  readonly staffOptions = computed<SelectOption[]>(() =>
    this.staff().map(s => ({ value: s.id, label: s.name })));
  readonly typeOptions = computed<SelectOption[]>(() =>
    this.types().map(t => ({ value: t.key, label: t.label })));
  /** Backlog first, then the org's own stages — the same columns as the board, in order. */
  readonly stageOptions = computed<SelectOption[]>(() => [
    { value: BACKLOG, label: 'Backlog', hint: 'not started' },
    ...this.stages().map(st => ({ value: st.key, label: st.label, color: colorHex(st.color_id) })),
  ]);

  /**
   * Recent jobs, newest first. The reference and client go in the HINT because the select
   * searches label AND hint — so "BK-2026-128", "Prohealth" and "interview" all find it.
   */
  readonly jobOptions = computed<SelectOption[]>(() =>
    [...this.data.bookings()]
      .sort((a, b) => (b.next_start_at ?? '').localeCompare(a.next_start_at ?? ''))
      .slice(0, 200)
      .map(b => ({
        value: b.id,
        label: b.title,
        hint: [b.booking_ref, b.client_name,
               b.next_start_at ? new Date(b.next_start_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' }) : null]
          .filter(Boolean).join(' · '),
      })));

  /** Unticking clears the links rather than hiding them — a hidden link that still saved
   *  would mean the calendar event names a job the card says it does not cover. */
  toggleCovers(): void {
    const next = !this.coversJob();
    this.coversJob.set(next);
    if (!next) this.linked.set([]);
  }

  addTask(): void {
    const t = this.newTask().trim();
    if (!t) return;
    this.checklist.update(l => [...l, { id: null, title: t, done: false }]);
    this.newTask.set('');
  }
  toggleTask(i: number): void {
    this.checklist.update(l => l.map((t, n) => n === i ? { ...t, done: !t.done } : t));
  }
  removeTask(i: number): void {
    const t = this.checklist()[i];
    if (t?.id) this.removedTaskIds.push(t.id);
    this.checklist.update(l => l.filter((_, n) => n !== i));
  }

  onSlots(slots: PickedSlot[]): void { this.picked = slots; }

  constructor() {
    // Reset on open — the instance is reused, and last time's blocks reappearing on a
    // different task would reserve the wrong evening.
    effect(() => {
      if (!this.open()) return;
      const j = this.job();
      queueMicrotask(async () => {
        const org = this.auth.orgId();
        this.title.set(j?.title ?? '');
        this.description.set(j?.description ?? '');
        this.workType.set(j?.workType ?? '');
        // Always pre-filled with the worker being viewed, and always overridable — the
        // common case is "this is my own work", the exception is assigning it to someone.
        this.assigneeId.set(j?.assigneeId ?? this.auth.staffId() ?? '');
        this.dueOn.set(j?.dueAt ? j.dueAt.slice(0, 10) : '');
        this.picked = [];
        this.newTask.set('');
        this.removedTaskIds = [];
        this.originalDone.clear();

        const stages = org ? await this.admin.listWorkStages(org) : [];
        this.stages.set(stages);
        if (org) this.types.set(await this.admin.listWorkTypes(org));
        // A card in the Backlog has a production_status too (whatever it will be when it
        // starts), so the column it is actually IN is the one to show.
        this.stageKey.set(j ? (j.isActive ? j.production_status : BACKLOG) : (stages[0]?.key ?? BACKLOG));

        if (j) {
          const [slots, links, tasks] = await Promise.all([
            this.admin.getWorkSlots(j.id), this.admin.getWorkBookings(j.id),
            org ? this.admin.loadTasks(org) : Promise.resolve([] as TaskRow[]),
          ]);
          this.initialSlots.set(slots);
          this.linked.set(links);
          this.coversJob.set(links.length > 0);
          const mine = (tasks as TaskRow[]).filter(t => t.work_item_id === j.id);
          for (const t of mine) this.originalDone.set(t.id, t.is_done);
          this.checklist.set(mine.map(t => ({ id: t.id, title: t.title, done: t.is_done })));
        } else {
          this.initialSlots.set([]);
          this.linked.set([]);
          this.coversJob.set(false);
          this.checklist.set([]);
        }
      });
    });
  }

  async save(): Promise<void> {
    const org = this.auth.orgId();
    if (!org || !this.title().trim() || this.saving()) return;
    this.saving.set(true);
    try {
      const j = this.job();
      // On CREATE, the first linked job becomes the card's originating booking. That is not
      // cosmetic: `work_items.booking_id` is what decides whether removing the card takes
      // it off the board or deletes it, and what `setStage` mirrors progress back to. A new
      // card created with jobs attached but a null booking_id would behave as a personal
      // to-do and silently stop mirroring its stage to the shoot.
      // The join table still carries ALL of them — booking_id could only ever name one.
      const originating = this.coversJob() ? (this.linked()[0] ?? null) : null;
      const id = j ? j.id : await this.admin.addWorkItem(org, originating, this.title().trim());
      if (!id) { this.toast.error('Could not save the work task.'); return; }

      await this.admin.updateWorkItem(id, {
        title: this.title().trim(),
        description: this.description().trim() || null,
        work_type: this.workType() || null,
      });
      await this.admin.assignCard(id, this.assigneeId() || null);
      await this.admin.setDue(id, this.dueOn() ? new Date(`${this.dueOn()}T12:00:00`).toISOString() : null);
      await this.admin.setWorkBookings(org, id, this.coversJob() ? this.linked() : []);

      // The column move. Done BEFORE the calendar sync below, because the stage decides
      // the event's colour — syncing first would push the old colour.
      // `null` for a new card, so the chosen column is ALWAYS applied: create_work_item
      // makes a standalone card active, so picking "Backlog" on a new task has to result
      // in a real write rather than matching an assumed starting value.
      const current = j ? (j.isActive ? j.production_status : BACKLOG) : null;
      if (this.stageKey() !== current) {
        // `false` for a new card, deliberately: create_work_item puts a BOOKING-LINKED
        // card in the Backlog (activated_at NULL), so claiming it is already active would
        // skip activateCard and leave it in Backlog however the Status field was set.
        // activateCard is idempotent, so being wrong the other way costs nothing.
        await this.admin.moveWorkCard(id, this.stageKey(), j?.bookingId ?? originating, j?.isActive ?? false);
      }

      // Checklist: only what changed.
      for (const tid of this.removedTaskIds) await this.admin.removeTask(tid);
      for (const t of this.checklist()) {
        if (t.id === null) await this.admin.addTask(org, id, t.title);
        else if (this.originalDone.get(t.id) !== t.done) await this.admin.toggleTask(t.id, t.done);
      }

      let clashNote = '';
      if (this.assigneeId()) {
        const slots: BookingSlot[] = this.picked.map(p => ({
          start: p.iso, end: p.endIso, label: p.label?.trim() || null,
        }));
        const { clashes, orphanEventIds } = await this.admin.setWorkSlots(org, id, this.assigneeId(), slots);
        // Said out loud, never swallowed: time that could not be reserved is time the
        // calendar would otherwise claim he has.
        if (clashes.length) {
          clashNote = ` ${clashes.length} block${clashes.length > 1 ? 's' : ''} could not be reserved — that time is already taken.`;
        }
        this.admin.syncWorkEvent(id, orphanEventIds);
      }

      if (clashNote) this.toast.error(`Work task saved.${clashNote}`, 9000);
      else this.toast.success('Work task saved');
      this.open.set(false);
      this.saved.emit();
    } finally { this.saving.set(false); }
  }
}
