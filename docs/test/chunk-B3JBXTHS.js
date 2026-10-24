import {
  LineItemsEditorComponent
} from "./chunk-JQZQ2QE2.js";
import {
  ClientEditorComponent
} from "./chunk-NNEOTRPG.js";
import {
  InfoHintComponent
} from "./chunk-JJMBVONG.js";
import {
  AvailabilityPickerComponent
} from "./chunk-QBZYHEHB.js";
import "./chunk-YT6H6K5O.js";
import "./chunk-FBEN7ZXU.js";
import {
  BookingAdminService,
  GCAL_COLORS
} from "./chunk-RQDGKONB.js";
import {
  SelectComponent
} from "./chunk-XYER4DO7.js";
import "./chunk-PHEH44AJ.js";
import {
  BookingDataService
} from "./chunk-ZIMQU4LA.js";
import {
  ToastService
} from "./chunk-VP2YFPLJ.js";
import {
  BookingsAuthService
} from "./chunk-AO4LSMG5.js";
import "./chunk-ZOUD65KM.js";
import "./chunk-DEXNZGWM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-PLONONHM.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-CPWNAP4Z.js";
import "./chunk-H276UI7Q.js";
import "./chunk-KKVK7E5Z.js";
import "./chunk-VUFO6QBK.js";
import {
  CurrencyPipe,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
} from "./chunk-VEX6DIAJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/core/utils/booking-title.util.ts
var SAYS_NOTHING = /* @__PURE__ */ new Set([
  "custom",
  "custom charge",
  "charge",
  "charges",
  "extra",
  "extras",
  "misc",
  "miscellaneous",
  "other",
  "fee",
  "fees",
  "service",
  "services",
  "work",
  "deposit",
  "balance",
  "payment",
  "discount",
  "adjustment",
  "tbc",
  "n/a"
]);
var QUANTITY_TAIL = /\s*[—–-]\s*\d+(\.\d+)?\s*(hours?|hrs?|h)\s*$|\s*\(\s*\d+(\.\d+)?\s*h\s*\)\s*$/i;
var LEGAL_TAIL = /\s*[,.]?\s*\b(ltd|ltd\.|limited|plc|llc|inc|inc\.)\s*$/i;
var tidy = (v) => (v ?? "").replace(/\s+/g, " ").trim();
function cleanWork(raw) {
  const v = tidy(raw).replace(QUANTITY_TAIL, "").trim();
  if (v.length < 3)
    return null;
  if (SAYS_NOTHING.has(v.toLowerCase()))
    return null;
  if (/^[\d\s.,€$£-]+$/.test(v))
    return null;
  return v;
}
function cleanPlace(raw) {
  const v = tidy(raw).split(",")[0].trim();
  return v.length >= 2 ? v : null;
}
function cleanClient(raw) {
  const v = tidy(raw).replace(LEGAL_TAIL, "").trim();
  return v.length >= 2 ? v : null;
}
var mentions = (haystack, needle) => haystack.toLowerCase().includes(needle.toLowerCase());
function suggestBookingTitle(src) {
  const work = cleanWork(src.work);
  if (!work)
    return "";
  const place = cleanPlace(src.location);
  if (place)
    return mentions(work, place) ? work : `${work} at ${place}`;
  const who = cleanClient(src.client);
  if (who && !mentions(work, who))
    return `${work} for ${who}`;
  return work;
}

