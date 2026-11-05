import {
  EMPTY_PERIOD,
  ListFiltersComponent,
  countsFor,
  isFilterEmpty
} from "./chunk-VD27HBXG.js";
import {
  ClientEditorComponent
} from "./chunk-NJ6KZSES.js";
import {
  PaginatorComponent,
  paginate
} from "./chunk-KEXBKQFR.js";
import "./chunk-YT6H6K5O.js";
import "./chunk-PHEH44AJ.js";
import {
  BookingDataService,
  inPeriodAt,
  onScopeChange,
  periodLabel
} from "./chunk-KH7QPK5J.js";
import "./chunk-VP2YFPLJ.js";
import {
  BookingsAuthService
} from "./chunk-AO4LSMG5.js";
import "./chunk-PLONONHM.js";
import "./chunk-KKVK7E5Z.js";
import "./chunk-VUFO6QBK.js";
import {
  CurrencyPipe,
  DatePipe,
  computed,
  effect,
  inject,
  signal,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/clients/client-list/client-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ClientListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "circle", 12)(3, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No clients yet. Add one, or they'll appear here after your first booking.");
    \u0275\u0275elementEnd()();
  }
}
function ClientListComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyText());
  }
}
function ClientListComponent_Conditional_14_Conditional_2_For_21_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("owed--late", c_r5.overdue > 5e-3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(2, 3, c_r5.outstanding, "EUR", "symbol", "1.0-0"), " ");
  }
}
function ClientListComponent_Conditional_14_Conditional_2_For_21_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function ClientListComponent_Conditional_14_Conditional_2_For_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", c_r5.email, " ");
  }
}
function ClientListComponent_Conditional_14_Conditional_2_For_21_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Missing details");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_14_Conditional_2_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 19);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_14_Conditional_2_For_21_Template_tr_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(c_r5));
    });
    \u0275\u0275elementStart(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 24);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 25);
    \u0275\u0275template(14, ClientListComponent_Conditional_14_Conditional_2_For_21_Conditional_14_Template, 3, 8, "span", 26)(15, ClientListComponent_Conditional_14_Conditional_2_For_21_Conditional_15_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 27);
    \u0275\u0275template(17, ClientListComponent_Conditional_14_Conditional_2_For_21_Conditional_17_Template, 1, 1)(18, ClientListComponent_Conditional_14_Conditional_2_For_21_Conditional_18_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 29)(20, "span", 30);
    \u0275\u0275text(21, "Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = c_r5.company) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.jobs || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r5.last_job_at ? \u0275\u0275pipeBind2(9, 7, c_r5.last_job_at, "d MMM yy") : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r5.billed ? \u0275\u0275pipeBind4(12, 10, c_r5.billed, "EUR", "symbol", "1.0-0") : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(c_r5.outstanding > 5e-3 ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(c_r5.billable ? 17 : 18);
  }
}
function ClientListComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 16)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Jobs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Last job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Billed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Owed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, ClientListComponent_Conditional_14_Conditional_2_For_21_Template, 22, 15, "tr", 17, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "app-paginator", 18);
    \u0275\u0275listener("pageChange", function ClientListComponent_Conditional_14_Conditional_2_Template_app_paginator_pageChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.paged.setPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.paged.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r1.paged.page())("pageCount", ctx_r1.paged.pageCount())("total", ctx_r1.paged.total());
  }
}
function ClientListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-list-filters", 14);
    \u0275\u0275twoWayListener("stateChange", function ClientListComponent_Conditional_14_Template_app_list_filters_stateChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterState, $event) || (ctx_r1.filterState = $event);
      return \u0275\u0275resetView($event);
    })("periodChange", function ClientListComponent_Conditional_14_Template_app_list_filters_periodChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.period, $event) || (ctx_r1.period = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, ClientListComponent_Conditional_14_Conditional_1_Template, 2, 1, "p", 8)(2, ClientListComponent_Conditional_14_Conditional_2_Template, 23, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("groups", ctx_r1.filterGroups());
    \u0275\u0275twoWayProperty("state", ctx_r1.filterState)("period", ctx_r1.period);
    \u0275\u0275property("dateFields", ctx_r1.dateFields)("summary", ctx_r1.summary());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visible().length === 0 ? 1 : 2);
  }
}
var GROUP_KEYS = ["money", "activity", "details"];
var ClientListComponent = class _ClientListComponent {
  rowDate(c) {
    return this.period().field === "created_at" ? c.created_at : c.last_job_at;
  }
  optionMatches(c, group, value) {
    switch (group) {
      case "money":
        if (value === "owes")
          return c.outstanding > 5e-3;
        if (value === "overdue")
          return c.overdue > 5e-3;
        if (value === "settled")
          return c.outstanding <= 5e-3 && c.billed > 5e-3;
        return false;
      case "activity":
        if (value === "worked")
          return c.jobs > 0;
        if (value === "never")
          return c.jobs === 0;
        return false;
      case "details":
        return value === "billable" ? c.billable : !c.billable;
      default:
        return true;
    }
  }
  passesAll(c, st, skip) {
    for (const key of GROUP_KEYS) {
      if (key === skip)
        continue;
      const sel = st[key] ?? [];
      if (sel.length && !sel.some((v) => this.optionMatches(c, key, v)))
        return false;
    }
    return true;
  }
  constructor() {
    this.data = inject(BookingDataService);
    this.auth = inject(BookingsAuthService);
    this.rows = signal([]);
    this.loading = signal(true);
    this.filterState = signal({});
    this.period = signal(__spreadProps(__spreadValues({}, EMPTY_PERIOD), { field: "last_job_at" }));
    this.dateFields = [
      { value: "last_job_at", label: "last job" },
      { value: "created_at", label: "date added" }
    ];
    this.inWindow = computed(() => this.rows().filter((c) => inPeriodAt(this.rowDate(c), this.period())));
    this.visible = computed(() => this.inWindow().filter((c) => this.passesAll(c, this.filterState())));
    this.filterGroups = computed(() => {
      const st = this.filterState(), base = this.inWindow();
      const build = (key, label, opts, alert = "") => {
        const counts = countsFor(base, opts.map((o) => o[0]), (c) => this.passesAll(c, st, key), (c, v) => this.optionMatches(c, key, v));
        return {
          key,
          label,
          options: opts.map(([value, text]) => ({
            value,
            label: text,
            count: counts[value] ?? 0,
            alert: value === alert
          }))
        };
      };
      return [
        build("money", "Money", [["owes", "Owes me"], ["overdue", "Overdue"], ["settled", "All settled"]], "overdue"),
        build("activity", "Work", [["worked", "Has worked with me"], ["never", "No jobs yet"]]),
        build("details", "Billing", [["billable", "Ready to invoice"], ["incomplete", "Missing details"]])
      ];
    });
    this.summary = computed(() => {
      const v = this.visible();
      if (!v.length)
        return "";
      const money = (x) => `\u20AC${Math.round(x).toLocaleString("en")}`;
      const owed = v.reduce((s, c) => s + c.outstanding, 0);
      return `${v.length} client${v.length === 1 ? "" : "s"} \xB7 ${money(v.reduce((s, c) => s + c.billed, 0))} billed` + (owed > 5e-3 ? ` \xB7 ${money(owed)} outstanding` : "") + ` \xB7 ${periodLabel(this.period())} by ${this.period().field === "created_at" ? "date added" : "last job"}`;
    });
    this.emptyText = computed(() => isFilterEmpty(this.filterState(), this.period()) ? "No clients yet. Add one, or they'll appear here after your first booking." : "No clients match these filters. Loosen one, or clear them.");
    this.paged = paginate(this.visible);
    this.editorOpen = signal(false);
    this.editClient = signal(null);
    onScopeChange(this.auth, () => void this.load());
    effect(() => {
      this.filterState();
      this.period();
      this.paged.reset();
    });
  }
  load() {
    return __async(this, null, function* () {
      this.loading.set(true);
      this.rows.set(yield this.data.getClientSummary());
      this.loading.set(false);
    });
  }
  openNew() {
    this.editClient.set(null);
    this.editorOpen.set(true);
  }
  openEdit(c) {
    this.editClient.set(c);
    this.editorOpen.set(true);
  }
  /** The editor writes through the service; re-read so the money columns follow. */
  onSaved() {
    return __async(this, null, function* () {
      yield this.load();
    });
  }
  static {
    this.\u0275fac = function ClientListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientListComponent, selectors: [["app-client-list"]], decls: 16, vars: 3, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], [1, "btn", "btn--primary", 3, "click"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 3v10M3 8h10"], [1, "muted"], [1, "empty"], [3, "openChange", "saved", "open", "client"], ["viewBox", "0 0 48 48", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "18", "cy", "18", "r", "8"], ["d", "M6 42c0-7 5-11 12-11s12 4 12 11"], [3, "stateChange", "periodChange", "groups", "state", "period", "dateFields", "summary"], [1, "table-wrap"], [1, "table"], [1, "row"], [3, "pageChange", "page", "pageCount", "total"], [1, "row", 3, "click"], ["data-label", "Name", 1, "cell--client"], ["data-label", "Company"], ["data-label", "Jobs", 1, "cell--num"], ["data-label", "Last job", 1, "cell--date"], ["data-label", "Billed", 1, "cell--num"], ["data-label", "Owed", 1, "cell--num"], [1, "owed", 3, "owed--late"], ["data-label", "Contact"], [1, "muted-cell"], ["data-label", "", 1, "cell--edit"], [1, "link"], [1, "owed"]], template: function ClientListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Everyone you've worked with, and what they owe");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function ClientListComponent_Template_button_click_8_listener() {
          return ctx.openNew();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 6);
        \u0275\u0275element(10, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " New client ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, ClientListComponent_Conditional_12_Template, 2, 0, "p", 8)(13, ClientListComponent_Conditional_13_Template, 6, 0, "div", 9)(14, ClientListComponent_Conditional_14_Template, 3, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "app-client-editor", 10);
        \u0275\u0275twoWayListener("openChange", function ClientListComponent_Template_app_client_editor_openChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.editorOpen, $event) || (ctx.editorOpen = $event);
          return $event;
        });
        \u0275\u0275listener("saved", function ClientListComponent_Template_app_client_editor_saved_15_listener() {
          return ctx.onSaved();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.loading() ? 12 : ctx.rows().length === 0 ? 13 : 14);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("open", ctx.editorOpen);
        \u0275\u0275property("client", ctx.editClient());
      }
    }, dependencies: [DatePipe, CurrencyPipe, ClientEditorComponent, PaginatorComponent, ListFiltersComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  overflow-x: auto;\n}\n@media (max-width: 760px) {\n  .table-wrap[_ngcontent-%COMP%] {\n    border: none;\n    background: none;\n    overflow: visible;\n  }\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n@media (max-width: 760px) {\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    background: #ffffff;\n    border: 1px solid #e2e8f0;\n    border-radius: 12px;\n    padding: 10px 14px;\n    margin: 0 0 10px;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 7px 0;\n    border: none;\n    text-align: right;\n    white-space: normal;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {\n    border-top: 1px solid #e2e8f0;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    margin-right: auto;\n    flex: none;\n    font-size: 12px;\n    font-weight: 600;\n    color: #475569;\n    text-align: left;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label][_ngcontent-%COMP%] {\n    max-width: none;\n    white-space: normal;\n    overflow: visible;\n    text-overflow: clip;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%]::before {\n    content: none;\n  }\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  font-size: 13.5px;\n  color: #475569;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.cell--client[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.cell--date[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.cell--edit[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.link[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  border-color: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.92);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  padding: 64px 40px;\n  color: #94a3b8;\n  text-align: center;\n}\n.empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  opacity: 0.35;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  max-width: 300px;\n}\n.cell--num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n.owed[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #92400e;\n}\n.owed--late[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.muted-cell[_ngcontent-%COMP%] {\n  color: var(--color-text-light, #9ca3af);\n}\n/*# sourceMappingURL=client-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientListComponent, { className: "ClientListComponent", filePath: "src/app/booking/platform/clients/client-list/client-list.component.ts", lineNumber: 25 });
})();
export {
  ClientListComponent
};
//# sourceMappingURL=chunk-ON7QUKWB.js.map
