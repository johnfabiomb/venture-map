import {
  ModalComponent
} from "./chunk-YT6H6K5O.js";
import {
  SelectComponent
} from "./chunk-XYER4DO7.js";
import {
  BookingDataService
} from "./chunk-LZYUP6I7.js";
import {
  ToastService
} from "./chunk-VP2YFPLJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-PLONONHM.js";
import {
  CurrencyPipe,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-VEX6DIAJ.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

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
    this.bookingId = input(null);
    this.invoiceId = input(null);
    this.balance = input(0);
    this.reference = input("");
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
        const res = yield this.data.addPayment({ bookingId: this.bookingId(), invoiceId: this.invoiceId() }, {
          amount,
          method: this.method(),
          note: this.note().trim() || null,
          paidAt
        });
        if (res.error) {
          this.toast.error("Could not record the payment.");
          return;
        }
        const ref = this.reference();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentDialogComponent, selectors: [["app-payment-dialog"]], inputs: { open: [1, "open"], bookingId: [1, "bookingId"], invoiceId: [1, "invoiceId"], balance: [1, "balance"], reference: [1, "reference"] }, outputs: { open: "openChange", saved: "saved" }, decls: 28, vars: 12, consts: [["title", "Record a payment", 3, "openChange", "open", "dismissable"], [1, "pd"], ["type", "button", 1, "pd__fill"], [1, "pd__grid"], [1, "pd__field"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", "name", "pdAmount", 3, "ngModelChange", "ngModel"], [3, "changed", "value", "options", "searchable"], ["type", "date", "name", "pdDate", 3, "ngModelChange", "ngModel"], [1, "pd__field", "pd__field--wide"], ["placeholder", "e.g. Deposit, Final payment", "name", "pdNote", 3, "ngModelChange", "ngModel"], [1, "pd__note"], [1, "pd__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 1, "pd__fill", 3, "click"]], template: function PaymentDialogComponent_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentDialogComponent, { className: "PaymentDialogComponent", filePath: "src/app/booking/ui/payment-dialog/payment-dialog.component.ts", lineNumber: 100 });
})();

export {
  PaymentDialogComponent
};
//# sourceMappingURL=chunk-7SWVTD3N.js.map
