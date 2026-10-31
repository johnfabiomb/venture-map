import {
  ModalComponent
} from "./chunk-YT6H6K5O.js";
import {
  ConfirmService
} from "./chunk-FBEN7ZXU.js";
import {
  SelectComponent
} from "./chunk-XYER4DO7.js";
import "./chunk-PHEH44AJ.js";
import {
  BookingDataService
} from "./chunk-LZYUP6I7.js";
import {
  ToastService
} from "./chunk-VP2YFPLJ.js";
import {
  BookingsAuthService
} from "./chunk-AO4LSMG5.js";
import "./chunk-PLONONHM.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-CPWNAP4Z.js";
import "./chunk-H276UI7Q.js";
import "./chunk-KKVK7E5Z.js";
import "./chunk-VUFO6QBK.js";
import {
  computed,
  effect,
  filter,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VEX6DIAJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/ui/toast/toast-host.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ToastHostComponent_For_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function ToastHostComponent_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2715 ");
  }
}
function ToastHostComponent_For_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " i ");
  }
}
function ToastHostComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function ToastHostComponent_For_2_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toast.dismiss(t_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275template(2, ToastHostComponent_For_2_Case_2_Template, 1, 0)(3, ToastHostComponent_For_2_Case_3_Template, 1, 0)(4, ToastHostComponent_For_2_Case_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const t_r2 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("toast toast--", t_r2.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = t_r2.type) === "success" ? 2 : tmp_11_0 === "error" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2.message);
  }
}
var ToastHostComponent = class _ToastHostComponent {
  constructor() {
    this.toast = inject(ToastService);
  }
  static {
    this.\u0275fac = function ToastHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastHostComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastHostComponent, selectors: [["app-toast-host"]], decls: 3, vars: 0, consts: [["aria-live", "polite", "aria-atomic", "false", 1, "toasts"], ["type", "button", "role", "status", 3, "class"], ["type", "button", "role", "status", 3, "click"], [1, "toast__icon"], [1, "toast__msg"]], template: function ToastHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, ToastHostComponent_For_2_Template, 7, 5, "button", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.toast.toasts());
      }
    }, styles: ['\n\n.toasts[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 11000;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  pointer-events: none;\n  max-width: min(380px, 100vw - 32px);\n}\n@media (max-width: 600px) {\n  .toasts[_ngcontent-%COMP%] {\n    left: 12px;\n    right: 12px;\n    bottom: 12px;\n    max-width: none;\n  }\n}\n.toast[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  width: 100%;\n  text-align: left;\n  padding: 13px 15px;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #94a3b8;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.16);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_toast-in 0.22s cubic-bezier(0.21, 1.02, 0.73, 1);\n}\n.toast__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  background: #64748b;\n}\n.toast__msg[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #0f172a;\n  line-height: 1.35;\n}\n.toast--success[_ngcontent-%COMP%] {\n  border-left-color: #16a34a;\n}\n.toast--success[_ngcontent-%COMP%]   .toast__icon[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.toast--error[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.toast--error[_ngcontent-%COMP%]   .toast__icon[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.toast--info[_ngcontent-%COMP%] {\n  border-left-color: #F4A922;\n}\n.toast--info[_ngcontent-%COMP%]   .toast__icon[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n@keyframes _ngcontent-%COMP%_toast-in {\n  from {\n    opacity: 0;\n    transform: translateY(10px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .toast[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=toast-host.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastHostComponent, { className: "ToastHostComponent", filePath: "src/app/booking/ui/toast/toast-host.component.ts", lineNumber: 27 });
})();

