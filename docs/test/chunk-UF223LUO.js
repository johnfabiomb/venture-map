import {
  DEFAULT_INVOICE_EMAIL,
  DEFAULT_REMINDER_EMAIL,
  INVOICE_EMAIL_KEY_DEFS
} from "./chunk-3WWECWQ4.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingAdminService,
  GCAL_COLORS
} from "./chunk-3T6U65XO.js";
import {
  SelectComponent
} from "./chunk-MTW66F7I.js";
import "./chunk-GVBB2R7I.js";
import {
  BookingDataService
} from "./chunk-I23P5XRM.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-RKKFBZE5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BW7NI53J.js";
import "./chunk-7VIBRFOE.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-F2R7EXZF.js";
import "./chunk-YHDSDEW7.js";
import "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/settings/settings-admin.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.user_id;
var _forTrack2 = ($index, $item) => $item.id;
function SettingsAdminComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_15_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u2713 Saved");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275text(2, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "label", 10)(5, "span");
    \u0275\u0275text(6, "Timezone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-select", 11);
    \u0275\u0275listener("changed", function SettingsAdminComponent_Conditional_8_Case_15_Template_app_select_changed_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.timezone = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 10)(9, "span");
    \u0275\u0275text(10, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-select", 11);
    \u0275\u0275listener("changed", function SettingsAdminComponent_Conditional_8_Case_15_Template_app_select_changed_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.currency = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "label", 12)(13, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_15_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.workBoard, $event) || (ctx_r1.workBoard = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Enable ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "Work board");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " \u2014 post-production to-do for confirmed jobs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14)(19, "button", 15);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_15_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, SettingsAdminComponent_Conditional_8_Case_15_Conditional_21_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.timezone)("options", ctx_r1.tzOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.currency)("options", ctx_r1.currencyOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workBoard);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving() ? "Saving\u2026" : "Save settings");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saved() ? 21 : -1);
  }
}
function SettingsAdminComponent_Conditional_8_Case_16_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u2713 Saved");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275text(2, "Booking rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "label", 10)(5, "span");
    \u0275\u0275text(6, "Deposit %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_16_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.depositPercent, $event) || (ctx_r1.depositPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 10)(9, "span");
    \u0275\u0275text(10, "Hold (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_16_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.holdMinutes, $event) || (ctx_r1.holdMinutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 10)(13, "span");
    \u0275\u0275text(14, "Min lead time (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_16_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.minLeadMinutes, $event) || (ctx_r1.minLeadMinutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "label", 12)(17, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_16_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.depositAllowed, $event) || (ctx_r1.depositAllowed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Allow deposits by default ");
    \u0275\u0275elementStart(19, "span", 20);
    \u0275\u0275text(20, "(off = clients pay in full; can still be overridden per booking)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 12)(22, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_16_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cashAllowed, $event) || (ctx_r1.cashAllowed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Allow cash requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14)(25, "button", 15);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_16_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, SettingsAdminComponent_Conditional_8_Case_16_Conditional_27_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.depositPercent);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.holdMinutes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.minLeadMinutes);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.depositAllowed);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cashAllowed);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving() ? "Saving\u2026" : "Save settings");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saved() ? 27 : -1);
  }
}
function SettingsAdminComponent_Conditional_8_Case_17_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10)(2, "span");
    \u0275\u0275text(3, "VAT number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Conditional_29_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.vatNumber, $event) || (ctx_r1.vatNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 10)(6, "span");
    \u0275\u0275text(7, "VAT rate %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Conditional_29_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.vatRate, $event) || (ctx_r1.vatRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10, "Invoices will show your VAT number and a net / VAT / gross breakdown (prices treated as VAT-inclusive).");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vatNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vatRate);
  }
}
function SettingsAdminComponent_Conditional_8_Case_17_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "No VAT breakdown is shown on invoices. Turn this on once you register for VAT.");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_17_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u2713 Saved");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275text(2, "Company & Invoicing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, "These details appear on every invoice you issue. Fill them in before sending invoices to clients.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 10)(6, "span");
    \u0275\u0275text(7, "Registered business name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.legalName, $event) || (ctx_r1.legalName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 10)(10, "span");
    \u0275\u0275text(11, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 23);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.companyAddress, $event) || (ctx_r1.companyAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "label", 10)(15, "span");
    \u0275\u0275text(16, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.companyPhone, $event) || (ctx_r1.companyPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 10)(19, "span");
    \u0275\u0275text(20, "Invoicing email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.companyEmail, $event) || (ctx_r1.companyEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "label", 12)(23, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vatRegistered, $event) || (ctx_r1.vatRegistered = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " I am ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "VAT-registered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 20);
    \u0275\u0275text(28, "(off = Article 11 small undertaking \u2014 no VAT charged)");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, SettingsAdminComponent_Conditional_8_Case_17_Conditional_29_Template, 11, 2)(30, SettingsAdminComponent_Conditional_8_Case_17_Conditional_30_Template, 2, 0, "p", 21);
    \u0275\u0275elementStart(31, "label", 10)(32, "span");
    \u0275\u0275text(33, "VAT / legal note ");
    \u0275\u0275elementStart(34, "span", 20);
    \u0275\u0275text(35, "(printed on every invoice)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "textarea", 26);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Template_textarea_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vatNote, $event) || (ctx_r1.vatNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 9)(38, "label", 10)(39, "span");
    \u0275\u0275text(40, "Invoice number prefix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.invoicePrefix, $event) || (ctx_r1.invoicePrefix = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 10)(43, "span");
    \u0275\u0275text(44, "Example invoice number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 28);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "label", 10)(48, "span");
    \u0275\u0275text(49, "Invoice footer ");
    \u0275\u0275elementStart(50, "span", 20);
    \u0275\u0275text(51, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "textarea", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_17_Template_textarea_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.invoiceFooter, $event) || (ctx_r1.invoiceFooter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 30);
    \u0275\u0275text(54, " Tip: use these keys and each invoice fills in its own figures \u2014 ");
    \u0275\u0275elementStart(55, "code");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " deposit % (e.g. 30%), ");
    \u0275\u0275elementStart(58, "code");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " deposit amount, ");
    \u0275\u0275elementStart(61, "code");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " remaining % (e.g. 70%), ");
    \u0275\u0275elementStart(64, "code");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, " remaining amount, ");
    \u0275\u0275elementStart(67, "code");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, " full total. ");
    \u0275\u0275element(70, "br");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 14)(73, "button", 15);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_17_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, SettingsAdminComponent_Conditional_8_Case_17_Conditional_75_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.legalName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.companyAddress);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.companyPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.companyEmail);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vatRegistered);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.vatRegistered ? 29 : 30);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vatNote);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.invoicePrefix);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.invoicePrefix || "INV", "-2026-007");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.invoiceFooter);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate("{depositPercent}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("{deposit}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("{balancePercent}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("{balance}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("{total}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("e.g. \u201C", "{depositPercent}", " upfront payment is required to begin the project. The remaining ", "{balancePercent}", " balance is due upon completion.\u201D ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving() ? "Saving\u2026" : "Save settings");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saved() ? 75 : -1);
  }
}
function SettingsAdminComponent_Conditional_8_Case_18_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Can send email \u2713 ");
  }
}
function SettingsAdminComponent_Conditional_8_Case_18_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Connected, but the send-email permission is missing \u2014 reconnect to grant it. ");
  }
}
function SettingsAdminComponent_Conditional_8_Case_18_Conditional_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Last error: ", ctx_r1.gmail().last_error, "");
  }
}
function SettingsAdminComponent_Conditional_8_Case_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275template(5, SettingsAdminComponent_Conditional_8_Case_18_Conditional_5_Conditional_5_Template, 1, 0)(6, SettingsAdminComponent_Conditional_8_Case_18_Conditional_5_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 44)(8, "button", 45);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_18_Conditional_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.disconnectGoogle());
    });
    \u0275\u0275text(9, "Disconnect");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, SettingsAdminComponent_Conditional_8_Case_18_Conditional_5_Conditional_10_Template, 2, 1, "p", 46);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Connected as ", ctx_r1.gmail().email, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.gmail().can_send ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.gmailBusy());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.gmail().last_error ? 10 : -1);
  }
}
function SettingsAdminComponent_Conditional_8_Case_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_18_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.connectGoogle());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.gmailBusy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.gmailBusy() ? "Opening Google\u2026" : "Connect Google", " ");
  }
}
function SettingsAdminComponent_Conditional_8_Case_18_For_54_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
  }
}
function SettingsAdminComponent_Conditional_8_Case_18_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275template(3, SettingsAdminComponent_Conditional_8_Case_18_For_54_Conditional_3_Template, 1, 0);
  }
  if (rf & 2) {
    const k_r10 = ctx.$implicit;
    const \u0275$index_391_r11 = ctx.$index;
    const \u0275$count_391_r12 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r10.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r10.describe, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_391_r11 === \u0275$count_391_r12 - 1) ? 3 : -1);
  }
}
function SettingsAdminComponent_Conditional_8_Case_18_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u2713 Saved");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275text(2, "Send invoices from your own address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, " Connect your Google account and invoices go out from you, with the PDF attached. Without it you can still email them \u2014 the message is prepared and opens in your own mail app. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsAdminComponent_Conditional_8_Case_18_Conditional_5_Template, 11, 4)(6, SettingsAdminComponent_Conditional_8_Case_18_Conditional_6_Template, 2, 2, "button", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "h2", 8);
    \u0275\u0275text(9, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 21);
    \u0275\u0275text(11, " The address clients see. It must be added to your Google account under ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "Gmail \u2192 Settings \u2192 Accounts \u2192 Send mail as");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " and verified, or Google will quietly send from your main address instead. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 9)(16, "label", 10)(17, "span");
    \u0275\u0275text(18, "From address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_18_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.emailFrom, $event) || (ctx_r1.emailFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "label", 10)(21, "span");
    \u0275\u0275text(22, "From name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_18_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.emailFromName, $event) || (ctx_r1.emailFromName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 9)(25, "label", 10)(26, "span");
    \u0275\u0275text(27, "Reply-to ");
    \u0275\u0275elementStart(28, "span", 20);
    \u0275\u0275text(29, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_18_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.emailReplyTo, $event) || (ctx_r1.emailReplyTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label", 10)(32, "span");
    \u0275\u0275text(33, "Default payment terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_18_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentTermsDays, $event) || (ctx_r1.paymentTermsDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 21);
    \u0275\u0275text(36, "Days after the issue date \u2014 sets each invoice's due date. Overridable per invoice.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "label", 12)(38, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_18_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.emailBccSelf, $event) || (ctx_r1.emailBccSelf = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Send me a copy of every invoice email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 7)(41, "h2", 8);
    \u0275\u0275text(42, "Invoice email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "label", 10)(44, "span");
    \u0275\u0275text(45, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_18_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.invoiceSubject, $event) || (ctx_r1.invoiceSubject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "label", 10)(48, "span");
    \u0275\u0275text(49, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "textarea", 38);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_18_Template_textarea_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.invoiceBody, $event) || (ctx_r1.invoiceBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "span", 30);
    \u0275\u0275text(52, " Each invoice fills these in: ");
    \u0275\u0275repeaterCreate(53, SettingsAdminComponent_Conditional_8_Case_18_For_54_Template, 4, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 7)(56, "h2", 8);
    \u0275\u0275text(57, "Reminder email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 21);
    \u0275\u0275text(59, "Used when you chase an unpaid invoice. Same keys \u2014 ");
    \u0275\u0275elementStart(60, "code");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, " is how late it is.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "label", 10)(64, "span");
    \u0275\u0275text(65, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_18_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.reminderSubject, $event) || (ctx_r1.reminderSubject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "label", 10)(68, "span");
    \u0275\u0275text(69, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "textarea", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_18_Template_textarea_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.reminderBody, $event) || (ctx_r1.reminderBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 14)(72, "button", 15);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_18_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(74, SettingsAdminComponent_Conditional_8_Case_18_Conditional_74_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.gmail().connected ? 5 : 6);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailFromName);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailReplyTo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentTermsDays);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailBccSelf);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.invoiceSubject);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.invoiceBody);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.emailKeys);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate("{daysOverdue}");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reminderSubject);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reminderBody);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving() ? "Saving\u2026" : "Save settings");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saved() ? 74 : -1);
  }
}
function SettingsAdminComponent_Conditional_8_Case_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_19_For_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_19_For_19_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const m_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeMember(m_r15));
    });
    \u0275\u0275text(1, "Remove");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_19_For_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "owner \u2014 cannot be removed");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_19_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsAdminComponent_Conditional_8_Case_19_For_19_Conditional_5_Template, 2, 0, "button", 55)(6, SettingsAdminComponent_Conditional_8_Case_19_For_19_Conditional_6_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r15.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r15.role);
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r15.role !== "owner" ? 5 : 6);
  }
}
function SettingsAdminComponent_Conditional_8_Case_19_Conditional_20_For_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("worker: ", i_r17.staff_name, "");
  }
}
function SettingsAdminComponent_Conditional_8_Case_19_Conditional_20_For_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "expired");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_19_Conditional_20_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsAdminComponent_Conditional_8_Case_19_Conditional_20_For_6_Conditional_5_Template, 2, 1, "span", 54)(6, SettingsAdminComponent_Conditional_8_Case_19_Conditional_20_For_6_Conditional_6_Template, 2, 0, "span", 57);
    \u0275\u0275elementStart(7, "button", 56);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_19_Conditional_20_For_6_Template_button_click_7_listener() {
      const i_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.revokeInvite(i_r17));
    });
    \u0275\u0275text(8, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r17.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r17.role);
    \u0275\u0275advance();
    \u0275\u0275conditional(i_r17.staff_name ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(i_r17.expired ? 6 : -1);
  }
}
function SettingsAdminComponent_Conditional_8_Case_19_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 49);
    \u0275\u0275text(1, "Waiting to be claimed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3, "These people get access automatically the first time they sign in with that address. Nothing else to do.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 47);
    \u0275\u0275repeaterCreate(5, SettingsAdminComponent_Conditional_8_Case_19_Conditional_20_For_6_Template, 9, 4, "div", 48, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.invites());
  }
}
function SettingsAdminComponent_Conditional_8_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2", 8);
    \u0275\u0275text(2, "Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, "People who can manage this organization.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, " An ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "admin");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " has full access: they can see and change every booking, invoice and client in this organization, and remove other admins. There is no narrower role yet. To make someone a ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "bookable worker");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " (so jobs can be assigned to them), add them under ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "Staff");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " as well and link the two with \u201CSigns in as\u201D. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SettingsAdminComponent_Conditional_8_Case_19_Conditional_16_Template, 2, 0, "p", 4);
    \u0275\u0275elementStart(17, "div", 47);
    \u0275\u0275repeaterCreate(18, SettingsAdminComponent_Conditional_8_Case_19_For_19_Template, 7, 3, "div", 48, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SettingsAdminComponent_Conditional_8_Case_19_Conditional_20_Template, 7, 0);
    \u0275\u0275elementStart(21, "h3", 49);
    \u0275\u0275text(22, "Invite someone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 9)(24, "label", 10)(25, "span");
    \u0275\u0275text(26, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_19_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newMemberEmail, $event) || (ctx_r1.newMemberEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "label", 10)(29, "span");
    \u0275\u0275text(30, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "app-select", 51);
    \u0275\u0275listener("changed", function SettingsAdminComponent_Conditional_8_Case_19_Template_app_select_changed_31_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newMemberRole = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "label", 10)(33, "span");
    \u0275\u0275text(34, "Also add as a worker ");
    \u0275\u0275elementStart(35, "em");
    \u0275\u0275text(36, "optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_19_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newMemberStaffName, $event) || (ctx_r1.newMemberStaffName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "label", 10)(39, "span");
    \u0275\u0275text(40, "Their colour on the shared calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "app-select", 51);
    \u0275\u0275listener("changed", function SettingsAdminComponent_Conditional_8_Case_19_Template_app_select_changed_41_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newMemberColor = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 14)(43, "button", 15);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_19_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addMember());
    });
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "p", 21);
    \u0275\u0275text(46, " They don't need an account yet. If they already have one they are added straight away; if not, the invitation waits and is applied the moment they first sign in. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 21);
    \u0275\u0275text(48, "To create or switch organizations, use the org name at the top of the sidebar.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx_r1.membersLoading() ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.members());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.invites().length ? 20 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMemberEmail);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.newMemberRole)("options", ctx_r1.roleOptions)("searchable", false);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMemberStaffName);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.newMemberColor)("options", ctx_r1.colorOptions)("searchable", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.addingMember() || !ctx_r1.newMemberEmail.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addingMember() ? "Sending\u2026" : "Send invitation", " ");
  }
}
function SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19.error);
  }
}
function SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 53);
    \u0275\u0275text(2, "Your Stripe account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275text(4, "Connected \u2014 charges enabled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "Card payments for your bookings are paid out to your own Stripe account.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "button", 62);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.connectStripe());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.connecting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.connecting() ? "Opening\u2026" : "Manage on Stripe");
  }
}
function SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 53);
    \u0275\u0275text(2, "Your Stripe account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63);
    \u0275\u0275text(4, "Setup incomplete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "You started connecting Stripe but haven't finished. Card payments stay disabled until onboarding is complete.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "button", 15);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.connectStripe());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.connecting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.connecting() ? "Opening\u2026" : "Resume Stripe setup");
  }
}
function SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 53);
    \u0275\u0275text(2, "Your Stripe account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63);
    \u0275\u0275text(4, "Not connected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "Connect your own Stripe account to receive card payments directly. You'll be taken to Stripe to sign in or create an account \u2014 we never see your Stripe password or keys.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "button", 15);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.connectStripe());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.connecting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.connecting() ? "Opening\u2026" : "Connect Stripe");
  }
}
function SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_0_Template, 2, 1, "p", 60)(1, SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_1_Template, 10, 2)(2, SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_2_Template, 10, 2)(3, SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Conditional_3_Template, 10, 2);
  }
  if (rf & 2) {
    const c_r19 = ctx;
    \u0275\u0275conditional(c_r19.error ? 0 : c_r19.connected && c_r19.chargesEnabled ? 1 : c_r19.connected && !c_r19.chargesEnabled ? 2 : 3);
  }
}
function SettingsAdminComponent_Conditional_8_Case_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Checking\u2026");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 58)(2, "h2", 8);
    \u0275\u0275text(3, "Payments (Stripe)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadConnect());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SettingsAdminComponent_Conditional_8_Case_20_Conditional_6_Template, 4, 1)(7, SettingsAdminComponent_Conditional_8_Case_20_Conditional_7_Template, 2, 0, "p", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.connectLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.connectLoading() ? "Checking\u2026" : "Refresh");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.connect()) ? 6 : ctx_r1.connectLoading() ? 7 : -1, tmp_4_0);
  }
}
function SettingsAdminComponent_Conditional_8_Case_21_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.intError());
  }
}
function SettingsAdminComponent_Conditional_8_Case_21_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r24 = ctx;
    \u0275\u0275classProp("badge--ok", st_r24.ok)("badge--bad", !st_r24.ok);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r24.ok ? "Connected" : "Not connected");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(st_r24.detail);
  }
}
function SettingsAdminComponent_Conditional_8_Case_21_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "checking\u2026");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_21_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r25 = ctx;
    \u0275\u0275classProp("badge--ok", g_r25.ok)("badge--bad", !g_r25.ok);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r25.ok ? "Connected" : "Not connected");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r25.detail);
  }
}
function SettingsAdminComponent_Conditional_8_Case_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "checking\u2026");
    \u0275\u0275elementEnd();
  }
}
function SettingsAdminComponent_Conditional_8_Case_21_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10)(2, "span");
    \u0275\u0275text(3, "Calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 66);
    \u0275\u0275listener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_21_Conditional_33_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.calendarIdValue.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "p", 21)(6, "strong");
    \u0275\u0275text(7, "primary");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " is the main calendar of the Google account connected under ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ". To use a separate one, paste its Calendar ID from Google Calendar \u2192 Settings \u2192 that calendar \u2192 Integrate calendar. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14)(13, "button", 15);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_21_Conditional_33_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveCalendarSettings());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.calendarIdValue());
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : "Save calendar settings", " ");
  }
}
function SettingsAdminComponent_Conditional_8_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 58)(2, "h2", 8);
    \u0275\u0275text(3, "Integration status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Case_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.checkIntegrations());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SettingsAdminComponent_Conditional_8_Case_21_Conditional_6_Template, 2, 1, "p", 60);
    \u0275\u0275elementStart(7, "div", 47)(8, "div", 48)(9, "span", 53);
    \u0275\u0275text(10, "Stripe (card payments)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SettingsAdminComponent_Conditional_8_Case_21_Conditional_11_Template, 4, 6)(12, SettingsAdminComponent_Conditional_8_Case_21_Conditional_12_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 48)(14, "span", 53);
    \u0275\u0275text(15, "Google Calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SettingsAdminComponent_Conditional_8_Case_21_Conditional_16_Template, 4, 6)(17, SettingsAdminComponent_Conditional_8_Case_21_Conditional_17_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "h3", 49);
    \u0275\u0275text(19, "Shared team calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 21);
    \u0275\u0275text(21, " Each worker's jobs always go to ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23, "their own");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " calendar \u2014 connect those under ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "Staff");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, ". This is an extra, read-only overview: a single calendar showing everyone, each person in their own colour. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 21);
    \u0275\u0275text(29, " Overlaps on it are normal and mean nothing \u2014 two people can shoot at the same time. It is never used to decide whether someone is free; that always comes from that one worker's own calendar. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 12)(31, "input", 65);
    \u0275\u0275listener("ngModelChange", function SettingsAdminComponent_Conditional_8_Case_21_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setCalendarMirror($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Copy every booking to one shared calendar ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, SettingsAdminComponent_Conditional_8_Case_21_Conditional_33_Template, 15, 3);
    \u0275\u0275elementStart(34, "p", 21);
    \u0275\u0275text(35, " To connect or fix these, follow the step-by-step guide in ");
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37, "documentation/BOOKING_SETUP.md");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " (Stripe keys + webhook, Google OAuth refresh token, and the Supabase secrets each one needs). ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.checking());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.checking() ? "Checking\u2026" : "Re-check");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.intError() ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.stripe()) ? 11 : ctx_r1.checking() ? 12 : -1, tmp_5_0);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.google()) ? 16 : ctx_r1.checking() ? 17 : -1, tmp_6_0);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngModel", ctx_r1.calendarMirror());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.calendarMirror() ? 33 : -1);
  }
}
function SettingsAdminComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 5)(1, "button", 6);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("general"));
    });
    \u0275\u0275text(2, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("booking"));
    });
    \u0275\u0275text(4, "Booking rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 6);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("company"));
    });
    \u0275\u0275text(6, "Company & Invoicing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("email"));
    });
    \u0275\u0275text(8, "Email & sending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("team"));
    });
    \u0275\u0275text(10, "Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 6);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("payments"));
    });
    \u0275\u0275text(12, "Payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 6);
    \u0275\u0275listener("click", function SettingsAdminComponent_Conditional_8_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("integrations"));
    });
    \u0275\u0275text(14, "Integrations");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SettingsAdminComponent_Conditional_8_Case_15_Template, 22, 8, "div", 7)(16, SettingsAdminComponent_Conditional_8_Case_16_Template, 28, 8, "div", 7)(17, SettingsAdminComponent_Conditional_8_Case_17_Template, 76, 20, "div", 7)(18, SettingsAdminComponent_Conditional_8_Case_18_Template, 75, 14)(19, SettingsAdminComponent_Conditional_8_Case_19_Template, 49, 12, "div", 7)(20, SettingsAdminComponent_Conditional_8_Case_20_Template, 8, 3, "div", 7)(21, SettingsAdminComponent_Conditional_8_Case_21_Template, 39, 7, "div", 7);
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === "general");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === "booking");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === "company");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === "email");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === "team");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === "payments");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === "integrations");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.tab()) === "general" ? 15 : tmp_8_0 === "booking" ? 16 : tmp_8_0 === "company" ? 17 : tmp_8_0 === "email" ? 18 : tmp_8_0 === "team" ? 19 : tmp_8_0 === "payments" ? 20 : tmp_8_0 === "integrations" ? 21 : -1);
  }
}
function supportedList(key, fallback) {
  try {
    const fn = Intl.supportedValuesOf;
    if (typeof fn === "function")
      return fn(key);
  } catch {
  }
  return fallback;
}
var SettingsAdminComponent = class _SettingsAdminComponent {
  constructor() {
    this.admin = inject(BookingAdminService);
    this.data = inject(BookingDataService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.loading = signal(true);
    this.saving = signal(false);
    this.saved = signal(false);
    this.tabs = ["general", "booking", "company", "email", "team", "payments", "integrations"];
    this.tab = signal("general");
    this.members = signal([]);
    this.membersLoading = signal(false);
    this.invites = signal([]);
    this.calendarMirror = signal(false);
    this.calendarIdValue = signal("primary");
    this.newMemberStaffName = "";
    this.newMemberColor = "";
    this.colorOptions = [
      { value: "", label: "No colour" },
      ...GCAL_COLORS.map((c) => ({ value: c.id, label: c.name, color: c.hex }))
    ];
    this.newMemberEmail = "";
    this.newMemberRole = "admin";
    this.addingMember = signal(false);
    this.legalName = "";
    this.companyAddress = "";
    this.companyPhone = "";
    this.companyEmail = "";
    this.vatNumber = "";
    this.vatRegistered = false;
    this.vatRate = 18;
    this.vatNote = "";
    this.invoicePrefix = "INV";
    this.invoiceFooter = "";
    this.paymentTermsDays = 14;
    this.emailFrom = "";
    this.emailFromName = "";
    this.emailReplyTo = "";
    this.emailBccSelf = true;
    this.invoiceSubject = "";
    this.invoiceBody = "";
    this.reminderSubject = "";
    this.reminderBody = "";
    this.emailKeys = INVOICE_EMAIL_KEY_DEFS;
    this.gmail = signal({ connected: false });
    this.gmailBusy = signal(false);
    this.loadedInvoiceDetails = {};
    this.loadedInvoiceSettings = {};
    this.settingsLoaded = false;
    this.connect = signal(null);
    this.connectLoading = signal(false);
    this.connecting = signal(false);
    this.timezone = "Europe/Malta";
    this.currency = "EUR";
    this.timezones = supportedList("timeZone", ["UTC", "Europe/Malta", "Europe/London", "Europe/Madrid", "America/New_York"]);
    this.currencies = supportedList("currency", ["EUR", "USD", "GBP", "CHF", "AUD", "CAD"]);
    this.depositPercent = 30;
    this.depositAllowed = true;
    this.holdMinutes = 15;
    this.minLeadMinutes = 120;
    this.cashAllowed = true;
    this.workBoard = false;
    this.checking = signal(false);
    this.stripe = signal(null);
    this.google = signal(null);
    this.intError = signal(null);
    this.tzOptions = this.timezones.map((t) => ({ value: t, label: t }));
    this.currencyOptions = this.currencies.map((c) => ({ value: c, label: c }));
    this.roleOptions = [
      { value: "admin", label: "Admin", hint: "full access to this organization" }
    ];
  }
  setTab(t) {
    this.tab.set(t);
  }
  /** Open a named tab from `?tab=…`, so another page can link straight to the thing it is
   *  telling you to fix — the dashboard's "card payments are off" points at Payments. */
  applyTabParam() {
    const t = this.route.snapshot.queryParamMap.get("tab");
    if (t && this.tabs.includes(t)) {
      this.tab.set(t);
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (org) {
        const s = yield this.admin.getOrgSettings(org);
        if (s) {
          this.timezone = s.timezone;
          this.currency = s.currency;
          const p = s.booking_params ?? {};
          this.depositPercent = p.deposit_percent ?? 30;
          this.depositAllowed = p.deposit_allowed ?? true;
          this.holdMinutes = p.hold_minutes ?? 15;
          this.minLeadMinutes = p.min_lead_minutes ?? 120;
          this.cashAllowed = p.cash_allowed ?? true;
          this.workBoard = s.features?.work_board ?? false;
          this.calendarMirror.set(s.calendar_mirror ?? false);
          this.calendarIdValue.set(s.calendar_id || "primary");
          const inv = s.invoice_details ?? {};
          this.legalName = inv.legal_name ?? "";
          this.companyAddress = inv.address ?? "";
          this.companyPhone = inv.phone ?? "";
          this.companyEmail = inv.email ?? "";
          this.vatNumber = inv.vat_number ?? "";
          this.vatRegistered = inv.vat_registered ?? false;
          this.vatRate = inv.vat_rate ?? 18;
          this.vatNote = inv.vat_note ?? "";
          this.invoicePrefix = (inv.invoice_prefix ?? "INV").toUpperCase();
          this.invoiceFooter = inv.invoice_footer ?? "";
          this.loadedInvoiceDetails = inv;
          const es = s.invoice_settings ?? {};
          this.loadedInvoiceSettings = es;
          this.paymentTermsDays = es.payment_terms_days ?? 14;
          this.emailFrom = es.email_from ?? "";
          this.emailFromName = es.email_from_name ?? "";
          this.emailReplyTo = es.email_reply_to ?? "";
          this.emailBccSelf = es.email_bcc_self ?? true;
          this.invoiceSubject = es.templates?.invoice?.subject ?? DEFAULT_INVOICE_EMAIL.subject;
          this.invoiceBody = es.templates?.invoice?.body ?? DEFAULT_INVOICE_EMAIL.body;
          this.reminderSubject = es.templates?.reminder?.subject ?? DEFAULT_REMINDER_EMAIL.subject;
          this.reminderBody = es.templates?.reminder?.body ?? DEFAULT_REMINDER_EMAIL.body;
          this.settingsLoaded = true;
        }
      }
      this.loading.set(false);
      this.applyTabParam();
      this.checkIntegrations();
      this.loadMembers();
      const stripeParam = this.route.snapshot.queryParamMap.get("stripe");
      if (stripeParam) {
        this.router.navigate([], { queryParams: { stripe: null }, queryParamsHandling: "merge", replaceUrl: true });
        if (stripeParam === "return")
          this.toast.info("Checking your Stripe connection\u2026");
      }
      this.loadConnect();
      const g = this.route.snapshot.queryParamMap.get("google");
      if (g) {
        const reason = this.route.snapshot.queryParamMap.get("reason");
        this.router.navigate([], { queryParams: { google: null, reason: null }, queryParamsHandling: "merge", replaceUrl: true });
        if (g === "connected")
          this.toast.success("Google connected");
        else if (g === "denied")
          this.toast.info("Google sign-in was cancelled");
        else if (reason === "no_refresh_token")
          this.toast.error("Google didn't return a lasting permission. Remove this app at myaccount.google.com \u2192 Third-party access, then connect again.");
        else if (reason === "scope")
          this.toast.error("The send-email permission wasn't granted. Connect again and allow it.");
        else
          this.toast.error("Could not connect Google. Please try again.");
        this.tab.set("email");
      }
      this.loadGmail();
    });
  }
  loadConnect() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      this.connectLoading.set(true);
      try {
        this.connect.set(yield this.admin.connectStripeStatus(org));
      } finally {
        this.connectLoading.set(false);
      }
    });
  }
  // ── Google / Gmail sending ────────────────────────────────────────
  /** Status only — the refresh token is service-role-only and never reaches the browser. */
  loadGmail() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      this.gmail.set(yield this.data.googleStatus(org));
    });
  }
  /** Redirects to Google's consent screen, exactly like connectStripe does for Stripe. */
  connectGoogle() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || this.gmailBusy())
        return;
      this.gmailBusy.set(true);
      try {
        const res = yield this.admin.connectGoogleStart(org);
        if (res.url) {
          window.location.href = res.url;
          return;
        }
        this.toast.error(res.error ?? "Could not start Google sign-in.");
      } catch {
        this.toast.error("Could not start Google sign-in. Please try again.");
      } finally {
        this.gmailBusy.set(false);
      }
    });
  }
  disconnectGoogle() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || this.gmailBusy())
        return;
      if (!(yield this.confirm.ask({
        title: "Disconnect Google",
        message: "Invoices will stop sending automatically. You can still email them from your own mail app.",
        confirmLabel: "Disconnect",
        danger: true
      })))
        return;
      this.gmailBusy.set(true);
      try {
        yield this.admin.disconnectGoogle(org);
        yield this.loadGmail();
        this.toast.success("Google disconnected");
      } catch {
        this.toast.error("Could not disconnect.");
      } finally {
        this.gmailBusy.set(false);
      }
    });
  }
  /** Begin (or resume) onboarding — redirects to Stripe's hosted flow. */
  connectStripe() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || this.connecting())
        return;
      this.connecting.set(true);
      try {
        const res = yield this.admin.connectStripeStart(org);
        if (res.url) {
          window.location.href = res.url;
          return;
        }
        this.toast.error(res.error ?? "Could not start Stripe onboarding.");
      } catch {
        this.toast.error("Could not start Stripe onboarding. Please try again.");
      } finally {
        this.connecting.set(false);
      }
    });
  }
  save() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || this.saving())
        return;
      this.saving.set(true);
      this.saved.set(false);
      try {
        yield this.admin.updateOrgSettings(org, __spreadValues({
          timezone: this.timezone.trim(),
          currency: this.currency.trim().toUpperCase(),
          booking_params: {
            deposit_percent: Number(this.depositPercent),
            deposit_allowed: this.depositAllowed,
            hold_minutes: Number(this.holdMinutes),
            min_lead_minutes: Number(this.minLeadMinutes),
            cash_allowed: this.cashAllowed
          },
          features: { work_board: this.workBoard },
          // The spread is load-bearing. This rebuilds the blob from the fields on this page,
          // so WITHOUT it any key written by another code path is silently dropped the next
          // time anyone saves Settings — from any tab, since there is one save() for all.
          invoice_details: __spreadProps(__spreadValues({}, this.loadedInvoiceDetails), {
            legal_name: this.legalName.trim(),
            address: this.companyAddress.trim(),
            phone: this.companyPhone.trim(),
            email: this.companyEmail.trim(),
            vat_number: this.vatNumber.trim(),
            vat_registered: this.vatRegistered,
            vat_rate: Number(this.vatRate) || 18,
            vat_note: this.vatNote.trim(),
            invoice_prefix: (this.invoicePrefix.trim() || "INV").toUpperCase(),
            invoice_footer: this.invoiceFooter.trim()
          })
        }, this.settingsLoaded ? {
          invoice_settings: __spreadProps(__spreadValues({}, this.loadedInvoiceSettings), {
            payment_terms_days: Number(this.paymentTermsDays) || 14,
            email_from: this.emailFrom.trim(),
            email_from_name: this.emailFromName.trim(),
            email_reply_to: this.emailReplyTo.trim(),
            email_bcc_self: this.emailBccSelf,
            templates: {
              invoice: { subject: this.invoiceSubject.trim(), body: this.invoiceBody.trim() },
              reminder: { subject: this.reminderSubject.trim(), body: this.reminderBody.trim() }
            }
          })
        } : {}));
        this.saved.set(true);
        setTimeout(() => this.saved.set(false), 2500);
        this.toast.success("Settings saved");
      } catch {
        this.toast.error("Could not save settings. Please try again.");
      } finally {
        this.saving.set(false);
      }
    });
  }
  /** Turning the overview on/off saves immediately: a checkbox that silently needs a
   *  separate Save is how people end up believing a setting is on when it is not. */
  setCalendarMirror(on) {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      this.calendarMirror.set(on);
      yield this.admin.updateOrgSettings(org, { calendar_mirror: on });
      this.toast.success(on ? "Shared calendar on" : "Shared calendar off");
    });
  }
  saveCalendarSettings() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || this.saving())
        return;
      this.saving.set(true);
      try {
        yield this.admin.updateOrgSettings(org, {
          calendar_mirror: this.calendarMirror(),
          calendar_id: this.calendarIdValue().trim() || "primary"
        });
        this.toast.success("Calendar settings saved");
      } finally {
        this.saving.set(false);
      }
    });
  }
  loadMembers() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      this.membersLoading.set(true);
      try {
        const [members, invites] = yield Promise.all([
          this.admin.listMembers(org),
          this.admin.listInvites(org)
        ]);
        this.members.set(members);
        this.invites.set(invites);
      } finally {
        this.membersLoading.set(false);
      }
    });
  }
  /**
   * Invite rather than add. `invite_org_member` adds them immediately if they already have
   * an account and otherwise leaves an invitation to be claimed on their first sign-in —
   * so there is no longer a "tell them to register, wait, then come back" step, and no
   * "no access" wall for them to hit in the middle of it.
   */
  addMember() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      const email = this.newMemberEmail.trim();
      if (!org || !email || this.addingMember())
        return;
      this.addingMember.set(true);
      try {
        const res = yield this.admin.inviteMember(org, email, this.newMemberRole, this.newMemberStaffName.trim(), this.newMemberColor || null);
        if (!res.ok) {
          this.toast.error(res.error === "bad_email" ? "That does not look like an email address." : res.error === "owner_only" ? "Only the owner can invite another owner." : "Could not send that invitation.");
          return;
        }
        this.newMemberEmail = "";
        this.newMemberStaffName = "";
        this.newMemberColor = "";
        this.loadMembers();
        this.auth.refresh();
        this.toast.success(res.added_now ? "Added \u2014 they already had an account, so they have access now." : "Invitation saved. They get access the first time they sign in with that address.", 8e3);
      } finally {
        this.addingMember.set(false);
      }
    });
  }
  revokeInvite(i) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.ask({
        title: "Cancel invitation",
        message: `Cancel the invitation for ${i.email}? They will not get access if they sign in.`,
        confirmLabel: "Cancel invitation",
        danger: true
      })))
        return;
      yield this.admin.revokeInvite(i.id);
      this.loadMembers();
      this.toast.info("Invitation cancelled");
    });
  }
  removeMember(m) {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      if (!(yield this.confirm.ask({ title: "Remove member", message: `Remove ${m.email} from this organization?`, confirmLabel: "Remove", danger: true })))
        return;
      const res = yield this.admin.removeMember(org, m.user_id);
      if (res.error) {
        this.toast.error(res.error.includes("last_owner") ? "You can't remove the only owner." : "Could not remove member.");
      } else {
        this.toast.success("Member removed");
        this.loadMembers();
      }
    });
  }
  checkIntegrations() {
    return __async(this, null, function* () {
      this.checking.set(true);
      this.intError.set(null);
      try {
        const res = yield this.admin.checkIntegrations();
        if (res.error) {
          this.intError.set(res.error);
        } else {
          this.stripe.set(res.stripe ?? null);
          this.google.set(res.google ?? null);
        }
      } catch (e) {
        this.intError.set(e.message);
      } finally {
        this.checking.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function SettingsAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsAdminComponent, selectors: [["app-settings-admin"]], decls: 9, vars: 1, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "muted"], ["role", "tablist", 1, "tabs"], [1, "tab", 3, "click"], [1, "card"], [1, "card__h"], [1, "grid"], [1, "field"], [3, "changed", "value", "options"], [1, "check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "actions"], [1, "btn", "btn--primary", 3, "click", "disabled"], [1, "ok-tag"], ["type", "number", "min", "0", "max", "100", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], [1, "opt"], [1, "hint"], ["placeholder", "e.g. John F. Monta\xF1o / FPV Drone Malta Ltd", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Street, town, postcode, Malta", 3, "ngModelChange", "ngModel"], ["placeholder", "+356 \u2026", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "billing@\u2026", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "e.g. Reverse charge \u2014 VAT to be accounted for by the recipient. (Ask your accountant for the exact wording.)", 3, "ngModelChange", "ngModel"], ["maxlength", "8", "placeholder", "INV", 3, "ngModelChange", "ngModel"], [1, "field__static"], ["rows", "3", "placeholder", "Payment terms, bank details, thank-you note\u2026", 3, "ngModelChange", "ngModel"], [1, "hint", "hint--keys"], ["placeholder", "MT\u2026", 3, "ngModelChange", "ngModel"], [1, "btn", "btn--primary", 3, "disabled"], ["type", "email", "placeholder", "invoices@yourdomain.com", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. JM Booking", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "you@yourdomain.com", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "180", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["rows", "10", 3, "ngModelChange", "ngModel"], ["rows", "9", 3, "ngModelChange", "ngModel"], [1, "item"], [1, "item__main"], [1, "item__name"], [1, "item__meta"], [1, "item__actions"], [1, "link-btn", "link-btn--danger", 3, "click", "disabled"], [1, "hint", "err-hint"], [1, "int"], [1, "int__row"], [1, "sub-h"], ["type", "email", "placeholder", "person@email.com", 3, "ngModelChange", "ngModel"], [3, "changed", "value", "options", "searchable"], ["type", "text", "placeholder", "Their name on the roster", 3, "ngModelChange", "ngModel"], [1, "int__name"], [1, "badge"], [1, "link-btn", "link-btn--danger"], [1, "link-btn", "link-btn--danger", 3, "click"], [1, "badge", "badge--overdue"], [1, "card__head"], [1, "link-btn", 3, "click", "disabled"], [1, "err"], [1, "badge", "badge--ok"], [1, "btn", 3, "click", "disabled"], [1, "badge", "badge--bad"], [1, "int__detail"], ["type", "checkbox", "name", "calMirror", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "calId", "placeholder", "primary", 3, "ngModelChange", "ngModel"]], template: function SettingsAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Your organization, booking rules, invoicing and integrations.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, SettingsAdminComponent_Conditional_7_Template, 2, 0, "p", 4)(8, SettingsAdminComponent_Conditional_8_Template, 22, 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.loading() ? 7 : 8);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, MaxValidator, NgModel, SelectComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.err[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 13px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 22px;\n  margin-bottom: 18px;\n}\n.card__h[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 16px;\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.card__head[_ngcontent-%COMP%]   .card__h[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 16px;\n}\n.ok-tag[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 13px;\n  font-weight: 600;\n}\n.int[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.int__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.int__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n  min-width: 170px;\n}\n.int__detail[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #eef2f6;\n  color: #475569;\n}\n.badge--ok[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge--bad[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.hint[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 12.5px;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.hint--keys[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.hint--keys[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Mono",\n    monospace;\n  font-size: 11.5px;\n  background: rgba(0, 0, 0, 0.05);\n  color: #475569;\n  padding: 1px 5px;\n  border-radius: 4px;\n  border: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.opt[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 18px;\n}\n.tab[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  padding: 9px 14px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  font-family: inherit;\n  border-radius: 6px 6px 0 0;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  background: rgba(244, 169, 34, 0.12);\n}\n.tab--active[_ngcontent-%COMP%] {\n  color: #0f172a;\n  border-bottom-color: #F4A922;\n}\n.field__static[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px dashed #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #475569;\n  background: transparent;\n  font-variant-numeric: tabular-nums;\n}\n.card[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.err-hint[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n/*# sourceMappingURL=settings-admin.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsAdminComponent, { className: "SettingsAdminComponent", filePath: "src/app/booking/platform/settings/settings-admin.component.ts", lineNumber: 32 });
})();
export {
  SettingsAdminComponent
};
//# sourceMappingURL=chunk-UF223LUO.js.map
