import {
  LineItemsEditorComponent
} from "./chunk-UIJDAMWI.js";
import {
  ClientEditorComponent
} from "./chunk-DZFKC4G2.js";
import {
  AvailabilityPickerComponent
} from "./chunk-Y4ZDVRTH.js";
import "./chunk-5MZRX563.js";
import "./chunk-YSGXMD6R.js";
import {
  BookingAdminService
} from "./chunk-3T6U65XO.js";
import {
  SelectComponent
} from "./chunk-MTW66F7I.js";
import "./chunk-GVBB2R7I.js";
import {
  BookingDataService
} from "./chunk-NUDELOJP.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-RKKFBZE5.js";
import "./chunk-276JK7PL.js";
import "./chunk-DEXNZGWM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
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
  computed,
  inject,
  input,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/booking/ui/info-hint/info-hint.component.ts
var _c0 = ["*"];
function InfoHintComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var InfoHintComponent = class _InfoHintComponent {
  constructor() {
    this.label = input("this field");
    this.open = signal(false);
  }
  toggle(e) {
    e.stopPropagation();
    this.open.update((v) => !v);
  }
  closeOnOutsideClick() {
    if (this.open())
      this.open.set(false);
  }
  closeOnEscape() {
    if (this.open())
      this.open.set(false);
  }
  static {
    this.\u0275fac = function InfoHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InfoHintComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoHintComponent, selectors: [["app-info-hint"]], hostBindings: function InfoHintComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function InfoHintComponent_click_HostBindingHandler() {
          return ctx.closeOnOutsideClick();
        }, false, \u0275\u0275resolveDocument)("keydown.escape", function InfoHintComponent_keydown_escape_HostBindingHandler() {
          return ctx.closeOnEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { label: [1, "label"] }, ngContentSelectors: _c0, decls: 5, vars: 5, consts: [["type", "button", 1, "ih__btn", 3, "click"], ["viewBox", "0 0 16 16", "width", "12", "height", "12", "aria-hidden", "true"], ["cx", "8", "cy", "4.2", "r", "1.2", "fill", "currentColor"], ["d", "M8 7.2v4.6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["role", "tooltip", 1, "ih__pop"]], template: function InfoHintComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function InfoHintComponent_Template_button_click_0_listener($event) {
          return ctx.toggle($event);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1);
        \u0275\u0275element(2, "circle", 2)(3, "path", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, InfoHintComponent_Conditional_4_Template, 2, 0, "span", 4);
      }
      if (rf & 2) {
        \u0275\u0275classProp("ih__btn--on", ctx.open());
        \u0275\u0275attribute("aria-expanded", ctx.open())("aria-label", (ctx.open() ? "Hide help for " : "Help for ") + ctx.label());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.open() ? 4 : -1);
      }
    }, styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.ih__btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  margin: -5px;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  -webkit-tap-highlight-color: transparent;\n}\n.ih__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  padding: 2px;\n  border: 1.3px solid currentColor;\n  border-radius: 50%;\n}\n.ih__btn[_ngcontent-%COMP%]:hover, \n.ih__btn--on[_ngcontent-%COMP%] {\n  color: #F4A922;\n}\n.ih__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #F4A922;\n  outline-offset: 2px;\n  border-radius: 50%;\n}\n.ih__pop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: -6px;\n  z-index: 40;\n  width: max-content;\n  max-width: min(280px, 100vw - 40px);\n  background: #1e293b;\n  color: #f1f5f9;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-transform: none;\n  letter-spacing: normal;\n  text-align: left;\n  padding: 9px 11px;\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.22);\n}\n.ih__pop[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 11px;\n  border: 5px solid transparent;\n  border-bottom-color: #1e293b;\n}\n.ih__pop[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n}\n/*# sourceMappingURL=info-hint.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoHintComponent, { className: "InfoHintComponent", filePath: "src/app/booking/ui/info-hint/info-hint.component.ts", lineNumber: 64 });
})();