// src/app/booking/ui/confirm/confirm-host.component.ts
function ConfirmHostComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-modal", 1);
    \u0275\u0275listener("openChange", function ConfirmHostComponent_Conditional_0_Template_app_modal_openChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event || ctx_r1.svc.resolve(false));
    });
    \u0275\u0275elementStart(1, "p", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function ConfirmHostComponent_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.resolve(false));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ConfirmHostComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.resolve(true));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx;
    \u0275\u0275property("open", true)("title", r_r3.title || "Please confirm");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.cancelLabel || "Cancel");
    \u0275\u0275advance();
    \u0275\u0275classProp("btn--danger", r_r3.danger)("btn--primary", !r_r3.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.confirmLabel || "Confirm");
  }
}
var ConfirmHostComponent = class _ConfirmHostComponent {
  constructor() {
    this.svc = inject(ConfirmService);
  }
  static {
    this.\u0275fac = function ConfirmHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmHostComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmHostComponent, selectors: [["app-confirm-host"]], decls: 1, vars: 1, consts: [[3, "open", "title"], [3, "openChange", "open", "title"], [1, "confirm__msg"], [1, "confirm__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", 3, "click"]], template: function ConfirmHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConfirmHostComponent_Conditional_0_Template, 8, 9, "app-modal", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.svc.request()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [ModalComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.confirm__msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.55;\n  margin: 0 0 18px;\n}\n.confirm__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n}\n.btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n/*# sourceMappingURL=confirm-host.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmHostComponent, { className: "ConfirmHostComponent", filePath: "src/app/booking/ui/confirm/confirm-host.component.ts", lineNumber: 28 });
})();

// src/app/booking/ui/tour/tour.service.ts
var SEEN_KEY = "jm-tours-seen";
var TourService = class _TourService {
  constructor() {
    this.router = inject(Router);
    this.moving = signal(false);
    this.tour = signal(null);
    this.steps = signal([]);
    this.index = signal(0);
    this.isWhatsNew = signal(false);
    this.current = computed(() => this.steps()[this.index()] ?? null);
    this.open = computed(() => this.tour() !== null && this.steps().length > 0);
    this.atEnd = computed(() => this.index() >= this.steps().length - 1);
    this.snoozed = /* @__PURE__ */ new Set();
  }
  seen() {
    try {
      return JSON.parse(localStorage.getItem(SEEN_KEY) ?? "{}");
    } catch {
      return {};
    }
  }
  markSeen(key, version) {
    try {
      localStorage.setItem(SEEN_KEY, JSON.stringify(__spreadProps(__spreadValues({}, this.seen()), { [key]: version })));
    } catch {
    }
  }
  /** A step can run when its control is actually on screen, or it has no control. A step
   *  pointing at something hidden behind a collapsed panel would spotlight nothing. */
  visible(s) {
    if (!s.target)
      return true;
    const el = document.querySelector(s.target);
    if (!el)
      return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }
  /**
   * Start the whole tour, from a button.
   *
   * Steps with a `route` are NOT pre-filtered on visibility: their control is on another
   * page and cannot be measured from here. They are filtered as they are reached instead.
   */
  start(tour) {
    this.snoozed.delete(tour.key);
    const steps = tour.steps.filter((s) => s.route || this.visible(s));
    if (!steps.length)
      return;
    this.isWhatsNew.set(false);
    this.tour.set(tour);
    this.steps.set(steps);
    this.index.set(0);
    void this.enter(0);
  }
  /**
   * Open on its own — but only when that is genuinely worth interrupting someone for.
   *
   * By default that is ONLY the "what's new" case: a module you have already read a tour
   * for has gained steps, and being told about a feature you asked for beats discovering
   * it by accident. A full first-time tour is NOT opened this way, because it fired on
   * every page you had not yet visited, which meant the tour appeared whenever you were
   * trying to get on with something. Those stay one click away on the sidebar button.
   *
   * `allowFirstRun` is for the whole-app tour on a brand-new account, where there is no
   * work in progress to interrupt.
   */
  autoStart(tour, opts = {}) {
    if (this.snoozed.has(tour.key))
      return false;
    if (this.tour() !== null)
      return false;
    const seenVersion = this.seen()[tour.key];
    if (seenVersion === tour.version)
      return false;
    if (seenVersion === void 0) {
      if (!opts.allowFirstRun)
        return false;
      this.start(tour);
      return this.open();
    }
    const fresh = tour.steps.filter((s) => (s.since ?? 0) > seenVersion && this.visible(s));
    if (!fresh.length) {
      this.markSeen(tour.key, tour.version);
      return false;
    }
    this.isWhatsNew.set(true);
    this.tour.set(tour);
    this.steps.set(fresh);
    this.index.set(0);
    return true;
  }
  next() {
    if (this.atEnd()) {
      this.finish();
      return;
    }
    const i = this.index() + 1;
    this.index.set(i);
    void this.enter(i);
  }
  back() {
    const i = Math.max(0, this.index() - 1);
    this.index.set(i);
    void this.enter(i);
  }
  /**
   * Navigate if the step lives on another page, and give it a moment to render before the
   * overlay measures. Without the wait the spotlight is drawn against the OLD page and
   * lands on nothing — the single most visible way a cross-page tour looks broken.
   */
  enter(i) {
    return __async(this, null, function* () {
      const step = this.steps()[i];
      if (!step?.route)
        return;
      const here = this.router.url.split("?")[0];
      if (here === step.route)
        return;
      this.moving.set(true);
      try {
        yield this.router.navigateByUrl(step.route);
        yield new Promise((r) => setTimeout(r, 450));
      } finally {
        this.moving.set(false);
      }
    });
  }
  /** Ends the tour and records it as read, so it does not reopen until the next version. */
  finish() {
    const t = this.tour();
    if (t)
      this.markSeen(t.key, t.version);
    this.tour.set(null);
    this.steps.set([]);
    this.index.set(0);
    this.isWhatsNew.set(false);
  }
  /** Dismiss WITHOUT marking it read — "not now" should not cost you the tour for ever.
   *  It is snoozed for this session so it stops reappearing, and stays available from the
   *  sidebar button, which calls start() and ignores the snooze. */
  dismiss() {
    const t = this.tour();
    if (t)
      this.snoozed.add(t.key);
    this.tour.set(null);
    this.steps.set([]);
    this.index.set(0);
    this.isWhatsNew.set(false);
  }
  static {
    this.\u0275fac = function TourService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TourService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TourService, factory: _TourService.\u0275fac, providedIn: "root" });
  }
};

