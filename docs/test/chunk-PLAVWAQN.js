import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-GVBB2R7I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BW7NI53J.js";
import {
  computed,
  effect,
  input,
  model,
  output,
  signal,
  viewChild,
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
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-JW5UDKQ7.js";

// src/app/booking/ui/select/select.component.ts
var _c0 = ["trigger"];
var _c1 = ["search"];
var _forTrack0 = ($index, $item) => $item.value;
function SelectComponent_Conditional_2_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275listener("click", function SelectComponent_Conditional_2_Conditional_0_For_2_Template_span_click_2_listener($event) {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeOne(c_r3.value, $event));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r3.label, " ");
  }
}
function SelectComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275repeaterCreate(1, SelectComponent_Conditional_2_Conditional_0_For_2_Template, 4, 1, "span", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.chosen());
  }
}
function SelectComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.placeholder());
  }
}
function SelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectComponent_Conditional_2_Conditional_0_Template, 3, 0, "span", 7)(1, SelectComponent_Conditional_2_Conditional_1_Template, 2, 1, "span", 8);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.chosen().length ? 0 : 1);
  }
}
function SelectComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r3.selected().color);
  }
}
function SelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectComponent_Conditional_3_Conditional_0_Template, 1, 2, "span", 11);
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r3.selected()) == null ? null : tmp_2_0.color) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("sel__value--empty", !ctx_r3.selected());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = (tmp_4_0 = ctx_r3.selected()) == null ? null : tmp_4_0.label) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ctx_r3.placeholder(), " ");
  }
}
function SelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275listener("click", function SelectComponent_Conditional_4_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clear($event));
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
  }
}
function SelectComponent_ng_template_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "input", 20, 1);
    \u0275\u0275listener("ngModelChange", function SelectComponent_ng_template_7_Conditional_1_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.query.set($event));
    })("keydown", function SelectComponent_ng_template_7_Conditional_1_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onSearchKey($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r3.query());
  }
}
function SelectComponent_ng_template_7_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const o_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", o_r9.color);
  }
}
function SelectComponent_ng_template_7_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r9.hint);
  }
}
function SelectComponent_ng_template_7_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function SelectComponent_ng_template_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("mouseenter", function SelectComponent_ng_template_7_For_4_Template_button_mouseenter_0_listener() {
      const \u0275$index_44_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.activeIndex.set(\u0275$index_44_r8));
    })("click", function SelectComponent_ng_template_7_For_4_Template_button_click_0_listener() {
      const o_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.pick(o_r9));
    });
    \u0275\u0275template(1, SelectComponent_ng_template_7_For_4_Conditional_1_Template, 1, 2, "span", 11);
    \u0275\u0275elementStart(2, "span", 22)(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SelectComponent_ng_template_7_For_4_Conditional_5_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SelectComponent_ng_template_7_For_4_Conditional_6_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r9 = ctx.$implicit;
    const \u0275$index_44_r8 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sel__opt--on", ctx_r3.isChosen(o_r9.value))("sel__opt--active", \u0275$index_44_r8 === ctx_r3.activeIndex());
    \u0275\u0275property("disabled", o_r9.disabled);
    \u0275\u0275attribute("aria-selected", ctx_r3.isChosen(o_r9.value));
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r9.color ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r9.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r9.hint && o_r9.hint !== o_r9.label ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isChosen(o_r9.value) ? 6 : -1);
  }
}
function SelectComponent_ng_template_7_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.query() ? "Nothing matches \u201C" + ctx_r3.query() + "\u201D" : "Nothing to choose");
  }
}
function SelectComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, SelectComponent_ng_template_7_Conditional_1_Template, 3, 1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275repeaterCreate(3, SelectComponent_ng_template_7_For_4_Template, 7, 10, "button", 18, _forTrack0, false, SelectComponent_ng_template_7_ForEmpty_5_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.showSearch() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.filtered());
  }
}
var SelectComponent = class _SelectComponent {
  isChosen(v) {
    return this.multiple() ? this.values().includes(v) : v === this.value();
  }
  /**
   * How well an option matches, 0 = not at all. Ranked rather than merely filtered,
   * because a plain substring match buries the obvious answer: typing "in" to find
   * "The Insynk Collective" also matches "Benjam-in" and "Bett-in-a", and with a hundred
   * clients the one you meant is somewhere in the middle of them.
   *
   * A match at the START of a word beats one buried inside it, and the label beats the
   * hint — the label is the thing being chosen.
   */
  score(o, q) {
    const label = o.label.toLowerCase();
    const hint = (o.hint ?? "").toLowerCase();
    const wordStart = (text) => text.split(/[^a-z0-9]+/i).some((w) => w.startsWith(q));
    if (label.startsWith(q))
      return 5;
    if (wordStart(label))
      return 4;
    if (hint.startsWith(q) || wordStart(hint))
      return 3;
    if (label.includes(q))
      return 2;
    if (hint.includes(q))
      return 1;
    return 0;
  }
  panelWidth() {
    return this.panelW();
  }
  constructor() {
    this.value = model("");
    this.multiple = input(false);
    this.values = model([]);
    this.options = input([]);
    this.placeholder = input("Select\u2026");
    this.disabled = input(false);
    this.clearable = input(false);
    this.variant = input("light");
    this.size = input("md");
    this.searchable = input("auto");
    this.changed = output();
    this.open = signal(false);
    this.query = signal("");
    this.activeIndex = signal(0);
    this.triggerEl = viewChild.required("trigger");
    this.searchEl = viewChild("search");
    this.positions = [
      { originX: "start", originY: "bottom", overlayX: "start", overlayY: "top", offsetY: 4 },
      { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", offsetY: -4 }
    ];
    this.selected = computed(() => this.options().find((o) => o.value === this.value()) ?? null);
    this.chosen = computed(() => this.options().filter((o) => this.values().includes(o.value)));
    this.showSearch = computed(() => {
      const s = this.searchable();
      return s === "auto" ? this.options().length > 7 : s;
    });
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      if (!q)
        return this.options();
      return this.options().map((o) => ({ o, s: this.score(o, q) })).filter((r) => r.s > 0).sort((a, b) => b.s - a.s).map((r) => r.o);
    });
    this.panelW = signal(0);
    effect(() => {
      if (!this.open())
        return;
      queueMicrotask(() => this.searchEl()?.nativeElement.focus());
    });
  }
  toggle() {
    if (this.disabled())
      return;
    if (this.open()) {
      this.close();
      return;
    }
    this.query.set("");
    this.activeIndex.set(Math.max(0, this.filtered().findIndex((o) => this.isChosen(o.value))));
    this.panelW.set(this.triggerEl().nativeElement.offsetWidth);
    this.open.set(true);
  }
  close() {
    this.open.set(false);
    this.query.set("");
  }
  pick(o) {
    if (o.disabled)
      return;
    if (this.multiple()) {
      const next = this.values().includes(o.value) ? this.values().filter((v) => v !== o.value) : [...this.values(), o.value];
      this.values.set(next);
      return;
    }
    this.value.set(o.value);
    this.changed.emit(o.value);
    this.close();
    this.triggerEl().nativeElement.focus();
  }
  removeOne(v, e) {
    e.stopPropagation();
    this.values.set(this.values().filter((x) => x !== v));
  }
  clear(e) {
    e.stopPropagation();
    this.value.set("");
    this.changed.emit("");
  }
  onTriggerKey(e) {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key) && !this.open()) {
      e.preventDefault();
      this.toggle();
    }
  }
  onSearchKey(e) {
    const list = this.filtered();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      this.activeIndex.update((i) => Math.min(i + 1, list.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      this.activeIndex.update((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const o = list[this.activeIndex()];
      if (o)
        this.pick(o);
    } else if (e.key === "Escape") {
      e.preventDefault();
      this.close();
      this.triggerEl().nativeElement.focus();
    } else {
      this.activeIndex.set(0);
    }
  }
  static {
    this.\u0275fac = function SelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectComponent, selectors: [["app-select"]], viewQuery: function SelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.triggerEl, _c0, 5);
        \u0275\u0275viewQuerySignal(ctx.searchEl, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { value: [1, "value"], multiple: [1, "multiple"], values: [1, "values"], options: [1, "options"], placeholder: [1, "placeholder"], disabled: [1, "disabled"], clearable: [1, "clearable"], variant: [1, "variant"], size: [1, "size"], searchable: [1, "searchable"] }, outputs: { value: "valueChange", values: "valuesChange", changed: "changed" }, decls: 8, vars: 15, consts: [["trigger", ""], ["search", ""], ["type", "button", "aria-haspopup", "listbox", 1, "sel__trigger", 3, "click", "keydown", "disabled"], ["role", "button", "aria-label", "Clear", 1, "sel__clear"], ["viewBox", "0 0 20 20", "width", "15", "height", "15", "aria-hidden", "true", 1, "sel__chev"], ["d", "M6 8l4 4 4-4", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayWidth", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayPositions"], [1, "sel__chips"], [1, "sel__value", "sel__value--empty"], [1, "sel__chip"], ["role", "button", "aria-label", "Remove", 1, "sel__chip-x", 3, "click"], [1, "sel__dot", 3, "background"], [1, "sel__value"], [1, "sel__dot"], ["role", "button", "aria-label", "Clear", 1, "sel__clear", 3, "click"], ["role", "listbox", 1, "sel__panel"], [1, "sel__search"], [1, "sel__list"], ["type", "button", "role", "option", 1, "sel__opt", 3, "sel__opt--on", "sel__opt--active", "disabled"], [1, "sel__empty"], ["type", "text", "name", "selSearch", "placeholder", "Search\u2026", "autocomplete", "off", 3, "ngModelChange", "keydown", "ngModel"], ["type", "button", "role", "option", 1, "sel__opt", 3, "mouseenter", "click", "disabled"], [1, "sel__opt-text"], [1, "sel__opt-label"], [1, "sel__opt-hint"], [1, "sel__tick"]], template: function SelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "button", 2, 0);
        \u0275\u0275listener("click", function SelectComponent_Template_button_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggle());
        })("keydown", function SelectComponent_Template_button_keydown_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTriggerKey($event));
        });
        \u0275\u0275template(2, SelectComponent_Conditional_2_Template, 2, 1)(3, SelectComponent_Conditional_3_Template, 3, 4)(4, SelectComponent_Conditional_4_Template, 2, 0, "span", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 4);
        \u0275\u0275element(6, "path", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, SelectComponent_ng_template_7_Template, 6, 2, "ng-template", 6);
        \u0275\u0275listener("overlayOutsideClick", function SelectComponent_Template_ng_template_overlayOutsideClick_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close());
        })("detach", function SelectComponent_Template_ng_template_detach_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close());
        });
      }
      if (rf & 2) {
        const trigger_r10 = \u0275\u0275reference(1);
        \u0275\u0275classProp("sel__trigger--sm", ctx.size() === "sm")("sel__trigger--dark", ctx.variant() === "dark")("sel__trigger--open", ctx.open());
        \u0275\u0275property("disabled", ctx.disabled());
        \u0275\u0275attribute("aria-expanded", ctx.open());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.multiple() ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.clearable() && ctx.selected() && !ctx.disabled() ? 4 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("cdkConnectedOverlayOrigin", trigger_r10)("cdkConnectedOverlayOpen", ctx.open())("cdkConnectedOverlayWidth", ctx.panelWidth())("cdkConnectedOverlayViewportMargin", 8)("cdkConnectedOverlayPositions", ctx.positions);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, OverlayModule, CdkConnectedOverlay], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  min-width: 0;\n}\n.sel__trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 10px 12px;\n  box-sizing: border-box;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #0f172a;\n  text-align: left;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n@media (max-width: 560px) {\n  .sel__trigger[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.sel__trigger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #cbd5e1;\n}\n.sel__trigger--open[_ngcontent-%COMP%] {\n  border-color: #F4A922;\n}\n.sel__trigger--sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  font-size: 11.5px;\n  gap: 5px;\n  border-width: 1px;\n  border-radius: 6px;\n}\n@media (max-width: 560px) {\n  .sel__trigger--sm[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.sel__trigger--sm[_ngcontent-%COMP%]   .sel__chev[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n}\n.sel__trigger[_ngcontent-%COMP%]:disabled {\n  background: #f8fafc;\n  color: #94a3b8;\n  cursor: default;\n}\n.sel__trigger--dark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 9px 12px;\n}\n.sel__trigger--dark[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.sel__trigger--dark.sel__trigger--open[_ngcontent-%COMP%] {\n  border-color: #F4A922;\n}\n.sel__value[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sel__value--empty[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.sel__trigger--dark[_ngcontent-%COMP%]   .sel__value--empty[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.sel__chev[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #94a3b8;\n  transition: transform 0.15s ease;\n}\n.sel__trigger--open[_ngcontent-%COMP%]   .sel__chev[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.sel__trigger--dark[_ngcontent-%COMP%]   .sel__chev[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.sel__clear[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 18px;\n  height: 18px;\n  line-height: 16px;\n  text-align: center;\n  border-radius: 50%;\n  font-size: 15px;\n  color: #94a3b8;\n  cursor: pointer;\n}\n.sel__clear[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #475569;\n}\n.sel__dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.sel__chips[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.sel__chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  max-width: 100%;\n  padding: 2px 6px;\n  border-radius: 6px;\n  background: #f1f5f9;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #334155;\n}\n.sel__chip-x[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 1;\n}\n.sel__chip-x[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.sel__panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.16);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 300px;\n}\n.sel__search[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.sel__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px 10px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 7px;\n  font-family: inherit;\n  font-size: 13px;\n  color: #0f172a;\n}\n@media (max-width: 560px) {\n  .sel__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.sel__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.sel__list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 5px;\n}\n.sel__opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 9px 10px;\n  border: none;\n  background: none;\n  border-radius: 7px;\n  font-family: inherit;\n  font-size: 13.5px;\n  color: #0f172a;\n  text-align: left;\n  cursor: pointer;\n}\n.sel__opt--active[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\n.sel__opt--on[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.sel__opt[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n.sel__opt-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.sel__opt-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sel__opt-hint[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #94a3b8;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sel__tick[_ngcontent-%COMP%] {\n  color: #F4A922;\n  font-weight: 800;\n}\n.sel__empty[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 16px 12px;\n  font-size: 12.5px;\n  color: #94a3b8;\n  text-align: center;\n}\n/*# sourceMappingURL=select.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "src/app/booking/ui/select/select.component.ts", lineNumber: 208 });
})();

export {
  SelectComponent
};
//# sourceMappingURL=chunk-PLAVWAQN.js.map
