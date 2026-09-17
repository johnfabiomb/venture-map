import {
  STRIPE_PK
} from "./chunk-6QMVOJBU.js";
import {
  bookingsDb
} from "./chunk-F6LTA4RG.js";
import "./chunk-4746DPCT.js";
import {
  ActivatedRoute
} from "./chunk-Q6APD67I.js";
import "./chunk-GHBBMOR7.js";
import {
  CurrencyPipe,
  DatePipe,
  PLATFORM_ID,
  inject,
  isPlatformBrowser,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-EBVVQ6Y2.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/core/utils/pdf.util.ts
function downloadElementAsPdf(el, filename) {
  return __async(this, null, function* () {
    const html2pdf = (yield import("./chunk-PH6JJMOP.js")).default;
    yield html2pdf().set({
      margin: 0,
      filename: filename.endsWith(".pdf") ? filename : `${filename}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }).from(el).save();
  });
}

// src/app/booking/core/utils/invoice-footer.util.ts
function renderInvoiceFooter(template, opts) {
  if (!template)
    return "";
  const pct = Math.max(0, Math.min(100, opts.depositPercent ?? 0));
  const deposit = Math.round(opts.total * pct) / 100;
  const balance = Math.round((opts.total - deposit) * 100) / 100;
  const money = (n) => {
    try {
      return new Intl.NumberFormat(void 0, { style: "currency", currency: opts.currency }).format(n);
    } catch {
      return `${opts.currency} ${n.toFixed(2)}`;
    }
  };
  const map = {
    "{deposit}": money(deposit),
    "{balance}": money(balance),
    "{restOfPayment}": money(balance),
    "{depositPercent}": `${pct}%`,
    "{balancePercent}": `${100 - pct}%`,
    "{total}": money(opts.total)
  };
  return template.replace(/\{deposit\}|\{balance\}|\{restOfPayment\}|\{depositPercent\}|\{balancePercent\}|\{total\}/g, (m) => map[m] ?? m);
}

// src/app/booking/public/invoice/invoice.component.ts
var _c0 = ["sheet"];
function InvoiceComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
    \u0275\u0275text(2, "Loading invoice\u2026");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h2");
    \u0275\u0275text(2, "Invoice not available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4, "This invoice couldn't be loaded. You may need to sign in as the customer, or it may not exist.");
    \u0275\u0275elementEnd()();
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Conditional_5_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startPayment());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pay ", \u0275\u0275pipeBind4(2, 1, ctx_r1.balance, ctx_r1.currency, "symbol", "1.2-2"), " by card ");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 31);
    \u0275\u0275elementStart(1, "div", 32)(2, "button", 4);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Conditional_5_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.submitPayment());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Conditional_5_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelPayment());
    });
    \u0275\u0275text(6, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.payState() === "processing");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.payState() === "processing" ? "Processing\u2026" : "Pay " + \u0275\u0275pipeBind4(4, 3, ctx_r1.balance, ctx_r1.currency, "symbol", "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.payState() === "processing");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.payError());
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, InvoiceComponent_Case_2_Conditional_0_Conditional_5_Conditional_1_Template, 3, 6, "button", 28)(2, InvoiceComponent_Case_2_Conditional_0_Conditional_5_Conditional_2_Template, 7, 8)(3, InvoiceComponent_Case_2_Conditional_0_Conditional_5_Conditional_3_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.payState() === "idle" ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.payError() ? 3 : -1);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "a", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.payPageLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pay ", \u0275\u0275pipeBind4(3, 2, ctx_r1.balance, ctx_r1.currency, "symbol", "1.2-2"), " by card ");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.inv.address);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.inv.phone);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.inv.email, "");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("VAT(CIF): ", ctx_r1.inv.vat_number, "");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_33_Template(rf, ctx) {
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
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.serviceDate, "d MMM yyyy"));
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2, "Booking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.bookingRef);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.billing_address);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("VAT No: ", c_r5.vat_number, "");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_38_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.email);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, InvoiceComponent_Case_2_Conditional_0_Conditional_38_Conditional_2_Template, 2, 1, "p", 11)(3, InvoiceComponent_Case_2_Conditional_0_Conditional_38_Conditional_3_Template, 2, 1, "p", 2)(4, InvoiceComponent_Case_2_Conditional_0_Conditional_38_Conditional_4_Template, 2, 1, "p", 2);
  }
  if (rf & 2) {
    const c_r5 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.company || c_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r5.billing_address ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r5.vat_number ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r5.email ? 4 : -1);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InvoiceComponent_Case_2_Conditional_0_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", $index_r7 + 1, ".");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 3, item_r6.amount, ctx_r1.currency, "symbol", "1.2-2"));
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span");
    \u0275\u0275text(2, "Subtotal (net)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 3, ctx_r1.net, ctx_r1.currency, "symbol", "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("VAT (", ctx_r1.vatRate, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 8, ctx_r1.vat, ctx_r1.currency, "symbol", "1.2-2"));
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span");
    \u0275\u0275text(2, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, ctx_r1.paid, ctx_r1.currency, "symbol", "1.2-2"));
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span");
    \u0275\u0275text(2, "Balance due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 1, ctx_r1.balance, ctx_r1.currency, "symbol", "1.2-2"));
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_62_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" by ", ctx_r1.paidMethods, "");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_62_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind2(1, 1, ctx_r1.lastPaidAt, "d MMM yyyy"), "");
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 37);
    \u0275\u0275text(2, "PAID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4, " Paid in full");
    \u0275\u0275template(5, InvoiceComponent_Case_2_Conditional_0_Conditional_62_Conditional_5_Template, 1, 1)(6, InvoiceComponent_Case_2_Conditional_0_Conditional_62_Conditional_6_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.paidMethods ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lastPaidAt ? 6 : -1);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.notes);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.inv.vat_note);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.footerText);
  }
}
function InvoiceComponent_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 4);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function InvoiceComponent_Case_2_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275text(4, "\u{1F5A8} Print");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, InvoiceComponent_Case_2_Conditional_0_Conditional_5_Template, 4, 2, "div", 6)(6, InvoiceComponent_Case_2_Conditional_0_Conditional_6_Template, 4, 7, "div", 6);
    \u0275\u0275elementStart(7, "div", 7, 0)(9, "header", 8)(10, "div", 9)(11, "h1", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, InvoiceComponent_Case_2_Conditional_0_Conditional_13_Template, 2, 1, "p", 11);
    \u0275\u0275elementStart(14, "p", 2);
    \u0275\u0275template(15, InvoiceComponent_Case_2_Conditional_0_Conditional_15_Template, 2, 1, "span")(16, InvoiceComponent_Case_2_Conditional_0_Conditional_16_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, InvoiceComponent_Case_2_Conditional_0_Conditional_17_Template, 2, 1, "p", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12)(19, "div", 13);
    \u0275\u0275text(20, "INVOICE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "table", 14)(22, "tr")(23, "td");
    \u0275\u0275text(24, "Invoice no.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tr")(28, "td");
    \u0275\u0275text(29, "Issue date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, InvoiceComponent_Case_2_Conditional_0_Conditional_33_Template, 6, 4, "tr")(34, InvoiceComponent_Case_2_Conditional_0_Conditional_34_Template, 5, 1, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "section", 15)(36, "div", 16);
    \u0275\u0275text(37, "Bill to");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, InvoiceComponent_Case_2_Conditional_0_Conditional_38_Template, 5, 4)(39, InvoiceComponent_Case_2_Conditional_0_Conditional_39_Template, 2, 0, "p", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "table", 17)(41, "thead")(42, "tr")(43, "th", 18);
    \u0275\u0275text(44, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 19);
    \u0275\u0275text(48, "Total amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275repeaterCreate(50, InvoiceComponent_Case_2_Conditional_0_For_51_Template, 9, 8, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 20);
    \u0275\u0275template(53, InvoiceComponent_Case_2_Conditional_0_Conditional_53_Template, 12, 13);
    \u0275\u0275elementStart(54, "div", 21)(55, "span");
    \u0275\u0275text(56, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, InvoiceComponent_Case_2_Conditional_0_Conditional_60_Template, 6, 6, "div", 22)(61, InvoiceComponent_Case_2_Conditional_0_Conditional_61_Template, 6, 6, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, InvoiceComponent_Case_2_Conditional_0_Conditional_62_Template, 7, 2, "div", 24)(63, InvoiceComponent_Case_2_Conditional_0_Conditional_63_Template, 2, 1, "p", 25)(64, InvoiceComponent_Case_2_Conditional_0_Conditional_64_Template, 2, 1, "p", 26)(65, InvoiceComponent_Case_2_Conditional_0_Conditional_65_Template, 2, 1, "footer", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.downloading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.downloading() ? "Preparing\u2026" : "\u2B07 Download PDF", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canPay ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canPayViaBooking ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.supplierName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.inv.address ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.inv.phone ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.inv.email ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.inv.vat_number ? 17 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.invoiceNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 22, ctx_r1.issueDate, "d MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.serviceDate ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bookingRef ? 34 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_17_0 = ctx.client) ? 38 : 39, tmp_17_0);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.lineItems);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.vatRegistered ? 53 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(59, 25, ctx_r1.total, ctx_r1.currency, "symbol", "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.paid > 0 ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.balance > 0 ? 61 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fullyPaid ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.notes ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.inv.vat_note ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.inv.invoice_footer && !ctx_r1.fullyPaid ? 65 : -1);
  }
}
function InvoiceComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InvoiceComponent_Case_2_Conditional_0_Template, 66, 30);
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
    this.sheet = viewChild("sheet");
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
  // ── Derived invoice values ──────────────────────────────────────────
  get inv() {
    return this.data()?.org.invoice_details ?? {};
  }
  /** Footer with {deposit}/{balance}/{depositPercent}/{total} keys filled from this booking. */
  get footerText() {
    return renderInvoiceFooter(this.inv.invoice_footer, {
      total: this.total,
      // `booking` is null for a standalone invoice — the optional chain has to cover it,
      // not just `data()`. A footer template using {deposit} simply renders no percentage.
      depositPercent: this.data()?.booking?.deposit_percent ?? null,
      currency: this.currency
    });
  }
  get currency() {
    return this.data()?.org.currency ?? "EUR";
  }
  get supplierName() {
    return this.inv.legal_name?.trim() || this.data()?.org.name || "";
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
    const fromBundle = this.data()?.invoice.number;
    if (fromBundle)
      return fromBundle;
    const ref = this.data()?.booking?.booking_ref ?? "";
    const prefix = (this.inv.invoice_prefix || "INV").toUpperCase();
    const dash = ref.indexOf("-");
    return dash >= 0 ? `${prefix}-${ref.slice(dash + 1)}` : `${prefix}-${ref}`;
  }
  /** When the work happened. The invoice's own date, falling back to the booking's. */
  get serviceDate() {
    return this.data()?.invoice.service_date ?? null;
  }
  /** A standalone invoice has no job in the calendar behind it. */
  get bookingRef() {
    return this.data()?.booking?.booking_ref ?? null;
  }
  get lineItems() {
    return this.data()?.invoice.line_items ?? [];
  }
  get notes() {
    return this.data()?.invoice.notes ?? null;
  }
  /** Issue date: the saved invoice date if customised, otherwise today. */
  get issueDate() {
    return this.data()?.invoice.issue_date ?? /* @__PURE__ */ new Date();
  }
  get total() {
    return this.data()?.invoice.total ?? 0;
  }
  /** With VAT prices are treated as inclusive: back out the net and VAT from the gross total. */
  get net() {
    return this.vatRegistered ? this.total / (1 + this.vatRate / 100) : this.total;
  }
  get vat() {
    return this.vatRegistered ? this.total - this.net : 0;
  }
  get paid() {
    return this.data()?.total_paid ?? 0;
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
    const pays = this.data()?.payments ?? [];
    return [...new Set(pays.map((p) => p.method))].join(", ");
  }
  /** Date of the most recent completed payment. */
  get lastPaidAt() {
    const pays = this.data()?.payments ?? [];
    return pays.length ? pays[pays.length - 1].paid_at : null;
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
      const el = this.sheet()?.nativeElement;
      if (!el || this.downloading())
        return;
      this.downloading.set(true);
      try {
        yield downloadElementAsPdf(el, `${this.invoiceNumber}.pdf`);
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
        \u0275\u0275viewQuerySignal(ctx.sheet, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 3, vars: 1, consts: [["sheet", ""], [1, "screen"], [1, "muted"], [1, "toolbar", "no-print"], [1, "btn", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--ghost", 3, "click"], [1, "paybox", "no-print"], [1, "sheet"], [1, "inv-head"], [1, "supplier"], [1, "supplier__name"], [1, "muted", "pre"], [1, "inv-meta"], [1, "inv-title"], [1, "meta"], [1, "bill-to"], [1, "block-label"], [1, "items"], [1, "no"], [1, "num"], [1, "totals"], [1, "totals__row", "totals__row--grand"], [1, "totals__row"], [1, "totals__row", "totals__row--bal"], [1, "paid-banner"], [1, "inv-notes", "pre"], [1, "vat-note", "pre"], [1, "inv-footer", "pre"], [1, "btn", "btn--primary"], [1, "paybox__error"], [1, "btn", "btn--primary", 3, "click"], ["id", "invoice-payment-element"], [1, "paybox__actions"], [1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "btn", "btn--primary", 3, "href"], [1, "bill-to__name"], [1, "item-desc", "pre"], [1, "paid-badge"], [1, "paid-when"]], template: function InvoiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InvoiceComponent_Case_0_Template, 3, 0, "div", 1)(1, InvoiceComponent_Case_1_Template, 5, 0, "div", 1)(2, InvoiceComponent_Case_2_Template, 1, 1);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.state()) === "loading" ? 0 : tmp_0_0 === "error" ? 1 : tmp_0_0 === "ready" ? 2 : -1);
      }
    }, dependencies: [CurrencyPipe, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #f3f4f6;\n  min-height: 100vh;\n  padding: 24px 16px 64px;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  color: #111827;\n}\n.screen[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 80px auto;\n  text-align: center;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.pre[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.toolbar[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto 16px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 8px;\n  padding: 11px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #111827;\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #374151;\n  border: 1.5px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: default;\n  filter: none;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.95);\n}\n.paybox[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);\n  padding: 20px 22px;\n}\n.paybox__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 16px;\n}\n.paybox__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.paybox__error[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 13px;\n  color: #dc2626;\n}\n.sheet[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.08);\n  padding: 48px 52px;\n}\n.inv-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 24px;\n  border-bottom: 2px solid #111827;\n  padding-bottom: 20px;\n  margin-bottom: 24px;\n}\n.supplier__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  margin: 0 0 6px;\n}\n.supplier[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 12.5px;\n}\n.inv-meta[_ngcontent-%COMP%] {\n  text-align: right;\n  flex: 0 0 auto;\n}\n.inv-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #F4A922;\n  margin-bottom: 8px;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  margin-left: auto;\n}\n.meta[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 2px 0;\n}\n.meta[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: #6b7280;\n  padding-right: 16px;\n  text-align: left;\n}\n.meta[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  font-weight: 600;\n  text-align: right;\n}\n.block-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #9ca3af;\n  margin-bottom: 6px;\n}\n.bill-to[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.bill-to__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0 0 2px;\n}\n.bill-to[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 12.5px;\n}\n.items[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\n.items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n  border-bottom: 1.5px solid #e5e7eb;\n  padding: 0 0 8px;\n}\n.items[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%], \n.items[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.items[_ngcontent-%COMP%]   th.no[_ngcontent-%COMP%], \n.items[_ngcontent-%COMP%]   td.no[_ngcontent-%COMP%] {\n  width: 36px;\n  color: #6b7280;\n  font-weight: 700;\n}\n.items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.item-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  margin-top: 3px;\n  white-space: pre-line;\n  overflow-wrap: anywhere;\n}\n.item-meta[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #9ca3af;\n  margin-top: 5px;\n}\n.totals[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: min(280px, 100%);\n  margin-top: 8px;\n}\n.totals__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13.5px;\n  padding: 6px 0;\n}\n.totals__row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #6b7280;\n}\n.totals__row--grand[_ngcontent-%COMP%] {\n  border-top: 1.5px solid #111827;\n  margin-top: 4px;\n  font-weight: 800;\n  font-size: 16px;\n}\n.totals__row--grand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #111827;\n}\n.totals__row--bal[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #b45309;\n}\n.totals__row--bal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #b45309;\n}\n.inv-notes[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 13px;\n  color: #374151;\n}\n.vat-note[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.paid-banner[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.paid-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 2px solid #16a34a;\n  color: #16a34a;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  font-size: 15px;\n  padding: 4px 12px;\n  border-radius: 6px;\n  transform: rotate(-3deg);\n}\n.paid-when[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #6b7280;\n}\n.inv-footer[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n  font-size: 12px;\n  color: #6b7280;\n}\n@media (max-width: 760px) {\n  .sheet[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .inv-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .inv-meta[_ngcontent-%COMP%] {\n    flex: none;\n    text-align: left;\n  }\n  .meta[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .supplier[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    overflow-wrap: anywhere;\n  }\n  .paybox[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@media print {\n  [_nghost-%COMP%] {\n    background: #fff;\n    padding: 0;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .sheet[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border-radius: 0;\n    max-width: none;\n    margin: 0;\n    padding: 24px 28px;\n  }\n}\n/*# sourceMappingURL=invoice.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceComponent, { className: "InvoiceComponent", filePath: "src/app/booking/public/invoice/invoice.component.ts", lineNumber: 46 });
})();
export {
  InvoiceComponent
};
//# sourceMappingURL=chunk-BIW2PAW7.js.map
