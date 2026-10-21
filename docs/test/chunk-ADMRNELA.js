import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingAdminService
} from "./chunk-3T6U65XO.js";
import {
  BookingDataService
} from "./chunk-EEPGGCLM.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-RKKFBZE5.js";
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-JW5UDKQ7.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/dashboard/dashboard.component.ts
var _c0 = () => ({ tab: "payments" });
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.staff_id;
function DashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_14_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, "In production");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.inProduction());
  }
}
function DashboardComponent_Conditional_14_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 15)(2, "h2", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 30);
    \u0275\u0275text(5, "Costs & profit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "div", 32)(8, "span", 33);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 34);
    \u0275\u0275text(12, "Income");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 35);
    \u0275\u0275text(14, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 32)(16, "span", 36);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 34);
    \u0275\u0275text(20, "Costs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 35);
    \u0275\u0275text(22, "=");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 37)(24, "span", 33);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 34);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Profit \xB7 ", ctx_r1.taxYear, " to date");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 9, ctx_r1.ytdIncome(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(18, 14, ctx_r1.ytdExpenses(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("pl__val--ok", ctx_r1.ytdProfit() >= 0)("pl__val--loss", ctx_r1.ytdProfit() < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(26, 19, ctx_r1.ytdProfit(), "EUR", "symbol", "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Profit \xB7 ", ctx_r1.margin(), "% margin");
  }
}
function DashboardComponent_Conditional_14_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.whoLabel(), " \xB7 ", \u0275\u0275pipeBind4(1, 2, ctx_r1.collected(), "EUR", "symbol", "1.0-0"), " received, by the date each payment arrived. ");
  }
}
function DashboardComponent_Conditional_14_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
    \u0275\u0275pipe(2, "currency");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.whoLabel(), " \xB7 ", \u0275\u0275pipeBind4(1, 3, ctx_r1.workGross(), "EUR", "symbol", "1.0-0"), " billed (gross) \xB7 ", \u0275\u0275pipeBind4(2, 8, ctx_r1.workNet(), "EUR", "symbol", "1.0-0"), " net of expenses, by the date the work happened. ");
  }
}
function DashboardComponent_Conditional_14_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39);
    \u0275\u0275element(5, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.total > 0 ? \u0275\u0275pipeBind4(3, 4, m_r3.total, "EUR", "symbol", "1.0-0") : "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", ctx_r1.barHeight(m_r3.total));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.label);
  }
}
function DashboardComponent_Conditional_14_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Nothing scheduled.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_14_Conditional_48_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 46)(9, "div", 47);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 48);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_15_0;
    const b_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 10, b_r4.start_at, "d"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 13, b_r4.start_at, "MMM"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_14_0 = b_r4.client_name) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 16, b_r4.start_at, "HH:mm"), " \xB7 ", (tmp_15_0 = b_r4.service_name) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : b_r4.title, "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill--unpaid", b_r4.payment_status === "unpaid")("pill--partial", b_r4.payment_status === "partial");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r4.payment_status === "paid" ? "Paid" : b_r4.payment_status === "partial" ? "Deposit" : b_r4.payment_status === "external" ? "Synced" : "Unpaid", " ");
  }
}
function DashboardComponent_Conditional_14_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 25);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_14_Conditional_48_For_2_Template, 16, 19, "li", 42, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.upcoming().slice(0, 6));
  }
}
function DashboardComponent_Conditional_14_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26)(1, "span");
    \u0275\u0275text(2, "Card payments are off \u2014 connect Stripe to let clients pay online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4, "Set up \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function DashboardComponent_Conditional_14_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "All clear \u2014 nothing waiting on you.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_14_Conditional_55_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 58);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_14_Conditional_55_For_6_Template_button_click_9_listener() {
      const b_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approve(b_r6));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 59);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_14_Conditional_55_For_6_Template_button_click_11_listener() {
      const b_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.decline(b_r6));
    });
    \u0275\u0275text(12, "Decline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const b_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = b_r6.client_name) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 6, b_r6.start_at, "EEE d MMM, HH:mm"), " \xB7 ", \u0275\u0275pipeBind4(7, 9, b_r6.price_total, "EUR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.busyId() === b_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.busyId() === b_r6.id ? "\u2026" : "Confirm", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busyId() === b_r6.id);
  }
}
function DashboardComponent_Conditional_14_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 51);
    \u0275\u0275text(2, "Bookings to confirm ");
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, DashboardComponent_Conditional_14_Conditional_55_For_6_Template, 13, 14, "div", 53, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.requests().length);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.requests());
  }
}
function DashboardComponent_Conditional_14_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5, "Review \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(3, 1, ctx_r1.outstanding(), "EUR", "symbol", "1.0-0"), " outstanding across issued invoices");
  }
}
function DashboardComponent_Conditional_14_Conditional_57_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const w_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = w_r7.staff_name) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "Unassigned");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind4(6, 3, w_r7.cash, "EUR", "symbol", "1.0-0"), " received \xB7 ", \u0275\u0275pipeBind4(7, 8, w_r7.gross, "EUR", "symbol", "1.0-0"), " billed");
  }
}
function DashboardComponent_Conditional_14_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 51);
    \u0275\u0275text(2, "Earnings by worker");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, DashboardComponent_Conditional_14_Conditional_57_For_4_Template, 8, 13, "div", 53, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.byWorker());
  }
}
function DashboardComponent_Conditional_14_Conditional_58_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const \u0275$index_287_r9 = ctx.$index;
    const \u0275$count_287_r10 = ctx.$count;
    \u0275\u0275textInterpolate3(" ", s_r8.n, " ", s_r8.label.toLowerCase(), "", \u0275$index_287_r9 === \u0275$count_287_r10 - 1 ? "" : " \xB7 ", " ");
  }
}
function DashboardComponent_Conditional_14_Conditional_58_ForEmpty_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " nothing in production ");
  }
}
function DashboardComponent_Conditional_14_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29)(1, "span");
    \u0275\u0275repeaterCreate(2, DashboardComponent_Conditional_14_Conditional_58_For_3_Template, 1, 3, null, null, _forTrack0, false, DashboardComponent_Conditional_14_Conditional_58_ForEmpty_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6, "Work board \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.stageCounts());
  }
}
function DashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5, "Upcoming \xB7 30 days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 12);
    \u0275\u0275text(11, "Collected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275text(17, "Outstanding");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "span", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 12);
    \u0275\u0275text(22, "To confirm");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, DashboardComponent_Conditional_14_Conditional_23_Template, 5, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, DashboardComponent_Conditional_14_Conditional_24_Template, 29, 24, "section", 13);
    \u0275\u0275elementStart(25, "section", 14)(26, "div", 15)(27, "h2", 16);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17)(30, "button", 18);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_14_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.basis.set("cash"));
    });
    \u0275\u0275text(31, "Cash received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 18);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_14_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.basis.set("work"));
    });
    \u0275\u0275text(33, "Work done");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "p", 19);
    \u0275\u0275template(35, DashboardComponent_Conditional_14_Conditional_35_Template, 2, 7)(36, DashboardComponent_Conditional_14_Conditional_36_Template, 3, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 20);
    \u0275\u0275repeaterCreate(38, DashboardComponent_Conditional_14_For_39_Template, 8, 9, "div", 21, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 22)(41, "section", 23)(42, "div", 15)(43, "h2", 16);
    \u0275\u0275text(44, "Upcoming bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 24);
    \u0275\u0275text(46, "All");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, DashboardComponent_Conditional_14_Conditional_47_Template, 2, 0, "p", 19)(48, DashboardComponent_Conditional_14_Conditional_48_Template, 3, 0, "ul", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "section", 23)(50, "div", 15)(51, "h2", 16);
    \u0275\u0275text(52, "Needs your attention");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, DashboardComponent_Conditional_14_Conditional_53_Template, 5, 2, "a", 26)(54, DashboardComponent_Conditional_14_Conditional_54_Template, 2, 0, "p", 19)(55, DashboardComponent_Conditional_14_Conditional_55_Template, 7, 1, "div", 27)(56, DashboardComponent_Conditional_14_Conditional_56_Template, 6, 6, "a", 28)(57, DashboardComponent_Conditional_14_Conditional_57_Template, 5, 0, "div", 27)(58, DashboardComponent_Conditional_14_Conditional_58_Template, 7, 1, "a", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.upcoming30());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 23, ctx_r1.collected(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("kpi--warn", ctx_r1.outstanding() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 28, ctx_r1.outstanding(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("kpi--accent", ctx_r1.requests().length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.requests().length);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.workEnabled() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasExpenses() ? 24 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.chartTitle());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg__btn--active", ctx_r1.basis() === "cash");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg__btn--active", ctx_r1.basis() === "work");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.basis() === "cash" ? 35 : 36);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.revenueByMonth());
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.upcoming().length === 0 ? 47 : 48);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.cardSetupNeeded() ? 53 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requests().length === 0 && ctx_r1.outstanding() === 0 && !ctx_r1.cardSetupNeeded() ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requests().length > 0 ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.outstanding() > 0 ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showWorkerSplit() ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.workEnabled() && ctx_r1.inProduction() > 0 ? 58 : -1);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.cardPaymentsReady = signal(void 0);
    this.cardSetupNeeded = computed(() => this.cardPaymentsReady() === false);
    this.jobs = signal([]);
    this.tasks = signal([]);
    this.busyId = signal(null);
    this.earnings = signal(null);
    this.staff = signal([]);
    this.who = computed(() => this.auth.staffId() ?? "");
    this.basis = signal("cash");
    this.profit = signal(null);
    this.taxYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.ytdIncome = computed(() => this.profit()?.totals.income ?? 0);
    this.ytdExpenses = computed(() => this.profit()?.totals.expenses ?? 0);
    this.ytdProfit = computed(() => this.profit()?.totals.profit ?? 0);
    this.hasExpenses = computed(() => this.ytdExpenses() > 0);
    this.margin = computed(() => {
      const inc = this.ytdIncome();
      return inc > 0 ? Math.round(this.ytdProfit() / inc * 100) : 0;
    });
    this.CONFIRMED = ["booked", "in_progress", "done"];
    this.confirmed = computed(() => this.data.bookings().filter((b) => this.CONFIRMED.includes(b.status) && !b.is_external));
    this.now = /* @__PURE__ */ new Date();
    this.greeting = (() => {
      const h = (/* @__PURE__ */ new Date()).getHours();
      return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
    })();
    this.requests = computed(() => this.data.bookings().filter((b) => b.status === "pending"));
    this.upcoming = computed(() => {
      const now = Date.now();
      return this.confirmed().filter((b) => new Date(b.start_at).getTime() >= now).sort((a, b) => new Date(a.start_at).getTime() - new Date(b.start_at).getTime());
    });
    this.upcoming30 = computed(() => {
      const limit = Date.now() + 30 * 864e5;
      return this.upcoming().filter((b) => new Date(b.start_at).getTime() <= limit).length;
    });
    this.collected = computed(() => this.earnings()?.totals.cash ?? 0);
    this.outstanding = computed(() => this.earnings()?.totals.outstanding ?? 0);
    this.workGross = computed(() => this.earnings()?.totals.work_done_gross ?? 0);
    this.workNet = computed(() => this.earnings()?.totals.work_done_net ?? 0);
    this.whoLabel = computed(() => {
      const id = this.who();
      return id ? this.staff().find((s) => s.id === id)?.name ?? "Worker" : "Everyone";
    });
    this.chartTitle = computed(() => this.basis() === "cash" ? "Cash received \xB7 last 6 months" : "Work done \xB7 last 6 months");
    this.revenueByMonth = computed(() => {
      const e = this.earnings();
      const src = !e ? [] : this.basis() === "cash" ? e.cash_by_month : e.work_done_by_month;
      const map = new Map(src.map((m) => [m.month, Number(m.amount)]));
      const ref = /* @__PURE__ */ new Date();
      return Array.from({ length: 6 }, (_, i) => {
        const d = new Date(ref.getFullYear(), ref.getMonth() - (5 - i), 1);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
        return { label: d.toLocaleDateString("en", { month: "short" }), total: map.get(key) ?? 0 };
      });
    });
    this.maxMonth = computed(() => Math.max(1, ...this.revenueByMonth().map((m) => m.total)));
    this.byWorker = computed(() => this.earnings()?.by_worker ?? []);
    this.showWorkerSplit = computed(() => !this.who() && this.byWorker().length > 1);
    this.stages = signal([]);
    this.doneKeys = computed(() => new Set(this.stages().filter((s) => s.is_done).map((s) => s.key)));
    this.inProduction = computed(() => this.jobs().filter((j) => !this.doneKeys().has(j.production_status)).length);
    this.openTasks = computed(() => this.tasks().filter((t) => !t.is_done).length);
    this.stageCounts = computed(() => {
      const counts = /* @__PURE__ */ new Map();
      for (const j of this.jobs())
        counts.set(j.production_status, (counts.get(j.production_status) ?? 0) + 1);
      return this.stages().filter((s) => !s.is_done).map((s) => ({ label: s.label, n: counts.get(s.key) ?? 0 })).filter((x) => x.n > 0);
    });
    this.workEnabled = computed(() => !!this.auth.features().work_board);
    effect(() => {
      this.auth.staffId();
      void this.loadEarnings();
      void this.loadProfit();
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (org) {
        this.staff.set(yield this.admin.listStaff(org));
        const st = yield this.admin.getOrgSettings(org);
        this.cardPaymentsReady.set(!!(st?.stripe_charges_enabled || st?.platform_charges_allowed));
      }
      yield Promise.all([this.loadProduction(), this.loadEarnings(), this.loadProfit()]);
    });
  }
  loadProduction() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      const [jobs, tasks, stages] = yield Promise.all([
        this.admin.loadJobs(org),
        this.admin.loadTasks(org),
        this.admin.listWorkStages(org)
      ]);
      this.jobs.set(jobs);
      this.tasks.set(tasks);
      this.stages.set(stages);
    });
  }
  /** Re-read the money whenever the "who" filter changes. The basis toggle needs no
   *  refetch — both bases come back in the same response. */
  loadEarnings() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      this.earnings.set(yield this.data.getEarnings(org, this.who() || null));
    });
  }
  /** Year to date, org-wide. */
  loadProfit() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      const y = this.taxYear;
      this.profit.set(yield this.data.getProfit(org, `${y}-01-01`, `${y}-12-31`));
    });
  }
  barHeight(total) {
    return `${Math.round(total / this.maxMonth() * 100)}%`;
  }
  approve(b) {
    return __async(this, null, function* () {
      this.busyId.set(b.id);
      try {
        const res = yield this.data.approveRequest(b.id);
        if (res.error === "slot_taken")
          this.toast.error(`${b.booking_ref}: that slot was just taken \u2014 decline this one.`);
        else if (res.error)
          this.toast.error(`Could not approve ${b.booking_ref}.`);
        else {
          this.toast.success(`${b.booking_ref} approved \u2014 added to your calendar`);
          yield this.loadProduction();
          yield this.loadEarnings();
        }
      } catch {
        this.toast.error(`Could not approve ${b.booking_ref}. Please try again.`);
      } finally {
        this.busyId.set(null);
      }
    });
  }
  decline(b) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.ask({ title: "Decline request", message: `Decline ${b.booking_ref}?`, confirmLabel: "Decline", danger: true })))
        return;
      this.busyId.set(b.id);
      try {
        yield this.data.declineRequest(b.id);
        this.toast.info(`${b.booking_ref} declined`);
      } catch {
        this.toast.error(`Could not decline ${b.booking_ref}.`);
      } finally {
        this.busyId.set(null);
      }
    });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 15, vars: 6, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], ["routerLink", "/bookings/list", 1, "btn", "btn--ghost"], ["routerLink", "/bookings/new", 1, "btn", "btn--primary"], [1, "loading"], [1, "spinner"], [1, "kpis"], [1, "kpi"], [1, "kpi__value"], [1, "kpi__label"], [1, "card", "pl"], [1, "card", "chart"], [1, "card__head"], [1, "card__title"], [1, "seg"], [1, "seg__btn", 3, "click"], [1, "empty-line"], [1, "chart__bars"], [1, "chart__col"], [1, "grid"], [1, "card"], ["routerLink", "/bookings/list", 1, "card__link"], [1, "list"], ["routerLink", "/bookings/settings", 1, "attn-line", "attn-line--warn", 3, "queryParams"], [1, "attn"], ["routerLink", "/bookings/invoices", 1, "attn-line"], ["routerLink", "/bookings/work", 1, "attn-line"], ["routerLink", "/bookings/expenses", 1, "card__link"], [1, "pl__row"], [1, "pl__stat"], [1, "pl__val"], [1, "pl__label"], [1, "pl__op"], [1, "pl__val", "pl__val--cost"], [1, "pl__stat", "pl__stat--hero"], [1, "chart__amount"], [1, "chart__track"], [1, "chart__bar"], [1, "chart__label"], [1, "row"], [1, "row__date"], [1, "row__day"], [1, "row__mon"], [1, "row__main"], [1, "row__who"], [1, "row__meta"], [1, "pill"], [1, "attn-line__cta"], [1, "attn__head"], [1, "attn__count"], [1, "req"], [1, "req__main"], [1, "req__who"], [1, "req__meta"], [1, "req__actions"], [1, "btn", "btn--sm", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--sm", "btn--ghost", 3, "click", "disabled"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "a", 5);
        \u0275\u0275text(10, "All bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 6);
        \u0275\u0275text(12, "+ New booking");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(13, DashboardComponent_Conditional_13_Template, 2, 0, "div", 7)(14, DashboardComponent_Conditional_14_Template, 59, 33);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.greeting);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, ctx.now, "EEEE, d MMMM y"));
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.data.loading() ? 13 : 14);
      }
    }, dependencies: [RouterLink, CurrencyPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  padding: 36px 48px;\n}\n@media (max-width: 900px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n.kpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 18px 22px;\n}\n.kpi__value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.kpi__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 6px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.kpi--warn[_ngcontent-%COMP%]   .kpi__value[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.kpi--accent[_ngcontent-%COMP%] {\n  border-color: #F4A922;\n}\n.kpi--accent[_ngcontent-%COMP%]   .kpi__value[_ngcontent-%COMP%] {\n  color: #F4A922;\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px 22px;\n  margin-bottom: 24px;\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  text-decoration: none;\n}\n.card__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.who-select[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  color: #475569;\n  background: #ffffff;\n  cursor: pointer;\n}\n.who-select[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.who-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.seg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n  padding: 3px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.seg__btn[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.seg__btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.seg__btn--active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f172a;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);\n}\n.chart__bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  height: 160px;\n}\n.chart__col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n.chart__amount[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #475569;\n  height: 16px;\n}\n.chart__track[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  max-width: 46px;\n  display: flex;\n  align-items: flex-end;\n  margin: 4px 0 8px;\n}\n.chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2px;\n  background:\n    linear-gradient(\n      to top,\n      #F4A922,\n      #f7bb4d);\n  border-radius: 6px 6px 0 0;\n  transition: height 0.15s ease;\n}\n.chart__label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 860px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.empty-line[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 4px 0;\n}\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 11px 0;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n}\n.row__date[_ngcontent-%COMP%] {\n  width: 42px;\n  flex-shrink: 0;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.row__day[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.row__mon[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n.row__main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.row__who[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.row__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 1px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pill[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #dcfce7;\n  color: #16a34a;\n}\n.pill--partial[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.pill--unpaid[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.attn[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.attn__head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.attn__count[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n  font-size: 11px;\n  font-weight: 700;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.req[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n}\n.req[_ngcontent-%COMP%]    + .req[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n}\n.req__main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.req__who[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.req__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n}\n.req__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.attn-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 14px;\n  margin-top: 10px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #475569;\n  text-decoration: none;\n}\n.attn-line[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.attn-line__cta[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #F4A922;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  border-color: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.92);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 7px 13px;\n  font-size: 12.5px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2.5px solid #e2e8f0;\n  border-top-color: #F4A922;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pl__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px 18px;\n}\n.pl__stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.pl__stat--hero[_ngcontent-%COMP%] {\n  margin-left: auto;\n  text-align: right;\n}\n@media (max-width: 620px) {\n  .pl__stat--hero[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: left;\n  }\n}\n.pl__val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n  font-variant-numeric: tabular-nums;\n}\n.pl__val--cost[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.pl__val--ok[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.pl__val--loss[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.pl__label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.pl__op[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #94a3b8;\n  align-self: center;\n}\n.attn-line--warn[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.1);\n  border-color: rgba(244, 169, 34, 0.45);\n  color: #92400e;\n}\n.attn-line--warn[_ngcontent-%COMP%]   .attn-line__cta[_ngcontent-%COMP%] {\n  color: #92400e;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/booking/platform/dashboard/dashboard.component.ts", lineNumber: 20 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-ADMRNELA.js.map
