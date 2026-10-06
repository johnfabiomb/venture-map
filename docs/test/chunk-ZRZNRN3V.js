import {
  EXPENSE_CATEGORIES
} from "./chunk-LMD6DKTL.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingDataService
} from "./chunk-QYHUJY36.js";
import "./chunk-F57EG5LQ.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-76D3SO4I.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
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
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.month;
var _forTrack2 = ($index, $item) => $item.category;
var _forTrack3 = ($index, $item) => $item.client_name;
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
function ExpensesAdminComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 43)(8, "span", 44);
    \u0275\u0275text(9, "Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 47)(14, "span", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 45);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 43)(20, "span", 44);
    \u0275\u0275text(21, "Of which rebilled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 45);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 48);
    \u0275\u0275text(26, "already inside Income");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 9, t_r3.income, "EUR", "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind4(12, 14, t_r3.expenses, "EUR", "symbol", "1.0-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Profit ", ctx_r3.year(), "");
    \u0275\u0275advance();
    \u0275\u0275classProp("summary__val--ok", t_r3.profit >= 0)("summary__val--due", t_r3.profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(18, 19, t_r3.profit, "EUR", "symbol", "1.0-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(24, 24, t_r3.billable_expenses, "EUR", "symbol", "1.0-2"));
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ExpensesAdminComponent_Conditional_14_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.resetForm());
    });
    \u0275\u0275text(1, "Cancel edit");
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_14_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "option", 6);
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("value", c_r6);
  }
}
function ExpensesAdminComponent_Conditional_14_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r7 = ctx.$implicit;
    \u0275\u0275property("value", j_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r7.booking_ref, " \xB7 ", j_r7.title, "");
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Nothing in ", ctx_r3.year(), " yet.");
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_56_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 54);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 55);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.monthLabel(m_r8.month));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 7, m_r8.income, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", m_r8.expenses ? "\u2212" : "", "", \u0275\u0275pipeBind4(8, 12, m_r8.expenses, "EUR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("num--loss", m_r8.profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 17, m_r8.profit, "EUR", "symbol", "1.0-0"));
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 50)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 51);
    \u0275\u0275text(7, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 51);
    \u0275\u0275text(9, "Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 51);
    \u0275\u0275text(11, "Profit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ExpensesAdminComponent_Conditional_14_Conditional_56_For_14_Template, 12, 22, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r3.byMonth());
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No costs recorded in ", ctx_r3.year(), ".");
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_62_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 56)(1, "div", 57)(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60);
    \u0275\u0275element(8, "div", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r9.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 4, c_r9.amount, "EUR", "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r3.categoryShare(c_r9.amount), "%");
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 41);
    \u0275\u0275repeaterCreate(1, ExpensesAdminComponent_Conditional_14_Conditional_62_For_2_Template, 9, 9, "li", 56, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.byCategory());
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, "Nothing to compare yet.");
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_70_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 54);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 55);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("muted", !c_r10.client_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r10.client_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 9, c_r10.income, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r10.expenses ? "\u2212" : "", "", \u0275\u0275pipeBind4(8, 14, c_r10.expenses, "EUR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("num--loss", c_r10.profit < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 19, c_r10.profit, "EUR", "symbol", "1.0-0"));
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 50)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 51);
    \u0275\u0275text(7, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 51);
    \u0275\u0275text(9, "Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 51);
    \u0275\u0275text(11, "Profit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ExpensesAdminComponent_Conditional_14_Conditional_70_For_14_Template, 12, 24, "tr", null, _forTrack3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r3.byClient());
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No costs recorded in ", ctx_r3.year(), ". Add one above and your profit figures come alive.");
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", r_r12.vendor, "");
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "rebilled");
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, r_r12.booking_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r12.booking_ref);
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "General");
    \u0275\u0275elementEnd();
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 64)(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 66);
    \u0275\u0275text(8);
    \u0275\u0275template(9, ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Conditional_9_Template, 2, 1, "span", 42)(10, ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Conditional_10_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 68);
    \u0275\u0275template(12, ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Conditional_12_Template, 2, 4, "a", 69)(13, ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Conditional_13_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 70);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 71)(18, "button", 49);
    \u0275\u0275listener("click", function ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Template_button_click_18_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.startEdit(r_r12));
    });
    \u0275\u0275text(19, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 72);
    \u0275\u0275listener("click", function ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Template_button_click_20_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.remove(r_r12));
    });
    \u0275\u0275text(21, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, r_r12.spent_on, "d MMM y"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r12.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r12.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r12.vendor ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r12.billable ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r12.booking_ref ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind4(16, 10, r_r12.amount, "EUR", "symbol", "1.2-2"), "");
  }
}
function ExpensesAdminComponent_Conditional_14_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 50)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementStart(12, "th", 51);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, ExpensesAdminComponent_Conditional_14_Conditional_78_For_17_Template, 22, 15, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r3.rows());
  }
}
function ExpensesAdminComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ExpensesAdminComponent_Conditional_14_Conditional_0_Template, 27, 29, "div", 10);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "h2", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExpensesAdminComponent_Conditional_14_Conditional_5_Template, 2, 0, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 15);
    \u0275\u0275listener("ngSubmit", function ExpensesAdminComponent_Conditional_14_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 17)(9, "label", 18);
    \u0275\u0275text(10, "Amount (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesAdminComponent_Conditional_14_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.fAmount, $event) || (ctx_r3.fAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 17)(13, "label", 20);
    \u0275\u0275text(14, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesAdminComponent_Conditional_14_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.fCategory, $event) || (ctx_r3.fCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "datalist", 22);
    \u0275\u0275repeaterCreate(17, ExpensesAdminComponent_Conditional_14_For_18_Template, 1, 1, "option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 17)(20, "label", 23);
    \u0275\u0275text(21, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesAdminComponent_Conditional_14_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.fDate, $event) || (ctx_r3.fDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 25)(24, "label", 26);
    \u0275\u0275text(25, "What was it?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesAdminComponent_Conditional_14_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.fDescription, $event) || (ctx_r3.fDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 17)(28, "label", 28);
    \u0275\u0275text(29, "Paid to ");
    \u0275\u0275elementStart(30, "span", 29);
    \u0275\u0275text(31, "optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesAdminComponent_Conditional_14_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.fVendor, $event) || (ctx_r3.fVendor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 25)(34, "label", 31);
    \u0275\u0275text(35, "Job ");
    \u0275\u0275elementStart(36, "span", 29);
    \u0275\u0275text(37, "optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesAdminComponent_Conditional_14_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.fBookingId, $event) || (ctx_r3.fBookingId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(39, "option", 33);
    \u0275\u0275text(40, "No job \u2014 a general business cost");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(41, ExpensesAdminComponent_Conditional_14_For_42_Template, 2, 3, "option", 6, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "label", 34)(44, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ExpensesAdminComponent_Conditional_14_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.fBillable, $event) || (ctx_r3.fBillable = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Rebilled to the client on the invoice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 36)(48, "button", 37);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 38)(51, "div", 11)(52, "div", 12)(53, "h2", 13);
    \u0275\u0275text(54, "Month by month");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, ExpensesAdminComponent_Conditional_14_Conditional_55_Template, 2, 1, "p", 39)(56, ExpensesAdminComponent_Conditional_14_Conditional_56_Template, 15, 0, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 11)(58, "div", 12)(59, "h2", 13);
    \u0275\u0275text(60, "By category");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, ExpensesAdminComponent_Conditional_14_Conditional_61_Template, 2, 1, "p", 39)(62, ExpensesAdminComponent_Conditional_14_Conditional_62_Template, 3, 0, "ul", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 11)(64, "div", 12)(65, "h2", 13);
    \u0275\u0275text(66, "By client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 42);
    \u0275\u0275text(68, "Which work is actually worth it");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, ExpensesAdminComponent_Conditional_14_Conditional_69_Template, 2, 0, "p", 39)(70, ExpensesAdminComponent_Conditional_14_Conditional_70_Template, 15, 0, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 11)(72, "div", 12)(73, "h2", 13);
    \u0275\u0275text(74, "Every cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 42);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(77, ExpensesAdminComponent_Conditional_14_Conditional_77_Template, 2, 1, "p", 39)(78, ExpensesAdminComponent_Conditional_14_Conditional_78_Template, 18, 0, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r3.totals()) ? 0 : -1, tmp_1_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.editingId ? "Edit cost" : "Add a cost");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.editingId ? 5 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.fAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.fCategory);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.fDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.fDescription);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.fVendor);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.fBookingId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.jobs());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.fBillable);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.saving() ? "Saving\u2026" : ctx_r3.editingId ? "Save changes" : "Add cost", " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.byMonth().length === 0 ? 55 : 56);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.byCategory().length === 0 ? 61 : 62);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r3.byClient().length === 0 ? 69 : 70);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r3.rows().length, " item", ctx_r3.rows().length === 1 ? "" : "s", "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.rows().length === 0 ? 77 : 78);
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
    this.saving = signal(false);
    this.categories = EXPENSE_CATEGORIES;
    this.year = signal(String((/* @__PURE__ */ new Date()).getFullYear()));
    this.years = computed(() => {
      const now = (/* @__PURE__ */ new Date()).getFullYear();
      const seen = /* @__PURE__ */ new Set([String(now)]);
      for (const r of this.rows())
        seen.add(r.spent_on.slice(0, 4));
      return [...seen].sort((a, b) => b.localeCompare(a));
    });
    this.editingId = "";
    this.fAmount = null;
    this.fCategory = "Travel";
    this.fDescription = "";
    this.fVendor = "";
    this.fBookingId = "";
    this.fBillable = false;
    this.fDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    this.jobs = computed(() => [...this.data.bookings()].sort((a, b) => b.next_start_at.localeCompare(a.next_start_at)).slice(0, 150));
    this.totals = computed(() => this.profit()?.totals ?? null);
    this.byCategory = computed(() => this.profit()?.by_category ?? []);
    this.byMonth = computed(() => [...this.profit()?.by_month ?? []].reverse());
    this.byClient = computed(() => this.profit()?.by_client ?? []);
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
  // ── Form ─────────────────────────────────────────────────────────────────
  startEdit(r) {
    this.editingId = r.id;
    this.fAmount = Number(r.amount);
    this.fCategory = r.category;
    this.fDescription = r.description;
    this.fVendor = r.vendor ?? "";
    this.fBookingId = r.booking_id ?? "";
    this.fBillable = r.billable;
    this.fDate = r.spent_on;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  resetForm() {
    this.editingId = "";
    this.fAmount = null;
    this.fDescription = "";
    this.fVendor = "";
    this.fBookingId = "";
    this.fBillable = false;
    this.fDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  }
  save() {
    return __async(this, null, function* () {
      const amount = Number(this.fAmount);
      if (!isFinite(amount) || amount <= 0) {
        this.toast.error("Enter a valid amount.");
        return;
      }
      if (!this.fDescription.trim()) {
        this.toast.error("Say what the cost was for.");
        return;
      }
      const org = this.auth.orgId();
      if (!org) {
        this.toast.error("No organization context.");
        return;
      }
      this.saving.set(true);
      try {
        const res = yield this.data.saveExpense(org, {
          id: this.editingId || void 0,
          bookingId: this.fBookingId || null,
          category: this.fCategory,
          description: this.fDescription,
          amount,
          spentOn: this.fDate,
          vendor: this.fVendor || null,
          billable: this.fBillable
        });
        if (res.error) {
          this.toast.error("Could not save the cost.");
          return;
        }
        this.toast.success(this.editingId ? "Cost updated" : `\u20AC${amount.toFixed(2)} cost added`);
        this.resetForm();
        yield this.reload();
      } finally {
        this.saving.set(false);
      }
    });
  }
  remove(r) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.ask({
        title: "Remove cost",
        message: `Remove \u201C${r.description}\u201D (\u20AC${Number(r.amount).toFixed(2)})?`,
        confirmLabel: "Remove",
        danger: true
      })))
        return;
      yield this.data.deleteExpense(r.id);
      if (this.editingId === r.id)
        this.resetForm();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpensesAdminComponent, selectors: [["app-expenses-admin"]], decls: 15, vars: 3, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], ["name", "year", 1, "year-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "loading"], [1, "spinner"], [1, "summary"], [1, "card"], [1, "card__head"], [1, "card__title"], [1, "link-btn"], [1, "exform", 3, "ngSubmit"], [1, "exform__grid"], [1, "field"], ["for", "ex-amt"], ["id", "ex-amt", "type", "number", "name", "fAmount", "min", "0", "step", "0.01", "placeholder", "0.00", "required", "", 3, "ngModelChange", "ngModel"], ["for", "ex-cat"], ["id", "ex-cat", "name", "fCategory", "list", "expCats", "placeholder", "Travel", 3, "ngModelChange", "ngModel"], ["id", "expCats"], ["for", "ex-date"], ["id", "ex-date", "type", "date", "name", "fDate", 3, "ngModelChange", "ngModel"], [1, "field", "field--wide"], ["for", "ex-desc"], ["id", "ex-desc", "name", "fDescription", "placeholder", "e.g. Fuel to Zebbug, Adobe CC, drone repair", "required", "", 3, "ngModelChange", "ngModel"], ["for", "ex-vendor"], [1, "opt"], ["id", "ex-vendor", "name", "fVendor", "placeholder", "e.g. Circle K", 3, "ngModelChange", "ngModel"], ["for", "ex-job"], ["id", "ex-job", "name", "fBookingId", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "check", "check--inline"], ["type", "checkbox", "name", "fBillable", 3, "ngModelChange", "ngModel"], [1, "exform__actions"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], [1, "cols"], [1, "empty-line"], [1, "table-wrap"], [1, "cats"], [1, "muted"], [1, "summary__card"], [1, "summary__label"], [1, "summary__val"], [1, "summary__val", "summary__val--cost"], [1, "summary__card", "summary__card--hero"], [1, "summary__note"], [1, "link-btn", 3, "click"], [1, "table"], [1, "num"], ["data-label", "Month"], ["data-label", "Income", 1, "num"], ["data-label", "Costs", 1, "num", "num--cost"], ["data-label", "Profit", 1, "num", "num--total"], [1, "cat"], [1, "cat__top"], [1, "cat__name"], [1, "cat__amt"], [1, "cat__bar"], [1, "cat__fill"], ["data-label", "Client"], ["data-label", "Date"], ["data-label", "Category"], [1, "chip"], ["data-label", "What", 1, "ellipsis"], [1, "chip", "chip--bill"], ["data-label", "Job"], [1, "joblink", 3, "routerLink"], ["data-label", "Amount", 1, "num", "num--cost"], ["data-label", "", 1, "cell--actions"], [1, "link-btn", "link-btn--danger", 3, "click"]], template: function ExpensesAdminComponent_Template(rf, ctx) {
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
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(13, ExpensesAdminComponent_Conditional_13_Template, 2, 0, "div", 8)(14, ExpensesAdminComponent_Conditional_14_Template, 79, 18);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngModel", ctx.year());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.years());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.rows().length === 0);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 13 : 14);
      }
    }, dependencies: [DatePipe, CurrencyPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, RouterLink], styles: [`

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
/*# sourceMappingURL=expenses-admin.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpensesAdminComponent, { className: "ExpensesAdminComponent", filePath: "src/app/booking/platform/expenses/expenses-admin.component.ts", lineNumber: 29 });
})();
export {
  ExpensesAdminComponent
};
//# sourceMappingURL=chunk-ZRZNRN3V.js.map
