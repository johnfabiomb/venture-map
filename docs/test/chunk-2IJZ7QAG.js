import {
  formatMoney,
  renderTemplate
} from "./chunk-7VIBRFOE.js";
import {
  CurrencyPipe,
  DatePipe,
  input,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JW5UDKQ7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/core/utils/pdf.util.ts
var PDF_RENDER_OPTIONS = {
  margin: 0,
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
};
function downloadElementAsPdf(el, filename) {
  return __async(this, null, function* () {
    const html2pdf = (yield import("./chunk-PH6JJMOP.js")).default;
    yield html2pdf().set(__spreadProps(__spreadValues({}, PDF_RENDER_OPTIONS), { filename: filename.endsWith(".pdf") ? filename : `${filename}.pdf` })).from(el).save();
  });
}
function renderElementToPdfBlob(el) {
  return __async(this, null, function* () {
    const html2pdf = (yield import("./chunk-PH6JJMOP.js")).default;
    const blob = yield html2pdf().set(PDF_RENDER_OPTIONS).from(el).outputPdf("blob");
    return blob;
  });
}
function blobToBase64(blob) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result ?? "");
        const comma = result.indexOf(",");
        resolve(comma >= 0 ? result.slice(comma + 1) : result);
      };
      reader.onerror = () => reject(reader.error ?? new Error("Failed to read blob as base64."));
      reader.readAsDataURL(blob);
    });
  });
}

// src/app/booking/core/utils/invoice-footer.util.ts
var INVOICE_FOOTER_KEY_DEFS = [
  { key: "{depositPercent}", describe: "Deposit as a percentage, e.g. 30%" },
  { key: "{deposit}", describe: "Deposit amount" },
  { key: "{balancePercent}", describe: "Remaining percentage, e.g. 70%" },
  { key: "{balance}", describe: "Remaining amount" },
  { key: "{total}", describe: "Invoice total" },
  // Kept working because live footers may already use it, but now DOCUMENTED rather than
  // hidden in the implementation the way it was before.
  { key: "{restOfPayment}", describe: "Alias for {balance}" }
];
var INVOICE_FOOTER_KEYS = INVOICE_FOOTER_KEY_DEFS.map((k) => k.key);
function renderInvoiceFooter(template, opts) {
  if (!template)
    return "";
  const pct = Math.max(0, Math.min(100, opts.depositPercent ?? 0));
  const deposit = Math.round(opts.total * pct) / 100;
  const balance = Math.round((opts.total - deposit) * 100) / 100;
  const money = (n) => formatMoney(n, opts.currency);
  return renderTemplate(template, {
    "{deposit}": money(deposit),
    "{balance}": money(balance),
    "{restOfPayment}": money(balance),
    "{depositPercent}": `${pct}%`,
    "{balancePercent}": `${100 - pct}%`,
    "{total}": money(opts.total)
  });
}

