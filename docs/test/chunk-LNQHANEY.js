import {
  InvoiceSheetComponent,
  downloadElementAsPdf
} from "./chunk-2IJZ7QAG.js";
import "./chunk-7VIBRFOE.js";
import {
  STRIPE_PK
} from "./chunk-6QMVOJBU.js";
import {
  bookingsDb
} from "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
  ActivatedRoute
} from "./chunk-F2R7EXZF.js";
import "./chunk-YHDSDEW7.js";
import {
  CurrencyPipe,
  ElementRef,
  PLATFORM_ID,
  inject,
  isPlatformBrowser,
  signal,
  viewChild,
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
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-JW5UDKQ7.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/public/invoice/invoice.component.ts
function InvoiceComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, "Loading invoice\u2026");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2");
    \u0275\u0275text(2, "Invoice not available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 1);
    \u0275\u0275text(4, "This invoice couldn't be loaded. You may need to sign in as the customer, or it may not exist.");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.payPageLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pay ", \u0275\u0275pipeBind4(2, 2, ctx_r1.balance, ctx_r1.currency, "symbol", "1.2-2"), " by card ");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startPayment());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pay ", \u0275\u0275pipeBind4(2, 1, ctx_r1.balance, ctx_r1.currency, "symbol", "1.2-2"), " by card ");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.payError());
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "button", 13);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Conditional_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitPayment());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Conditional_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelPayment());
    });
    \u0275\u0275text(7, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, InvoiceComponent_Case_2_Conditional_0_Conditional_7_Conditional_8_Template, 2, 1, "p", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.payState() === "processing");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.payState() === "processing" ? "Processing\u2026" : "Pay " + \u0275\u0275pipeBind4(5, 4, ctx_r1.balance, ctx_r1.currency, "symbol", "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.payState() === "processing");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.payError() ? 8 : -1);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.payError());
  }
}
function InvoiceComponent_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 3);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275text(4, "\u{1F5A8} Print");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InvoiceComponent_Case_2_Conditional_0_Conditional_5_Template, 3, 7, "a", 5)(6, InvoiceComponent_Case_2_Conditional_0_Conditional_6_Template, 3, 6, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InvoiceComponent_Case_2_Conditional_0_Conditional_7_Template, 9, 9, "div", 7)(8, InvoiceComponent_Case_2_Conditional_0_Conditional_8_Template, 2, 1, "p", 8);
    \u0275\u0275element(9, "app-invoice-sheet", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn--primary", !ctx_r1.hasPayAction)("btn--ghost", ctx_r1.hasPayAction);
    \u0275\u0275property("disabled", ctx_r1.downloading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.downloading() ? "Preparing\u2026" : "\u2B07 Download PDF", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canPayViaBooking ? 5 : ctx_r1.canPay && ctx_r1.payState() === "idle" ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canPay && ctx_r1.payState() !== "idle" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.payError() && ctx_r1.payState() === "idle" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("bundle", ctx);
  }
}
function InvoiceComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InvoiceComponent_Case_2_Conditional_0_Template, 10, 10);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.data()) ? 0 : -1, tmp_1_0);
  }
}
var InvoiceComponent = class _InvoiceComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.platformId = inject(PLATFORM_ID);
    this.state = signal("loading");
    this.data = signal(null);
    this.downloading = signal(false);
    this.sheetCmp = viewChild(InvoiceSheetComponent);
    this.sheetEl = viewChild(InvoiceSheetComponent, { read: ElementRef });
    this.payState = signal("idle");
    this.payError = signal("");
    this.token = "";
    this.stripe = null;
    this.elements = null;
    this.paymentElement = null;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (!isPlatformBrowser(this.platformId))
        return;
      const id = this.route.snapshot.paramMap.get("id");
      const token = this.route.snapshot.queryParamMap.get("token");
      this.token = token ?? "";
      const invId = this.route.snapshot.queryParamMap.get("inv");
      if (!id && !token && !invId) {
        this.state.set("error");
        return;
      }
      const { data, error } = token ? yield bookingsDb.rpc("get_invoice_by_token", { p_token: token }) : invId ? yield bookingsDb.rpc("get_invoice_by_id", { p_invoice: invId }) : yield bookingsDb.rpc("get_invoice", { p_booking: id });
      if (error || !data) {
        this.state.set("error");
        return;
      }
      this.data.set(data);
      this.state.set("ready");
      const auto = this.route.snapshot.queryParamMap.get("auto");
      if (auto === "print")
        setTimeout(() => this.print(), 300);
      else if (auto === "download")
        setTimeout(() => this.download(), 300);
    });
  }
  // ── Derived invoice values still needed here ──────────────────────────
  // The full set (inv/total/net/vat/paid/fullyPaid/etc.) now lives on InvoiceSheetComponent,
  // which renders from this same `data()` bundle. These two are kept here too only because
  // the toolbar/paybox above the sheet — not the sheet itself — also renders them; reading
  // them through the child would be correct once its view is ready, but wrong (undefined)
  // on the very first render pass, since the sheet element sits after this toolbar in the
  // template. Computing them directly from the bundle this component already holds avoids
  // that entirely.
  get currency() {
    return this.data()?.org.currency ?? "EUR";
  }
  get balance() {
    const total = this.data()?.invoice.total ?? 0;
    const paid = this.data()?.total_paid ?? 0;
    return Math.max(0, total - paid);
  }
  /**
   * Whether to offer card payment. Only on the SHARE-LINK path: the `/:id` and `?inv=`
   * routes are the owner's own preview, and an owner has no business paying their own
   * invoice. Also requires the invoice to be actually issued with something outstanding
   * — the server re-checks all of this, this just avoids offering a button that fails.
   */
  get canPay() {
    return this.payable && !this.hasBooking;
  }
  /** The preconditions common to both ways of paying. */
  get payable() {
    return !!this.token && this.balance > 0 && this.data()?.invoice.status === "issued";
  }
  /** A standalone invoice has no job behind it — it is paid here, on its own link. */
  get hasBooking() {
    return !!this.data()?.booking;
  }
  /**
   * A booking-linked invoice pays on its BOOKING's pay page, not here.
   *
   * `copyShareLink` deliberately reuses the booking's existing pay token for these (so a
   * link already in a client's hands keeps working), which means the token in this URL
   * belongs to `booking_links`. `create-invoice-payment-intent` resolves only
   * `invoice_links` tokens, so the direct button 400s 100% of the time — live data
   * confirms it has never worked: 93 booking_links exist and 0 invoice_links.
   * The pay page is also the better destination: it is the well-tested path and it offers
   * deposit vs full, which this balance-only button cannot.
   */
  get canPayViaBooking() {
    return this.payable && this.hasBooking;
  }
  get payPageLink() {
    return `/book/${this.token}`;
  }
  /** Whether either pay route is on offer. The toolbar demotes Download to secondary when
   *  it is, so the row never shows two competing primary buttons. */
  get hasPayAction() {
    return this.canPay || this.canPayViaBooking;
  }
  loadStripeJs() {
    return new Promise((resolve, reject) => {
      if (window.Stripe) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/";
      script.onload = () => resolve();
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  /** Create the intent server-side, then mount Stripe's form. The AMOUNT is never sent
   *  from here — the server computes the outstanding balance from the invoice's own
   *  lines and payments, so a stale page cannot ask to be charged the wrong figure. */
  startPayment() {
    return __async(this, null, function* () {
      if (!this.canPay || this.payState() !== "idle")
        return;
      this.payError.set("");
      this.payState.set("form");
      try {
        const { data, error } = yield bookingsDb.functions.invoke("create-invoice-payment-intent", {
          body: { token: this.token }
        });
        if (error)
          throw error;
        const { clientSecret, stripeAccount, error: fnError } = data ?? {};
        if (fnError)
          throw new Error(fnError);
        if (!clientSecret)
          throw new Error("Could not start the payment. Please try again.");
        yield this.loadStripeJs();
        this.stripe = stripeAccount ? window.Stripe(STRIPE_PK, { stripeAccount }) : window.Stripe(STRIPE_PK);
        this.elements = this.stripe.elements({ clientSecret, appearance: { theme: "stripe" } });
        this.paymentElement = this.elements.create("payment");
        setTimeout(() => this.paymentElement.mount("#invoice-payment-element"), 50);
      } catch (err) {
        const body = yield err?.context?.json?.().catch(() => null);
        this.payError.set(body?.error ?? err?.message ?? "Something went wrong.");
        this.payState.set("idle");
      }
    });
  }
  submitPayment() {
    return __async(this, null, function* () {
      if (!this.stripe || !this.elements || this.payState() === "processing")
        return;
      this.payState.set("processing");
      this.payError.set("");
      const { error } = yield this.stripe.confirmPayment({
        elements: this.elements,
        confirmParams: {
          // `tok` is what /pay/success passes to confirm-payment, which resolves an
          // invoice token as readily as a booking one.
          return_url: `${window.location.origin}/pay/success?tok=${this.token}`
        }
      });
      if (error) {
        this.payError.set(error.message ?? "Payment failed.");
        this.payState.set("form");
      }
    });
  }
  cancelPayment() {
    if (this.paymentElement) {
      this.paymentElement.destroy();
      this.paymentElement = null;
    }
    this.payState.set("idle");
    this.payError.set("");
  }
  /** Send the invoice to the printer (browser print dialog) — unchanged behaviour. */
  print() {
    if (isPlatformBrowser(this.platformId))
      window.print();
  }
  /** Download the invoice as a PDF file, exactly as shown (no margins / browser chrome). */
  download() {
    return __async(this, null, function* () {
      const el = this.sheetEl()?.nativeElement;
      if (!el || this.downloading())
        return;
      this.downloading.set(true);
      try {
        const filename = this.sheetCmp()?.invoiceNumber ?? "invoice";
        yield downloadElementAsPdf(el, `${filename}.pdf`);
      } finally {
        this.downloading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function InvoiceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceComponent, selectors: [["app-invoice"]], viewQuery: function InvoiceComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.sheetCmp, InvoiceSheetComponent, 5);
        \u0275\u0275viewQuerySignal(ctx.sheetEl, InvoiceSheetComponent, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, decls: 3, vars: 1, consts: [[1, "screen"], [1, "muted"], [1, "toolbar", "no-print"], [1, "btn", 3, "click", "disabled"], [1, "btn", "btn--ghost", 3, "click"], [1, "btn", "btn--primary", 3, "href"], [1, "btn", "btn--primary"], [1, "paybox", "no-print"], [1, "toolbar-error", "no-print"], [3, "bundle"], [1, "btn", "btn--primary", 3, "click"], ["id", "invoice-payment-element"], [1, "paybox__actions"], [1, "btn", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "paybox__error"]], template: function InvoiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InvoiceComponent_Case_0_Template, 3, 0, "div", 0)(1, InvoiceComponent_Case_1_Template, 5, 0, "div", 0)(2, InvoiceComponent_Case_2_Template, 1, 1);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.state()) === "loading" ? 0 : tmp_0_0 === "error" ? 1 : tmp_0_0 === "ready" ? 2 : -1);
      }
    }, dependencies: [CurrencyPipe, InvoiceSheetComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #f3f4f6;\n  min-height: 100vh;\n  padding: 24px 16px 64px;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  color: #111827;\n}\n.screen[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 80px auto;\n  text-align: center;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.toolbar[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 16px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.toolbar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  min-width: 140px;\n}\n.toolbar-error[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: -6px auto 16px;\n  font-size: 13px;\n  color: #dc2626;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  text-decoration: none;\n  border: 1.5px solid transparent;\n  border-radius: 8px;\n  padding: 11px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #111827;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #374151;\n  border-color: #e5e7eb;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: default;\n  filter: none;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.95);\n}\n.paybox[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);\n  padding: 20px 22px;\n}\n.paybox__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 16px;\n}\n.paybox__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.paybox__error[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 13px;\n  color: #dc2626;\n}\n@media (max-width: 760px) {\n  .paybox[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@media print {\n  [_nghost-%COMP%] {\n    background: #fff;\n    padding: 0;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=invoice.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceComponent, { className: "InvoiceComponent", filePath: "src/app/booking/public/invoice/invoice.component.ts", lineNumber: 26 });
})();
export {
  InvoiceComponent
};
//# sourceMappingURL=chunk-LNQHANEY.js.map
