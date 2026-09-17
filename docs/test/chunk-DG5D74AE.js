import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuTrigger
} from "./chunk-B445Y36X.js";
import "./chunk-IH6BS7I3.js";
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EBVVQ6Y2.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/invoices/invoices-admin.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function InvoicesAdminComponent_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    \u0275\u0275property("value", y_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r3);
  }
}
function InvoicesAdminComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 8);
    \u0275\u0275listener("change", function InvoicesAdminComponent_Conditional_8_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.year.set($event.target.value));
    });
    \u0275\u0275elementStart(1, "option", 9);
    \u0275\u0275text(2, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, InvoicesAdminComponent_Conditional_8_For_4_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv());
    });
    \u0275\u0275text(6, "Export CSV");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.year());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.years());
  }
}
function InvoicesAdminComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No invoices yet.");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_For_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.counts()[t_r5.key]);
  }
}
function InvoicesAdminComponent_Conditional_13_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_For_32_Template_button_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.tab.set(t_r5.key));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InvoicesAdminComponent_Conditional_13_For_32_Conditional_3_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === t_r5.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.counts()[t_r5.key] ? 3 : -1);
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No invoices match this filter.");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_34_For_25_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "a", 44);
    \u0275\u0275text(2, "Edit invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 45);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_34_For_25_ng_template_30_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.open(r_r7));
    });
    \u0275\u0275text(4, "View / print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_34_For_25_ng_template_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyShareLink(r_r7));
    });
    \u0275\u0275text(6, "Copy share link");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.editLink(r_r7));
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_34_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 26);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_34_For_25_Template_tr_click_0_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.open(r_r7));
    });
    \u0275\u0275elementStart(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 32);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 33);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 34);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 35)(22, "span", 36);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 37)(25, "button", 38);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_34_For_25_Template_button_click_25_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 39);
    \u0275\u0275element(27, "circle", 40)(28, "circle", 41)(29, "circle", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, InvoicesAdminComponent_Conditional_13_Conditional_34_For_25_ng_template_30_Template, 7, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    const r_r7 = ctx.$implicit;
    const rowMenu_r9 = \u0275\u0275reference(31);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = r_r7.invoice_number) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.service_date ? \u0275\u0275pipeBind2(5, 18, r_r7.service_date, "d MMM y") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_15_0 = r_r7.client_name) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_16_0 = r_r7.staff_name) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_17_0 = r_r7.service_name) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 21, r_r7.amount_gross, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 26, r_r7.amount_paid, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("due", r_r7.balance_due > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(20, 31, r_r7.balance_due, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge--paid", r_r7.payment_status === "paid")("badge--partial", r_r7.payment_status === "partial")("badge--unpaid", r_r7.payment_status === "unpaid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(r_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("cdkMenuTriggerFor", rowMenu_r9);
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 23)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Worker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 24);
    \u0275\u0275text(15, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 24);
    \u0275\u0275text(17, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 24);
    \u0275\u0275text(19, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, InvoicesAdminComponent_Conditional_13_Conditional_34_For_25_Template, 32, 36, "tr", 25, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
function InvoicesAdminComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3, "Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "span", 14);
    \u0275\u0275text(8, "Billed (gross)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 13)(13, "span", 14);
    \u0275\u0275text(14, "Net of expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 15);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "span", 14);
    \u0275\u0275text(20, "Collected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 16);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13)(25, "span", 14);
    \u0275\u0275text(26, "Outstanding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 17);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 18);
    \u0275\u0275repeaterCreate(31, InvoicesAdminComponent_Conditional_13_For_32_Template, 4, 4, "button", 19, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, InvoicesAdminComponent_Conditional_13_Conditional_33_Template, 2, 0, "p", 7)(34, InvoicesAdminComponent_Conditional_13_Conditional_34_Template, 26, 0, "div", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.counts().all);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 6, ctx_r1.totalBilled(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 11, ctx_r1.totalNet(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(23, 16, ctx_r1.totalPaid(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(29, 21, ctx_r1.outstanding(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filtered().length === 0 ? 33 : 34);
  }
}
var STATUS_LABEL = {
  unpaid: "Unpaid",
  partial: "Partial",
  paid: "Paid"
};
var InvoicesAdminComponent = class _InvoicesAdminComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.currency = signal("EUR");
    this.invoices = signal([]);
    this.loading = signal(true);
    this.year = signal("all");
    this.years = computed(() => {
      const ys = /* @__PURE__ */ new Set();
      for (const r of this.invoices()) {
        const y = this.rowYear(r);
        if (y)
          ys.add(y);
      }
      return [...ys].sort((a, b) => b.localeCompare(a));
    });
    this.yearScoped = computed(() => {
      const y = this.year();
      return y === "all" ? this.invoices() : this.invoices().filter((r) => this.rowYear(r) === y);
    });
    this.tabs = [
      { key: "all", label: "All" },
      { key: "unpaid", label: "Unpaid" },
      { key: "partial", label: "Partially paid" },
      { key: "paid", label: "Paid" }
    ];
    this.tab = signal("all");
    this.counts = computed(() => {
      const c = { all: 0, unpaid: 0, partial: 0, paid: 0 };
      for (const r of this.yearScoped()) {
        c.all++;
        c[r.payment_status]++;
      }
      return c;
    });
    this.filtered = computed(() => {
      const t = this.tab();
      return t === "all" ? this.yearScoped() : this.yearScoped().filter((r) => r.payment_status === t);
    });
    this.totalBilled = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_gross, 0));
    this.totalNet = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_net, 0));
    this.totalPaid = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_paid, 0));
    this.outstanding = computed(() => this.yearScoped().reduce((s, r) => s + r.balance_due, 0));
  }
  /** An invoice's year: its own service date, falling back to its number's year. */
  rowYear(r) {
    if (r.service_date)
      return r.service_date.slice(0, 4);
    return r.number_year ? String(r.number_year) : "";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (org) {
        const s = yield this.admin.getOrgSettings(org);
        this.currency.set(s?.currency || "EUR");
      }
      this.invoices.set(yield this.data.queryInvoices());
      this.loading.set(false);
    });
  }
  statusLabel(r) {
    return STATUS_LABEL[r.payment_status];
  }
  /** Open the printable invoice. A booking-linked one keeps its existing URL so old
   *  links stay valid; a standalone invoice is addressed by its own id via `?inv=`. */
  open(r) {
    const url = r.booking_id ? `/book/invoice/${r.booking_id}` : `/book/invoice?inv=${r.id}`;
    window.open(url, "_blank", "noopener");
  }
  /** Booking-linked invoices keep the booking-keyed editor route (the booking detail
   *  page links there); a standalone invoice opens by its own id. */
  editLink(r) {
    return r.booking_id ? ["/bookings/invoice-edit", r.booking_id] : ["/bookings/invoices/edit", r.id];
  }
  /** Copy the client-shareable (no-login) invoice link.
   *  A booking-linked invoice reuses its pay-link token so nothing changes for existing
   *  clients. A standalone invoice mints an INVOICE token, which grants only "view this
   *  invoice" — not the pay page and the deliverables a pay link would also open. */
  copyShareLink(r) {
    return __async(this, null, function* () {
      const url = r.booking_id ? yield this.data.invoiceShareLink(r.booking_id) : yield this.data.invoiceShareLinkById(r.id);
      if (!url) {
        this.toast.error("Could not create the invoice link.");
        return;
      }
      yield navigator.clipboard.writeText(url);
      this.toast.success("Invoice link copied \u2014 share it with your client");
    });
  }
  /** Download the visible list as CSV for the accountant. */
  exportCsv() {
    const rows = [["Invoice", "Date", "Client", "Worker", "Service", "Gross", "Net", "Paid", "Balance", "Status"]];
    for (const r of this.filtered()) {
      rows.push([
        r.invoice_number ?? "",
        (r.service_date ?? "").slice(0, 10),
        (r.client_name ?? "").replace(/"/g, '""'),
        (r.staff_name ?? "").replace(/"/g, '""'),
        (r.service_name ?? "").replace(/"/g, '""'),
        r.amount_gross.toFixed(2),
        r.amount_net.toFixed(2),
        r.amount_paid.toFixed(2),
        r.balance_due.toFixed(2),
        r.payment_status
      ]);
    }
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `invoices-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function InvoicesAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoicesAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesAdminComponent, selectors: [["app-invoices-admin"]], decls: 14, vars: 2, consts: [["rowMenu", ""], [1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-tools"], ["routerLink", "/bookings/invoices/new", 1, "btn", "btn--primary"], [1, "muted"], [1, "year-select", 3, "change", "value"], ["value", "all"], [3, "value"], [1, "btn", "btn--ghost", 3, "click"], [1, "summary"], [1, "summary__card"], [1, "summary__label"], [1, "summary__val"], [1, "summary__val", "summary__val--ok"], [1, "summary__val", "summary__val--due"], ["role", "tablist", 1, "tabs"], ["role", "tab", 1, "tab", 3, "tab--active"], [1, "table-wrap"], ["role", "tab", 1, "tab", 3, "click"], [1, "tab__count"], [1, "table"], [1, "num"], [1, "row"], [1, "row", 3, "click"], ["data-label", "Invoice", 1, "mono"], ["data-label", "Date"], ["data-label", "Client", 1, "ellipsis"], ["data-label", "Worker", 1, "ellipsis"], ["data-label", "Service", 1, "ellipsis"], ["data-label", "Total", 1, "num"], ["data-label", "Paid", 1, "num"], ["data-label", "Balance", 1, "num"], ["data-label", "Status"], [1, "badge"], ["data-label", "", 1, "actions"], ["aria-label", "Actions", 1, "kebab", 3, "click", "cdkMenuTriggerFor"], ["viewBox", "0 0 20 20", "width", "18", "height", "18", "fill", "currentColor"], ["cx", "10", "cy", "4", "r", "1.7"], ["cx", "10", "cy", "10", "r", "1.7"], ["cx", "10", "cy", "16", "r", "1.7"], ["cdkMenu", "", 1, "menu"], ["cdkMenuItem", "", 1, "menu__item", 3, "routerLink"], ["cdkMenuItem", "", 1, "menu__item", 3, "click"]], template: function InvoicesAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
        \u0275\u0275text(4, "Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Your money record. An invoice can sit on a job in the calendar, or stand on its own.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275template(8, InvoicesAdminComponent_Conditional_8_Template, 7, 1);
        \u0275\u0275elementStart(9, "a", 6);
        \u0275\u0275text(10, "New invoice");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, InvoicesAdminComponent_Conditional_11_Template, 2, 0, "p", 7)(12, InvoicesAdminComponent_Conditional_12_Template, 2, 0, "p", 7)(13, InvoicesAdminComponent_Conditional_13_Template, 35, 26);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.invoices().length > 0 ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 11 : ctx.invoices().length === 0 ? 12 : 13);
      }
    }, dependencies: [DatePipe, CurrencyPipe, RouterLink, CdkMenuTrigger, CdkMenu, CdkMenuItem], styles: [`

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
[_nghost-%COMP%] {
  display: block;
}
.head-tools[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.year-select[_ngcontent-%COMP%] {
  padding: 8px 12px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  font-family: inherit;
  color: #0f172a;
  background: #ffffff;
  cursor: pointer;
}
.summary[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}
.tabs[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 2px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 4px;
}
.tab[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  border-radius: 8px;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.tab[_ngcontent-%COMP%]:hover {
  color: #0f172a;
}
.tab--active[_ngcontent-%COMP%] {
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
}
.tab__count[_ngcontent-%COMP%] {
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  background: #e2e8f0;
  color: #475569;
}
.tab--active[_ngcontent-%COMP%]   .tab__count[_ngcontent-%COMP%] {
  background: rgba(244, 169, 34, 0.12);
  color: #0f172a;
}
.badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 3px 9px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
}
.badge--paid[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #16a34a;
}
.badge--partial[_ngcontent-%COMP%] {
  background: #fef9c3;
  color: #a16207;
}
.badge--unpaid[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #dc2626;
}
.summary__card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.summary__label[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.summary__val[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 800;
  color: #0f172a;
}
.summary__val--ok[_ngcontent-%COMP%] {
  color: #16a34a;
}
.summary__val--due[_ngcontent-%COMP%] {
  color: #b45309;
}
.table-wrap[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  overflow-x: auto;
}
@media (max-width: 760px) {
  .table-wrap[_ngcontent-%COMP%] {
    border: none;
    background: none;
    overflow: visible;
  }
}
.table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
@media (max-width: 760px) {
  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
    display: none;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
    display: block;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 10px 14px;
    margin: 0 0 10px;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0;
    border: none;
    text-align: right;
    white-space: normal;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {
    border-top: 1px solid #e2e8f0;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {
    content: attr(data-label);
    margin-right: auto;
    flex: none;
    font-size: 12px;
    font-weight: 600;
    color: #475569;
    text-align: left;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label][_ngcontent-%COMP%] {
    max-width: none;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%]::before {
    content: none;
  }
}
.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 10px 14px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #94a3b8;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  white-space: nowrap;
}
.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 11px 14px;
  font-size: 13.5px;
  color: #475569;
  border-bottom: 1px solid #e2e8f0;
}
.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  cursor: pointer;
}
.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {
  background: rgba(244, 169, 34, 0.12);
}
.num[_ngcontent-%COMP%] {
  text-align: right;
  white-space: nowrap;
}
th.num[_ngcontent-%COMP%] {
  text-align: right;
}
.actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
}
.kebab[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: none;
  border: none;
  border-radius: 6px;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
}
.kebab[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
  color: #0f172a;
}
.kebab[aria-expanded=true][_ngcontent-%COMP%] {
  background: #f8fafc;
  color: #0f172a;
}
.menu[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  min-width: 168px;
  padding: 6px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);
}
.menu__item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  text-align: left;
  background: none;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  font-family: inherit;
  font-size: 13.5px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: background 0.15s ease;
}
.menu__item[_ngcontent-%COMP%]:hover, 
.menu__item[_ngcontent-%COMP%]:focus-visible {
  background: #f8fafc;
  color: #0f172a;
  outline: none;
}
.mono[_ngcontent-%COMP%] {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: #0f172a;
}
.ellipsis[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.due[_ngcontent-%COMP%] {
  color: #b45309;
  font-weight: 600;
}
/*# sourceMappingURL=invoices-admin.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesAdminComponent, { className: "InvoicesAdminComponent", filePath: "src/app/booking/platform/invoices/invoices-admin.component.ts", lineNumber: 30 });
})();
export {
  InvoicesAdminComponent
};
//# sourceMappingURL=chunk-DG5D74AE.js.map