// src/app/booking/ui/tour/tour-host.component.ts
function TourHostComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
  if (rf & 2) {
    const b_r2 = ctx;
    \u0275\u0275styleProp("top", b_r2.top, "px")("left", b_r2.left, "px")("width", b_r2.width, "px")("height", b_r2.height, "px");
  }
}
function TourHostComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
function TourHostComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "Taking you there\u2026");
    \u0275\u0275elementEnd();
  }
}
function TourHostComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function TourHostComponent_Conditional_0_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tour.back());
    });
    \u0275\u0275text(1, "Back");
    \u0275\u0275elementEnd();
  }
}
function TourHostComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, TourHostComponent_Conditional_0_Conditional_1_Template, 1, 8, "div", 1)(2, TourHostComponent_Conditional_0_Conditional_2_Template, 1, 0, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function TourHostComponent_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tour.dismiss());
    });
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, TourHostComponent_Conditional_0_Conditional_13_Template, 2, 0, "p", 9);
    \u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275template(18, TourHostComponent_Conditional_0_Conditional_18_Template, 2, 0, "button", 13);
    \u0275\u0275elementStart(19, "button", 14);
    \u0275\u0275listener("click", function TourHostComponent_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tour.next());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r2.heading());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.spot()) ? 1 : 2, tmp_2_0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("top", ctx_r2.cardTop(), "px")("left", ctx_r2.cardLeft(), "px");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.heading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r2.tour.current()) == null ? null : tmp_6_0.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r2.tour.current()) == null ? null : tmp_7_0.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.tour.moving() ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.tour.index() + 1, " / ", ctx_r2.tour.steps().length, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.tour.index() > 0 ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.tour.atEnd() ? "Done" : "Next", " ");
  }
}
var CARD_W = 330;
var TourHostComponent = class _TourHostComponent {
  constructor() {
    this.tour = inject(TourService);
    this.spot = signal(null);
    this.cardTop = signal(80);
    this.cardLeft = signal(24);
    this.heading = computed(() => {
      const t = this.tour.tour();
      if (!t)
        return "";
      return this.tour.isWhatsNew() ? `New in ${t.label}` : t.label;
    });
    effect(() => {
      this.tour.index();
      this.tour.steps();
      this.tour.moving();
      queueMicrotask(() => this.place());
    });
  }
  onResize() {
    this.place();
  }
  onScroll() {
    this.place();
  }
  /** Escape dismisses without marking the tour read — see TourService.dismiss. */
  onEsc() {
    if (this.tour.open())
      this.tour.dismiss();
  }
  place() {
    const step = this.tour.current();
    const el = step?.target ? document.querySelector(step.target) : null;
    if (!el) {
      this.centre();
      return;
    }
    const r = el.getBoundingClientRect();
    if (r.top < 0 || r.bottom > window.innerHeight) {
      el.scrollIntoView({ block: "center", behavior: "auto" });
    }
    this.measure(el);
  }
  centre() {
    this.spot.set(null);
    this.cardTop.set(Math.max(24, window.innerHeight / 2 - 110));
    this.cardLeft.set(Math.max(16, window.innerWidth / 2 - CARD_W / 2));
  }
  measure(el) {
    const pad = 8;
    const b = el.getBoundingClientRect();
    if (b.width === 0 || b.height === 0 || b.bottom < 0 || b.top > window.innerHeight) {
      this.centre();
      return;
    }
    this.spot.set({ top: b.top - pad, left: b.left - pad, width: b.width + pad * 2, height: b.height + pad * 2 });
    const cardW = Math.min(CARD_W, window.innerWidth - 32);
    const cardH = 200;
    const below = b.bottom + pad + 12;
    const above = b.top - cardH - 12;
    const top = below + cardH < window.innerHeight ? below : above > 16 ? above : Math.max(16, window.innerHeight - cardH - 16);
    this.cardTop.set(top);
    this.cardLeft.set(Math.min(Math.max(16, b.left), window.innerWidth - cardW - 16));
  }
  static {
    this.\u0275fac = function TourHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TourHostComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TourHostComponent, selectors: [["app-tour-host"]], hostBindings: function TourHostComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function TourHostComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, \u0275\u0275resolveWindow)("scroll", function TourHostComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow)("keydown.escape", function TourHostComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEsc();
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 1, vars: 1, consts: [["role", "dialog", "aria-modal", "true", 1, "tr"], [1, "tr__spot", 3, "top", "left", "width", "height"], [1, "tr__dim"], [1, "tr__card"], [1, "tr__head"], [1, "tr__label"], ["type", "button", "aria-label", "Close", 1, "tr__x", 3, "click"], [1, "tr__title"], [1, "tr__text"], [1, "tr__moving"], [1, "tr__foot"], [1, "tr__count"], [1, "tr__btns"], ["type", "button", 1, "tr__btn", "tr__btn--ghost"], ["type", "button", 1, "tr__btn", "tr__btn--primary", 3, "click"], [1, "tr__spot"], ["type", "button", 1, "tr__btn", "tr__btn--ghost", 3, "click"]], template: function TourHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TourHostComponent_Conditional_0_Template, 21, 14, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.tour.open() ? 0 : -1);
      }
    }, styles: ['@charset "UTF-8";\n\n\n\n.tr[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1200;\n}\n.tr__dim[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n}\n.tr__spot[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 10px;\n  pointer-events: none;\n  box-shadow: 0 0 0 9999px rgba(15, 23, 42, 0.55), 0 0 0 3px #F4A922;\n  transition:\n    top 0.2s ease,\n    left 0.2s ease,\n    width 0.2s ease,\n    height 0.2s ease;\n}\n.tr__card[_ngcontent-%COMP%] {\n  position: absolute;\n  width: min(330px, 100vw - 32px);\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.3);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tr__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.tr__label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #92400e;\n  background: rgba(244, 169, 34, 0.16);\n  padding: 3px 8px;\n  border-radius: 10px;\n}\n.tr__x[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  font-size: 20px;\n  line-height: 1;\n  color: #94a3b8;\n  cursor: pointer;\n}\n.tr__x[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.tr__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.tr__text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.55;\n  color: #475569;\n}\n.tr__moving[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #92400e;\n}\n.tr__foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: 4px;\n}\n.tr__count[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #94a3b8;\n}\n.tr__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.tr__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1.5px solid transparent;\n  font-family: inherit;\n  font-size: 12.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: 0.15s ease;\n}\n.tr__btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.tr__btn--primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.94);\n}\n.tr__btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.tr__btn--ghost[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n/*# sourceMappingURL=tour-host.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TourHostComponent, { className: "TourHostComponent", filePath: "src/app/booking/ui/tour/tour-host.component.ts", lineNumber: 99 });
})();

