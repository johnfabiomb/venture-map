import {
  InvoiceActionsComponent,
  InvoiceSendComponent
} from "./chunk-XJCBYQFI.js";
import "./chunk-3WWECWQ4.js";
import {
  WorkEditorComponent
} from "./chunk-UT7YVQKA.js";
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuTrigger
} from "./chunk-YYZD4ABX.js";
import "./chunk-FUKSCDGT.js";
import {
  ExpenseDialogComponent
} from "./chunk-YJ7ZNIS5.js";
import {
  ModalComponent
} from "./chunk-5MZRX563.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingAdminService
} from "./chunk-3T6U65XO.js";
import {
  SelectComponent
} from "./chunk-MTW66F7I.js";
import "./chunk-GVBB2R7I.js";
import {
  BookingDataService
} from "./chunk-EEPGGCLM.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-RKKFBZE5.js";
import "./chunk-276JK7PL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BW7NI53J.js";
import "./chunk-2IJZ7QAG.js";
import "./chunk-7VIBRFOE.js";
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
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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

// src/app/booking/ui/panel/panel.component.ts
var _c0 = [[["", "panel-actions", ""]], "*"];
var _c1 = ["[panel-actions]", "*"];
function PanelComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.meta());
  }
}
function PanelComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
var PanelComponent = class _PanelComponent {
  constructor() {
    this.title = input.required();
    this.meta = input("");
    this.startOpen = input(true);
    this.toggled = signal(null);
    this.isOpen = computed(() => this.toggled() ?? this.startOpen());
  }
  toggle() {
    this.toggled.set(!this.isOpen());
  }
  static {
    this.\u0275fac = function PanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelComponent, selectors: [["app-panel"]], inputs: { title: [1, "title"], meta: [1, "meta"], startOpen: [1, "startOpen"] }, ngContentSelectors: _c1, decls: 11, vars: 6, consts: [[1, "pn"], [1, "pn__head"], ["type", "button", 1, "pn__toggle", 3, "click"], ["viewBox", "0 0 16 16", "width", "13", "height", "13", "aria-hidden", "true", 1, "pn__chev"], ["d", "M6 4l4 4-4 4", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "pn__title"], [1, "pn__meta"], [1, "pn__actions"], [1, "pn__body"]], template: function PanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function PanelComponent_Template_button_click_2_listener() {
          return ctx.toggle();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, PanelComponent_Conditional_7_Template, 2, 1, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275projection(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, PanelComponent_Conditional_10_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("pn--open", ctx.isOpen());
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-expanded", ctx.isOpen());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.meta() ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isOpen() ? 10 : -1);
      }
    }, styles: ["\n\n.pn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 14px 18px;\n  overflow: hidden;\n}\n.pn__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.pn__toggle[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: none;\n  border: none;\n  padding: 4px 0;\n  margin: 0;\n  font-family: inherit;\n  cursor: pointer;\n  text-align: left;\n  -webkit-tap-highlight-color: transparent;\n}\n.pn__chev[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #94a3b8;\n  transition: transform 0.18s ease;\n}\n.pn--open[_ngcontent-%COMP%]   .pn__chev[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.pn__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pn__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.pn__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.pn__body[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n/*# sourceMappingURL=panel.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelComponent, { className: "PanelComponent", filePath: "src/app/booking/ui/panel/panel.component.ts", lineNumber: 63 });
})();

// src/app/booking/ui/payment-dialog/payment-dialog.component.ts
function PaymentDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function PaymentDialogComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.amount.set(ctx_r1.balance()));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pay full balance (", \u0275\u0275pipeBind4(2, 1, ctx_r1.balance(), "EUR", "symbol", "1.0-2"), ") ");
  }
}
function PaymentDialogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("That is more than the ", \u0275\u0275pipeBind4(2, 1, ctx_r1.balance(), "EUR", "symbol", "1.0-2"), " outstanding.");
  }
}
var METHOD_LABEL = {
  card: "Card",
  cash: "Cash",
  revolut: "Revolut",
  bank: "Bank transfer",
  other: "Other"
};
var PaymentDialogComponent = class _PaymentDialogComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.toast = inject(ToastService);
    this.open = model(false);
    this.bookingId = input.required();
    this.balance = input(0);
    this.bookingRef = input("");
    this.saved = output();
    this.methods = ["cash", "revolut", "bank", "card", "other"];
    this.methodOptions = this.methods.map((m) => ({ value: m, label: METHOD_LABEL[m] }));
    this.saving = signal(false);
    this.amount = signal(null);
    this.method = signal("cash");
    this.note = signal("");
    this.paidOn = signal((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
    this.valid = computed(() => {
      const a = Number(this.amount());
      return isFinite(a) && a > 0;
    });
    this.overpay = computed(() => Number(this.amount()) > this.balance() && this.balance() > 0);
    effect(() => {
      if (!this.open())
        return;
      queueMicrotask(() => {
        this.amount.set(null);
        this.method.set("cash");
        this.note.set("");
        this.paidOn.set((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
      });
    });
  }
  label(m) {
    return METHOD_LABEL[m];
  }
  save() {
    return __async(this, null, function* () {
      if (!this.valid() || this.saving())
        return;
      this.saving.set(true);
      try {
        const amount = Number(this.amount());
        const paidAt = this.paidOn() ? (/* @__PURE__ */ new Date(`${this.paidOn()}T12:00:00`)).toISOString() : null;
        const res = yield this.data.addPayment(this.bookingId(), {
          amount,
          method: this.method(),
          note: this.note().trim() || null,
          paidAt
        });
        if (res.error) {
          this.toast.error("Could not record the payment.");
          return;
        }
        const ref = this.bookingRef();
        this.toast.success(`\u20AC${amount.toFixed(2)} payment recorded${ref ? ` for ${ref}` : ""}`);
        this.open.set(false);
        this.saved.emit();
      } finally {
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function PaymentDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentDialogComponent, selectors: [["app-payment-dialog"]], inputs: { open: [1, "open"], bookingId: [1, "bookingId"], balance: [1, "balance"], bookingRef: [1, "bookingRef"] }, outputs: { open: "openChange", saved: "saved" }, decls: 28, vars: 12, consts: [["title", "Record a payment", 3, "openChange", "open", "dismissable"], [1, "pd"], ["type", "button", 1, "pd__fill"], [1, "pd__grid"], [1, "pd__field"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", "name", "pdAmount", 3, "ngModelChange", "ngModel"], [3, "changed", "value", "options", "searchable"], ["type", "date", "name", "pdDate", 3, "ngModelChange", "ngModel"], [1, "pd__field", "pd__field--wide"], ["placeholder", "e.g. Deposit, Final payment", "name", "pdNote", 3, "ngModelChange", "ngModel"], [1, "pd__note"], [1, "pd__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 1, "pd__fill", 3, "click"]], template: function PaymentDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal", 0);
        \u0275\u0275listener("openChange", function PaymentDialogComponent_Template_app_modal_openChange_0_listener($event) {
          return ctx.open.set($event);
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275template(2, PaymentDialogComponent_Conditional_2_Template, 3, 6, "button", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "label", 4)(5, "span");
        \u0275\u0275text(6, "Amount (\u20AC)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 5);
        \u0275\u0275listener("ngModelChange", function PaymentDialogComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.amount.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "label", 4)(9, "span");
        \u0275\u0275text(10, "Method");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "app-select", 6);
        \u0275\u0275listener("changed", function PaymentDialogComponent_Template_app_select_changed_11_listener($event) {
          return ctx.method.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "label", 4)(13, "span");
        \u0275\u0275text(14, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 7);
        \u0275\u0275listener("ngModelChange", function PaymentDialogComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.paidOn.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "label", 8)(17, "span");
        \u0275\u0275text(18, "Note ");
        \u0275\u0275elementStart(19, "em");
        \u0275\u0275text(20, "optional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "input", 9);
        \u0275\u0275listener("ngModelChange", function PaymentDialogComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.note.set($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(22, PaymentDialogComponent_Conditional_22_Template, 3, 6, "p", 10);
        \u0275\u0275elementStart(23, "div", 11)(24, "button", 12);
        \u0275\u0275listener("click", function PaymentDialogComponent_Template_button_click_24_listener() {
          return ctx.open.set(false);
        });
        \u0275\u0275text(25, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 13);
        \u0275\u0275listener("click", function PaymentDialogComponent_Template_button_click_26_listener() {
          return ctx.save();
        });
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("open", ctx.open())("dismissable", true);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.balance() > 0 ? 2 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.amount());
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.method())("options", ctx.methodOptions)("searchable", false);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.paidOn());
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.note());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.overpay() ? 22 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.saving() || !ctx.valid());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Recording\u2026" : "Record payment", " ");
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, CurrencyPipe, ModalComponent, SelectComponent], styles: ["\n\n.pd__fill[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 14px;\n  padding: 7px 12px;\n  background: rgba(244, 169, 34, 0.12);\n  border: 1px solid rgba(244, 169, 34, 0.4);\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 700;\n  color: #92400e;\n  cursor: pointer;\n}\n.pd__fill[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.2);\n}\n.pd__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 14px;\n}\n.pd__field--wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n@media (max-width: 560px) {\n  .pd__field--wide[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.pd__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.pd__field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.pd__field[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-style: normal;\n  font-weight: 400;\n}\n.pd__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #fff;\n  width: 100%;\n  box-sizing: border-box;\n}\n@media (max-width: 560px) {\n  .pd__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.pd__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.pd__note[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #b45309;\n}\n.pd__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 18px;\n}\n@media (max-width: 560px) {\n  .pd__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=payment-dialog.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentDialogComponent, { className: "PaymentDialogComponent", filePath: "src/app/booking/ui/payment-dialog/payment-dialog.component.ts", lineNumber: 99 });
})();

// src/app/booking/core/interfaces/delivery.interface.ts
function isDeliveryUrl(url) {
  try {
    const u = new URL(url.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

// src/app/booking/ui/links-editor/links-editor.component.ts
function LinksEditorComponent_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Must start with http:// or https://");
    \u0275\u0275elementEnd();
  }
}
function LinksEditorComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "input", 4);
    \u0275\u0275listener("ngModelChange", function LinksEditorComponent_Conditional_0_For_2_Template_input_ngModelChange_1_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setLabel($index_r2, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 5);
    \u0275\u0275listener("ngModelChange", function LinksEditorComponent_Conditional_0_For_2_Template_input_ngModelChange_2_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setUrl($index_r2, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function LinksEditorComponent_Conditional_0_For_2_Template_button_click_3_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove($index_r2));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, LinksEditorComponent_Conditional_0_For_2_Conditional_5_Template, 2, 0, "p", 7);
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", link_r4.label)("name", "linkLabel" + $index_r2);
    \u0275\u0275advance();
    \u0275\u0275classProp("item__url--invalid", ctx_r2.invalid(link_r4));
    \u0275\u0275property("ngModel", link_r4.url)("name", "linkUrl" + $index_r2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.invalid(link_r4) ? 5 : -1);
  }
}
function LinksEditorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, LinksEditorComponent_Conditional_0_For_2_Template, 6, 7, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.links());
  }
}
function LinksEditorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "No links yet \u2014 add the gallery, Drive folder or download link.");
    \u0275\u0275elementEnd();
  }
}
var LinksEditorComponent = class _LinksEditorComponent {
  constructor() {
    this.links = model.required();
  }
  /** A typed-but-malformed URL gets an inline warning; blank rows are dropped on save. */
  invalid(link) {
    return !!link.url.trim() && !isDeliveryUrl(link.url);
  }
  add() {
    this.links.update((list) => [...list, { label: "", url: "" }]);
  }
  remove(i) {
    this.links.update((list) => list.filter((_, idx) => idx !== i));
  }
  setLabel(i, value) {
    this.links.update((list) => list.map((l, idx) => idx === i ? __spreadProps(__spreadValues({}, l), { label: value }) : l));
  }
  setUrl(i, value) {
    this.links.update((list) => list.map((l, idx) => idx === i ? __spreadProps(__spreadValues({}, l), { url: value }) : l));
  }
  static {
    this.\u0275fac = function LinksEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LinksEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LinksEditorComponent, selectors: [["app-links-editor"]], inputs: { links: [1, "links"] }, outputs: { links: "linksChange" }, decls: 4, vars: 1, consts: [[1, "items"], [1, "items-empty"], ["type", "button", 1, "add", 3, "click"], [1, "item"], ["type", "text", "placeholder", "Label (e.g. Full gallery)", 1, "item__label", 3, "ngModelChange", "ngModel", "name"], ["type", "url", "placeholder", "https://\u2026", 1, "item__url", 3, "ngModelChange", "ngModel", "name"], ["type", "button", "aria-label", "Remove link", 1, "item__remove", 3, "click"], [1, "item__warn"]], template: function LinksEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LinksEditorComponent_Conditional_0_Template, 3, 0, "div", 0)(1, LinksEditorComponent_Conditional_1_Template, 2, 0, "p", 1);
        \u0275\u0275elementStart(2, "button", 2);
        \u0275\u0275listener("click", function LinksEditorComponent_Template_button_click_2_listener() {
          return ctx.add();
        });
        \u0275\u0275text(3, "+ Add link");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.links().length ? 0 : 1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.6fr 30px;\n  gap: 8px;\n  align-items: start;\n}\n.item__label[_ngcontent-%COMP%], \n.item__url[_ngcontent-%COMP%] {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 14px;\n  color: #0f172a;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 9px 12px;\n  background: #ffffff;\n  min-width: 0;\n}\n.item__label[_ngcontent-%COMP%]:focus, \n.item__url[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.item__url--invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.item__warn[_ngcontent-%COMP%] {\n  margin: -2px 0 0;\n  font-size: 12px;\n  color: #ef4444;\n}\n.item__remove[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 40px;\n  padding: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 20px;\n  line-height: 1;\n  border-radius: 6px;\n}\n.item__remove[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.08);\n}\n.items-empty[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  padding: 12px;\n  border: 1.5px dashed #e2e8f0;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.add[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background: none;\n  border: none;\n  padding: 4px 0;\n  cursor: pointer;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  color: #F4A922;\n}\n.add[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 560px) {\n  .item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 30px;\n  }\n  .item__url[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n/*# sourceMappingURL=links-editor.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LinksEditorComponent, { className: "LinksEditorComponent", filePath: "src/app/booking/ui/links-editor/links-editor.component.ts", lineNumber: 19 });
})();

