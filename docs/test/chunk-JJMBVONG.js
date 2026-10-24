import {
  input,
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
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵresolveDocument,
  ɵɵtemplate
} from "./chunk-VEX6DIAJ.js";

// src/app/booking/ui/info-hint/info-hint.component.ts
var _c0 = ["*"];
function InfoHintComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var InfoHintComponent = class _InfoHintComponent {
  constructor() {
    this.label = input("this field");
    this.open = signal(false);
  }
  toggle(e) {
    e.stopPropagation();
    this.open.update((v) => !v);
  }
  closeOnOutsideClick() {
    if (this.open())
      this.open.set(false);
  }
  closeOnEscape() {
    if (this.open())
      this.open.set(false);
  }
  static {
    this.\u0275fac = function InfoHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InfoHintComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoHintComponent, selectors: [["app-info-hint"]], hostBindings: function InfoHintComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function InfoHintComponent_click_HostBindingHandler() {
          return ctx.closeOnOutsideClick();
        }, false, \u0275\u0275resolveDocument)("keydown.escape", function InfoHintComponent_keydown_escape_HostBindingHandler() {
          return ctx.closeOnEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { label: [1, "label"] }, ngContentSelectors: _c0, decls: 5, vars: 5, consts: [["type", "button", 1, "ih__btn", 3, "click"], ["viewBox", "0 0 16 16", "width", "12", "height", "12", "aria-hidden", "true"], ["cx", "8", "cy", "4.2", "r", "1.2", "fill", "currentColor"], ["d", "M8 7.2v4.6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["role", "tooltip", 1, "ih__pop"]], template: function InfoHintComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function InfoHintComponent_Template_button_click_0_listener($event) {
          return ctx.toggle($event);
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1);
        \u0275\u0275element(2, "circle", 2)(3, "path", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, InfoHintComponent_Conditional_4_Template, 2, 0, "span", 4);
      }
      if (rf & 2) {
        \u0275\u0275classProp("ih__btn--on", ctx.open());
        \u0275\u0275attribute("aria-expanded", ctx.open())("aria-label", (ctx.open() ? "Hide help for " : "Help for ") + ctx.label());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.open() ? 4 : -1);
      }
    }, styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.ih__btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  margin: -5px;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  -webkit-tap-highlight-color: transparent;\n}\n.ih__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  padding: 2px;\n  border: 1.3px solid currentColor;\n  border-radius: 50%;\n}\n.ih__btn[_ngcontent-%COMP%]:hover, \n.ih__btn--on[_ngcontent-%COMP%] {\n  color: #F4A922;\n}\n.ih__btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #F4A922;\n  outline-offset: 2px;\n  border-radius: 50%;\n}\n.ih__pop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: -6px;\n  z-index: 40;\n  width: max-content;\n  max-width: min(280px, 100vw - 40px);\n  background: #1e293b;\n  color: #f1f5f9;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-transform: none;\n  letter-spacing: normal;\n  text-align: left;\n  padding: 9px 11px;\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.22);\n}\n.ih__pop[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 11px;\n  border: 5px solid transparent;\n  border-bottom-color: #1e293b;\n}\n.ih__pop[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n}\n/*# sourceMappingURL=info-hint.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoHintComponent, { className: "InfoHintComponent", filePath: "src/app/booking/ui/info-hint/info-hint.component.ts", lineNumber: 64 });
})();

export {
  InfoHintComponent
};
//# sourceMappingURL=chunk-JJMBVONG.js.map
