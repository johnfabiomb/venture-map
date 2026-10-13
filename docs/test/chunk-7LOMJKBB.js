import {
  AvailabilityPickerComponent
} from "./chunk-Y4ZDVRTH.js";
import {
  ModalComponent
} from "./chunk-5MZRX563.js";
import {
  BookingAdminService,
  colorHex
} from "./chunk-3T6U65XO.js";
import {
  SelectComponent
} from "./chunk-EY4OZNTF.js";
import {
  BookingDataService
} from "./chunk-NUDELOJP.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-RKKFBZE5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BW7NI53J.js";
import {
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JW5UDKQ7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/ui/work-editor/work-editor.component.ts
function WorkEditorComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Pre-filled from the worker you're viewing (", ctx, ").");
  }
}
function WorkEditorComponent_Conditional_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "No jobs to link yet.");
    \u0275\u0275elementEnd();
  }
}
function WorkEditorComponent_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-select", 21);
    \u0275\u0275twoWayListener("valuesChange", function WorkEditorComponent_Conditional_40_Conditional_1_Template_app_select_valuesChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.linked, $event) || (ctx_r1.linked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "small", 5);
    \u0275\u0275text(2, "Their references show on the calendar event, so you can match the block back to the shoot.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("multiple", true);
    \u0275\u0275twoWayProperty("values", ctx_r1.linked);
    \u0275\u0275property("options", ctx_r1.jobOptions())("searchable", true);
  }
}
function WorkEditorComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, WorkEditorComponent_Conditional_40_Conditional_0_Template, 2, 0, "p", 17)(1, WorkEditorComponent_Conditional_40_Conditional_1_Template, 3, 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.jobOptions().length === 0 ? 0 : 1);
  }
}
function WorkEditorComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.doneCount(), "/", ctx_r1.checklist().length, "");
  }
}
function WorkEditorComponent_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "label", 24)(2, "input", 12);
    \u0275\u0275listener("change", function WorkEditorComponent_Conditional_45_For_2_Template_input_change_2_listener() {
      const $index_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTask($index_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function WorkEditorComponent_Conditional_45_For_2_Template_button_click_5_listener() {
      const $index_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeTask($index_r4));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275classProp("we__task--done", t_r5.done);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", t_r5.done);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.title);
  }
}
function WorkEditorComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, WorkEditorComponent_Conditional_45_For_2_Template, 7, 4, "div", 22, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.checklist());
  }
}
function WorkEditorComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Pick who is doing it first \u2014 the time is reserved against their calendar.");
    \u0275\u0275elementEnd();
  }
}
function WorkEditorComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "This time becomes unavailable to clients and warns you, exactly like a shoot.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-availability-picker", 26);
    \u0275\u0275listener("slotsChange", function WorkEditorComponent_Conditional_54_Template_app_availability_picker_slotsChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSlots($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("staffId", ctx_r1.assigneeId())("timezone", ctx_r1.timezone())("initialSlots", ctx_r1.initialSlots());
  }
}
var BACKLOG = "backlog";
var WorkEditorComponent = class _WorkEditorComponent {
  /** Unticking clears the links rather than hiding them — a hidden link that still saved
   *  would mean the calendar event names a job the card says it does not cover. */
  toggleCovers() {
    const next = !this.coversJob();
    this.coversJob.set(next);
    if (!next)
      this.linked.set([]);
  }
  addTask() {
    const t = this.newTask().trim();
    if (!t)
      return;
    this.checklist.update((l) => [...l, { id: null, title: t, done: false }]);
    this.newTask.set("");
  }
  toggleTask(i) {
    this.checklist.update((l) => l.map((t, n) => n === i ? __spreadProps(__spreadValues({}, t), { done: !t.done }) : t));
  }
  removeTask(i) {
    const t = this.checklist()[i];
    if (t?.id)
      this.removedTaskIds.push(t.id);
    this.checklist.update((l) => l.filter((_, n) => n !== i));
  }
  onSlots(slots) {
    this.picked = slots;
  }
  constructor() {
    this.admin = inject(BookingAdminService);
    this.data = inject(BookingDataService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.open = model(false);
    this.job = input(null);
    this.staff = input([]);
    this.saved = output();
    this.saving = signal(false);
    this.title = signal("");
    this.description = signal("");
    this.stageKey = signal(BACKLOG);
    this.workType = signal("");
    this.assigneeId = signal("");
    this.dueOn = signal("");
    this.coversJob = signal(false);
    this.linked = signal([]);
    this.initialSlots = signal([]);
    this.picked = [];
    this.checklist = signal([]);
    this.newTask = signal("");
    this.removedTaskIds = [];
    this.originalDone = /* @__PURE__ */ new Map();
    this.doneCount = computed(() => this.checklist().filter((t) => t.done).length);
    this.stages = signal([]);
    this.types = signal([]);
    this.timezone = computed(() => "Europe/Malta");
    this.scopedWorkerName = computed(() => this.auth.activeStaff()?.name ?? "");
    this.staffOptions = computed(() => this.staff().map((s) => ({ value: s.id, label: s.name })));
    this.typeOptions = computed(() => this.types().map((t) => ({ value: t.key, label: t.label })));
    this.stageOptions = computed(() => [
      { value: BACKLOG, label: "Backlog", hint: "not started" },
      ...this.stages().map((st) => ({ value: st.key, label: st.label, color: colorHex(st.color_id) }))
    ]);
    this.jobOptions = computed(() => [...this.data.bookings()].sort((a, b) => (b.next_start_at ?? "").localeCompare(a.next_start_at ?? "")).slice(0, 200).map((b) => ({
      value: b.id,
      label: b.title,
      hint: [
        b.booking_ref,
        b.client_name,
        b.next_start_at ? new Date(b.next_start_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "2-digit" }) : null
      ].filter(Boolean).join(" \xB7 ")
    })));
    effect(() => {
      if (!this.open())
        return;
      const j = this.job();
      queueMicrotask(() => __async(this, null, function* () {
        const org = this.auth.orgId();
        this.title.set(j?.title ?? "");
        this.description.set(j?.description ?? "");
        this.workType.set(j?.workType ?? "");
        this.assigneeId.set(j?.assigneeId ?? this.auth.staffId() ?? "");
        this.dueOn.set(j?.dueAt ? j.dueAt.slice(0, 10) : "");
        this.picked = [];
        this.newTask.set("");
        this.removedTaskIds = [];
        this.originalDone.clear();
        const stages = org ? yield this.admin.listWorkStages(org) : [];
        this.stages.set(stages);
        if (org)
          this.types.set(yield this.admin.listWorkTypes(org));
        this.stageKey.set(j ? j.isActive ? j.production_status : BACKLOG : stages[0]?.key ?? BACKLOG);
        if (j) {
          const [slots, links, tasks] = yield Promise.all([
            this.admin.getWorkSlots(j.id),
            this.admin.getWorkBookings(j.id),
            org ? this.admin.loadTasks(org) : Promise.resolve([])
          ]);
          this.initialSlots.set(slots);
          this.linked.set(links);
          this.coversJob.set(links.length > 0);
          const mine = tasks.filter((t) => t.work_item_id === j.id);
          for (const t of mine)
            this.originalDone.set(t.id, t.is_done);
          this.checklist.set(mine.map((t) => ({ id: t.id, title: t.title, done: t.is_done })));
        } else {
          this.initialSlots.set([]);
          this.linked.set([]);
          this.coversJob.set(false);
          this.checklist.set([]);
        }
      }));
    });
  }
  save() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || !this.title().trim() || this.saving())
        return;
      this.saving.set(true);
      try {
        const j = this.job();
        const originating = this.coversJob() ? this.linked()[0] ?? null : null;
        const id = j ? j.id : yield this.admin.addWorkItem(org, originating, this.title().trim());
        if (!id) {
          this.toast.error("Could not save the work task.");
          return;
        }
        yield this.admin.updateWorkItem(id, {
          title: this.title().trim(),
          description: this.description().trim() || null,
          work_type: this.workType() || null
        });
        yield this.admin.assignCard(id, this.assigneeId() || null);
        yield this.admin.setDue(id, this.dueOn() ? (/* @__PURE__ */ new Date(`${this.dueOn()}T12:00:00`)).toISOString() : null);
        yield this.admin.setWorkBookings(org, id, this.coversJob() ? this.linked() : []);
        const current = j ? j.isActive ? j.production_status : BACKLOG : null;
        if (this.stageKey() !== current) {
          yield this.admin.moveWorkCard(id, this.stageKey(), j?.bookingId ?? originating, j?.isActive ?? false);
        }
        for (const tid of this.removedTaskIds)
          yield this.admin.removeTask(tid);
        for (const t of this.checklist()) {
          if (t.id === null)
            yield this.admin.addTask(org, id, t.title);
          else if (this.originalDone.get(t.id) !== t.done)
            yield this.admin.toggleTask(t.id, t.done);
        }
        let clashNote = "";
        if (this.assigneeId()) {
          const slots = this.picked.map((p) => ({
            start: p.iso,
            end: p.endIso,
            label: p.label?.trim() || null
          }));
          const { clashes, orphanEventIds } = yield this.admin.setWorkSlots(org, id, this.assigneeId(), slots);
          if (clashes.length) {
            clashNote = ` ${clashes.length} block${clashes.length > 1 ? "s" : ""} could not be reserved \u2014 that time is already taken.`;
          }
          this.admin.syncWorkEvent(id, orphanEventIds);
        }
        if (clashNote)
          this.toast.error(`Work task saved.${clashNote}`, 9e3);
        else
          this.toast.success("Work task saved");
        this.open.set(false);
        this.saved.emit();
      } finally {
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function WorkEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WorkEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkEditorComponent, selectors: [["app-work-editor"]], inputs: { open: [1, "open"], job: [1, "job"], staff: [1, "staff"] }, outputs: { open: "openChange", saved: "saved" }, decls: 60, vars: 25, consts: [[3, "openChange", "open", "title", "dismissable"], [1, "we"], [1, "we__field"], ["name", "weTitle", "placeholder", "e.g. Edit the Prohealth interviews", 3, "ngModelChange", "ngModel"], ["name", "weDesc", "rows", "3", "placeholder", "The brief, what the client asked for, anything you'd forget", 3, "ngModelChange", "ngModel"], [1, "we__sub"], [1, "we__row"], [3, "changed", "value", "options", "searchable"], ["placeholder", "Not set", 3, "changed", "value", "options", "clearable"], ["placeholder", "Unassigned", 3, "changed", "value", "options", "clearable"], ["type", "date", "name", "weDue", 3, "ngModelChange", "ngModel"], [1, "we__check"], ["type", "checkbox", 3, "change", "checked"], [1, "we__tasks"], [1, "we__task-add"], ["name", "weNewTask", "placeholder", "Add a step\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click", "disabled"], [1, "we__hint"], [1, "we__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["placeholder", "Search by client, title or reference\u2026", 3, "valuesChange", "multiple", "values", "options", "searchable"], [1, "we__task", 3, "we__task--done"], [1, "we__task"], [1, "we__task-check"], ["type", "button", "title", "Remove", 1, "we__task-del", 3, "click"], [3, "slotsChange", "staffId", "timezone", "initialSlots"]], template: function WorkEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal", 0);
        \u0275\u0275listener("openChange", function WorkEditorComponent_Template_app_modal_openChange_0_listener($event) {
          return ctx.open.set($event);
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "label", 2)(3, "span");
        \u0275\u0275text(4, "What needs doing?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 3);
        \u0275\u0275listener("ngModelChange", function WorkEditorComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.title.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "label", 2)(7, "span");
        \u0275\u0275text(8, "Details ");
        \u0275\u0275elementStart(9, "em");
        \u0275\u0275text(10, "optional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "textarea", 4);
        \u0275\u0275listener("ngModelChange", function WorkEditorComponent_Template_textarea_ngModelChange_11_listener($event) {
          return ctx.description.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "small", 5);
        \u0275\u0275text(13, "Goes into the calendar event, so it's there on your phone.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "label", 2)(16, "span");
        \u0275\u0275text(17, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "app-select", 7);
        \u0275\u0275listener("changed", function WorkEditorComponent_Template_app_select_changed_18_listener($event) {
          return ctx.stageKey.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "label", 2)(20, "span");
        \u0275\u0275text(21, "Type of work");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "app-select", 8);
        \u0275\u0275listener("changed", function WorkEditorComponent_Template_app_select_changed_22_listener($event) {
          return ctx.workType.set($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 6)(24, "label", 2)(25, "span");
        \u0275\u0275text(26, "Who");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "app-select", 9);
        \u0275\u0275listener("changed", function WorkEditorComponent_Template_app_select_changed_27_listener($event) {
          return ctx.assigneeId.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, WorkEditorComponent_Conditional_28_Template, 2, 1, "small", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "label", 2)(30, "span");
        \u0275\u0275text(31, "Deliver by ");
        \u0275\u0275elementStart(32, "em");
        \u0275\u0275text(33, "optional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "input", 10);
        \u0275\u0275listener("ngModelChange", function WorkEditorComponent_Template_input_ngModelChange_34_listener($event) {
          return ctx.dueOn.set($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 2)(36, "label", 11)(37, "input", 12);
        \u0275\u0275listener("change", function WorkEditorComponent_Template_input_change_37_listener() {
          return ctx.toggleCovers();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "This task covers a job");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, WorkEditorComponent_Conditional_40_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 2)(42, "span");
        \u0275\u0275text(43, "Checklist ");
        \u0275\u0275template(44, WorkEditorComponent_Conditional_44_Template, 2, 2, "em");
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, WorkEditorComponent_Conditional_45_Template, 3, 0, "div", 13);
        \u0275\u0275elementStart(46, "div", 14)(47, "input", 15);
        \u0275\u0275listener("ngModelChange", function WorkEditorComponent_Template_input_ngModelChange_47_listener($event) {
          return ctx.newTask.set($event);
        })("keyup.enter", function WorkEditorComponent_Template_input_keyup_enter_47_listener() {
          return ctx.addTask();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 16);
        \u0275\u0275listener("click", function WorkEditorComponent_Template_button_click_48_listener() {
          return ctx.addTask();
        });
        \u0275\u0275text(49, "Add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 2)(51, "span");
        \u0275\u0275text(52, "Reserved time");
        \u0275\u0275elementEnd();
        \u0275\u0275template(53, WorkEditorComponent_Conditional_53_Template, 2, 0, "p", 17)(54, WorkEditorComponent_Conditional_54_Template, 3, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 18)(56, "button", 19);
        \u0275\u0275listener("click", function WorkEditorComponent_Template_button_click_56_listener() {
          return ctx.open.set(false);
        });
        \u0275\u0275text(57, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "button", 20);
        \u0275\u0275listener("click", function WorkEditorComponent_Template_button_click_58_listener() {
          return ctx.save();
        });
        \u0275\u0275text(59);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_14_0;
        \u0275\u0275property("open", ctx.open())("title", ctx.job() ? "Work task" : "New work task")("dismissable", true);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.title());
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.description());
        \u0275\u0275advance(7);
        \u0275\u0275property("value", ctx.stageKey())("options", ctx.stageOptions())("searchable", false);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.workType())("options", ctx.typeOptions())("clearable", true);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.assigneeId())("options", ctx.staffOptions())("clearable", true);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_14_0 = ctx.scopedWorkerName()) ? 28 : -1, tmp_14_0);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.dueOn());
        \u0275\u0275advance(3);
        \u0275\u0275property("checked", ctx.coversJob());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.coversJob() ? 40 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.checklist().length ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.checklist().length ? 45 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.newTask());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.newTask().trim());
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.assigneeId() ? 53 : 54);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.saving() || !ctx.title().trim());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : "Save", " ");
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ModalComponent, AvailabilityPickerComponent, SelectComponent], styles: ["\n\n.we__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.we__field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.we__field[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-style: normal;\n  font-weight: 400;\n}\n.we__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.we__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #fff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.we__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n@media (max-width: 560px) {\n  .we__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .we__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.we__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.we__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.we__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  line-height: 1.4;\n}\n.we__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 520px) {\n  .we__row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.we__hint[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 11.5px;\n  color: #64748b;\n  line-height: 1.45;\n}\n.we__check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  margin-bottom: 2px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  color: #334155;\n}\n.we__check[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.we__check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #F4A922;\n  flex-shrink: 0;\n  margin: 0;\n}\n.we__tasks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.we__task[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  border-radius: 7px;\n  background: #f8fafc;\n  font-size: 12.5px;\n}\n.we__task--done[_ngcontent-%COMP%]   .we__task-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n.we__task-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 auto;\n  min-width: 0;\n  cursor: pointer;\n}\n.we__task-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  accent-color: #F4A922;\n  flex-shrink: 0;\n  margin: 0;\n}\n.we__task-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-wrap: anywhere;\n  color: #334155;\n}\n.we__task-del[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  color: #cbd5e1;\n  font-size: 16px;\n  line-height: 1;\n  cursor: pointer;\n  padding: 0 2px;\n  flex-shrink: 0;\n}\n.we__task-del[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.we__task-add[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: stretch;\n  margin-top: 6px;\n}\n.we__task-add[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.we__task-add[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.we__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 18px;\n}\n@media (max-width: 560px) {\n  .we__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=work-editor.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkEditorComponent, { className: "WorkEditorComponent", filePath: "src/app/booking/ui/work-editor/work-editor.component.ts", lineNumber: 202 });
})();

export {
  WorkEditorComponent
};
//# sourceMappingURL=chunk-7LOMJKBB.js.map
