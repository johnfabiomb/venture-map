import {
  LineItemsEditorComponent
} from "./chunk-UIJDAMWI.js";
import {
  ClientEditorComponent
} from "./chunk-MYNQS7OI.js";
import "./chunk-5MZRX563.js";
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
} from "./chunk-I23P5XRM.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-RKKFBZE5.js";
import "./chunk-DEXNZGWM.js";
import {
  DefaultValueAccessor,
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
  computed,
  inject,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JW5UDKQ7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/invoices/invoice-edit.component.ts
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
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275text(2, "no job");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.preview());
    });
    \u0275\u0275text(1, "Preview");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Saving updates the booking's total (and its calendar event) to match. ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Conditional_86_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
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
    \u0275\u0275elementStart(11, "div", 8)(12, "h2", 9);
    \u0275\u0275text(13, "What this invoice is for");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 10);
    \u0275\u0275text(15, " Leave the job empty to bill work that never had a time slot. Picking a job links the invoice to it and keeps that booking's total in step. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 11)(17, "span");
    \u0275\u0275text(18, "Job ");
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "app-select", 13);
    \u0275\u0275listener("changed", function InvoiceEditComponent_Conditional_3_Template_app_select_changed_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.jobId = $event;
      return \u0275\u0275resetView(ctx_r1.onJobChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 11)(23, "span");
    \u0275\u0275text(24, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.title, $event) || (ctx_r1.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 15)(27, "label", 11)(28, "span");
    \u0275\u0275text(29, "Client ");
    \u0275\u0275elementStart(30, "span", 12);
    \u0275\u0275text(31, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "app-select", 16);
    \u0275\u0275listener("changed", function InvoiceEditComponent_Conditional_3_Template_app_select_changed_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clientId = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "label", 11)(34, "span");
    \u0275\u0275text(35, "\u2026or a one-off name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.contactName, $event) || (ctx_r1.contactName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "button", 4);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openClientEditor());
    });
    \u0275\u0275text(38, "+ New client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 15)(40, "label", 11)(41, "span");
    \u0275\u0275text(42, "Worker ");
    \u0275\u0275elementStart(43, "span", 12);
    \u0275\u0275text(44, "(who earned it)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "app-select", 18);
    \u0275\u0275listener("changed", function InvoiceEditComponent_Conditional_3_Template_app_select_changed_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.staffId = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "label", 11)(47, "span");
    \u0275\u0275text(48, "Service ");
    \u0275\u0275elementStart(49, "span", 12);
    \u0275\u0275text(50, "(for reporting)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "app-select", 19);
    \u0275\u0275listener("changed", function InvoiceEditComponent_Conditional_3_Template_app_select_changed_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.serviceId = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 15)(53, "label", 11)(54, "span");
    \u0275\u0275text(55, "Work done on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.serviceDate, $event) || (ctx_r1.serviceDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "label", 11)(58, "span");
    \u0275\u0275text(59, "Issue date ");
    \u0275\u0275elementStart(60, "span", 12);
    \u0275\u0275text(61, "(sets the number's year)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.issueDate, $event) || (ctx_r1.issueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "label", 11)(64, "span");
    \u0275\u0275text(65, "Due date ");
    \u0275\u0275elementStart(66, "span", 12);
    \u0275\u0275text(67, "(blank = your default payment terms)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dueDate, $event) || (ctx_r1.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "div", 8)(70, "h2", 9);
    \u0275\u0275text(71, "Line items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p", 10);
    \u0275\u0275text(73, " These are the source of truth for what the client is charged. ");
    \u0275\u0275template(74, InvoiceEditComponent_Conditional_3_Conditional_74_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "app-line-items-editor", 21);
    \u0275\u0275twoWayListener("itemsChange", function InvoiceEditComponent_Conditional_3_Template_app_line_items_editor_itemsChange_75_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.items, $event) || (ctx_r1.items = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 8)(77, "label", 11)(78, "span");
    \u0275\u0275text(79, "Invoice note ");
    \u0275\u0275elementStart(80, "span", 12);
    \u0275\u0275text(81, "(optional, printed on this invoice)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "textarea", 22);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_textarea_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 23)(84, "button", 24);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275template(86, InvoiceEditComponent_Conditional_3_Conditional_86_Template, 2, 1, "button", 25);
    \u0275\u0275elementStart(87, "button", 26);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.leave());
    });
    \u0275\u0275text(88, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "app-client-editor", 27);
    \u0275\u0275twoWayListener("openChange", function InvoiceEditComponent_Conditional_3_Template_app_client_editor_openChange_89_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientEditorOpen, $event) || (ctx_r1.clientEditorOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function InvoiceEditComponent_Conditional_3_Template_app_client_editor_saved_89_listener($event) {
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
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r1.jobId)("options", ctx_r1.jobSelectOptions());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.title);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.clientId)("options", ctx_r1.clientSelectOptions())("clearable", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contactName);
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r1.staffId)("options", ctx_r1.staffSelectOptions())("clearable", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.serviceId)("options", ctx_r1.serviceSelectOptions())("clearable", true);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.serviceDate);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.issueDate);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dueDate);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r1.isStandalone ? 74 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("items", ctx_r1.items);
    \u0275\u0275property("currency", ctx_r1.currency)("services", ctx_r1.services());
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canSave);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : ctx_r1.isNew() ? "Create invoice" : "Save invoice", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isStandalone && !ctx_r1.isNew() ? 86 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("open", ctx_r1.clientEditorOpen);
  }
}
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
    }, decls: 4, vars: 1, consts: [[1, "page"], [1, "muted"], ["routerLink", "/bookings/invoices", 1, "btn", "btn--ghost"], [1, "page__head"], ["type", "button", 1, "back", 3, "click"], [1, "page__title"], [1, "page__sub"], [1, "btn", "btn--ghost"], [1, "card"], [1, "card__h"], [1, "hint"], [1, "field"], [1, "opt"], ["placeholder", "No job \u2014 invoice only", 3, "changed", "value", "options"], ["type", "text", "placeholder", "e.g. Drone filming \u2014 Valletta", 3, "ngModelChange", "ngModel"], [1, "field-row"], ["placeholder", "No saved client", 3, "changed", "value", "options", "clearable"], ["type", "text", "placeholder", "Billed to this name only", 3, "ngModelChange", "ngModel"], ["placeholder", "Unassigned", 3, "changed", "value", "options", "clearable"], ["placeholder", "Unattributed", 3, "changed", "value", "options", "clearable"], ["type", "date", 3, "ngModelChange", "ngModel"], [3, "itemsChange", "items", "currency", "services"], ["rows", "2", "placeholder", "Anything specific the client asked for on this invoice", 3, "ngModelChange", "ngModel"], [1, "actions"], [1, "btn", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--ghost", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], [3, "openChange", "saved", "open"], [1, "tag"], [1, "btn", "btn--ghost", 3, "click"], [1, "btn", "btn--ghost", 3, "click", "disabled"]], template: function InvoiceEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, InvoiceEditComponent_Conditional_1_Template, 2, 0, "p", 1)(2, InvoiceEditComponent_Conditional_2_Template, 4, 0)(3, InvoiceEditComponent_Conditional_3_Template, 90, 30);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 1 : ctx.notFound() ? 2 : 3);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, LineItemsEditorComponent, ClientEditorComponent, SelectComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 12.5px;\n  color: #F4A922;\n  text-decoration: none;\n  font-weight: 600;\n}\n.back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #b45309;\n  background: #fef3c7;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.card__h[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #94a3b8;\n  margin: 0 0 16px;\n}\n.opt[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1.5px solid #e2e8f0;\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 0 14px;\n}\n.field-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n@media (max-width: 560px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=invoice-edit.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceEditComponent, { className: "InvoiceEditComponent", filePath: "src/app/booking/platform/invoices/invoice-edit.component.ts", lineNumber: 33 });
})();
export {
  InvoiceEditComponent
};
//# sourceMappingURL=chunk-DN2S7WLR.js.map