// src/app/booking/ui/delivery-dialog/delivery-dialog.component.ts
function DeliveryDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Every link must start with http:// or https://");
    \u0275\u0275elementEnd();
  }
}
function DeliveryDialogComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nothing attached \u2014 the client sees no delivery section. ");
  }
}
function DeliveryDialogComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Visible on the client's booking link. ");
  }
}
function DeliveryDialogComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hidden until the booking is paid in full, unless you release it. ");
  }
}
function DeliveryDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275template(1, DeliveryDialogComponent_Conditional_12_Conditional_1_Template, 1, 0)(2, DeliveryDialogComponent_Conditional_12_Conditional_2_Template, 1, 0)(3, DeliveryDialogComponent_Conditional_12_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.anything() ? 1 : ctx_r0.released() || ctx_r0.paidInFull() ? 2 : 3);
  }
}
function DeliveryDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function DeliveryDialogComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleRelease());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.released() ? "Lock again" : "Release now", " ");
  }
}
function DeliveryDialogComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function DeliveryDialogComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove());
    });
    \u0275\u0275text(1, "Remove");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.busy());
  }
}
var DeliveryDialogComponent = class _DeliveryDialogComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.open = model(false);
    this.bookingId = input.required();
    this.delivery = input(null);
    this.paidInFull = input(false);
    this.saved = output();
    this.busy = signal(false);
    this.message = signal("");
    this.links = [];
    this.released = computed(() => !!this.delivery()?.released_at);
    this.hasSaved = computed(() => {
      const d = this.delivery();
      return !!d && (!!d.message?.trim() || d.links.length > 0);
    });
    this.valid = computed(() => this.linksSnapshot().every((l) => !l.url.trim() || isDeliveryUrl(l.url)));
    this.linksSnapshot = signal([]);
    this.anything = computed(() => !!this.message().trim() || this.linksSnapshot().some((l) => l.url.trim()));
    effect(() => {
      if (!this.open())
        return;
      const d = this.delivery();
      queueMicrotask(() => {
        this.message.set(d?.message ?? "");
        this.links = (d?.links ?? []).map((l) => __spreadValues({}, l));
        this.linksSnapshot.set(this.links);
      });
    });
  }
  onLinksChange() {
    this.linksSnapshot.set([...this.links]);
  }
  save() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org) {
        this.toast.error("No organization context.");
        return;
      }
      if (!this.valid()) {
        this.toast.error("Every link must start with http:// or https://");
        return;
      }
      this.busy.set(true);
      try {
        const links = this.links.map((l) => ({ label: l.label.trim(), url: l.url.trim() })).filter((l) => l.url);
        const res = yield this.data.saveDelivery(org, this.bookingId(), {
          message: this.message().trim() || null,
          links
        });
        if (res.error) {
          this.toast.error("Could not save the delivery.");
          return;
        }
        this.toast.success("Delivery saved");
        this.open.set(false);
        this.saved.emit();
      } finally {
        this.busy.set(false);
      }
    });
  }
  toggleRelease() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org) {
        this.toast.error("No organization context.");
        return;
      }
      const releasing = !this.released();
      const ok = yield this.confirm.ask(releasing ? { title: "Release delivery now", message: "The client will be able to open this immediately, before the booking is paid in full. Continue?", confirmLabel: "Release" } : { title: "Lock delivery", message: "The client will lose access until the booking is paid in full.", confirmLabel: "Lock", danger: true });
      if (!ok)
        return;
      this.busy.set(true);
      try {
        yield this.data.setDeliveryReleased(org, this.bookingId(), releasing);
        this.toast.success(releasing ? "Delivery released" : "Delivery locked");
        this.saved.emit();
      } finally {
        this.busy.set(false);
      }
    });
  }
  remove() {
    return __async(this, null, function* () {
      if (!(yield this.confirm.ask({
        title: "Remove delivery",
        message: "The client will no longer see a delivery section on their booking link.",
        confirmLabel: "Remove",
        danger: true
      })))
        return;
      const org = this.auth.orgId();
      if (!org)
        return;
      this.busy.set(true);
      try {
        yield this.data.saveDelivery(org, this.bookingId(), { message: null, links: [] });
        this.message.set("");
        this.links = [];
        this.linksSnapshot.set([]);
        this.toast.success("Delivery removed");
        this.open.set(false);
        this.saved.emit();
      } finally {
        this.busy.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function DeliveryDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryDialogComponent, selectors: [["app-delivery-dialog"]], inputs: { open: [1, "open"], bookingId: [1, "bookingId"], delivery: [1, "delivery"], paidInFull: [1, "paidInFull"] }, outputs: { open: "openChange", saved: "saved" }, decls: 21, vars: 9, consts: [["title", "Delivery", 3, "openChange", "open", "dismissable"], [1, "dd"], [1, "dd__field"], ["rows", "3", "name", "ddMsg", "placeholder", "e.g. Here are your final edits \u2014 please download within 30 days.", 3, "ngModelChange", "ngModel"], [1, "dd__label"], [3, "linksChange", "links"], [1, "dd__note", "dd__note--warn"], [1, "dd__note"], [1, "dd__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--danger-text", 3, "disabled"], [1, "dd__spacer"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--ghost", "btn--danger-text", 3, "click", "disabled"]], template: function DeliveryDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal", 0);
        \u0275\u0275listener("openChange", function DeliveryDialogComponent_Template_app_modal_openChange_0_listener($event) {
          return ctx.open.set($event);
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "label", 2)(3, "span");
        \u0275\u0275text(4, "Message ");
        \u0275\u0275elementStart(5, "em");
        \u0275\u0275text(6, "optional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "textarea", 3);
        \u0275\u0275listener("ngModelChange", function DeliveryDialogComponent_Template_textarea_ngModelChange_7_listener($event) {
          return ctx.message.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9, "Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "app-links-editor", 5);
        \u0275\u0275twoWayListener("linksChange", function DeliveryDialogComponent_Template_app_links_editor_linksChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.links, $event) || (ctx.links = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, DeliveryDialogComponent_Conditional_11_Template, 2, 0, "p", 6)(12, DeliveryDialogComponent_Conditional_12_Template, 4, 1, "p", 7);
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275template(14, DeliveryDialogComponent_Conditional_14_Template, 2, 2, "button", 9)(15, DeliveryDialogComponent_Conditional_15_Template, 2, 1, "button", 10);
        \u0275\u0275element(16, "span", 11);
        \u0275\u0275elementStart(17, "button", 12);
        \u0275\u0275listener("click", function DeliveryDialogComponent_Template_button_click_17_listener() {
          return ctx.open.set(false);
        });
        \u0275\u0275text(18, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 13);
        \u0275\u0275listener("click", function DeliveryDialogComponent_Template_button_click_19_listener() {
          return ctx.save();
        });
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("open", ctx.open())("dismissable", true);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.message());
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("links", ctx.links);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.valid() ? 11 : 12);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.hasSaved() && !ctx.paidInFull() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasSaved() ? 15 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.busy() || !ctx.valid());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.busy() ? "Saving\u2026" : "Save delivery", " ");
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ModalComponent, LinksEditorComponent], styles: ["\n\n.dd__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.dd__field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.dd__field[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-style: normal;\n  font-weight: 400;\n}\n.dd__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #fff;\n  width: 100%;\n  box-sizing: border-box;\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .dd__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.dd__field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.dd__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  margin: 14px 0 6px;\n}\n.dd__note[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 11.5px;\n  color: #64748b;\n  line-height: 1.45;\n}\n.dd__note--warn[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-weight: 600;\n}\n.dd__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 18px;\n  flex-wrap: wrap;\n}\n.dd__spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.btn--danger-text[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n@media (max-width: 560px) {\n  .dd__spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dd__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=delivery-dialog.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryDialogComponent, { className: "DeliveryDialogComponent", filePath: "src/app/booking/ui/delivery-dialog/delivery-dialog.component.ts", lineNumber: 85 });
})();

// src/app/booking/platform/bookings/booking-detail/booking-detail.component.ts
var _c02 = (a0) => ["/bookings/invoice-edit", a0];
var _c12 = () => ({ from: "booking" });
var _c2 = (a0) => ({ from: a0 });
var _c3 = () => [];
var _forTrack0 = ($index, $item) => $item.start;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.url;
function BookingDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2, "Booking not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, "Back to bookings");
    \u0275\u0275elementEnd()();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "a", 58);
    \u0275\u0275text(2, "View invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 59);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_ng_template_18_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyInvoiceLink());
    });
    \u0275\u0275text(4, "Copy invoice link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 60);
    \u0275\u0275text(6, "Edit invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 59);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_ng_template_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCostDialog());
    });
    \u0275\u0275text(8, "Add a cost\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 61);
    \u0275\u0275text(10, "Duplicate booking");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("href", "/book/invoice/" + ctx_r1.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c02, ctx_r1.id))("queryParams", \u0275\u0275pureFunction0(6, _c12));
    \u0275\u0275advance(4);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(7, _c2, ctx_r1.id));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "Profit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("money__value--paid", ctx_r1.profit() >= 0)("money__value--due", ctx_r1.profit() < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(3, 5, ctx_r1.profit(), "EUR", "symbol", "1.2-2"), " ");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "input", 62);
    \u0275\u0275listener("focus", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_61_Template_input_focus_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 63);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_61_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyLink());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 64);
    \u0275\u0275text(5, "Open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const url_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", url_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.copied() ? "\u2713 Copied" : "Copy", " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", url_r5, \u0275\u0275sanitizeUrl);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.linkBusy() ? "Preparing the link\u2026" : "No link yet.");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, " Each invoice has its own link \u2014 see ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " below. ");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_66_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(2, 2, s_r6.start, "EEE d MMM, HH:mm"), " \u2013 ", \u0275\u0275pipeBind2(3, 5, s_r6.end, "HH:mm"), "");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 40);
    \u0275\u0275text(2, "Time blocks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275repeaterCreate(4, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_66_For_5_Template, 4, 8, "span", 65, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.slots());
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(5, 2, b_r7.start_at, "EEE d MMM y, HH:mm"), " \u2013 ", \u0275\u0275pipeBind2(6, 5, b_r7.end_at, "HH:mm"), "");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "Where");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r7.location);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "Added by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r7.created_by_name);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_89_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const w_r9 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 ", w_r9.workTypeLabel, " ");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_89_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.workEditorOpen.set(true));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_89_Conditional_2_Template, 1, 1);
    \u0275\u0275text(3, " \xB7 edit task ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 67);
    \u0275\u0275text(5, "Work board \u2192");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const w_r9 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_6_0 = w_r9.stageLabel) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : w_r9.production_status, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(w_r9.workTypeLabel ? 2 : -1);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_90_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addToWorkBoard());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.addingCard());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addingCard() ? "Adding\u2026" : "+ Add to Work board", " ");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r7.client_email);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_92_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 71)(1, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 74);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r11.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 2, it_r11.amount, "EUR", "symbol", "1.2-2"));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-panel", 43)(1, "a", 69);
    \u0275\u0275text(2, "Edit invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 70);
    \u0275\u0275repeaterCreate(4, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_92_For_5_Template, 6, 7, "li", 71, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 72)(7, "span");
    \u0275\u0275text(8, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r7 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c02, ctx_r1.id))("queryParams", \u0275\u0275pureFunction0(10, _c12));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.lineItems());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 3, b_r7.price_total, "EUR", "symbol", "1.2-2"));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, "No invoice raised yet.");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r13.status);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", inv_r13.days_overdue, "d overdue");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "paid");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", \u0275\u0275pipeBind4(2, 1, inv_r13.balance_due, "EUR", "symbol", "1.0-2"), " due");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 76)(1, "div", 77)(2, "span", 78);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Conditional_4_Template, 2, 1, "span", 79)(5, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Conditional_5_Template, 2, 1, "span", 80)(6, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Conditional_6_Template, 2, 0, "span", 81);
    \u0275\u0275elementStart(7, "span", 82);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275template(10, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Conditional_10_Template, 3, 6, "span", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-invoice-actions", 84);
    \u0275\u0275listener("send", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Template_app_invoice_actions_send_11_listener($event) {
      const inv_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onInvoiceSend(inv_r13, $event));
    })("addCost", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Template_app_invoice_actions_addCost_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openCostDialog());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const inv_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_15_0 = inv_r13.invoice_number) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "Draft");
    \u0275\u0275advance();
    \u0275\u0275conditional(inv_r13.status !== "issued" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(inv_r13.is_overdue ? 5 : inv_r13.payment_status === "paid" ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(9, 6, inv_r13.amount_gross, "EUR", "symbol", "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(inv_r13.balance_due > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("invoice", inv_r13);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, " An issued invoice is a document your client already holds \u2014 when the price changes, raise another rather than editing the original. ");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 75);
    \u0275\u0275repeaterCreate(1, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_For_2_Template, 12, 11, "li", 76, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_Conditional_3_Template, 2, 0, "p", 46);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.invoices());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.invoices().length > 1 ? 3 : -1);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, "No payments recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", p_r14.note, "");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1, "refunded");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "pending");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const p_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deletePayment(p_r14));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 86)(1, "div", 87);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 88)(5, "span", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Conditional_7_Template, 2, 1, "span", 90)(8, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Conditional_8_Template, 2, 0, "span", 91)(9, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Conditional_9_Template, 2, 0, "span", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 93);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Conditional_13_Template, 2, 0, "button", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    const p_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("pay--refunded", p_r14.status === "refunded");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(3, 9, p_r14.amount, "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.methodLabel(p_r14.method));
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r14.note ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r14.status === "refunded" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r14.status === "pending" ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 14, (tmp_21_0 = p_r14.paid_at) !== null && tmp_21_0 !== void 0 ? tmp_21_0 : p_r14.created_at, "d MMM y"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!p_r14.stripe_payment_intent_id ? 13 : -1);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 49);
    \u0275\u0275repeaterCreate(1, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_For_2_Template, 14, 17, "li", 85, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.payments());
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, "No costs recorded. Add what this job cost you to see its real profit.");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", e_r17.vendor, "");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1, "rebilled");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 86)(1, "div", 100);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 88)(5, "span", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_For_2_Conditional_9_Template, 2, 1, "span", 90)(10, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_For_2_Conditional_10_Template, 2, 0, "span", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 93);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 101);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_For_2_Template_button_click_14_listener() {
      const e_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openCostDialog(e_r17));
    });
    \u0275\u0275text(15, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 102);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_For_2_Template_button_click_16_listener() {
      const e_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteExpense(e_r17));
    });
    \u0275\u0275text(17, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind4(3, 6, e_r17.amount, "EUR", "symbol", "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(e_r17.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", e_r17.description, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r17.vendor ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r17.billable ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 11, e_r17.spent_on, "d MMM y"));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 49);
    \u0275\u0275repeaterCreate(1, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_For_2_Template, 18, 14, "li", 86, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 96)(4, "div", 97)(5, "span");
    \u0275\u0275text(6, "Charged");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 98)(11, "span");
    \u0275\u0275text(12, "Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 99)(17, "span");
    \u0275\u0275text(18, "Profit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.expenses());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 5, ctx_r1.chargedTotal(), "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind4(15, 10, ctx_r1.expensesTotal(), "EUR", "symbol", "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("profit__row--loss", ctx_r1.profit() < 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(21, 15, ctx_r1.profit(), "EUR", "symbol", "1.2-2"));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, "Nothing attached \u2014 the client sees no delivery section.");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", l_r18.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r18.label || l_r18.url);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Live on the client's booking link now. ");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Hidden until the booking is paid in full \u2014 or use Release. ");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_Conditional_0_Template, 2, 1, "p", 103);
    \u0275\u0275elementStart(1, "ul", 104);
    \u0275\u0275repeaterCreate(2, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_For_3_Template, 3, 2, "li", null, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275template(5, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_Conditional_5_Template, 1, 0)(6, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_5_0 = (tmp_5_0 = ctx_r1.delivery()) == null ? null : tmp_5_0.message) ? 0 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_6_0 = (tmp_6_0 = ctx_r1.delivery()) == null ? null : tmp_6_0.links) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : \u0275\u0275pureFunction0(2, _c3));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.clientCanSee() ? 5 : 6);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div")(2, "a", 7);
    \u0275\u0275text(3, "\u2190 All bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "button", 11);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyLink());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 12);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goEdit());
    });
    \u0275\u0275text(12, "Edit booking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 14);
    \u0275\u0275element(15, "circle", 15)(16, "circle", 16)(17, "circle", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, BookingDetailComponent_Conditional_3_Conditional_0_ng_template_18_Template, 11, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 18)(21, "div", 19)(22, "span", 20);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 21);
    \u0275\u0275text(26, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 19)(28, "span", 22);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 21);
    \u0275\u0275text(32, "Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 19)(34, "span", 20);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 21);
    \u0275\u0275text(38, "Balance due");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 19)(40, "span", 20);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 21);
    \u0275\u0275text(44, " Costs ");
    \u0275\u0275elementStart(45, "button", 23);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCostDialog());
    });
    \u0275\u0275text(46, "+ Add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(47, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_47_Template, 6, 10, "div", 19);
    \u0275\u0275elementStart(48, "div", 24)(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 25)(52, "div", 26)(53, "app-panel", 27)(54, "div", 28)(55, "div", 29)(56, "div", 30)(57, "span", 31);
    \u0275\u0275text(58, "Client link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 32);
    \u0275\u0275text(60, " Their whole page for this job \u2014 the details, the invoice, paying by card or in person, and the files you deliver once it's paid. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_61_Template, 6, 3, "div", 33)(62, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_Template, 2, 1, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_63_Template, 5, 0, "p", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "app-panel", 36)(65, "div", 37);
    \u0275\u0275template(66, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_66_Template, 6, 0, "div", 38)(67, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_67_Template, 7, 8, "div", 39)(68, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_68_Template, 5, 1, "div", 39);
    \u0275\u0275elementStart(69, "div", 39)(70, "span", 40);
    \u0275\u0275text(71, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 41);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 39)(75, "span", 40);
    \u0275\u0275text(76, "Worker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 41);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 39)(80, "span", 40);
    \u0275\u0275text(81, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 41);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(84, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_84_Template, 5, 1, "div", 39);
    \u0275\u0275elementStart(85, "div", 39)(86, "span", 40);
    \u0275\u0275text(87, "Production");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 41);
    \u0275\u0275template(89, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_89_Template, 6, 2)(90, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_90_Template, 2, 2, "button", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(91, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_91_Template, 5, 1, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(92, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_92_Template, 12, 11, "app-panel", 43);
    \u0275\u0275elementStart(93, "app-panel", 44)(94, "button", 45);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addInvoice());
    });
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(96, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_96_Template, 2, 0, "p", 46)(97, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_97_Template, 4, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 26)(99, "app-panel", 47)(100, "button", 48);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_100_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.payDialogOpen.set(true));
    });
    \u0275\u0275text(101, "+ Record");
    \u0275\u0275elementEnd();
    \u0275\u0275template(102, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_102_Template, 2, 0, "p", 46)(103, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_103_Template, 3, 0, "ul", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "app-panel", 50)(105, "button", 48);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_105_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCostDialog());
    });
    \u0275\u0275text(106, "+ Add");
    \u0275\u0275elementEnd();
    \u0275\u0275template(107, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_107_Template, 2, 0, "p", 46)(108, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_108_Template, 22, 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "app-panel", 51)(110, "button", 48);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_110_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deliveryDialogOpen.set(true));
    });
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275template(112, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_112_Template, 2, 0, "p", 46)(113, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_113_Template, 7, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "app-expense-dialog", 52);
    \u0275\u0275twoWayListener("openChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_expense_dialog_openChange_114_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.costDialogOpen, $event) || (ctx_r1.costDialogOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_expense_dialog_saved_114_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCostSaved());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "app-payment-dialog", 53);
    \u0275\u0275twoWayListener("openChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_payment_dialog_openChange_115_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.payDialogOpen, $event) || (ctx_r1.payDialogOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_payment_dialog_saved_115_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPaymentSaved());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "app-invoice-send", 54);
    \u0275\u0275twoWayListener("openChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_invoice_send_openChange_116_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.sendOpen, $event) || (ctx_r1.sendOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("sent", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_invoice_send_sent_116_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInvoiceSent());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "app-delivery-dialog", 55);
    \u0275\u0275twoWayListener("openChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_delivery_dialog_openChange_117_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.deliveryDialogOpen, $event) || (ctx_r1.deliveryDialogOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_delivery_dialog_saved_117_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeliverySaved());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "app-work-editor", 56);
    \u0275\u0275twoWayListener("openChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_work_editor_openChange_118_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.workEditorOpen, $event) || (ctx_r1.workEditorOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_work_editor_saved_118_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onWorkTaskSaved());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_17_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_25_0;
    let tmp_45_0;
    const b_r7 = ctx;
    const moreMenu_r19 = \u0275\u0275reference(19);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", b_r7.booking_ref, " \xB7 ", (tmp_5_0 = b_r7.client_name) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "No client", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.copied() ? "\u2713 Copied" : "Copy client link");
    \u0275\u0275advance(3);
    \u0275\u0275property("cdkMenuTriggerFor", moreMenu_r19);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(24, 58, b_r7.price_total, "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(30, 63, b_r7.total_paid, "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("money__value--due", ctx_r1.balance() > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(36, 68, ctx_r1.balance(), "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("money__value--cost", ctx_r1.expensesTotal() > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.expensesTotal() ? "\u2212" : "", "", \u0275\u0275pipeBind4(42, 73, ctx_r1.expensesTotal(), "EUR", "symbol", "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.expensesTotal() > 0 ? 47 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge badge--", b_r7.payment_status, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r7.payment_status === "paid" ? "Paid in full" : b_r7.payment_status === "partial" ? "Partially paid" : b_r7.payment_status === "external" ? "External" : "Unpaid", " ");
    \u0275\u0275advance(11);
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.clientLink()) ? 61 : 62, tmp_17_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.invoices().length ? 63 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.slots().length > 1 ? 66 : 67);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(b_r7.location ? 68 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_21_0 = b_r7.service_name) !== null && tmp_21_0 !== void 0 ? tmp_21_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_22_0 = b_r7.staff_name) !== null && tmp_22_0 !== void 0 ? tmp_22_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r7.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r7.created_by_name ? 84 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_25_0 = ctx_r1.workItem()) ? 89 : 90, tmp_25_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(b_r7.client_email ? 91 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lineItems().length ? 92 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.invoices().length + (ctx_r1.invoices().length === 1 ? " invoice" : " invoices"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.addingInvoice());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addingInvoice() ? "Adding\u2026" : "+ Add", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invoices().length === 0 ? 96 : 97);
    \u0275\u0275advance(3);
    \u0275\u0275property("meta", ctx_r1.payments().length + (ctx_r1.payments().length === 1 ? " record" : " records"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.payments().length === 0 ? 102 : 103);
    \u0275\u0275advance(2);
    \u0275\u0275property("meta", ctx_r1.expenses().length + (ctx_r1.expenses().length === 1 ? " item" : " items"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.expenses().length === 0 ? 107 : 108);
    \u0275\u0275advance(2);
    \u0275\u0275property("meta", ctx_r1.deliveryMeta());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hasDelivery() ? "Edit" : "+ Attach", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hasDelivery() ? 112 : 113);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("open", ctx_r1.costDialogOpen);
    \u0275\u0275property("forBookingId", ctx_r1.id)("expense", ctx_r1.editingExpense());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx_r1.payDialogOpen);
    \u0275\u0275property("bookingId", ctx_r1.id)("balance", ctx_r1.balance())("bookingRef", (tmp_45_0 = (tmp_45_0 = ctx_r1.booking()) == null ? null : tmp_45_0.booking_ref) !== null && tmp_45_0 !== void 0 ? tmp_45_0 : "");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx_r1.sendOpen);
    \u0275\u0275property("invoiceId", ctx_r1.sendId())("kind", ctx_r1.sendKind());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx_r1.deliveryDialogOpen);
    \u0275\u0275property("bookingId", ctx_r1.id)("delivery", ctx_r1.delivery())("paidInFull", ctx_r1.paidInFull());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx_r1.workEditorOpen);
    \u0275\u0275property("job", ctx_r1.workItem())("staff", ctx_r1.workStaff());
  }
}
function BookingDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingDetailComponent_Conditional_3_Conditional_0_Template, 119, 78);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.booking()) ? 0 : -1, tmp_1_0);
  }
}
var METHOD_LABEL2 = {
  card: "Card",
  cash: "Cash",
  revolut: "Revolut",
  bank: "Bank transfer",
  other: "Other"
};
var BookingDetailComponent = class _BookingDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.auth = inject(BookingsAuthService);
    this.admin = inject(BookingAdminService);
    this.data = inject(BookingDataService);
    this.id = "";
    this.payments = signal([]);
    this.slots = signal([]);
    this.lineItems = signal([]);
    this.invoices = signal([]);
    this.copied = signal(false);
    this.clientLink = signal("");
    this.linkBusy = signal(false);
    this.adding = signal(false);
    this.addingInvoice = signal(false);
    this.workItem = signal(null);
    this.addingCard = signal(false);
    this.workEditorOpen = signal(false);
    this.workStaff = signal([]);
    this.delivery = signal(null);
    this.sendOpen = signal(false);
    this.sendId = signal("");
    this.sendKind = signal("invoice");
    this.deliveryDialogOpen = signal(false);
    this.payDialogOpen = signal(false);
    this.expenses = signal([]);
    this.costDialogOpen = signal(false);
    this.editingExpense = signal(null);
    this.chargedTotal = computed(() => this.booking()?.price_total ?? 0);
    this.expensesTotal = computed(() => this.expenses().reduce((t, e) => t + Number(e.amount), 0));
    this.profit = computed(() => this.chargedTotal() - this.expensesTotal());
    this.booking = computed(() => this.data.bookings().find((b) => b.id === this.id));
    this.balance = computed(() => {
      const b = this.booking();
      return b ? Math.max(0, Math.round((b.price_total - b.total_paid) * 100) / 100) : 0;
    });
    this.hasDelivery = computed(() => {
      const d = this.delivery();
      return !!d && (!!d.message?.trim() || d.links.length > 0);
    });
    this.released = computed(() => !!this.delivery()?.released_at);
    this.paidInFull = computed(() => this.booking()?.payment_status === "paid");
    this.clientCanSee = computed(() => this.hasDelivery() && (this.released() || this.paidInFull()));
    this.deliveryMeta = computed(() => {
      if (!this.hasDelivery())
        return "nothing attached";
      return this.clientCanSee() ? "visible to client" : "locked until paid";
    });
  }
  onWorkTaskSaved() {
    return __async(this, null, function* () {
      this.workItem.set(yield this.admin.workItemForBooking(this.id));
    });
  }
  onInvoiceSend(inv, kind) {
    this.sendId.set(inv.id);
    this.sendKind.set(kind);
    this.sendOpen.set(true);
  }
  /** Sending can ISSUE a draft, which gives it a number — so the list must re-read. */
  onInvoiceSent() {
    return __async(this, null, function* () {
      this.invoices.set(yield this.data.listInvoicesForBooking(this.id));
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.id = this.route.snapshot.paramMap.get("id") ?? "";
      if (this.id) {
        yield this.auth.initialize();
        const [payments, slots, items, delivery, invoices, card, expenses] = yield Promise.all([
          this.data.getPayments(this.id),
          this.data.getBookingSlots(this.id),
          this.data.getInvoiceItems(this.id),
          this.data.getDelivery(this.id),
          this.data.listInvoicesForBooking(this.id),
          this.admin.workItemForBooking(this.id),
          this.data.getExpenses(this.id)
        ]);
        this.payments.set(payments);
        this.expenses.set(expenses);
        this.slots.set(slots);
        this.lineItems.set(items);
        this.invoices.set(invoices);
        this.workItem.set(card);
        this.workStaff.set((yield this.admin.listStaff(this.auth.orgId() ?? "")).map((st) => ({ id: st.id, name: st.name })));
        this.applyDelivery(delivery);
        void this.ensureClientLink();
      }
    });
  }
  // ── Delivery actions ─────────────────────────────────────────────────────
  applyDelivery(d) {
    this.delivery.set(d);
  }
  /** Re-read after a dialog saved, so the summary panels reflect what was written. */
  onDeliverySaved() {
    return __async(this, null, function* () {
      this.applyDelivery(yield this.data.getDelivery(this.id));
    });
  }
  onPaymentSaved() {
    return __async(this, null, function* () {
      this.payments.set(yield this.data.getPayments(this.id));
    });
  }
  methodLabel(m) {
    return METHOD_LABEL2[m] ?? m;
  }
  /** Opens the shared dialog. Passing a row edits it; passing nothing adds a new cost. */
  openCostDialog(e) {
    this.editingExpense.set(e ?? null);
    this.costDialogOpen.set(true);
  }
  onCostSaved() {
    return __async(this, null, function* () {
      this.editingExpense.set(null);
      this.expenses.set(yield this.data.getExpenses(this.id));
    });
  }
  deleteExpense(e) {
    return __async(this, null, function* () {
      const charged = e.invoice_id ? " It was charged to the client, and that invoice line stays \u2014 remove it in the invoice editor if you need to." : "";
      if (!(yield this.confirm.ask({
        title: "Remove cost",
        message: `Remove \u201C${e.description}\u201D (\u20AC${Number(e.amount).toFixed(2)})?${charged}`,
        confirmLabel: "Remove",
        danger: true
      })))
        return;
      yield this.data.deleteExpense(e.id);
      this.expenses.set(yield this.data.getExpenses(this.id));
      this.toast.success("Cost removed");
    });
  }
  deletePayment(p) {
    return __async(this, null, function* () {
      if (p.stripe_payment_intent_id) {
        this.toast.error("Card payments are managed in Stripe and can\u2019t be removed here.");
        return;
      }
      const ok = yield this.confirm.ask({
        title: "Remove payment",
        message: `Remove this \u20AC${p.amount} payment? This only fixes the record \u2014 it does not refund anyone.`,
        confirmLabel: "Remove",
        danger: true
      });
      if (!ok)
        return;
      yield this.data.deletePayment(p.id, this.id);
      this.payments.set(yield this.data.getPayments(this.id));
      this.toast.info("Payment removed");
    });
  }
  /** Resolve the client link so it can be SHOWN. Generating is idempotent — it returns the
   *  booking's existing token rather than minting a new one — so a link already sent to a
   *  client never stops working because this page was opened. */
  ensureClientLink() {
    return __async(this, null, function* () {
      if (this.clientLink())
        return this.clientLink();
      this.linkBusy.set(true);
      try {
        const url = yield this.data.generateLink(this.id);
        if (url)
          this.clientLink.set(url);
        return url ?? "";
      } finally {
        this.linkBusy.set(false);
      }
    });
  }
  copyLink() {
    return __async(this, null, function* () {
      const url = yield this.ensureClientLink();
      if (!url) {
        this.toast.error("Could not generate the client link.");
        return;
      }
      yield navigator.clipboard.writeText(url);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2e3);
      this.toast.success("Client link copied to clipboard");
    });
  }
  /** Copy the client-shareable (no-login) invoice link. */
  copyInvoiceLink() {
    return __async(this, null, function* () {
      const url = yield this.data.invoiceShareLink(this.id);
      if (!url) {
        this.toast.error("Could not create the invoice link.");
        return;
      }
      yield navigator.clipboard.writeText(url);
      this.toast.success("Invoice link copied \u2014 share it with your client");
    });
  }
  /**
   * Put an already-created booking on the Work board. Previously `needs_production` was a
   * create-time-only choice on the booking form, so a job you didn't flag up front could
   * never reach the board — you had to delete and recreate it. Creating the card also
   * seeds the service's task checklist, exactly as it does from the form.
   */
  addToWorkBoard() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || this.addingCard() || this.workItem())
        return;
      this.addingCard.set(true);
      try {
        yield this.admin.addWorkItem(org, this.id, "");
        this.workItem.set(yield this.admin.workItemForBooking(this.id));
        this.toast.success("Added to the Work board");
        this.workEditorOpen.set(true);
      } catch {
        this.toast.error("Could not add this job to the Work board.");
      } finally {
        this.addingCard.set(false);
      }
    });
  }
  /** Open an invoice's editor — by booking for the original (keeps existing links and
   *  the "from=booking" return behaviour), by invoice id for any later one. */
  /**
   * Raise an additional invoice against this job. This is the correct move when the
   * scope grows after the first invoice is already sent: an issued invoice is a
   * document the client holds, so you don't edit it — you issue a second one.
   * Created as a draft so it takes no invoice number until you actually issue it.
   */
  addInvoice() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || this.addingInvoice())
        return;
      this.addingInvoice.set(true);
      try {
        const res = yield this.data.addInvoiceToBooking(org, this.id);
        if (res.error || !res.id) {
          this.toast.error("Could not add another invoice.");
          return;
        }
        this.toast.success("Draft invoice added");
        this.router.navigate(["/bookings/invoices/edit", res.id]);
      } finally {
        this.addingInvoice.set(false);
      }
    });
  }
  goEdit() {
    this.router.navigate(["/bookings", this.id, "edit"]);
  }
  static {
    this.\u0275fac = function BookingDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingDetailComponent, selectors: [["app-booking-detail"]], decls: 4, vars: 1, consts: [["moreMenu", ""], [1, "page"], [1, "loading"], [1, "empty"], [1, "spinner"], ["routerLink", "/bookings/list", 1, "btn", "btn--ghost"], [1, "page__head"], ["routerLink", "/bookings/list", 1, "back"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], [1, "btn", "btn--ghost", 3, "click"], [1, "btn", "btn--primary", 3, "click"], ["aria-label", "More actions", 1, "kebab", 3, "cdkMenuTriggerFor"], ["viewBox", "0 0 20 20", "width", "18", "height", "18", "fill", "currentColor"], ["cx", "10", "cy", "4", "r", "1.7"], ["cx", "10", "cy", "10", "r", "1.7"], ["cx", "10", "cy", "16", "r", "1.7"], [1, "money"], [1, "money__stat"], [1, "money__value"], [1, "money__label"], [1, "money__value", "money__value--paid"], ["type", "button", 1, "money__add", 3, "click"], [1, "money__badge"], [1, "detail-grid"], [1, "detail-col"], ["title", "Share with the client"], [1, "share"], [1, "share__row"], [1, "share__meta"], [1, "share__name"], [1, "share__what"], [1, "share__link"], [1, "share__pending"], [1, "share__note"], ["title", "Job details"], [1, "facts"], [1, "fact", "fact--blocks"], [1, "fact"], [1, "fact__k"], [1, "fact__v"], ["type", "button", 1, "link-btn", 3, "disabled"], ["title", "What's billed"], ["title", "Invoices", 3, "meta"], ["panel-actions", "", "type", "button", 1, "link-btn", 3, "click", "disabled"], [1, "empty-line"], ["title", "Payments", 3, "meta"], ["panel-actions", "", "type", "button", 1, "link-btn", 3, "click"], [1, "pays"], ["title", "Costs", 3, "meta"], ["title", "Delivery", 3, "meta"], [3, "openChange", "saved", "open", "forBookingId", "expense"], [3, "openChange", "saved", "open", "bookingId", "balance", "bookingRef"], [3, "openChange", "sent", "open", "invoiceId", "kind"], [3, "openChange", "saved", "open", "bookingId", "delivery", "paidInFull"], [3, "openChange", "saved", "open", "job", "staff"], ["cdkMenu", "", 1, "menu"], ["cdkMenuItem", "", "target", "_blank", "rel", "noopener", 1, "menu__item", 3, "href"], ["cdkMenuItem", "", 1, "menu__item", 3, "click"], ["cdkMenuItem", "", 1, "menu__item", 3, "routerLink", "queryParams"], ["cdkMenuItem", "", "routerLink", "/bookings/new", 1, "menu__item", 3, "queryParams"], ["readonly", "", "aria-label", "Client link", 1, "share__input", 3, "focus", "value"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn--ghost", "btn--sm", 3, "href"], [1, "block-line"], ["type", "button", 1, "link-btn", 3, "click"], ["routerLink", "/bookings/work", 1, "fact__aside"], ["type", "button", 1, "link-btn", 3, "click", "disabled"], ["panel-actions", "", 1, "link-btn", 3, "routerLink", "queryParams"], [1, "items"], [1, "items__row"], [1, "items__total"], [1, "items__desc", "text-multiline"], [1, "items__amt"], [1, "invs"], [1, "inv"], [1, "inv__main"], [1, "inv__num"], [1, "tag"], [1, "tag", "tag--due"], [1, "tag", "tag--live"], [1, "inv__money"], [1, "inv__due"], [3, "send", "addCost", "invoice"], [1, "pay", 3, "pay--refunded"], [1, "pay"], [1, "pay__amount"], [1, "pay__main"], [1, "pay__method"], [1, "pay__note"], [1, "pay__tag"], [1, "pay__tag", "pay__tag--pending"], [1, "pay__date"], ["title", "Remove payment", 1, "pay__del"], ["title", "Remove payment", 1, "pay__del", 3, "click"], [1, "profit"], [1, "profit__row"], [1, "profit__row", "profit__row--cost"], [1, "profit__row", "profit__row--total"], [1, "pay__amount", "pay__amount--cost"], ["title", "Edit cost", 1, "pay__edit", 3, "click"], ["title", "Remove cost", 1, "pay__del", 3, "click"], [1, "deliv-msg"], [1, "deliv-links"], ["target", "_blank", "rel", "noopener", 3, "href"]], template: function BookingDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, BookingDetailComponent_Conditional_1_Template, 2, 0, "div", 2)(2, BookingDetailComponent_Conditional_2_Template, 5, 0, "div", 3)(3, BookingDetailComponent_Conditional_3_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.loading() && !ctx.booking() ? 1 : !ctx.booking() ? 2 : 3);
      }
    }, dependencies: [
      RouterLink,
      FormsModule,
      DatePipe,
      CurrencyPipe,
      ExpenseDialogComponent,
      PanelComponent,
      PaymentDialogComponent,
      DeliveryDialogComponent,
      CdkMenuTrigger,
      CdkMenu,
      CdkMenuItem,
      InvoiceActionsComponent,
      InvoiceSendComponent,
      WorkEditorComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5fr 4fr;\n  gap: 18px;\n  align-items: start;\n}\n.detail-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n@media (max-width: 900px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.back[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  text-decoration: none;\n  display: inline-block;\n  margin-bottom: 8px;\n}\n.back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 640px) {\n  .money[_ngcontent-%COMP%] {\n    gap: 10px;\n    padding: 16px;\n  }\n  .money__value[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.empty-line[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #94a3b8;\n  margin: 4px 0;\n}\n.money[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr) auto;\n  align-items: center;\n  gap: 18px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px 22px;\n  margin-bottom: 18px;\n}\n@media (max-width: 560px) {\n  .money[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .money[_ngcontent-%COMP%]   .money__badge[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n.money__stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.money__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.money__value--paid[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.money__value--due[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.money__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.money__badge[_ngcontent-%COMP%] {\n  justify-self: end;\n}\n.facts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.fact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 4px 16px;\n  padding: 9px 0;\n  font-size: 13.5px;\n}\n.fact[_ngcontent-%COMP%]    + .fact[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n}\n.fact__k[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 600;\n}\n.fact__v[_ngcontent-%COMP%] {\n  color: #0f172a;\n  text-align: right;\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.fact--blocks[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.block-line[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1.5;\n}\n.block-line[_ngcontent-%COMP%]    + .block-line[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.pays[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.pay[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 11px 0;\n}\n.pay[_ngcontent-%COMP%]    + .pay[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n}\n.pay--refunded[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.pay__amount[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  min-width: 84px;\n}\n.pay__main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 13.5px;\n  color: #475569;\n}\n.pay__method[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.pay__note[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.pay__tag[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #ef4444;\n}\n.pay__tag--pending[_ngcontent-%COMP%] {\n  color: #a16207;\n}\n.pay__date[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.pay__del[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  font-size: 14px;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.pay__del[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.payform__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 620px) {\n  .payform__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 420px) {\n  .payform__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field--note[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.opt[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.payform__actions[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 11px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge--paid[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge--partial[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.badge--unpaid[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge--external[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2.5px solid #e2e8f0;\n  border-top-color: #F4A922;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 40px 0;\n  color: #94a3b8;\n}\n.items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.items__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: baseline;\n  padding: 9px 0;\n  border-bottom: 1px solid #e2e8f0;\n}\n.items__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.items__desc[_ngcontent-%COMP%] {\n  color: #0f172a;\n  white-space: pre-line;\n}\n.items__amt[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  color: #475569;\n  white-space: nowrap;\n}\n.items__total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1.5px solid #e2e8f0;\n  font-weight: 800;\n  color: #0f172a;\n}\n.delivery-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-top: 14px;\n}\n.sub-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n  margin: 14px 0 6px;\n}\n.tag--live[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.pay__amount--cost[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.profit[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.profit__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  font-size: 13px;\n  color: #475569;\n}\n.profit__row--cost[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.profit__row--total[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  padding-top: 8px;\n  border-top: 1px solid #e2e8f0;\n  font-size: 15px;\n  font-weight: 800;\n  color: #16a34a;\n}\n.profit__row--loss[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.check--inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 10px;\n  font-size: 12.5px;\n  color: #475569;\n  cursor: pointer;\n}\n.check--inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #F4A922;\n  cursor: pointer;\n}\n.pane[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 18px;\n}\n.detail-col[_ngcontent-%COMP%]   app-panel[_ngcontent-%COMP%] {\n  display: block;\n}\n.money[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n}\n@media (max-width: 640px) {\n  .money[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.money__value--cost[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.money__add[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  padding: 0;\n  background: none;\n  border: none;\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: 700;\n  color: #F4A922;\n  cursor: pointer;\n}\n.money__add[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.pay__edit[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #F4A922;\n  padding: 0 6px;\n}\n.pay__edit[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.kebab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n}\n.kebab[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.menu[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);\n  padding: 5px;\n  min-width: 190px;\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 9px 12px;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 13px;\n  color: #0f172a;\n  text-decoration: none;\n}\n.menu__item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.detail-col[_ngcontent-%COMP%]   app-panel[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n.pane[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n.deliv-msg[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n.deliv-links[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 10px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.deliv-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #F4A922;\n  text-decoration: none;\n  overflow-wrap: anywhere;\n}\n.deliv-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.invs[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.inv[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #ffffff;\n}\n.inv__main[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n.inv__num[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Mono",\n    monospace;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.inv__money[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n}\n.inv__due[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #ef4444;\n}\n@media (max-width: 560px) {\n  .inv__money[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.tag--due[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.fact__aside[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 11.5px;\n  color: var(--color-text-muted, #6b7280);\n  text-decoration: none;\n}\n.fact__aside[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary, #F4A922);\n}\n.share__row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.share__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.share__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-text-base, #111827);\n}\n.share__what[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.5;\n}\n.share__link[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.share__input[_ngcontent-%COMP%] {\n  flex: 1 1 260px;\n  min-width: 0;\n  box-sizing: border-box;\n  padding: 9px 11px;\n  border: 1.5px solid var(--color-border, #e5e7eb);\n  border-radius: 8px;\n  font-family:\n    "SF Mono",\n    "Fira Mono",\n    monospace;\n  font-size: 12px;\n  color: var(--color-text-secondary, #374151);\n  background: var(--color-bg-light, #f9fafb);\n}\n.share__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary, #F4A922);\n}\n.share__pending[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--color-text-muted, #6b7280);\n}\n.share__note[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  padding-top: 10px;\n  font-size: 11.5px;\n  border-top: 1px solid var(--color-border, #e5e7eb);\n  color: var(--color-text-muted, #6b7280);\n}\n/*# sourceMappingURL=booking-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingDetailComponent, { className: "BookingDetailComponent", filePath: "src/app/booking/platform/bookings/booking-detail/booking-detail.component.ts", lineNumber: 38 });
})();
export {
  BookingDetailComponent
};
//# sourceMappingURL=chunk-CM7PQA3E.js.map
