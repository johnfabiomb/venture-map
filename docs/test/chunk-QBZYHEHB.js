import {
  ConfirmService
} from "./chunk-FBEN7ZXU.js";
import {
  BookingDataService
} from "./chunk-ZIMQU4LA.js";
import {
  AvailabilityCalendarComponent,
  nextRange
} from "./chunk-ZOUD65KM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-PLONONHM.js";
import {
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VEX6DIAJ.js";
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
function AvailabilityPickerComponent_Conditional_0_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function AvailabilityPickerComponent_Conditional_0_For_6_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const s_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleKind(s_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("block__kind--work", s_r3.kind === "work");
    \u0275\u0275property("title", s_r3.kind === "work" ? "This block is post-production \u2014 click to make it a shoot" : "This block is a shoot \u2014 click to make it post-production");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r3.kind === "work" ? "Post-production" : "Shoot", " ");
  }
}
function AvailabilityPickerComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AvailabilityPickerComponent_Conditional_0_For_6_Conditional_3_Template, 2, 4, "button", 13);
    \u0275\u0275elementStart(4, "input", 14);
    \u0275\u0275listener("ngModelChange", function AvailabilityPickerComponent_Conditional_0_For_6_Template_input_ngModelChange_4_listener($event) {
      const s_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setLabel(s_r3, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function AvailabilityPickerComponent_Conditional_0_For_6_Template_button_click_5_listener() {
      const s_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeSlot(s_r3));
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("block--work", s_r3.kind === "work");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.timeLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.allowWorkBlocks() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", s_r3.label)("name", "slotName" + $index_r5);
  }
}
function AvailabilityPickerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275text(2, "Time blocks ");
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, AvailabilityPickerComponent_Conditional_0_For_6_Template, 7, 6, "div", 4, _forTrack0);
    \u0275\u0275elementStart(7, "datalist", 5);
    \u0275\u0275element(8, "option", 6)(9, "option", 7)(10, "option", 8)(11, "option", 9)(12, "option", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.slots().length);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.slots());
  }
}
function AvailabilityPickerComponent_Conditional_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Checking your Google Calendar\u2026");
    \u0275\u0275elementEnd();
  }
}
function AvailabilityPickerComponent_Conditional_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "Couldn't reach your Google Calendar \u2014 times below may already be taken.");
    \u0275\u0275elementEnd();
  }
}
function AvailabilityPickerComponent_Conditional_1_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("All day: ", ctx_r3.allDayLabel(), "");
  }
}
function AvailabilityPickerComponent_Conditional_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AvailabilityPickerComponent_Conditional_1_Case_2_Conditional_0_Template, 2, 1, "div", 19);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.gcalAllDay().length ? 0 : -1);
  }
}
function AvailabilityPickerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AvailabilityPickerComponent_Conditional_1_Case_0_Template, 2, 0, "div", 17)(1, AvailabilityPickerComponent_Conditional_1_Case_1_Template, 2, 0, "div", 18)(2, AvailabilityPickerComponent_Conditional_1_Case_2_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r3.gcalState()) === "loading" ? 0 : tmp_1_0 === "failed" ? 1 : 2);
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
    this.allowWorkBlocks = input(true);
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
        cells.push({ date, day: d, available: true, isPast: date < todayStr, isToday: date === todayStr });
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
        const ps = init.map((s) => __spreadProps(__spreadValues({}, this.toPicked(s.start, s.end)), {
          label: s.label ?? "",
          kind: s.kind ?? "shoot"
        })).sort((a, b) => a.iso.localeCompare(b.iso));
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
      kind: "shoot",
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
      const events = yield this.data.getCalendarBusy(this.staffId(), from, to);
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
  /** Shoot ⇄ post-production. The time stays reserved either way; what changes is which
   *  record owns the block, and therefore what the calendar entry says. */
  toggleKind(s) {
    this.slots.update((list) => list.map((x) => x.iso === s.iso ? __spreadProps(__spreadValues({}, x), { kind: x.kind === "work" ? "shoot" : "work" }) : x));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvailabilityPickerComponent, selectors: [["app-availability-picker"]], inputs: { staffId: [1, "staffId"], timezone: [1, "timezone"], initialSlots: [1, "initialSlots"], excludeBookingId: [1, "excludeBookingId"], allowWorkBlocks: [1, "allowWorkBlocks"] }, outputs: { slotsChange: "slotsChange" }, decls: 3, vars: 13, consts: [[1, "blocks"], ["dayLabel", "Choose a day", "timeHint", "tap start, then end \xB7 adds a block \xB7 pick other days too", "emptyText", "No times on this day.", 3, "prevMonth", "nextMonth", "daySelected", "slotSelected", "clearSelection", "timeLabel", "showBusyReason", "collapseQuietHours", "monthLabel", "canGoPrev", "cells", "selectedDate", "loading", "slots", "allowPast", "hasSelection"], [1, "blocks__head"], [1, "blocks__count"], [1, "block", 3, "block--work"], ["id", "slotNamePresets"], ["value", "Pre-shoot planning"], ["value", "Filming"], ["value", "Tentative filming"], ["value", "Editing"], ["value", "Delivery"], [1, "block"], [1, "block__label"], ["type", "button", 1, "block__kind", 3, "block__kind--work", "title"], ["type", "text", "list", "slotNamePresets", "placeholder", "Name this block (optional)", 1, "block__name", 3, "ngModelChange", "ngModel", "name"], ["type", "button", "aria-label", "Remove block", 1, "block__x", 3, "click"], ["type", "button", 1, "block__kind", 3, "click", "title"], [1, "gcal"], [1, "gcal", "gcal--warn"], [1, "gcal", "gcal--allday"]], template: function AvailabilityPickerComponent_Template(rf, ctx) {
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
        \u0275\u0275property("timeLabel", ctx.slots().length ? "Add another block" : "Choose a time")("showBusyReason", true)("collapseQuietHours", true)("monthLabel", ctx.monthLabel())("canGoPrev", ctx.canGoPrev())("cells", ctx.cells())("selectedDate", ctx.selectedDate())("loading", ctx.loading())("slots", ctx.gridSlots())("allowPast", true)("hasSelection", ctx.rangeStart() !== null);
      }
    }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, AvailabilityCalendarComponent], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.blocks[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.blocks__head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.blocks__count[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 6px;\n  background: #fff;\n}\n.block__label[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #111827;\n}\n.block__x[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  order: 2;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  margin: -6px -6px -6px 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 19px;\n  line-height: 1;\n  color: #9ca3af;\n}\n.block__x[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.block__name[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  order: 3;\n  min-width: 0;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 13px;\n  color: #111827;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 7px 9px;\n  background: #fff;\n}\n.block__name[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.block--work[_ngcontent-%COMP%] {\n  border-color: rgba(244, 169, 34, 0.5);\n  background: rgba(244, 169, 34, 0.05);\n}\n.block__kind[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  order: 1;\n  padding: 4px 9px;\n  border-radius: 999px;\n  border: 1px solid #e5e7eb;\n  background: #f8fafc;\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.block__kind[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n}\n.block__kind--work[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.18);\n  border-color: rgba(244, 169, 34, 0.5);\n  color: #92400e;\n}\n@media (max-width: 560px) {\n  .block__name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.gcal[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  line-height: 1.45;\n  padding: 7px 10px;\n  border-radius: 7px;\n  margin-bottom: 10px;\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.gcal--allday[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #b45309;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.gcal--warn[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n/*# sourceMappingURL=availability-picker.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvailabilityPickerComponent, { className: "AvailabilityPickerComponent", filePath: "src/app/booking/platform/bookings/booking-form/availability-picker.component.ts", lineNumber: 175 });
})();
function reason(b) {
  if (b.kind === "work")
    return `Reserved \xB7 ${b.title}`;
  return b.clientName ? `${b.clientName} \xB7 ${b.title}` : b.title;
}
function toDateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export {
  AvailabilityPickerComponent
};
//# sourceMappingURL=chunk-QBZYHEHB.js.map