// src/app/booking/ui/invoice-sheet/invoice-sheet.component.ts
function InvoiceSheetComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inv.address);
  }
}
function InvoiceSheetComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inv.phone);
  }
}
function InvoiceSheetComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.inv.email, "");
  }
}
function InvoiceSheetComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("VAT(CIF): ", ctx_r0.inv.vat_number, "");
  }
}
function InvoiceSheetComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2, "Payment due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.dueDate, "d MMM yyyy"));
  }
}
function InvoiceSheetComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2, "Service date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.serviceDate, "d MMM yyyy"));
  }
}
function InvoiceSheetComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2, "Booking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bookingRef);
  }
}
function InvoiceSheetComponent_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.billing_address);
  }
}
function InvoiceSheetComponent_Conditional_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("VAT No: ", c_r2.vat_number, "");
  }
}
function InvoiceSheetComponent_Conditional_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.email);
  }
}
function InvoiceSheetComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, InvoiceSheetComponent_Conditional_30_Conditional_2_Template, 2, 1, "p", 3)(3, InvoiceSheetComponent_Conditional_30_Conditional_3_Template, 2, 1, "p", 4)(4, InvoiceSheetComponent_Conditional_30_Conditional_4_Template, 2, 1, "p", 4);
  }
  if (rf & 2) {
    const c_r2 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.company || c_r2.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r2.billing_address ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r2.vat_number ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r2.email ? 4 : -1);
  }
}
function InvoiceSheetComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InvoiceSheetComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 12);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", $index_r4 + 1, ".");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 3, item_r3.amount, ctx_r0.currency, "symbol", "1.2-2"));
  }
}
function InvoiceSheetComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "Subtotal (net)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 3, ctx_r0.net, ctx_r0.currency, "symbol", "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("VAT (", ctx_r0.vatRate, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 8, ctx_r0.vat, ctx_r0.currency, "symbol", "1.2-2"));
  }
}
function InvoiceSheetComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, ctx_r0.paid, ctx_r0.currency, "symbol", "1.2-2"));
  }
}
function InvoiceSheetComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span");
    \u0275\u0275text(2, "Balance due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, ctx_r0.balance, ctx_r0.currency, "symbol", "1.2-2"));
  }
}
function InvoiceSheetComponent_Conditional_54_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" by ", ctx_r0.paidMethods, "");
  }
}
function InvoiceSheetComponent_Conditional_54_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind2(1, 1, ctx_r0.lastPaidAt, "d MMM yyyy"), "");
  }
}
function InvoiceSheetComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 23);
    \u0275\u0275text(2, "PAID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4, " Paid in full");
    \u0275\u0275template(5, InvoiceSheetComponent_Conditional_54_Conditional_5_Template, 1, 1)(6, InvoiceSheetComponent_Conditional_54_Conditional_6_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.paidMethods ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lastPaidAt ? 6 : -1);
  }
}
function InvoiceSheetComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notes);
  }
}
function InvoiceSheetComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inv.vat_note);
  }
}
function InvoiceSheetComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.footerText);
  }
}
var InvoiceSheetComponent = class _InvoiceSheetComponent {
  constructor() {
    this.bundle = input.required();
  }
  // ── Derived invoice values (moved verbatim from InvoiceComponent) ────────────────────
  get inv() {
    return this.bundle()?.org.invoice_details ?? {};
  }
  /** Footer with {deposit}/{balance}/{depositPercent}/{total} keys filled from this booking. */
  get footerText() {
    return renderInvoiceFooter(this.inv.invoice_footer, {
      total: this.total,
      // `booking` is null for a standalone invoice — the optional chain has to cover it,
      // not just `data()`. A footer template using {deposit} simply renders no percentage.
      depositPercent: this.bundle()?.booking?.deposit_percent ?? null,
      currency: this.currency
    });
  }
  get currency() {
    return this.bundle()?.org.currency ?? "EUR";
  }
  get supplierName() {
    return this.inv.legal_name?.trim() || this.bundle()?.org.name || "";
  }
  get vatRegistered() {
    return !!this.inv.vat_registered;
  }
  get vatRate() {
    return this.inv.vat_rate ?? 18;
  }
  /** The invoice number, formatted once server-side from the org's own prefix. The
   *  booking-ref fallback stays only for a booking that has no invoice row at all. */
  get invoiceNumber() {
    const fromBundle = this.bundle()?.invoice.number;
    if (fromBundle)
      return fromBundle;
    const ref = this.bundle()?.booking?.booking_ref ?? "";
    const prefix = (this.inv.invoice_prefix || "INV").toUpperCase();
    const dash = ref.indexOf("-");
    return dash >= 0 ? `${prefix}-${ref.slice(dash + 1)}` : `${prefix}-${ref}`;
  }
  /** When the work happened. The invoice's own date, falling back to the booking's. */
  get serviceDate() {
    return this.bundle()?.invoice.service_date ?? null;
  }
  /** When payment is expected. Null until the invoice is issued. */
  get dueDate() {
    return this.bundle()?.invoice.due_date ?? null;
  }
  /** A standalone invoice has no job in the calendar behind it. */
  get bookingRef() {
    return this.bundle()?.booking?.booking_ref ?? null;
  }
  get lineItems() {
    return this.bundle()?.invoice.line_items ?? [];
  }
  get notes() {
    return this.bundle()?.invoice.notes ?? null;
  }
  /** Issue date: the saved invoice date if customised, otherwise today. */
  get issueDate() {
    return this.bundle()?.invoice.issue_date ?? /* @__PURE__ */ new Date();
  }
  get total() {
    return this.bundle()?.invoice.total ?? 0;
  }
  /** With VAT prices are treated as inclusive: back out the net and VAT from the gross total. */
  get net() {
    return this.vatRegistered ? this.total / (1 + this.vatRate / 100) : this.total;
  }
  get vat() {
    return this.vatRegistered ? this.total - this.net : 0;
  }
  get paid() {
    return this.bundle()?.total_paid ?? 0;
  }
  get balance() {
    return Math.max(0, this.total - this.paid);
  }
  /** Settled: no balance left. The invoice then reads as a receipt (PAID, no pay instructions). */
  get fullyPaid() {
    return this.total > 0 && this.paid >= this.total - 5e-3;
  }
  /** Distinct payment methods used (for the PAID receipt line). */
  get paidMethods() {
    const pays = this.bundle()?.payments ?? [];
    return [...new Set(pays.map((p) => p.method))].join(", ");
  }
  /** Date of the most recent completed payment. */
  get lastPaidAt() {
    const pays = this.bundle()?.payments ?? [];
    return pays.length ? pays[pays.length - 1].paid_at : null;
  }
  static {
    this.\u0275fac = function InvoiceSheetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceSheetComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceSheetComponent, selectors: [["app-invoice-sheet"]], inputs: { bundle: [1, "bundle"] }, decls: 58, vars: 27, consts: [[1, "inv-head"], [1, "supplier"], [1, "supplier__name"], [1, "muted", "pre"], [1, "muted"], [1, "inv-meta"], [1, "inv-title"], [1, "meta"], [1, "bill-to"], [1, "block-label"], [1, "items"], [1, "no"], [1, "num"], [1, "totals"], [1, "totals__row", "totals__row--grand"], [1, "totals__row"], [1, "totals__row", "totals__row--bal"], [1, "paid-banner"], [1, "inv-notes", "pre"], [1, "vat-note", "pre"], [1, "inv-footer", "pre"], [1, "bill-to__name"], [1, "item-desc", "pre"], [1, "paid-badge"], [1, "paid-when"]], template: function InvoiceSheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, InvoiceSheetComponent_Conditional_4_Template, 2, 1, "p", 3);
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275template(6, InvoiceSheetComponent_Conditional_6_Template, 2, 1, "span")(7, InvoiceSheetComponent_Conditional_7_Template, 2, 1, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, InvoiceSheetComponent_Conditional_8_Template, 2, 1, "p", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
        \u0275\u0275text(11, "INVOICE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "table", 7)(13, "tr")(14, "td");
        \u0275\u0275text(15, "Invoice no.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "td");
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "tr")(19, "td");
        \u0275\u0275text(20, "Issue date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "td");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, InvoiceSheetComponent_Conditional_24_Template, 6, 4, "tr")(25, InvoiceSheetComponent_Conditional_25_Template, 6, 4, "tr")(26, InvoiceSheetComponent_Conditional_26_Template, 5, 1, "tr");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "section", 8)(28, "div", 9);
        \u0275\u0275text(29, "Bill to");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, InvoiceSheetComponent_Conditional_30_Template, 5, 4)(31, InvoiceSheetComponent_Conditional_31_Template, 2, 0, "p", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "table", 10)(33, "thead")(34, "tr")(35, "th", 11);
        \u0275\u0275text(36, "No.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th", 12);
        \u0275\u0275text(40, "Total amount");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "tbody");
        \u0275\u0275repeaterCreate(42, InvoiceSheetComponent_For_43_Template, 9, 8, "tr", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 13);
        \u0275\u0275template(45, InvoiceSheetComponent_Conditional_45_Template, 12, 13);
        \u0275\u0275elementStart(46, "div", 14)(47, "span");
        \u0275\u0275text(48, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span");
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(52, InvoiceSheetComponent_Conditional_52_Template, 6, 6, "div", 15)(53, InvoiceSheetComponent_Conditional_53_Template, 6, 6, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(54, InvoiceSheetComponent_Conditional_54_Template, 7, 2, "div", 17)(55, InvoiceSheetComponent_Conditional_55_Template, 2, 1, "p", 18)(56, InvoiceSheetComponent_Conditional_56_Template, 2, 1, "p", 19)(57, InvoiceSheetComponent_Conditional_57_Template, 2, 1, "footer", 20);
      }
      if (rf & 2) {
        let tmp_10_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.supplierName);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.inv.address ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.inv.phone ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.inv.email ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.inv.vat_number ? 8 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.invoiceNumber);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 19, ctx.issueDate, "d MMM yyyy"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.dueDate && !ctx.fullyPaid ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.serviceDate ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.bookingRef ? 26 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_10_0 = ctx.bundle().client) ? 30 : 31, tmp_10_0);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.lineItems);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.vatRegistered ? 45 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(51, 22, ctx.total, ctx.currency, "symbol", "1.2-2"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.paid > 0 ? 52 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.balance > 0 ? 53 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.fullyPaid ? 54 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.notes ? 55 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.inv.vat_note ? 56 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.inv.invoice_footer && !ctx.fullyPaid ? 57 : -1);
      }
    }, dependencies: [CurrencyPipe, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  color: #111827;\n  max-width: 760px;\n  margin: 0 auto;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.08);\n  padding: 48px 52px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.pre[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.inv-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 24px;\n  border-bottom: 2px solid #111827;\n  padding-bottom: 20px;\n  margin-bottom: 24px;\n}\n.supplier__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  margin: 0 0 6px;\n}\n.supplier[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 12.5px;\n}\n.inv-meta[_ngcontent-%COMP%] {\n  text-align: right;\n  flex: 0 0 auto;\n}\n.inv-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #F4A922;\n  margin-bottom: 8px;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  margin-left: auto;\n}\n.meta[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 2px 0;\n}\n.meta[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: #6b7280;\n  padding-right: 16px;\n  text-align: left;\n}\n.meta[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  font-weight: 600;\n  text-align: right;\n}\n.block-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #9ca3af;\n  margin-bottom: 6px;\n}\n.bill-to[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.bill-to__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0 0 2px;\n}\n.bill-to[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 12.5px;\n}\n.items[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\n.items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n  border-bottom: 1.5px solid #e5e7eb;\n  padding: 0 0 8px;\n}\n.items[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%], \n.items[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.items[_ngcontent-%COMP%]   th.no[_ngcontent-%COMP%], \n.items[_ngcontent-%COMP%]   td.no[_ngcontent-%COMP%] {\n  width: 36px;\n  color: #6b7280;\n  font-weight: 700;\n}\n.items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.item-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  margin-top: 3px;\n  white-space: pre-line;\n  overflow-wrap: anywhere;\n}\n.item-meta[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #9ca3af;\n  margin-top: 5px;\n}\n.totals[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: min(280px, 100%);\n  margin-top: 8px;\n}\n.totals__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13.5px;\n  padding: 6px 0;\n}\n.totals__row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #6b7280;\n}\n.totals__row--grand[_ngcontent-%COMP%] {\n  border-top: 1.5px solid #111827;\n  margin-top: 4px;\n  font-weight: 800;\n  font-size: 16px;\n}\n.totals__row--grand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #111827;\n}\n.totals__row--bal[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #b45309;\n}\n.totals__row--bal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #b45309;\n}\n.inv-notes[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 13px;\n  color: #374151;\n}\n.vat-note[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.paid-banner[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.paid-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 2px solid #16a34a;\n  color: #16a34a;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  font-size: 15px;\n  padding: 4px 12px;\n  border-radius: 6px;\n  transform: rotate(-3deg);\n}\n.paid-when[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #6b7280;\n}\n.inv-footer[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n  font-size: 12px;\n  color: #6b7280;\n}\n@media (max-width: 760px) {\n  [_nghost-%COMP%] {\n    padding: 24px 20px;\n  }\n  .inv-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .inv-meta[_ngcontent-%COMP%] {\n    flex: none;\n    text-align: left;\n  }\n  .meta[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .supplier[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    overflow-wrap: anywhere;\n  }\n}\n@media print {\n  [_nghost-%COMP%] {\n    box-shadow: none;\n    border-radius: 0;\n    max-width: none;\n    margin: 0;\n    padding: 24px 28px;\n  }\n}\n/*# sourceMappingURL=invoice-sheet.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceSheetComponent, { className: "InvoiceSheetComponent", filePath: "src/app/booking/ui/invoice-sheet/invoice-sheet.component.ts", lineNumber: 26 });
})();

export {
  downloadElementAsPdf,
  renderElementToPdfBlob,
  blobToBase64,
  InvoiceSheetComponent
};
//# sourceMappingURL=chunk-2IJZ7QAG.js.map
