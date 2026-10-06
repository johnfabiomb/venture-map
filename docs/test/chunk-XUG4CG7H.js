import {
  LineItemsEditorComponent
} from "./chunk-C4KSFTAK.js";
import {
  ClientEditorComponent
} from "./chunk-LOZ3BYDU.js";
import "./chunk-5MZRX563.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingAdminService
} from "./chunk-R4YZFFFN.js";
import {
  BookingDataService
} from "./chunk-NY2PST4F.js";
import "./chunk-F57EG5LQ.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-76D3SO4I.js";
import {
  AvailabilityCalendarComponent,
  nextRange
} from "./chunk-FETCBLEO.js";
import "./chunk-DEXNZGWM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BW7NI53J.js";
import "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-F2R7EXZF.js";
import "./chunk-YHDSDEW7.js";
import {
  CurrencyPipe,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/booking/core/utils/timezone.util.ts
function tzOffsetMs(instant, tz) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const p = {};
  for (const part of dtf.formatToParts(instant))
    p[part.type] = part.value;
  const asUtc = Date.UTC(+p["year"], +p["month"] - 1, +p["day"], +p["hour"], +p["minute"], +p["second"]);
  return asUtc - instant.getTime();
}
function zonedClockToUtc(dateStr, hour, minute, tz) {
  const [y, m, d] = dateStr.split("-").map(Number);
  let ms = Date.UTC(y, m - 1, d, hour, minute, 0);
  for (let i = 0; i < 2; i++) {
    const corrected = Date.UTC(y, m - 1, d, hour, minute, 0) - tzOffsetMs(new Date(ms), tz);
    if (corrected === ms)
      break;
    ms = corrected;
  }
  return new Date(ms);
}
function utcToZoned(instant, tz) {
  const dtf = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
  const p = {};
  for (const part of dtf.formatToParts(instant))
    p[part.type] = part.value;
  return { dateStr: `${p["year"]}-${p["month"]}-${p["day"]}`, hour: +p["hour"], minute: +p["minute"] };
}

