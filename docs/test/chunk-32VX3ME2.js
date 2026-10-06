import {
  computed,
  input,
  output,
  signal,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-JW5UDKQ7.js";

// src/app/booking/core/utils/pagination.util.ts
var PAGE_SIZE = 30;
function paginate(source, size = PAGE_SIZE) {
  const requested = signal(1);
  const total = computed(() => source().length);
  const pageCount = computed(() => Math.max(1, Math.ceil(total() / size)));
  const page = computed(() => Math.min(Math.max(1, requested()), pageCount()));
  const items = computed(() => {
    const start = (page() - 1) * size;
    return source().slice(start, start + size);
  });
  return {
    page,
    pageCount,
    total,
    items,
    setPage: (p) => requested.set(p),
    reset: () => requested.set(1)
  };
}

// src/app/booking/ui/paginator/paginator.component.ts
function PaginatorComponent_Conditional_0_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function PaginatorComponent_Conditional_0_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function PaginatorComponent_Conditional_0_For_7_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.go(p_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pg__btn--on", p_r4 === ctx_r1.page());
    \u0275\u0275attribute("aria-current", p_r4 === ctx_r1.page() ? "page" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4);
  }
}
function PaginatorComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaginatorComponent_Conditional_0_For_7_Conditional_0_Template, 2, 0, "span", 5)(1, PaginatorComponent_Conditional_0_For_7_Conditional_1_Template, 2, 4, "button", 6);
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275conditional(p_r4 === 0 ? 0 : 1);
  }
}
function PaginatorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 0)(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
    \u0275\u0275listener("click", function PaginatorComponent_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.page() - 1));
    });
    \u0275\u0275text(5, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, PaginatorComponent_Conditional_0_For_7_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function PaginatorComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.page() + 1));
    });
    \u0275\u0275text(9, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.from(), "\u2013", ctx_r1.to(), " of ", ctx_r1.total(), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page() === ctx_r1.pageCount());
  }
}
var PaginatorComponent = class _PaginatorComponent {
  constructor() {
    this.page = input.required();
    this.pageCount = input.required();
    this.total = input.required();
    this.pageChange = output();
    this.pageSize = input(PAGE_SIZE);
    this.from = computed(() => this.total() === 0 ? 0 : (this.page() - 1) * this.pageSize() + 1);
    this.to = computed(() => Math.min(this.page() * this.pageSize(), this.total()));
    this.pages = computed(() => {
      const count = this.pageCount(), cur = this.page();
      if (count <= 7)
        return Array.from({ length: count }, (_, i) => i + 1);
      const out = /* @__PURE__ */ new Set([1, count, cur, cur - 1, cur + 1]);
      if (cur <= 3) {
        out.add(2);
        out.add(3);
        out.add(4);
      }
      if (cur >= count - 2) {
        out.add(count - 1);
        out.add(count - 2);
        out.add(count - 3);
      }
      const sorted = [...out].filter((p) => p >= 1 && p <= count).sort((a, b) => a - b);
      const withGaps = [];
      sorted.forEach((p, i) => {
        if (i > 0 && p - sorted[i - 1] > 1)
          withGaps.push(0);
        withGaps.push(p);
      });
      return withGaps;
    });
  }
  go(p) {
    if (p < 1 || p > this.pageCount() || p === this.page())
      return;
    this.pageChange.emit(p);
  }
  static {
    this.\u0275fac = function PaginatorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginatorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginatorComponent, selectors: [["app-paginator"]], inputs: { page: [1, "page"], pageCount: [1, "pageCount"], total: [1, "total"], pageSize: [1, "pageSize"] }, outputs: { pageChange: "pageChange" }, decls: 1, vars: 1, consts: [["role", "navigation", "aria-label", "Pagination", 1, "pg"], [1, "pg__range"], [1, "pg__controls"], ["type", "button", "aria-label", "Previous page", 1, "pg__btn", 3, "click", "disabled"], ["type", "button", "aria-label", "Next page", 1, "pg__btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "pg__gap"], ["type", "button", 1, "pg__btn", "pg__btn--num", 3, "pg__btn--on"], ["type", "button", 1, "pg__btn", "pg__btn--num", 3, "click"]], template: function PaginatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PaginatorComponent_Conditional_0_Template, 10, 5, "nav", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.pageCount() > 1 ? 0 : -1);
      }
    }, styles: ["\n\n.pg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 14px;\n}\n.pg__range[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.pg__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n}\n.pg__btn[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  padding: 0 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 700;\n  color: #475569;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.pg__btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.pg__btn--on) {\n  border-color: #94a3b8;\n}\n.pg__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.pg__btn--on[_ngcontent-%COMP%] {\n  background: #F4A922;\n  border-color: #F4A922;\n  color: #000;\n}\n.pg__gap[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n@media (max-width: 560px) {\n  .pg[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .pg__btn--num[_ngcontent-%COMP%], \n   .pg__gap[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pg__controls[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .pg__btn[_ngcontent-%COMP%] {\n    min-width: 44px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=paginator.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginatorComponent, { className: "PaginatorComponent", filePath: "src/app/booking/ui/paginator/paginator.component.ts", lineNumber: 71 });
})();

export {
  paginate,
  PaginatorComponent
};
//# sourceMappingURL=chunk-32VX3ME2.js.map
