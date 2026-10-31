import {
  PaymentDialogComponent
} from "./chunk-7SWVTD3N.js";
import {
  LineItemsEditorComponent
} from "./chunk-JQZQ2QE2.js";
import {
  ClientEditorComponent
} from "./chunk-SFDPMXEH.js";
import {
  InfoHintComponent
} from "./chunk-JJMBVONG.js";
import "./chunk-YT6H6K5O.js";
import {
  ConfirmService
} from "./chunk-FBEN7ZXU.js";
import {
  BookingAdminService
} from "./chunk-TGVAAVA4.js";
import {
  SelectComponent
} from "./chunk-XYER4DO7.js";
import "./chunk-PHEH44AJ.js";
import {
  BookingDataService
} from "./chunk-LZYUP6I7.js";
import {
  ToastService
} from "./chunk-VP2YFPLJ.js";
import {
  BookingsAuthService
} from "./chunk-AO4LSMG5.js";
import "./chunk-DEXNZGWM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PLONONHM.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-CPWNAP4Z.js";
import "./chunk-H276UI7Q.js";
import "./chunk-KKVK7E5Z.js";
import "./chunk-VUFO6QBK.js";
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
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VEX6DIAJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/invoices/invoice-edit.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function InvoiceEditComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Invoice not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 2);
    \u0275\u0275text(3, "\u2190 Invoices");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " New invoice ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Edit invoice ", ctx_r1.invoiceNumber, " ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
    \u0275\u0275elementStart(1, "span", 41);
    \u0275\u0275text(2, "no job");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.preview());
    });
    \u0275\u0275text(1, "Preview");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span")(2, "b");
    \u0275\u0275text(3, "This invoice is void.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " It owes nothing, is not counted as earnings, and the client cannot pay it.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 39);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unvoid());
    });
    \u0275\u0275text(6, "Un-void");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Saving updates the booking's total \u2014 and its calendar event \u2014 to match. ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Conditional_105_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetToBooking());
    });
    \u0275\u0275text(1, "Reset to booking");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.payOpen.set(true));
    });
    \u0275\u0275text(1, "Record a payment");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", p_r8.note, " ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", p_r8.status, " ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_For_2_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const p_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removePayment(p_r8));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 51)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5);
    \u0275\u0275template(6, InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_For_2_Conditional_6_Template, 1, 1)(7, InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_For_2_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 54);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_For_2_Conditional_11_Template, 2, 0, "button", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const p_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("pays__row--off", p_r8.status !== "completed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 8, (tmp_14_0 = p_r8.paid_at) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : p_r8.created_at, "d MMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.methodLabel(p_r8.method));
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r8.note ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r8.status !== "completed" ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 11, p_r8.amount, ctx_r1.currency, "symbol", "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!p_r8.stripe_payment_intent_id ? 11 : -1);
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 47);
    \u0275\u0275repeaterCreate(1, InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_For_2_Template, 12, 16, "li", 50, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.payments());
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Nothing paid yet.");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind4(1, 1, ctx_r1.balance, ctx_r1.currency, "symbol", "1.2-2"), " due ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "h2", 11);
    \u0275\u0275text(3, "Payments");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_4_Template, 2, 0, "button", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_5_Template, 3, 0, "ul", 47)(6, InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_6_Template, 2, 0, "p", 1);
    \u0275\u0275elementStart(7, "p", 48);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275template(11, InvoiceEditComponent_Conditional_3_Conditional_108_Conditional_11_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "app-payment-dialog", 49);
    \u0275\u0275twoWayListener("openChange", function InvoiceEditComponent_Conditional_3_Conditional_108_Template_app_payment_dialog_openChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.payOpen, $event) || (ctx_r1.payOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function InvoiceEditComponent_Conditional_3_Conditional_108_Template_app_payment_dialog_saved_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshPayments());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.status === "issued" && ctx_r1.balance > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.payments().length ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Paid ", \u0275\u0275pipeBind4(9, 9, ctx_r1.paid(), ctx_r1.currency, "symbol", "1.2-2"), " of ", \u0275\u0275pipeBind4(10, 14, ctx_r1.total, ctx_r1.currency, "symbol", "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.balance > 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx_r1.payOpen);
    \u0275\u0275property("invoiceId", ctx_r1.invoiceId)("balance", ctx_r1.balance)("reference", ctx_r1.invoiceNumber);
  }
}
function InvoiceEditComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "button", 4);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.leave());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 5);
    \u0275\u0275template(5, InvoiceEditComponent_Conditional_3_Conditional_5_Template, 1, 0)(6, InvoiceEditComponent_Conditional_3_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275template(9, InvoiceEditComponent_Conditional_3_Conditional_9_Template, 3, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, InvoiceEditComponent_Conditional_3_Conditional_10_Template, 2, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InvoiceEditComponent_Conditional_3_Conditional_11_Template, 7, 0, "div", 8);
    \u0275\u0275elementStart(12, "div", 9)(13, "section", 10)(14, "h2", 11);
    \u0275\u0275text(15, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "label", 14);
    \u0275\u0275text(19, "Title");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.title, $event) || (ctx_r1.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "label");
    \u0275\u0275text(24, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "app-info-hint", 16);
    \u0275\u0275text(26, " Linking a job keeps that booking's total in step with this invoice. Leave it empty to bill work that never had a time slot \u2014 a licence, a re-edit, a call-out. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "app-select", 17);
    \u0275\u0275listener("changed", function InvoiceEditComponent_Conditional_3_Template_app_select_changed_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.jobId = $event;
      return \u0275\u0275resetView(ctx_r1.onJobChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "section", 10)(29, "h2", 11);
    \u0275\u0275text(30, "Billed to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 12)(32, "div", 13)(33, "label");
    \u0275\u0275text(34, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "app-info-hint", 18);
    \u0275\u0275text(36, " A ");
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38, "saved client");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " brings its company, VAT number and billing address onto the invoice, so it is VAT-ready and reusable. A ");
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41, "one-off name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " bills to that name only and is never saved. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 19)(44, "app-select", 20);
    \u0275\u0275listener("changed", function InvoiceEditComponent_Conditional_3_Template_app_select_changed_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clientId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.contactName, $event) || (ctx_r1.contactName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 22);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openClientEditor());
    });
    \u0275\u0275text(47, "+ New client");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 19)(49, "div", 12)(50, "div", 13)(51, "label");
    \u0275\u0275text(52, "Worker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "app-info-hint", 23);
    \u0275\u0275text(54, " Who earned this money. It decides whose figures this invoice appears in when you view the business by worker. It is never printed on the invoice. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "app-select", 24);
    \u0275\u0275listener("changed", function InvoiceEditComponent_Conditional_3_Template_app_select_changed_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.staffId = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 12)(57, "div", 13)(58, "label");
    \u0275\u0275text(59, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "app-info-hint", 25);
    \u0275\u0275text(61, " Groups this invoice in earnings-by-service reporting. Optional, and not shown to the client \u2014 the charges below are what they read. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "app-select", 26);
    \u0275\u0275listener("changed", function InvoiceEditComponent_Conditional_3_Template_app_select_changed_62_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.serviceId = $event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "section", 10)(64, "h2", 11);
    \u0275\u0275text(65, "Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 27)(67, "div", 12)(68, "div", 13)(69, "label");
    \u0275\u0275text(70, "Work done on");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.serviceDate, $event) || (ctx_r1.serviceDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 12)(73, "div", 13)(74, "label");
    \u0275\u0275text(75, "Issue date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "app-info-hint", 29);
    \u0275\u0275text(77, " The date the invoice is raised. Its YEAR sets the invoice number's year, which is why the numbering stays continuous even when you bill a job months after shooting it. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.issueDate, $event) || (ctx_r1.issueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 12)(80, "div", 13)(81, "label");
    \u0275\u0275text(82, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "app-info-hint", 30);
    \u0275\u0275text(84, " When payment is expected. Leave it blank and your organisation's standard payment terms are applied from the issue date. Overdue is measured from this. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dueDate, $event) || (ctx_r1.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "section", 10)(87, "div", 13)(88, "h2", 11);
    \u0275\u0275text(89, "Charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "app-info-hint", 31);
    \u0275\u0275text(91, " These are the source of truth for what the client is charged. ");
    \u0275\u0275template(92, InvoiceEditComponent_Conditional_3_Conditional_92_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "app-line-items-editor", 32);
    \u0275\u0275twoWayListener("itemsChange", function InvoiceEditComponent_Conditional_3_Template_app_line_items_editor_itemsChange_93_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.items, $event) || (ctx_r1.items = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "section", 10)(95, "div", 12)(96, "div", 13)(97, "label", 33);
    \u0275\u0275text(98, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "app-info-hint", 34);
    \u0275\u0275text(100, " Printed on this invoice, under the charges. For anything the client asked to see in writing \u2014 a reference, a purchase order, agreed terms. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "textarea", 35);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_textarea_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(102, "div", 36)(103, "button", 37);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_103_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(104);
    \u0275\u0275elementEnd();
    \u0275\u0275template(105, InvoiceEditComponent_Conditional_3_Conditional_105_Template, 2, 1, "button", 38);
    \u0275\u0275elementStart(106, "button", 39);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.leave());
    });
    \u0275\u0275text(107, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(108, InvoiceEditComponent_Conditional_3_Conditional_108_Template, 13, 19);
    \u0275\u0275elementStart(109, "app-client-editor", 40);
    \u0275\u0275twoWayListener("openChange", function InvoiceEditComponent_Conditional_3_Template_app_client_editor_openChange_109_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientEditorOpen, $event) || (ctx_r1.clientEditorOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function InvoiceEditComponent_Conditional_3_Template_app_client_editor_saved_109_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClientCreated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.backLabel);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isNew() ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.billsTo, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isStandalone ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isNew() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.status === "void" ? 11 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.title);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.jobId)("options", ctx_r1.jobSelectOptions());
    \u0275\u0275advance(17);
    \u0275\u0275property("value", ctx_r1.clientId)("options", ctx_r1.clientSelectOptions())("clearable", true);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contactName);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r1.staffId)("options", ctx_r1.staffSelectOptions())("clearable", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.serviceId)("options", ctx_r1.serviceSelectOptions())("clearable", true);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.serviceDate);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.issueDate);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dueDate);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx_r1.isStandalone ? 92 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("items", ctx_r1.items);
    \u0275\u0275property("currency", ctx_r1.currency)("services", ctx_r1.services());
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canSave);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : ctx_r1.isNew() ? "Create invoice" : "Save invoice", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isStandalone && !ctx_r1.isNew() ? 105 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.isNew() && ctx_r1.invoiceId ? 108 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx_r1.clientEditorOpen);
  }
}
var METHOD_LABEL = {
  card: "Card",
  cash: "Cash",
  revolut: "Revolut",
  bank: "Bank transfer",
  other: "Other"
};
var InvoiceEditComponent = class _InvoiceEditComponent {
  constructor() {
    this.jobSelectOptions = computed(() => [
      { value: "", label: "No job \u2014 invoice only" },
      ...this.jobOptions().map((o) => ({
        value: o.id,
        label: o.title,
        hint: o.clientName ?? void 0
      }))
    ]);
    this.clientSelectOptions = computed(() => this.data.clients().map((c) => ({ value: c.id, label: c.name, hint: c.company ?? void 0 })));
    this.staffSelectOptions = computed(() => this.staff().map((s) => ({ value: s.id, label: s.name })));
    this.serviceSelectOptions = computed(() => this.services().map((s) => ({ value: s.id, label: s.name })));
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.data = inject(BookingDataService);
    this.auth = inject(BookingsAuthService);
    this.admin = inject(BookingAdminService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.services = signal([]);
    this.staff = signal([]);
    this.jobOptions = signal([]);
    this.loading = signal(true);
    this.saving = signal(false);
    this.notFound = signal(false);
    this.isNew = signal(false);
    this.clientEditorOpen = signal(false);
    this.invoiceId = null;
    this.invoiceNumber = "";
    this.currency = "EUR";
    this.items = [];
    this.notes = "";
    this.issueDate = "";
    this.dueDate = "";
    this.title = "";
    this.serviceDate = "";
    this.contactName = "";
    this.jobId = "";
    this.clientId = "";
    this.staffId = "";
    this.serviceId = "";
    this.status = "issued";
    this.backTo = "invoices";
    this.baseline = "";
    this.payments = signal([]);
    this.payOpen = signal(false);
    this.paid = computed(() => this.payments().filter((p) => p.status === "completed").reduce((s, p) => s + Number(p.amount), 0));
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (!org) {
        this.notFound.set(true);
        this.loading.set(false);
        return;
      }
      const [svcs, stf, jobs] = yield Promise.all([
        this.admin.listServices(org),
        this.admin.listStaff(org),
        this.admin.loadJobOptions(org),
        this.data.loadClients()
      ]);
      this.services.set(svcs.filter((s) => s.is_active));
      this.staff.set(stf);
      this.jobOptions.set(jobs);
      this.currency = (yield this.admin.getOrgSettings(org))?.currency ?? "EUR";
      if (this.route.snapshot.queryParamMap.get("from") === "booking")
        this.backTo = "booking";
      const byInvoice = this.route.snapshot.paramMap.get("invoiceId");
      const byBooking = this.route.snapshot.paramMap.get("id");
      if (byInvoice)
        yield this.loadByInvoice(byInvoice);
      else if (byBooking)
        yield this.loadByBooking(byBooking);
      else
        this.startNew();
      yield this.refreshPayments();
      this.baseline = this.snapshot();
      this.loading.set(false);
    });
  }
  /** A brand-new standalone invoice: no booking, dated today. */
  startNew() {
    this.isNew.set(true);
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    this.issueDate = today;
    this.serviceDate = today;
    this.items = [{ description: "", amount: 0 }];
  }
  loadByInvoice(id) {
    return __async(this, null, function* () {
      const inv = yield this.data.getInvoiceById(id);
      if (!inv) {
        this.notFound.set(true);
        return;
      }
      this.applyInvoice(inv.id, inv);
    });
  }
  loadByBooking(bookingId) {
    return __async(this, null, function* () {
      const inv = yield this.data.getInvoiceByBooking(bookingId);
      if (inv) {
        this.applyInvoice(inv.id, inv);
        this.jobId = bookingId;
        return;
      }
      this.jobId = bookingId;
      this.items = yield this.data.getInvoiceItems(bookingId);
      if (this.items.length === 0)
        this.items = [{ description: "", amount: 0 }];
      this.issueDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    });
  }
  applyInvoice(id, inv) {
    this.invoiceId = id;
    this.jobId = inv.booking_id ?? "";
    this.clientId = inv.client_id ?? "";
    this.staffId = inv.staff_id ?? "";
    this.serviceId = inv.service_id ?? "";
    this.contactName = inv.contact_name ?? "";
    this.title = inv.title ?? "";
    this.serviceDate = inv.service_date ?? "";
    this.issueDate = inv.issue_date ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    this.dueDate = inv.due_date ?? "";
    this.notes = inv.notes ?? "";
    this.status = inv.status ?? "issued";
    this.items = (inv.line_items ?? []).map((i) => __spreadValues(__spreadValues({
      description: i.description,
      amount: Number(i.amount)
    }, i.serviceId ? { serviceId: i.serviceId } : {}), i.hours ? { hours: Number(i.hours) } : {}));
    if (this.items.length === 0)
      this.items = [{ description: "", amount: 0 }];
    this.invoiceNumber = inv.number_seq ? `${inv.number_year}-${String(inv.number_seq).padStart(3, "0")}` : "";
  }
  // ── Derived ─────────────────────────────────────────────────────────
  get total() {
    return this.items.reduce((s, i) => s + (Number(i.amount) || 0), 0);
  }
  refreshPayments() {
    return __async(this, null, function* () {
      this.payments.set(this.invoiceId ? yield this.data.getInvoicePayments(this.invoiceId) : []);
    });
  }
  /** What is still owed, against the lines as they stand in the form; never below zero. */
  get balance() {
    return Math.max(0, Math.round((this.total - this.paid()) * 100) / 100);
  }
  methodLabel(m) {
    return METHOD_LABEL[m] ?? m;
  }
  removePayment(p) {
    return __async(this, null, function* () {
      if (p.stripe_payment_intent_id) {
        this.toast.error("Card payments are managed in Stripe and can\u2019t be removed here.");
        return;
      }
      if (!(yield this.confirm.ask({
        title: "Remove payment",
        message: `Remove this \u20AC${p.amount} payment? This only fixes the record \u2014 it does not refund anyone.`,
        confirmLabel: "Remove",
        danger: true
      })))
        return;
      yield this.data.deletePayment(p.id, p.booking_id ?? null);
      yield this.refreshPayments();
      this.toast.info("Payment removed");
    });
  }
  unvoid() {
    return __async(this, null, function* () {
      if (!this.invoiceId)
        return;
      const res = yield this.data.setInvoiceVoid(this.invoiceId, false);
      if (res.error) {
        this.toast.error(res.error);
        return;
      }
      this.status = "issued";
      this.toast.success("Invoice is open again");
    });
  }
  get isStandalone() {
    return !this.jobId;
  }
  get selectedClientName() {
    return this.data.clients().find((c) => c.id === this.clientId)?.name ?? "";
  }
  /** Who this invoice bills: a real client row, else the typed one-off name. */
  get billsTo() {
    return this.selectedClientName || this.contactName || "\u2014";
  }
  get canSave() {
    const itemsOk = this.items.length > 0 && this.items.every((i) => i.description.trim().length > 0);
    const identified = !!this.jobId || !!this.clientId || this.contactName.trim().length > 0;
    return !this.saving() && itemsOk && identified;
  }
  snapshot() {
    return JSON.stringify({
      items: this.items,
      notes: this.notes,
      issueDate: this.issueDate,
      dueDate: this.dueDate,
      title: this.title,
      serviceDate: this.serviceDate,
      contactName: this.contactName,
      jobId: this.jobId,
      clientId: this.clientId,
      staffId: this.staffId,
      serviceId: this.serviceId,
      status: this.status
    });
  }
  isDirty() {
    return !this.loading() && this.snapshot() !== this.baseline;
  }
  onItemsChange(items) {
    this.items = items;
  }
  // ── Client picker (reuses the full editor — never a stub) ───────────
  openClientEditor() {
    this.clientEditorOpen.set(true);
  }
  onClientCreated(c) {
    this.clientId = c.id;
  }
  /** Picking a job adopts its client/worker/date, so a linked invoice starts consistent. */
  onJobChange() {
    const job = this.jobOptions().find((j) => j.id === this.jobId);
    if (!job)
      return;
    if (!this.title)
      this.title = job.title;
    if (!this.serviceDate && job.start_at)
      this.serviceDate = job.start_at.slice(0, 10);
  }
  returnCommands() {
    return this.backTo === "invoices" || !this.jobId ? ["/bookings/invoices"] : ["/bookings", this.jobId];
  }
  get backLabel() {
    return this.backTo === "invoices" || !this.jobId ? "\u2190 Invoices" : "\u2190 Back to booking";
  }
  leave() {
    return __async(this, null, function* () {
      if (this.isDirty() && !(yield this.confirm.ask({
        title: "Unsaved changes",
        message: "You have unsaved changes to this invoice. Leave without saving?",
        confirmLabel: "Leave",
        danger: true
      })))
        return;
      this.router.navigate(this.returnCommands());
    });
  }
  onBeforeUnload(e) {
    if (this.isDirty()) {
      e.preventDefault();
      e.returnValue = "";
    }
  }
  save() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || !this.canSave)
        return;
      this.saving.set(true);
      try {
        const items = this.items.map((i) => __spreadValues(__spreadValues({
          description: i.description.trim(),
          amount: Number(i.amount) || 0
        }, i.serviceId ? { serviceId: i.serviceId } : {}), i.hours ? { hours: i.hours } : {}));
        const invoice = __spreadProps(__spreadValues({}, this.invoiceId ? { id: this.invoiceId } : {}), {
          booking_id: this.jobId || null,
          client_id: this.clientId || null,
          staff_id: this.staffId || null,
          service_id: this.serviceId || null,
          contact_name: this.contactName.trim() || null,
          title: this.title.trim() || null,
          service_date: this.serviceDate || null,
          issue_date: this.issueDate || null,
          due_date: this.dueDate || null,
          notes: this.notes.trim() || null,
          status: this.status
        });
        const res = yield this.data.saveInvoiceRecord(org, invoice, items);
        if (res.error || !res.id) {
          this.toast.error("Could not save the invoice.");
          return;
        }
        this.invoiceId = res.id;
        if (this.jobId) {
          const all = yield this.data.listInvoicesForBooking(this.jobId);
          const gross = all.reduce((sum, r) => sum + Number(r.amount_gross ?? 0), 0);
          yield this.data.setAmount(this.jobId, all.length ? gross : this.total);
        }
        this.baseline = this.snapshot();
        this.toast.success(this.isNew() ? "Invoice created" : "Invoice saved");
        this.router.navigate(this.returnCommands());
      } finally {
        this.saving.set(false);
      }
    });
  }
  /** Only meaningful for a booking-linked invoice: revert the lines to the booking. */
  resetToBooking() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || !this.jobId)
        return;
      if (!(yield this.confirm.ask({
        title: "Reset invoice",
        message: "Discard your edits and revert this invoice to the booking details?",
        confirmLabel: "Reset",
        danger: true
      })))
        return;
      this.saving.set(true);
      try {
        yield this.data.resetInvoice(org, this.jobId);
        this.baseline = this.snapshot();
        this.toast.info("Invoice reset to the booking");
        this.router.navigate(this.returnCommands());
      } finally {
        this.saving.set(false);
      }
    });
  }
  /** Preview the printable invoice — by booking when there is one (keeps existing URLs
   *  working), otherwise by the invoice's own id. Unavailable only before the first save,
   *  when there is no invoice id to address yet. */
  preview() {
    if (this.jobId) {
      window.open(`/book/invoice/${this.jobId}`, "_blank", "noopener");
      return;
    }
    if (this.invoiceId)
      window.open(`/book/invoice?inv=${this.invoiceId}`, "_blank", "noopener");
  }
  static {
    this.\u0275fac = function InvoiceEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceEditComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceEditComponent, selectors: [["app-invoice-edit"]], hostBindings: function InvoiceEditComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function InvoiceEditComponent_beforeunload_HostBindingHandler($event) {
          return ctx.onBeforeUnload($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 4, vars: 1, consts: [[1, "page"], [1, "muted"], ["routerLink", "/bookings/invoices", 1, "btn", "btn--ghost"], [1, "page__head"], ["type", "button", 1, "back", 3, "click"], [1, "page__title"], [1, "page__sub"], [1, "btn", "btn--ghost"], [1, "void-note"], [1, "card", "form"], [1, "sec"], [1, "sec__title"], [1, "field"], [1, "field__top"], ["for", "iv-title"], ["id", "iv-title", "type", "text", "placeholder", "e.g. Drone filming \u2014 Valletta", 3, "ngModelChange", "ngModel"], ["label", "Job"], ["placeholder", "No job \u2014 invoice only", 3, "changed", "value", "options"], ["label", "Customer"], [1, "field-row"], ["placeholder", "Saved client", 3, "changed", "value", "options", "clearable"], ["type", "text", "placeholder", "\u2026or a one-off name", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "link-btn", 3, "click"], ["label", "Worker"], ["placeholder", "Unassigned", 3, "changed", "value", "options", "clearable"], ["label", "Service"], ["placeholder", "Unattributed", 3, "changed", "value", "options", "clearable"], [1, "field-row", "field-row--three"], ["type", "date", 3, "ngModelChange", "ngModel"], ["label", "Issue date"], ["label", "Due date"], ["label", "Charges"], [3, "itemsChange", "items", "currency", "services"], ["for", "iv-note"], ["label", "Note"], ["id", "iv-note", "rows", "2", "placeholder", "Anything specific the client asked for on this invoice", 3, "ngModelChange", "ngModel"], [1, "actions"], [1, "btn", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--ghost", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], [3, "openChange", "saved", "open"], [1, "tag"], [1, "btn", "btn--ghost", 3, "click"], [1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "card", "pays"], [1, "pays__head"], ["type", "button", 1, "btn", "btn--ghost"], [1, "pays__list"], [1, "pays__sum"], [3, "openChange", "saved", "open", "invoiceId", "balance", "reference"], [1, "pays__row", 3, "pays__row--off"], [1, "pays__row"], [1, "pays__date"], [1, "pays__how"], [1, "pays__amt"], ["type", "button", "title", "Remove payment", 1, "pays__del"], ["type", "button", "title", "Remove payment", 1, "pays__del", 3, "click"]], template: function InvoiceEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, InvoiceEditComponent_Conditional_1_Template, 2, 0, "p", 1)(2, InvoiceEditComponent_Conditional_2_Template, 4, 0)(3, InvoiceEditComponent_Conditional_3_Template, 110, 32);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 1 : ctx.notFound() ? 2 : 3);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, CurrencyPipe, DatePipe, LineItemsEditorComponent, ClientEditorComponent, SelectComponent, InfoHintComponent, PaymentDialogComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 12.5px;\n  color: #F4A922;\n  text-decoration: none;\n  font-weight: 600;\n}\n.back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #b45309;\n  background: #fef3c7;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.card__h[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #94a3b8;\n  margin: 0 0 16px;\n}\n.opt[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1.5px solid #e2e8f0;\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card__h[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.void-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n  padding: 10px 14px;\n  border-radius: var(--radius-md);\n  background: var(--color-bg-muted);\n  color: var(--color-text-secondary);\n  font-size: 13px;\n}\n.pays[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.pays__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.pays__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.pays__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 110px 1fr auto 28px;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--color-border);\n  font-size: 13px;\n}\n.pays__row--off[_ngcontent-%COMP%] {\n  color: var(--color-text-light);\n  text-decoration: line-through;\n}\n.pays__date[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.pays__amt[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.pays__del[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-light);\n  font-size: 13px;\n}\n.pays__del[_ngcontent-%COMP%]:hover {\n  color: #b91c1c;\n}\n.pays__sum[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n}\n/*# sourceMappingURL=invoice-edit.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceEditComponent, { className: "InvoiceEditComponent", filePath: "src/app/booking/platform/invoices/invoice-edit.component.ts", lineNumber: 40 });
})();
export {
  InvoiceEditComponent
};
//# sourceMappingURL=chunk-U32KITZR.js.map