// src/app/booking/platform/bookings/booking-form/availability-picker.component.ts
var _forTrack0 = ($index, $item) => $item.iso;
function AvailabilityPickerComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 12);
    \u0275\u0275listener("ngModelChange", function AvailabilityPickerComponent_Conditional_0_For_6_Template_input_ngModelChange_3_listener($event) {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setLabel(s_r2, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function AvailabilityPickerComponent_Conditional_0_For_6_Template_button_click_4_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeSlot(s_r2));
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.timeLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", s_r2.label)("name", "slotName" + $index_r4);
  }
}
function AvailabilityPickerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275text(2, "Time blocks ");
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, AvailabilityPickerComponent_Conditional_0_For_6_Template, 6, 3, "div", 4, _forTrack0);
    \u0275\u0275elementStart(7, "datalist", 5);
    \u0275\u0275element(8, "option", 6)(9, "option", 7)(10, "option", 8)(11, "option", 9)(12, "option", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.slots().length);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.slots());
  }
}
function AvailabilityPickerComponent_Conditional_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Checking your Google Calendar\u2026");
    \u0275\u0275elementEnd();
  }
}
function AvailabilityPickerComponent_Conditional_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Couldn't reach your Google Calendar \u2014 times below may already be taken.");
    \u0275\u0275elementEnd();
  }
}
function AvailabilityPickerComponent_Conditional_1_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("All day: ", ctx_r2.allDayLabel(), "");
  }
}
function AvailabilityPickerComponent_Conditional_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AvailabilityPickerComponent_Conditional_1_Case_2_Conditional_0_Template, 2, 1, "div", 16);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.gcalAllDay().length ? 0 : -1);
  }
}
function AvailabilityPickerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AvailabilityPickerComponent_Conditional_1_Case_0_Template, 2, 0, "div", 14)(1, AvailabilityPickerComponent_Conditional_1_Case_1_Template, 2, 0, "div", 15)(2, AvailabilityPickerComponent_Conditional_1_Case_2_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.gcalState()) === "loading" ? 0 : tmp_1_0 === "failed" ? 1 : 2);
  }
}
var SLOTS = 48;
var SLOT_MIN = 30;
var pad = (n) => String(n).padStart(2, "0");
var hm = (i) => `${pad(Math.floor(i / 2))}:${pad(i % 2 * SLOT_MIN)}`;
var AvailabilityPickerComponent = class _AvailabilityPickerComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.confirm = inject(ConfirmService);
    this.staffId = input.required();
    this.timezone = input("Europe/Malta");
    this.initialSlots = input([]);
    this.excludeBookingId = input("");
    this.slotsChange = output();
    this.today = /* @__PURE__ */ new Date();
    this.viewYear = signal(this.today.getFullYear());
    this.viewMonth = signal(this.today.getMonth());
    this.selectedDate = signal(null);
    this.rangeStart = signal(null);
    this.rangeEnd = signal(null);
    this.slots = signal([]);
    this.busy = signal([]);
    this.loading = signal(false);
    this.loadedStaff = "";
    this.seeded = false;
    this.gcal = signal([]);
    this.gcalState = signal("idle");
    this.gcalCache = /* @__PURE__ */ new Map();
    this.gcalTimed = computed(() => {
      const known = new Set(this.busy().map((b) => b.googleEventId).filter((x) => !!x));
      return this.gcal().filter((e) => !e.allDay && !known.has(e.id));
    });
    this.gcalAllDay = computed(() => this.gcal().filter((e) => e.allDay));
    this.allDayLabel = computed(() => this.gcalAllDay().map((e) => e.title).join(" \xB7 "));
    this.monthLabel = computed(() => new Date(this.viewYear(), this.viewMonth(), 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" }));
    this.canGoPrev = computed(() => true);
    this.cells = computed(() => {
      const y = this.viewYear(), m = this.viewMonth();
      const firstDow = (new Date(y, m, 1).getDay() + 6) % 7;
      const dim = new Date(y, m + 1, 0).getDate();
      const todayStr = toDateStr(this.today);
      const cells = [];
      for (let i = 0; i < firstDow; i++)
        cells.push({ date: null, day: 0, available: false, isPast: false });
      for (let d = 1; d <= dim; d++) {
        const date = toDateStr(new Date(y, m, d));
        cells.push({ date, day: d, available: true, isPast: date < todayStr });
      }
      return cells;
    });
    this.gridSlots = computed(() => {
      const date = this.selectedDate();
      if (!date)
        return [];
      const a = this.rangeStart(), b = this.rangeEnd();
      const mine = this.slots().filter((s) => s.date === date).map((s) => {
        const z = utcToZoned(new Date(s.iso), this.timezone());
        const from = z.hour * 2 + (z.minute >= SLOT_MIN ? 1 : 0);
        return { from, to: from + Math.round(s.hours / 0.5) - 1 };
      });
      const gcal = this.gcalTimed().map((e) => ({
        title: e.title,
        from: new Date(e.start).getTime(),
        to: new Date(e.end).getTime()
      }));
      return Array.from({ length: SLOTS }, (_, i) => {
        const start = this.slotStart(date, i);
        const slotEnd = start.getTime() + SLOT_MIN * 6e4;
        const occupying = this.bookingAt(start);
        const isMine = mine.some((r) => i >= r.from && i <= r.to);
        const inRange = a !== null && (b !== null ? i >= a && i <= b : i === a);
        const diary = gcal.find((g) => start.getTime() < g.to && slotEnd > g.from);
        return {
          start: start.toISOString(),
          hour: i,
          label: hm(i),
          // `available` deliberately ignores the diary: a Google entry is a warning, not a
          // wall, so the cell stays clickable and selection can span it.
          available: !occupying && !isMine,
          mine: isMine,
          softBusy: !!diary && !occupying && !isMine,
          busyReason: occupying ? reason(occupying) : diary ? diary.title : null,
          inRange,
          isStart: i === a,
          isEnd: i === (b ?? a)
        };
      });
    });
    effect(() => {
      const staff = this.staffId();
      const y = this.viewYear(), m = this.viewMonth();
      untracked(() => {
        if (this.loadedStaff && this.loadedStaff !== staff) {
          this.slots.set([]);
          this.rangeStart.set(null);
          this.rangeEnd.set(null);
          this.emit();
        }
        this.loadedStaff = staff;
        void this.loadBusy(staff, y, m);
      });
    });
    effect(() => {
      const init = this.initialSlots();
      if (this.seeded || !init.length)
        return;
      this.seeded = true;
      const tz = this.timezone();
      untracked(() => {
        const ps = init.map((s) => __spreadProps(__spreadValues({}, this.toPicked(s.start, s.end)), { label: s.label ?? "" })).sort((a, b) => a.iso.localeCompare(b.iso));
        this.slots.set(ps);
        const first = utcToZoned(new Date(ps[0].iso), tz);
        const [yy, mm] = first.dateStr.split("-").map(Number);
        this.viewYear.set(yy);
        this.viewMonth.set(mm - 1);
        this.selectedDate.set(first.dateStr);
        void this.loadCalendarDay(first.dateStr);
        this.emit();
      });
    });
  }
  loadBusy(staffId, year, month) {
    return __async(this, null, function* () {
      if (!staffId) {
        this.busy.set([]);
        return;
      }
      this.loading.set(true);
      const from = new Date(Date.UTC(year, month, 1) - 864e5).toISOString();
      const to = new Date(Date.UTC(year, month + 1, 1) + 864e5).toISOString();
      this.busy.set(yield this.data.getWorkerBusy(staffId, from, to));
      this.loading.set(false);
    });
  }
  // ── Helpers ─────────────────────────────────────────────────────────
  slotStart(date, i) {
    return zonedClockToUtc(date, Math.floor(i / 2), i % 2 * SLOT_MIN, this.timezone());
  }
  toPicked(startIso, endIso) {
    const z = utcToZoned(new Date(startIso), this.timezone());
    const hours = (new Date(endIso).getTime() - new Date(startIso).getTime()) / 36e5;
    return {
      iso: startIso,
      endIso,
      hours,
      date: z.dateStr,
      timeLabel: this.label(startIso, endIso),
      label: ""
    };
  }
  label(startIso, endIso) {
    const tz = this.timezone();
    const day = new Date(startIso).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: tz });
    const t = (iso) => new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz });
    return `${day} \xB7 ${t(startIso)}\u2013${t(endIso)}`;
  }
  bookingAt(start) {
    const end = new Date(start.getTime() + SLOT_MIN * 6e4);
    const exclude = this.excludeBookingId();
    return this.busy().find((x) => x.id !== exclude && new Date(x.start_at) < end && new Date(x.end_at) > start);
  }
  emit() {
    this.slotsChange.emit(this.slots());
  }
  // ── Events ──────────────────────────────────────────────────────────
  changeMonth(delta) {
    let m = this.viewMonth() + delta, y = this.viewYear();
    if (m < 0) {
      m = 11;
      y--;
    }
    if (m > 11) {
      m = 0;
      y++;
    }
    this.viewMonth.set(m);
    this.viewYear.set(y);
    this.selectedDate.set(null);
    this.rangeStart.set(null);
    this.rangeEnd.set(null);
  }
  onDay(cell) {
    if (!cell.date)
      return;
    this.selectedDate.set(cell.date);
    this.rangeStart.set(null);
    this.rangeEnd.set(null);
    void this.loadCalendarDay(cell.date);
  }
  /** Ask Google what is on this day. Cached per date so re-tapping a day is instant. */
  loadCalendarDay(date) {
    return __async(this, null, function* () {
      const cached = this.gcalCache.get(date);
      if (cached) {
        this.gcal.set(cached);
        this.gcalState.set("ok");
        return;
      }
      this.gcal.set([]);
      this.gcalState.set("loading");
      const from = this.slotStart(date, 0).toISOString();
      const to = new Date(this.slotStart(date, SLOTS - 1).getTime() + SLOT_MIN * 6e4).toISOString();
      const events = yield this.data.getCalendarBusy(from, to);
      if (this.selectedDate() !== date)
        return;
      if (!events) {
        this.gcalState.set("failed");
        return;
      }
      this.gcalCache.set(date, events);
      this.gcal.set(events);
      this.gcalState.set("ok");
    });
  }
  /** Tap a start slot, then an end slot → adds that block to the list (then pick more). */
  onSlot(slot) {
    return __async(this, null, function* () {
      if (!slot.available)
        return;
      const free = (i) => this.gridSlots().some((s) => s.hour === i && s.available);
      const r = nextRange({ start: this.rangeStart(), end: this.rangeEnd() }, slot.hour, free, SLOTS);
      if (r.start !== null && r.end !== null) {
        this.rangeStart.set(null);
        this.rangeEnd.set(null);
        yield this.addBlock(r.start, r.end);
      } else {
        this.rangeStart.set(r.start);
        this.rangeEnd.set(r.end);
      }
    });
  }
  addBlock(a, b) {
    return __async(this, null, function* () {
      const date = this.selectedDate();
      if (!date)
        return;
      const hours = (b - a + 1) * (SLOT_MIN / 60);
      const start = this.slotStart(date, a);
      const end = new Date(start.getTime() + hours * 36e5);
      if (!(yield this.confirmAgainstDiary(start.getTime(), end.getTime())))
        return;
      const ps = this.toPicked(start.toISOString(), end.toISOString());
      this.slots.update((list) => [...list, ps].sort((x, y) => x.iso.localeCompare(y.iso)));
      this.emit();
    });
  }
  /** Nothing in the way → true without a dialog. Otherwise name what clashes and let the
   *  owner decide: they often genuinely want both (a client meeting inside a shoot day). */
  confirmAgainstDiary(startMs, endMs) {
    return __async(this, null, function* () {
      const hits = this.gcalTimed().filter((e) => startMs < new Date(e.end).getTime() && endMs > new Date(e.start).getTime());
      if (!hits.length)
        return true;
      const tz = this.timezone();
      const t = (iso) => new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz });
      const list = hits.map((h) => `\u201C${h.title}\u201D ${t(h.start)}\u2013${t(h.end)}`).join("; ");
      return this.confirm.ask({
        title: "Already in your calendar",
        message: `Your Google Calendar already has ${list} at this time. Add this block anyway?`,
        confirmLabel: "Add anyway"
      });
    });
  }
  removeSlot(s) {
    this.slots.update((list) => list.filter((x) => x.iso !== s.iso));
    this.emit();
  }
  /** Immutable write, matching the editable-list recipe used elsewhere: never mutate an
   *  element of the bound array in place. */
  setLabel(s, value) {
    this.slots.update((list) => list.map((x) => x.iso === s.iso ? __spreadProps(__spreadValues({}, x), { label: value }) : x));
    this.emit();
  }
  clearInProgress() {
    this.rangeStart.set(null);
    this.rangeEnd.set(null);
  }
  static {
    this.\u0275fac = function AvailabilityPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AvailabilityPickerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvailabilityPickerComponent, selectors: [["app-availability-picker"]], inputs: { staffId: [1, "staffId"], timezone: [1, "timezone"], initialSlots: [1, "initialSlots"], excludeBookingId: [1, "excludeBookingId"] }, outputs: { slotsChange: "slotsChange" }, decls: 3, vars: 12, consts: [[1, "blocks"], ["dayLabel", "Choose a day", "timeHint", "tap start, then end \xB7 adds a block \xB7 pick other days too", "emptyText", "No times on this day.", 3, "prevMonth", "nextMonth", "daySelected", "slotSelected", "clearSelection", "timeLabel", "showBusyReason", "monthLabel", "canGoPrev", "cells", "selectedDate", "loading", "slots", "allowPast", "hasSelection"], [1, "blocks__head"], [1, "blocks__count"], [1, "block"], ["id", "slotNamePresets"], ["value", "Pre-shoot planning"], ["value", "Filming"], ["value", "Tentative filming"], ["value", "Editing"], ["value", "Delivery"], [1, "block__label"], ["type", "text", "list", "slotNamePresets", "placeholder", "Name this block (optional)", 1, "block__name", 3, "ngModelChange", "ngModel", "name"], ["type", "button", "aria-label", "Remove block", 1, "block__x", 3, "click"], [1, "gcal"], [1, "gcal", "gcal--warn"], [1, "gcal", "gcal--allday"]], template: function AvailabilityPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AvailabilityPickerComponent_Conditional_0_Template, 13, 1, "div", 0)(1, AvailabilityPickerComponent_Conditional_1_Template, 3, 1);
        \u0275\u0275elementStart(2, "app-availability-calendar", 1);
        \u0275\u0275listener("prevMonth", function AvailabilityPickerComponent_Template_app_availability_calendar_prevMonth_2_listener() {
          return ctx.changeMonth(-1);
        })("nextMonth", function AvailabilityPickerComponent_Template_app_availability_calendar_nextMonth_2_listener() {
          return ctx.changeMonth(1);
        })("daySelected", function AvailabilityPickerComponent_Template_app_availability_calendar_daySelected_2_listener($event) {
          return ctx.onDay($event);
        })("slotSelected", function AvailabilityPickerComponent_Template_app_availability_calendar_slotSelected_2_listener($event) {
          return ctx.onSlot($event);
        })("clearSelection", function AvailabilityPickerComponent_Template_app_availability_calendar_clearSelection_2_listener() {
          return ctx.clearInProgress();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.slots().length ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selectedDate() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("timeLabel", ctx.slots().length ? "Add another block" : "Choose a time")("showBusyReason", true)("monthLabel", ctx.monthLabel())("canGoPrev", ctx.canGoPrev())("cells", ctx.cells())("selectedDate", ctx.selectedDate())("loading", ctx.loading())("slots", ctx.gridSlots())("allowPast", true)("hasSelection", ctx.rangeStart() !== null);
      }
    }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, AvailabilityCalendarComponent], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.blocks[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.blocks__head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.blocks__count[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 6px;\n  background: #fff;\n}\n.block__label[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #111827;\n}\n.block__x[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  order: 2;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  margin: -6px -6px -6px 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 19px;\n  line-height: 1;\n  color: #9ca3af;\n}\n.block__x[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.block__name[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  order: 3;\n  min-width: 0;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 13px;\n  color: #111827;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 7px 9px;\n  background: #fff;\n}\n.block__name[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n@media (max-width: 560px) {\n  .block__name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.gcal[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  line-height: 1.45;\n  padding: 7px 10px;\n  border-radius: 7px;\n  margin-bottom: 10px;\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.gcal--allday[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #b45309;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.gcal--warn[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n/*# sourceMappingURL=availability-picker.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvailabilityPickerComponent, { className: "AvailabilityPickerComponent", filePath: "src/app/booking/platform/bookings/booking-form/availability-picker.component.ts", lineNumber: 147 });
})();
function reason(b) {
  return b.clientName ? `${b.clientName} \xB7 ${b.title}` : b.title;
}
function toDateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// src/app/booking/ui/info-hint/info-hint.component.ts
var _c0 = ["*"];
function InfoHintComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var InfoHintComponent = class _InfoHintComponent {
  constructor() {
    this.label = input("this field");
    this.open = signal(false);
  }
  toggle(e) {
    e.stopPropagation();
    this.open.update((v) => !v);
  }
  closeOnOutsideClick() {
    if (this.open())
      this.open.set(false);
  }
  closeOnEscape() {
    if (this.open())
      this.open.set(false);
  }
  static {
    this.\u0275fac = function InfoHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InfoHintComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoHintComponent, selectors: [["app-info-hint"]], hostBindings: function InfoHintComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function InfoHintComponent_click_HostBindingHandler() {
          return ctx.closeOnOutsideClick();
        }, false, \u0275\u0275resolveDocument)("keydown.escape", function InfoHintComponent_keydown_escape_HostBindingHandler() {
          return ctx.closeOnEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { label: [1, "label"] }, ngContentSelectors: _c0, decls: 5, vars: 5, consts: [["type", "button", 1, "ih__btn", 3, "click"], ["viewBox", "0 0 16 16", "width", "12", "height", "12", "aria-hidden", "true"], ["cx", "8", "cy", "4.2", "r", "1.2", "fill", "currentColor"], ["d", "M8 7.2v4.6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["role", "tooltip", 1, "ih__pop"]], template: function InfoHintComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function InfoHintComponent_Template_button_click_0_listener($event) {
          return ctx.toggle($event);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1);
        \u0275\u0275element(2, "circle", 2)(3, "path", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, InfoHintComponent_Conditional_4_Template, 2, 0, "span", 4);
      }
      if (rf & 2) {
        \u0275\u0275classProp("ih__btn--on", ctx.open());
        \u0275\u0275attribute("aria-expanded", ctx.open())("aria-label", (ctx.open() ? "Hide help for " : "Help for ") + ctx.label());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.open() ? 4 : -1);
      }
    }, styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.ih__btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  margin: -5px;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  -webkit-tap-highlight-color: transparent;\n}\n.ih__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  padding: 2px;\n  border: 1.3px solid currentColor;\n  border-radius: 50%;\n}\n.ih__btn[_ngcontent-%COMP%]:hover, \n.ih__btn--on[_ngcontent-%COMP%] {\n  color: #F4A922;\n}\n.ih__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #F4A922;\n  outline-offset: 2px;\n  border-radius: 50%;\n}\n.ih__pop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: -6px;\n  z-index: 40;\n  width: max-content;\n  max-width: min(280px, 100vw - 40px);\n  background: #1e293b;\n  color: #f1f5f9;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-transform: none;\n  letter-spacing: normal;\n  text-align: left;\n  padding: 9px 11px;\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.22);\n}\n.ih__pop[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 11px;\n  border: 5px solid transparent;\n  border-bottom-color: #1e293b;\n}\n.ih__pop[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n}\n/*# sourceMappingURL=info-hint.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoHintComponent, { className: "InfoHintComponent", filePath: "src/app/booking/ui/info-hint/info-hint.component.ts", lineNumber: 64 });
})();