// src/app/booking/core/tours/tours.ts
var TOURS = {
  /**
   * The whole platform, across pages. Deliberately about how the modules FEED EACH OTHER
   * rather than what each button does — that is what a per-module tour cannot teach, and
   * it is the thing that makes the app make sense: a job becomes an invoice becomes work
   * becomes money, without being typed in twice.
   */
  platform: {
    key: "platform",
    label: "The whole app",
    version: 1,
    steps: [
      {
        title: "How this all fits together",
        text: "Five minutes, across the whole app. The short version: a job is entered once, and the invoice, the calendar, the post-production and the money all follow from it."
      },
      {
        target: '[data-tour="nav-scope"]',
        route: "/bookings/dashboard",
        title: "Who you are looking at",
        text: "With more than one worker, this switches the whole app between the business and one person. Every list, every total and every calendar below it follows this. Clients are the exception \u2014 they belong to the business, not to whoever shot for them."
      },
      {
        target: '[data-tour="nav-dashboard"]',
        route: "/bookings/dashboard",
        title: "Dashboard \u2014 what needs you",
        text: "Jobs waiting to be confirmed, money owed, and what you actually kept after costs. If something needs doing, it appears here first."
      },
      {
        target: '[data-tour="nav-bookings"]',
        route: "/bookings/list",
        title: "Bookings \u2014 where a job starts",
        text: "Everything begins here. Creating one sets the time, the charges and the client in a single pass \u2014 and the invoice exists the moment the booking does."
      },
      {
        target: '[data-tour="new-booking"]',
        route: "/bookings/list",
        title: "One form, the whole job",
        text: "The time blocks go on the calendar and block the slot for real. Mark a block as post-production and it also creates the work ticket, with its own deadline and reserved time."
      },
      {
        target: '[data-tour="nav-work"]',
        route: "/bookings/work",
        title: "Work \u2014 after the camera is packed",
        text: "Editing, grading, delivery. A card appears here on its own once the shoot has happened, so nothing is forgotten; finished work steps aside after a few days so the board stays about this week."
      },
      {
        target: '[data-tour="nav-invoices"]',
        route: "/bookings/invoices",
        title: "Invoices \u2014 the money record",
        text: "Mostly these create themselves from bookings. You can also raise one with no job behind it, for work that never had a time slot. Overdue is tracked here, not guessed."
      },
      {
        target: '[data-tour="nav-clients"]',
        route: "/bookings/clients",
        title: "Clients \u2014 shared by the business",
        text: "Company, VAT number and billing address live here once, and every invoice for that client uses them. A one-off name on a booking is never saved here, which keeps this list real."
      },
      {
        target: '[data-tour="nav-settings"]',
        route: "/bookings/settings",
        title: "Settings \u2014 set up once",
        text: "Your company details and VAT, how deposits work, your Stripe account, sending invoices from your own Gmail, your insurance and permits, and who else can get in."
      },
      {
        target: '[data-tour="nav-help"]',
        title: "Every screen explains itself",
        text: "This button changes with the page you are on. When a part of the app gains a feature, its tour reopens by itself showing only what is new \u2014 so you are told about it rather than having to find it."
      }
    ]
  },
  bookings: {
    key: "bookings",
    label: "Bookings",
    version: 2,
    steps: [
      {
        title: "Your jobs",
        text: "Everything booked, past and future. Each tab is a different question: what is coming up, what is waiting on you, what is still unpaid."
      },
      {
        target: '[data-tour="booking-tabs"]',
        title: "Tabs are filters",
        text: "They count what is in them, and each one fetches fresh \u2014 so a number here is the real number, not a stale cache."
      },
      {
        target: '[data-tour="booking-search"]',
        title: "Search",
        text: "Searches reference, client and title across the whole tab, not just the rows on this page."
      },
      {
        target: '[data-tour="new-booking"]',
        title: "Create a job",
        text: "The form sets up the whole job at once: the time, the charges, the invoice and \u2014 if you mark a time block for it \u2014 the post-production ticket.",
        since: 2
      }
    ]
  },
  bookingForm: {
    key: "bookingForm",
    label: "Creating a booking",
    version: 2,
    steps: [
      {
        target: '[data-tour="bf-title"]',
        title: "The title writes itself",
        text: 'Leave it alone and it fills in from the client, the location and the charge \u2014 "Drone Filming at Mercury Tower". Type your own and it stops for good. Clear it to get the suggestion back.',
        since: 2
      },
      {
        target: '[data-tour="bf-customer"]',
        title: "Client or a one-off name",
        text: "A saved client brings its company, VAT number and billing address onto the invoice. A one-off name bills to that name only and is never saved."
      },
      {
        target: '[data-tour="bf-charges"]',
        title: "Charges make the invoice",
        text: "These are the source of truth for the total. The invoice exists the moment the booking does \u2014 there is no second step."
      },
      {
        target: '[data-tour="bf-picker"]',
        title: "Pick the time",
        text: "Tap a start, then an end. Add as many blocks as the job needs, across different days. Your real Google Calendar is checked as you pick, and warns you."
      },
      {
        target: '[data-tour="bf-picker"]',
        title: "A block can be the editing",
        text: "Each block has a Shoot / Post-production switch. Mark one as post-production and it becomes a work ticket with its own type, deadline and owner \u2014 and that time is reserved on the calendar, so nothing else can be booked over it.",
        since: 2
      }
    ]
  },
  bookingDetail: {
    key: "bookingDetail",
    label: "A booking",
    version: 2,
    steps: [
      {
        target: '[data-tour="bd-share"]',
        title: "One link for the client",
        text: "Their whole page for this job: the details, the invoice, paying by card or in person, and the files you deliver once it is paid. The URL is shown so you can check it before you send it.",
        since: 2
      },
      {
        target: '[data-tour="bd-invoices"]',
        title: "Invoices live here",
        text: "Send, chase, print or add another \u2014 a job can carry a deposit and a final invoice. An issued invoice is a document the client holds, so you raise a second one rather than editing it."
      },
      {
        target: '[data-tour="bd-documents"]',
        title: "Paperwork",
        text: "Attach your insurance or a permit when a client asks. Kept once in Settings and attached here, so one certificate serves every job \u2014 and an expired one is called out in red.",
        since: 2
      },
      {
        target: '[data-tour="bd-costs"]',
        title: "What the job cost you",
        text: "Travel, a rental, a second shooter. Recording it here is what makes the profit figure on the dashboard real rather than a guess."
      }
    ]
  },
  work: {
    key: "work",
    label: "Work board",
    version: 2,
    steps: [
      {
        title: "Post-production, as a board",
        text: "A card is a piece of work, not a booking. It can cover several jobs, or none at all."
      },
      {
        target: '[data-tour="work-new"]',
        title: "A card has everything",
        text: "Title, details, type of work, status, owner, deadline, the jobs it covers, a checklist, and reserved time on the calendar.",
        since: 2
      },
      {
        target: '[data-tour="work-cog"]',
        title: "Make it yours",
        text: "Rename, reorder, recolour or add board columns, and set the kinds of work you do. The colour is the one Google Calendar uses for that stage.",
        since: 2
      },
      {
        target: '[data-tour="work-history"]',
        title: "Finished work steps aside",
        text: "Three days after a card is delivered it leaves the board and lives under History \u2014 nothing is deleted, it just stops burying this week.",
        since: 2
      }
    ]
  },
  invoices: {
    key: "invoices",
    label: "Invoices",
    version: 1,
    steps: [
      {
        title: "Your money record",
        text: "Every invoice, whether it sits on a job in the calendar or stands on its own."
      },
      {
        target: '[data-tour="inv-summary"]',
        title: "Billed, collected, outstanding",
        text: "Overdue is counted separately, because it cuts across unpaid and part-paid rather than replacing either."
      },
      {
        target: '[data-tour="inv-new"]',
        title: "An invoice without a job",
        text: "For work that never had a time slot \u2014 a licence, a re-edit, a call-out."
      }
    ]
  },
  documents: {
    key: "documents",
    label: "Documents",
    version: 1,
    steps: [
      {
        title: "The paperwork clients ask for",
        text: "Public liability insurance, your UAS operator registration, a remote pilot certificate, a permit. Kept here once."
      },
      {
        target: '[data-tour="doc-add"]',
        title: "Add it once",
        text: "Then attach it to any booking in one click. It is a link, not a copy \u2014 one certificate serves every job, and removing it from one leaves the others alone."
      },
      {
        title: "Expiry matters",
        text: "Fill in the expiry for anything that lapses. A certificate that ran out last month still looks handled on a booking until someone checks the date, so an expired one is shown in red on the job itself."
      }
    ]
  }
};

