import {
  toObservable,
  toSignal
} from "./chunk-COVURMQN.js";
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuTrigger
} from "./chunk-YYZD4ABX.js";
import {
  PaginatorComponent,
  paginate
} from "./chunk-32VX3ME2.js";
import {
  ModalComponent
} from "./chunk-5MZRX563.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
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
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BW7NI53J.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-F2R7EXZF.js";
import "./chunk-YHDSDEW7.js";
import "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  computed,
  debounceTime,
  effect,
  inject,
  map,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JW5UDKQ7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/bookings/booking-list/booking-list.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function BookingListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function BookingListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "rect", 19)(3, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No bookings yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 21);
    \u0275\u0275text(7, "Create your first booking");
    \u0275\u0275elementEnd()();
  }
}
function BookingListComponent_Conditional_37_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
  }
}
function BookingListComponent_Conditional_37_For_3_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("tab__count--alert", t_r3.key === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.counts()[t_r3.key]);
  }
}
function BookingListComponent_Conditional_37_For_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_For_3_For_2_Template_button_click_0_listener() {
      const t_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setTab(t_r3.key));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BookingListComponent_Conditional_37_For_3_For_2_Conditional_3_Template, 2, 3, "span", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("tab--active", ctx_r3.tab() === t_r3.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.counts()[t_r3.key] ? 3 : -1);
  }
}
function BookingListComponent_Conditional_37_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingListComponent_Conditional_37_For_3_Conditional_0_Template, 1, 0, "span", 30);
    \u0275\u0275repeaterCreate(1, BookingListComponent_Conditional_37_For_3_For_2_Template, 4, 4, "button", 31, _forTrack0);
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const \u0275$index_83_r6 = ctx.$index;
    \u0275\u0275conditional(\u0275$index_83_r6 > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r5);
  }
}
function BookingListComponent_Conditional_37_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function BookingListComponent_Conditional_37_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.emptyText());
  }
}
function BookingListComponent_Conditional_37_Conditional_10_Conditional_1_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 42);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 43);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 44);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 45)(17, "button", 46);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_10_Conditional_1_For_19_Template_button_click_17_listener() {
      const d_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.restoreBooking(d_r9));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_15_0;
    const d_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r9.booking_ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_14_0 = d_r9.client_name) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_15_0 = d_r9.title) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, d_r9.start_at, "d MMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(12, 11, d_r9.price_total, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 16, d_r9.deleted_at, "d MMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.restoring() === d_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.restoring() === d_r9.id ? "Restoring\u2026" : "Restore", " ");
  }
}
function BookingListComponent_Conditional_37_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "table", 36)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "When");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 37);
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Deleted");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, BookingListComponent_Conditional_37_Conditional_10_Conditional_1_For_19_Template, 19, 19, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "app-paginator", 38);
    \u0275\u0275listener("pageChange", function BookingListComponent_Conditional_37_Conditional_10_Conditional_1_Template_app_paginator_pageChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.pagedDeleted.setPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r3.pagedDeleted.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r3.pagedDeleted.page())("pageCount", ctx_r3.pagedDeleted.pageCount())("total", ctx_r3.pagedDeleted.total());
  }
}
function BookingListComponent_Conditional_37_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingListComponent_Conditional_37_Conditional_10_Conditional_0_Template, 2, 1, "div", 29)(1, BookingListComponent_Conditional_37_Conditional_10_Conditional_1_Template, 21, 3);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.deletedRows().length === 0 ? 0 : 1);
  }
}
function BookingListComponent_Conditional_37_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.emptyText());
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "NEXT");
    \u0275\u0275elementEnd();
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("+", ctx_r3.blocksLeft(b_r12), " more block", ctx_r3.blocksLeft(b_r12) > 1 ? "s" : "", "");
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.relative(b_r12));
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "Price TBC");
    \u0275\u0275elementEnd();
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind4(2, 2, b_r12.total_paid, "EUR", "symbol", "1.0-0"), " / ", \u0275\u0275pipeBind4(3, 7, b_r12.price_total, "EUR", "symbol", "1.0-0"), "");
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_24_Conditional_2_Template, 4, 12, "span", 65);
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r3.paymentClass(b_r12.payment_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.paymentLabel(b_r12.payment_status));
    \u0275\u0275advance();
    \u0275\u0275conditional(!b_r12.is_external && b_r12.payment_status !== "paid" ? 2 : -1);
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r3.workClass(b_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const b_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.approve(b_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r3.busyId() === b_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.busyId() === b_r12.id ? "\u2026" : "Confirm", " ");
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const b_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.copyLink(b_r12.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.copiedId() === b_r12.id ? "\u2713 Copied" : "Client link");
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const b_r12 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goDetail(b_r12));
    });
    \u0275\u0275text(1, "Record payment\u2026");
    \u0275\u0275elementEnd();
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const b_r12 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.copyLink(b_r12.id));
    });
    \u0275\u0275text(1, "Copy client link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 80);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r17);
      const b_r12 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.decline(b_r12));
    });
    \u0275\u0275text(3, "Decline request");
    \u0275\u0275elementEnd();
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const b_r12 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.cancel(b_r12));
    });
    \u0275\u0275text(1, "Cancel booking");
    \u0275\u0275elementEnd();
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 77);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const b_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goDetail(b_r12));
    });
    \u0275\u0275text(2, "View details & payments");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_3_Template, 2, 0, "button", 78);
    \u0275\u0275elementStart(4, "button", 77);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const b_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goEdit(b_r12));
    });
    \u0275\u0275text(5, "Edit booking");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_6_Template, 4, 0);
    \u0275\u0275elementStart(7, "button", 77);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const b_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goDuplicate(b_r12));
    });
    \u0275\u0275text(8, "Duplicate booking\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Conditional_9_Template, 2, 0, "button", 79);
    \u0275\u0275elementStart(10, "button", 80);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r15);
      const b_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.askDelete(b_r12));
    });
    \u0275\u0275text(11, "Delete booking");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(b_r12.payment_status !== "paid" && b_r12.payment_status !== "external" ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.isPending(b_r12) ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(b_r12.status !== "cancelled" ? 9 : -1);
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_Conditional_1_Template, 2, 2, "button", 67)(2, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_Conditional_2_Template, 2, 1, "button", 68);
    \u0275\u0275elementStart(3, "button", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 70);
    \u0275\u0275element(5, "circle", 71)(6, "circle", 72)(7, "circle", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_ng_template_8_Template, 12, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const rowMenu_r19 = \u0275\u0275reference(9);
    const b_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isPending(b_r12) ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("cdkMenuTriggerFor", rowMenu_r19)("disabled", ctx_r3.busyId() === b_r12.id);
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_31_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 77);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_31_ng_template_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const b_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goEdit(b_r12));
    });
    \u0275\u0275text(2, "Edit / enrich");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 80);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_31_ng_template_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const b_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.askDelete(b_r12));
    });
    \u0275\u0275text(4, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 70);
    \u0275\u0275element(2, "circle", 71)(3, "circle", 72)(4, "circle", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_31_ng_template_5_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const extMenu_r21 = \u0275\u0275reference(6);
    const b_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("cdkMenuTriggerFor", extMenu_r21)("disabled", ctx_r3.busyId() === b_r12.id);
  }
}
function BookingListComponent_Conditional_37_Conditional_12_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 48)(2, "button", 49);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_37_Conditional_12_For_21_Template_button_click_2_listener() {
      const b_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goDetail(b_r12));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_4_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 53)(10, "span", 54);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementStart(13, "span", 55);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_16_Template, 2, 2, "span", 56)(17, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_17_Template, 2, 1, "span", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 58);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 59)(22, "div", 60);
    \u0275\u0275template(23, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_23_Template, 2, 0, "span", 61)(24, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_24_Template, 3, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 62)(26, "span", 63);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_28_Template, 2, 2, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 45);
    \u0275\u0275template(30, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_30_Template, 10, 3)(31, BookingListComponent_Conditional_37_Conditional_12_For_21_Conditional_31_Template, 7, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_26_0;
    const b_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row--external", b_r12.is_external)("row--next", b_r12.id === ctx_r3.nextId());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r12.booking_ref);
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r12.id === ctx_r3.nextId() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_17_0 = b_r12.client_name) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 18, b_r12.next_start_at, ctx_r3.whenFmt(b_r12.next_start_at)), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2013", \u0275\u0275pipeBind2(15, 21, b_r12.next_end_at, "HH:mm"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.blocksLeft(b_r12) > 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.relative(b_r12) ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(20, 24, b_r12.price_total, "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(b_r12.price_total === 0 ? 23 : 24);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r3.statusClass(b_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.statusLabel(b_r12.status));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_26_0 = ctx_r3.workLabel(b_r12)) ? 28 : -1, tmp_26_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!b_r12.is_external ? 30 : 31);
  }
}
function BookingListComponent_Conditional_37_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "table", 36)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "When");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, BookingListComponent_Conditional_37_Conditional_12_For_21_Template, 32, 29, "tr", 47, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "app-paginator", 38);
    \u0275\u0275listener("pageChange", function BookingListComponent_Conditional_37_Conditional_12_Template_app_paginator_pageChange_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.paged.setPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r3.paged.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r3.paged.page())("pageCount", ctx_r3.paged.pageCount())("total", ctx_r3.paged.total());
  }
}
function BookingListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275repeaterCreate(2, BookingListComponent_Conditional_37_For_3_Template, 3, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 25);
    \u0275\u0275element(6, "circle", 26)(7, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "input", 28);
    \u0275\u0275listener("input", function BookingListComponent_Conditional_37_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.search.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, BookingListComponent_Conditional_37_Conditional_9_Template, 2, 0, "div", 14)(10, BookingListComponent_Conditional_37_Conditional_10_Template, 2, 1)(11, BookingListComponent_Conditional_37_Conditional_11_Template, 2, 1, "div", 29)(12, BookingListComponent_Conditional_37_Conditional_12_Template, 23, 3);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.tabGroups);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r3.search());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.rowsLoading() ? 9 : ctx_r3.tab() === "deleted" ? 10 : ctx_r3.rows().length === 0 ? 11 : 12);
  }
}
function BookingListComponent_Conditional_39_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const inv_r24 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind4(1, 1, inv_r24.amount_paid, "EUR", "symbol", "1.0-2"), " paid ");
  }
}
function BookingListComponent_Conditional_39_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1, "The invoice is kept as a standalone invoice \u2014 its number, lines and payments stay intact.");
    \u0275\u0275elementEnd();
  }
}
function BookingListComponent_Conditional_39_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 82)(1, "input", 87);
    \u0275\u0275listener("ngModelChange", function BookingListComponent_Conditional_39_Conditional_11_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteInvoice.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275template(5, BookingListComponent_Conditional_39_Conditional_11_Conditional_5_Template, 2, 6);
    \u0275\u0275text(6, ") ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, BookingListComponent_Conditional_39_Conditional_11_Conditional_7_Template, 2, 0, "p", 81);
  }
  if (rf & 2) {
    const inv_r24 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r3.deleteInvoice());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Also delete invoice ", inv_r24.invoice_number, " (", \u0275\u0275pipeBind4(4, 5, inv_r24.amount_gross, "EUR", "symbol", "1.0-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(inv_r24.amount_paid > 0 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.deleteInvoice() ? 7 : -1);
  }
}
function BookingListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1, "Delete ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "?");
    \u0275\u0275element(5, "br");
    \u0275\u0275text(6, "This removes it from your bookings and can't be undone.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 82)(8, "input", 83);
    \u0275\u0275listener("ngModelChange", function BookingListComponent_Conditional_39_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeEvent.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Also remove the event from Google Calendar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, BookingListComponent_Conditional_39_Conditional_11_Template, 8, 10);
    \u0275\u0275elementStart(12, "div", 84)(13, "button", 85);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_39_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDelete());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 86);
    \u0275\u0275listener("click", function BookingListComponent_Conditional_39_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r3.removeEvent());
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r3.invoiceForDelete()) ? 11 : -1, tmp_4_0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.deleting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.deleting() ? "Deleting\u2026" : "Delete", " ");
  }
}
var PAYMENT_LABELS = {
  unpaid: "Unpaid",
  partial: "Deposit paid",
  paid: "Paid",
  external: "External"
};
var STATUS_LABELS = {
  draft: "Draft",
  pending: "To confirm",
  hold: "Held",
  booked: "Booked",
  in_progress: "In progress",
  done: "Done",
  cancelled: "Cancelled",
  expired: "Expired"
};
var STATUS_CLASSES = {
  pending: "badge--toconfirm",
  hold: "badge--toconfirm",
  cancelled: "badge--off",
  expired: "badge--off"
};
var WORK_LABELS = {
  to_edit: "To edit",
  editing: "Editing",
  to_deliver: "To deliver",
  delivered: "Delivered"
};
var PAYMENT_CLASSES = {
  unpaid: "badge--unpaid",
  partial: "badge--partial",
  paid: "badge--paid",
  external: "badge--external"
};
var TAB_KEYS = ["upcoming", "pending", "unpaid", "paid", "past", "cancelled", "all", "deleted"];
var EMPTY_COUNTS = { upcoming: 0, pending: 0, unpaid: 0, paid: 0, past: 0, external: 0, cancelled: 0, all: 0, deleted: 0 };
var EMPTY_TEXT = {
  upcoming: "No upcoming bookings. Your schedule is clear.",
  pending: "No bookings waiting to be confirmed.",
  unpaid: "Nothing outstanding \u2014 every job is paid. \u{1F389}",
  paid: "No fully-paid bookings yet.",
  past: "No past bookings.",
  external: "No imported calendar events. Use \u201CSync Calendar\u201D to pull them in.",
  cancelled: "No cancelled bookings.",
  all: "No bookings match your search.",
  deleted: "Nothing deleted. Removed bookings appear here and can be brought back."
};
var BookingListComponent = class _BookingListComponent {
  goEdit(b) {
    this.router.navigate(["/bookings", b.id, "edit"]);
  }
  /** Clone this job into a new booking — same client, charges and settings, no times.
   *  Lands on /bookings/new because the result is a new booking, not an edit of this one. */
  goDuplicate(b) {
    this.router.navigate(["/bookings/new"], { queryParams: { from: b.id } });
  }
  goDetail(b) {
    this.router.navigate(["/bookings", b.id]);
  }
  readPersistedTab() {
    try {
      const t = localStorage.getItem(this.TAB_STORE);
      if (t && TAB_KEYS.includes(t))
        return t;
    } catch {
    }
    return "upcoming";
  }
  constructor() {
    this.data = inject(BookingDataService);
    this.auth = inject(BookingsAuthService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.copiedId = signal(null);
    this.busyId = signal(null);
    this.tabGroups = [
      [{ key: "upcoming", label: "Upcoming" }, { key: "past", label: "Past" }],
      [{ key: "pending", label: "To confirm" }, { key: "unpaid", label: "Unpaid" }, { key: "paid", label: "Paid" }],
      [{ key: "cancelled", label: "Cancelled" }, { key: "all", label: "All" }, { key: "deleted", label: "Deleted" }]
    ];
    this.TAB_STORE = "jm.bookings.tab";
    this.tab = toSignal(this.route.queryParamMap.pipe(map((p) => {
      const t = p.get("tab");
      return t && TAB_KEYS.includes(t) ? t : this.readPersistedTab();
    })), { initialValue: this.readPersistedTab() });
    this.search = signal("");
    this.debouncedSearch = toSignal(toObservable(this.search).pipe(debounceTime(250)), { initialValue: "" });
    this.rows = signal([]);
    this.rowsLoading = signal(true);
    this.counts = signal(EMPTY_COUNTS);
    this.paged = paginate(this.rows);
    this.deletedRows = signal([]);
    this.pagedDeleted = paginate(this.deletedRows);
    this.restoring = signal("");
    this.nextId = computed(() => {
      const now = Date.now();
      const up = this.data.bookings().filter((b) => (b.status === "booked" || b.status === "in_progress") && this.endMs(b) >= now).sort((a, b) => this.startMs(a) - this.startMs(b));
      return up.length ? up[0].id : null;
    });
    this.CONFIRMED_STATES = ["booked", "in_progress", "done"];
    this.confirmedJobs = computed(() => this.data.bookings().filter((b) => this.CONFIRMED_STATES.includes(b.status) && !b.is_external));
    this.expectedRevenue = computed(() => this.confirmedJobs().reduce((s, b) => s + b.price_revenue, 0));
    this.collected = computed(() => this.confirmedJobs().reduce((s, b) => s + b.total_paid, 0));
    this.unpaidCount = computed(() => this.confirmedJobs().filter((b) => b.payment_status === "unpaid" || b.payment_status === "partial").length);
    this.deleteOpen = signal(false);
    this.deleteTarget = signal(null);
    this.removeEvent = signal(true);
    this.deleting = signal(false);
    this.invoiceForDelete = signal(null);
    this.deleteInvoice = signal(false);
    if (!this.route.snapshot.queryParamMap.get("tab")) {
      const restored = this.readPersistedTab();
      if (restored !== "upcoming") {
        void this.router.navigate([], { queryParams: { tab: restored }, queryParamsHandling: "merge", replaceUrl: true });
      }
    }
    effect(() => {
      const tab = this.tab();
      const q = this.debouncedSearch();
      this.auth.staffId();
      this.paged.reset();
      void this.loadRows(tab, q);
      if (tab === "deleted")
        void this.loadDeleted();
    });
    onScopeChange(this.auth, () => {
      void this.refreshCounts();
      void this.loadDeleted();
    });
  }
  /** Navigate to a tab — pushes ?tab=… so it's a real, linkable URL, and remembers it. */
  setTab(tab) {
    try {
      localStorage.setItem(this.TAB_STORE, tab);
    } catch {
    }
    this.router.navigate([], { queryParams: { tab }, queryParamsHandling: "merge" });
  }
  loadRows(tab, search) {
    return __async(this, null, function* () {
      this.rowsLoading.set(true);
      this.rows.set(yield this.data.queryBookings(tab, search));
      this.rowsLoading.set(false);
    });
  }
  refreshCounts() {
    return __async(this, null, function* () {
      const c = yield this.data.bookingTabCounts();
      this.counts.set(__spreadProps(__spreadValues({}, c), { deleted: this.deletedRows().length }));
    });
  }
  loadDeleted() {
    return __async(this, null, function* () {
      this.deletedRows.set(yield this.data.listDeletedBookings());
      this.counts.update((c) => __spreadProps(__spreadValues({}, c), { deleted: this.deletedRows().length }));
    });
  }
  restoreBooking(d) {
    return __async(this, null, function* () {
      if (this.restoring())
        return;
      if (!(yield this.confirm.ask({
        title: "Restore booking",
        message: `Bring ${d.booking_ref} back, with its time blocks, invoice and payments?`,
        confirmLabel: "Restore"
      })))
        return;
      this.restoring.set(d.id);
      try {
        const res = yield this.data.restoreBooking(d.id);
        if (!res.restored) {
          this.toast.error(res.error ?? "Could not restore.");
          return;
        }
        const clashes = res.slots_conflicted?.length ?? 0;
        if (clashes) {
          this.toast.error(`${d.booking_ref} restored, but ${clashes} time block${clashes > 1 ? "s" : ""} could not be \u2014 that time is now taken. Re-pick them on the booking.`, 9e3);
        } else {
          this.toast.success(`${d.booking_ref} restored`);
        }
        yield Promise.all([this.refresh(), this.loadDeleted()]);
      } finally {
        this.restoring.set("");
      }
    });
  }
  /** After a mutation, re-pull the current tab's rows + the counts (stay fresh, no local edits). */
  refresh() {
    return __async(this, null, function* () {
      yield Promise.all([this.loadRows(this.tab(), this.debouncedSearch()), this.refreshCounts()]);
    });
  }
  // Both key off the block that matters NOW. start_at/end_at span the whole booking, so a
  // job with planning on Tuesday and filming on Friday kept reporting Tuesday all week.
  startMs(b) {
    return new Date(b.next_start_at ?? b.start_at).getTime();
  }
  endMs(b) {
    return new Date(b.next_end_at ?? b.end_at).getTime();
  }
  /**
   * Date format for the When column. The year appears only when it is not the current
   * one: BK-2026-116 is a 2027 job and rendered as "Thu 9 Sep, 16:00", which reads as
   * this September and looks badly out of order in a list sorted by date.
   */
  whenFmt(iso) {
    return new Date(iso).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? "EEE d MMM, HH:mm" : "EEE d MMM y, HH:mm";
  }
  /** Blocks after this one that are still to come. 0 once the job is finished. */
  blocksLeft(b) {
    return Math.max(0, (b.upcoming_slot_count ?? 0) - 1);
  }
  emptyText() {
    return EMPTY_TEXT[this.tab()];
  }
  /** Post-production stage for a job, or '' when no work covers it. */
  workLabel(b) {
    if (!b.work_count)
      return "";
    const l = WORK_LABELS[b.work_status ?? ""] ?? "";
    return b.work_count > 1 ? `${l} +${b.work_count - 1}` : l;
  }
  workClass(b) {
    return b.work_status === "delivered" ? "badge--work-done" : "badge--work";
  }
  statusLabel(st) {
    return STATUS_LABELS[st] ?? st;
  }
  statusClass(st) {
    return STATUS_CLASSES[st] ?? "badge--status";
  }
  /** A job the client has asked for but you have not accepted yet. */
  isPending(b) {
    return b.status === "pending";
  }
  /** Friendly relative day for the schedule ("Today", "Tomorrow", "in 3 days"). */
  relative(b) {
    const days = Math.round((this.startMs(b) - Date.now()) / 864e5);
    if (days === 0)
      return "Today";
    if (days === 1)
      return "Tomorrow";
    if (days === -1)
      return "Yesterday";
    if (days > 1 && days <= 14)
      return `in ${days} days`;
    if (days < -1 && days >= -14)
      return `${-days} days ago`;
    return "";
  }
  copyLink(bookingId) {
    return __async(this, null, function* () {
      const url = yield this.data.generateLink(bookingId);
      if (!url) {
        this.toast.error("Could not generate the client link.");
        return;
      }
      yield navigator.clipboard.writeText(url);
      this.copiedId.set(bookingId);
      setTimeout(() => this.copiedId.set(null), 2e3);
      this.toast.success("Client link copied to clipboard");
    });
  }
  approve(b) {
    return __async(this, null, function* () {
      this.busyId.set(b.id);
      try {
        const res = yield this.data.approveRequest(b.id);
        if (res.error === "slot_taken")
          this.toast.error(`${b.booking_ref}: that slot was just taken \u2014 decline this one.`);
        else if (res.error === "not_pending")
          this.toast.error(`${b.booking_ref} is no longer pending.`);
        else if (res.error)
          this.toast.error(`Could not approve ${b.booking_ref}.`);
        else {
          this.toast.success(`${b.booking_ref} approved \u2014 added to your calendar`);
          yield this.refresh();
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
        yield this.refresh();
      } catch {
        this.toast.error(`Could not decline ${b.booking_ref}.`);
      } finally {
        this.busyId.set(null);
      }
    });
  }
  cancel(b) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.ask({
        title: "Cancel booking",
        message: `Cancel ${b.booking_ref} (${b.client_name ?? "no client"})? This frees the slot and removes it from your calendar. This cannot be undone.`,
        confirmLabel: "Cancel booking",
        cancelLabel: "Keep it",
        danger: true
      })))
        return;
      let refund = false;
      if (b.total_paid > 0) {
        refund = yield this.confirm.ask({
          title: "Refund card payments?",
          message: `\u20AC${b.total_paid} has been paid on this booking. Refund any CARD payments via Stripe now? (Cash / Revolut / bank payments are settled by you directly.)`,
          confirmLabel: "Refund now",
          cancelLabel: "Don\u2019t refund"
        });
      }
      this.busyId.set(b.id);
      try {
        const res = yield this.data.cancelBooking(b.id, refund);
        if (res.error) {
          this.toast.error(`Could not cancel ${b.booking_ref}.`);
          return;
        }
        yield this.refresh();
        if (res.calendar_cleared === false) {
          this.toast.error(`${b.booking_ref} cancelled, but its calendar event couldn't be removed \u2014 delete it manually.`);
        } else if (res.refunded) {
          this.toast.success(`${b.booking_ref} cancelled \u2014 \u20AC${res.refunded} refunded`);
        } else {
          this.toast.success(`${b.booking_ref} cancelled`);
        }
      } catch {
        this.toast.error(`Could not cancel ${b.booking_ref}. Please try again.`);
      } finally {
        this.busyId.set(null);
      }
    });
  }
  askDelete(b) {
    return __async(this, null, function* () {
      this.deleteTarget.set(b);
      this.removeEvent.set(true);
      this.invoiceForDelete.set(null);
      this.deleteInvoice.set(false);
      this.deleteOpen.set(true);
      const inv = yield this.data.getInvoiceSummary(b.id);
      this.invoiceForDelete.set(inv);
      this.deleteInvoice.set(!!inv && inv.amount_paid === 0);
    });
  }
  closeDelete() {
    this.deleteOpen.set(false);
    this.deleteTarget.set(null);
    this.invoiceForDelete.set(null);
  }
  confirmDelete() {
    return __async(this, null, function* () {
      const b = this.deleteTarget();
      if (!b)
        return;
      this.deleting.set(true);
      try {
        const remove = this.removeEvent();
        const keepInvoice = !this.deleteInvoice();
        const res = yield this.data.deleteBooking(b.id, remove, keepInvoice);
        if (res.error) {
          this.toast.error(`Could not delete ${b.booking_ref}.`);
          return;
        }
        if (res.keptInvoice) {
          this.toast.info(`Invoice ${this.invoiceForDelete()?.invoice_number ?? ""} kept \u2014 it's now a standalone invoice.`);
        }
        if (remove && res.calendarCleared === false) {
          this.toast.error(`${b.booking_ref} deleted, but its Google Calendar event could NOT be removed \u2014 check the calendar connection.`);
        } else {
          this.toast.success(`${b.booking_ref} deleted${remove ? " \xB7 removed from Google Calendar" : ""}`);
        }
        yield this.refresh();
        this.closeDelete();
      } catch {
        this.toast.error(`Could not delete ${b.booking_ref}. Please try again.`);
      } finally {
        this.deleting.set(false);
      }
    });
  }
  paymentLabel(status) {
    return PAYMENT_LABELS[status] ?? status;
  }
  paymentClass(status) {
    return PAYMENT_CLASSES[status] ?? "";
  }
  static {
    this.\u0275fac = function BookingListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingListComponent, selectors: [["app-booking-list"]], decls: 40, vars: 19, consts: [["rowMenu", ""], ["extMenu", ""], [1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], ["data-tour", "new-booking", "routerLink", "/bookings/new", 1, "btn", "btn--primary"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 3v10M3 8h10"], [1, "stats"], [1, "stat"], [1, "stat__value"], [1, "stat__label"], [1, "loading"], [1, "empty"], ["title", "Delete booking", 3, "openChange", "open"], [1, "spinner"], ["viewBox", "0 0 48 48", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "8", "y", "10", "width", "32", "height", "30", "rx", "4"], ["d", "M16 6v8M32 6v8M8 22h32"], ["routerLink", "/bookings/new", 1, "btn", "btn--primary"], [1, "toolbar"], ["role", "tablist", "data-tour", "booking-tabs", 1, "tabs"], ["data-tour", "booking-search", 1, "search"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6"], ["cx", "7", "cy", "7", "r", "4.5"], ["d", "M11 11l3 3"], ["type", "search", "placeholder", "Search ref, client or job\u2026", 3, "input", "value"], [1, "empty-tab"], ["aria-hidden", "true", 1, "tabs__sep"], ["role", "tab", 1, "tab", 3, "tab--active"], ["role", "tab", 1, "tab", 3, "click"], [1, "tab__count", 3, "tab__count--alert"], [1, "tab__count"], [1, "table-wrap"], [1, "table"], [1, "num"], [3, "pageChange", "page", "pageCount", "total"], ["data-label", "Ref", 1, "mono"], ["data-label", "Client", 1, "ellipsis"], ["data-label", "Job", 1, "ellipsis"], ["data-label", "When"], ["data-label", "Total", 1, "num"], ["data-label", "Deleted"], ["data-label", "", 1, "cell--actions"], [1, "link-btn", 3, "click", "disabled"], [3, "row--external", "row--next"], ["data-label", "Ref", 1, "cell--mono"], [1, "ref-link", 3, "click"], [1, "next-badge"], ["data-label", "Job", 1, "cell--title"], ["data-label", "Client", 1, "cell--client"], ["data-label", "When", 1, "cell--date"], [1, "when__abs"], [1, "when__to"], ["title", "This job has more time blocks after this one", 1, "when__blocks"], [1, "when__rel"], ["data-label", "Total"], ["data-label", "Payment"], [1, "pay-cell"], [1, "badge", "badge--tbc"], ["data-label", "Status"], [1, "badge", 3, "ngClass"], ["title", "Post-production", 1, "badge", 3, "ngClass"], [1, "pay-cell__amt"], [1, "row-actions"], [1, "link-btn", "link-btn--go", 3, "disabled"], [1, "link-btn"], ["aria-label", "More actions", 1, "kebab", 3, "cdkMenuTriggerFor", "disabled"], ["viewBox", "0 0 20 20", "width", "18", "height", "18", "fill", "currentColor"], ["cx", "10", "cy", "4", "r", "1.7"], ["cx", "10", "cy", "10", "r", "1.7"], ["cx", "10", "cy", "16", "r", "1.7"], [1, "link-btn", "link-btn--go", 3, "click", "disabled"], [1, "link-btn", 3, "click"], ["cdkMenu", "", 1, "menu"], ["cdkMenuItem", "", 1, "menu__item", 3, "click"], ["cdkMenuItem", "", 1, "menu__item"], ["cdkMenuItem", "", 1, "menu__item", "menu__item--danger"], ["cdkMenuItem", "", 1, "menu__item", "menu__item--danger", 3, "click"], [1, "del-text"], [1, "del-check"], ["type", "checkbox", "name", "removeEvent", 3, "ngModelChange", "ngModel"], [1, "del-actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--danger", 3, "click", "disabled"], ["type", "checkbox", "name", "deleteInvoice", 3, "ngModelChange", "ngModel"]], template: function BookingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
        \u0275\u0275text(4, "Bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 5);
        \u0275\u0275text(6, "All jobs, shoots and appointments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "a", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 8);
        \u0275\u0275element(10, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " New booking ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "span", 12);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 13);
        \u0275\u0275text(17, "Confirmed bookings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 11)(19, "span", 12);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 13);
        \u0275\u0275text(23, "Expected revenue");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 11)(25, "span", 12);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 13);
        \u0275\u0275text(29, "Collected");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 11)(31, "span", 12);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 13);
        \u0275\u0275text(34, "Awaiting payment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(35, BookingListComponent_Conditional_35_Template, 2, 0, "div", 14)(36, BookingListComponent_Conditional_36_Template, 8, 0, "div", 15)(37, BookingListComponent_Conditional_37_Template, 13, 2);
        \u0275\u0275elementStart(38, "app-modal", 16);
        \u0275\u0275listener("openChange", function BookingListComponent_Template_app_modal_openChange_38_listener($event) {
          return $event || ctx.closeDelete();
        });
        \u0275\u0275template(39, BookingListComponent_Conditional_39_Template, 17, 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_7_0;
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate(ctx.confirmedJobs().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(21, 9, ctx.expectedRevenue(), "EUR", "symbol", "1.0-0"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(27, 14, ctx.collected(), "EUR", "symbol", "1.0-0"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("stat--warn", ctx.unpaidCount() > 0);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.unpaidCount());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.data.loading() ? 35 : ctx.data.bookings().length === 0 ? 36 : 37);
        \u0275\u0275advance(3);
        \u0275\u0275property("open", ctx.deleteOpen());
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_7_0 = ctx.deleteTarget()) ? 39 : -1, tmp_7_0);
      }
    }, dependencies: [RouterLink, NgClass, DatePipe, CurrencyPipe, CdkMenuTrigger, CdkMenu, CdkMenuItem, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, ModalComponent, PaginatorComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  padding: 36px 48px;\n}\n@media (max-width: 900px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.stat[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 18px 22px;\n  min-width: 140px;\n  flex: 1;\n}\n.stat__value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.stat__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 4px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.stat--warn[_ngcontent-%COMP%]   .stat__value[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 4px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  max-width: 100%;\n  min-width: 0;\n  scrollbar-width: none;\n}\n.tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tabs__sep[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  align-self: stretch;\n  width: 1px;\n  margin: 3px 5px;\n  background: #e2e8f0;\n}\n.tab[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 7px 14px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  border-radius: 8px;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.tab--active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f172a;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);\n}\n.tab__count[_ngcontent-%COMP%] {\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  background: #e2e8f0;\n  color: #475569;\n}\n.tab--active[_ngcontent-%COMP%]   .tab__count[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n  color: #0f172a;\n}\n.tab__count--alert[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.search[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0 12px;\n  min-width: 220px;\n  transition: border-color 0.15s ease;\n}\n.search[_ngcontent-%COMP%]:focus-within {\n  border-color: #F4A922;\n}\n.search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: none;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 13.5px;\n  color: #0f172a;\n  padding: 9px 0;\n  width: 100%;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.empty-tab[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 48px 24px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 14px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  overflow-x: auto;\n}\n@media (max-width: 760px) {\n  .table-wrap[_ngcontent-%COMP%] {\n    border: none;\n    background: none;\n    overflow: visible;\n  }\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n@media (max-width: 760px) {\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    background: #ffffff;\n    border: 1px solid #e2e8f0;\n    border-radius: 12px;\n    padding: 10px 14px;\n    margin: 0 0 10px;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 7px 0;\n    border: none;\n    text-align: right;\n    white-space: normal;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {\n    border-top: 1px solid #e2e8f0;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    margin-right: auto;\n    flex: none;\n    font-size: 12px;\n    font-weight: 600;\n    color: #475569;\n    text-align: left;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label][_ngcontent-%COMP%] {\n    max-width: none;\n    white-space: normal;\n    overflow: visible;\n    text-overflow: clip;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%]::before {\n    content: none;\n  }\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  font-size: 13.5px;\n  color: #475569;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.row--external[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.cell--mono[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Mono",\n    monospace;\n  font-size: 12.5px;\n  color: #0f172a;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.cell--title[_ngcontent-%COMP%] {\n  max-width: 320px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.cell--client[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n}\n.cell--date[_ngcontent-%COMP%]   .when__abs[_ngcontent-%COMP%] {\n  display: block;\n  color: #0f172a;\n  white-space: nowrap;\n}\n.cell--date[_ngcontent-%COMP%]   .when__to[_ngcontent-%COMP%] {\n  color: #475569;\n  font-weight: 600;\n}\n.cell--date[_ngcontent-%COMP%]   .when__rel[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11.5px;\n  color: #94a3b8;\n  margin-top: 1px;\n}\n.cell--date[_ngcontent-%COMP%]   .when__blocks[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 2px;\n  padding: 1px 6px;\n  border-radius: 6px;\n  font-size: 10.5px;\n  font-weight: 700;\n  background: rgba(244, 169, 34, 0.12);\n  color: #F4A922;\n}\n.row--next[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n}\n.row--next[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n}\n.next-badge[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  padding: 1px 7px;\n  border-radius: 20px;\n  background: #F4A922;\n  color: #000;\n  font-size: 9.5px;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 600;\n}\n.badge--paid[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge--partial[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.badge--unpaid[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge--external[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.badge--status[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  border-color: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.92);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 12.5px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  border-color: #dc2626;\n  color: #fff;\n}\n.btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.92);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.del-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.5;\n  margin: 0 0 16px;\n}\n.del-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.del-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  cursor: pointer;\n  margin-bottom: 4px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.del-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-top: 1px;\n  flex-shrink: 0;\n  cursor: pointer;\n  accent-color: #F4A922;\n}\n.del-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 22px;\n}\n.cell--actions[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.ref-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-family:\n    "SF Mono",\n    "Fira Mono",\n    monospace;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.ref-link[_ngcontent-%COMP%]:hover {\n  color: #F4A922;\n  text-decoration: underline;\n}\n.pay-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  align-items: flex-start;\n}\n.pay-cell__amt[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n}\n.kebab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.kebab[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n  color: #0f172a;\n}\n.kebab[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.kebab[aria-expanded=true][_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #0f172a;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s ease;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2.5px solid #e2e8f0;\n  border-top-color: #F4A922;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  padding: 64px 40px;\n  color: #94a3b8;\n  text-align: center;\n}\n.empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  opacity: 0.35;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  max-width: 300px;\n}\n.badge--toconfirm[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.16);\n  color: #b45309;\n}\n.badge--off[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.link-btn--go[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.link-btn--go[_ngcontent-%COMP%]:hover {\n  background: rgba(22, 163, 74, 0.1);\n}\n.badge--tbc[_ngcontent-%COMP%] {\n  background: #eef2f6;\n  color: #475569;\n  font-style: italic;\n}\n.badge--work[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n  margin-left: 4px;\n}\n.badge--work-done[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=booking-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingListComponent, { className: "BookingListComponent", filePath: "src/app/booking/platform/bookings/booking-list/booking-list.component.ts", lineNumber: 68 });
})();
export {
  BookingListComponent
};
//# sourceMappingURL=chunk-CMK6NU6P.js.map