// src/app/booking/platform/bookings/booking-form/booking-form.component.ts
var _forTrack0 = ($index, $item) => $item.iso;
function BookingFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "\u2026or send them the invoice:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18)(3, "input", 19);
    \u0275\u0275listener("focus", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template_input_focus_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.copyInvoiceLink());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.invoiceLink);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.copied() === "invoice" ? "\u2713 Copied" : "Copy", " ");
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "input", 19);
    \u0275\u0275listener("focus", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template_input_focus_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 20);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.copyLink());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template, 6, 2);
  }
  if (rf & 2) {
    const done_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", done_r5.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.copied() === "pay" ? "\u2713 Copied" : "Copy", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.invoiceLink ? 4 : -1);
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Booking saved, but the payment link couldn\u2019t be generated. You can copy it from the bookings list.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6, "The slot is reserved. Send this payment link to your client:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template, 5, 3)(8, BookingFormComponent_Conditional_11_Conditional_0_Conditional_8_Template, 2, 0, "p", 12);
    \u0275\u0275elementStart(9, "div", 13)(10, "a", 14);
    \u0275\u0275text(11, "\u2B07 Download invoice (PDF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 14);
    \u0275\u0275text(13, "\u{1F5A8} Print invoice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "button", 16);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reset());
    });
    \u0275\u0275text(16, "Create another");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 17);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToList());
    });
    \u0275\u0275text(18, "Done");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const done_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Booking ", done_r5.ref, " ", ctx_r2.isEditing ? "updated" : "created", "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(done_r5.link ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "/book/invoice/" + done_r5.id + "?auto=download", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/book/invoice/" + done_r5.id + "?auto=print", \u0275\u0275sanitizeUrl);
  }
}
function BookingFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingFormComponent_Conditional_11_Conditional_0_Template, 19, 5, "div", 8);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.created()) ? 0 : -1, tmp_1_0);
  }
}
function BookingFormComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, " Copied from ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". Everything carried over except the times \u2014 pick new time blocks below. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx);
  }
}
function BookingFormComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "For ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u2014 change the worker from the sidebar.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx);
  }
}
function BookingFormComponent_Conditional_12_Conditional_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "No VAT or billing address on this client \u2014 add them in Clients for a VAT-ready invoice.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "app-select", 67);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_28_Template_app_select_changed_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clientId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 68);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Conditional_28_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openClientEditor());
    });
    \u0275\u0275text(3, "+ New");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, BookingFormComponent_Conditional_12_Conditional_28_Conditional_4_Template, 2, 0, "span", 27);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.clientId)("options", ctx_r2.clientOptions())("clearable", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selectedClient && !ctx_r2.selectedClient.vat_number && !ctx_r2.selectedClient.billing_address ? 4 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_29_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.contactName, $event) || (ctx_r2.contactName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.contactName);
  }
}
function BookingFormComponent_Conditional_12_Conditional_30_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "No bookable workers yet \u2014 add one in Staff.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label");
    \u0275\u0275text(3, "Worker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "app-select", 70);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_30_Template_app_select_changed_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.staffId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BookingFormComponent_Conditional_12_Conditional_30_Conditional_5_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.staffId)("options", ctx_r2.workerOptions());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.workers.length === 0 ? 5 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Pick a worker first to see their calendar.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_51_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r10.label);
  }
}
function BookingFormComponent_Conditional_12_Conditional_51_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 71)(1, "span", 72);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BookingFormComponent_Conditional_12_Conditional_51_For_2_Conditional_5_Template, 2, 1, "span", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r10.timeLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r10.label ? 5 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 40);
    \u0275\u0275repeaterCreate(1, BookingFormComponent_Conditional_12_Conditional_51_For_2_Template, 6, 2, "li", 71, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedSlots);
  }
}
function BookingFormComponent_Conditional_12_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "Tap a start and an end time on the worker's calendar.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_80_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label", 78);
    \u0275\u0275text(3, "Deposit %");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_80_Conditional_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.depositPercent, $event) || (ctx_r2.depositPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.depositPercent);
  }
}
function BookingFormComponent_Conditional_12_Conditional_80_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1, " Client pays ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(4, 2, ctx_r2.priceTotal * ctx_r2.depositPercent / 100, "EUR", "symbol", "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" now, ", \u0275\u0275pipeBind4(6, 7, ctx_r2.priceTotal * (100 - ctx_r2.depositPercent) / 100, "EUR", "symbol", "1.0-2"), " later. ");
  }
}
function BookingFormComponent_Conditional_12_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 28)(2, "div", 29)(3, "label");
    \u0275\u0275text(4, "Deposit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-info-hint", 76);
    \u0275\u0275text(6, " Prefilled from your organisation default. Changing it here affects this booking only. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "app-select", 46);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_80_Template_app_select_changed_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.depositMode = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, BookingFormComponent_Conditional_12_Conditional_80_Conditional_8_Template, 5, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BookingFormComponent_Conditional_12_Conditional_80_Conditional_9_Template, 7, 12, "p", 77);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r2.depositMode)("options", ctx_r2.depositModeOptions)("searchable", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.depositMode === "deposit" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.depositMode === "deposit" && ctx_r2.priceTotal > 0 ? 9 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "label", 48)(2, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_84_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.confirmed, $event) || (ctx_r2.confirmed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "This booking is already confirmed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "app-info-hint", 81);
    \u0275\u0275text(6, " Leave it off to send this as a ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "request");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ": the slot is held, the client sees their invoice and can pay or ask to pay later, and it lands in your ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "To confirm");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " list. Turn it on if it is already agreed \u2014 it goes into Google Calendar now and the client just gets the invoice. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.confirmed);
  }
}
function BookingFormComponent_Conditional_12_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg());
  }
}
function BookingFormComponent_Conditional_12_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.blockedReason);
  }
}
function BookingFormComponent_Conditional_12_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-availability-picker", 82);
    \u0275\u0275listener("slotsChange", function BookingFormComponent_Conditional_12_Conditional_117_Template_app_availability_picker_slotsChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSlotsChanged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("staffId", ctx_r2.staffId)("timezone", ctx_r2.orgTimezone())("initialSlots", ctx_r2.prefillSlots)("excludeBookingId", (tmp_5_0 = ctx_r2.editingId()) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "");
  }
}
function BookingFormComponent_Conditional_12_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 83);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Pick a worker to see their calendar and choose a free time.");
    \u0275\u0275elementEnd()();
  }
}
function BookingFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "form", 23);
    \u0275\u0275listener("ngSubmit", function BookingFormComponent_Conditional_12_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275template(2, BookingFormComponent_Conditional_12_Conditional_2_Template, 5, 1, "p", 24);
    \u0275\u0275elementStart(3, "section", 25)(4, "h2", 26);
    \u0275\u0275text(5, "Job");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BookingFormComponent_Conditional_12_Conditional_6_Template, 5, 1, "p", 27);
    \u0275\u0275elementStart(7, "div", 28)(8, "div", 29)(9, "label", 30);
    \u0275\u0275text(10, "Title");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.title, $event) || (ctx_r2.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 28)(13, "div", 29)(14, "label");
    \u0275\u0275text(15, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "app-info-hint", 32)(17, "strong");
    \u0275\u0275text(18, "Existing client");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " is a saved record with company, VAT and billing address, so the invoice is VAT-ready and you can reuse it. ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "Just a name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " is a one-off, never saved, and bills to that name only. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 33)(24, "button", 34);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clientMode = "existing");
    });
    \u0275\u0275text(25, "Existing client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 34);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clientMode = "quick");
    });
    \u0275\u0275text(27, "Just a name");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, BookingFormComponent_Conditional_12_Conditional_28_Template, 5, 4)(29, BookingFormComponent_Conditional_12_Conditional_29_Template, 1, 1, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, BookingFormComponent_Conditional_12_Conditional_30_Template, 6, 3, "div", 28);
    \u0275\u0275elementStart(31, "div", 28)(32, "div", 29)(33, "label", 36);
    \u0275\u0275text(34, "Location ");
    \u0275\u0275elementStart(35, "span", 37);
    \u0275\u0275text(36, "optional");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.location, $event) || (ctx_r2.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "section", 25)(39, "h2", 26);
    \u0275\u0275text(40, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 28)(42, "div", 29)(43, "label");
    \u0275\u0275text(44, "Time blocks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "app-info-hint", 39);
    \u0275\u0275text(46, " A job can span several blocks, even across different days \u2014 a planning call on one day and the shoot on another. Name each one and the calendar shows ");
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48, "\u201CPre-shoot planning\u201D");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " rather than two identical entries. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, BookingFormComponent_Conditional_12_Conditional_50_Template, 2, 0, "span", 27)(51, BookingFormComponent_Conditional_12_Conditional_51_Template, 3, 0, "ul", 40)(52, BookingFormComponent_Conditional_12_Conditional_52_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "section", 25)(54, "h2", 26);
    \u0275\u0275text(55, "Charges & payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 28)(57, "div", 29)(58, "label");
    \u0275\u0275text(59, "Charges ");
    \u0275\u0275elementStart(60, "span", 42);
    \u0275\u0275text(61, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "app-info-hint", 43);
    \u0275\u0275text(63, " Pick one of your services (and how many hours) to pre-fill a line, or add a custom one. The total here is what the client pays, and it becomes the invoice. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "app-line-items-editor", 44);
    \u0275\u0275listener("itemsChange", function BookingFormComponent_Conditional_12_Template_app_line_items_editor_itemsChange_64_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onItemsChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 28)(66, "div", 29)(67, "label");
    \u0275\u0275text(68, "Payment options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "app-info-hint", 45)(70, "strong");
    \u0275\u0275text(71, "Card or pay later");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, " \u2014 the client pays by card now, or asks to pay later and you approve that request. ");
    \u0275\u0275elementStart(73, "strong");
    \u0275\u0275text(74, "Card only");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, " \u2014 they must pay to confirm. ");
    \u0275\u0275elementStart(76, "strong");
    \u0275\u0275text(77, "Pay later only");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, " \u2014 no online payment; they confirm and agree to pay by cash, Revolut or bank, and it books straight away. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "app-select", 46);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Template_app_select_changed_79_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.paymentMode = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(80, BookingFormComponent_Conditional_12_Conditional_80_Template, 10, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "section", 25)(82, "h2", 26);
    \u0275\u0275text(83, "Options");
    \u0275\u0275elementEnd();
    \u0275\u0275template(84, BookingFormComponent_Conditional_12_Conditional_84_Template, 13, 1, "div", 47);
    \u0275\u0275elementStart(85, "div", 47)(86, "label", 48)(87, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_87_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.needsProduction, $event) || (ctx_r2.needsProduction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89, "Needs post-production");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "app-info-hint", 50);
    \u0275\u0275text(91, " Adds this to the Work board (editing through to delivery). Leave it off for meetings and no-edit jobs. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 47)(93, "label", 48)(94, "input", 51);
    \u0275\u0275listener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.calendarDetail = $event ? "minimal" : "full");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span");
    \u0275\u0275text(96, "Keep money off the calendar invite");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "app-info-hint", 52);
    \u0275\u0275text(98, " Turn this on if you will invite anyone else to the event \u2014 a second shooter, or the client. They would otherwise see the total, what has been paid, the progress stage and your private notes. The event still shows the brief, client and service. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 28)(100, "div", 29)(101, "label", 53);
    \u0275\u0275text(102, "Internal notes ");
    \u0275\u0275elementStart(103, "span", 37);
    \u0275\u0275text(104, "optional");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "textarea", 54);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_textarea_ngModelChange_105_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.notes, $event) || (ctx_r2.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(106, BookingFormComponent_Conditional_12_Conditional_106_Template, 2, 1, "p", 55);
    \u0275\u0275elementStart(107, "div", 56);
    \u0275\u0275template(108, BookingFormComponent_Conditional_12_Conditional_108_Template, 2, 1, "span", 57);
    \u0275\u0275elementStart(109, "button", 58);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Template_button_click_109_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToList());
    });
    \u0275\u0275text(110, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "button", 59);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(113, "aside", 60)(114, "div", 61)(115, "h2", 62);
    \u0275\u0275text(116, "Worker availability");
    \u0275\u0275elementEnd();
    \u0275\u0275template(117, BookingFormComponent_Conditional_12_Conditional_117_Template, 1, 4, "app-availability-picker", 63)(118, BookingFormComponent_Conditional_12_Conditional_118_Template, 5, 0, "div", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(119, "app-client-editor", 65);
    \u0275\u0275twoWayListener("openChange", function BookingFormComponent_Conditional_12_Template_app_client_editor_openChange_119_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.clientEditorOpen, $event) || (ctx_r2.clientEditorOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function BookingFormComponent_Conditional_12_Template_app_client_editor_saved_119_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClientCreated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.copiedFrom()) ? 2 : -1, tmp_1_0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.scopedWorkerName()) ? 6 : -1, tmp_2_0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.title);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("seg__btn--on", ctx_r2.clientMode === "existing");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg__btn--on", ctx_r2.clientMode === "quick");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.clientMode === "existing" ? 28 : 29);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.scopedWorkerName() ? 30 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.location);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(!ctx_r2.staffId ? 50 : ctx_r2.selectedSlots.length ? 51 : 52);
    \u0275\u0275advance(14);
    \u0275\u0275property("items", ctx_r2.lineItems)("currency", ctx_r2.currency())("services", ctx_r2.services());
    \u0275\u0275advance(15);
    \u0275\u0275property("value", ctx_r2.paymentMode)("options", ctx_r2.paymentModeOptions)("searchable", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.paymentMode !== "later" ? 80 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.isEditing ? 84 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.needsProduction);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r2.calendarDetail === "minimal");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.notes);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.errorMsg() ? 106 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.saving() && ctx_r2.blockedReason ? 108 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.canSubmit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving() ? ctx_r2.isEditing ? "Saving\u2026" : "Creating\u2026" : ctx_r2.isEditing ? "Save changes" : "Create booking", " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.staffId ? 117 : 118);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("open", ctx_r2.clientEditorOpen);
    \u0275\u0275property("client", null);
  }
}
var BookingFormComponent = class _BookingFormComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.data = inject(BookingDataService);
    this.editingRef = "";
    this.services = signal([]);
    this.staff = signal([]);
    this.loading = signal(true);
    this.saving = signal(false);
    this.errorMsg = signal("");
    this.editingId = signal(null);
    this.created = signal(null);
    this.copiedFrom = signal("");
    this.clientMode = "existing";
    this.clientId = "";
    this.contactName = "";
    this.clientEditorOpen = signal(false);
    this.staffId = "";
    this.selectedSlots = [];
    this.prefillSlots = [];
    this.orgTimezone = signal("Europe/Malta");
    this.currency = signal("EUR");
    this.lineItems = [];
    this.title = "";
    this.location = "";
    this.notes = "";
    this.paymentMode = "both";
    this.depositMode = "deposit";
    this.depositPercent = 30;
    this.needsProduction = false;
    this.calendarDetail = "full";
    this.confirmed = false;
    this.orgDefaults = { depositPercent: 30, depositAllowed: true };
    this.scopedWorkerName = computed(() => this.auth.activeStaff()?.name ?? "");
    this.workerOptions = computed(() => this.workers.map((w) => ({ value: w.id, label: w.name })));
    this.clientOptions = computed(() => this.data.clients().map((c) => ({ value: c.id, label: c.name, hint: c.company ?? void 0 })));
    this.paymentModeOptions = [
      { value: "both", label: "Card or pay later", hint: "cash / Revolut / bank" },
      { value: "card", label: "Card only" },
      { value: "later", label: "Pay later only", hint: "client just confirms" }
    ];
    this.depositModeOptions = [
      { value: "deposit", label: "Allow a deposit" },
      { value: "full", label: "Require full payment" }
    ];
    this.copied = signal(null);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (org) {
        const [services, staff, settings] = yield Promise.all([
          this.admin.listServices(org),
          this.admin.listStaff(org),
          this.admin.getOrgSettings(org)
        ]);
        this.services.set(services.filter((s) => s.is_active));
        this.staff.set(staff.filter((s) => s.is_bookable));
        this.orgDefaults = {
          depositPercent: settings?.booking_params?.deposit_percent ?? 30,
          depositAllowed: settings?.booking_params?.deposit_allowed ?? true
        };
        if (settings?.timezone)
          this.orgTimezone.set(settings.timezone);
        if (settings?.currency)
          this.currency.set(settings.currency);
        this.depositPercent = this.orgDefaults.depositPercent;
        this.depositMode = this.orgDefaults.depositAllowed ? "deposit" : "full";
        if (this.auth.staffId())
          this.staffId = this.auth.staffId();
        const id = this.route.snapshot.paramMap.get("id");
        const cloneOf = this.route.snapshot.queryParamMap.get("from");
        if (id)
          yield this.loadForEdit(id);
        else if (cloneOf)
          yield this.loadForDuplicate(cloneOf);
      }
      this.loading.set(false);
    });
  }
  /** Everything that describes the WORK — not the booking's identity, and not its times.
   *  Shared by edit and duplicate so the two can never drift apart. */
  applyBookingFields(b) {
    if (b.client_id) {
      this.clientMode = "existing";
      this.clientId = b.client_id;
      this.contactName = "";
    } else if (b.contact_name) {
      this.clientMode = "quick";
      this.contactName = b.contact_name;
      this.clientId = "";
    }
    this.staffId = b.staff_id;
    this.title = b.title;
    this.location = b.location ?? "";
    this.notes = b.notes ?? "";
    this.paymentMode = b.allow_card && b.allow_inperson ? "both" : b.allow_card ? "card" : "later";
    this.depositMode = b.deposit_allowed ?? this.orgDefaults.depositAllowed ? "deposit" : "full";
    this.depositPercent = b.deposit_percent ?? this.orgDefaults.depositPercent;
    this.needsProduction = b.needs_production ?? false;
    this.calendarDetail = b.calendar_detail ?? "full";
  }
  /** The saved invoice breakdown, or a single line derived from the booking itself. */
  loadItems(id, b) {
    return __async(this, null, function* () {
      const items = yield this.data.getInvoiceItems(id);
      return items.length ? items : [{ description: b.description ?? b.title, amount: b.price_total }];
    });
  }
  loadForEdit(id) {
    return __async(this, null, function* () {
      const b = yield this.data.getBooking(id);
      if (!b) {
        this.errorMsg.set("Booking not found.");
        return;
      }
      this.editingId.set(id);
      this.editingRef = b.booking_ref;
      this.applyBookingFields(b);
      this.prefillSlots = yield this.data.getBookingSlots(id);
      this.lineItems = yield this.loadItems(id, b);
    });
  }
  /**
   * Clone a job: same work, blank diary. Repeat bookings here are the same shoot for the
   * same client on a different day, so everything about WHAT the job is carries over and
   * nothing about WHEN it happens does.
   *
   * Deliberately NOT copied:
   *  - editingId / booking_ref — this is a new booking and earns its own number
   *  - time blocks — the whole point; the owner picks fresh ones
   *  - confirmed — stays off, so cloning can never silently push a calendar event
   *  - status, payments, invoice — a copy has been neither agreed nor paid for
   */
  loadForDuplicate(id) {
    return __async(this, null, function* () {
      const b = yield this.data.getBooking(id);
      if (!b) {
        this.errorMsg.set("Could not find the booking to copy from.");
        return;
      }
      this.applyBookingFields(b);
      this.lineItems = yield this.loadItems(id, b);
      this.copiedFrom.set(b.booking_ref);
    });
  }
  // ── Derived ─────────────────────────────────────────────────────────
  get isEditing() {
    return this.editingId() !== null;
  }
  /** Any bookable worker — availability is worker-based. */
  get workers() {
    return this.staff();
  }
  /** Booking total = sum of the line items (source of truth). */
  get priceTotal() {
    return this.lineItems.reduce((s, i) => s + (Number(i.amount) || 0), 0);
  }
  get selectedClient() {
    return this.data.clients().find((c) => c.id === this.clientId);
  }
  /** A customer is set when an existing client is picked, or a quick name is typed. */
  get hasCustomer() {
    return this.clientMode === "existing" ? !!this.clientId : this.contactName.trim().length > 0;
  }
  /** The DB slots to persist (one row per chosen block). */
  get slotsValue() {
    return this.selectedSlots.map((s) => ({
      start: s.iso,
      end: s.endIso,
      // `label` is the block's NAME; `timeLabel` is the derived "Mon 5 Oct · 08:00–09:00"
      // display string and must never be persisted.
      label: s.label?.trim() || null
    }));
  }
  // ── Change handlers ─────────────────────────────────────────────────
  // Charges (pricing) are decoupled from the calendar — editing items never touches the time blocks.
  onItemsChange(items) {
    this.lineItems = items;
  }
  // The picker clears its blocks (and emits []) when the worker changes, so no manual reset needed.
  onSlotsChanged(slots) {
    this.selectedSlots = slots;
  }
  // ── Client (reuses the full client editor — never a stub) ────────────
  openClientEditor() {
    this.clientEditorOpen.set(true);
  }
  onClientCreated(c) {
    this.clientMode = "existing";
    this.clientId = c.id;
  }
  // ── Submit ──────────────────────────────────────────────────────────
  get canSubmit() {
    const itemsOk = this.lineItems.length > 0 && this.lineItems.every((i) => i.description.trim().length > 0);
    return !this.saving() && this.hasCustomer && !!this.staffId && this.selectedSlots.length > 0 && itemsOk && this.title.trim().length > 0;
  }
  /** The first thing still missing, in the order the form asks for it. Empty when the
   *  booking is ready to save. Surfaced next to a disabled Create button so the reason is
   *  never off-screen — the time blocks in particular are picked far below it on a phone. */
  get blockedReason() {
    if (!this.hasCustomer)
      return "Pick a customer";
    if (!this.staffId)
      return "Pick a worker";
    if (!this.title.trim())
      return "Add a title";
    if (!this.lineItems.length)
      return "Add a charge";
    if (this.lineItems.some((i) => !i.description.trim()))
      return "Describe each charge";
    if (!this.selectedSlots.length)
      return "Pick a time block";
    return "";
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.canSubmit)
        return;
      const org = this.auth.orgId();
      if (!org) {
        this.errorMsg.set("No organization context.");
        return;
      }
      this.saving.set(true);
      this.errorMsg.set("");
      try {
        const items = this.lineItems.map((i) => __spreadValues(__spreadValues({
          description: i.description.trim(),
          amount: Number(i.amount) || 0
        }, i.serviceId ? { serviceId: i.serviceId } : {}), i.hours ? { hours: i.hours } : {}));
        const shared = {
          staffId: this.staffId,
          serviceId: null,
          clientId: this.clientMode === "existing" ? this.clientId : null,
          contactName: this.clientMode === "quick" ? this.contactName.trim() : null,
          title: this.title.trim(),
          description: items.map((i) => i.description).join("\n"),
          // client-facing summary on the pay page
          slots: this.slotsValue,
          priceTotal: this.priceTotal,
          allowCard: this.paymentMode !== "later",
          allowInperson: this.paymentMode !== "card",
          depositAllowed: this.depositMode === "deposit",
          depositPercent: this.depositPercent,
          needsProduction: this.needsProduction,
          calendarDetail: this.calendarDetail,
          location: this.location.trim() || null,
          notes: this.notes.trim() || null
        };
        if (this.isEditing) {
          const res2 = yield this.data.updateBooking(this.editingId(), shared);
          if (res2.error) {
            this.errorMsg.set(this.errorText(res2.error));
            return;
          }
          yield this.data.saveInvoice(org, this.editingId(), { lineItems: items, notes: null, issueDate: null });
          this.toast.success(`${this.editingRef || "Booking"} updated`);
          if (this.paymentMode !== "later") {
            const link2 = yield this.data.generateLink(this.editingId());
            this.created.set({ id: this.editingId(), ref: this.editingRef, link: link2 });
          } else {
            this.goToList();
          }
          return;
        }
        const res = yield this.data.createBooking(__spreadProps(__spreadValues({ orgId: org }, shared), { confirmed: this.confirmed }));
        if (res.error || !res.id) {
          this.errorMsg.set(this.errorText(res.error));
          return;
        }
        yield this.data.saveInvoice(org, res.id, { lineItems: items, notes: null, issueDate: null });
        if (this.confirmed)
          yield this.data.confirmToCalendar(res.id);
        if (this.needsProduction)
          yield this.admin.addWorkItem(org, res.id, "");
        const link = yield this.data.generateLink(res.id);
        this.created.set({ id: res.id, ref: res.ref ?? "", link });
        this.toast.success(`Booking ${res.ref ?? ""} created`);
      } finally {
        this.saving.set(false);
      }
    });
  }
  errorText(error) {
    if (error === "slot_taken")
      return "That worker is already booked for that time. Pick another slot or worker.";
    return error ?? "Something went wrong. Please try again.";
  }
  /** Shareable invoice link (anon, token-based) — derived from the payment link. */
  get invoiceLink() {
    const link = this.created()?.link;
    return link ? link.replace("/book/", "/book/invoice?token=") : null;
  }
  copyTo(text, which) {
    return __async(this, null, function* () {
      if (!text)
        return;
      try {
        yield navigator.clipboard.writeText(text);
        this.copied.set(which);
        setTimeout(() => {
          if (this.copied() === which)
            this.copied.set(null);
        }, 1600);
      } catch {
      }
    });
  }
  copyLink() {
    void this.copyTo(this.created()?.link, "pay");
  }
  copyInvoiceLink() {
    void this.copyTo(this.invoiceLink, "invoice");
  }
  reset() {
    this.editingId.set(null);
    this.clientMode = "existing";
    this.clientId = "";
    this.contactName = "";
    this.staffId = "";
    this.selectedSlots = [];
    this.prefillSlots = [];
    this.lineItems = [];
    this.title = "";
    this.location = "";
    this.notes = "";
    this.paymentMode = "both";
    this.depositMode = this.orgDefaults.depositAllowed ? "deposit" : "full";
    this.depositPercent = this.orgDefaults.depositPercent;
    this.needsProduction = false;
    this.calendarDetail = "full";
    this.confirmed = false;
    this.created.set(null);
    this.errorMsg.set("");
    this.copiedFrom.set("");
  }
  goToList() {
    this.router.navigate(["/bookings/list"]);
  }
  static {
    this.\u0275fac = function BookingFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingFormComponent, selectors: [["app-booking-form"]], decls: 13, vars: 3, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], ["routerLink", "/bookings/list", 1, "btn", "btn--ghost"], [1, "loading"], [1, "spinner"], [1, "card", "done"], [1, "done__check"], [1, "done__title"], [1, "done__sub"], [1, "muted"], [1, "done__invoice"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn--ghost", "btn--sm", 3, "href"], [1, "done__actions"], [1, "btn", "btn--ghost", 3, "click"], [1, "btn", "btn--primary", 3, "click"], [1, "linkbox"], ["readonly", "", 1, "linkbox__input", 3, "focus", "value"], ["type", "button", 1, "btn", "btn--primary", "linkbox__btn", 3, "click"], [1, "done__sub", "done__sub--gap"], [1, "form-layout"], [1, "card", "form", 3, "ngSubmit"], [1, "cloned"], [1, "sec"], [1, "sec__title"], [1, "note"], [1, "field"], [1, "field__top"], ["for", "bf-title"], ["id", "bf-title", "name", "title", "placeholder", "e.g. Interview filming \u2014 Clinica Joia", "required", "", 3, "ngModelChange", "ngModel"], ["label", "Customer"], [1, "seg"], ["type", "button", 1, "seg__btn", 3, "click"], ["name", "contactName", "placeholder", "e.g. John from Sliema", 3, "ngModel"], ["for", "bf-loc"], [1, "opt"], ["id", "bf-loc", "name", "location", "placeholder", "Address or venue", 3, "ngModelChange", "ngModel"], ["label", "Time blocks"], [1, "picked"], [1, "note", "note--warn"], [1, "req"], ["label", "Charges"], [3, "itemsChange", "items", "currency", "services"], ["label", "Payment options"], [3, "changed", "value", "options", "searchable"], [1, "opt-row"], [1, "check"], ["type", "checkbox", "name", "needsProduction", 3, "ngModelChange", "ngModel"], ["label", "Needs post-production"], ["type", "checkbox", "name", "calendarMinimal", 3, "ngModelChange", "ngModel"], ["label", "Keep money off the calendar invite"], ["for", "bf-notes"], ["id", "bf-notes", "name", "notes", "rows", "2", "placeholder", "Anything to remember about this job \u2014 never shown to the client", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "form__actions"], [1, "form__blocked"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], [1, "form-aside"], [1, "card", "aside-card"], [1, "aside-card__title"], [3, "staffId", "timezone", "initialSlots", "excludeBookingId"], [1, "aside-empty"], [3, "openChange", "saved", "open", "client"], [1, "client-row"], ["placeholder", "Select a client\u2026", 3, "changed", "value", "options", "clearable"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["name", "contactName", "placeholder", "e.g. John from Sliema", 3, "ngModelChange", "ngModel"], ["placeholder", "Select a worker\u2026", 3, "changed", "value", "options"], [1, "picked__row"], ["aria-hidden", "true", 1, "picked__tick"], [1, "picked__time"], [1, "picked__name"], [1, "row2"], ["label", "Deposit"], [1, "calc"], ["for", "bf-dep"], ["id", "bf-dep", "type", "number", "name", "depositPercent", "min", "1", "max", "100", "step", "1", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "confirmed", 3, "ngModelChange", "ngModel"], ["label", "Already confirmed"], [3, "slotsChange", "staffId", "timezone", "initialSlots", "excludeBookingId"], [1, "aside-empty__icon"]], template: function BookingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
        \u0275\u0275text(9, "Back to list");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, BookingFormComponent_Conditional_10_Template, 2, 0, "div", 6)(11, BookingFormComponent_Conditional_11_Template, 1, 1)(12, BookingFormComponent_Conditional_12_Template, 120, 29);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEditing ? "Edit booking" : "New booking");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Update the details of this booking." : "Create a booking and send the client a link to confirm or pay.", " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 10 : ctx.created() ? 11 : 12);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm, RouterLink, CurrencyPipe, AvailabilityPickerComponent, LineItemsEditorComponent, ClientEditorComponent, InfoHintComponent, SelectComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n@media (max-width: 900px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: 92px;\n  }\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 380px;\n  gap: 20px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .form-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.calc[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 12px;\n  font-size: 12.5px;\n  color: #475569;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.calc[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.client-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: stretch;\n}\n.client-row[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.seg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg__btn[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  background: #ffffff;\n  color: #475569;\n  border: none;\n  cursor: pointer;\n  transition: 0.15s ease;\n}\n.seg__btn[_ngcontent-%COMP%]    + .seg__btn[_ngcontent-%COMP%] {\n  border-left: 1px solid #e2e8f0;\n}\n.seg__btn[_ngcontent-%COMP%]:hover:not(.seg__btn--on) {\n  background: #f8fafc;\n}\n.seg__btn--on[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n@media (max-width: 480px) {\n  .seg[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .seg__btn[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n  }\n}\n.opt-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  cursor: pointer;\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  cursor: pointer;\n  accent-color: #F4A922;\n}\n.check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 500;\n  color: #0f172a;\n}\n.form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n}\n@media (max-width: 900px) {\n  .form__actions[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 30;\n    margin: 0;\n    padding: 10px 16px calc(10px + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.97);\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    border-top: 1px solid #e2e8f0;\n    box-shadow: 0 -4px 18px rgba(15, 23, 42, 0.1);\n  }\n  .form__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    justify-content: center;\n  }\n}\n.form__blocked[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #b45309;\n}\n@media (min-width: 901px) {\n  .form__blocked[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n.row2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .row2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.opt[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n  font-size: 11px;\n}\n.req[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.picked[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.picked__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 8px 11px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n}\n.picked__tick[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 700;\n  font-size: 13px;\n}\n.picked__time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #14532d;\n}\n.picked__name[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #166534;\n  background: #dcfce7;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.form-aside[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 16px;\n}\n@media (max-width: 900px) {\n  .form-aside[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.aside-card[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.aside-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 14px;\n}\n.aside-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #94a3b8;\n}\n.aside-empty__icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n.aside-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n  line-height: 1.5;\n}\n.cloned[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 13px;\n  font-size: 12.5px;\n  line-height: 1.5;\n  background: rgba(244, 169, 34, 0.1);\n  color: #92400e;\n  border: 1px solid rgba(244, 169, 34, 0.35);\n  border-radius: 8px;\n}\n.cloned[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin: 0;\n}\n.done[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 28px;\n}\n.done__check[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin: 0 auto 14px;\n  background: #dcfce7;\n  color: #16a34a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n}\n.done__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.done__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0 0 18px;\n}\n.done__invoice[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 16px;\n}\n.done__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.linkbox[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  max-width: 460px;\n  margin: 0 auto 6px;\n}\n.linkbox__input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 10px 12px;\n  font-size: 13px;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #f8fafc;\n  font-family:\n    "SF Mono",\n    "Fira Mono",\n    monospace;\n}\n.linkbox__btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 92px;\n  justify-content: center;\n}\n.done__sub--gap[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2.5px solid #e2e8f0;\n  border-top-color: #F4A922;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=booking-form.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingFormComponent, { className: "BookingFormComponent", filePath: "src/app/booking/platform/bookings/booking-form/booking-form.component.ts", lineNumber: 24 });
})();
export {
  BookingFormComponent
};
//# sourceMappingURL=chunk-EHOVQDCT.js.map
