import {
  ConfirmService
} from "./chunk-2IDKTD3Z.js";
import {
  BookingAdminService
} from "./chunk-M5XBQEFL.js";
import {
  BookingDataService
} from "./chunk-54P4THQU.js";
import "./chunk-FSJG3SUO.js";
import {
  ToastService
} from "./chunk-C7UDYKXR.js";
import {
  BookingsAuthService
} from "./chunk-KKHOHJA2.js";
import "./chunk-F6LTA4RG.js";
import "./chunk-4746DPCT.js";
import {
  RouterLink
} from "./chunk-Q6APD67I.js";
import "./chunk-GHBBMOR7.js";
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-EBVVQ6Y2.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.staff_id;
function DashboardComponent_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.name);
  }
}
function DashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 9);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_9_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onWhoChange($event.target.value));
    });
    \u0275\u0275elementStart(1, "option", 10);
    \u0275\u0275text(2, "Everyone");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, DashboardComponent_Conditional_9_For_4_Template, 2, 2, "option", 11, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.who());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.staff());
  }
}
function DashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_15_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4, "In production");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.inProduction());
  }
}
function DashboardComponent_Conditional_15_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.whoLabel(), " \xB7 ", \u0275\u0275pipeBind4(1, 2, ctx_r1.collected(), "EUR", "symbol", "1.0-0"), " received, by the date each payment arrived. ");
  }
}
function DashboardComponent_Conditional_15_Conditional_35_Template(rf, ctx) {
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
function DashboardComponent_Conditional_15_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275element(5, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.total > 0 ? \u0275\u0275pipeBind4(3, 4, m_r5.total, "EUR", "symbol", "1.0-0") : "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", ctx_r1.barHeight(m_r5.total));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.label);
  }
}
function DashboardComponent_Conditional_15_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Nothing scheduled.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_15_Conditional_47_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 36)(1, "div", 37)(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 40)(9, "div", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 43);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_15_0;
    const b_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 10, b_r6.start_at, "d"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 13, b_r6.start_at, "MMM"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_14_0 = b_r6.client_name) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 16, b_r6.start_at, "HH:mm"), " \xB7 ", (tmp_15_0 = b_r6.service_name) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : b_r6.title, "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill--unpaid", b_r6.payment_status === "unpaid")("pill--partial", b_r6.payment_status === "partial");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r6.payment_status === "paid" ? "Paid" : b_r6.payment_status === "partial" ? "Deposit" : b_r6.payment_status === "external" ? "Synced" : "Unpaid", " ");
  }
}
function DashboardComponent_Conditional_15_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 28);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_15_Conditional_47_For_2_Template, 16, 19, "li", 36, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.upcoming().slice(0, 6));
  }
}
function DashboardComponent_Conditional_15_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "All clear \u2014 nothing waiting on you.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_15_Conditional_53_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 50)(9, "button", 51);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_15_Conditional_53_For_6_Template_button_click_9_listener() {
      const b_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approve(b_r8));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 52);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_15_Conditional_53_For_6_Template_button_click_11_listener() {
      const b_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.decline(b_r8));
    });
    \u0275\u0275text(12, "Decline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const b_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = b_r8.client_name) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 6, b_r8.start_at, "EEE d MMM, HH:mm"), " \xB7 ", \u0275\u0275pipeBind4(7, 9, b_r8.price_total, "EUR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.busyId() === b_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.busyId() === b_r8.id ? "\u2026" : "Confirm", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busyId() === b_r8.id);
  }
}
function DashboardComponent_Conditional_15_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 44);
    \u0275\u0275text(2, "Bookings to confirm ");
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, DashboardComponent_Conditional_15_Conditional_53_For_6_Template, 13, 14, "div", 46, _forTrack0);
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
function DashboardComponent_Conditional_15_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5, "Review \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(3, 1, ctx_r1.outstanding(), "EUR", "symbol", "1.0-0"), " outstanding across issued invoices");
  }
}
function DashboardComponent_Conditional_15_Conditional_55_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const w_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = w_r9.staff_name) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "Unassigned");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind4(6, 3, w_r9.cash, "EUR", "symbol", "1.0-0"), " received \xB7 ", \u0275\u0275pipeBind4(7, 8, w_r9.gross, "EUR", "symbol", "1.0-0"), " billed");
  }
}
function DashboardComponent_Conditional_15_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 44);
    \u0275\u0275text(2, "Earnings by worker");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, DashboardComponent_Conditional_15_Conditional_55_For_4_Template, 8, 13, "div", 46, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.byWorker());
  }
}
function DashboardComponent_Conditional_15_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4, "Work board \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.stageCount().to_edit, " to edit \xB7 ", ctx_r1.stageCount().editing, " editing \xB7 ", ctx_r1.stageCount().to_deliver, " to deliver");
  }
}
function DashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5, "Upcoming \xB7 30 days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11, "Collected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "span", 15);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 16);
    \u0275\u0275text(17, "Outstanding");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14)(19, "span", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 16);
    \u0275\u0275text(22, "To confirm");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, DashboardComponent_Conditional_15_Conditional_23_Template, 5, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "section", 17)(25, "div", 18)(26, "h2", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20)(29, "button", 21);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_15_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.basis.set("cash"));
    });
    \u0275\u0275text(30, "Cash received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 21);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_15_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.basis.set("work"));
    });
    \u0275\u0275text(32, "Work done");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "p", 22);
    \u0275\u0275template(34, DashboardComponent_Conditional_15_Conditional_34_Template, 2, 7)(35, DashboardComponent_Conditional_15_Conditional_35_Template, 3, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 23);
    \u0275\u0275repeaterCreate(37, DashboardComponent_Conditional_15_For_38_Template, 8, 9, "div", 24, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 25)(40, "section", 26)(41, "div", 18)(42, "h2", 19);
    \u0275\u0275text(43, "Upcoming bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "a", 27);
    \u0275\u0275text(45, "All");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, DashboardComponent_Conditional_15_Conditional_46_Template, 2, 0, "p", 22)(47, DashboardComponent_Conditional_15_Conditional_47_Template, 3, 0, "ul", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "section", 26)(49, "div", 18)(50, "h2", 19);
    \u0275\u0275text(51, "Needs your attention");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, DashboardComponent_Conditional_15_Conditional_52_Template, 2, 0, "p", 22)(53, DashboardComponent_Conditional_15_Conditional_53_Template, 7, 1, "div", 29)(54, DashboardComponent_Conditional_15_Conditional_54_Template, 6, 6, "a", 30)(55, DashboardComponent_Conditional_15_Conditional_55_Template, 5, 0, "div", 29)(56, DashboardComponent_Conditional_15_Conditional_56_Template, 5, 3, "a", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.upcoming30());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 21, ctx_r1.collected(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("kpi--warn", ctx_r1.outstanding() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 26, ctx_r1.outstanding(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("kpi--accent", ctx_r1.requests().length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.requests().length);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.workEnabled() ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.chartTitle());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg__btn--active", ctx_r1.basis() === "cash");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg__btn--active", ctx_r1.basis() === "work");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.basis() === "cash" ? 34 : 35);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.revenueByMonth());
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.upcoming().length === 0 ? 46 : 47);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.requests().length === 0 && ctx_r1.outstanding() === 0 ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requests().length > 0 ? 53 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.outstanding() > 0 ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showWorkerSplit() ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.workEnabled() && ctx_r1.inProduction() > 0 ? 56 : -1);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.jobs = signal([]);
    this.tasks = signal([]);
    this.busyId = signal(null);
    this.earnings = signal(null);
    this.staff = signal([]);
    this.who = signal("");
    this.basis = signal("cash");
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
    this.inProduction = computed(() => this.jobs().filter((j) => j.production_status !== "delivered").length);
    this.openTasks = computed(() => this.tasks().filter((t) => !t.is_done).length);
    this.stageCount = computed(() => {
      const m = { to_edit: 0, editing: 0, to_deliver: 0, delivered: 0 };
      for (const j of this.jobs())
        m[j.production_status]++;
      return m;
    });
    this.workEnabled = computed(() => !!this.auth.features().work_board);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (org)
        this.staff.set(yield this.admin.listStaff(org));
      yield Promise.all([this.loadProduction(), this.loadEarnings()]);
    });
  }
  loadProduction() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      const [jobs, tasks] = yield Promise.all([this.admin.loadJobs(org), this.admin.loadTasks(org)]);
      this.jobs.set(jobs);
      this.tasks.set(tasks);
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
  onWhoChange(id) {
    return __async(this, null, function* () {
      this.who.set(id);
      yield this.loadEarnings();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 16, vars: 7, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], [1, "who-select", 3, "value"], ["routerLink", "/bookings/list", 1, "btn", "btn--ghost"], ["routerLink", "/bookings/new", 1, "btn", "btn--primary"], [1, "loading"], [1, "who-select", 3, "change", "value"], ["value", ""], [3, "value"], [1, "spinner"], [1, "kpis"], [1, "kpi"], [1, "kpi__value"], [1, "kpi__label"], [1, "card", "chart"], [1, "card__head"], [1, "card__title"], [1, "seg"], [1, "seg__btn", 3, "click"], [1, "empty-line"], [1, "chart__bars"], [1, "chart__col"], [1, "grid"], [1, "card"], ["routerLink", "/bookings/list", 1, "card__link"], [1, "list"], [1, "attn"], ["routerLink", "/bookings/invoices", 1, "attn-line"], ["routerLink", "/bookings/work", 1, "attn-line"], [1, "chart__amount"], [1, "chart__track"], [1, "chart__bar"], [1, "chart__label"], [1, "row"], [1, "row__date"], [1, "row__day"], [1, "row__mon"], [1, "row__main"], [1, "row__who"], [1, "row__meta"], [1, "pill"], [1, "attn__head"], [1, "attn__count"], [1, "req"], [1, "req__main"], [1, "req__who"], [1, "req__meta"], [1, "req__actions"], [1, "btn", "btn--sm", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--sm", "btn--ghost", 3, "click", "disabled"], [1, "attn-line__cta"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275template(9, DashboardComponent_Conditional_9_Template, 5, 1, "select", 5);
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "All bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 7);
        \u0275\u0275text(13, "+ New booking");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, DashboardComponent_Conditional_14_Template, 2, 0, "div", 8)(15, DashboardComponent_Conditional_15_Template, 57, 31);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.greeting);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, ctx.now, "EEEE, d MMMM y"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.staff().length > 1 ? 9 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.data.loading() ? 14 : 15);
      }
    }, dependencies: [RouterLink, CurrencyPipe, DatePipe], styles: [`

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
  max-width: 1600px;
  padding: 36px 48px;
}
@media (max-width: 900px) {
  .page[_ngcontent-%COMP%] {
    padding: 24px 20px;
  }
}
.kpis[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.kpi[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 22px;
}
.kpi__value[_ngcontent-%COMP%] {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
.kpi__label[_ngcontent-%COMP%] {
  display: block;
  font-size: 11px;
  color: #94a3b8;
  margin-top: 6px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.kpi--warn[_ngcontent-%COMP%]   .kpi__value[_ngcontent-%COMP%] {
  color: #f97316;
}
.kpi--accent[_ngcontent-%COMP%] {
  border-color: #F4A922;
}
.kpi--accent[_ngcontent-%COMP%]   .kpi__value[_ngcontent-%COMP%] {
  color: #F4A922;
}
.card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 22px;
  margin-bottom: 24px;
}
.card__head[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.card__title[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}
.card__link[_ngcontent-%COMP%] {
  font-size: 12.5px;
  font-weight: 600;
  color: #F4A922;
  text-decoration: none;
}
.card__link[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.who-select[_ngcontent-%COMP%] {
  padding: 9px 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 600;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Inter",
    "Segoe UI",
    sans-serif;
  color: #475569;
  background: #ffffff;
  cursor: pointer;
}
.who-select[_ngcontent-%COMP%]:hover {
  border-color: #94a3b8;
}
.who-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #F4A922;
}
.seg[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 2px;
  padding: 3px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
.seg__btn[_ngcontent-%COMP%] {
  padding: 5px 11px;
  border: none;
  background: none;
  cursor: pointer;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Inter",
    "Segoe UI",
    sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  border-radius: 6px;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.seg__btn[_ngcontent-%COMP%]:hover {
  color: #0f172a;
}
.seg__btn--active[_ngcontent-%COMP%] {
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
}
.chart__bars[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  height: 160px;
}
.chart__col[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.chart__amount[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: #475569;
  height: 16px;
}
.chart__track[_ngcontent-%COMP%] {
  flex: 1;
  width: 100%;
  max-width: 46px;
  display: flex;
  align-items: flex-end;
  margin: 4px 0 8px;
}
.chart__bar[_ngcontent-%COMP%] {
  width: 100%;
  min-height: 2px;
  background:
    linear-gradient(
      to top,
      #F4A922,
      #f7bb4d);
  border-radius: 6px 6px 0 0;
  transition: height 0.15s ease;
}
.chart__label[_ngcontent-%COMP%] {
  font-size: 11.5px;
  color: #94a3b8;
  font-weight: 600;
}
.grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 860px) {
  .grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.empty-line[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #94a3b8;
  margin: 4px 0;
}
.list[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
}
.row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 11px 0;
}
.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {
  border-top: 1px solid #e2e8f0;
}
.row__date[_ngcontent-%COMP%] {
  width: 42px;
  flex-shrink: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.row__day[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
}
.row__mon[_ngcontent-%COMP%] {
  font-size: 10.5px;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  margin-top: 2px;
}
.row__main[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.row__who[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
}
.row__meta[_ngcontent-%COMP%] {
  font-size: 12.5px;
  color: #475569;
  margin-top: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pill[_ngcontent-%COMP%] {
  flex-shrink: 0;
  padding: 3px 9px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  background: #dcfce7;
  color: #16a34a;
}
.pill--partial[_ngcontent-%COMP%] {
  background: #fef9c3;
  color: #a16207;
}
.pill--unpaid[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #dc2626;
}
.attn[_ngcontent-%COMP%] {
  margin-bottom: 14px;
}
.attn__head[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.attn__count[_ngcontent-%COMP%] {
  background: #F4A922;
  color: #000;
  font-size: 11px;
  font-weight: 700;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.req[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
}
.req[_ngcontent-%COMP%]    + .req[_ngcontent-%COMP%] {
  border-top: 1px solid #e2e8f0;
}
.req__main[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.req__who[_ngcontent-%COMP%] {
  font-size: 13.5px;
  font-weight: 600;
  color: #0f172a;
}
.req__meta[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #475569;
}
.req__actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
}
.attn-line[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  margin-top: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  color: #475569;
  text-decoration: none;
}
.attn-line[_ngcontent-%COMP%]:hover {
  border-color: #94a3b8;
}
.attn-line__cta[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #F4A922;
  white-space: nowrap;
}
.btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1.5px solid transparent;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Inter",
    "Segoe UI",
    sans-serif;
  text-decoration: none;
}
.btn--primary[_ngcontent-%COMP%] {
  background: #F4A922;
  border-color: #F4A922;
  color: #000;
}
.btn--primary[_ngcontent-%COMP%]:hover {
  filter: brightness(0.92);
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
  padding: 7px 13px;
  font-size: 12.5px;
}
.btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: default;
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
/*# sourceMappingURL=dashboard.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/booking/platform/dashboard/dashboard.component.ts", lineNumber: 19 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-DKBDI7MZ.js.map