// src/app/booking/platform/bookings/booking-form/booking-form.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.iso;
function BookingFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "\u2026or send them the invoice:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18)(3, "input", 19);
    \u0275\u0275listener("focus", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template_input_focus_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.copyInvoiceLink());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.invoiceLink);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.copied() === "invoice" ? "\u2713 Copied" : "Copy", " ");
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "input", 19);
    \u0275\u0275listener("focus", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template_input_focus_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 20);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.copyLink());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template, 6, 2);
  }
  if (rf & 2) {
    const done_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", done_r5.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.copied() === "pay" ? "\u2713 Copied" : "Copy", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.invoiceLink ? 4 : -1);
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Booking saved, but the payment link couldn\u2019t be generated. You can copy it from the bookings list.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6, "The slot is reserved. Send this payment link to your client:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template, 5, 3)(8, BookingFormComponent_Conditional_11_Conditional_0_Conditional_8_Template, 2, 0, "p", 12);
    \u0275\u0275elementStart(9, "div", 13)(10, "a", 14);
    \u0275\u0275text(11, "\u2B07 Download invoice (PDF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 14);
    \u0275\u0275text(13, "\u{1F5A8} Print invoice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "button", 16);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reset());
    });
    \u0275\u0275text(16, "Create another");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 17);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToList());
    });
    \u0275\u0275text(18, "Done");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const done_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Booking ", done_r5.ref, " ", ctx_r2.isEditing ? "updated" : "created", "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(done_r5.link ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "/book/invoice/" + done_r5.id + "?auto=download", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/book/invoice/" + done_r5.id + "?auto=print", \u0275\u0275sanitizeUrl);
  }
}
function BookingFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingFormComponent_Conditional_11_Conditional_0_Template, 19, 5, "div", 8);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.created()) ? 0 : -1, tmp_1_0);
  }
}
function BookingFormComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, " Copied from ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". Everything carried over except the times \u2014 pick new time blocks below. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx);
  }
}
function BookingFormComponent_Conditional_12_Conditional_27_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275property("value", c_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r8.name, "", c_r8.company ? " \xB7 " + c_r8.company : "", "");
  }
}
function BookingFormComponent_Conditional_12_Conditional_27_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "No VAT or billing address on this client \u2014 add them in Clients for a VAT-ready invoice.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_27_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.clientId, $event) || (ctx_r2.clientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 36);
    \u0275\u0275text(3, "Select a client\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, BookingFormComponent_Conditional_12_Conditional_27_For_5_Template, 2, 3, "option", 37, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 73);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Conditional_27_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openClientEditor());
    });
    \u0275\u0275text(7, "+ New");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, BookingFormComponent_Conditional_12_Conditional_27_Conditional_8_Template, 2, 0, "span", 43);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.clientId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.data.clients());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.selectedClient && !ctx_r2.selectedClient.vat_number && !ctx_r2.selectedClient.billing_address ? 8 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_28_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.contactName, $event) || (ctx_r2.contactName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.contactName);
  }
}
function BookingFormComponent_Conditional_12_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r10 = ctx.$implicit;
    \u0275\u0275property("value", w_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r10.name);
  }
}
function BookingFormComponent_Conditional_12_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "No bookable workers yet \u2014 add one in Staff.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "Pick a worker first to see their calendar.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_59_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r11.label);
  }
}
function BookingFormComponent_Conditional_12_Conditional_59_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 75)(1, "span", 76);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BookingFormComponent_Conditional_12_Conditional_59_For_2_Conditional_5_Template, 2, 1, "span", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r11.timeLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r11.label ? 5 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 44);
    \u0275\u0275repeaterCreate(1, BookingFormComponent_Conditional_12_Conditional_59_For_2_Template, 6, 2, "li", 75, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedSlots);
  }
}
function BookingFormComponent_Conditional_12_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Tap a start and an end time on the worker's calendar.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_94_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "label", 85);
    \u0275\u0275text(3, "Deposit %");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_94_Conditional_12_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.depositPercent, $event) || (ctx_r2.depositPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.depositPercent);
  }
}
function BookingFormComponent_Conditional_12_Conditional_94_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1, " Client pays ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(4, 2, ctx_r2.priceTotal * ctx_r2.depositPercent / 100, "EUR", "symbol", "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" now, ", \u0275\u0275pipeBind4(6, 7, ctx_r2.priceTotal * (100 - ctx_r2.depositPercent) / 100, "EUR", "symbol", "1.0-2"), " later. ");
  }
}
function BookingFormComponent_Conditional_12_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 27)(2, "div", 28)(3, "label");
    \u0275\u0275text(4, "Deposit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-info-hint", 80);
    \u0275\u0275text(6, " Prefilled from your organisation default. Changing it here affects this booking only. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 81);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_94_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.depositMode, $event) || (ctx_r2.depositMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 82);
    \u0275\u0275text(9, "Allow a deposit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 83);
    \u0275\u0275text(11, "Require full payment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, BookingFormComponent_Conditional_12_Conditional_94_Conditional_12_Template, 5, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, BookingFormComponent_Conditional_12_Conditional_94_Conditional_13_Template, 7, 12, "p", 84);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.depositMode);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.depositMode === "deposit" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.depositMode === "deposit" && ctx_r2.priceTotal > 0 ? 13 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "label", 54)(2, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_98_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.confirmed, $event) || (ctx_r2.confirmed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "This booking is already confirmed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "app-info-hint", 88);
    \u0275\u0275text(6, " Leave it off to send this as a ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "request");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ": the slot is held, the client sees their invoice and can pay or ask to pay later, and it lands in your ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "To confirm");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " list. Turn it on if it is already agreed \u2014 it goes into Google Calendar now and the client just gets the invoice. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.confirmed);
  }
}
function BookingFormComponent_Conditional_12_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg());
  }
}
function BookingFormComponent_Conditional_12_Conditional_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-availability-picker", 89);
    \u0275\u0275listener("slotsChange", function BookingFormComponent_Conditional_12_Conditional_130_Template_app_availability_picker_slotsChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSlotsChanged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("staffId", ctx_r2.staffId)("timezone", ctx_r2.orgTimezone())("initialSlots", ctx_r2.prefillSlots)("excludeBookingId", (tmp_5_0 = ctx_r2.editingId()) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "");
  }
}
function BookingFormComponent_Conditional_12_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 90);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Pick a worker to see their calendar and choose a free time.");
    \u0275\u0275elementEnd()();
  }
}
function BookingFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "form", 23);
    \u0275\u0275listener("ngSubmit", function BookingFormComponent_Conditional_12_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275template(2, BookingFormComponent_Conditional_12_Conditional_2_Template, 5, 1, "p", 24);
    \u0275\u0275elementStart(3, "section", 25)(4, "h2", 26);
    \u0275\u0275text(5, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27)(7, "div", 28)(8, "label", 29);
    \u0275\u0275text(9, "Title");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.title, $event) || (ctx_r2.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 27)(12, "div", 28)(13, "label");
    \u0275\u0275text(14, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-info-hint", 31)(16, "strong");
    \u0275\u0275text(17, "Existing client");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " is a saved record with company, VAT and billing address, so the invoice is VAT-ready and you can reuse it. ");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20, "Just a name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " is a one-off, never saved, and bills to that name only. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 32)(23, "button", 33);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clientMode = "existing");
    });
    \u0275\u0275text(24, "Existing client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 33);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clientMode = "quick");
    });
    \u0275\u0275text(26, "Just a name");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, BookingFormComponent_Conditional_12_Conditional_27_Template, 9, 2)(28, BookingFormComponent_Conditional_12_Conditional_28_Template, 1, 1, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 27)(30, "div", 28)(31, "label");
    \u0275\u0275text(32, "Worker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.staffId, $event) || (ctx_r2.staffId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(34, "option", 36);
    \u0275\u0275text(35, "Select a worker\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(36, BookingFormComponent_Conditional_12_For_37_Template, 2, 2, "option", 37, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, BookingFormComponent_Conditional_12_Conditional_38_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 27)(40, "div", 28)(41, "label", 39);
    \u0275\u0275text(42, "Location ");
    \u0275\u0275elementStart(43, "span", 40);
    \u0275\u0275text(44, "optional");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.location, $event) || (ctx_r2.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "section", 25)(47, "h2", 26);
    \u0275\u0275text(48, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 27)(50, "div", 28)(51, "label");
    \u0275\u0275text(52, "Time blocks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "app-info-hint", 42);
    \u0275\u0275text(54, " A job can span several blocks, even across different days \u2014 a planning call on one day and the shoot on another. Name each one and the calendar shows ");
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56, "\u201CPre-shoot planning\u201D");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " rather than two identical entries. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, BookingFormComponent_Conditional_12_Conditional_58_Template, 2, 0, "span", 43)(59, BookingFormComponent_Conditional_12_Conditional_59_Template, 3, 0, "ul", 44)(60, BookingFormComponent_Conditional_12_Conditional_60_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "section", 25)(62, "h2", 26);
    \u0275\u0275text(63, "Charges & payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 27)(65, "div", 28)(66, "label");
    \u0275\u0275text(67, "Charges ");
    \u0275\u0275elementStart(68, "span", 45);
    \u0275\u0275text(69, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "app-info-hint", 46);
    \u0275\u0275text(71, " Pick one of your services (and how many hours) to pre-fill a line, or add a custom one. The total here is what the client pays, and it becomes the invoice. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "app-line-items-editor", 47);
    \u0275\u0275listener("itemsChange", function BookingFormComponent_Conditional_12_Template_app_line_items_editor_itemsChange_72_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onItemsChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 27)(74, "div", 28)(75, "label");
    \u0275\u0275text(76, "Payment options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "app-info-hint", 48)(78, "strong");
    \u0275\u0275text(79, "Card or pay later");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, " \u2014 the client pays by card now, or asks to pay later and you approve that request. ");
    \u0275\u0275elementStart(81, "strong");
    \u0275\u0275text(82, "Card only");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, " \u2014 they must pay to confirm. ");
    \u0275\u0275elementStart(84, "strong");
    \u0275\u0275text(85, "Pay later only");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, " \u2014 no online payment; they confirm and agree to pay by cash, Revolut or bank, and it books straight away. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_select_ngModelChange_87_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.paymentMode, $event) || (ctx_r2.paymentMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(88, "option", 50);
    \u0275\u0275text(89, "Card or pay later (cash / Revolut / bank)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "option", 51);
    \u0275\u0275text(91, "Card only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "option", 52);
    \u0275\u0275text(93, "Pay later only \u2014 client just confirms");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(94, BookingFormComponent_Conditional_12_Conditional_94_Template, 14, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "section", 25)(96, "h2", 26);
    \u0275\u0275text(97, "Options");
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, BookingFormComponent_Conditional_12_Conditional_98_Template, 13, 1, "div", 53);
    \u0275\u0275elementStart(99, "div", 53)(100, "label", 54)(101, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.needsProduction, $event) || (ctx_r2.needsProduction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span");
    \u0275\u0275text(103, "Needs post-production");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "app-info-hint", 56);
    \u0275\u0275text(105, " Adds this to the Work board (editing through to delivery). Leave it off for meetings and no-edit jobs. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 53)(107, "label", 54)(108, "input", 57);
    \u0275\u0275listener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_108_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.calendarDetail = $event ? "minimal" : "full");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span");
    \u0275\u0275text(110, "Keep money off the calendar invite");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "app-info-hint", 58);
    \u0275\u0275text(112, " Turn this on if you will invite anyone else to the event \u2014 a second shooter, or the client. They would otherwise see the total, what has been paid, the progress stage and your private notes. The event still shows the brief, client and service. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 27)(114, "div", 28)(115, "label", 59);
    \u0275\u0275text(116, "Internal notes ");
    \u0275\u0275elementStart(117, "span", 40);
    \u0275\u0275text(118, "optional");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(119, "textarea", 60);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_textarea_ngModelChange_119_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.notes, $event) || (ctx_r2.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(120, BookingFormComponent_Conditional_12_Conditional_120_Template, 2, 1, "p", 61);
    \u0275\u0275elementStart(121, "div", 62)(122, "button", 63);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Template_button_click_122_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToList());
    });
    \u0275\u0275text(123, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "button", 64);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(126, "aside", 65)(127, "div", 66)(128, "h2", 67);
    \u0275\u0275text(129, "Worker availability");
    \u0275\u0275elementEnd();
    \u0275\u0275template(130, BookingFormComponent_Conditional_12_Conditional_130_Template, 1, 4, "app-availability-picker", 68)(131, BookingFormComponent_Conditional_12_Conditional_131_Template, 5, 0, "div", 69);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(132, "app-client-editor", 70);
    \u0275\u0275twoWayListener("openChange", function BookingFormComponent_Conditional_12_Template_app_client_editor_openChange_132_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.clientEditorOpen, $event) || (ctx_r2.clientEditorOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function BookingFormComponent_Conditional_12_Template_app_client_editor_saved_132_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClientCreated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.copiedFrom()) ? 2 : -1, tmp_1_0);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.title);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("seg__btn--on", ctx_r2.clientMode === "existing");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg__btn--on", ctx_r2.clientMode === "quick");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.clientMode === "existing" ? 27 : 28);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.staffId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.workers);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.workers.length === 0 ? 38 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.location);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(!ctx_r2.staffId ? 58 : ctx_r2.selectedSlots.length ? 59 : 60);
    \u0275\u0275advance(14);
    \u0275\u0275property("items", ctx_r2.lineItems)("currency", ctx_r2.currency())("services", ctx_r2.services());
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.paymentMode);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r2.paymentMode !== "later" ? 94 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.isEditing ? 98 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.needsProduction);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r2.calendarDetail === "minimal");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.notes);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.errorMsg() ? 120 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r2.canSubmit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving() ? ctx_r2.isEditing ? "Saving\u2026" : "Creating\u2026" : ctx_r2.isEditing ? "Save changes" : "Create booking", " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.staffId ? 130 : 131);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("open", ctx_r2.clientEditorOpen);
    \u0275\u0275property("client", null);
  }
}
var BookingFormComponent = class _BookingFormComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.data = inject(BookingDataService);
    this.editingRef = "";
    this.services = signal([]);
    this.staff = signal([]);
    this.loading = signal(true);
    this.saving = signal(false);
    this.errorMsg = signal("");
    this.editingId = signal(null);
    this.created = signal(null);
    this.copiedFrom = signal("");
    this.clientMode = "existing";
    this.clientId = "";
    this.contactName = "";
    this.clientEditorOpen = signal(false);
    this.staffId = "";
    this.selectedSlots = [];
    this.prefillSlots = [];
    this.orgTimezone = signal("Europe/Malta");
    this.currency = signal("EUR");
    this.lineItems = [];
    this.title = "";
    this.location = "";
    this.notes = "";
    this.paymentMode = "both";
    this.depositMode = "deposit";
    this.depositPercent = 30;
    this.needsProduction = false;
    this.calendarDetail = "full";
    this.confirmed = false;
    this.orgDefaults = { depositPercent: 30, depositAllowed: true };
    this.copied = signal(null);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (org) {
        const [services, staff, settings] = yield Promise.all([
          this.admin.listServices(org),
          this.admin.listStaff(org),
          this.admin.getOrgSettings(org)
        ]);
        this.services.set(services.filter((s) => s.is_active));
        this.staff.set(staff.filter((s) => s.is_bookable));
        this.orgDefaults = {
          depositPercent: settings?.booking_params?.deposit_percent ?? 30,
          depositAllowed: settings?.booking_params?.deposit_allowed ?? true
        };
        if (settings?.timezone)
          this.orgTimezone.set(settings.timezone);
        if (settings?.currency)
          this.currency.set(settings.currency);
        this.depositPercent = this.orgDefaults.depositPercent;
        this.depositMode = this.orgDefaults.depositAllowed ? "deposit" : "full";
        const id = this.route.snapshot.paramMap.get("id");
        const cloneOf = this.route.snapshot.queryParamMap.get("from");
        if (id)
          yield this.loadForEdit(id);
        else if (cloneOf)
          yield this.loadForDuplicate(cloneOf);
      }
      this.loading.set(false);
    });
  }
  /** Everything that describes the WORK — not the booking's identity, and not its times.
   *  Shared by edit and duplicate so the two can never drift apart. */
  applyBookingFields(b) {
    if (b.client_id) {
      this.clientMode = "existing";
      this.clientId = b.client_id;
      this.contactName = "";
    } else if (b.contact_name) {
      this.clientMode = "quick";
      this.contactName = b.contact_name;
      this.clientId = "";
    }
    this.staffId = b.staff_id;
    this.title = b.title;
    this.location = b.location ?? "";
    this.notes = b.notes ?? "";
    this.paymentMode = b.allow_card && b.allow_inperson ? "both" : b.allow_card ? "card" : "later";
    this.depositMode = b.deposit_allowed ?? this.orgDefaults.depositAllowed ? "deposit" : "full";
    this.depositPercent = b.deposit_percent ?? this.orgDefaults.depositPercent;
    this.needsProduction = b.needs_production ?? false;
    this.calendarDetail = b.calendar_detail ?? "full";
  }
  /** The saved invoice breakdown, or a single line derived from the booking itself. */
  loadItems(id, b) {
    return __async(this, null, function* () {
      const items = yield this.data.getInvoiceItems(id);
      return items.length ? items : [{ description: b.description ?? b.title, amount: b.price_total }];
    });
  }
  loadForEdit(id) {
    return __async(this, null, function* () {
      const b = yield this.data.getBooking(id);
      if (!b) {
        this.errorMsg.set("Booking not found.");
        return;
      }
      this.editingId.set(id);
      this.editingRef = b.booking_ref;
      this.applyBookingFields(b);
      this.prefillSlots = yield this.data.getBookingSlots(id);
      this.lineItems = yield this.loadItems(id, b);
    });
  }
  /**
   * Clone a job: same work, blank diary. Repeat bookings here are the same shoot for the
   * same client on a different day, so everything about WHAT the job is carries over and
   * nothing about WHEN it happens does.
   *
   * Deliberately NOT copied:
   *  - editingId / booking_ref — this is a new booking and earns its own number
   *  - time blocks — the whole point; the owner picks fresh ones
   *  - confirmed — stays off, so cloning can never silently push a calendar event
   *  - status, payments, invoice — a copy has been neither agreed nor paid for
   */
  loadForDuplicate(id) {
    return __async(this, null, function* () {
      const b = yield this.data.getBooking(id);
      if (!b) {
        this.errorMsg.set("Could not find the booking to copy from.");
        return;
      }
      this.applyBookingFields(b);
      this.lineItems = yield this.loadItems(id, b);
      this.copiedFrom.set(b.booking_ref);
    });
  }
  // ── Derived ─────────────────────────────────────────────────────────
  get isEditing() {
    return this.editingId() !== null;
  }
  /** Any bookable worker — availability is worker-based. */
  get workers() {
    return this.staff();
  }
  /** Booking total = sum of the line items (source of truth). */
  get priceTotal() {
    return this.lineItems.reduce((s, i) => s + (Number(i.amount) || 0), 0);
  }
  get selectedClient() {
    return this.data.clients().find((c) => c.id === this.clientId);
  }
  /** A customer is set when an existing client is picked, or a quick name is typed. */
  get hasCustomer() {
    return this.clientMode === "existing" ? !!this.clientId : this.contactName.trim().length > 0;
  }
  /** The DB slots to persist (one row per chosen block). */
  get slotsValue() {
    return this.selectedSlots.map((s) => ({
      start: s.iso,
      end: s.endIso,
      // `label` is the block's NAME; `timeLabel` is the derived "Mon 5 Oct · 08:00–09:00"
      // display string and must never be persisted.
      label: s.label?.trim() || null
    }));
  }
  // ── Change handlers ─────────────────────────────────────────────────
  // Charges (pricing) are decoupled from the calendar — editing items never touches the time blocks.
  onItemsChange(items) {
    this.lineItems = items;
  }
  // The picker clears its blocks (and emits []) when the worker changes, so no manual reset needed.
  onSlotsChanged(slots) {
    this.selectedSlots = slots;
  }
  // ── Client (reuses the full client editor — never a stub) ────────────
  openClientEditor() {
    this.clientEditorOpen.set(true);
  }
  onClientCreated(c) {
    this.clientMode = "existing";
    this.clientId = c.id;
  }
  // ── Submit ──────────────────────────────────────────────────────────
  get canSubmit() {
    const itemsOk = this.lineItems.length > 0 && this.lineItems.every((i) => i.description.trim().length > 0) && this.priceTotal > 0;
    return !this.saving() && this.hasCustomer && !!this.staffId && this.selectedSlots.length > 0 && itemsOk && this.title.trim().length > 0;
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.canSubmit)
        return;
      const org = this.auth.orgId();
      if (!org) {
        this.errorMsg.set("No organization context.");
        return;
      }
      this.saving.set(true);
      this.errorMsg.set("");
      try {
        const items = this.lineItems.map((i) => __spreadValues(__spreadValues({
          description: i.description.trim(),
          amount: Number(i.amount) || 0
        }, i.serviceId ? { serviceId: i.serviceId } : {}), i.hours ? { hours: i.hours } : {}));
        const shared = {
          staffId: this.staffId,
          serviceId: null,
          clientId: this.clientMode === "existing" ? this.clientId : null,
          contactName: this.clientMode === "quick" ? this.contactName.trim() : null,
          title: this.title.trim(),
          description: items.map((i) => i.description).join("\n"),
          // client-facing summary on the pay page
          slots: this.slotsValue,
          priceTotal: this.priceTotal,
          allowCard: this.paymentMode !== "later",
          allowInperson: this.paymentMode !== "card",
          depositAllowed: this.depositMode === "deposit",
          depositPercent: this.depositPercent,
          needsProduction: this.needsProduction,
          calendarDetail: this.calendarDetail,
          location: this.location.trim() || null,
          notes: this.notes.trim() || null
        };
        if (this.isEditing) {
          const res2 = yield this.data.updateBooking(this.editingId(), shared);
          if (res2.error) {
            this.errorMsg.set(this.errorText(res2.error));
            return;
          }
          yield this.data.saveInvoice(org, this.editingId(), { lineItems: items, notes: null, issueDate: null });
          this.toast.success(`${this.editingRef || "Booking"} updated`);
          if (this.paymentMode !== "later") {
            const link2 = yield this.data.generateLink(this.editingId());
            this.created.set({ id: this.editingId(), ref: this.editingRef, link: link2 });
          } else {
            this.goToList();
          }
          return;
        }
        const res = yield this.data.createBooking(__spreadProps(__spreadValues({ orgId: org }, shared), { confirmed: this.confirmed }));
        if (res.error || !res.id) {
          this.errorMsg.set(this.errorText(res.error));
          return;
        }
        yield this.data.saveInvoice(org, res.id, { lineItems: items, notes: null, issueDate: null });
        if (this.confirmed)
          yield this.data.confirmToCalendar(res.id);
        if (this.needsProduction)
          yield this.admin.addWorkItem(org, res.id, "");
        const link = yield this.data.generateLink(res.id);
        this.created.set({ id: res.id, ref: res.ref ?? "", link });
        this.toast.success(`Booking ${res.ref ?? ""} created`);
      } finally {
        this.saving.set(false);
      }
    });
  }
  errorText(error) {
    if (error === "slot_taken")
      return "That worker is already booked for that time. Pick another slot or worker.";
    return error ?? "Something went wrong. Please try again.";
  }
  /** Shareable invoice link (anon, token-based) — derived from the payment link. */
  get invoiceLink() {
    const link = this.created()?.link;
    return link ? link.replace("/book/", "/book/invoice?token=") : null;
  }
  copyTo(text, which) {
    return __async(this, null, function* () {
      if (!text)
        return;
      try {
        yield navigator.clipboard.writeText(text);
        this.copied.set(which);
        setTimeout(() => {
          if (this.copied() === which)
            this.copied.set(null);
        }, 1600);
      } catch {
      }
    });
  }
  copyLink() {
    void this.copyTo(this.created()?.link, "pay");
  }
  copyInvoiceLink() {
    void this.copyTo(this.invoiceLink, "invoice");
  }
  reset() {
    this.editingId.set(null);
    this.clientMode = "existing";
    this.clientId = "";
    this.contactName = "";
    this.staffId = "";
    this.selectedSlots = [];
    this.prefillSlots = [];
    this.lineItems = [];
    this.title = "";
    this.location = "";
    this.notes = "";
    this.paymentMode = "both";
    this.depositMode = this.orgDefaults.depositAllowed ? "deposit" : "full";
    this.depositPercent = this.orgDefaults.depositPercent;
    this.needsProduction = false;
    this.calendarDetail = "full";
    this.confirmed = false;
    this.created.set(null);
    this.errorMsg.set("");
    this.copiedFrom.set("");
  }
  goToList() {
    this.router.navigate(["/bookings/list"]);
  }
  static {
    this.\u0275fac = function BookingFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingFormComponent, selectors: [["app-booking-form"]], decls: 13, vars: 3, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], ["routerLink", "/bookings/list", 1, "btn", "btn--ghost"], [1, "loading"], [1, "spinner"], [1, "card", "done"], [1, "done__check"], [1, "done__title"], [1, "done__sub"], [1, "muted"], [1, "done__invoice"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn--ghost", "btn--sm", 3, "href"], [1, "done__actions"], [1, "btn", "btn--ghost", 3, "click"], [1, "btn", "btn--primary", 3, "click"], [1, "linkbox"], ["readonly", "", 1, "linkbox__input", 3, "focus", "value"], ["type", "button", 1, "btn", "btn--primary", "linkbox__btn", 3, "click"], [1, "done__sub", "done__sub--gap"], [1, "form-layout"], [1, "card", "form", 3, "ngSubmit"], [1, "cloned"], [1, "sec"], [1, "sec__title"], [1, "field"], [1, "field__top"], ["for", "bf-title"], ["id", "bf-title", "name", "title", "placeholder", "e.g. Interview filming \u2014 Clinica Joia", "required", "", 3, "ngModelChange", "ngModel"], ["label", "Customer"], [1, "seg"], ["type", "button", 1, "seg__btn", 3, "click"], ["name", "contactName", "placeholder", "e.g. John from Sliema", 3, "ngModel"], ["name", "staffId", "required", "", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value"], [1, "note", "note--warn"], ["for", "bf-loc"], [1, "opt"], ["id", "bf-loc", "name", "location", "placeholder", "Address or venue", 3, "ngModelChange", "ngModel"], ["label", "Time blocks"], [1, "note"], [1, "picked"], [1, "req"], ["label", "Charges"], [3, "itemsChange", "items", "currency", "services"], ["label", "Payment options"], ["name", "paymentMode", 3, "ngModelChange", "ngModel"], ["value", "both"], ["value", "card"], ["value", "later"], [1, "opt-row"], [1, "check"], ["type", "checkbox", "name", "needsProduction", 3, "ngModelChange", "ngModel"], ["label", "Needs post-production"], ["type", "checkbox", "name", "calendarMinimal", 3, "ngModelChange", "ngModel"], ["label", "Keep money off the calendar invite"], ["for", "bf-notes"], ["id", "bf-notes", "name", "notes", "rows", "2", "placeholder", "Anything to remember about this job \u2014 never shown to the client", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "form__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], [1, "form-aside"], [1, "card", "aside-card"], [1, "aside-card__title"], [3, "staffId", "timezone", "initialSlots", "excludeBookingId"], [1, "aside-empty"], [3, "openChange", "saved", "open", "client"], [1, "client-row"], ["name", "clientId", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["name", "contactName", "placeholder", "e.g. John from Sliema", 3, "ngModelChange", "ngModel"], [1, "picked__row"], ["aria-hidden", "true", 1, "picked__tick"], [1, "picked__time"], [1, "picked__name"], [1, "row2"], ["label", "Deposit"], ["name", "depositMode", 3, "ngModelChange", "ngModel"], ["value", "deposit"], ["value", "full"], [1, "calc"], ["for", "bf-dep"], ["id", "bf-dep", "type", "number", "name", "depositPercent", "min", "1", "max", "100", "step", "1", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "confirmed", 3, "ngModelChange", "ngModel"], ["label", "Already confirmed"], [3, "slotsChange", "staffId", "timezone", "initialSlots", "excludeBookingId"], [1, "aside-empty__icon"]], template: function BookingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
        \u0275\u0275text(9, "Back to list");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, BookingFormComponent_Conditional_10_Template, 2, 0, "div", 6)(11, BookingFormComponent_Conditional_11_Template, 1, 1)(12, BookingFormComponent_Conditional_12_Template, 133, 26);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEditing ? "Edit booking" : "New booking");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Update the details of this booking." : "Create a booking and send the client a link to confirm or pay.", " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 10 : ctx.created() ? 11 : 12);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm, RouterLink, CurrencyPipe, AvailabilityPickerComponent, LineItemsEditorComponent, ClientEditorComponent, InfoHintComponent], styles: [`

.page[_ngcontent-%COMP%] {
  padding: 32px 40px;
  max-width: 1200px;
}
@media (max-width: 760px) {
  .page[_ngcontent-%COMP%] {
    padding: 20px 16px;
  }
}
.page__head[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.head-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex-shrink: 0;
}
@media (max-width: 640px) {
  .head-actions[_ngcontent-%COMP%] {
    width: 100%;
  }
  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    flex: 1 1 auto;
    justify-content: center;
  }
}
.page__title[_ngcontent-%COMP%] {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 4px;
  letter-spacing: -0.02em;
}
.page__sub[_ngcontent-%COMP%] {
  font-size: 13.5px;
  color: #475569;
  margin: 0;
}
.muted[_ngcontent-%COMP%] {
  color: #475569;
  font-size: 14px;
}
.btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  border: 1.5px solid transparent;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Inter",
    "Segoe UI",
    sans-serif;
  transition: 0.15s ease;
  text-decoration: none;
}
.btn--primary[_ngcontent-%COMP%] {
  background: #F4A922;
  color: #000;
}
.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  filter: brightness(0.94);
}
.btn--ghost[_ngcontent-%COMP%] {
  background: #ffffff;
  border-color: #e2e8f0;
  color: #475569;
}
.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {
  border-color: #94a3b8;
}
.btn--sm[_ngcontent-%COMP%] {
  padding: 6px 12px;
  font-size: 12px;
}
.btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: default;
}
.link-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  font-size: 12.5px;
  font-weight: 600;
  color: #F4A922;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 4px 8px;
  border-radius: 6px;
  font-family: inherit;
}
.link-btn[_ngcontent-%COMP%]:hover {
  background: rgba(244, 169, 34, 0.12);
}
.link-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
}
.link-btn--danger[_ngcontent-%COMP%] {
  color: #ef4444;
}
.link-btn--danger[_ngcontent-%COMP%]:hover {
  background: rgba(239, 68, 68, 0.1);
}
.card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}
.field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #475569;
}
.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  padding: 10px 12px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  color: #0f172a;
  background: #ffffff;
  width: 100%;
  box-sizing: border-box;
}
.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, 
.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #F4A922;
}
.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  resize: vertical;
}
@media (max-width: 560px) {
  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
   .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
    font-size: 16px;
  }
}
.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  appearance: none;
  cursor: pointer;
  padding-right: 32px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%236b7280' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}
.check[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  color: #0f172a;
}
.list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 14px 16px;
}
.item--off[_ngcontent-%COMP%] {
  opacity: 0.6;
}
.item__main[_ngcontent-%COMP%] {
  flex: 1 1 200px;
  min-width: 0;
}
.item__name[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
}
.item__meta[_ngcontent-%COMP%] {
  font-size: 12.5px;
  color: #475569;
  margin-top: 2px;
  overflow-wrap: anywhere;
}
.item__actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  white-space: nowrap;
}
.tag[_ngcontent-%COMP%] {
  font-size: 10.5px;
  font-weight: 700;
  background: #eef2f6;
  color: #475569;
  padding: 2px 7px;
  border-radius: 10px;
  vertical-align: middle;
}
.page[_ngcontent-%COMP%] {
  max-width: 1100px;
}
.form-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 380px;
  gap: 20px;
  align-items: start;
}
@media (max-width: 900px) {
  .form-layout[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.form[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.sec[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {
  border-top: 1px solid #e2e8f0;
  padding-top: 20px;
}
.sec__title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
}
.field__top[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 20px;
}
.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #475569;
}
.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 500;
  color: #94a3b8;
  line-height: 1.45;
}
.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {
  color: #b45309;
}
.calc[_ngcontent-%COMP%] {
  margin: 0;
  padding: 9px 12px;
  font-size: 12.5px;
  color: #475569;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
.calc[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #0f172a;
  font-weight: 700;
}
.client-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  align-items: stretch;
}
.client-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.btn--sm[_ngcontent-%COMP%] {
  padding: 8px 14px;
  font-size: 12.5px;
  white-space: nowrap;
}
.seg[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 0;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}
.seg__btn[_ngcontent-%COMP%] {
  padding: 9px 14px;
  font-size: 12.5px;
  font-weight: 600;
  font-family: inherit;
  background: #ffffff;
  color: #475569;
  border: none;
  cursor: pointer;
  transition: 0.15s ease;
}
.seg__btn[_ngcontent-%COMP%]    + .seg__btn[_ngcontent-%COMP%] {
  border-left: 1px solid #e2e8f0;
}
.seg__btn[_ngcontent-%COMP%]:hover:not(.seg__btn--on) {
  background: #f8fafc;
}
.seg__btn--on[_ngcontent-%COMP%] {
  background: #F4A922;
  color: #000;
}
@media (max-width: 480px) {
  .seg[_ngcontent-%COMP%] {
    display: flex;
  }
  .seg__btn[_ngcontent-%COMP%] {
    flex: 1 1 0;
  }
}
.opt-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
}
.check[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  flex: 1 1 auto;
  min-width: 0;
}
.check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  cursor: pointer;
  accent-color: #F4A922;
}
.check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 13.5px;
  font-weight: 500;
  color: #0f172a;
}
.form__actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 4px;
}
@media (max-width: 560px) {
  .form__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    flex: 1 1 0;
    justify-content: center;
  }
}
.row2[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 560px) {
  .row2[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.opt[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-weight: 400;
  font-size: 11px;
}
.req[_ngcontent-%COMP%] {
  color: #dc2626;
  font-weight: 600;
}
.picked[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.picked__row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px 11px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
}
.picked__tick[_ngcontent-%COMP%] {
  color: #16a34a;
  font-weight: 700;
  font-size: 13px;
}
.picked__time[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 700;
  color: #14532d;
}
.picked__name[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 700;
  color: #166534;
  background: #dcfce7;
  padding: 2px 8px;
  border-radius: 10px;
}
.form-aside[_ngcontent-%COMP%] {
  position: sticky;
  top: 16px;
}
@media (max-width: 900px) {
  .form-aside[_ngcontent-%COMP%] {
    position: static;
  }
}
.aside-card[_ngcontent-%COMP%] {
  padding: 18px;
}
.aside-card__title[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 14px;
}
.aside-empty[_ngcontent-%COMP%] {
  text-align: center;
  padding: 32px 16px;
  color: #94a3b8;
}
.aside-empty__icon[_ngcontent-%COMP%] {
  font-size: 30px;
  margin-bottom: 10px;
}
.aside-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 13px;
  margin: 0;
  line-height: 1.5;
}
.cloned[_ngcontent-%COMP%] {
  margin: 0;
  padding: 10px 13px;
  font-size: 12.5px;
  line-height: 1.5;
  background: rgba(244, 169, 34, 0.1);
  color: #92400e;
  border: 1px solid rgba(244, 169, 34, 0.35);
  border-radius: 8px;
}
.cloned[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-weight: 800;
}
.error[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fecaca;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13px;
  margin: 0;
}
.done[_ngcontent-%COMP%] {
  text-align: center;
  padding: 32px 28px;
}
.done__check[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  margin: 0 auto 14px;
  background: #dcfce7;
  color: #16a34a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
}
.done__title[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 4px;
}
.done__sub[_ngcontent-%COMP%] {
  font-size: 13.5px;
  color: #475569;
  margin: 0 0 18px;
}
.done__invoice[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}
.done__actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.linkbox[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  max-width: 460px;
  margin: 0 auto 6px;
}
.linkbox__input[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  font-size: 13px;
  color: #0f172a;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  font-family:
    "SF Mono",
    "Fira Mono",
    monospace;
}
.linkbox__btn[_ngcontent-%COMP%] {
  cursor: pointer;
  min-width: 92px;
  justify-content: center;
}
.done__sub--gap[_ngcontent-%COMP%] {
  margin-top: 14px;
}
.loading[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  padding: 60px;
}
.spinner[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  border: 2.5px solid #e2e8f0;
  border-top-color: #F4A922;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
/*# sourceMappingURL=booking-form.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingFormComponent, { className: "BookingFormComponent", filePath: "src/app/booking/platform/bookings/booking-form/booking-form.component.ts", lineNumber: 23 });
})();
export {
  BookingFormComponent
};
//# sourceMappingURL=chunk-XUG4CG7H.js.map
