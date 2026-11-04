import { Component, OnDestroy, OnInit, computed, inject, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { BookingAdminService, WorkJob, TaskRow, AdminStaff, WorkStage, colorHex } from '@booking/core/services/booking-admin.service';
import {
  EMPTY_PERIOD, FilterGroup, FilterState, PeriodState, countsFor,
} from '@booking/core/interfaces/list-filter.interface';
import { inPeriodAt, periodLabel } from '@booking/core/utils/period.util';
import { ListFiltersComponent } from '@booking/ui/list-filters/list-filters.component';
import { WorkEditorComponent } from '@booking/ui/work-editor/work-editor.component';
import { StageManagerComponent } from '@booking/ui/stage-manager/stage-manager.component';
import { WorkSettingsComponent } from '@booking/ui/work-settings/work-settings.component';
import { SelectComponent, SelectOption } from '@booking/ui/select/select.component';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { subscribeToChanges, RealtimeHandle } from '@booking/core/utils/realtime.util';
import { onScopeChange } from '@booking/core/utils/scope-reload.util';

// Backlog (waiting cards) followed by the org's own stages, which are ROWS now (§24) —
// the owner adds, renames, reorders and removes them. A card sits in Backlog until its
// shoot is over (auto) or it's pulled in; the stages are where active work moves.
type ColumnKey = string;                      // 'backlog' | any stage key
const BACKLOG: ColumnKey = 'backlog';
const GROUP_KEYS = ['who', 'type', 'flag'] as const;   // render order, and the
                                                      // allowlist for the params

type Board = Record<ColumnKey, WorkJob[]>;

@Component({
  selector: 'app-work-board',
  standalone: true,
  imports: [FormsModule, DatePipe, DragDropModule, CdkMenu, CdkMenuItem, CdkMenuTrigger,
            WorkEditorComponent, StageManagerComponent, WorkSettingsComponent, SelectComponent, ListFiltersComponent],
  templateUrl: './work-board.component.html',
  styleUrl: './work-board.component.scss',
})
export class WorkBoardComponent implements OnInit, OnDestroy {
  private readonly admin = inject(BookingAdminService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);

  /** The org's stages, loaded with the board. */
  readonly stages = signal<WorkStage[]>([]);
  /** Backlog first, then the owner's stages in their order. */
  readonly columns = computed<{ key: ColumnKey; label: string; colorId: string | null }[]>(() => [
    { key: BACKLOG, label: 'Backlog', colorId: null },
    ...this.stages().map(st => ({ key: st.key, label: st.label, colorId: st.color_id })),
  ]);
  private readonly columnKeys = computed(() => this.columns().map(c => c.key));
  readonly board = signal<Board>({ [BACKLOG]: [] });
  /** Every card the server returned, archived ones included. `board` is what is RENDERED
   *  and is mutated optimistically by drag-and-drop, so the full set is kept separately
   *  rather than derived — a computed cannot be written to mid-drop. */
  private readonly allJobs = signal<WorkJob[]>([]);
  /**
   * Terminal cards age off the board (§25). Everything ends up Delivered and stays there,
   * so without this the last column grows without limit and buries this week's work —
   * the same reason Jira hides completed issues once a sprint closes. They are not
   * deleted and nothing moves: `is_archived` is computed on read from how long the card
   * has sat in a terminal stage, and this button brings them back into view.
   */
  readonly showArchived = signal(false);
  readonly archivedCount = computed(() => this.allJobs().filter(j => j.isArchived).length);
  stageHex(id: string | null): string { return colorHex(id); }
  readonly tasks = signal<TaskRow[]>([]);
  readonly staff = signal<AdminStaff[]>([]);
  readonly loading = signal(true);
  newTask: Record<string, string> = {};


  private realtime: RealtimeHandle | null = null;

  constructor() {
    // The board is per-worker (loadJobs filters to the scope), so a switch must re-pull.
    onScopeChange(this.auth, () => void this.reload());
    // The filters narrow what is RENDERED, so the columns rebuild rather than refetch.
    effect(() => { this.filterState(); this.period(); this.regroup(); });
  }

  /** Active cards past their deliver-by date, where the work is not finished. Keys off the
   *  stage's own is_done flag — stages are renameable rows, so the string 'delivered' is
   *  not a thing to compare against. */
  readonly overdueCount = computed(() => {
    const now = Date.now();
    return this.allJobs()
      .filter(j => j.isActive && !j.stageIsDone && j.dueAt && new Date(j.dueAt).getTime() < now).length;
  });

  // ── Work task editor (reserved time + linked jobs) ──────────────────────
  readonly assigneeOptions = computed<SelectOption[]>(() => [
    { value: '', label: 'Unassigned' },
    ...this.staff().map(s => ({ value: s.id, label: s.name })),
  ]);

  readonly stagesOpen = signal(false);
  readonly settingsOpen = signal(false);
  readonly editorOpen = signal(false);
  readonly editing = signal<WorkJob | null>(null);

  /** With a card, edits it; without, creates a standalone task. */
  openEditor(j?: WorkJob): void {
    this.editing.set(j ?? null);
    this.editorOpen.set(true);
  }
  async onWorkSaved(): Promise<void> { this.editing.set(null); await this.reload(); }
  async onStagesChanged(): Promise<void> { await this.reload(); }

  async ngOnInit(): Promise<void> {
    // No reload() here: the scope effect below fires as soon as orgId resolves, and again
    // on every org / worker switch. Calling it here too would just fetch twice on load.
    await this.auth.initialize();
    this.realtime = subscribeToChanges('work-board', ['tasks', 'bookings'], () => void this.reload());
  }
  ngOnDestroy(): void { this.realtime?.destroy(); }

  private async reload(): Promise<void> {
    const org = this.auth.orgId();
    if (org) {
      const [jobs, tasks, staff] = await Promise.all([
        this.admin.loadJobs(org), this.admin.loadTasks(org), this.admin.listStaff(org),
      ]);
      this.stages.set(await this.admin.listWorkStages(org));
      this.tasks.set(tasks);
      this.staff.set(staff);
      this.allJobs.set(jobs);
      this.regroup();
    }
    this.loading.set(false);
  }

  // ── Filters (dimensions) ─────────────────────────────────────────────
  // The board's COLUMN is already the stage, so stage is deliberately not a dimension
  // here: the useful questions on a board are whose card it is, what kind of work it
  // is, and what is late.
  readonly filterState = signal<FilterState>({});
  readonly period = signal<PeriodState>({ ...EMPTY_PERIOD, field: 'dueAt' });
  readonly dateFields = [
    { value: 'dueAt',    label: 'deliver-by date' },
    { value: 'start_at', label: 'shoot date' },
  ];

  private jobDate(j: WorkJob): string | null {
    return this.period().field === 'start_at' ? j.start_at : j.dueAt;
  }

  private optionMatches(j: WorkJob, group: string, value: string): boolean {
    switch (group) {
      case 'who':  return value === '' ? !j.assigneeId : j.assigneeId === value;
      case 'type': return value === '' ? !j.workType : j.workType === value;
      case 'flag':
        if (value === 'overdue') {
          return !!j.dueAt && !j.stageIsDone && j.isActive && new Date(j.dueAt).getTime() < this.nowMs();
        }
        if (value === 'linked')     return !!j.bookingId;
        if (value === 'standalone') return !j.bookingId;
        return false;
      default: return true;
    }
  }

  private passesAll(j: WorkJob, st: FilterState, skip?: string): boolean {
    if (skip !== 'period' && !inPeriodAt(this.jobDate(j), this.period())) return false;
    for (const key of GROUP_KEYS) {
      if (key === skip) continue;
      const sel = st[key] ?? [];
      if (sel.length && !sel.some(v => this.optionMatches(j, key, v))) return false;
    }
    return true;
  }

  /** Cards the period allows, which is what every chip counts against. */
  private readonly inWindow = computed(() =>
    this.allJobs().filter(j => (this.showArchived() || !j.isArchived)
                            && inPeriodAt(this.jobDate(j), this.period())));

  private readonly nowMs = signal(Date.now());

  readonly filterGroups = computed<FilterGroup[]>(() => {
    const st = this.filterState(), base = this.inWindow();
    const build = (key: string, label: string, opts: ReadonlyArray<[string, string]>, alert = ''): FilterGroup => {
      const counts = countsFor(base, opts.map(o => o[0]),
        j => this.passesAll(j, st, key), (j, v) => this.optionMatches(j, key, v));
      return {
        key, label,
        options: opts.map(([value, text]) => ({
          value, label: text, count: counts[value] ?? 0, alert: value === alert,
        })),
      };
    };
    // Built from the org's OWN rows, not a constant: types and staff are renameable
    // per-org tables, and a hardcoded list would drift on the first rename.
    const types = new Map<string, string>();
    for (const j of this.allJobs()) {
      if (j.workType) types.set(j.workType, j.workTypeLabel ?? j.workType);
    }
    return [
      build('who',  'Owner', [...this.staff().map(x => [x.id, x.name] as [string, string]),
                              ['', 'Unassigned']]),
      build('type', 'Type',  [...[...types].map(([k, v]) => [k, v] as [string, string]),
                              ['', 'No type']]),
      build('flag', 'Flags', [['overdue', 'Overdue'], ['linked', 'Has a booking'],
                              ['standalone', 'Standalone']], 'overdue'),
    ];
  });

  readonly summary = computed(() => {
    const n = Object.values(this.board()).reduce((t, col) => t + col.length, 0);
    if (!n) return '';
    return `${n} card${n === 1 ? '' : 's'} · ${periodLabel(this.period())}`
         + ` by ${this.period().field === 'start_at' ? 'shoot date' : 'deliver-by date'}`;
  });

  /** Rebuild the rendered columns from `allJobs`. Built from the CURRENT columns: a card
   *  whose stage was deleted mid-session would otherwise land on an undefined array. */
  private regroup(): void {
    const grouped: Board = {};
    for (const c of this.columns()) grouped[c.key] = [];
    const st = this.filterState();
    for (const j of this.allJobs()) {
      if (j.isArchived && !this.showArchived()) continue;
      if (!this.passesAll(j, st)) continue;
      (grouped[this.columnOf(j)] ??= []).push(j);
    }
    this.board.set(grouped);
  }

  toggleArchived(): void { this.showArchived.update(v => !v); this.regroup(); }

  /** Which board column a card belongs to right now. */
  private columnOf(j: WorkJob): ColumnKey { return j.isActive ? j.production_status : 'backlog'; }
  private columnLabel(key: ColumnKey): string { return this.columns().find(c => c.key === key)?.label ?? key; }

  tasksFor(workItemId: string): TaskRow[] { return this.tasks().filter(t => t.work_item_id === workItemId); }
  remaining(workItemId: string): number { return this.tasksFor(workItemId).filter(t => !t.is_done).length; }

  // ── Delete cards ──────────────────────────────────────────────────
  async deleteCard(j: WorkJob): Promise<void> {
    const ok = await this.confirm.ask(j.bookingId
      ? { title: 'Remove from board', message: 'Remove this card from the Work board? The booking, invoice and calendar event are kept.', confirmLabel: 'Remove', danger: true }
      : { title: 'Delete card', message: 'Delete this card? This can’t be undone.', confirmLabel: 'Delete', danger: true });
    if (!ok) return;
    await this.admin.deleteWorkItem(j.id, j.bookingId);
    await this.reload();
    this.toast.info(j.bookingId ? 'Removed from board' : 'Card deleted');
  }

  // ── Moving cards (Backlog ↔ stages) — drag or arrows ───────────────
  /** Persist a move to a target column: Backlog = send back; a stage = activate + set stage. */
  private async moveTo(j: WorkJob, target: ColumnKey): Promise<void> {
    if (target === 'backlog') {
      await this.admin.backlogCard(j.id);
    } else {
      if (!j.isActive) await this.admin.activateCard(j.id);
      await this.admin.setStage(j.id, target, j.bookingId);
    }
    await this.reload();
  }

  async drop(event: CdkDragDrop<WorkJob[]>, target: ColumnKey): Promise<void> {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.board.set({ ...this.board() });
      return;
    }
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    const job = event.container.data[event.currentIndex];
    this.board.set({ ...this.board() });   // optimistic; reload reconciles
    await this.moveTo(job, target);
    this.toast.success(target === 'backlog' ? 'Moved to Backlog' : `Moved to ${this.columnLabel(target)}`);
  }

  // Arrow buttons — touch-friendly alternative to dragging (Backlog ‹—› stages).
  canPrev(j: WorkJob): boolean { return this.columnKeys().indexOf(this.columnOf(j)) > 0; }
  canNext(j: WorkJob): boolean {
    const k = this.columnKeys();
    return this.columnKeys().indexOf(this.columnOf(j)) < k.length - 1;
  }
  async move(j: WorkJob, delta: number): Promise<void> {
    const keys = this.columnKeys();
    const i = keys.indexOf(this.columnOf(j)) + delta;
    if (i < 0 || i >= keys.length) return;
    await this.moveTo(j, keys[i]);
    this.toast.success(keys[i] === BACKLOG ? 'Moved to Backlog' : `Moved to ${this.columnLabel(keys[i])}`);
  }

  // ── Assignee + due date (Trello-style) ─────────────────────────────
  async assign(j: WorkJob, staffId: string): Promise<void> {
    await this.admin.assignCard(j.id, staffId || null);
    await this.reload();
  }
  /** Initials for the assignee avatar chip. */
  initials(name: string | null): string {
    if (!name) return '?';
    return name.trim().split(/\s+/).map(p => p[0]).slice(0, 2).join('').toUpperCase();
  }
  isOverdue(j: WorkJob): boolean {
    return !!j.dueAt && !j.stageIsDone && new Date(j.dueAt).getTime() < Date.now();
  }
  dueValue(j: WorkJob): string { return j.dueAt ? j.dueAt.slice(0, 10) : ''; }
  async setDue(j: WorkJob, value: string): Promise<void> {
    await this.admin.setDue(j.id, value ? new Date(`${value}T12:00:00`).toISOString() : null);
    await this.reload();
  }

  // ── Tasks ─────────────────────────────────────────────────────────
  async toggle(t: TaskRow): Promise<void> { await this.admin.toggleTask(t.id, !t.is_done); await this.reload(); }
  async add(workItemId: string): Promise<void> {
    const title = (this.newTask[workItemId] ?? '').trim();
    if (!title) return;
    this.newTask[workItemId] = '';
    const org = this.auth.orgId();
    if (org) { await this.admin.addTask(org, workItemId, title); await this.reload(); this.toast.success('Task added'); }
  }
  async remove(t: TaskRow): Promise<void> { await this.admin.removeTask(t.id); await this.reload(); this.toast.info('Task removed'); }
}