// src/app/booking/platform/platform-shell/platform-shell.component.ts
function PlatformShellComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
  }
}
function PlatformShellComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17)(1, "span", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 66);
    \u0275\u0275element(4, "path", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.name);
  }
}
function PlatformShellComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 68);
    \u0275\u0275text(2, "Viewing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-select", 69);
    \u0275\u0275listener("changed", function PlatformShellComponent_Conditional_1_Conditional_25_Template_app_select_changed_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onWhoChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", (tmp_2_0 = ctx_r1.auth.staffId()) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "")("options", ctx_r1.workerOptions());
  }
}
function PlatformShellComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function PlatformShellComponent_Conditional_1_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startTour());
    });
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" How ", t_r5.label === "Bookings" ? "bookings" : t_r5.label.toLowerCase(), " works ");
  }
}
function PlatformShellComponent_Conditional_1_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.data.bookings().length);
  }
}
function PlatformShellComponent_Conditional_1_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "path", 71)(3, "circle", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Work");
    \u0275\u0275elementEnd()();
  }
}
function PlatformShellComponent_Conditional_1_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.data.clients().length);
  }
}
function PlatformShellComponent_Conditional_1_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.data.syncResult());
  }
}
function PlatformShellComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "header", 4)(2, "button", 5);
    \u0275\u0275listener("click", function PlatformShellComponent_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuOpen.set(true));
    });
    \u0275\u0275element(3, "span")(4, "span")(5, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
    \u0275\u0275text(8, "JM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "Studio");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275listener("click", function PlatformShellComponent_Conditional_1_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuOpen.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "aside", 10)(13, "button", 11);
    \u0275\u0275listener("click", function PlatformShellComponent_Conditional_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuOpen.set(false));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 12);
    \u0275\u0275element(15, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 14)(17, "div", 7);
    \u0275\u0275text(18, "JM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "div", 15);
    \u0275\u0275text(21, "Studio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 16);
    \u0275\u0275text(23, "Booking manager");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, PlatformShellComponent_Conditional_1_Conditional_24_Template, 5, 1, "a", 17)(25, PlatformShellComponent_Conditional_1_Conditional_25_Template, 4, 2, "div", 18);
    \u0275\u0275elementStart(26, "div", 19);
    \u0275\u0275template(27, PlatformShellComponent_Conditional_1_Conditional_27_Template, 4, 1, "button", 20);
    \u0275\u0275elementStart(28, "button", 21);
    \u0275\u0275listener("click", function PlatformShellComponent_Conditional_1_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startPlatformTour());
    });
    \u0275\u0275elementStart(29, "span", 22);
    \u0275\u0275text(30, "\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Tour the whole app ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "nav", 23)(33, "div", 24);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 26);
    \u0275\u0275element(37, "rect", 27)(38, "rect", 28)(39, "rect", 29)(40, "rect", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "a", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 26);
    \u0275\u0275element(45, "rect", 32)(46, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, PlatformShellComponent_Conditional_1_Conditional_49_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, PlatformShellComponent_Conditional_1_Conditional_50_Template, 6, 0, "a", 35);
    \u0275\u0275elementStart(51, "a", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 26);
    \u0275\u0275element(53, "path", 37)(54, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, "Invoices");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "a", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 26);
    \u0275\u0275element(59, "path", 40)(60, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "Costs & profit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "a", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(64, "svg", 26);
    \u0275\u0275element(65, "circle", 43)(66, "path", 44)(67, "circle", 45)(68, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, PlatformShellComponent_Conditional_1_Conditional_71_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "a", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 26);
    \u0275\u0275element(74, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76, "Services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 49);
    \u0275\u0275text(78, "Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "a", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(80, "svg", 26);
    \u0275\u0275element(81, "circle", 51)(82, "path", 52)(83, "circle", 53)(84, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(85, "span");
    \u0275\u0275text(86, "Staff");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "a", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(88, "svg", 26);
    \u0275\u0275element(89, "circle", 56)(90, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(91, "span");
    \u0275\u0275text(92, "Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "div", 58)(94, "button", 59);
    \u0275\u0275listener("click", function PlatformShellComponent_Conditional_1_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.data.syncCalendar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(95, "svg", 60);
    \u0275\u0275element(96, "path", 61)(97, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275template(99, PlatformShellComponent_Conditional_1_Conditional_99_Template, 2, 1, "div", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(100, "main", 64);
    \u0275\u0275element(101, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("shell--menu-open", ctx_r1.menuOpen());
    \u0275\u0275advance(24);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.activeOrg()) ? 24 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.auth.staff().length > 1 ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.pageTour()) ? 27 : -1, tmp_4_0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_5_0 = (tmp_5_0 = ctx_r1.auth.activeStaff()) == null ? null : tmp_5_0.name) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "Organization");
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r1.data.bookings().length > 0 ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.auth.features().work_board ? 50 : -1);
    \u0275\u0275advance(21);
    \u0275\u0275conditional(ctx_r1.data.clients().length > 0 ? 71 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275property("disabled", ctx_r1.data.syncing());
    \u0275\u0275advance();
    \u0275\u0275classProp("sync-btn__icon--spinning", ctx_r1.data.syncing());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.syncing() ? "Syncing\u2026" : "Sync Calendar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data.syncResult() ? 99 : -1);
  }
}
var PlatformShellComponent = class _PlatformShellComponent {
  /** Switching worker changes what every page is allowed to show. The re-pull is NOT done
   *  here: BookingDataService reacts to the scope itself (onScopeChange), so the caches
   *  follow for every page rather than only for the ones the switcher knows about. */
  onWhoChange(value) {
    this.auth.setActiveStaff(value || null);
  }
  /** Which tour belongs to the page you are on. */
  tourFor(url) {
    const u = url.split("?")[0];
    if (u.includes("/bookings/new") || /\/bookings\/[^/]+\/edit/.test(u))
      return TOURS["bookingForm"];
    if (u.startsWith("/bookings/list"))
      return TOURS["bookings"];
    if (u.startsWith("/bookings/work"))
      return TOURS["work"];
    if (u.startsWith("/bookings/invoices"))
      return TOURS["invoices"];
    if (u.startsWith("/bookings/settings")) {
      return url.includes("tab=documents") ? TOURS["documents"] : null;
    }
    if (/^\/bookings\/[0-9a-f-]{36}$/.test(u))
      return TOURS["bookingDetail"];
    return null;
  }
  /** Opens the tour for this page from the Help button. */
  startTour() {
    const t = this.pageTour();
    if (t)
      this.tours.start(t);
  }
  /** The whole platform, across pages. */
  startPlatformTour() {
    this.tours.start(TOURS["platform"]);
  }
  constructor() {
    this.auth = inject(BookingsAuthService);
    this.workerOptions = computed(() => [
      { value: "", label: "Whole organization" },
      ...this.auth.staff().map((w) => ({ value: w.id, label: w.name }))
    ]);
    this.data = inject(BookingDataService);
    this.router = inject(Router);
    this.menuOpen = signal(false);
    this.activeOrg = computed(() => this.auth.orgs().find((o) => o.id === this.auth.orgId()) ?? null);
    this.tours = inject(TourService);
    this.pageTour = signal(null);
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.menuOpen.set(false));
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const t = this.tourFor(e.urlAfterRedirects);
      this.pageTour.set(t ?? null);
      if (this.tours.open())
        return;
      if (this.tours.autoStart(TOURS["platform"], { allowFirstRun: true }))
        return;
      if (t)
        setTimeout(() => this.tours.autoStart(t), 700);
    });
    effect(() => {
      const s = this.auth.state();
      if (s !== "loading" && s !== "admin") {
        this.router.navigate(["/bookings", "login"], { replaceUrl: true });
      }
    });
  }
  ngOnInit() {
    void this.auth.initialize();
  }
  static {
    this.\u0275fac = function PlatformShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlatformShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlatformShellComponent, selectors: [["app-platform-shell"]], features: [\u0275\u0275ProvidersFeature([BookingDataService])], decls: 5, vars: 2, consts: [[1, "auth-loading"], [1, "shell", 3, "shell--menu-open"], [1, "auth-loading__spinner"], [1, "shell"], [1, "topbar"], ["aria-label", "Open menu", 1, "topbar__burger", 3, "click"], [1, "topbar__brand"], [1, "brand__mark"], [1, "topbar__title"], ["aria-hidden", "true", 1, "backdrop", 3, "click"], [1, "sidebar"], ["aria-label", "Close menu", 1, "sidebar__close", 3, "click"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M5 5l10 10M15 5L5 15"], [1, "brand"], [1, "brand__title"], [1, "brand__sub"], ["routerLink", "/bookings/organizations", "routerLinkActive", "org-link--active", "title", "Switch or manage organizations", 1, "org-link"], ["data-tour", "nav-scope", 1, "who"], [1, "help"], ["type", "button", "data-tour", "nav-help", 1, "who__help"], ["type", "button", 1, "who__help", "who__help--all", 3, "click"], [1, "who__help-icon"], [1, "nav"], [1, "nav__group"], ["data-tour", "nav-dashboard", "routerLink", "/bookings/dashboard", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", 1, "nav__icon"], ["x", "3", "y", "3", "width", "6", "height", "8", "rx", "1.5"], ["x", "11", "y", "3", "width", "6", "height", "5", "rx", "1.5"], ["x", "3", "y", "13", "width", "6", "height", "4", "rx", "1.5"], ["x", "11", "y", "10", "width", "6", "height", "7", "rx", "1.5"], ["data-tour", "nav-bookings", "routerLink", "/bookings/list", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["x", "3", "y", "4", "width", "14", "height", "13", "rx", "2"], ["d", "M7 2v4M13 2v4M3 9h14"], [1, "nav__count"], ["data-tour", "nav-work", "routerLink", "/bookings/work", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["data-tour", "nav-invoices", "routerLink", "/bookings/invoices", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["d", "M5 2h7l3 3v13H5z"], ["d", "M8 8h4M8 11h4M8 14h2"], ["routerLink", "/bookings/expenses", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["d", "M3 15l4-5 3 3 4-6 3 4"], ["d", "M3 17h14"], ["data-tour", "nav-clients", "routerLink", "/bookings/clients", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["cx", "8", "cy", "7", "r", "3"], ["d", "M2 17c0-3.314 2.686-5 6-5s6 1.686 6 5"], ["cx", "15", "cy", "7", "r", "2.5"], ["d", "M18 17c0-2.5-1.5-4-3-4.5"], ["routerLink", "/bookings/services", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["d", "M3 7l7-4 7 4-7 4-7-4zM3 7v6l7 4 7-4V7"], [1, "nav__group", "nav__group--org"], ["routerLink", "/bookings/staff", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["cx", "7", "cy", "7", "r", "3"], ["d", "M2 17c0-3 2.5-5 5-5s5 2 5 5"], ["cx", "14.5", "cy", "7.5", "r", "2.5"], ["d", "M13 12.2c2 .4 4 2 4 4.8"], ["data-tour", "nav-settings", "routerLink", "/bookings/settings", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["cx", "10", "cy", "10", "r", "2.5"], ["d", "M10 2.5v2M10 15.5v2M17.5 10h-2M4.5 10h-2M15 5l-1.4 1.4M6.4 13.6L5 15M15 15l-1.4-1.4M6.4 6.4L5 5"], [1, "sidebar__footer"], [1, "sync-btn", 3, "click", "disabled"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6"], ["d", "M4 10a6 6 0 0 1 10.196-4.314M16 10a6 6 0 0 1-10.196 4.314"], ["d", "M14 5.5l.196.186L16 4M6 14.5l-.196-.186L4 16"], [1, "sync-result"], [1, "main"], [1, "org-link__name"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", 1, "org-link__chevron"], ["d", "M7 8l3 3 3-3"], [1, "who__label"], ["variant", "dark", "placeholder", "Whole organization", 3, "changed", "value", "options"], ["type", "button", "data-tour", "nav-help", 1, "who__help", 3, "click"], ["d", "M4 5h12M4 10h12M4 15h7"], ["cx", "16", "cy", "15", "r", "1.5", "fill", "currentColor", "stroke", "none"]], template: function PlatformShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlatformShellComponent_Conditional_0_Template, 2, 0, "div", 0)(1, PlatformShellComponent_Conditional_1_Template, 102, 14, "div", 1);
        \u0275\u0275element(2, "app-toast-host")(3, "app-confirm-host")(4, "app-tour-host");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.auth.state() === "loading" ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.auth.state() === "admin" ? 1 : -1);
      }
    }, dependencies: [
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      ToastHostComponent,
      ConfirmHostComponent,
      TourHostComponent,
      SelectComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.auth-loading[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0f172a;\n}\n.auth-loading__spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #F4A922;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100dvh;\n  overflow: hidden;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 14px;\n  color: #0f172a;\n  background: #f8fafc;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  flex-shrink: 0;\n  background: #0f172a;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 20px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.brand__mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: #F4A922;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 800;\n  color: #000;\n  letter-spacing: -0.03em;\n  flex-shrink: 0;\n}\n.brand__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.2;\n}\n.brand__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  line-height: 1.2;\n  margin-top: 1px;\n}\n.org-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin: 12px 14px 0;\n  padding: 9px 12px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.org-link[_ngcontent-%COMP%]:hover, \n.org-link--active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n}\n.org-link__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.org-link__chevron[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: rgba(255, 255, 255, 0.6);\n  flex-shrink: 0;\n}\n.nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  overflow-y: auto;\n}\n.nav__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 8px;\n  color: #94a3b8;\n  font-size: 13.5px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.nav__item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n}\n.nav__item--active[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n  color: #F4A922;\n}\n.nav__item--active[_ngcontent-%COMP%]   .nav__icon[_ngcontent-%COMP%] {\n  color: #F4A922;\n}\n.nav__icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  color: #64748b;\n  transition: color 0.15s ease;\n}\n.nav__count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 20px;\n}\n.nav__item--active[_ngcontent-%COMP%]   .nav__count[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n  color: #F4A922;\n}\n.sidebar__footer[_ngcontent-%COMP%] {\n  padding: 12px 10px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.sync-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  color: #94a3b8;\n  font-size: 12.5px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.sync-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.sync-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sync-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.sync-btn__icon--spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1.2s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sync-result[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 11.5px;\n  color: #94a3b8;\n  padding: 0 4px;\n  line-height: 1.4;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: #f8fafc;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: none;\n}\n.backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar__close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 14px;\n  right: 12px;\n  z-index: 2;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 0;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar__close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n.sidebar__close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 900px) {\n  .shell[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex-shrink: 0;\n    padding: 9px 14px;\n    background: #0f172a;\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .topbar[_ngcontent-%COMP%]   .brand__mark[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n  }\n  .topbar__burger[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    background: none;\n    border: 0;\n    cursor: pointer;\n    padding: 6px;\n  }\n  .topbar__burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 2px;\n    background: #fff;\n    border-radius: 2px;\n  }\n  .topbar__brand[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n  .topbar__title[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: 700;\n    font-size: 15px;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 50;\n    width: 272px;\n    max-width: 84vw;\n    height: 100dvh;\n    transform: translateX(-100%);\n    transition: transform 0.28s ease;\n    box-shadow: 4px 0 34px rgba(0, 0, 0, 0.45);\n  }\n  .shell--menu-open[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar__close[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    z-index: 40;\n    background: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.28s ease;\n  }\n  .shell--menu-open[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .main[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n  }\n}\n.who[_ngcontent-%COMP%] {\n  margin: 10px 14px 14px;\n}\n.who__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 9.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.45);\n  margin-bottom: 6px;\n}\n.nav__group[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin: 4px 0 6px;\n  font-size: 9.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.nav__group--org[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #e2e8f0;\n}\n.who__help[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  width: 100%;\n  margin: 0 0 14px;\n  padding: 8px 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.72);\n  text-align: left;\n}\n.who__help[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.11);\n  color: #fff;\n}\n.who__help-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 17px;\n  height: 17px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: rgba(244, 169, 34, 0.9);\n  color: #000;\n  font-size: 11px;\n  font-weight: 800;\n}\n.help[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.help[_ngcontent-%COMP%]   .who__help[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.who__help--all[_ngcontent-%COMP%] {\n  background: none;\n  border-color: rgba(255, 255, 255, 0.09);\n  color: rgba(255, 255, 255, 0.55);\n}\n.who__help--all[_ngcontent-%COMP%]   .who__help-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.16);\n  color: rgba(255, 255, 255, 0.85);\n}\n.who__help--all[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n/*# sourceMappingURL=platform-shell.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlatformShellComponent, { className: "PlatformShellComponent", filePath: "src/app/booking/platform/platform-shell/platform-shell.component.ts", lineNumber: 22 });
})();
export {
  PlatformShellComponent
};
//# sourceMappingURL=chunk-NOVZBSYJ.js.map
