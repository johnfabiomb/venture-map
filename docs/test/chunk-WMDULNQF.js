import {
  InvoiceActionsComponent,
  InvoiceSendComponent
} from "./chunk-EHVZK7T2.js";
import "./chunk-3WWECWQ4.js";
import "./chunk-YYZD4ABX.js";
import {
  ExpenseDialogComponent
} from "./chunk-67I54CCR.js";
import {
  PaginatorComponent,
  paginate
} from "./chunk-32VX3ME2.js";
import "./chunk-5MZRX563.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingAdminService
} from "./chunk-5TM5ZP6U.js";
import {
  SelectComponent
} from "./chunk-PLAVWAQN.js";
import "./chunk-GVBB2R7I.js";
import {
  BookingDataService,
  onScopeChange
} from "./chunk-ZKMTNQH3.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-RKKFBZE5.js";
import "./chunk-BW7NI53J.js";
import "./chunk-2IJZ7QAG.js";
import "./chunk-7VIBRFOE.js";
import {
  RouterLink
} from "./chunk-F2R7EXZF.js";
import "./chunk-YHDSDEW7.js";
import "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
  CurrencyPipe,
  DatePipe,
  computed,
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
} from "./chunk-JW5UDKQ7.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/invoices/invoices-admin.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function InvoicesAdminComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-select", 9);
    \u0275\u0275listener("changed", function InvoicesAdminComponent_Conditional_8_Template_app_select_changed_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setYear($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 10);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv());
    });
    \u0275\u0275text(2, "Export CSV");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.year())("options", ctx_r1.yearOptions())("searchable", false);
  }
}
function InvoicesAdminComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "No invoices yet.");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_For_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.counts()[t_r4.key]);
  }
}
function InvoicesAdminComponent_Conditional_13_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_For_32_Template_button_click_0_listener() {
      const t_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab(t_r4.key));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InvoicesAdminComponent_Conditional_13_For_32_Conditional_3_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === t_r4.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.counts()[t_r4.key] ? 3 : -1);
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Nothing deleted. Removed invoices appear here and can be brought back.");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 28);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 29);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 30)(15, "button", 31);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_For_17_Template_button_click_15_listener() {
      const d_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.restore(d_r7));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    const d_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = d_r7.invoice_number) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "Draft");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_14_0 = d_r7.client_name) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.service_date ? \u0275\u0275pipeBind2(7, 7, d_r7.service_date, "d MMM y") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 10, d_r7.amount_gross, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 15, d_r7.deleted_at, "d MMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.restoring() === d_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.restoring() === d_r7.id ? "Restoring\u2026" : "Restore", " ");
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 23);
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Deleted");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_For_17_Template, 17, 18, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "app-paginator", 24);
    \u0275\u0275listener("pageChange", function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_Template_app_paginator_pageChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pagedDeleted.setPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.pagedDeleted.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r1.pagedDeleted.page())("pageCount", ctx_r1.pagedDeleted.pageCount())("total", ctx_r1.pagedDeleted.total());
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_0_Template, 2, 0, "p", 6)(1, InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_Template, 19, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.deleted().length === 0 ? 0 : 1);
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "No invoices match this filter.");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_35_For_29_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r10.days_overdue, "d overdue");
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_35_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 33);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_29_Template_tr_click_0_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.open(r_r10));
    });
    \u0275\u0275elementStart(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 34);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 36);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 28);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 38);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 39);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 40)(27, "span", 41);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, InvoicesAdminComponent_Conditional_13_Conditional_35_For_29_Conditional_29_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 30)(31, "app-invoice-actions", 43);
    \u0275\u0275listener("send", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_29_Template_app_invoice_actions_send_31_listener($event) {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSend(r_r10, $event));
    })("addCost", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_29_Template_app_invoice_actions_addCost_31_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCost(r_r10));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    const r_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_12_0 = r_r10.invoice_number) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.service_date ? \u0275\u0275pipeBind2(5, 23, r_r10.service_date, "d MMM y") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("due", r_r10.is_overdue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r10.due_date ? \u0275\u0275pipeBind2(8, 26, r_r10.due_date, "d MMM y") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_16_0 = r_r10.client_name) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_17_0 = r_r10.staff_name) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_18_0 = r_r10.created_by_name) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_19_0 = r_r10.service_name) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(19, 29, r_r10.amount_gross, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(22, 34, r_r10.amount_paid, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("due", r_r10.balance_due > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(25, 39, r_r10.balance_due, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge--paid", r_r10.payment_status === "paid")("badge--partial", r_r10.payment_status === "partial")("badge--unpaid", r_r10.payment_status === "unpaid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(r_r10));
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r10.is_overdue ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("invoice", r_r10);
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "table", 22)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Worker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Raised by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 23);
    \u0275\u0275text(19, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 23);
    \u0275\u0275text(21, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 23);
    \u0275\u0275text(23, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, InvoicesAdminComponent_Conditional_13_Conditional_35_For_29_Template, 32, 44, "tr", 32, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "app-paginator", 24);
    \u0275\u0275listener("pageChange", function InvoicesAdminComponent_Conditional_13_Conditional_35_Template_app_paginator_pageChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.paged.setPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(28);
    \u0275\u0275repeater(ctx_r1.paged.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r1.paged.page())("pageCount", ctx_r1.paged.pageCount())("total", ctx_r1.paged.total());
  }
}
function InvoicesAdminComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3, "Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "span", 13);
    \u0275\u0275text(8, "Billed (gross)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "span", 13);
    \u0275\u0275text(14, "Collected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 15);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12)(19, "span", 13);
    \u0275\u0275text(20, "Outstanding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 16);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 12)(25, "span", 13);
    \u0275\u0275text(26, "Overdue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 14);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 17);
    \u0275\u0275repeaterCreate(31, InvoicesAdminComponent_Conditional_13_For_32_Template, 4, 4, "button", 18, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, InvoicesAdminComponent_Conditional_13_Conditional_33_Template, 2, 1)(34, InvoicesAdminComponent_Conditional_13_Conditional_34_Template, 2, 0, "p", 6)(35, InvoicesAdminComponent_Conditional_13_Conditional_35_Template, 31, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.counts().all);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 8, ctx_r1.totalBilled(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 13, ctx_r1.totalPaid(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(23, 18, ctx_r1.outstanding(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("summary__val--due", ctx_r1.overdueTotal() > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(29, 23, ctx_r1.overdueTotal(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.tab() === "deleted" ? 33 : ctx_r1.filtered().length === 0 ? 34 : 35);
  }
}
var STATUS_LABEL = {
  unpaid: "Unpaid",
  partial: "Partial",
  paid: "Paid"
};
var InvoicesAdminComponent = class _InvoicesAdminComponent {
  loadDeleted() {
    return __async(this, null, function* () {
      this.deleted.set(yield this.data.listDeletedInvoices());
    });
  }
  restore(d) {
    return __async(this, null, function* () {
      if (this.restoring())
        return;
      if (!(yield this.confirm.ask({
        title: "Restore invoice",
        message: `Bring ${d.invoice_number ?? "this invoice"} back, with its lines and share links?`,
        confirmLabel: "Restore"
      })))
        return;
      this.restoring.set(d.id);
      try {
        const res = yield this.data.restoreInvoice(d.id);
        if (!res.restored) {
          this.toast.error(res.error ?? "Could not restore.");
          return;
        }
        this.toast.success("Invoice restored");
        yield Promise.all([this.reload(), this.loadDeleted()]);
      } finally {
        this.restoring.set("");
      }
    });
  }
  openCost(r) {
    if (!r.booking_id)
      return;
    this.costBookingId.set(r.booking_id);
    this.costOpen.set(true);
  }
  openSend(r, kind) {
    this.sendId.set(r.id);
    this.sendKind.set(kind);
    this.sendOpen.set(true);
  }
  /** An invoice's year: its own service date, falling back to its number's year. */
  rowYear(r) {
    if (r.service_date)
      return r.service_date.slice(0, 4);
    return r.number_year ? String(r.number_year) : "";
  }
  setTab(t) {
    this.tab.set(t);
    this.paged.reset();
  }
  setYear(y) {
    this.year.set(y);
    this.paged.reset();
  }
  constructor() {
    this.data = inject(BookingDataService);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.currency = signal("EUR");
    this.invoices = signal([]);
    this.loading = signal(true);
    this.sendOpen = signal(false);
    this.sendId = signal("");
    this.sendKind = signal("invoice");
    this.deleted = signal([]);
    this.restoring = signal("");
    this.costOpen = signal(false);
    this.costBookingId = signal(null);
    this.year = signal("all");
    this.years = computed(() => {
      const ys = /* @__PURE__ */ new Set();
      for (const r of this.invoices()) {
        const y = this.rowYear(r);
        if (y)
          ys.add(y);
      }
      return [...ys].sort((a, b) => b.localeCompare(a));
    });
    this.yearScoped = computed(() => {
      const y = this.year();
      return y === "all" ? this.invoices() : this.invoices().filter((r) => this.rowYear(r) === y);
    });
    this.tabs = [
      { key: "all", label: "All" },
      { key: "unpaid", label: "Unpaid" },
      { key: "overdue", label: "Overdue" },
      { key: "partial", label: "Partially paid" },
      { key: "paid", label: "Paid" },
      { key: "deleted", label: "Deleted" }
    ];
    this.tab = signal("all");
    this.counts = computed(() => {
      const c = {
        all: 0,
        unpaid: 0,
        partial: 0,
        paid: 0,
        overdue: 0,
        // Counted from its own list, not from yearScoped — deleted rows never appear there.
        deleted: this.deleted().length
      };
      for (const r of this.yearScoped()) {
        c.all++;
        c[r.payment_status]++;
        if (r.is_overdue)
          c.overdue++;
      }
      return c;
    });
    this.filtered = computed(() => {
      const t = this.tab();
      if (t === "deleted")
        return [];
      if (t === "all")
        return this.yearScoped();
      if (t === "overdue")
        return this.yearScoped().filter((r) => r.is_overdue);
      return this.yearScoped().filter((r) => r.payment_status === t);
    });
    this.paged = paginate(this.filtered);
    this.pagedDeleted = paginate(this.deleted);
    this.yearOptions = computed(() => [
      { value: "all", label: "All years" },
      ...this.years().map((y) => ({ value: y, label: y }))
    ]);
    this.totalBilled = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_gross, 0));
    this.totalNet = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_net, 0));
    this.overdueTotal = computed(() => this.yearScoped().reduce((s, r) => s + (r.is_overdue ? r.balance_due : 0), 0));
    this.totalPaid = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_paid, 0));
    this.outstanding = computed(() => this.yearScoped().reduce((s, r) => s + r.balance_due, 0));
    onScopeChange(this.auth, () => void this.loadAll());
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
    });
  }
  loadAll() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (org) {
        const s = yield this.admin.getOrgSettings(org);
        this.currency.set(s?.currency || "EUR");
      }
      this.invoices.set(yield this.data.queryInvoices());
      this.loading.set(false);
      void this.loadDeleted();
    });
  }
  /** Re-pull the rows. Sending can ISSUE a draft, which gives it a number and changes
   *  which tab it belongs to — so the list must refresh, not just the dialog. */
  reload() {
    return __async(this, null, function* () {
      this.invoices.set(yield this.data.queryInvoices());
    });
  }
  statusLabel(r) {
    return STATUS_LABEL[r.payment_status];
  }
  /** Open the printable invoice. A booking-linked one keeps its existing URL so old
   *  links stay valid; a standalone invoice is addressed by its own id via `?inv=`. */
  open(r) {
    const url = r.booking_id ? `/book/invoice/${r.booking_id}` : `/book/invoice?inv=${r.id}`;
    window.open(url, "_blank", "noopener");
  }
  /** Booking-linked invoices keep the booking-keyed editor route (the booking detail
   *  page links there); a standalone invoice opens by its own id. */
  editLink(r) {
    return r.booking_id ? ["/bookings/invoice-edit", r.booking_id] : ["/bookings/invoices/edit", r.id];
  }
  /** Copy the client-shareable (no-login) invoice link.
   *  A booking-linked invoice reuses its pay-link token so nothing changes for existing
   *  clients. A standalone invoice mints an INVOICE token, which grants only "view this
   *  invoice" — not the pay page and the deliverables a pay link would also open. */
  copyShareLink(r) {
    return __async(this, null, function* () {
      const url = r.booking_id ? yield this.data.invoiceShareLink(r.booking_id) : yield this.data.invoiceShareLinkById(r.id);
      if (!url) {
        this.toast.error("Could not create the invoice link.");
        return;
      }
      yield navigator.clipboard.writeText(url);
      this.toast.success("Invoice link copied \u2014 share it with your client");
    });
  }
  /** Download the visible list as CSV for the accountant. */
  exportCsv() {
    const rows = [["Invoice", "Date", "Client", "Worker", "Service", "Gross", "Net", "Paid", "Balance", "Status"]];
    for (const r of this.filtered()) {
      rows.push([
        r.invoice_number ?? "",
        (r.service_date ?? "").slice(0, 10),
        (r.client_name ?? "").replace(/"/g, '""'),
        (r.staff_name ?? "").replace(/"/g, '""'),
        (r.service_name ?? "").replace(/"/g, '""'),
        r.amount_gross.toFixed(2),
        r.amount_net.toFixed(2),
        r.amount_paid.toFixed(2),
        r.balance_due.toFixed(2),
        r.payment_status
      ]);
    }
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `invoices-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function InvoicesAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoicesAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesAdminComponent, selectors: [["app-invoices-admin"]], decls: 16, vars: 7, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-tools"], ["routerLink", "/bookings/invoices/new", "data-tour", "inv-new", 1, "btn", "btn--primary"], [1, "muted"], [3, "openChange", "saved", "open", "forBookingId"], [3, "openChange", "kindChange", "sent", "open", "invoiceId", "kind"], [1, "year-select", 3, "changed", "value", "options", "searchable"], [1, "btn", "btn--ghost", 3, "click"], ["data-tour", "inv-summary", 1, "summary"], [1, "summary__card"], [1, "summary__label"], [1, "summary__val"], [1, "summary__val", "summary__val--ok"], [1, "summary__val", "summary__val--due"], ["role", "tablist", 1, "tabs"], ["role", "tab", 1, "tab", 3, "tab--active"], ["role", "tab", 1, "tab", 3, "click"], [1, "tab__count"], [1, "table-wrap"], [1, "table"], [1, "num"], [3, "pageChange", "page", "pageCount", "total"], ["data-label", "Invoice", 1, "mono"], ["data-label", "Client", 1, "ellipsis"], ["data-label", "Date"], ["data-label", "Total", 1, "num"], ["data-label", "Deleted"], ["data-label", "", 1, "actions"], [1, "link-btn", 3, "click", "disabled"], [1, "row"], [1, "row", 3, "click"], ["data-label", "Due"], ["data-label", "Worker", 1, "ellipsis"], ["data-label", "Raised by", 1, "ellipsis"], ["data-label", "Service", 1, "ellipsis"], ["data-label", "Paid", 1, "num"], ["data-label", "Balance", 1, "num"], ["data-label", "Status"], [1, "badge"], [1, "badge", "badge--overdue"], [3, "send", "addCost", "invoice"]], template: function InvoicesAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Your money record. An invoice can sit on a job in the calendar, or stand on its own.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275template(8, InvoicesAdminComponent_Conditional_8_Template, 3, 3);
        \u0275\u0275elementStart(9, "a", 5);
        \u0275\u0275text(10, "New invoice");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, InvoicesAdminComponent_Conditional_11_Template, 2, 0, "p", 6)(12, InvoicesAdminComponent_Conditional_12_Template, 2, 0, "p", 6)(13, InvoicesAdminComponent_Conditional_13_Template, 36, 28);
        \u0275\u0275elementStart(14, "app-expense-dialog", 7);
        \u0275\u0275twoWayListener("openChange", function InvoicesAdminComponent_Template_app_expense_dialog_openChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.costOpen, $event) || (ctx.costOpen = $event);
          return $event;
        });
        \u0275\u0275listener("saved", function InvoicesAdminComponent_Template_app_expense_dialog_saved_14_listener() {
          return ctx.reload();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "app-invoice-send", 8);
        \u0275\u0275twoWayListener("openChange", function InvoicesAdminComponent_Template_app_invoice_send_openChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sendOpen, $event) || (ctx.sendOpen = $event);
          return $event;
        })("kindChange", function InvoicesAdminComponent_Template_app_invoice_send_kindChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sendKind, $event) || (ctx.sendKind = $event);
          return $event;
        });
        \u0275\u0275listener("sent", function InvoicesAdminComponent_Template_app_invoice_send_sent_15_listener() {
          return ctx.reload();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.invoices().length > 0 ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 11 : ctx.invoices().length === 0 ? 12 : 13);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("open", ctx.costOpen);
        \u0275\u0275property("forBookingId", ctx.costBookingId());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("open", ctx.sendOpen);
        \u0275\u0275property("invoiceId", ctx.sendId());
        \u0275\u0275twoWayProperty("kind", ctx.sendKind);
      }
    }, dependencies: [DatePipe, CurrencyPipe, RouterLink, InvoiceSendComponent, ExpenseDialogComponent, PaginatorComponent, SelectComponent, InvoiceActionsComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  padding: 36px 48px;\n}\n@media (max-width: 900px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n.head-tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.year-select[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n.summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 4px;\n}\n.tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 7px 14px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.tab--active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f172a;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);\n}\n.tab__count[_ngcontent-%COMP%] {\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  background: #e2e8f0;\n  color: #475569;\n}\n.tab--active[_ngcontent-%COMP%]   .tab__count[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n  color: #0f172a;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge--paid[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge--partial[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.badge--unpaid[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge--overdue[_ngcontent-%COMP%] {\n  background: #b45309;\n  color: #fff;\n  margin-left: 6px;\n}\n.summary__card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.summary__label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.summary__val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.summary__val--ok[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.summary__val--due[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  overflow-x: auto;\n}\n@media (max-width: 760px) {\n  .table-wrap[_ngcontent-%COMP%] {\n    border: none;\n    background: none;\n    overflow: visible;\n  }\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n@media (max-width: 760px) {\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    background: #ffffff;\n    border: 1px solid #e2e8f0;\n    border-radius: 12px;\n    padding: 10px 14px;\n    margin: 0 0 10px;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 7px 0;\n    border: none;\n    text-align: right;\n    white-space: normal;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {\n    border-top: 1px solid #e2e8f0;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    margin-right: auto;\n    flex: none;\n    font-size: 12px;\n    font-weight: 600;\n    color: #475569;\n    text-align: left;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label][_ngcontent-%COMP%] {\n    max-width: none;\n    white-space: normal;\n    overflow: visible;\n    text-overflow: clip;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%]::before {\n    content: none;\n  }\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  font-size: 13.5px;\n  color: #475569;\n  border-bottom: 1px solid #e2e8f0;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\nth.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.actions[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.kebab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.kebab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #0f172a;\n}\n.kebab[aria-expanded=true][_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #0f172a;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  text-decoration: none;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.mono[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n  color: #0f172a;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.due[_ngcontent-%COMP%] {\n  color: #b45309;\n  font-weight: 600;\n}\n/*# sourceMappingURL=invoices-admin.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesAdminComponent, { className: "InvoicesAdminComponent", filePath: "src/app/booking/platform/invoices/invoices-admin.component.ts", lineNumber: 46 });
})();
export {
  InvoicesAdminComponent
};
//# sourceMappingURL=chunk-WMDULNQF.js.map
