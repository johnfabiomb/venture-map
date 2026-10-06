import {
  ModalComponent
} from "./chunk-5MZRX563.js";
import {
  BookingDataService
} from "./chunk-5UTJD4BK.js";
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
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-BW7NI53J.js";
import {
  computed,
  effect,
  inject,
  input,
  model,
  output,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JW5UDKQ7.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/core/interfaces/expense.interface.ts
var EXPENSE_CATEGORIES = [
  "Travel",
  "Crew",
  "Equipment",
  "Props & wardrobe",
  "Location fees",
  "Software",
  "Music & licensing",
  "Insurance",
  "Other"
];

// src/app/booking/ui/expense-dialog/expense-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ExpenseDialogComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "option", 7);
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1);
  }
}
function ExpenseDialogComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.lockedJobLabel());
  }
}
function ExpenseDialogComponent_Conditional_32_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r4 = ctx.$implicit;
    \u0275\u0275property("value", j_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r4.booking_ref, " \xB7 ", j_r4.title, "");
  }
}
function ExpenseDialogComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 20);
    \u0275\u0275listener("ngModelChange", function ExpenseDialogComponent_Conditional_32_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bookingId.set($event));
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "No job \u2014 a general business cost");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ExpenseDialogComponent_Conditional_32_For_4_Template, 2, 3, "option", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.bookingId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.jobs());
  }
}
function ExpenseDialogComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("xd__note--warn", ctx_r1.billWarn());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
var ExpenseDialogComponent = class _ExpenseDialogComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.open = model(false);
    this.forBookingId = input(null);
    this.expense = input(null);
    this.saved = output();
    this.categories = EXPENSE_CATEGORIES;
    this.saving = signal(false);
    this.amount = signal(null);
    this.category = signal("Travel");
    this.description = signal("");
    this.vendor = signal("");
    this.bookingId = signal("");
    this.billable = signal(false);
    this.spentOn = signal((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
    this.editing = computed(() => !!this.expense());
    this.lockJob = computed(() => !!this.forBookingId());
    this.jobs = computed(() => [...this.data.bookings()].sort((a, b) => b.next_start_at.localeCompare(a.next_start_at)).slice(0, 150));
    this.lockedJobLabel = computed(() => {
      const b = this.data.bookings().find((x) => x.id === this.forBookingId());
      return b ? `${b.booking_ref} \xB7 ${b.title}` : "This job";
    });
    this.jobInvoices = signal([]);
    this.canBill = computed(() => !!(this.forBookingId() || this.bookingId()));
    this.draftInvoice = computed(() => this.jobInvoices().find((i) => i.status !== "issued"));
    this.lastInvoice = computed(() => this.jobInvoices()[this.jobInvoices().length - 1]);
    this.billWarn = computed(() => this.billable() && this.canBill() && !this.expense()?.invoice_id && !this.draftInvoice() && !!this.lastInvoice());
    this.billNote = computed(() => {
      if (!this.canBill())
        return "A general business cost has no client to charge it to.";
      if (!this.billable())
        return "";
      const already = this.expense()?.invoice_id;
      if (already) {
        const on = this.jobInvoices().find((i) => i.id === already);
        return `Already charged on ${on?.invoice_number ?? "this job\u2019s invoice"}.`;
      }
      const draft = this.draftInvoice();
      if (draft)
        return `Will be added to ${draft.invoice_number ?? "the draft invoice"} as a charge.`;
      const last = this.lastInvoice();
      if (last) {
        return `${last.invoice_number ?? "That invoice"} is already issued, so it cannot be changed \u2014 your client already holds it. The cost is recorded; use \u201C+ Add\u201D on Invoices to raise another one that charges it.`;
      }
      return "This job has no invoice yet \u2014 raise one and the charge can be added to it.";
    });
    this.valid = computed(() => {
      const a = Number(this.amount());
      return isFinite(a) && a > 0 && this.description().trim().length > 0;
    });
    effect(() => {
      if (!this.open())
        return;
      const e = this.expense();
      const preset = this.forBookingId();
      queueMicrotask(() => {
        this.amount.set(e ? Number(e.amount) : null);
        this.category.set(e?.category ?? "Travel");
        this.description.set(e?.description ?? "");
        this.vendor.set(e?.vendor ?? "");
        this.bookingId.set(e?.booking_id ?? preset ?? "");
        this.billable.set(e?.billable ?? false);
        this.spentOn.set(e?.spent_on ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
        void this.loadInvoices(e?.booking_id ?? preset ?? "");
      });
    });
  }
  loadInvoices(bookingId) {
    return __async(this, null, function* () {
      this.jobInvoices.set(bookingId ? yield this.data.listInvoicesForBooking(bookingId) : []);
    });
  }
  save() {
    return __async(this, null, function* () {
      if (!this.valid() || this.saving())
        return;
      const org = this.auth.orgId();
      if (!org) {
        this.toast.error("No organization context.");
        return;
      }
      this.saving.set(true);
      try {
        const amount = Number(this.amount());
        const res = yield this.data.saveExpense(org, {
          id: this.expense()?.id,
          bookingId: this.forBookingId() ?? this.bookingId() ?? null,
          category: this.category(),
          description: this.description(),
          amount,
          spentOn: this.spentOn(),
          vendor: this.vendor() || null,
          billable: this.billable()
        });
        if (res.error || !res.expense) {
          this.toast.error("Could not save the cost.");
          return;
        }
        const outcome = yield this.data.chargeExpenseToInvoice(org, res.expense);
        switch (outcome.kind) {
          case "charged":
            this.toast.success(`\u20AC${amount.toFixed(2)} added to ${outcome.invoiceNumber} and recorded as a cost`);
            break;
          case "issued":
            this.toast.error(`Cost recorded, but ${outcome.invoiceNumber} is already issued and cannot be changed. Raise another invoice to charge it.`, 9e3);
            break;
          default:
            this.toast.success(this.editing() ? "Cost updated" : `\u20AC${amount.toFixed(2)} cost added`);
        }
        this.open.set(false);
        this.saved.emit();
      } finally {
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function ExpenseDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExpenseDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpenseDialogComponent, selectors: [["app-expense-dialog"]], inputs: { open: [1, "open"], forBookingId: [1, "forBookingId"], expense: [1, "expense"] }, outputs: { open: "openChange", saved: "saved" }, decls: 43, vars: 16, consts: [[3, "openChange", "open", "title", "dismissable"], [1, "xd"], [1, "xd__grid"], [1, "xd__field"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", "name", "xdAmount", 3, "ngModelChange", "ngModel"], ["list", "xdCats", "placeholder", "Travel", "name", "xdCat", 3, "ngModelChange", "ngModel"], ["id", "xdCats"], [3, "value"], ["type", "date", "name", "xdDate", 3, "ngModelChange", "ngModel"], [1, "xd__field", "xd__field--wide"], ["placeholder", "e.g. Fuel to Zebbug, second shooter, Adobe CC", "name", "xdDesc", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Circle K", "name", "xdVendor", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], ["name", "xdJob", 3, "ngModel"], [1, "xd__check"], ["type", "checkbox", "name", "xdBill", 3, "ngModelChange", "disabled", "ngModel"], [1, "xd__note", 3, "xd__note--warn"], [1, "xd__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["name", "xdJob", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "xd__note"]], template: function ExpenseDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal", 0);
        \u0275\u0275listener("openChange", function ExpenseDialogComponent_Template_app_modal_openChange_0_listener($event) {
          return ctx.open.set($event);
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "label", 3)(4, "span");
        \u0275\u0275text(5, "Amount (\u20AC)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "input", 4);
        \u0275\u0275listener("ngModelChange", function ExpenseDialogComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.amount.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "label", 3)(8, "span");
        \u0275\u0275text(9, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 5);
        \u0275\u0275listener("ngModelChange", function ExpenseDialogComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.category.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "datalist", 6);
        \u0275\u0275repeaterCreate(12, ExpenseDialogComponent_For_13_Template, 1, 1, "option", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "label", 3)(15, "span");
        \u0275\u0275text(16, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 8);
        \u0275\u0275listener("ngModelChange", function ExpenseDialogComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.spentOn.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "label", 9)(19, "span");
        \u0275\u0275text(20, "What was it?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 10);
        \u0275\u0275listener("ngModelChange", function ExpenseDialogComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.description.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "label", 3)(23, "span");
        \u0275\u0275text(24, "Paid to ");
        \u0275\u0275elementStart(25, "em");
        \u0275\u0275text(26, "optional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "input", 11);
        \u0275\u0275listener("ngModelChange", function ExpenseDialogComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.vendor.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "label", 9)(29, "span");
        \u0275\u0275text(30, "Job");
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, ExpenseDialogComponent_Conditional_31_Template, 1, 1, "input", 12)(32, ExpenseDialogComponent_Conditional_32_Template, 5, 1, "select", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "label", 14)(34, "input", 15);
        \u0275\u0275listener("ngModelChange", function ExpenseDialogComponent_Template_input_ngModelChange_34_listener($event) {
          return ctx.billable.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span");
        \u0275\u0275text(36, "Charge this to the client");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(37, ExpenseDialogComponent_Conditional_37_Template, 2, 3, "p", 16);
        \u0275\u0275elementStart(38, "div", 17)(39, "button", 18);
        \u0275\u0275listener("click", function ExpenseDialogComponent_Template_button_click_39_listener() {
          return ctx.open.set(false);
        });
        \u0275\u0275text(40, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 19);
        \u0275\u0275listener("click", function ExpenseDialogComponent_Template_button_click_41_listener() {
          return ctx.save();
        });
        \u0275\u0275text(42);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_13_0;
        \u0275\u0275property("open", ctx.open())("title", ctx.editing() ? "Edit cost" : "Add a cost")("dismissable", true);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.amount());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.category());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.spentOn());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.description());
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.vendor());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.lockJob() ? 31 : 32);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("xd__check--off", !ctx.canBill());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.canBill())("ngModel", ctx.billable());
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_13_0 = ctx.billNote()) ? 37 : -1, tmp_13_0);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.saving() || !ctx.valid());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.editing() ? "Save changes" : "Add cost", " ");
      }
    }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, ModalComponent], styles: ["\n\n.xd__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 14px;\n}\n.xd__field--wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n@media (max-width: 560px) {\n  .xd__field--wide[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.xd__field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.xd__field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.xd__field[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-style: normal;\n  font-weight: 400;\n}\n.xd__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.xd__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #fff;\n  width: 100%;\n  box-sizing: border-box;\n}\n@media (max-width: 560px) {\n  .xd__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .xd__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.xd__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background: #f8fafc;\n  color: #64748b;\n}\n.xd__field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.xd__field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.xd__check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n  font-size: 12.5px;\n  color: #475569;\n  cursor: pointer;\n}\n.xd__check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #F4A922;\n  cursor: pointer;\n}\n.xd__check--off[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n}\n.xd__note[_ngcontent-%COMP%] {\n  margin: 6px 0 0 24px;\n  font-size: 11.5px;\n  line-height: 1.45;\n  color: #64748b;\n}\n.xd__note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n  font-weight: 600;\n}\n.xd__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 18px;\n}\n@media (max-width: 560px) {\n  .xd__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=expense-dialog.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpenseDialogComponent, { className: "ExpenseDialogComponent", filePath: "src/app/booking/ui/expense-dialog/expense-dialog.component.ts", lineNumber: 124 });
})();

export {
  ExpenseDialogComponent
};
//# sourceMappingURL=chunk-KCTYYQKX.js.map