// src/app/booking/platform/bookings/booking-form/booking-form.component.ts
var _c0 = (a0) => ["/bookings", a0];
var _forTrack0 = ($index, $item) => $item.iso;
function BookingFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "\u2026or just the invoice on its own:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18)(3, "input", 19);
    \u0275\u0275listener("focus", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template_input_focus_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.copyInvoiceLink());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.invoiceLink);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.copied() === "invoice" ? "\u2713 Copied" : "Copy", " ");
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "input", 19);
    \u0275\u0275listener("focus", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template_input_focus_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 20);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.copyLink());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Conditional_4_Template, 6, 2);
  }
  if (rf & 2) {
    const done_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", done_r5.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.copied() === "pay" ? "\u2713 Copied" : "Copy", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.invoiceLink ? 4 : -1);
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "Booking saved, but the client link couldn\u2019t be generated. You can copy it from the bookings list.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6, "The slot is reserved. Send your client their link:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BookingFormComponent_Conditional_11_Conditional_0_Conditional_7_Template, 5, 3)(8, BookingFormComponent_Conditional_11_Conditional_0_Conditional_8_Template, 2, 0, "p", 12);
    \u0275\u0275elementStart(9, "div", 13)(10, "a", 14);
    \u0275\u0275text(11, "\u2B07 Download invoice (PDF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 14);
    \u0275\u0275text(13, "\u{1F5A8} Print invoice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "button", 16);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reset());
    });
    \u0275\u0275text(16, "Create another");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 16);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_11_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToList());
    });
    \u0275\u0275text(18, "All bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 17);
    \u0275\u0275text(20, "Open booking");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const done_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Booking ", done_r5.ref, " ", ctx_r2.isEditing ? "updated" : "created", "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(done_r5.link ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "/book/invoice/" + done_r5.id + "?auto=download", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/book/invoice/" + done_r5.id + "?auto=print", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, done_r5.id));
  }
}
function BookingFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingFormComponent_Conditional_11_Conditional_0_Template, 21, 8, "div", 8);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.created()) ? 0 : -1, tmp_1_0);
  }
}
function BookingFormComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, " Copied from ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". Everything carried over except the times \u2014 pick new time blocks below. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx);
  }
}
function BookingFormComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 57);
    \u0275\u0275text(2, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "span", 59);
    \u0275\u0275text(5, "Your own work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60);
    \u0275\u0275text(7, " Every block is post-production, so this becomes a task on the Work board with the time held on your calendar. Nobody is billed and no client link is made. Set a block back to ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Shoot");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " for a client job. ");
    \u0275\u0275elementEnd()()();
  }
}
function BookingFormComponent_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "For ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u2014 change the worker from the sidebar.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx);
  }
}
function BookingFormComponent_Conditional_12_Conditional_13_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "No VAT or billing address on this client \u2014 add them in Clients for a VAT-ready invoice.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "app-select", 66);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_13_Conditional_16_Template_app_select_changed_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.clientId = $event;
      return \u0275\u0275resetView(ctx_r2.syncTitle());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 67);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Conditional_13_Conditional_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openClientEditor());
    });
    \u0275\u0275text(3, "+ New");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, BookingFormComponent_Conditional_12_Conditional_13_Conditional_16_Conditional_4_Template, 2, 0, "span", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.clientId)("options", ctx_r2.clientOptions())("clearable", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selectedClient && !ctx_r2.selectedClient.vat_number && !ctx_r2.selectedClient.billing_address ? 4 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_13_Conditional_17_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.contactName, $event) || (ctx_r2.contactName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_13_Conditional_17_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.syncTitle());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.contactName);
  }
}
function BookingFormComponent_Conditional_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "label");
    \u0275\u0275text(3, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-info-hint", 61)(5, "strong");
    \u0275\u0275text(6, "Existing client");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " is a saved record with company, VAT and billing address, so the invoice is VAT-ready and you can reuse it. ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Just a name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " is a one-off, never saved, and bills to that name only. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 62)(12, "button", 63);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Conditional_13_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clientMode = "existing");
    });
    \u0275\u0275text(13, "Existing client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 63);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clientMode = "quick");
    });
    \u0275\u0275text(15, "Just a name");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, BookingFormComponent_Conditional_12_Conditional_13_Conditional_16_Template, 5, 4)(17, BookingFormComponent_Conditional_12_Conditional_13_Conditional_17_Template, 1, 1, "input", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("seg__btn--on", ctx_r2.clientMode === "existing");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg__btn--on", ctx_r2.clientMode === "quick");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.clientMode === "existing" ? 16 : 17);
  }
}
function BookingFormComponent_Conditional_12_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "No bookable workers yet \u2014 add one in Staff.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "label");
    \u0275\u0275text(3, "Worker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "app-select", 69);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_14_Template_app_select_changed_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.staffId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BookingFormComponent_Conditional_12_Conditional_14_Conditional_5_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.staffId)("options", ctx_r2.workerOptions());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.workers.length === 0 ? 5 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Pick a worker first to see their calendar.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_35_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r11.label);
  }
}
function BookingFormComponent_Conditional_12_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 70)(1, "span", 71);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BookingFormComponent_Conditional_12_Conditional_35_For_2_Conditional_5_Template, 2, 1, "span", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r11.timeLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r11.label ? 5 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 37);
    \u0275\u0275repeaterCreate(1, BookingFormComponent_Conditional_12_Conditional_35_For_2_Template, 6, 2, "li", 70, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedSlots);
  }
}
function BookingFormComponent_Conditional_12_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Tap a start and an end time on the worker's calendar.");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_37_Conditional_27_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "label", 82);
    \u0275\u0275text(3, "Deposit %");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_37_Conditional_27_Conditional_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.depositPercent, $event) || (ctx_r2.depositPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.depositPercent);
  }
}
function BookingFormComponent_Conditional_12_Conditional_37_Conditional_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1, " Client pays ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(4, 2, ctx_r2.priceTotal * ctx_r2.depositPercent / 100, "EUR", "symbol", "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" now, ", \u0275\u0275pipeBind4(6, 7, ctx_r2.priceTotal * (100 - ctx_r2.depositPercent) / 100, "EUR", "symbol", "1.0-2"), " later. ");
  }
}
function BookingFormComponent_Conditional_12_Conditional_37_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 29)(2, "div", 30)(3, "label");
    \u0275\u0275text(4, "Deposit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-info-hint", 80);
    \u0275\u0275text(6, " Prefilled from your organisation default. Changing it here affects this booking only. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "app-select", 78);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_37_Conditional_27_Template_app_select_changed_7_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.depositMode = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, BookingFormComponent_Conditional_12_Conditional_37_Conditional_27_Conditional_8_Template, 5, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BookingFormComponent_Conditional_12_Conditional_37_Conditional_27_Conditional_9_Template, 7, 12, "p", 81);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r2.depositMode)("options", ctx_r2.depositModeOptions)("searchable", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.depositMode === "deposit" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.depositMode === "deposit" && ctx_r2.priceTotal > 0 ? 9 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 26)(1, "h2", 27);
    \u0275\u0275text(2, "Charges & payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 30)(5, "label");
    \u0275\u0275text(6, "Charges ");
    \u0275\u0275elementStart(7, "span", 74);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "app-info-hint", 75);
    \u0275\u0275text(10, " Pick one of your services (and how many hours) to pre-fill a line, or add a custom one. The total here is what the client pays, and it becomes the invoice. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-line-items-editor", 76);
    \u0275\u0275listener("itemsChange", function BookingFormComponent_Conditional_12_Conditional_37_Template_app_line_items_editor_itemsChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onItemsChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 29)(13, "div", 30)(14, "label");
    \u0275\u0275text(15, "Payment options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "app-info-hint", 77)(17, "strong");
    \u0275\u0275text(18, "Card or pay later");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " \u2014 the client pays by card now, or asks to pay later and you approve that request. ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "Card only");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " \u2014 they must pay to confirm. ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24, "Pay later only");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " \u2014 no online payment; they confirm and agree to pay by cash, Revolut or bank, and it books straight away. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "app-select", 78);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_37_Template_app_select_changed_26_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.paymentMode = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, BookingFormComponent_Conditional_12_Conditional_37_Conditional_27_Template, 10, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("items", ctx_r2.lineItems)("currency", ctx_r2.currency())("services", ctx_r2.services());
    \u0275\u0275advance(15);
    \u0275\u0275property("value", ctx_r2.paymentMode)("options", ctx_r2.paymentModeOptions)("searchable", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.paymentMode !== "later" ? 27 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_41_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "label", 41)(2, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_41_Conditional_0_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.confirmed, $event) || (ctx_r2.confirmed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "This booking is already confirmed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "app-info-hint", 85);
    \u0275\u0275text(6, " Leave it off to send this as a ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "request");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ": the slot is held, the client sees their invoice and can pay or ask to pay later, and it lands in your ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "To confirm");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " list. Turn it on if it is already agreed \u2014 it goes into Google Calendar now and the client just gets the invoice. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.confirmed);
  }
}
function BookingFormComponent_Conditional_12_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BookingFormComponent_Conditional_12_Conditional_41_Conditional_0_Template, 13, 1, "div", 40);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r2.isWorkOnly ? 0 : -1);
  }
}
function BookingFormComponent_Conditional_12_Conditional_42_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.workBlocks.length, " block", ctx_r2.workBlocks.length > 1 ? "s" : "", " reserved");
  }
}
function BookingFormComponent_Conditional_12_Conditional_42_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1, "no time reserved yet");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_12_Conditional_42_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " This job already has a ticket. Mark a time block as ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "Post-production");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " and it becomes that ticket's reserved time \u2014 blocked on the calendar, like a shoot. Clearing them all keeps the ticket, it just stops holding time. ");
  }
}
function BookingFormComponent_Conditional_12_Conditional_42_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " This is the task itself. The time you marked is reserved on your calendar and blocks other bookings, exactly like a shoot does. ");
  }
}
function BookingFormComponent_Conditional_12_Conditional_42_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " A ticket is created with this job, holding the time you marked. That time is reserved on the calendar and blocks other bookings, like a shoot does. ");
  }
}
function BookingFormComponent_Conditional_12_Conditional_42_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 29)(1, "span");
    \u0275\u0275text(2, "What needs doing?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_42_Conditional_11_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.workTitle, $event) || (ctx_r2.workTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.workTitle);
    \u0275\u0275property("placeholder", ctx_r2.title.trim() || "Same as the job title");
  }
}
function BookingFormComponent_Conditional_12_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 86)(2, "span", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BookingFormComponent_Conditional_12_Conditional_42_Conditional_4_Template, 2, 2, "span", 88)(5, BookingFormComponent_Conditional_12_Conditional_42_Conditional_5_Template, 2, 0, "span", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 89);
    \u0275\u0275template(7, BookingFormComponent_Conditional_12_Conditional_42_Conditional_7_Template, 4, 0)(8, BookingFormComponent_Conditional_12_Conditional_42_Conditional_8_Template, 1, 0)(9, BookingFormComponent_Conditional_12_Conditional_42_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 90);
    \u0275\u0275template(11, BookingFormComponent_Conditional_12_Conditional_42_Conditional_11_Template, 4, 2, "label", 29);
    \u0275\u0275elementStart(12, "label", 29)(13, "span");
    \u0275\u0275text(14, "Type of work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-select", 91);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_42_Template_app_select_changed_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.workType = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label", 29)(17, "span");
    \u0275\u0275text(18, "Who edits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "app-select", 92);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_42_Template_app_select_changed_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.workAssignee = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "label", 29)(21, "span");
    \u0275\u0275text(22, "Deliver by ");
    \u0275\u0275elementStart(23, "em");
    \u0275\u0275text(24, "optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_42_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.workDue, $event) || (ctx_r2.workDue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "label", 29)(27, "span");
    \u0275\u0275text(28, "Details ");
    \u0275\u0275elementStart(29, "em");
    \u0275\u0275text(30, "optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "textarea", 94);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Conditional_42_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.workDescription, $event) || (ctx_r2.workDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isWorkOnly ? "About this work" : "Post-production");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.workBlocks.length ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.existingWorkItemId() ? 7 : ctx_r2.isWorkOnly ? 8 : 9);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.isWorkOnly ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.workType)("options", ctx_r2.workTypeOptions())("clearable", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.workAssignee)("options", ctx_r2.workerOptions())("placeholder", ctx_r2.shooterName() || "Whoever shoots")("clearable", true);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.workDue);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.workDescription);
  }
}
function BookingFormComponent_Conditional_12_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "label");
    \u0275\u0275text(3, "Colour on your calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-info-hint", 96);
    \u0275\u0275text(5, " Google has eleven fixed event colours, so this offers exactly what it will actually show. Post-production has its own colour per board stage \u2014 yellow to start with \u2014 so editing time is distinguishable from a shoot without reading the titles. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-select", 78);
    \u0275\u0275listener("changed", function BookingFormComponent_Conditional_12_Conditional_43_Template_app_select_changed_6_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.calendarColorId = $event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.calendarColorId)("options", ctx_r2.colorOptions())("searchable", false);
  }
}
function BookingFormComponent_Conditional_12_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg());
  }
}
function BookingFormComponent_Conditional_12_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.blockedReason);
  }
}
function BookingFormComponent_Conditional_12_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-availability-picker", 97);
    \u0275\u0275listener("slotsChange", function BookingFormComponent_Conditional_12_Conditional_69_Template_app_availability_picker_slotsChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSlotsChanged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("staffId", ctx_r2.staffId)("timezone", ctx_r2.orgTimezone())("initialSlots", ctx_r2.prefillSlots)("excludeBookingId", (tmp_5_0 = ctx_r2.editingId()) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "");
  }
}
function BookingFormComponent_Conditional_12_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 98);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Pick a worker to see their calendar and choose a free time.");
    \u0275\u0275elementEnd()();
  }
}
function BookingFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "form", 23);
    \u0275\u0275listener("ngSubmit", function BookingFormComponent_Conditional_12_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275template(2, BookingFormComponent_Conditional_12_Conditional_2_Template, 5, 1, "p", 24)(3, BookingFormComponent_Conditional_12_Conditional_3_Template, 11, 0, "div", 25);
    \u0275\u0275elementStart(4, "section", 26)(5, "h2", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BookingFormComponent_Conditional_12_Conditional_7_Template, 5, 1, "p", 28);
    \u0275\u0275elementStart(8, "div", 29)(9, "div", 30)(10, "label", 31);
    \u0275\u0275text(11, "Title");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 32);
    \u0275\u0275listener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTitleInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, BookingFormComponent_Conditional_12_Conditional_13_Template, 18, 5, "div", 29)(14, BookingFormComponent_Conditional_12_Conditional_14_Template, 6, 3, "div", 29);
    \u0275\u0275elementStart(15, "div", 29)(16, "div", 30)(17, "label", 33);
    \u0275\u0275text(18, "Location ");
    \u0275\u0275elementStart(19, "span", 34);
    \u0275\u0275text(20, "optional");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.location, $event) || (ctx_r2.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.syncTitle());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "section", 26)(23, "h2", 27);
    \u0275\u0275text(24, "Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 29)(26, "div", 30)(27, "label");
    \u0275\u0275text(28, "Time blocks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "app-info-hint", 36);
    \u0275\u0275text(30, " A job can span several blocks, even across different days \u2014 a planning call on one day and the shoot on another. Name each one and the calendar shows ");
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32, "\u201CPre-shoot planning\u201D");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " rather than two identical entries. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, BookingFormComponent_Conditional_12_Conditional_34_Template, 2, 0, "span", 28)(35, BookingFormComponent_Conditional_12_Conditional_35_Template, 3, 0, "ul", 37)(36, BookingFormComponent_Conditional_12_Conditional_36_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, BookingFormComponent_Conditional_12_Conditional_37_Template, 28, 7, "section", 26);
    \u0275\u0275elementStart(38, "section", 26)(39, "h2", 27);
    \u0275\u0275text(40, "Options");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, BookingFormComponent_Conditional_12_Conditional_41_Template, 1, 1)(42, BookingFormComponent_Conditional_12_Conditional_42_Template, 32, 13, "div", 39)(43, BookingFormComponent_Conditional_12_Conditional_43_Template, 7, 3, "div", 29);
    \u0275\u0275elementStart(44, "div", 40)(45, "label", 41)(46, "input", 42);
    \u0275\u0275listener("ngModelChange", function BookingFormComponent_Conditional_12_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.calendarDetail = $event ? "minimal" : "full");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Keep money off the calendar invite");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "app-info-hint", 43);
    \u0275\u0275text(50, " Turn this on if you will invite anyone else to the event \u2014 a second shooter, or the client. They would otherwise see the total, what has been paid, the progress stage and your private notes. The event still shows the brief, client and service. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 29)(52, "div", 30)(53, "label", 44);
    \u0275\u0275text(54, "Internal notes ");
    \u0275\u0275elementStart(55, "span", 34);
    \u0275\u0275text(56, "optional");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function BookingFormComponent_Conditional_12_Template_textarea_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.notes, $event) || (ctx_r2.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(58, BookingFormComponent_Conditional_12_Conditional_58_Template, 2, 1, "p", 46);
    \u0275\u0275elementStart(59, "div", 47);
    \u0275\u0275template(60, BookingFormComponent_Conditional_12_Conditional_60_Template, 2, 1, "span", 48);
    \u0275\u0275elementStart(61, "button", 49);
    \u0275\u0275listener("click", function BookingFormComponent_Conditional_12_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToList());
    });
    \u0275\u0275text(62, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 50);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "aside", 51)(66, "div", 52)(67, "h2", 53);
    \u0275\u0275text(68, "Worker availability");
    \u0275\u0275elementEnd();
    \u0275\u0275template(69, BookingFormComponent_Conditional_12_Conditional_69_Template, 1, 4, "app-availability-picker", 54)(70, BookingFormComponent_Conditional_12_Conditional_70_Template, 5, 0, "div", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "app-client-editor", 56);
    \u0275\u0275twoWayListener("openChange", function BookingFormComponent_Conditional_12_Template_app_client_editor_openChange_71_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.clientEditorOpen, $event) || (ctx_r2.clientEditorOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function BookingFormComponent_Conditional_12_Template_app_client_editor_saved_71_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClientCreated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.copiedFrom()) ? 2 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isWorkOnly ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isWorkOnly ? "The work" : "Job");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r2.scopedWorkerName()) ? 7 : -1, tmp_4_0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.title)("placeholder", ctx_r2.isWorkOnly ? "e.g. Edit the Prohealth interviews" : ctx_r2.suggestedTitle || "e.g. Interview filming \u2014 Clinica Joia");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isWorkOnly ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.scopedWorkerName() ? 14 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.location);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(!ctx_r2.staffId ? 34 : ctx_r2.selectedSlots.length ? 35 : 36);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.isWorkOnly ? 37 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.isEditing ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasWork || ctx_r2.existingWorkItemId() ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isWorkOnly ? 43 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.calendarDetail === "minimal");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.notes);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.errorMsg() ? 58 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.saving() && ctx_r2.blockedReason ? 60 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.canSubmit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.submitLabel, " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.staffId ? 69 : 70);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("open", ctx_r2.clientEditorOpen);
    \u0275\u0275property("client", null);
  }
}
var BookingFormComponent = class _BookingFormComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.data = inject(BookingDataService);
    this.editingRef = "";
    this.services = signal([]);
    this.staff = signal([]);
    this.loading = signal(true);
    this.saving = signal(false);
    this.errorMsg = signal("");
    this.editingId = signal(null);
    this.created = signal(null);
    this.copiedFrom = signal("");
    this.clientMode = "existing";
    this.clientId = "";
    this.contactName = "";
    this.clientEditorOpen = signal(false);
    this.staffId = "";
    this.selectedSlots = [];
    this.prefillSlots = [];
    this.orgTimezone = signal("Europe/Malta");
    this.currency = signal("EUR");
    this.lineItems = [];
    this.title = "";
    this.location = "";
    this.notes = "";
    this.paymentMode = "both";
    this.depositMode = "deposit";
    this.depositPercent = 30;
    this.workTitle = "";
    this.workType = "";
    this.workDue = "";
    this.workAssignee = "";
    this.workDescription = "";
    this.calendarColorId = "";
    this.colorOptions = computed(() => [
      { value: "", label: this.defaultColorLabel(), hint: "your usual colour for shoots" },
      ...GCAL_COLORS.map((c) => ({ value: c.id, label: c.name, color: c.hex }))
    ]);
    this.orgColorId = "9";
    this.existingWorkItemId = signal(null);
    this.titleTouched = false;
    this.calendarDetail = "full";
    this.confirmed = false;
    this.orgDefaults = { depositPercent: 30, depositAllowed: true };
    this.scopedWorkerName = computed(() => this.auth.activeStaff()?.name ?? "");
    this.workerOptions = computed(() => this.workers.map((w) => ({ value: w.id, label: w.name })));
    this.workTypes = signal([]);
    this.workTypeOptions = computed(() => this.workTypes().map((t) => ({ value: t.key, label: t.label })));
    this.shooterName = computed(() => this.workers.find((w) => w.id === this.staffId)?.name ?? "");
    this.clientOptions = computed(() => this.data.clients().map((c) => ({ value: c.id, label: c.name, hint: c.company ?? void 0 })));
    this.paymentModeOptions = [
      { value: "both", label: "Card or pay later", hint: "cash / Revolut / bank" },
      { value: "card", label: "Card only" },
      { value: "later", label: "Pay later only", hint: "client just confirms" }
    ];
    this.depositModeOptions = [
      { value: "deposit", label: "Allow a deposit" },
      { value: "full", label: "Require full payment" }
    ];
    this.copied = signal(null);
  }
  defaultColorLabel() {
    const c = GCAL_COLORS.find((x) => x.id === this.orgColorId);
    return c ? `Default (${c.name})` : "Default";
  }
  /** What the form would call this job, from what has been entered so far. '' when there
   *  is not enough to say anything useful. */
  get suggestedTitle() {
    return suggestBookingTitle({
      // The CHARGE carries the real work. This form always saves the booking with
      // service_id null — the service is picked per line item — so the booking's own
      // service field could never have supplied it. A line that names a service gives the
      // clean name outright; otherwise the description is used and its " — 2 hours" tail
      // is stripped by the util.
      work: (() => {
        const withService = this.lineItems.find((i) => i.serviceId && i.description.trim());
        if (withService) {
          return this.services().find((sv) => sv.id === withService.serviceId)?.name ?? withService.description;
        }
        return this.lineItems.find((i) => i.description.trim())?.description;
      })(),
      location: this.location,
      client: this.clientMode === "existing" ? this.data.clients().find((c) => c.id === this.clientId)?.name : this.contactName
    });
  }
  /** Called whenever something the title is built from changes. */
  syncTitle() {
    if (this.titleTouched)
      return;
    this.title = this.suggestedTitle;
  }
  onTitleInput(value) {
    this.title = value;
    this.titleTouched = value.trim().length > 0;
    if (!this.titleTouched)
      this.syncTitle();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (org) {
        const [services, staff, settings, workTypes] = yield Promise.all([
          this.admin.listServices(org),
          this.admin.listStaff(org),
          this.admin.getOrgSettings(org),
          this.admin.listWorkTypes(org)
        ]);
        this.services.set(services.filter((s) => s.is_active));
        this.staff.set(staff.filter((s) => s.is_bookable));
        this.workTypes.set(workTypes);
        this.orgDefaults = {
          depositPercent: settings?.booking_params?.deposit_percent ?? 30,
          depositAllowed: settings?.booking_params?.deposit_allowed ?? true
        };
        if (settings?.timezone)
          this.orgTimezone.set(settings.timezone);
        if (settings?.currency)
          this.currency.set(settings.currency);
        this.orgColorId = settings?.booking_params?.["booking_color_id"] ?? "9";
        this.depositPercent = this.orgDefaults.depositPercent;
        this.depositMode = this.orgDefaults.depositAllowed ? "deposit" : "full";
        if (this.auth.staffId())
          this.staffId = this.auth.staffId();
        const id = this.route.snapshot.paramMap.get("id");
        const cloneOf = this.route.snapshot.queryParamMap.get("from");
        if (id)
          yield this.loadForEdit(id);
        else if (cloneOf)
          yield this.loadForDuplicate(cloneOf);
      }
      this.loading.set(false);
    });
  }
  /** Everything that describes the WORK — not the booking's identity, and not its times.
   *  Shared by edit and duplicate so the two can never drift apart. */
  applyBookingFields(b) {
    if (b.client_id) {
      this.clientMode = "existing";
      this.clientId = b.client_id;
      this.contactName = "";
    } else if (b.contact_name) {
      this.clientMode = "quick";
      this.contactName = b.contact_name;
      this.clientId = "";
    }
    this.staffId = b.staff_id;
    this.title = b.title;
    this.titleTouched = !!b.title?.trim();
    this.calendarColorId = b.calendar_color_id ?? "";
    this.location = b.location ?? "";
    this.notes = b.notes ?? "";
    this.paymentMode = b.allow_card && b.allow_inperson ? "both" : b.allow_card ? "card" : "later";
    this.depositMode = b.deposit_allowed ?? this.orgDefaults.depositAllowed ? "deposit" : "full";
    this.depositPercent = b.deposit_percent ?? this.orgDefaults.depositPercent;
    this.calendarDetail = b.calendar_detail ?? "full";
  }
  /** The saved invoice breakdown, or a single line derived from the booking itself. */
  loadItems(id, b) {
    return __async(this, null, function* () {
      const items = yield this.data.getInvoiceItems(id);
      return items.length ? items : [{ description: b.description ?? b.title, amount: b.price_total }];
    });
  }
  loadForEdit(id) {
    return __async(this, null, function* () {
      const b = yield this.data.getBooking(id);
      if (!b) {
        this.errorMsg.set("Booking not found.");
        return;
      }
      this.editingId.set(id);
      this.editingRef = b.booking_ref;
      this.applyBookingFields(b);
      const shoot = (yield this.data.getBookingSlots(id)).map((sl) => __spreadProps(__spreadValues({}, sl), { kind: "shoot" }));
      const card = yield this.admin.workItemForBooking(id);
      this.existingWorkItemId.set(card?.id ?? null);
      let work = [];
      if (card) {
        work = (yield this.admin.getWorkSlots(card.id)).map((sl) => __spreadProps(__spreadValues({}, sl), { kind: "work" }));
        this.workTitle = card.title ?? "";
        this.workType = card.workType ?? "";
        this.workDue = card.dueAt ? card.dueAt.slice(0, 10) : "";
        this.workAssignee = card.assigneeId ?? "";
        this.workDescription = card.description ?? "";
      }
      this.prefillSlots = [...shoot, ...work];
      this.lineItems = yield this.loadItems(id, b);
    });
  }
  /**
   * Clone a job: same work, blank diary. Repeat bookings here are the same shoot for the
   * same client on a different day, so everything about WHAT the job is carries over and
   * nothing about WHEN it happens does.
   *
   * Deliberately NOT copied:
   *  - editingId / booking_ref — this is a new booking and earns its own number
   *  - time blocks — the whole point; the owner picks fresh ones
   *  - confirmed — stays off, so cloning can never silently push a calendar event
   *  - status, payments, invoice — a copy has been neither agreed nor paid for
   */
  loadForDuplicate(id) {
    return __async(this, null, function* () {
      const b = yield this.data.getBooking(id);
      if (!b) {
        this.errorMsg.set("Could not find the booking to copy from.");
        return;
      }
      this.applyBookingFields(b);
      this.lineItems = yield this.loadItems(id, b);
      this.copiedFrom.set(b.booking_ref);
    });
  }
  // ── Derived ─────────────────────────────────────────────────────────
  get isEditing() {
    return this.editingId() !== null;
  }
  /** Any bookable worker — availability is worker-based. */
  get workers() {
    return this.staff();
  }
  /** Booking total = sum of the line items (source of truth). */
  get priceTotal() {
    return this.lineItems.reduce((s, i) => s + (Number(i.amount) || 0), 0);
  }
  get selectedClient() {
    return this.data.clients().find((c) => c.id === this.clientId);
  }
  /** A customer is set when an existing client is picked, or a quick name is typed. */
  get hasCustomer() {
    return this.clientMode === "existing" ? !!this.clientId : this.contactName.trim().length > 0;
  }
  // ── Shoot vs post-production (§30) ──────────────────────────────────
  /** Blocks that belong to the BOOKING. The job's dates come from these alone, so an
   *  editing evening never stretches the shoot. */
  get shootBlocks() {
    return this.selectedSlots.filter((s) => s.kind !== "work");
  }
  /** Blocks that belong to the work TICKET. Still reserved, still blocking — they just
   *  answer a different question on the calendar. */
  get workBlocks() {
    return this.selectedSlots.filter((s) => s.kind === "work");
  }
  get hasWork() {
    return this.workBlocks.length > 0;
  }
  /**
   * Nothing but post-production time — your own work, with no client job behind it.
   *
   * This form then creates a WORK TASK and no booking at all. The two stay separate
   * records on purpose: a booking carries a reference, a price, a deposit and a
   * client-facing pay link, and giving every editing evening those would eventually mean
   * invoicing somebody for work they had already paid for. What is shared is this form —
   * which is the part that was actually annoying.
   */
  get isWorkOnly() {
    return !this.shootBlocks.length && this.hasWork;
  }
  /** The DB slots to persist (one row per chosen SHOOT block). */
  get slotsValue() {
    return this.shootBlocks.map((s) => ({
      start: s.iso,
      end: s.endIso,
      // `label` is the block's NAME; `timeLabel` is the derived "Mon 5 Oct · 08:00–09:00"
      // display string and must never be persisted.
      label: s.label?.trim() || null
    }));
  }
  // ── Change handlers ─────────────────────────────────────────────────
  // Charges (pricing) are decoupled from the calendar — editing items never touches the time blocks.
  onItemsChange(items) {
    this.lineItems = items;
    this.syncTitle();
  }
  // The picker clears its blocks (and emits []) when the worker changes, so no manual reset needed.
  onSlotsChanged(slots) {
    this.selectedSlots = slots;
  }
  // ── Client (reuses the full client editor — never a stub) ────────────
  openClientEditor() {
    this.clientEditorOpen.set(true);
  }
  onClientCreated(c) {
    this.clientMode = "existing";
    this.clientId = c.id;
  }
  // ── Submit ──────────────────────────────────────────────────────────
  get canSubmit() {
    const itemsOk = this.lineItems.length > 0 && this.lineItems.every((i) => i.description.trim().length > 0);
    if (this.isWorkOnly) {
      return !this.saving() && !!this.staffId && (this.title.trim().length > 0 || this.workTitle.trim().length > 0);
    }
    return !this.saving() && this.hasCustomer && !!this.staffId && this.shootBlocks.length > 0 && itemsOk && (this.title.trim().length > 0 || this.suggestedTitle.length > 0);
  }
  /** The first thing still missing, in the order the form asks for it. Empty when the
   *  booking is ready to save. Surfaced next to a disabled Create button so the reason is
   *  never off-screen — the time blocks in particular are picked far below it on a phone. */
  /** What pressing the button will actually make — said out loud, because this one form
   *  now produces two different things depending on what is in it. */
  get submitLabel() {
    if (this.saving())
      return "Saving\u2026";
    if (this.isEditing)
      return "Save changes";
    return this.isWorkOnly ? "Create work task" : "Create booking";
  }
  get blockedReason() {
    if (this.isWorkOnly) {
      if (!this.staffId)
        return "Pick who is doing it";
      if (!this.title.trim() && !this.workTitle.trim())
        return "Say what the work is";
      return "";
    }
    if (!this.hasCustomer)
      return "Pick a customer";
    if (!this.staffId)
      return "Pick a worker";
    if (!this.lineItems.length)
      return "Add a charge";
    if (this.lineItems.some((i) => !i.description.trim()))
      return "Describe each charge";
    if (!this.title.trim() && !this.suggestedTitle)
      return "Add a title";
    if (!this.shootBlocks.length)
      return "Pick a time block";
    return "";
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.canSubmit)
        return;
      const org = this.auth.orgId();
      if (!org) {
        this.errorMsg.set("No organization context.");
        return;
      }
      this.saving.set(true);
      this.errorMsg.set("");
      try {
        if (!this.isEditing && this.isWorkOnly) {
          yield this.createWorkOnly(org);
          return;
        }
        const items = this.lineItems.map((i) => __spreadValues(__spreadValues({
          description: i.description.trim(),
          amount: Number(i.amount) || 0
        }, i.serviceId ? { serviceId: i.serviceId } : {}), i.hours ? { hours: i.hours } : {}));
        const shared = {
          staffId: this.staffId,
          serviceId: null,
          clientId: this.clientMode === "existing" ? this.clientId : null,
          contactName: this.clientMode === "quick" ? this.contactName.trim() : null,
          title: this.title.trim() || this.suggestedTitle,
          description: items.map((i) => i.description).join("\n"),
          // client-facing summary on the pay page
          slots: this.slotsValue,
          priceTotal: this.priceTotal,
          allowCard: this.paymentMode !== "later",
          allowInperson: this.paymentMode !== "card",
          depositAllowed: this.depositMode === "deposit",
          depositPercent: this.depositPercent,
          // Legacy column: the form no longer offers it. A ticket exists because a block
          // says so, not because a flag was set.
          needsProduction: false,
          calendarDetail: this.calendarDetail,
          calendarColorId: this.calendarColorId || null,
          location: this.location.trim() || null,
          notes: this.notes.trim() || null
        };
        if (this.isEditing) {
          const res2 = yield this.data.updateBooking(this.editingId(), shared);
          if (res2.error) {
            this.errorMsg.set(this.errorText(res2.error));
            return;
          }
          yield this.data.saveInvoice(org, this.editingId(), { lineItems: items, notes: null, issueDate: null });
          const workNote = yield this.syncWorkOnEdit(org, this.editingId());
          if (workNote)
            this.toast.error(workNote, 9e3);
          else
            this.toast.success(`${this.editingRef || "Booking"} updated`);
          if (this.paymentMode !== "later") {
            const link2 = yield this.data.generateLink(this.editingId());
            this.created.set({ id: this.editingId(), ref: this.editingRef, link: link2 });
          } else {
            this.goToList();
          }
          return;
        }
        const res = yield this.data.createBooking(__spreadProps(__spreadValues({
          orgId: org
        }, shared), {
          confirmed: this.confirmed,
          // The post-production ticket, created in the SAME transaction as the booking —
          // the same way the invoice is created from the line items. Null when no block was
          // marked for it.
          work: this.hasWork ? {
            title: this.workTitle.trim() || this.title.trim(),
            description: this.workDescription.trim() || null,
            workType: this.workType || null,
            dueAt: this.workDue ? (/* @__PURE__ */ new Date(`${this.workDue}T12:00:00`)).toISOString() : null,
            assigneeId: this.workAssignee || null,
            slots: this.workBlocks.map((b) => ({
              start: b.iso,
              end: b.endIso,
              label: b.label?.trim() || null
            }))
          } : null
        }));
        if (res.error || !res.id) {
          this.errorMsg.set(this.errorText(res.error));
          return;
        }
        yield this.data.saveInvoice(org, res.id, { lineItems: items, notes: null, issueDate: null });
        if (this.confirmed)
          yield this.data.confirmToCalendar(res.id);
        if (this.hasWork) {
          const card = yield this.admin.workItemForBooking(res.id);
          if (card)
            this.admin.syncWorkEvent(card.id, []);
        }
        const link = yield this.data.generateLink(res.id);
        this.created.set({ id: res.id, ref: res.ref ?? "", link });
        this.toast.success(`Booking ${res.ref ?? ""} created`);
      } finally {
        this.saving.set(false);
      }
    });
  }
  errorText(error) {
    if (error === "slot_taken")
      return "That worker is already booked for that time. Pick another slot or worker.";
    return error ?? "Something went wrong. Please try again.";
  }
  /** Shareable invoice link (anon, token-based) — derived from the client link. */
  get invoiceLink() {
    const link = this.created()?.link;
    return link ? link.replace("/book/", "/book/invoice?token=") : null;
  }
  copyTo(text, which) {
    return __async(this, null, function* () {
      if (!text)
        return;
      try {
        yield navigator.clipboard.writeText(text);
        this.copied.set(which);
        setTimeout(() => {
          if (this.copied() === which)
            this.copied.set(null);
        }, 1600);
      } catch {
      }
    });
  }
  copyLink() {
    void this.copyTo(this.created()?.link, "pay");
  }
  copyInvoiceLink() {
    void this.copyTo(this.invoiceLink, "invoice");
  }
  reset() {
    this.editingId.set(null);
    this.clientMode = "existing";
    this.clientId = "";
    this.contactName = "";
    this.staffId = "";
    this.selectedSlots = [];
    this.prefillSlots = [];
    this.lineItems = [];
    this.title = "";
    this.titleTouched = false;
    this.location = "";
    this.notes = "";
    this.paymentMode = "both";
    this.depositMode = this.orgDefaults.depositAllowed ? "deposit" : "full";
    this.depositPercent = this.orgDefaults.depositPercent;
    this.calendarColorId = "";
    this.workTitle = "";
    this.workType = "";
    this.workDue = "";
    this.workAssignee = "";
    this.workDescription = "";
    this.calendarDetail = "full";
    this.confirmed = false;
    this.created.set(null);
    this.errorMsg.set("");
    this.copiedFrom.set("");
  }
  /**
   * Create or update the job's post-production ticket from the form, on the EDIT path.
   * Returns a message when something could not be done, '' when all is well.
   *
   * Removing every post-production block clears the ticket's reserved time but KEEPS the
   * ticket: the work still has to happen, you just have not said when any more. Deleting
   * it would silently throw away its brief, its checklist and its place on the board.
   */
  syncWorkOnEdit(org, bookingId) {
    return __async(this, null, function* () {
      const blocks = this.workBlocks;
      let itemId = this.existingWorkItemId();
      if (!itemId && !blocks.length)
        return "";
      if (!itemId) {
        itemId = yield this.admin.addWorkItem(org, bookingId, this.workTitle.trim() || this.title.trim());
        if (!itemId)
          return "The booking was saved, but its post-production ticket could not be created.";
        this.existingWorkItemId.set(itemId);
      }
      yield this.admin.updateWorkItem(itemId, {
        title: this.workTitle.trim() || this.title.trim(),
        description: this.workDescription.trim() || null,
        work_type: this.workType || null
      });
      const assignee = this.workAssignee || this.staffId;
      yield this.admin.assignCard(itemId, assignee || null);
      yield this.admin.setDue(itemId, this.workDue ? (/* @__PURE__ */ new Date(`${this.workDue}T12:00:00`)).toISOString() : null);
      const { clashes, orphanEventIds } = yield this.admin.setWorkSlots(org, itemId, assignee, blocks.map((b) => ({ start: b.iso, end: b.endIso, label: b.label?.trim() || null })));
      this.admin.syncWorkEvent(itemId, orphanEventIds);
      return clashes.length ? `Booking saved, but ${clashes.length} post-production block${clashes.length > 1 ? "s" : ""} could not be reserved \u2014 that time is already taken.` : "";
    });
  }
  /**
   * Reserve time for your own work with no client job behind it — an editing evening, a
   * site recce, admin. Creates a work task and its blocks; nothing that bills anyone.
   */
  createWorkOnly(org) {
    return __async(this, null, function* () {
      const title = this.workTitle.trim() || this.title.trim();
      const id = yield this.admin.addWorkItem(org, null, title);
      if (!id) {
        this.errorMsg.set("Could not create the work task.");
        return;
      }
      const assignee = this.workAssignee || this.staffId;
      yield this.admin.updateWorkItem(id, {
        title,
        description: this.workDescription.trim() || null,
        work_type: this.workType || null
      });
      yield this.admin.assignCard(id, assignee || null);
      yield this.admin.setDue(id, this.workDue ? (/* @__PURE__ */ new Date(`${this.workDue}T12:00:00`)).toISOString() : null);
      const { clashes, orphanEventIds } = yield this.admin.setWorkSlots(org, id, assignee, this.workBlocks.map((b) => ({ start: b.iso, end: b.endIso, label: b.label?.trim() || null })));
      this.admin.syncWorkEvent(id, orphanEventIds);
      if (clashes.length) {
        this.toast.error(`Work task saved, but ${clashes.length} block${clashes.length > 1 ? "s" : ""} could not be reserved \u2014 that time is already taken.`, 9e3);
      } else {
        this.toast.success(`\u201C${title}\u201D added to the Work board`);
      }
      this.router.navigate(["/bookings/work"]);
    });
  }
  goToList() {
    this.router.navigate(["/bookings/list"]);
  }
  static {
    this.\u0275fac = function BookingFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingFormComponent, selectors: [["app-booking-form"]], decls: 13, vars: 3, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], ["routerLink", "/bookings/list", 1, "btn", "btn--ghost"], [1, "loading"], [1, "spinner"], [1, "card", "done"], [1, "done__check"], [1, "done__title"], [1, "done__sub"], [1, "muted"], [1, "done__invoice"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn--ghost", "btn--sm", 3, "href"], [1, "done__actions"], [1, "btn", "btn--ghost", 3, "click"], [1, "btn", "btn--primary", 3, "routerLink"], [1, "linkbox"], ["readonly", "", 1, "linkbox__input", 3, "focus", "value"], ["type", "button", 1, "btn", "btn--primary", "linkbox__btn", 3, "click"], [1, "done__sub", "done__sub--gap"], [1, "form-layout"], [1, "card", "form", 3, "ngSubmit"], [1, "cloned"], [1, "mode"], [1, "sec"], [1, "sec__title"], [1, "note"], [1, "field"], [1, "field__top"], ["for", "bf-title"], ["id", "bf-title", "data-tour", "bf-title", "name", "title", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "bf-loc"], [1, "opt"], ["id", "bf-loc", "name", "location", "placeholder", "Address or venue", 3, "ngModelChange", "ngModel"], ["label", "Time blocks"], [1, "picked"], [1, "note", "note--warn"], [1, "work-block"], [1, "opt-row"], [1, "check"], ["type", "checkbox", "name", "calendarMinimal", 3, "ngModelChange", "ngModel"], ["label", "Keep money off the calendar invite"], ["for", "bf-notes"], ["id", "bf-notes", "name", "notes", "rows", "2", "placeholder", "Anything to remember about this job \u2014 never shown to the client", 3, "ngModelChange", "ngModel"], [1, "error"], [1, "form__actions"], [1, "form__blocked"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "submit", 1, "btn", "btn--primary", 3, "disabled"], [1, "form-aside"], [1, "card", "aside-card"], [1, "aside-card__title"], ["data-tour", "bf-picker", 3, "staffId", "timezone", "initialSlots", "excludeBookingId"], [1, "aside-empty"], [3, "openChange", "saved", "open", "client"], [1, "mode__icon"], [1, "mode__body"], [1, "mode__title"], [1, "mode__text"], ["label", "Customer"], ["data-tour", "bf-customer", 1, "seg"], ["type", "button", 1, "seg__btn", 3, "click"], ["name", "contactName", "placeholder", "e.g. John from Sliema", 3, "ngModel"], [1, "client-row"], ["placeholder", "Select a client\u2026", 3, "changed", "value", "options", "clearable"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["name", "contactName", "placeholder", "e.g. John from Sliema", 3, "ngModelChange", "ngModel"], ["placeholder", "Select a worker\u2026", 3, "changed", "value", "options"], [1, "picked__row"], ["aria-hidden", "true", 1, "picked__tick"], [1, "picked__time"], [1, "picked__name"], [1, "req"], ["label", "Charges"], ["data-tour", "bf-charges", 3, "itemsChange", "items", "currency", "services"], ["label", "Payment options"], [3, "changed", "value", "options", "searchable"], [1, "row2"], ["label", "Deposit"], [1, "calc"], ["for", "bf-dep"], ["id", "bf-dep", "type", "number", "name", "depositPercent", "min", "1", "max", "100", "step", "1", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "confirmed", 3, "ngModelChange", "ngModel"], ["label", "Already confirmed"], [1, "work-block__head"], [1, "work-block__title"], [1, "work-block__count"], [1, "work-block__intro"], [1, "work-block__grid"], ["placeholder", "Not set", 3, "changed", "value", "options", "clearable"], [3, "changed", "value", "options", "placeholder", "clearable"], ["type", "date", "name", "workDue", 3, "ngModelChange", "ngModel"], ["rows", "2", "name", "workDescription", "placeholder", "The brief, what the client asked for, anything you'd forget", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "workTitle", 3, "ngModelChange", "ngModel", "placeholder"], ["label", "Calendar colour"], ["data-tour", "bf-picker", 3, "slotsChange", "staffId", "timezone", "initialSlots", "excludeBookingId"], [1, "aside-empty__icon"]], template: function BookingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
        \u0275\u0275text(9, "Back to list");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, BookingFormComponent_Conditional_10_Template, 2, 0, "div", 6)(11, BookingFormComponent_Conditional_11_Template, 1, 1)(12, BookingFormComponent_Conditional_12_Template, 72, 23);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEditing ? "Edit booking" : ctx.isWorkOnly ? "New work task" : "New booking");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Update the details of this booking." : "Create a booking and send the client a link to confirm or pay.", " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 10 : ctx.created() ? 11 : 12);
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, NgForm, RouterLink, CurrencyPipe, AvailabilityPickerComponent, LineItemsEditorComponent, ClientEditorComponent, InfoHintComponent, SelectComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n@media (max-width: 900px) {\n  .page[_ngcontent-%COMP%] {\n    padding-bottom: 92px;\n  }\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 380px;\n  gap: 20px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .form-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.calc[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 12px;\n  font-size: 12.5px;\n  color: #475569;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.calc[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.client-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: stretch;\n}\n.client-row[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.seg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg__btn[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  background: #ffffff;\n  color: #475569;\n  border: none;\n  cursor: pointer;\n  transition: 0.15s ease;\n}\n.seg__btn[_ngcontent-%COMP%]    + .seg__btn[_ngcontent-%COMP%] {\n  border-left: 1px solid #e2e8f0;\n}\n.seg__btn[_ngcontent-%COMP%]:hover:not(.seg__btn--on) {\n  background: #f8fafc;\n}\n.seg__btn--on[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n@media (max-width: 480px) {\n  .seg[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .seg__btn[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n  }\n}\n.opt-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  cursor: pointer;\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  cursor: pointer;\n  accent-color: #F4A922;\n}\n.check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 500;\n  color: #0f172a;\n}\n.form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n}\n@media (max-width: 900px) {\n  .form__actions[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 30;\n    margin: 0;\n    padding: 10px 16px calc(10px + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.97);\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n    border-top: 1px solid #e2e8f0;\n    box-shadow: 0 -4px 18px rgba(15, 23, 42, 0.1);\n  }\n  .form__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    justify-content: center;\n  }\n}\n.form__blocked[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #b45309;\n}\n@media (min-width: 901px) {\n  .form__blocked[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n.row2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .row2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.opt[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n  font-size: 11px;\n}\n.req[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.picked[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.picked__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 8px 11px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n}\n.picked__tick[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 700;\n  font-size: 13px;\n}\n.picked__time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #14532d;\n}\n.picked__name[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #166534;\n  background: #dcfce7;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.form-aside[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 16px;\n}\n@media (max-width: 900px) {\n  .form-aside[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.aside-card[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.aside-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 14px;\n}\n.aside-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #94a3b8;\n}\n.aside-empty__icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n.aside-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n  line-height: 1.5;\n}\n.cloned[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 13px;\n  font-size: 12.5px;\n  line-height: 1.5;\n  background: rgba(244, 169, 34, 0.1);\n  color: #92400e;\n  border: 1px solid rgba(244, 169, 34, 0.35);\n  border-radius: 8px;\n}\n.cloned[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin: 0;\n}\n.done[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 28px;\n}\n.done__check[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin: 0 auto 14px;\n  background: #dcfce7;\n  color: #16a34a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n}\n.done__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.done__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0 0 18px;\n}\n.done__invoice[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 16px;\n}\n.done__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.linkbox[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  max-width: 460px;\n  margin: 0 auto 6px;\n}\n.linkbox__input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 10px 12px;\n  font-size: 13px;\n  color: #0f172a;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #f8fafc;\n  font-family:\n    "SF Mono",\n    "Fira Mono",\n    monospace;\n}\n.linkbox__btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 92px;\n  justify-content: center;\n}\n.done__sub--gap[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2.5px solid #e2e8f0;\n  border-top-color: #F4A922;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.work-block[_ngcontent-%COMP%] {\n  margin: 4px 0 18px;\n  padding: 14px;\n  border: 1.5px solid rgba(244, 169, 34, 0.45);\n  border-radius: 8px;\n  background: rgba(244, 169, 34, 0.05);\n}\n.work-block__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n}\n.work-block__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.work-block__count[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #92400e;\n}\n.work-block__intro[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 12px;\n  color: #475569;\n  line-height: 1.5;\n}\n.work-block__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n@media (max-width: 640px) {\n  .work-block__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.work-block[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  resize: vertical;\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #0f172a;\n  background: #ffffff;\n}\n.work-block[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n@media (max-width: 560px) {\n  .work-block[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.mode[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 11px;\n  padding: 13px 15px;\n  margin-bottom: 4px;\n  background: rgba(244, 169, 34, 0.07);\n  border: 1px solid rgba(244, 169, 34, 0.35);\n  border-radius: 8px;\n}\n.mode__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: rgba(244, 169, 34, 0.9);\n  color: #000;\n  font-size: 13px;\n  line-height: 1;\n}\n.mode__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.mode__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.mode__text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.5;\n  color: #475569;\n}\n/*# sourceMappingURL=booking-form.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingFormComponent, { className: "BookingFormComponent", filePath: "src/app/booking/platform/bookings/booking-form/booking-form.component.ts", lineNumber: 25 });
})();
export {
  BookingFormComponent
};
//# sourceMappingURL=chunk-B3JBXTHS.js.map
