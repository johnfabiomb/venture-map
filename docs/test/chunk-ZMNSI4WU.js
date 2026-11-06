import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-PHEH44AJ.js";
import {
  PERIOD_LABELS,
  periodLabel,
  resolvePeriod
} from "./chunk-KH7QPK5J.js";
import {
  computed,
  input,
  model,
  signal,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VEX6DIAJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/core/interfaces/list-filter.interface.ts
var EMPTY_PERIOD = { preset: "all", from: null, to: null, field: "" };
var isFilterEmpty = (s, p) => p.preset === "all" && Object.values(s).every((v) => !v?.length);
function countsFor(rows, options, passesOtherGroups, matchesOption) {
  const base = rows.filter(passesOtherGroups);
  const out = {};
  for (const o of options)
    out[o] = base.reduce((n, r) => n + (matchesOption(r, o) ? 1 : 0), 0);
  return out;
}

// src/app/booking/ui/list-filters/list-filters.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.value;
function ListFiltersComponent_ng_template_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ListFiltersComponent_ng_template_10_For_3_Template_button_click_0_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.pickPreset(p_r3.value));
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-selected", ctx_r3.period().preset === p_r3.value);
    \u0275\u0275advance();
    \u0275\u0275classProp("lf__box--on", ctx_r3.period().preset === p_r3.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.label);
  }
}
function ListFiltersComponent_ng_template_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "input", 21);
    \u0275\u0275listener("change", function ListFiltersComponent_ng_template_10_Conditional_4_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setFrom($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3, "to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 23);
    \u0275\u0275listener("change", function ListFiltersComponent_ng_template_10_Conditional_4_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setTo($event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_3_0 = ctx_r3.period().from) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", (tmp_4_0 = ctx_r3.period().to) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "");
  }
}
function ListFiltersComponent_ng_template_10_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ListFiltersComponent_ng_template_10_Conditional_5_For_5_Template_button_click_0_listener() {
      const f_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setField(f_r7.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("lf__seg-btn--on", ctx_r3.period().field === f_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r7.label);
  }
}
function ListFiltersComponent_ng_template_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 24);
    \u0275\u0275text(2, "Applies to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275repeaterCreate(4, ListFiltersComponent_ng_template_10_Conditional_5_For_5_Template, 2, 3, "button", 26, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.dateFields());
  }
}
function ListFiltersComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275repeaterCreate(2, ListFiltersComponent_ng_template_10_For_3_Template, 5, 4, "button", 15, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ListFiltersComponent_ng_template_10_Conditional_4_Template, 5, 2, "div", 16)(5, ListFiltersComponent_ng_template_10_Conditional_5_Template, 6, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.presets);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isCustom() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.showFieldSwitch() ? 5 : -1);
  }
}
function ListFiltersComponent_For_12_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(": ", ctx, "");
  }
}
function ListFiltersComponent_For_12_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r3.alertTitle(g_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function ListFiltersComponent_For_12_Conditional_0_ng_template_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ListFiltersComponent_For_12_Conditional_0_ng_template_8_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const g_r9 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearGroup(g_r9.key));
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function ListFiltersComponent_For_12_Conditional_0_ng_template_8_For_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("lf__count--alert", o_r12.alert && o_r12.count > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r12.count);
  }
}
function ListFiltersComponent_For_12_Conditional_0_ng_template_8_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ListFiltersComponent_For_12_Conditional_0_ng_template_8_For_7_Template_button_click_0_listener() {
      const o_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const g_r9 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggle(g_r9.key, o_r12.value));
    });
    \u0275\u0275elementStart(1, "span", 36);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ListFiltersComponent_For_12_Conditional_0_ng_template_8_For_7_Conditional_5_Template, 2, 3, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r12 = ctx.$implicit;
    const g_r9 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-selected", ctx_r3.isOn(g_r9.key, o_r12.value));
    \u0275\u0275advance();
    \u0275\u0275classProp("lf__box--on", ctx_r3.isOn(g_r9.key, o_r12.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r12.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r12.count !== void 0 ? 5 : -1);
  }
}
function ListFiltersComponent_For_12_Conditional_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ListFiltersComponent_For_12_Conditional_0_ng_template_8_Conditional_4_Template, 2, 0, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275repeaterCreate(6, ListFiltersComponent_For_12_Conditional_0_ng_template_8_For_7_Template, 6, 5, "button", 15, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r9.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selected(g_r9.key).length ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r9.options);
  }
}
function ListFiltersComponent_For_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3, 1);
    \u0275\u0275listener("click", function ListFiltersComponent_For_12_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const g_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleMenu(g_r9.key));
    });
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275template(4, ListFiltersComponent_For_12_Conditional_0_Conditional_4_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ListFiltersComponent_For_12_Conditional_0_Conditional_5_Template, 2, 2, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 8);
    \u0275\u0275element(7, "path", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ListFiltersComponent_For_12_Conditional_0_ng_template_8_Template, 8, 2, "ng-template", 10);
    \u0275\u0275listener("overlayOutsideClick", function ListFiltersComponent_For_12_Conditional_0_Template_ng_template_overlayOutsideClick_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeMenu());
    })("detach", function ListFiltersComponent_For_12_Conditional_0_Template_ng_template_detach_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeMenu());
    });
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    const trigger_r13 = \u0275\u0275reference(1);
    const g_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("lf__btn--on", ctx_r3.selected(g_r9.key).length > 0)("lf__btn--open", ctx_r3.openKey() === g_r9.key);
    \u0275\u0275attribute("aria-expanded", ctx_r3.openKey() === g_r9.key);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r9.label);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = ctx_r3.valueLabel(g_r9)) ? 4 : -1, tmp_17_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = ctx_r3.alertCount(g_r9)) ? 5 : -1, tmp_18_0);
    \u0275\u0275advance(3);
    \u0275\u0275property("cdkConnectedOverlayOrigin", trigger_r13)("cdkConnectedOverlayOpen", ctx_r3.openKey() === g_r9.key)("cdkConnectedOverlayPositions", ctx_r3.positions)("cdkConnectedOverlayViewportMargin", 8);
  }
}
function ListFiltersComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListFiltersComponent_For_12_Conditional_0_Template, 9, 12);
  }
  if (rf & 2) {
    const g_r9 = ctx.$implicit;
    \u0275\u0275conditional(g_r9.options.length ? 0 : -1);
  }
}
function ListFiltersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ListFiltersComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearAll());
    });
    \u0275\u0275text(1, "Clear all");
    \u0275\u0275elementEnd();
  }
}
function ListFiltersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.summary());
  }
}
var PERIOD_KEY = "__period";
var ListFiltersComponent = class _ListFiltersComponent {
  constructor() {
    this.groups = input([]);
    this.state = model({});
    this.period = model(EMPTY_PERIOD);
    this.dateFields = input([]);
    this.summary = input("");
    this.PERIOD_KEY = PERIOD_KEY;
    this.presets = PERIOD_LABELS;
    this.openKey = signal(null);
    this.isCustom = computed(() => this.period().preset === "custom");
    this.showFieldSwitch = computed(() => this.dateFields().length > 1);
    this.anyActive = computed(() => !isFilterEmpty(this.state(), this.period()));
    this.periodText = computed(() => periodLabel(this.period()));
    this.periodOn = computed(() => this.period().preset !== "all");
    this.positions = [
      { originX: "start", originY: "bottom", overlayX: "start", overlayY: "top", offsetY: 5 },
      { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", offsetY: -5 },
      { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top", offsetY: 5 }
    ];
  }
  toggleMenu(key) {
    this.openKey.update((k) => k === key ? null : key);
  }
  closeMenu() {
    this.openKey.set(null);
  }
  selected(groupKey) {
    return this.state()[groupKey] ?? [];
  }
  isOn(groupKey, value) {
    return this.selected(groupKey).includes(value);
  }
  /** Toggling writes a NEW object: the host's computeds are signals, and mutating the
   *  array in place would change nothing on screen. */
  toggle(groupKey, value) {
    const current = this.selected(groupKey);
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    this.state.set(__spreadProps(__spreadValues({}, this.state()), { [groupKey]: next }));
  }
  clearGroup(groupKey) {
    this.state.set(__spreadProps(__spreadValues({}, this.state()), { [groupKey]: [] }));
  }
  clearAll() {
    const cleared = {};
    for (const g of this.groups())
      cleared[g.key] = [];
    this.state.set(cleared);
    this.period.set(resolvePeriod("all", this.period()));
    this.closeMenu();
  }
  /**
   * What a button has been narrowed to, or '' while it is untouched. The dimension name
   * is rendered separately and stays quiet: "Payment" is the question and is always
   * there, "Unpaid +1" is the answer and is the only part worth reading twice. With
   * four filters on, emphasising both turns the row into a wall of highlight.
   */
  valueLabel(g) {
    const picked = g.options.filter((o) => this.isOn(g.key, o.value));
    if (!picked.length)
      return "";
    return picked.length > 1 ? `${picked[0].label} +${picked.length - 1}` : picked[0].label;
  }
  /**
   * The number worth seeing before anything is opened: what is unpaid, what is overdue.
   * Shown only while the group is untouched — next to a chosen filter the same red
   * number would read as that filter's count and say the opposite of what it means.
   */
  alertCount(g) {
    if (this.selected(g.key).length)
      return 0;
    return g.options.reduce((n, o) => n + (o.alert ? o.count ?? 0 : 0), 0);
  }
  alertTitle(g) {
    return g.options.filter((o) => o.alert && (o.count ?? 0) > 0).map((o) => `${o.count} ${o.label.toLowerCase()}`).join(", ");
  }
  pickPreset(preset) {
    this.period.set(resolvePeriod(preset, this.period()));
    if (preset !== "custom")
      this.closeMenu();
  }
  setFrom(v) {
    this.period.set(__spreadProps(__spreadValues({}, this.period()), { preset: "custom", from: v || null }));
  }
  setTo(v) {
    this.period.set(__spreadProps(__spreadValues({}, this.period()), { preset: "custom", to: v || null }));
  }
  setField(v) {
    this.period.set(__spreadProps(__spreadValues({}, this.period()), { field: v }));
  }
  static {
    this.\u0275fac = function ListFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListFiltersComponent, selectors: [["app-list-filters"]], hostBindings: function ListFiltersComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function ListFiltersComponent_keydown_escape_HostBindingHandler() {
          return ctx.closeMenu();
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { groups: [1, "groups"], state: [1, "state"], period: [1, "period"], dateFields: [1, "dateFields"], summary: [1, "summary"] }, outputs: { state: "stateChange", period: "periodChange" }, decls: 15, vars: 14, consts: [["periodTrigger", ""], ["trigger", ""], [1, "lf"], ["type", "button", "aria-haspopup", "true", 1, "lf__btn", 3, "click"], ["viewBox", "0 0 20 20", "width", "14", "height", "14", "aria-hidden", "true", 1, "lf__icon"], ["x", "3", "y", "4.5", "width", "14", "height", "12", "rx", "2", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6"], ["d", "M3 8.5h14M7 2.8v3.2M13 2.8v3.2", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round"], [1, "lf__btn-text"], ["viewBox", "0 0 20 20", "width", "13", "height", "13", "aria-hidden", "true", 1, "lf__chev"], ["d", "M6 8l4 4 4-4", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayViewportMargin"], ["type", "button", 1, "lf__link", "lf__clear"], [1, "lf__summary"], [1, "lf__panel", "lf__panel--period"], ["role", "listbox", 1, "lf__opts"], ["type", "button", "role", "option", 1, "lf__opt"], [1, "lf__dates"], [1, "lf__foot"], ["type", "button", "role", "option", 1, "lf__opt", 3, "click"], [1, "lf__box", "lf__box--one"], [1, "lf__opt-label"], ["type", "date", "aria-label", "From", 1, "lf__date", 3, "change", "value"], [1, "lf__to"], ["type", "date", "aria-label", "To", 1, "lf__date", 3, "change", "value"], [1, "lf__foot-label"], [1, "lf__seg"], ["type", "button", 1, "lf__seg-btn", 3, "lf__seg-btn--on"], ["type", "button", 1, "lf__seg-btn", 3, "click"], [1, "lf__btn-val"], [1, "lf__alert", 3, "title"], [1, "lf__panel"], [1, "lf__panel-head"], [1, "lf__panel-title"], ["type", "button", 1, "lf__link"], ["role", "listbox", "aria-multiselectable", "true", 1, "lf__opts"], ["type", "button", 1, "lf__link", 3, "click"], [1, "lf__box"], [1, "lf__count", 3, "lf__count--alert"], [1, "lf__count"], ["type", "button", 1, "lf__link", "lf__clear", 3, "click"]], template: function ListFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "button", 3, 0);
        \u0275\u0275listener("click", function ListFiltersComponent_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMenu(ctx.PERIOD_KEY));
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 4);
        \u0275\u0275element(4, "rect", 5)(5, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "span", 7);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, ListFiltersComponent_ng_template_10_Template, 6, 2, "ng-template", 10);
        \u0275\u0275listener("overlayOutsideClick", function ListFiltersComponent_Template_ng_template_overlayOutsideClick_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeMenu());
        })("detach", function ListFiltersComponent_Template_ng_template_detach_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeMenu());
        });
        \u0275\u0275repeaterCreate(11, ListFiltersComponent_For_12_Template, 1, 1, null, null, _forTrack0);
        \u0275\u0275template(13, ListFiltersComponent_Conditional_13_Template, 2, 0, "button", 11)(14, ListFiltersComponent_Conditional_14_Template, 2, 1, "p", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const periodTrigger_r15 = \u0275\u0275reference(2);
        \u0275\u0275advance();
        \u0275\u0275classProp("lf__btn--on", ctx.periodOn())("lf__btn--open", ctx.openKey() === ctx.PERIOD_KEY);
        \u0275\u0275attribute("aria-expanded", ctx.openKey() === ctx.PERIOD_KEY);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("lf__btn-val", ctx.periodOn());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.periodText());
        \u0275\u0275advance(3);
        \u0275\u0275property("cdkConnectedOverlayOrigin", periodTrigger_r15)("cdkConnectedOverlayOpen", ctx.openKey() === ctx.PERIOD_KEY)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayViewportMargin", 8);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.groups());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.anyActive() ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.summary() ? 14 : -1);
      }
    }, dependencies: [OverlayModule, CdkConnectedOverlay], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field[_ngcontent-%COMP%]   textarea[appAutosize][_ngcontent-%COMP%] {\n  resize: none;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.lf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n  padding: 9px 12px;\n  margin-bottom: 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.lf__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  max-width: 260px;\n  height: 31px;\n  padding: 0 9px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition:\n    border-color 0.15s ease,\n    color 0.15s ease,\n    background 0.15s ease;\n}\n.lf__btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  border-color: #94a3b8;\n}\n.lf__btn--on[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n  border-color: #F4A922;\n}\n.lf__btn--open[_ngcontent-%COMP%] {\n  border-color: #F4A922;\n}\n.lf__btn-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lf__btn-val[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.lf__icon[_ngcontent-%COMP%] {\n  flex: none;\n  color: #94a3b8;\n}\n.lf__btn--on[_ngcontent-%COMP%]   .lf__icon[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.lf__chev[_ngcontent-%COMP%] {\n  flex: none;\n  color: #94a3b8;\n}\n.lf__alert[_ngcontent-%COMP%] {\n  flex: none;\n  min-width: 17px;\n  height: 17px;\n  padding: 0 5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9px;\n  background: #fee2e2;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #dc2626;\n}\n.lf__link[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  border: none;\n  background: none;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.lf__link[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.lf__clear[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n.lf__summary[_ngcontent-%COMP%] {\n  margin: 0 0 0 auto;\n  padding-left: 12px;\n  font-size: 12.5px;\n  color: #475569;\n}\n.lf__panel[_ngcontent-%COMP%] {\n  min-width: 212px;\n  max-height: 360px;\n  overflow: auto;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.16);\n}\n.lf__panel--period[_ngcontent-%COMP%] {\n  min-width: 232px;\n}\n.lf__panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 3px 8px 6px;\n}\n.lf__panel-title[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n}\n.lf__opts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.lf__opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 7px 8px;\n  border: none;\n  border-radius: 6px;\n  background: none;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 13px;\n  color: #0f172a;\n  text-align: left;\n  cursor: pointer;\n}\n.lf__opt[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.lf__opt-label[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lf__box[_ngcontent-%COMP%] {\n  flex: none;\n  width: 15px;\n  height: 15px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 4px;\n  background: #ffffff;\n  font-size: 9.5px;\n  line-height: 1;\n  color: transparent;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.lf__box--one[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.lf__box--on[_ngcontent-%COMP%] {\n  background: #F4A922;\n  border-color: #F4A922;\n  color: #fff;\n}\n.lf__count[_ngcontent-%COMP%] {\n  flex: none;\n  min-width: 17px;\n  height: 17px;\n  padding: 0 5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9px;\n  background: #f8fafc;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #475569;\n}\n.lf__count--alert[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.lf__dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px;\n  margin-top: 4px;\n  border-top: 1px solid #e2e8f0;\n}\n.lf__date[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 5px 7px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 12.5px;\n  color: #0f172a;\n}\n.lf__to[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n}\n.lf__foot[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin-top: 4px;\n  border-top: 1px solid #e2e8f0;\n}\n.lf__foot-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n}\n.lf__seg[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2px;\n  border-radius: 8px;\n  background: #f8fafc;\n}\n.lf__seg-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 5px 8px;\n  border: none;\n  border-radius: 6px;\n  background: none;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n}\n.lf__seg-btn--on[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f172a;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.1);\n}\n@media (max-width: 760px) {\n  .lf__summary[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding-left: 0;\n    flex-basis: 100%;\n  }\n  .lf__btn[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=list-filters.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListFiltersComponent, { className: "ListFiltersComponent", filePath: "src/app/booking/ui/list-filters/list-filters.component.ts", lineNumber: 40 });
})();

export {
  EMPTY_PERIOD,
  isFilterEmpty,
  countsFor,
  ListFiltersComponent
};
//# sourceMappingURL=chunk-ZMNSI4WU.js.map
