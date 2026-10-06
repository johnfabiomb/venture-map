import {
  ExpenseDialogComponent
} from "./chunk-QRBC3A7W.js";
import "./chunk-5MZRX563.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingAdminService
} from "./chunk-R4YZFFFN.js";
import {
  BookingDataService
} from "./chunk-QYHUJY36.js";
import "./chunk-F57EG5LQ.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-76D3SO4I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  DatePipe,
  computed,
  inject,
  model,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
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

// src/app/booking/platform/bookings/booking-detail/booking-detail.component.ts
var _c0 = (a0) => ["/bookings/invoice-edit", a0];
var _c1 = () => ({ from: "booking" });
var _c2 = (a0) => ({ from: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.start;
function BookingDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2, "Booking not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 4);
    \u0275\u0275text(4, "Back to bookings");
    \u0275\u0275elementEnd()();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
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
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_54_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 62)(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 2, it_r3.amount, "EUR", "symbol", "1.2-2"));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h2", 25);
    \u0275\u0275text(3, "What's billed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 60);
    \u0275\u0275text(5, "Edit invoice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 61);
    \u0275\u0275repeaterCreate(7, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_54_For_8_Template, 6, 7, "li", 62, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 63)(10, "span");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, ctx_r1.id))("queryParams", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.lineItems());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 3, b_r4.price_total, "EUR", "symbol", "1.2-2"));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "No invoice raised yet.");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r5.status);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "paid");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 62)(1, "span", 66)(2, "a", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_For_2_Conditional_7_Template, 2, 1, "span", 36)(8, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_For_2_Conditional_8_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const inv_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.invoiceEditLink(inv_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_15_0 = inv_r5.invoice_number) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "Draft");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind4(6, 6, inv_r5.amount_paid, "EUR", "symbol", "1.0-2"), " paid");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(inv_r5.status !== "issued" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(inv_r5.payment_status === "paid" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 11, inv_r5.amount_gross, "EUR", "symbol", "1.2-2"));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, " An issued invoice is a document your client already holds \u2014 when the price changes, raise another rather than editing the original. ");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 61);
    \u0275\u0275repeaterCreate(1, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_For_2_Template, 12, 16, "li", 62, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_Conditional_3_Template, 2, 0, "p", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.invoices());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.invoices().length > 1 ? 3 : -1);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_64_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
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
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 31);
    \u0275\u0275text(2, "Time blocks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275repeaterCreate(4, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_64_For_5_Template, 4, 8, "span", 68, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.slots());
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(5, 2, b_r4.start_at, "EEE d MMM y, HH:mm"), " \u2013 ", \u0275\u0275pipeBind2(6, 5, b_r4.end_at, "HH:mm"), "");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("On the Work board \xB7 ", ctx.production_status, "");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_86_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
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
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(b_r4.client_email);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Visible to client");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Locked \xB7 ", \u0275\u0275pipeBind4(2, 1, ctx_r1.balance(), "EUR", "symbol", "1.0-2"), " due");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_106_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleRelease());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.releasing());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.released() ? "Lock again" : "Release now (before payment)", " ");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_107_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearDelivery());
    });
    \u0275\u0275text(1, "Remove");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nothing attached yet \u2014 the client sees no delivery section. ");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Live on the client's booking link now. ");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, ' Hidden until the booking is paid in full \u2014 or use "Release now". ');
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "No payments recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", p_r10.note, "");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "refunded");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "pending");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const p_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deletePayment(p_r10));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 71)(1, "div", 72);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73)(5, "span", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Conditional_7_Template, 2, 1, "span", 75)(8, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Conditional_8_Template, 2, 0, "span", 76)(9, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Conditional_9_Template, 2, 0, "span", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 78);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Conditional_13_Template, 2, 0, "button", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const p_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("pay--refunded", p_r10.status === "refunded");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(3, 9, p_r10.amount, "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.methodLabel(p_r10.method));
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r10.note ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r10.status === "refunded" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r10.status === "pending" ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 14, (tmp_20_0 = p_r10.paid_at) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : p_r10.created_at, "d MMM y"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!p_r10.stripe_payment_intent_id ? 13 : -1);
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 46);
    \u0275\u0275repeaterCreate(1, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_For_2_Template, 14, 17, "li", 70, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.payments());
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_125_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prefillBalance());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Pay full balance (", \u0275\u0275pipeBind4(2, 1, ctx_r1.balance(), "EUR", "symbol", "1.0-2"), ")");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_For_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", m_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.methodLabel(m_r13));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "No costs recorded. Add what this job cost you to see its real profit.");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", e_r15.vendor, "");
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "rebilled");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 71)(1, "div", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73)(5, "span", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 75);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_For_2_Conditional_9_Template, 2, 1, "span", 75)(10, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_For_2_Conditional_10_Template, 2, 0, "span", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 78);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 86);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_For_2_Template_button_click_14_listener() {
      const e_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openCostDialog(e_r15));
    });
    \u0275\u0275text(15, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 87);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_For_2_Template_button_click_16_listener() {
      const e_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteExpense(e_r15));
    });
    \u0275\u0275text(17, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind4(3, 6, e_r15.amount, "EUR", "symbol", "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(e_r15.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", e_r15.description, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r15.vendor ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(e_r15.billable ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 11, e_r15.spent_on, "d MMM y"));
  }
}
function BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 46);
    \u0275\u0275repeaterCreate(1, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_For_2_Template, 18, 14, "li", 71, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "div", 82)(5, "span");
    \u0275\u0275text(6, "Charged");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 83)(11, "span");
    \u0275\u0275text(12, "Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 84)(17, "span");
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
function BookingDetailComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div")(2, "a", 6);
    \u0275\u0275text(3, "\u2190 All bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9)(9, "button", 10);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyLink());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 11);
    \u0275\u0275text(12, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyInvoiceLink());
    });
    \u0275\u0275text(14, "Copy invoice link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 12);
    \u0275\u0275text(16, "Edit invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 10);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goEdit());
    });
    \u0275\u0275text(18, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 13);
    \u0275\u0275text(20, "Duplicate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 14)(22, "div", 15)(23, "span", 16);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 17);
    \u0275\u0275text(27, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 15)(29, "span", 18);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 17);
    \u0275\u0275text(33, "Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 15)(35, "span", 16);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 17);
    \u0275\u0275text(39, "Balance due");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 15)(41, "span", 16);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 17);
    \u0275\u0275text(45, " Costs ");
    \u0275\u0275elementStart(46, "button", 19);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCostDialog());
    });
    \u0275\u0275text(47, "+ Add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(48, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_48_Template, 6, 10, "div", 15);
    \u0275\u0275elementStart(49, "div", 20)(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 21)(53, "div", 22);
    \u0275\u0275template(54, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_54_Template, 15, 11, "div", 23);
    \u0275\u0275elementStart(55, "div", 23)(56, "div", 24)(57, "h2", 25);
    \u0275\u0275text(58, "Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 26);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addInvoice());
    });
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_61_Template, 2, 0, "p", 27)(62, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_62_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 28);
    \u0275\u0275template(64, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_64_Template, 6, 0, "div", 29)(65, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_65_Template, 7, 8, "div", 30);
    \u0275\u0275elementStart(66, "div", 30)(67, "span", 31);
    \u0275\u0275text(68, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 32);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 30)(72, "span", 31);
    \u0275\u0275text(73, "Worker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 32);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 30)(77, "span", 31);
    \u0275\u0275text(78, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 32);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 30)(82, "span", 31);
    \u0275\u0275text(83, "Production");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 32);
    \u0275\u0275template(85, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_85_Template, 2, 1, "a", 33)(86, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_86_Template, 2, 2, "button", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(87, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_87_Template, 5, 1, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 23)(89, "div", 24)(90, "h2", 25);
    \u0275\u0275text(91, "Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275template(92, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_92_Template, 2, 0, "span", 35)(93, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_93_Template, 3, 6, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 37)(95, "label");
    \u0275\u0275text(96, "Message ");
    \u0275\u0275elementStart(97, "span", 38);
    \u0275\u0275text(98, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "textarea", 39);
    \u0275\u0275twoWayListener("ngModelChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_textarea_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.deliveryMessage, $event) || (ctx_r1.deliveryMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "label", 40);
    \u0275\u0275text(101, "Links");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "app-links-editor", 41);
    \u0275\u0275twoWayListener("linksChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_links_editor_linksChange_102_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.deliveryLinks, $event) || (ctx_r1.deliveryLinks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 42)(104, "button", 43);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveDelivery());
    });
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275template(106, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_106_Template, 2, 2, "button", 34)(107, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_107_Template, 2, 0, "button", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "p", 27);
    \u0275\u0275template(109, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_109_Template, 1, 0)(110, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_110_Template, 1, 0)(111, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_111_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "div", 22)(113, "div", 23)(114, "div", 24)(115, "h2", 25);
    \u0275\u0275text(116, "Payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "span", 45);
    \u0275\u0275text(118);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(119, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_119_Template, 2, 0, "p", 27)(120, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_120_Template, 3, 0, "ul", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 23)(122, "div", 24)(123, "h2", 25);
    \u0275\u0275text(124, "Record a payment");
    \u0275\u0275elementEnd();
    \u0275\u0275template(125, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_125_Template, 3, 6, "button", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "form", 48);
    \u0275\u0275listener("ngSubmit", function BookingDetailComponent_Conditional_3_Conditional_0_Template_form_ngSubmit_126_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addPayment());
    });
    \u0275\u0275elementStart(127, "div", 49)(128, "div", 37)(129, "label");
    \u0275\u0275text(130, "Amount (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_input_ngModelChange_131_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.payAmount, $event) || (ctx_r1.payAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 37)(133, "label");
    \u0275\u0275text(134, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_select_ngModelChange_135_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.payMethod, $event) || (ctx_r1.payMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(136, BookingDetailComponent_Conditional_3_Conditional_0_For_137_Template, 2, 2, "option", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "div", 37)(139, "label");
    \u0275\u0275text(140, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_input_ngModelChange_141_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.payDate, $event) || (ctx_r1.payDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 54)(143, "label");
    \u0275\u0275text(144, "Note ");
    \u0275\u0275elementStart(145, "span", 38);
    \u0275\u0275text(146, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_input_ngModelChange_147_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.payNote, $event) || (ctx_r1.payNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(148, "div", 56)(149, "button", 57);
    \u0275\u0275text(150);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(151, "div", 23)(152, "div", 24)(153, "h2", 25);
    \u0275\u0275text(154, "Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "button", 58);
    \u0275\u0275listener("click", function BookingDetailComponent_Conditional_3_Conditional_0_Template_button_click_155_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCostDialog());
    });
    \u0275\u0275text(156, "+ Add a cost");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(157, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_157_Template, 2, 0, "p", 27)(158, BookingDetailComponent_Conditional_3_Conditional_0_Conditional_158_Template, 22, 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(159, "app-expense-dialog", 59);
    \u0275\u0275twoWayListener("openChange", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_expense_dialog_openChange_159_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.costDialogOpen, $event) || (ctx_r1.costDialogOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function BookingDetailComponent_Conditional_3_Conditional_0_Template_app_expense_dialog_saved_159_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCostSaved());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_27_0;
    const b_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", b_r4.booking_ref, " \xB7 ", (tmp_4_0 = b_r4.client_name) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "No client", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.copied() ? "\u2713 Copied" : "Copy link");
    \u0275\u0275advance();
    \u0275\u0275property("href", "/book/invoice/" + ctx_r1.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(74, _c0, ctx_r1.id))("queryParams", \u0275\u0275pureFunction0(76, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(77, _c2, ctx_r1.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(25, 54, b_r4.price_total, "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(31, 59, b_r4.total_paid, "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("money__value--due", ctx_r1.balance() > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(37, 64, ctx_r1.balance(), "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("money__value--cost", ctx_r1.expensesTotal() > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.expensesTotal() ? "\u2212" : "", "", \u0275\u0275pipeBind4(43, 69, ctx_r1.expensesTotal(), "EUR", "symbol", "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.expensesTotal() > 0 ? 48 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge badge--", b_r4.payment_status, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r4.payment_status === "paid" ? "Paid in full" : b_r4.payment_status === "partial" ? "Partially paid" : b_r4.payment_status === "external" ? "External" : "Unpaid", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.lineItems().length ? 54 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.addingInvoice());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addingInvoice() ? "Adding\u2026" : "+ Add another invoice", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.invoices().length === 0 ? 61 : 62);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.slots().length > 1 ? 64 : 65);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_24_0 = b_r4.service_name) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_25_0 = b_r4.staff_name) !== null && tmp_25_0 !== void 0 ? tmp_25_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r4.status);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_27_0 = ctx_r1.workItem()) ? 85 : 86, tmp_27_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(b_r4.client_email ? 87 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.clientCanSee() ? 92 : ctx_r1.hasDelivery() ? 93 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.deliveryMessage);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("links", ctx_r1.deliveryLinks);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingDelivery() || !ctx_r1.deliveryValid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingDelivery() ? "Saving\u2026" : "Save delivery", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasDelivery() && !ctx_r1.paidInFull() ? 106 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasDelivery() ? 107 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.hasDelivery() ? 109 : ctx_r1.clientCanSee() ? 110 : 111);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.payments().length, " record", ctx_r1.payments().length === 1 ? "" : "s", "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.payments().length === 0 ? 119 : 120);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.balance() > 0 ? 125 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payMethod);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.methods);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payDate);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.payNote);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.adding());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.adding() ? "Recording\u2026" : "Record payment", " ");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.expenses().length === 0 ? 157 : 158);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("open", ctx_r1.costDialogOpen);
    \u0275\u0275property("forBookingId", ctx_r1.id)("expense", ctx_r1.editingExpense());
  }
}
function BookingDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingDetailComponent_Conditional_3_Conditional_0_Template, 160, 79);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.booking()) ? 0 : -1, tmp_1_0);
  }
}
var METHOD_LABEL = {
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
    this.adding = signal(false);
    this.addingInvoice = signal(false);
    this.workItem = signal(null);
    this.addingCard = signal(false);
    this.delivery = signal(null);
    this.savingDelivery = signal(false);
    this.releasing = signal(false);
    this.deliveryMessage = "";
    this.deliveryLinks = [];
    this.expenses = signal([]);
    this.costDialogOpen = signal(false);
    this.editingExpense = signal(null);
    this.chargedTotal = computed(() => this.booking()?.price_total ?? 0);
    this.expensesTotal = computed(() => this.expenses().reduce((t, e) => t + Number(e.amount), 0));
    this.profit = computed(() => this.chargedTotal() - this.expensesTotal());
    this.payAmount = null;
    this.payMethod = "cash";
    this.payNote = "";
    this.payDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    this.methods = ["cash", "revolut", "bank", "card", "other"];
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
  }
  get deliveryValid() {
    return this.deliveryLinks.every((l) => !l.url.trim() || isDeliveryUrl(l.url));
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
        this.applyDelivery(delivery);
      }
    });
  }
  // ── Delivery actions ─────────────────────────────────────────────────────
  applyDelivery(d) {
    this.delivery.set(d);
    this.deliveryMessage = d?.message ?? "";
    this.deliveryLinks = (d?.links ?? []).map((l) => __spreadValues({}, l));
  }
  saveDelivery() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org) {
        this.toast.error("No organization context.");
        return;
      }
      if (!this.deliveryValid) {
        this.toast.error("Every link must start with http:// or https://");
        return;
      }
      this.savingDelivery.set(true);
      try {
        const links = this.deliveryLinks.map((l) => ({ label: l.label.trim(), url: l.url.trim() })).filter((l) => l.url);
        const res = yield this.data.saveDelivery(org, this.id, {
          message: this.deliveryMessage.trim() || null,
          links
        });
        if (res.error) {
          this.toast.error("Could not save the delivery.");
          return;
        }
        this.applyDelivery(yield this.data.getDelivery(this.id));
        this.toast.success("Delivery saved");
      } finally {
        this.savingDelivery.set(false);
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
      this.releasing.set(true);
      try {
        const res = yield this.data.setDeliveryReleased(org, this.id, releasing);
        if (res.error) {
          this.toast.error("Could not update the delivery.");
          return;
        }
        this.applyDelivery(yield this.data.getDelivery(this.id));
        this.toast.success(releasing ? "Delivery released to the client" : "Delivery locked again");
      } finally {
        this.releasing.set(false);
      }
    });
  }
  clearDelivery() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org) {
        this.toast.error("No organization context.");
        return;
      }
      if (!(yield this.confirm.ask({
        title: "Remove delivery",
        message: "Clear the message and links? The client will no longer see a delivery.",
        confirmLabel: "Remove",
        danger: true
      })))
        return;
      const res = yield this.data.clearDelivery(org, this.id);
      if (res.error) {
        this.toast.error("Could not remove the delivery.");
        return;
      }
      this.applyDelivery(yield this.data.getDelivery(this.id));
      this.toast.info("Delivery removed");
    });
  }
  methodLabel(m) {
    return METHOD_LABEL[m] ?? m;
  }
  prefillBalance() {
    this.payAmount = this.balance();
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
      if (!(yield this.confirm.ask({
        title: "Remove cost",
        message: `Remove \u201C${e.description}\u201D (\u20AC${Number(e.amount).toFixed(2)})?`,
        confirmLabel: "Remove",
        danger: true
      })))
        return;
      yield this.data.deleteExpense(e.id);
      this.expenses.set(yield this.data.getExpenses(this.id));
      this.toast.success("Cost removed");
    });
  }
  addPayment() {
    return __async(this, null, function* () {
      const amount = Number(this.payAmount);
      if (!isFinite(amount) || amount <= 0) {
        this.toast.error("Enter a valid amount.");
        return;
      }
      this.adding.set(true);
      try {
        const paidAt = this.payDate ? (/* @__PURE__ */ new Date(`${this.payDate}T12:00:00`)).toISOString() : null;
        const res = yield this.data.addPayment(this.id, {
          amount,
          method: this.payMethod,
          note: this.payNote.trim() || null,
          paidAt
        });
        if (res.error) {
          this.toast.error("Could not record the payment.");
          return;
        }
        this.payments.set(yield this.data.getPayments(this.id));
        const ref = this.booking()?.booking_ref ?? "";
        this.toast.success(`\u20AC${amount} payment recorded${ref ? ` for ${ref}` : ""}`);
        this.payAmount = null;
        this.payNote = "";
      } finally {
        this.adding.set(false);
      }
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
  copyLink() {
    return __async(this, null, function* () {
      const url = yield this.data.generateLink(this.id);
      if (!url) {
        this.toast.error("Could not generate the payment link.");
        return;
      }
      yield navigator.clipboard.writeText(url);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2e3);
      this.toast.success("Payment link copied to clipboard");
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
      } catch {
        this.toast.error("Could not add this job to the Work board.");
      } finally {
        this.addingCard.set(false);
      }
    });
  }
  /** Open an invoice's editor — by booking for the original (keeps existing links and
   *  the "from=booking" return behaviour), by invoice id for any later one. */
  invoiceEditLink(inv) {
    return this.invoices()[0]?.id === inv.id ? ["/bookings/invoice-edit", this.id] : ["/bookings/invoices/edit", inv.id];
  }
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingDetailComponent, selectors: [["app-booking-detail"]], decls: 4, vars: 1, consts: [[1, "page"], [1, "loading"], [1, "empty"], [1, "spinner"], ["routerLink", "/bookings/list", 1, "btn", "btn--ghost"], [1, "page__head"], ["routerLink", "/bookings/list", 1, "back"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], [1, "btn", "btn--ghost", 3, "click"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn--ghost", 3, "href"], [1, "btn", "btn--ghost", 3, "routerLink", "queryParams"], ["routerLink", "/bookings/new", 1, "btn", "btn--ghost", 3, "queryParams"], [1, "money"], [1, "money__stat"], [1, "money__value"], [1, "money__label"], [1, "money__value", "money__value--paid"], ["type", "button", 1, "money__add", 3, "click"], [1, "money__badge"], [1, "detail-grid"], [1, "detail-col"], [1, "card"], [1, "card__head"], [1, "card__title"], ["type", "button", 1, "link-btn", 3, "click", "disabled"], [1, "empty-line"], [1, "card", "facts"], [1, "fact", "fact--blocks"], [1, "fact"], [1, "fact__k"], [1, "fact__v"], ["routerLink", "/bookings/work"], ["type", "button", 1, "link-btn", 3, "disabled"], [1, "tag", "tag--live"], [1, "tag"], [1, "field"], [1, "opt"], ["rows", "3", "name", "deliveryMessage", "placeholder", "e.g. Here are your final edits \u2014 please download within 30 days.", 3, "ngModelChange", "ngModel"], [1, "sub-label"], [3, "linksChange", "links"], [1, "delivery-actions"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 1, "link-btn", "link-btn--danger"], [1, "muted"], [1, "pays"], ["type", "button", 1, "link-btn"], [1, "payform", 3, "ngSubmit"], [1, "payform__grid"], ["type", "number", "name", "payAmount", "min", "0", "step", "0.01", "placeholder", "0.00", "required", "", 3, "ngModelChange", "ngModel"], ["name", "payMethod", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "date", "name", "payDate", 3, "ngModelChange", "ngModel"], [1, "field", "field--note"], ["name", "payNote", "placeholder", "e.g. Deposit, Final payment", 3, "ngModelChange", "ngModel"], [1, "payform__actions"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "link-btn", 3, "click"], [3, "openChange", "saved", "open", "forBookingId", "expense"], [1, "link-btn", 3, "routerLink", "queryParams"], [1, "items"], [1, "items__row"], [1, "items__total"], [1, "items__desc", "text-multiline"], [1, "items__amt"], [1, "items__desc"], [3, "routerLink"], [1, "block-line"], ["type", "button", 1, "link-btn", "link-btn--danger", 3, "click"], [1, "pay", 3, "pay--refunded"], [1, "pay"], [1, "pay__amount"], [1, "pay__main"], [1, "pay__method"], [1, "pay__note"], [1, "pay__tag"], [1, "pay__tag", "pay__tag--pending"], [1, "pay__date"], ["title", "Remove payment", 1, "pay__del"], ["title", "Remove payment", 1, "pay__del", 3, "click"], [1, "profit"], [1, "profit__row"], [1, "profit__row", "profit__row--cost"], [1, "profit__row", "profit__row--total"], [1, "pay__amount", "pay__amount--cost"], ["title", "Edit cost", 1, "pay__edit", 3, "click"], ["title", "Remove cost", 1, "pay__del", 3, "click"]], template: function BookingDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, BookingDetailComponent_Conditional_1_Template, 2, 0, "div", 1)(2, BookingDetailComponent_Conditional_2_Template, 5, 0, "div", 2)(3, BookingDetailComponent_Conditional_3_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.loading() && !ctx.booking() ? 1 : !ctx.booking() ? 2 : 3);
      }
    }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, DatePipe, CurrencyPipe, LinksEditorComponent, ExpenseDialogComponent], styles: [`

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
@media (max-width: 560px) {
  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
   .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
    font-size: 16px;
  }
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
.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #475569;
}
.detail-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
}
.detail-col[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
@media (max-width: 900px) {
  .detail-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.back[_ngcontent-%COMP%] {
  font-size: 12.5px;
  font-weight: 600;
  color: #F4A922;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 8px;
}
.back[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
@media (max-width: 640px) {
  .money[_ngcontent-%COMP%] {
    gap: 10px;
    padding: 16px;
  }
  .money__value[_ngcontent-%COMP%] {
    font-size: 18px;
  }
}
.card__head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.card__title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}
.empty-line[_ngcontent-%COMP%] {
  font-size: 13.5px;
  color: #94a3b8;
  margin: 4px 0;
}
.money[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  align-items: center;
  gap: 18px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 22px;
  margin-bottom: 18px;
}
@media (max-width: 560px) {
  .money[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
  }
  .money[_ngcontent-%COMP%]   .money__badge[_ngcontent-%COMP%] {
    grid-column: 1/-1;
  }
}
.money__stat[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.money__value[_ngcontent-%COMP%] {
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
}
.money__value--paid[_ngcontent-%COMP%] {
  color: #16a34a;
}
.money__value--due[_ngcontent-%COMP%] {
  color: #f97316;
}
.money__label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.money__badge[_ngcontent-%COMP%] {
  justify-self: end;
}
.facts[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.fact[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px 16px;
  padding: 9px 0;
  font-size: 13.5px;
}
.fact[_ngcontent-%COMP%]    + .fact[_ngcontent-%COMP%] {
  border-top: 1px solid #e2e8f0;
}
.fact__k[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-weight: 600;
}
.fact__v[_ngcontent-%COMP%] {
  color: #0f172a;
  text-align: right;
  min-width: 0;
  overflow-wrap: anywhere;
}
.fact--blocks[_ngcontent-%COMP%] {
  align-items: flex-start;
}
.block-line[_ngcontent-%COMP%] {
  display: block;
  line-height: 1.5;
}
.block-line[_ngcontent-%COMP%]    + .block-line[_ngcontent-%COMP%] {
  margin-top: 2px;
}
.pays[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
}
.pay[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 11px 0;
}
.pay[_ngcontent-%COMP%]    + .pay[_ngcontent-%COMP%] {
  border-top: 1px solid #e2e8f0;
}
.pay--refunded[_ngcontent-%COMP%] {
  opacity: 0.55;
}
.pay__amount[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  min-width: 84px;
}
.pay__main[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  font-size: 13.5px;
  color: #475569;
}
.pay__method[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #0f172a;
}
.pay__note[_ngcontent-%COMP%] {
  color: #475569;
}
.pay__tag[_ngcontent-%COMP%] {
  margin-left: 6px;
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #ef4444;
}
.pay__tag--pending[_ngcontent-%COMP%] {
  color: #a16207;
}
.pay__date[_ngcontent-%COMP%] {
  font-size: 12.5px;
  color: #94a3b8;
  white-space: nowrap;
}
.pay__del[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 14px;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  flex-shrink: 0;
}
.pay__del[_ngcontent-%COMP%]:hover {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}
.payform__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}
@media (max-width: 620px) {
  .payform__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 420px) {
  .payform__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.field--note[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.opt[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-weight: 400;
}
.payform__actions[_ngcontent-%COMP%] {
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
}
.badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 4px 11px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
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
.badge--external[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #64748b;
}
.loading[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  padding: 60px;
}
.spinner[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  border: 2.5px solid #e2e8f0;
  border-top-color: #F4A922;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.empty[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding: 40px 0;
  color: #94a3b8;
}
.items[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
}
.items__row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: baseline;
  padding: 9px 0;
  border-bottom: 1px solid #e2e8f0;
}
.items__row[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.items__desc[_ngcontent-%COMP%] {
  color: #0f172a;
  white-space: pre-line;
}
.items__amt[_ngcontent-%COMP%] {
  font-variant-numeric: tabular-nums;
  color: #475569;
  white-space: nowrap;
}
.items__total[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1.5px solid #e2e8f0;
  font-weight: 800;
  color: #0f172a;
}
.delivery-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
}
.sub-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  margin: 14px 0 6px;
}
.tag--live[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #166534;
}
.pay__amount--cost[_ngcontent-%COMP%] {
  color: #ef4444;
}
.profit[_ngcontent-%COMP%] {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.profit__row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 13px;
  color: #475569;
}
.profit__row--cost[_ngcontent-%COMP%] {
  color: #ef4444;
}
.profit__row--total[_ngcontent-%COMP%] {
  margin-top: 4px;
  padding-top: 8px;
  border-top: 1px solid #e2e8f0;
  font-size: 15px;
  font-weight: 800;
  color: #16a34a;
}
.profit__row--loss[_ngcontent-%COMP%] {
  color: #ef4444;
}
.check--inline[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  font-size: 12.5px;
  color: #475569;
  cursor: pointer;
}
.check--inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  accent-color: #F4A922;
  cursor: pointer;
}
/*# sourceMappingURL=booking-detail.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingDetailComponent, { className: "BookingDetailComponent", filePath: "src/app/booking/platform/bookings/booking-detail/booking-detail.component.ts", lineNumber: 28 });
})();
export {
  BookingDetailComponent
};
//# sourceMappingURL=chunk-TOHQBH6L.js.map
