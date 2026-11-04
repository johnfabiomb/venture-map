import {
  SelectComponent
} from "./chunk-4JEV6NGV.js";
import {
  PERIOD_LABELS,
  periodLabel,
  resolvePeriod
} from "./chunk-P26ZSMAY.js";
import {
  FormsModule
} from "./chunk-PLONONHM.js";
import {
  computed,
  input,
  model,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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
function ListFiltersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 6);
    \u0275\u0275listener("change", function ListFiltersComponent_Conditional_5_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFrom($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 8);
    \u0275\u0275listener("change", function ListFiltersComponent_Conditional_5_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTo($event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", (tmp_1_0 = ctx_r1.period().from) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", (tmp_2_0 = ctx_r1.period().to) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "");
  }
}
function ListFiltersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-select", 10);
    \u0275\u0275twoWayListener("valueChange", function ListFiltersComponent_Conditional_6_Template_app_select_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fieldValue, $event) || (ctx_r1.fieldValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.fieldOptions());
    \u0275\u0275twoWayProperty("value", ctx_r1.fieldValue);
  }
}
function ListFiltersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ListFiltersComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275text(1, "Clear filters");
    \u0275\u0275elementEnd();
  }
}
function ListFiltersComponent_For_9_Conditional_0_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("lf__count--alert", o_r6.alert && o_r6.count > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r6.count);
  }
}
function ListFiltersComponent_For_9_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ListFiltersComponent_For_9_Conditional_0_For_5_Template_button_click_0_listener() {
      const o_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const g_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle(g_r7.key, o_r6.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, ListFiltersComponent_For_9_Conditional_0_For_5_Conditional_2_Template, 2, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    const g_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("lf__chip--on", ctx_r1.isOn(g_r7.key, o_r6.value));
    \u0275\u0275attribute("aria-pressed", ctx_r1.isOn(g_r7.key, o_r6.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r6.count !== void 0 ? 2 : -1);
  }
}
function ListFiltersComponent_For_9_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ListFiltersComponent_For_9_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const g_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearGroup(g_r7.key));
    });
    \u0275\u0275text(1, "Any");
    \u0275\u0275elementEnd();
  }
}
function ListFiltersComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275repeaterCreate(4, ListFiltersComponent_For_9_Conditional_0_For_5_Template, 3, 5, "button", 14, _forTrack1);
    \u0275\u0275template(6, ListFiltersComponent_For_9_Conditional_0_Conditional_6_Template, 2, 0, "button", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r7.options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selected(g_r7.key).length ? 6 : -1);
  }
}
function ListFiltersComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListFiltersComponent_For_9_Conditional_0_Template, 7, 2, "div", 12);
  }
  if (rf & 2) {
    const g_r7 = ctx.$implicit;
    \u0275\u0275conditional(g_r7.options.length ? 0 : -1);
  }
}
function ListFiltersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.summary());
  }
}
var ListFiltersComponent = class _ListFiltersComponent {
  constructor() {
    this.groups = input([]);
    this.state = model({});
    this.period = model({ preset: "all", from: null, to: null, field: "" });
    this.dateFields = input([]);
    this.summary = input("");
    this.presetOptions = PERIOD_LABELS.map((p) => ({ value: p.value, label: p.label }));
    this.fieldOptions = computed(() => this.dateFields().map((f) => ({ value: f.value, label: f.label })));
    this.isCustom = computed(() => this.period().preset === "custom");
    this.showFieldSwitch = computed(() => this.dateFields().length > 1);
    this.anyActive = computed(() => !isFilterEmpty(this.state(), this.period()));
    this.periodText = computed(() => periodLabel(this.period()));
  }
  /** app-select is two-way on a string, so the preset arrives as one. */
  get presetValue() {
    return this.period().preset;
  }
  set presetValue(v) {
    this.period.set(resolvePeriod(v, this.period()));
  }
  get fieldValue() {
    return this.period().field;
  }
  set fieldValue(v) {
    this.period.set(__spreadProps(__spreadValues({}, this.period()), { field: v }));
  }
  setFrom(v) {
    this.period.set(__spreadProps(__spreadValues({}, this.period()), { preset: "custom", from: v || null }));
  }
  setTo(v) {
    this.period.set(__spreadProps(__spreadValues({}, this.period()), { preset: "custom", to: v || null }));
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
  }
  static {
    this.\u0275fac = function ListFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListFiltersComponent, selectors: [["app-list-filters"]], inputs: { groups: [1, "groups"], state: [1, "state"], period: [1, "period"], dateFields: [1, "dateFields"], summary: [1, "summary"] }, outputs: { state: "stateChange", period: "periodChange" }, decls: 11, vars: 6, consts: [[1, "lf"], [1, "lf__period"], [1, "lf__label"], ["size", "sm", 1, "lf__preset", 3, "valueChange", "options", "value"], ["type", "button", 1, "lf__clear"], [1, "lf__summary"], ["type", "date", "aria-label", "From", 1, "lf__date", 3, "change", "value"], [1, "lf__to"], ["type", "date", "aria-label", "To", 1, "lf__date", 3, "change", "value"], [1, "lf__by"], ["size", "sm", 1, "lf__field", 3, "valueChange", "options", "value"], ["type", "button", 1, "lf__clear", 3, "click"], [1, "lf__group"], [1, "lf__chips"], ["type", "button", 1, "lf__chip", 3, "lf__chip--on"], ["type", "button", 1, "lf__any"], ["type", "button", 1, "lf__chip", 3, "click"], [1, "lf__count", 3, "lf__count--alert"], [1, "lf__count"], ["type", "button", 1, "lf__any", 3, "click"]], template: function ListFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Period");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-select", 3);
        \u0275\u0275twoWayListener("valueChange", function ListFiltersComponent_Template_app_select_valueChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.presetValue, $event) || (ctx.presetValue = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ListFiltersComponent_Conditional_5_Template, 4, 2)(6, ListFiltersComponent_Conditional_6_Template, 3, 2)(7, ListFiltersComponent_Conditional_7_Template, 2, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(8, ListFiltersComponent_For_9_Template, 1, 1, null, null, _forTrack0);
        \u0275\u0275template(10, ListFiltersComponent_Conditional_10_Template, 2, 1, "p", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.presetOptions);
        \u0275\u0275twoWayProperty("value", ctx.presetValue);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isCustom() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showFieldSwitch() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.anyActive() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.groups());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.summary() ? 10 : -1);
      }
    }, dependencies: [FormsModule, SelectComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.lf[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 14px 16px;\n  margin-bottom: 18px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n.lf__period[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.lf__label[_ngcontent-%COMP%] {\n  flex: 0 0 62px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #475569;\n}\n.lf__preset[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.lf__field[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.lf__date[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 13px;\n  color: #0f172a;\n}\n.lf__to[_ngcontent-%COMP%], \n.lf__by[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n}\n.lf__clear[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 0;\n  border: none;\n  background: none;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.lf__clear[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.lf__group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.lf__chips[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  flex: 1;\n  min-width: 0;\n}\n.lf__chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 11px;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  background: #ffffff;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.lf__chip[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  border-color: #94a3b8;\n}\n.lf__chip--on[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n  border-color: #F4A922;\n  color: #0f172a;\n}\n.lf__count[_ngcontent-%COMP%] {\n  min-width: 17px;\n  height: 17px;\n  padding: 0 5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9px;\n  background: #e2e8f0;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #475569;\n}\n.lf__chip--on[_ngcontent-%COMP%]   .lf__count[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f172a;\n}\n.lf__count--alert[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.lf__any[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  border: none;\n  background: none;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 11.5px;\n  color: #94a3b8;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.lf__any[_ngcontent-%COMP%]:hover {\n  color: #475569;\n}\n.lf__summary[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  padding-top: 10px;\n  border-top: 1px solid #e2e8f0;\n  font-size: 12.5px;\n  color: #475569;\n}\n@media (max-width: 760px) {\n  .lf__group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 5px;\n  }\n  .lf__label[_ngcontent-%COMP%] {\n    flex: none;\n  }\n  .lf__clear[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=list-filters.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListFiltersComponent, { className: "ListFiltersComponent", filePath: "src/app/booking/ui/list-filters/list-filters.component.ts", lineNumber: 28 });
})();

export {
  EMPTY_PERIOD,
  isFilterEmpty,
  countsFor,
  ListFiltersComponent
};
//# sourceMappingURL=chunk-WBYEFJO2.js.map
