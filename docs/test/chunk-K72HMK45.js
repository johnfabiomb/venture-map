import {
  ModalComponent
} from "./chunk-YT6H6K5O.js";
import {
  ConfirmService
} from "./chunk-FBEN7ZXU.js";
import {
  BookingAdminService
} from "./chunk-TGVAAVA4.js";
import {
  BookingDataService
} from "./chunk-KH7QPK5J.js";
import {
  ToastService
} from "./chunk-VP2YFPLJ.js";
import {
  BookingsAuthService
} from "./chunk-AO4LSMG5.js";
import {
  Router,
  RouterLink
} from "./chunk-CPWNAP4Z.js";
import "./chunk-H276UI7Q.js";
import "./chunk-KKVK7E5Z.js";
import "./chunk-VUFO6QBK.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  computed,
  effect,
  inject,
  input,
  model,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VEX6DIAJ.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/ui/earnings-breakdown/earnings-breakdown.component.ts
function _forTrack0($index, $item) {
  return this.rowKey($item);
}
function EarningsBreakdownComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function EarningsBreakdownComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Nothing in ", ctx_r0.monthLabel(), ".");
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.method);
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_8_Conditional_3_Template, 2, 1, "span", 13);
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 2, r_r3.paid_on, "d MMM"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r3.method ? 3 : -1);
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(2, 1, r_r3.balance, "EUR", "symbol", "1.0-0"), " owed");
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_9_Conditional_3_Template, 3, 6, "span", 20);
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 2, r_r3.service_date, "d MMM"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r3.balance && r_r3.balance > 5e-3 ? 3 : -1);
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.staff_name);
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const r_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openInvoice(r_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.invoice_number);
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Draft, no number");
    \u0275\u0275elementEnd();
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_17_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const r_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openBooking(r_r3, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.booking_ref);
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "No booking");
    \u0275\u0275elementEnd();
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", ctx_r0.isOpen(r_r3) ? "Hide" : "Show", " ", r_r3.lines.length, " ", r_r3.lines.length === 1 ? "charge" : "charges", "");
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_20_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", l_r6.hours, "h");
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275template(3, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_20_For_2_Conditional_3_Template, 2, 1, "em", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", l_r6.description || l_r6.service_name || "Charge", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(l_r6.hours ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 3, l_r6.amount, "EUR", "symbol", "1.2-2"));
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 19);
    \u0275\u0275repeaterCreate(1, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_20_For_2_Template, 7, 8, "li", 22, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(r_r3.lines);
  }
}
function EarningsBreakdownComponent_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 7)(1, "div", 8);
    \u0275\u0275listener("click", function EarningsBreakdownComponent_Conditional_3_For_8_Template_div_click_1_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle(r_r3));
    });
    \u0275\u0275elementStart(2, "div", 9)(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275template(8, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_8_Template, 4, 5)(9, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_9_Template, 4, 5)(10, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_10_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15);
    \u0275\u0275template(15, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_15_Template, 2, 1, "button", 16)(16, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_16_Template, 2, 0, "span", 17)(17, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_17_Template, 2, 1, "button", 16)(18, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_18_Template, 2, 0, "span", 17)(19, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_19_Template, 2, 3, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, EarningsBreakdownComponent_Conditional_3_For_8_Conditional_20_Template, 3, 0, "ul", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("eb__row--open", ctx_r0.isOpen(r_r3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r3.client_name || "No client");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.title || "Untitled");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.basis() === "cash" ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r3.staff_name ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(13, 11, r_r3.amount, "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(r_r3.invoice_number ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r3.booking_ref ? 17 : 18);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((r_r3.lines == null ? null : r_r3.lines.length) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isOpen(r_r3) && (r_r3.lines == null ? null : r_r3.lines.length) ? 20 : -1);
  }
}
function EarningsBreakdownComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 5);
    \u0275\u0275repeaterCreate(7, EarningsBreakdownComponent_Conditional_3_For_8_Template, 21, 16, "li", 6, _forTrack0, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(3, 5, ctx_r0.detail().total, "EUR", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate4(" ", ctx_r0.detail().count, " ", ctx_r0.basis() === "cash" ? ctx_r0.detail().count === 1 ? "payment" : "payments" : ctx_r0.detail().count === 1 ? "invoice" : "invoices", " \xB7 ", ctx_r0.whoLabel(), " \xB7 ", ctx_r0.basis() === "cash" ? "by the date the money arrived" : "by the date the work happened", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.rows());
  }
}
var EarningsBreakdownComponent = class _EarningsBreakdownComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.router = inject(Router);
    this.open = model(false);
    this.month = input(null);
    this.basis = input("work");
    this.orgId = input(null);
    this.staffId = input(null);
    this.whoLabel = input("Everyone");
    this.detail = signal(null);
    this.loading = signal(false);
    this.expanded = signal(/* @__PURE__ */ new Set());
    this.rows = () => this.detail()?.rows ?? [];
    effect(() => {
      const org = this.orgId(), month = this.month();
      if (!this.open() || !org || !month)
        return;
      void this.load(org, month, this.basis(), this.staffId());
    });
  }
  load(org, month, basis, staff) {
    return __async(this, null, function* () {
      this.loading.set(true);
      this.detail.set(yield this.data.getEarningsDetail(org, month, basis, staff));
      this.expanded.set(/* @__PURE__ */ new Set());
      this.loading.set(false);
    });
  }
  monthLabel() {
    const m = this.month();
    if (!m)
      return "";
    const [y, mo] = m.split("-").map(Number);
    return new Date(y, mo - 1, 1).toLocaleDateString("en", { month: "long", year: "numeric" });
  }
  heading() {
    return this.basis() === "cash" ? "Payments received" : "Work billed";
  }
  /** Key a row by whichever id its basis gives it. */
  rowKey(r) {
    return r.payment_id ?? r.invoice_id ?? "";
  }
  isOpen(r) {
    return this.expanded().has(this.rowKey(r));
  }
  toggle(r) {
    if (!r.lines?.length)
      return;
    const key = this.rowKey(r);
    const next = new Set(this.expanded());
    next.has(key) ? next.delete(key) : next.add(key);
    this.expanded.set(next);
  }
  /** The invoice editor is keyed on the INVOICE id; a booking-keyed route would open
   *  the booking's OLDEST invoice, which is not necessarily this row. */
  openInvoice(r) {
    if (!r.invoice_id)
      return;
    this.open.set(false);
    void this.router.navigate(["/bookings/invoices/edit", r.invoice_id]);
  }
  openBooking(r, ev) {
    ev.stopPropagation();
    if (!r.booking_id)
      return;
    this.open.set(false);
    void this.router.navigate(["/bookings", r.booking_id]);
  }
  static {
    this.\u0275fac = function EarningsBreakdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EarningsBreakdownComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EarningsBreakdownComponent, selectors: [["app-earnings-breakdown"]], inputs: { open: [1, "open"], month: [1, "month"], basis: [1, "basis"], orgId: [1, "orgId"], staffId: [1, "staffId"], whoLabel: [1, "whoLabel"] }, outputs: { open: "openChange" }, decls: 4, vars: 3, consts: [[3, "openChange", "open", "title"], [1, "eb__state"], [1, "eb__sum"], [1, "eb__sum-amount"], [1, "eb__sum-note"], [1, "eb__list"], [1, "eb__row", 3, "eb__row--open"], [1, "eb__row"], [1, "eb__main", 3, "click"], [1, "eb__who"], [1, "eb__client"], [1, "eb__title"], [1, "eb__meta"], [1, "eb__chip"], [1, "eb__amount"], [1, "eb__links"], ["type", "button", 1, "eb__link"], [1, "eb__link", "eb__link--dead"], [1, "eb__charges"], [1, "eb__lines"], [1, "eb__chip", "eb__chip--owed"], ["type", "button", 1, "eb__link", 3, "click"], [1, "eb__line"], [1, "eb__line-desc"], [1, "eb__line-hours"], [1, "eb__line-amount"]], template: function EarningsBreakdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal", 0);
        \u0275\u0275twoWayListener("openChange", function EarningsBreakdownComponent_Template_app_modal_openChange_0_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
          return $event;
        });
        \u0275\u0275template(1, EarningsBreakdownComponent_Conditional_1_Template, 2, 0, "p", 1)(2, EarningsBreakdownComponent_Conditional_2_Template, 2, 1, "p", 1)(3, EarningsBreakdownComponent_Conditional_3_Template, 9, 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275twoWayProperty("open", ctx.open);
        \u0275\u0275property("title", ctx.heading() + " \xB7 " + ctx.monthLabel());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 1 : !ctx.detail() || !ctx.rows().length ? 2 : 3);
      }
    }, dependencies: [CommonModule, CurrencyPipe, DatePipe, ModalComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.eb__state[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 24px 4px;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.eb__sum[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 0 0 14px;\n  border-bottom: 1px solid var(--color-border);\n}\n.eb__sum-amount[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-text-base);\n}\n.eb__sum-note[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n}\n.eb__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.eb__row[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.eb__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.eb__row--open[_ngcontent-%COMP%] {\n  background: var(--color-bg-light);\n}\n.eb__main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  cursor: default;\n}\n.eb__who[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.eb__client[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-base);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.eb__title[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--color-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.eb__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  font-size: 0.78rem;\n  color: var(--color-text-muted);\n}\n.eb__chip[_ngcontent-%COMP%] {\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: var(--color-bg-muted);\n  color: var(--color-text-secondary);\n  text-transform: capitalize;\n}\n.eb__chip--owed[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.eb__amount[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n  color: var(--color-text-base);\n  white-space: nowrap;\n}\n.eb__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 6px;\n  font-size: 0.78rem;\n}\n.eb__link[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  background: none;\n  color: var(--color-primary-deep);\n  font: inherit;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.eb__link[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary-hover);\n}\n.eb__link--dead[_ngcontent-%COMP%] {\n  color: var(--color-text-light);\n  text-decoration: none;\n  cursor: default;\n}\n.eb__charges[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  cursor: pointer;\n  margin-left: auto;\n}\n.eb__lines[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0 0;\n  padding: 8px 10px;\n  border-radius: var(--radius-sm);\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n}\n.eb__line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 3px 0;\n  font-size: 0.82rem;\n  color: var(--color-text-secondary);\n}\n.eb__line-desc[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.eb__line-hours[_ngcontent-%COMP%] {\n  color: var(--color-text-light);\n  font-style: normal;\n  margin-left: 4px;\n}\n.eb__line-amount[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n@media (max-width: 560px) {\n  .eb__main[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .eb__amount[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=earnings-breakdown.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EarningsBreakdownComponent, { className: "EarningsBreakdownComponent", filePath: "src/app/booking/ui/earnings-breakdown/earnings-breakdown.component.ts", lineNumber: 24 });
})();

// src/app/booking/platform/dashboard/dashboard.component.ts
var _c0 = () => ({ tab: "payments" });
var _forTrack02 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.staff_id;
var _forTrack3 = ($index, $item) => $item.label;
function DashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_14_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, "In production");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.inProduction());
  }
}
function DashboardComponent_Conditional_14_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 15)(2, "h2", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 32);
    \u0275\u0275text(5, "Costs & profit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "div", 34)(8, "span", 35);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 36);
    \u0275\u0275text(12, "Income");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 37);
    \u0275\u0275text(14, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 34)(16, "span", 38);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 36);
    \u0275\u0275text(20, "Costs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 37);
    \u0275\u0275text(22, "=");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 39)(24, "span", 35);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 36);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Profit \xB7 ", ctx_r1.taxYear, " to date");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 9, ctx_r1.ytdIncome(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(18, 14, ctx_r1.ytdExpenses(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("pl__val--ok", ctx_r1.ytdProfit() >= 0)("pl__val--loss", ctx_r1.ytdProfit() < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(26, 19, ctx_r1.ytdProfit(), "EUR", "symbol", "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Profit \xB7 ", ctx_r1.margin(), "% margin");
  }
}
function DashboardComponent_Conditional_14_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.whoLabel(), " \xB7 ", \u0275\u0275pipeBind4(1, 2, ctx_r1.collected(), "EUR", "symbol", "1.0-0"), " received, by the date each payment arrived. ");
  }
}
function DashboardComponent_Conditional_14_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
    \u0275\u0275pipe(2, "currency");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.whoLabel(), " \xB7 ", \u0275\u0275pipeBind4(1, 3, ctx_r1.workGross(), "EUR", "symbol", "1.0-0"), " billed (gross) \xB7 ", \u0275\u0275pipeBind4(2, 8, ctx_r1.workNet(), "EUR", "symbol", "1.0-0"), " net of expenses, by the date the work happened. ");
  }
}
function DashboardComponent_Conditional_14_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_14_For_39_Template_button_click_0_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBreakdown(m_r4));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275element(5, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("chart__col--empty", m_r4.total <= 0);
    \u0275\u0275property("disabled", m_r4.total <= 0);
    \u0275\u0275attribute("aria-label", "Show what is behind " + m_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.total > 0 ? \u0275\u0275pipeBind4(3, 8, m_r4.total, "EUR", "symbol", "1.0-0") : "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", ctx_r1.barHeight(m_r4.total));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.label);
  }
}
function DashboardComponent_Conditional_14_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Nothing scheduled.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_14_Conditional_51_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 45)(1, "div", 46)(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "div", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 51);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 52);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_15_0;
    const b_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 10, b_r5.start_at, "d"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 13, b_r5.start_at, "MMM"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_14_0 = b_r5.client_name) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 16, b_r5.start_at, "HH:mm"), " \xB7 ", (tmp_15_0 = b_r5.service_name) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : b_r5.title, "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill--unpaid", b_r5.payment_status === "unpaid")("pill--partial", b_r5.payment_status === "partial");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r5.payment_status === "paid" ? "Paid" : b_r5.payment_status === "partial" ? "Deposit" : b_r5.payment_status === "external" ? "Synced" : "Unpaid", " ");
  }
}
function DashboardComponent_Conditional_14_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 27);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_14_Conditional_51_For_2_Template, 16, 19, "li", 45, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.upcoming().slice(0, 6));
  }
}
function DashboardComponent_Conditional_14_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28)(1, "span");
    \u0275\u0275text(2, "Card payments are off \u2014 connect Stripe to let clients pay online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4, "Set up \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function DashboardComponent_Conditional_14_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "All clear \u2014 nothing waiting on you.");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_14_Conditional_58_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 60)(9, "button", 61);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_14_Conditional_58_For_6_Template_button_click_9_listener() {
      const b_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approve(b_r7));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 62);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_14_Conditional_58_For_6_Template_button_click_11_listener() {
      const b_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.decline(b_r7));
    });
    \u0275\u0275text(12, "Decline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const b_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = b_r7.client_name) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 6, b_r7.start_at, "EEE d MMM, HH:mm"), " \xB7 ", \u0275\u0275pipeBind4(7, 9, b_r7.price_total, "EUR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.busyId() === b_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.busyId() === b_r7.id ? "\u2026" : "Confirm", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busyId() === b_r7.id);
  }
}
function DashboardComponent_Conditional_14_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 54);
    \u0275\u0275text(2, "Bookings to confirm ");
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, DashboardComponent_Conditional_14_Conditional_58_For_6_Template, 13, 14, "div", 56, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.requests().length);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.requests());
  }
}
function DashboardComponent_Conditional_14_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5, "Review \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(3, 1, ctx_r1.outstanding(), "EUR", "symbol", "1.0-0"), " outstanding across issued invoices");
  }
}
function DashboardComponent_Conditional_14_Conditional_60_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const w_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = w_r8.staff_name) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "Unassigned");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind4(6, 3, w_r8.cash, "EUR", "symbol", "1.0-0"), " received \xB7 ", \u0275\u0275pipeBind4(7, 8, w_r8.gross, "EUR", "symbol", "1.0-0"), " billed");
  }
}
function DashboardComponent_Conditional_14_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 54);
    \u0275\u0275text(2, "Earnings by worker");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, DashboardComponent_Conditional_14_Conditional_60_For_4_Template, 8, 13, "div", 56, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.byWorker());
  }
}
function DashboardComponent_Conditional_14_Conditional_61_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const \u0275$index_292_r10 = ctx.$index;
    const \u0275$count_292_r11 = ctx.$count;
    \u0275\u0275textInterpolate3(" ", s_r9.n, " ", s_r9.label.toLowerCase(), "", \u0275$index_292_r10 === \u0275$count_292_r11 - 1 ? "" : " \xB7 ", " ");
  }
}
function DashboardComponent_Conditional_14_Conditional_61_ForEmpty_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " nothing in production ");
  }
}
function DashboardComponent_Conditional_14_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31)(1, "span");
    \u0275\u0275repeaterCreate(2, DashboardComponent_Conditional_14_Conditional_61_For_3_Template, 1, 3, null, null, _forTrack3, false, DashboardComponent_Conditional_14_Conditional_61_ForEmpty_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6, "Work board \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.stageCounts());
  }
}
function DashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5, "Upcoming \xB7 30 days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 12);
    \u0275\u0275text(11, "Collected");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275text(17, "Outstanding");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "span", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 12);
    \u0275\u0275text(22, "To confirm");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, DashboardComponent_Conditional_14_Conditional_23_Template, 5, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, DashboardComponent_Conditional_14_Conditional_24_Template, 29, 24, "section", 13);
    \u0275\u0275elementStart(25, "section", 14)(26, "div", 15)(27, "h2", 16);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 17)(30, "button", 18);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_14_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.basis.set("cash"));
    });
    \u0275\u0275text(31, "Cash received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 18);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_14_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.basis.set("work"));
    });
    \u0275\u0275text(33, "Work done");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "p", 19);
    \u0275\u0275template(35, DashboardComponent_Conditional_14_Conditional_35_Template, 2, 7)(36, DashboardComponent_Conditional_14_Conditional_36_Template, 3, 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 20);
    \u0275\u0275repeaterCreate(38, DashboardComponent_Conditional_14_For_39_Template, 8, 13, "button", 21, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 22);
    \u0275\u0275text(41, "Tap a month to see every invoice and charge behind it.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "app-earnings-breakdown", 23);
    \u0275\u0275twoWayListener("openChange", function DashboardComponent_Conditional_14_Template_app_earnings_breakdown_openChange_42_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.breakdownOpen, $event) || (ctx_r1.breakdownOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 24)(44, "section", 25)(45, "div", 15)(46, "h2", 16);
    \u0275\u0275text(47, "Upcoming bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "a", 26);
    \u0275\u0275text(49, "All");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, DashboardComponent_Conditional_14_Conditional_50_Template, 2, 0, "p", 19)(51, DashboardComponent_Conditional_14_Conditional_51_Template, 3, 0, "ul", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "section", 25)(53, "div", 15)(54, "h2", 16);
    \u0275\u0275text(55, "Needs your attention");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, DashboardComponent_Conditional_14_Conditional_56_Template, 5, 2, "a", 28)(57, DashboardComponent_Conditional_14_Conditional_57_Template, 2, 0, "p", 19)(58, DashboardComponent_Conditional_14_Conditional_58_Template, 7, 1, "div", 29)(59, DashboardComponent_Conditional_14_Conditional_59_Template, 6, 6, "a", 30)(60, DashboardComponent_Conditional_14_Conditional_60_Template, 5, 0, "div", 29)(61, DashboardComponent_Conditional_14_Conditional_61_Template, 7, 1, "a", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.upcoming30());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 29, ctx_r1.collected(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("kpi--warn", ctx_r1.outstanding() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 34, ctx_r1.outstanding(), "EUR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("kpi--accent", ctx_r1.requests().length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.requests().length);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.workEnabled() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasExpenses() ? 24 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.chartTitle());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg__btn--active", ctx_r1.basis() === "cash");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg__btn--active", ctx_r1.basis() === "work");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.basis() === "cash" ? 35 : 36);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.revenueByMonth());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("open", ctx_r1.breakdownOpen);
    \u0275\u0275property("month", ctx_r1.openMonth())("basis", ctx_r1.basis())("orgId", ctx_r1.auth.orgId())("staffId", ctx_r1.who() || null)("whoLabel", ctx_r1.whoLabel());
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.upcoming().length === 0 ? 50 : 51);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.cardSetupNeeded() ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requests().length === 0 && ctx_r1.outstanding() === 0 && !ctx_r1.cardSetupNeeded() ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requests().length > 0 ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.outstanding() > 0 ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showWorkerSplit() ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.workEnabled() && ctx_r1.inProduction() > 0 ? 61 : -1);
  }
}
var DashboardComponent = class _DashboardComponent {
  /** A month with nothing in it has nothing to show, so it is not clickable. */
  openBreakdown(month) {
    if (month.total <= 0)
      return;
    this.openMonth.set(month.key);
    this.breakdownOpen.set(true);
  }
  constructor() {
    this.data = inject(BookingDataService);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.cardPaymentsReady = signal(void 0);
    this.cardSetupNeeded = computed(() => this.cardPaymentsReady() === false);
    this.jobs = signal([]);
    this.tasks = signal([]);
    this.busyId = signal(null);
    this.earnings = signal(null);
    this.staff = signal([]);
    this.who = computed(() => this.auth.staffId() ?? "");
    this.basis = signal("cash");
    this.profit = signal(null);
    this.taxYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.ytdIncome = computed(() => this.profit()?.totals.income ?? 0);
    this.ytdExpenses = computed(() => this.profit()?.totals.expenses ?? 0);
    this.ytdProfit = computed(() => this.profit()?.totals.profit ?? 0);
    this.hasExpenses = computed(() => this.ytdExpenses() > 0);
    this.margin = computed(() => {
      const inc = this.ytdIncome();
      return inc > 0 ? Math.round(this.ytdProfit() / inc * 100) : 0;
    });
    this.CONFIRMED = ["booked", "in_progress", "done"];
    this.confirmed = computed(() => this.data.bookings().filter((b) => this.CONFIRMED.includes(b.status) && !b.is_external));
    this.now = /* @__PURE__ */ new Date();
    this.greeting = (() => {
      const h = (/* @__PURE__ */ new Date()).getHours();
      return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
    })();
    this.requests = computed(() => this.data.bookings().filter((b) => b.status === "pending"));
    this.upcoming = computed(() => {
      const now = Date.now();
      return this.confirmed().filter((b) => new Date(b.start_at).getTime() >= now).sort((a, b) => new Date(a.start_at).getTime() - new Date(b.start_at).getTime());
    });
    this.upcoming30 = computed(() => {
      const limit = Date.now() + 30 * 864e5;
      return this.upcoming().filter((b) => new Date(b.start_at).getTime() <= limit).length;
    });
    this.collected = computed(() => this.earnings()?.totals.cash ?? 0);
    this.outstanding = computed(() => this.earnings()?.totals.outstanding ?? 0);
    this.workGross = computed(() => this.earnings()?.totals.work_done_gross ?? 0);
    this.workNet = computed(() => this.earnings()?.totals.work_done_net ?? 0);
    this.whoLabel = computed(() => {
      const id = this.who();
      return id ? this.staff().find((s) => s.id === id)?.name ?? "Worker" : "Everyone";
    });
    this.chartTitle = computed(() => this.basis() === "cash" ? "Cash received \xB7 last 6 months" : "Work done \xB7 last 6 months");
    this.revenueByMonth = computed(() => {
      const e = this.earnings();
      const src = !e ? [] : this.basis() === "cash" ? e.cash_by_month : e.work_done_by_month;
      const map = new Map(src.map((m) => [m.month, Number(m.amount)]));
      const ref = /* @__PURE__ */ new Date();
      return Array.from({ length: 6 }, (_, i) => {
        const d = new Date(ref.getFullYear(), ref.getMonth() - (5 - i), 1);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
        return { key, label: d.toLocaleDateString("en", { month: "short" }), total: map.get(key) ?? 0 };
      });
    });
    this.maxMonth = computed(() => Math.max(1, ...this.revenueByMonth().map((m) => m.total)));
    this.openMonth = signal(null);
    this.breakdownOpen = signal(false);
    this.byWorker = computed(() => this.earnings()?.by_worker ?? []);
    this.showWorkerSplit = computed(() => !this.who() && this.byWorker().length > 1);
    this.stages = signal([]);
    this.doneKeys = computed(() => new Set(this.stages().filter((s) => s.is_done).map((s) => s.key)));
    this.inProduction = computed(() => this.jobs().filter((j) => !this.doneKeys().has(j.production_status)).length);
    this.openTasks = computed(() => this.tasks().filter((t) => !t.is_done).length);
    this.stageCounts = computed(() => {
      const counts = /* @__PURE__ */ new Map();
      for (const j of this.jobs())
        counts.set(j.production_status, (counts.get(j.production_status) ?? 0) + 1);
      return this.stages().filter((s) => !s.is_done).map((s) => ({ label: s.label, n: counts.get(s.key) ?? 0 })).filter((x) => x.n > 0);
    });
    this.workEnabled = computed(() => !!this.auth.features().work_board);
    effect(() => {
      this.auth.staffId();
      void this.loadEarnings();
      void this.loadProfit();
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (org) {
        this.staff.set(yield this.admin.listStaff(org));
        const st = yield this.admin.getOrgSettings(org);
        this.cardPaymentsReady.set(!!(st?.stripe_charges_enabled || st?.platform_charges_allowed));
      }
      yield Promise.all([this.loadProduction(), this.loadEarnings(), this.loadProfit()]);
    });
  }
  loadProduction() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      const [jobs, tasks, stages] = yield Promise.all([
        this.admin.loadJobs(org),
        this.admin.loadTasks(org),
        this.admin.listWorkStages(org)
      ]);
      this.jobs.set(jobs);
      this.tasks.set(tasks);
      this.stages.set(stages);
    });
  }
  /** Re-read the money whenever the "who" filter changes. The basis toggle needs no
   *  refetch — both bases come back in the same response. */
  loadEarnings() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      this.earnings.set(yield this.data.getEarnings(org, this.who() || null));
    });
  }
  /** Year to date, org-wide. */
  loadProfit() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org)
        return;
      const y = this.taxYear;
      this.profit.set(yield this.data.getProfit(org, `${y}-01-01`, `${y}-12-31`));
    });
  }
  barHeight(total) {
    return `${Math.round(total / this.maxMonth() * 100)}%`;
  }
  approve(b) {
    return __async(this, null, function* () {
      this.busyId.set(b.id);
      try {
        const res = yield this.data.approveRequest(b.id);
        if (res.error === "slot_taken")
          this.toast.error(`${b.booking_ref}: that slot was just taken \u2014 decline this one.`);
        else if (res.error)
          this.toast.error(`Could not approve ${b.booking_ref}.`);
        else {
          this.toast.success(`${b.booking_ref} approved \u2014 added to your calendar`);
          yield this.loadProduction();
          yield this.loadEarnings();
        }
      } catch {
        this.toast.error(`Could not approve ${b.booking_ref}. Please try again.`);
      } finally {
        this.busyId.set(null);
      }
    });
  }
  decline(b) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.ask({ title: "Decline request", message: `Decline ${b.booking_ref}?`, confirmLabel: "Decline", danger: true })))
        return;
      this.busyId.set(b.id);
      try {
        const res = yield this.data.declineRequest(b.id);
        if (res.calendarCleared)
          this.toast.info(`${b.booking_ref} declined`);
        else
          this.toast.error(`${b.booking_ref} declined, but its Google Calendar event could NOT be removed: check the calendar connection.`);
      } catch {
        this.toast.error(`Could not decline ${b.booking_ref}.`);
      } finally {
        this.busyId.set(null);
      }
    });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 15, vars: 6, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], ["routerLink", "/bookings/list", 1, "btn", "btn--ghost"], ["routerLink", "/bookings/new", 1, "btn", "btn--primary"], [1, "loading"], [1, "spinner"], [1, "kpis"], [1, "kpi"], [1, "kpi__value"], [1, "kpi__label"], [1, "card", "pl"], [1, "card", "chart"], [1, "card__head"], [1, "card__title"], [1, "seg"], [1, "seg__btn", 3, "click"], [1, "empty-line"], [1, "chart__bars"], ["type", "button", 1, "chart__col", 3, "chart__col--empty", "disabled"], [1, "chart__hint"], [3, "openChange", "open", "month", "basis", "orgId", "staffId", "whoLabel"], [1, "grid"], [1, "card"], ["routerLink", "/bookings/list", 1, "card__link"], [1, "list"], ["routerLink", "/bookings/settings", 1, "attn-line", "attn-line--warn", 3, "queryParams"], [1, "attn"], ["routerLink", "/bookings/invoices", 1, "attn-line"], ["routerLink", "/bookings/work", 1, "attn-line"], ["routerLink", "/bookings/expenses", 1, "card__link"], [1, "pl__row"], [1, "pl__stat"], [1, "pl__val"], [1, "pl__label"], [1, "pl__op"], [1, "pl__val", "pl__val--cost"], [1, "pl__stat", "pl__stat--hero"], ["type", "button", 1, "chart__col", 3, "click", "disabled"], [1, "chart__amount"], [1, "chart__track"], [1, "chart__bar"], [1, "chart__label"], [1, "row"], [1, "row__date"], [1, "row__day"], [1, "row__mon"], [1, "row__main"], [1, "row__who"], [1, "row__meta"], [1, "pill"], [1, "attn-line__cta"], [1, "attn__head"], [1, "attn__count"], [1, "req"], [1, "req__main"], [1, "req__who"], [1, "req__meta"], [1, "req__actions"], [1, "btn", "btn--sm", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--sm", "btn--ghost", 3, "click", "disabled"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "a", 5);
        \u0275\u0275text(10, "All bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 6);
        \u0275\u0275text(12, "+ New booking");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(13, DashboardComponent_Conditional_13_Template, 2, 0, "div", 7)(14, DashboardComponent_Conditional_14_Template, 62, 39);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.greeting);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, ctx.now, "EEEE, d MMMM y"));
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.data.loading() ? 13 : 14);
      }
    }, dependencies: [RouterLink, CurrencyPipe, DatePipe, EarningsBreakdownComponent], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  padding: 36px 48px;\n}\n@media (max-width: 900px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n.kpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 18px 22px;\n}\n.kpi__value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.kpi__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 6px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.kpi--warn[_ngcontent-%COMP%]   .kpi__value[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.kpi--accent[_ngcontent-%COMP%] {\n  border-color: #F4A922;\n}\n.kpi--accent[_ngcontent-%COMP%]   .kpi__value[_ngcontent-%COMP%] {\n  color: #F4A922;\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px 22px;\n  margin-bottom: 24px;\n}\n.card__head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.card__link[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  text-decoration: none;\n}\n.card__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.who-select[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  color: #475569;\n  background: #ffffff;\n  cursor: pointer;\n}\n.who-select[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.who-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.seg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n  padding: 3px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.seg__btn[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.seg__btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.seg__btn--active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f172a;\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);\n}\n.chart__bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  height: 160px;\n}\n.chart__col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n.chart__amount[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #475569;\n  height: 16px;\n}\n.chart__track[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  max-width: 46px;\n  display: flex;\n  align-items: flex-end;\n  margin: 4px 0 8px;\n}\n.chart__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2px;\n  background:\n    linear-gradient(\n      to top,\n      #F4A922,\n      #f7bb4d);\n  border-radius: 6px 6px 0 0;\n  transition: height 0.15s ease;\n}\n.chart__label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 860px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.empty-line[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 4px 0;\n}\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 11px 0;\n}\n.row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n}\n.row__date[_ngcontent-%COMP%] {\n  width: 42px;\n  flex-shrink: 0;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.row__day[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.row__mon[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n.row__main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.row__who[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.row__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 1px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pill[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #dcfce7;\n  color: #16a34a;\n}\n.pill--partial[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.pill--unpaid[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.attn[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.attn__head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.attn__count[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n  font-size: 11px;\n  font-weight: 700;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.req[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n}\n.req[_ngcontent-%COMP%]    + .req[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n}\n.req__main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.req__who[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.req__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n}\n.req__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.attn-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 14px;\n  margin-top: 10px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #475569;\n  text-decoration: none;\n}\n.attn-line[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.attn-line__cta[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #F4A922;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  border-color: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.92);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 7px 13px;\n  font-size: 12.5px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2.5px solid #e2e8f0;\n  border-top-color: #F4A922;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pl__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px 18px;\n}\n.pl__stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.pl__stat--hero[_ngcontent-%COMP%] {\n  margin-left: auto;\n  text-align: right;\n}\n@media (max-width: 620px) {\n  .pl__stat--hero[_ngcontent-%COMP%] {\n    margin-left: 0;\n    text-align: left;\n  }\n}\n.pl__val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n  font-variant-numeric: tabular-nums;\n}\n.pl__val--cost[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.pl__val--ok[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.pl__val--loss[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.pl__label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.pl__op[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #94a3b8;\n  align-self: center;\n}\n.attn-line--warn[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.1);\n  border-color: rgba(244, 169, 34, 0.45);\n  color: #92400e;\n}\n.attn-line--warn[_ngcontent-%COMP%]   .attn-line__cta[_ngcontent-%COMP%] {\n  color: #92400e;\n}\n.chart__col[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  background: none;\n  padding: 0;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n  border-radius: var(--radius-sm);\n  transition: background var(--transition);\n}\n.chart__col[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-bg-light);\n}\n.chart__col[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n.chart__col--empty[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n.chart__hint[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 0.78rem;\n  color: var(--color-text-light);\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/booking/platform/dashboard/dashboard.component.ts", lineNumber: 21 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-K72HMK45.js.map
