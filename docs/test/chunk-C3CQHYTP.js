import {
  ExpenseDialogComponent
} from "./chunk-KCTYYQKX.js";
import "./chunk-5MZRX563.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingDataService
} from "./chunk-5UTJD4BK.js";
import "./chunk-F57EG5LQ.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-76D3SO4I.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-BW7NI53J.js";
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/expenses/expenses-admin.component.ts
var _c0 = (a0) => ["/bookings", a0];
var _forTrack0 = ($index, $item) => $item.month;
var _forTrack1 = ($index, $item) => $item.category;
var _forTrack2 = ($index, $item) => $item.client_name;
var _forTrack3 = ($index, $item) => $item.id;
function ExpensesAdminComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r1 = ctx.$implicit;
    \u0275\u0275property("value", y_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r1);
  }
}
function ExpensesAdminComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "span", 22);
    \u0275\u0275text(9, "Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 25)(14, "span", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 23);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 21)(20, "span", 22);
    \u0275\u0275text(21, "Charged to clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 23);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 26);
    \u0275\u0275text(26, "already inside Income");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 9, t_r2.income, "EUR", "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind4(12, 14, t_r2.expenses, "EUR", "symbol", "1.0-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Profit ", ctx_r2.year(), "");
    \u0275\u0275advance();
    \u0275\u0275classProp("summary__val--ok", t_r2.profit >= 0)("summary__val--due", t_r2.profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(18, 19, t_r2.profit, "EUR", "symbol", "1.0-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(24, 24, t_r2.billable_expenses, "EUR", "symbol", "1.0-2"));
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Nothing in ", ctx_r2.year(), " yet.");
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_7_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 31);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.monthLabel(m_r4.month));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 7, m_r4.income, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", m_r4.expenses ? "\u2212" : "", "", \u0275\u0275pipeBind4(8, 12, m_r4.expenses, "EUR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("num--loss", m_r4.profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 17, m_r4.profit, "EUR", "symbol", "1.0-0"));
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 27)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 28);
    \u0275\u0275text(7, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 28);
    \u0275\u0275text(9, "Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 28);
    \u0275\u0275text(11, "Profit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ExpensesAdminComponent_Conditional_16_Conditional_7_For_14_Template, 12, 22, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.byMonth());
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No costs recorded in ", ctx_r2.year(), ".");
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37);
    \u0275\u0275element(8, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 4, c_r5.amount, "EUR", "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.categoryShare(c_r5.amount), "%");
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 19);
    \u0275\u0275repeaterCreate(1, ExpensesAdminComponent_Conditional_16_Conditional_13_For_2_Template, 9, 9, "li", 33, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.byCategory());
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Nothing to compare yet.");
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_21_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 31);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("muted", !c_r6.client_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 9, c_r6.income, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r6.expenses ? "\u2212" : "", "", \u0275\u0275pipeBind4(8, 14, c_r6.expenses, "EUR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("num--loss", c_r6.profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 19, c_r6.profit, "EUR", "symbol", "1.0-0"));
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 27)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 28);
    \u0275\u0275text(7, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 28);
    \u0275\u0275text(9, "Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 28);
    \u0275\u0275text(11, "Profit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ExpensesAdminComponent_Conditional_16_Conditional_21_For_14_Template, 12, 24, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.byClient());
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No costs recorded in ", ctx_r2.year(), ". Use \u201CAdd a cost\u201D above and your profit figures come alive.");
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", r_r8.vendor, "");
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "charged");
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "to charge");
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, r_r8.booking_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r8.booking_ref);
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "General");
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 41)(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 43);
    \u0275\u0275text(8);
    \u0275\u0275template(9, ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_9_Template, 2, 1, "span", 20)(10, ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_10_Template, 2, 0, "span", 44)(11, ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_11_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 46);
    \u0275\u0275template(13, ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_13_Template, 2, 4, "a", 47)(14, ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Conditional_14_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 48);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 49)(19, "button", 50);
    \u0275\u0275listener("click", function ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Template_button_click_19_listener() {
      const r_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDialog(r_r8));
    });
    \u0275\u0275text(20, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 51);
    \u0275\u0275listener("click", function ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Template_button_click_21_listener() {
      const r_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.remove(r_r8));
    });
    \u0275\u0275text(22, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, r_r8.spent_on, "d MMM y"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r8.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r8.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r8.vendor ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r8.invoice_id ? 10 : r_r8.billable ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(r_r8.booking_ref ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind4(17, 10, r_r8.amount, "EUR", "symbol", "1.2-2"), "");
  }
}
function ExpensesAdminComponent_Conditional_16_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 27)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "What");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 28);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, ExpensesAdminComponent_Conditional_16_Conditional_29_For_17_Template, 23, 15, "tr", null, _forTrack3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.rows());
  }
}
function ExpensesAdminComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ExpensesAdminComponent_Conditional_16_Conditional_0_Template, 27, 29, "div", 12);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "h2", 16);
    \u0275\u0275text(5, "Month by month");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ExpensesAdminComponent_Conditional_16_Conditional_6_Template, 2, 1, "p", 17)(7, ExpensesAdminComponent_Conditional_16_Conditional_7_Template, 15, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "h2", 16);
    \u0275\u0275text(11, "By category");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ExpensesAdminComponent_Conditional_16_Conditional_12_Template, 2, 1, "p", 17)(13, ExpensesAdminComponent_Conditional_16_Conditional_13_Template, 3, 0, "ul", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 14)(15, "div", 15)(16, "h2", 16);
    \u0275\u0275text(17, "By client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 20);
    \u0275\u0275text(19, "Which work is actually worth it");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ExpensesAdminComponent_Conditional_16_Conditional_20_Template, 2, 0, "p", 17)(21, ExpensesAdminComponent_Conditional_16_Conditional_21_Template, 15, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14)(23, "div", 15)(24, "h2", 16);
    \u0275\u0275text(25, "Every cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 20);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, ExpensesAdminComponent_Conditional_16_Conditional_28_Template, 2, 1, "p", 17)(29, ExpensesAdminComponent_Conditional_16_Conditional_29_Template, 18, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.totals()) ? 0 : -1, tmp_1_0);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.byMonth().length === 0 ? 6 : 7);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.byCategory().length === 0 ? 12 : 13);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r2.byClient().length === 0 ? 20 : 21);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r2.rows().length, " item", ctx_r2.rows().length === 1 ? "" : "s", "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.rows().length === 0 ? 28 : 29);
  }
}
var ExpensesAdminComponent = class _ExpensesAdminComponent {
  constructor() {
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.data = inject(BookingDataService);
    this.loading = signal(true);
    this.rows = signal([]);
    this.profit = signal(null);
    this.year = signal(String((/* @__PURE__ */ new Date()).getFullYear()));
    this.years = computed(() => {
      const now = (/* @__PURE__ */ new Date()).getFullYear();
      const seen = /* @__PURE__ */ new Set([String(now)]);
      for (const r of this.rows())
        seen.add(r.spent_on.slice(0, 4));
      return [...seen].sort((a, b) => b.localeCompare(a));
    });
    this.dialogOpen = signal(false);
    this.editing = signal(null);
    this.totals = computed(() => this.profit()?.totals ?? null);
    this.byCategory = computed(() => this.profit()?.by_category ?? []);
    this.byMonth = computed(() => [...this.profit()?.by_month ?? []].reverse());
    this.byClient = computed(() => this.profit()?.by_client ?? []);
  }
  /** With a row, edits it; without, adds a new cost. */
  openDialog(r) {
    this.editing.set(r ?? null);
    this.dialogOpen.set(true);
  }
  /** Share of the period's costs, for the category bars. */
  categoryShare(amount) {
    const total = this.totals()?.expenses ?? 0;
    return total > 0 ? Math.round(amount / total * 100) : 0;
  }
  monthLabel(m) {
    const [y, mo] = m.split("-").map(Number);
    return new Date(y, mo - 1, 1).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      yield this.reload();
      this.loading.set(false);
    });
  }
  range() {
    const y = this.year();
    return { from: `${y}-01-01`, to: `${y}-12-31` };
  }
  reload() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      const { from, to } = this.range();
      const [rows, profit] = yield Promise.all([
        this.data.listExpenses(org, from, to),
        this.data.getProfit(org, from, to)
      ]);
      this.rows.set(rows);
      this.profit.set(profit);
    });
  }
  setYear(y) {
    return __async(this, null, function* () {
      this.year.set(y);
      this.loading.set(true);
      yield this.reload();
      this.loading.set(false);
    });
  }
  remove(r) {
    return __async(this, null, function* () {
      const charged = r.invoice_id ? " It was charged to the client, and that invoice line stays \u2014 remove it in the invoice editor if you need to." : "";
      if (!(yield this.confirm.ask({
        title: "Remove cost",
        message: `Remove \u201C${r.description}\u201D (\u20AC${Number(r.amount).toFixed(2)})?${charged}`,
        confirmLabel: "Remove",
        danger: true
      })))
        return;
      yield this.data.deleteExpense(r.id);
      if (this.editing()?.id === r.id) {
        this.editing.set(null);
        this.dialogOpen.set(false);
      }
      yield this.reload();
      this.toast.success("Cost removed");
    });
  }
  /** The ledger as CSV, for the accountant — same recipe as the invoice export. */
  exportCsv() {
    const rows = [["Date", "Category", "Description", "Vendor", "Job", "Client", "Rebilled", "Amount"]];
    for (const r of this.rows()) {
      rows.push([
        r.spent_on,
        r.category,
        r.description.replace(/"/g, '""'),
        (r.vendor ?? "").replace(/"/g, '""'),
        r.booking_ref ?? "",
        (r.client_name ?? "").replace(/"/g, '""'),
        r.billable ? "yes" : "no",
        Number(r.amount).toFixed(2)
      ]);
    }
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `expenses-${this.year()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function ExpensesAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExpensesAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpensesAdminComponent, selectors: [["app-expenses-admin"]], decls: 18, vars: 5, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], ["name", "year", 1, "year-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "btn", "btn--primary", 3, "click"], [1, "loading"], [3, "openChange", "saved", "open", "expense"], [1, "spinner"], [1, "summary"], [1, "cols"], [1, "card"], [1, "card__head"], [1, "card__title"], [1, "empty-line"], [1, "table-wrap"], [1, "cats"], [1, "muted"], [1, "summary__card"], [1, "summary__label"], [1, "summary__val"], [1, "summary__val", "summary__val--cost"], [1, "summary__card", "summary__card--hero"], [1, "summary__note"], [1, "table"], [1, "num"], ["data-label", "Month"], ["data-label", "Income", 1, "num"], ["data-label", "Costs", 1, "num", "num--cost"], ["data-label", "Profit", 1, "num", "num--total"], [1, "cat"], [1, "cat__top"], [1, "cat__name"], [1, "cat__amt"], [1, "cat__bar"], [1, "cat__fill"], ["data-label", "Client"], ["data-label", "Date"], ["data-label", "Category"], [1, "chip"], ["data-label", "What", 1, "ellipsis"], [1, "chip", "chip--bill"], [1, "chip", "chip--todo"], ["data-label", "Job"], [1, "joblink", 3, "routerLink"], ["data-label", "Amount", 1, "num", "num--cost"], ["data-label", "", 1, "cell--actions"], [1, "link-btn", 3, "click"], [1, "link-btn", "link-btn--danger", 3, "click"]], template: function ExpensesAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Costs & profit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "What the work cost you, and what you actually kept");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "select", 5);
        \u0275\u0275listener("ngModelChange", function ExpensesAdminComponent_Template_select_ngModelChange_8_listener($event) {
          return ctx.setYear($event);
        });
        \u0275\u0275repeaterCreate(9, ExpensesAdminComponent_For_10_Template, 2, 2, "option", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function ExpensesAdminComponent_Template_button_click_11_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275text(12, "Export CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function ExpensesAdminComponent_Template_button_click_13_listener() {
          return ctx.openDialog();
        });
        \u0275\u0275text(14, "+ Add a cost");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, ExpensesAdminComponent_Conditional_15_Template, 2, 0, "div", 9)(16, ExpensesAdminComponent_Conditional_16_Template, 30, 7);
        \u0275\u0275elementStart(17, "app-expense-dialog", 10);
        \u0275\u0275twoWayListener("openChange", function ExpensesAdminComponent_Template_app_expense_dialog_openChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dialogOpen, $event) || (ctx.dialogOpen = $event);
          return $event;
        });
        \u0275\u0275listener("saved", function ExpensesAdminComponent_Template_app_expense_dialog_saved_17_listener() {
          return ctx.reload();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.year());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.years());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.rows().length === 0);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 15 : 16);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.dialogOpen);
        \u0275\u0275property("expense", ctx.editing());
      }
    }, dependencies: [DatePipe, CurrencyPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, ExpenseDialogComponent], styles: [`

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
  max-width: 1400px;
}
.year-select[_ngcontent-%COMP%] {
  padding: 8px 30px 8px 12px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  color: #0f172a;
  background: #ffffff;
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%236b7280' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
}
.summary[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}
.summary__card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.summary__card--hero[_ngcontent-%COMP%] {
  border-color: #F4A922;
  box-shadow: 0 2px 10px rgba(244, 169, 34, 0.14);
}
.summary__label[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
}
.summary__val[_ngcontent-%COMP%] {
  font-size: 21px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
}
.summary__val--ok[_ngcontent-%COMP%] {
  color: #16a34a;
}
.summary__val--due[_ngcontent-%COMP%] {
  color: #ef4444;
}
.summary__val--cost[_ngcontent-%COMP%] {
  color: #ef4444;
}
.summary__note[_ngcontent-%COMP%] {
  font-size: 10.5px;
  color: #94a3b8;
  font-weight: 600;
}
.card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 16px;
}
.card__head[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.card__title[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}
.cols[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
}
@media (max-width: 980px) {
  .cols[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.cols[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.exform__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 14px;
}
.exform__grid[_ngcontent-%COMP%]   .field--wide[_ngcontent-%COMP%] {
  grid-column: span 2;
}
@media (max-width: 620px) {
  .exform__grid[_ngcontent-%COMP%]   .field--wide[_ngcontent-%COMP%] {
    grid-column: span 1;
  }
}
.exform__actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
}
.opt[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-weight: 400;
  font-size: 11px;
}
.check--inline[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 12.5px;
  color: #475569;
  cursor: pointer;
}
.check--inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  accent-color: #F4A922;
  cursor: pointer;
}
.table-wrap[_ngcontent-%COMP%] {
  overflow-x: auto;
}
.table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  text-align: left;
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #94a3b8;
  padding: 0 10px 8px;
  white-space: nowrap;
}
.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 10px;
  border-top: 1px solid #e2e8f0;
  color: #0f172a;
  vertical-align: middle;
}
.table[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {
  text-align: right;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.table[_ngcontent-%COMP%]   .num--cost[_ngcontent-%COMP%] {
  color: #ef4444;
}
.table[_ngcontent-%COMP%]   .num--total[_ngcontent-%COMP%] {
  font-weight: 800;
  color: #16a34a;
}
.table[_ngcontent-%COMP%]   .num--loss[_ngcontent-%COMP%] {
  color: #ef4444;
}
.table[_ngcontent-%COMP%]   .ellipsis[_ngcontent-%COMP%] {
  max-width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.table[_ngcontent-%COMP%]   .cell--actions[_ngcontent-%COMP%] {
  text-align: right;
  white-space: nowrap;
}
.chip[_ngcontent-%COMP%] {
  display: inline-block;
  font-size: 10.5px;
  font-weight: 700;
  background: #eef2f6;
  color: #475569;
  padding: 2px 8px;
  border-radius: 10px;
}
.chip--bill[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #166534;
  margin-left: 6px;
}
.joblink[_ngcontent-%COMP%] {
  color: #F4A922;
  font-weight: 700;
  text-decoration: none;
}
.joblink[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.cats[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cat__top[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 5px;
}
.cat__name[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
}
.cat__amt[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 800;
  color: #0f172a;
  font-variant-numeric: tabular-nums;
}
.cat__bar[_ngcontent-%COMP%] {
  height: 7px;
  background: #f8fafc;
  border-radius: 4px;
  overflow: hidden;
}
.cat__fill[_ngcontent-%COMP%] {
  height: 100%;
  background: #F4A922;
  border-radius: 4px;
}
.empty-line[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #94a3b8;
  margin: 0;
}
.muted[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-size: 12px;
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
@media (max-width: 760px) {
  thead[_ngcontent-%COMP%] {
    display: none;
  }
  tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
    display: block;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 10px 14px;
    margin: 0 0 10px;
  }
  tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0;
    border: none;
    text-align: right;
    white-space: normal;
  }
  tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {
    border-top: 1px solid #e2e8f0;
  }
  tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {
    content: attr(data-label);
    margin-right: auto;
    flex: none;
    font-size: 12px;
    font-weight: 600;
    color: #475569;
    text-align: left;
  }
  tbody[_ngcontent-%COMP%]   td[data-label][_ngcontent-%COMP%] {
    max-width: none;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
  tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
  tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%]::before {
    content: none;
  }
}
.chip--todo[_ngcontent-%COMP%] {
  background: rgba(245, 158, 11, 0.16);
  color: #b45309;
  margin-left: 6px;
}
/*# sourceMappingURL=expenses-admin.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpensesAdminComponent, { className: "ExpensesAdminComponent", filePath: "src/app/booking/platform/expenses/expenses-admin.component.ts", lineNumber: 30 });
})();
export {
  ExpensesAdminComponent
};
//# sourceMappingURL=chunk-C3CQHYTP.js.map
