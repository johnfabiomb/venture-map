import { ChangeDetectionStrategy, Component, computed, effect, inject, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { SelectComponent, SelectOption } from '@booking/ui/select/select.component';
import { AvailabilityPickerComponent, PickedSlot } from '@booking/platform/bookings/booking-form/availability-picker.component';
import { BookingAdminService, WorkJob } from '@booking/core/services/booking-admin.service';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { BookingSlot } from '@booking/core/interfaces/booking.interface';

/**
 * Reserve time for post-production, and say which jobs it covers.
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
  imports: [FormsModule, DatePipe, ModalComponent, AvailabilityPickerComponent, SelectComponent],
  template: `
    <app-modal [open]="open()" (openChange)="open.set($event)"
               [title]="job() ? 'Work task' : 'New work task'" [dismissable]="true">
      <div class="we">
        <label class="we__field">
          <span>What needs doing?</span>
          <input [ngModel]="title()" (ngModelChange)="title.set($event)" name="weTitle"
                 placeholder="e.g. Edit the Prohealth interviews" />
        </label>

        @if (scopedWorkerName(); as w) {
          <p class="we__hint">Reserved against <strong>{{ w }}</strong> — change the worker from the sidebar.</p>
        }
        <div class="we__row">
          @if (!scopedWorkerName()) {
            <label class="we__field">
              <span>Who</span>
              <app-select [value]="assigneeId()" (changed)="assigneeId.set($event)"
                          [options]="staffOptions()" placeholder="Unassigned" [clearable]="true" />
            </label>
          }
          <label class="we__field">
            <span>Deliver by <em>optional</em></span>
            <input type="date" [ngModel]="dueOn()" (ngModelChange)="dueOn.set($event)" name="weDue" />
          </label>
        </div>

        <!-- Many-to-many: a week's edit can cover several shoots, and one shoot can need
             several tasks. Optional, because a task may be nothing to do with a job. -->
        <div class="we__field">
          <span>Jobs this covers <em>optional</em></span>
          @if (jobOptions().length === 0) {
            <p class="we__hint">No jobs to link yet.</p>
          } @else {
            <div class="we__jobs">
              @for (b of jobOptions(); track b.id) {
                <label class="we__job" [class.we__job--on]="isLinked(b.id)">
                  <input type="checkbox" [checked]="isLinked(b.id)" (change)="toggleJob(b.id)" />
                  <span class="we__job-ref">{{ b.booking_ref }}</span>
                  <span class="we__job-title">{{ b.title }}</span>
                  <span class="we__job-when">{{ b.next_start_at | date:'d MMM' }}</span>
                </label>
              }
            </div>
          }
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
    .we__field input, .we__field select {
      padding: 10px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px;
      font-size: 14px; font-family: inherit; color: #0f172a; background: #fff;
      width: 100%; box-sizing: border-box;
    }
    /* Below 16px iOS zooms in on focus and never zooms back out. */
    @media (max-width: 560px) { .we__field input, .we__field select { font-size: 16px; } }
    .we__field input:focus, .we__field select:focus { outline: none; border-color: #F4A922; }
    .we__row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    @media (max-width: 520px) { .we__row { grid-template-columns: 1fr; } }
    .we__hint { margin: 0 0 8px; font-size: 11.5px; color: #64748b; line-height: 1.45; }
    .we__jobs { display: flex; flex-direction: column; gap: 6px; max-height: 190px; overflow-y: auto; }
    .we__job {
      display: flex; align-items: center; gap: 8px; padding: 7px 10px;
      border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer; font-size: 12.5px;
    }
    .we__job--on { border-color: #F4A922; background: rgba(244,169,34,0.07); }
    .we__job input { width: 15px; height: 15px; accent-color: #F4A922; flex-shrink: 0; }
    .we__job-ref { font-family: 'SF Mono','Fira Mono',monospace; font-size: 11px; font-weight: 700; color: #0f172a; }
    .we__job-title { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #475569; }
    .we__job-when { color: #94a3b8; font-weight: 600; white-space: nowrap; }
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
  readonly assigneeId = signal('');
  readonly dueOn = signal('');
  readonly linked = signal<string[]>([]);
  readonly initialSlots = signal<BookingSlot[]>([]);
  private picked: PickedSlot[] = [];

  readonly timezone = computed(() => 'Europe/Malta');
  readonly scopedWorkerName = computed(() => this.auth.activeStaff()?.name ?? '');
  readonly staffOptions = computed<SelectOption[]>(() =>
    this.staff().map(s => ({ value: s.id, label: s.name })));
  /** Recent jobs, newest first — linking to a shoot from last year is not the case. */
  readonly jobOptions = computed(() =>
    [...this.data.bookings()]
      .sort((a, b) => b.next_start_at.localeCompare(a.next_start_at))
      .slice(0, 60));

  isLinked(id: string): boolean { return this.linked().includes(id); }
  toggleJob(id: string): void {
    this.linked.update(l => l.includes(id) ? l.filter(x => x !== id) : [...l, id]);
  }
  onSlots(slots: PickedSlot[]): void { this.picked = slots; }

  constructor() {
    // Reset on open — the instance is reused, and last time's blocks reappearing on a
    // different task would reserve the wrong evening.
    effect(() => {
      if (!this.open()) return;
      const j = this.job();
      queueMicrotask(async () => {
        this.title.set(j?.title ?? '');
        this.assigneeId.set(j?.assigneeId ?? this.auth.staffId() ?? '');
        this.dueOn.set(j?.dueAt ? j.dueAt.slice(0, 10) : '');
        this.picked = [];
        if (j) {
          const [slots, links] = await Promise.all([
            this.admin.getWorkSlots(j.id), this.admin.getWorkBookings(j.id),
          ]);
          this.initialSlots.set(slots);
          this.linked.set(links);
        } else {
          this.initialSlots.set([]);
          this.linked.set([]);
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
      const id = j ? j.id : await this.admin.addWorkItem(org, null, this.title().trim());
      if (!id) { this.toast.error('Could not save the work task.'); return; }

      if (j) await this.admin.renameWorkItem(id, this.title().trim());
      await this.admin.assignCard(id, this.assigneeId() || null);
      await this.admin.setDue(id, this.dueOn() ? new Date(`${this.dueOn()}T12:00:00`).toISOString() : null);
      await this.admin.setWorkBookings(org, id, this.linked());

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
