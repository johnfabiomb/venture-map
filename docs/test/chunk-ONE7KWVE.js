import {
  ModalComponent
} from "./chunk-5MZRX563.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  SelectComponent
} from "./chunk-MTW66F7I.js";
import "./chunk-GVBB2R7I.js";
import {
  BookingDataService
} from "./chunk-EEPGGCLM.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-RKKFBZE5.js";
import "./chunk-BW7NI53J.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-F2R7EXZF.js";
import "./chunk-YHDSDEW7.js";
import "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
  computed,
  effect,
  filter,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JW5UDKQ7.js";
import "./chunk-TWWAJFRB.js";

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
    }, dependencies: [ModalComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.confirm__msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.55;\n  margin: 0 0 18px;\n}\n.confirm__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn--danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n}\n.btn--danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n/*# sourceMappingURL=confirm-host.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmHostComponent, { className: "ConfirmHostComponent", filePath: "src/app/booking/ui/confirm/confirm-host.component.ts", lineNumber: 28 });
})();

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
    \u0275\u0275elementStart(0, "a", 17)(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 62);
    \u0275\u0275element(4, "path", 63);
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
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 64);
    \u0275\u0275text(2, "Viewing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-select", 65);
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
function PlatformShellComponent_Conditional_1_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.data.bookings().length);
  }
}
function PlatformShellComponent_Conditional_1_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 66)(3, "circle", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Work");
    \u0275\u0275elementEnd()();
  }
}
function PlatformShellComponent_Conditional_1_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.data.clients().length);
  }
}
function PlatformShellComponent_Conditional_1_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
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
    \u0275\u0275elementStart(26, "nav", 19)(27, "div", 20);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 22);
    \u0275\u0275element(31, "rect", 23)(32, "rect", 24)(33, "rect", 25)(34, "rect", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "a", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 22);
    \u0275\u0275element(39, "rect", 28)(40, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, PlatformShellComponent_Conditional_1_Conditional_43_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, PlatformShellComponent_Conditional_1_Conditional_44_Template, 6, 0, "a", 31);
    \u0275\u0275elementStart(45, "a", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 22);
    \u0275\u0275element(47, "path", 33)(48, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Invoices");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "a", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 22);
    \u0275\u0275element(53, "path", 36)(54, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, "Costs & profit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "a", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 22);
    \u0275\u0275element(59, "circle", 39)(60, "path", 40)(61, "circle", 41)(62, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64, "Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, PlatformShellComponent_Conditional_1_Conditional_65_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "a", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(67, "svg", 22);
    \u0275\u0275element(68, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "Services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 45);
    \u0275\u0275text(72, "Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "a", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(74, "svg", 22);
    \u0275\u0275element(75, "circle", 47)(76, "path", 48)(77, "circle", 49)(78, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(79, "span");
    \u0275\u0275text(80, "Staff");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "a", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(82, "svg", 22);
    \u0275\u0275element(83, "circle", 52)(84, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(85, "span");
    \u0275\u0275text(86, "Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "div", 54)(88, "button", 55);
    \u0275\u0275listener("click", function PlatformShellComponent_Conditional_1_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.data.syncCalendar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(89, "svg", 56);
    \u0275\u0275element(90, "path", 57)(91, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275template(93, PlatformShellComponent_Conditional_1_Conditional_93_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(94, "main", 60);
    \u0275\u0275element(95, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("shell--menu-open", ctx_r1.menuOpen());
    \u0275\u0275advance(24);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.activeOrg()) ? 24 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.auth.staff().length > 1 ? 25 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_4_0 = (tmp_4_0 = ctx_r1.auth.activeStaff()) == null ? null : tmp_4_0.name) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "Organization");
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r1.data.bookings().length > 0 ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.auth.features().work_board ? 44 : -1);
    \u0275\u0275advance(21);
    \u0275\u0275conditional(ctx_r1.data.clients().length > 0 ? 65 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275property("disabled", ctx_r1.data.syncing());
    \u0275\u0275advance();
    \u0275\u0275classProp("sync-btn__icon--spinning", ctx_r1.data.syncing());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.syncing() ? "Syncing\u2026" : "Sync Calendar", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data.syncResult() ? 93 : -1);
  }
}
var PlatformShellComponent = class _PlatformShellComponent {
  /** Switching worker changes what every page is allowed to show. The re-pull is NOT done
   *  here: BookingDataService reacts to the scope itself (onScopeChange), so the caches
   *  follow for every page rather than only for the ones the switcher knows about. */
  onWhoChange(value) {
    this.auth.setActiveStaff(value || null);
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
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.menuOpen.set(false));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlatformShellComponent, selectors: [["app-platform-shell"]], features: [\u0275\u0275ProvidersFeature([BookingDataService])], decls: 4, vars: 2, consts: [[1, "auth-loading"], [1, "shell", 3, "shell--menu-open"], [1, "auth-loading__spinner"], [1, "shell"], [1, "topbar"], ["aria-label", "Open menu", 1, "topbar__burger", 3, "click"], [1, "topbar__brand"], [1, "brand__mark"], [1, "topbar__title"], ["aria-hidden", "true", 1, "backdrop", 3, "click"], [1, "sidebar"], ["aria-label", "Close menu", 1, "sidebar__close", 3, "click"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M5 5l10 10M15 5L5 15"], [1, "brand"], [1, "brand__title"], [1, "brand__sub"], ["routerLink", "/bookings/organizations", "routerLinkActive", "org-link--active", "title", "Switch or manage organizations", 1, "org-link"], [1, "who"], [1, "nav"], [1, "nav__group"], ["routerLink", "/bookings/dashboard", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", 1, "nav__icon"], ["x", "3", "y", "3", "width", "6", "height", "8", "rx", "1.5"], ["x", "11", "y", "3", "width", "6", "height", "5", "rx", "1.5"], ["x", "3", "y", "13", "width", "6", "height", "4", "rx", "1.5"], ["x", "11", "y", "10", "width", "6", "height", "7", "rx", "1.5"], ["routerLink", "/bookings/list", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["x", "3", "y", "4", "width", "14", "height", "13", "rx", "2"], ["d", "M7 2v4M13 2v4M3 9h14"], [1, "nav__count"], ["routerLink", "/bookings/work", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["routerLink", "/bookings/invoices", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["d", "M5 2h7l3 3v13H5z"], ["d", "M8 8h4M8 11h4M8 14h2"], ["routerLink", "/bookings/expenses", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["d", "M3 15l4-5 3 3 4-6 3 4"], ["d", "M3 17h14"], ["routerLink", "/bookings/clients", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["cx", "8", "cy", "7", "r", "3"], ["d", "M2 17c0-3.314 2.686-5 6-5s6 1.686 6 5"], ["cx", "15", "cy", "7", "r", "2.5"], ["d", "M18 17c0-2.5-1.5-4-3-4.5"], ["routerLink", "/bookings/services", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["d", "M3 7l7-4 7 4-7 4-7-4zM3 7v6l7 4 7-4V7"], [1, "nav__group", "nav__group--org"], ["routerLink", "/bookings/staff", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["cx", "7", "cy", "7", "r", "3"], ["d", "M2 17c0-3 2.5-5 5-5s5 2 5 5"], ["cx", "14.5", "cy", "7.5", "r", "2.5"], ["d", "M13 12.2c2 .4 4 2 4 4.8"], ["routerLink", "/bookings/settings", "routerLinkActive", "nav__item--active", 1, "nav__item"], ["cx", "10", "cy", "10", "r", "2.5"], ["d", "M10 2.5v2M10 15.5v2M17.5 10h-2M4.5 10h-2M15 5l-1.4 1.4M6.4 13.6L5 15M15 15l-1.4-1.4M6.4 6.4L5 5"], [1, "sidebar__footer"], [1, "sync-btn", 3, "click", "disabled"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6"], ["d", "M4 10a6 6 0 0 1 10.196-4.314M16 10a6 6 0 0 1-10.196 4.314"], ["d", "M14 5.5l.196.186L16 4M6 14.5l-.196-.186L4 16"], [1, "sync-result"], [1, "main"], [1, "org-link__name"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", 1, "org-link__chevron"], ["d", "M7 8l3 3 3-3"], [1, "who__label"], ["variant", "dark", "placeholder", "Whole organization", 3, "changed", "value", "options"], ["d", "M4 5h12M4 10h12M4 15h7"], ["cx", "16", "cy", "15", "r", "1.5", "fill", "currentColor", "stroke", "none"]], template: function PlatformShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlatformShellComponent_Conditional_0_Template, 2, 0, "div", 0)(1, PlatformShellComponent_Conditional_1_Template, 96, 13, "div", 1);
        \u0275\u0275element(2, "app-toast-host")(3, "app-confirm-host");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.auth.state() === "loading" ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.auth.state() === "admin" ? 1 : -1);
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, ToastHostComponent, ConfirmHostComponent, SelectComponent], styles: ['\n\n.auth-loading[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0f172a;\n}\n.auth-loading__spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #F4A922;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100dvh;\n  overflow: hidden;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 14px;\n  color: #0f172a;\n  background: #f8fafc;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  flex-shrink: 0;\n  background: #0f172a;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 20px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.brand__mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: #F4A922;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 800;\n  color: #000;\n  letter-spacing: -0.03em;\n  flex-shrink: 0;\n}\n.brand__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.2;\n}\n.brand__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  line-height: 1.2;\n  margin-top: 1px;\n}\n.org-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin: 12px 14px 0;\n  padding: 9px 12px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.org-link[_ngcontent-%COMP%]:hover, \n.org-link--active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n}\n.org-link__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.org-link__chevron[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: rgba(255, 255, 255, 0.6);\n  flex-shrink: 0;\n}\n.nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  overflow-y: auto;\n}\n.nav__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 8px;\n  color: #94a3b8;\n  font-size: 13.5px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.nav__item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n}\n.nav__item--active[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n  color: #F4A922;\n}\n.nav__item--active[_ngcontent-%COMP%]   .nav__icon[_ngcontent-%COMP%] {\n  color: #F4A922;\n}\n.nav__icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  color: #64748b;\n  transition: color 0.15s ease;\n}\n.nav__count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 20px;\n}\n.nav__item--active[_ngcontent-%COMP%]   .nav__count[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n  color: #F4A922;\n}\n.sidebar__footer[_ngcontent-%COMP%] {\n  padding: 12px 10px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.sync-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  color: #94a3b8;\n  font-size: 12.5px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.sync-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.sync-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sync-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.sync-btn__icon--spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1.2s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sync-result[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 11.5px;\n  color: #94a3b8;\n  padding: 0 4px;\n  line-height: 1.4;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: #f8fafc;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: none;\n}\n.backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar__close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 14px;\n  right: 12px;\n  z-index: 2;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 0;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n}\n.sidebar__close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n.sidebar__close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 900px) {\n  .shell[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    flex-shrink: 0;\n    padding: 9px 14px;\n    background: #0f172a;\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .topbar[_ngcontent-%COMP%]   .brand__mark[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 12px;\n  }\n  .topbar__burger[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    background: none;\n    border: 0;\n    cursor: pointer;\n    padding: 6px;\n  }\n  .topbar__burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 2px;\n    background: #fff;\n    border-radius: 2px;\n  }\n  .topbar__brand[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n  .topbar__title[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: 700;\n    font-size: 15px;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 50;\n    width: 272px;\n    max-width: 84vw;\n    height: 100dvh;\n    transform: translateX(-100%);\n    transition: transform 0.28s ease;\n    box-shadow: 4px 0 34px rgba(0, 0, 0, 0.45);\n  }\n  .shell--menu-open[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar__close[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    z-index: 40;\n    background: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.28s ease;\n  }\n  .shell--menu-open[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .main[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n  }\n}\n.who[_ngcontent-%COMP%] {\n  margin: 10px 14px 14px;\n}\n.who__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 9.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.45);\n  margin-bottom: 6px;\n}\n.nav__group[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin: 4px 0 6px;\n  font-size: 9.5px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.nav__group--org[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=platform-shell.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlatformShellComponent, { className: "PlatformShellComponent", filePath: "src/app/booking/platform/platform-shell/platform-shell.component.ts", lineNumber: 18 });
})();
export {
  PlatformShellComponent
};
//# sourceMappingURL=chunk-ONE7KWVE.js.map
