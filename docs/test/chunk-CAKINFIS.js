import {
  BookingAdminService
} from "./chunk-TGVAAVA4.js";
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
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PLONONHM.js";
import {
  Router
} from "./chunk-CPWNAP4Z.js";
import "./chunk-H276UI7Q.js";
import "./chunk-KKVK7E5Z.js";
import "./chunk-VUFO6QBK.js";
import {
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
  ɵɵproperty,
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
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/organizations/organizations.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrganizationsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreate.set(!ctx_r1.showCreate()));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.showCreate() ? "Cancel" : "+ New organization");
  }
}
function OrganizationsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "h2", 10);
    \u0275\u0275text(2, "Create organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4, "You become its owner. Set it up (services, staff, company details) from Settings once you're switched into it.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12)(6, "label", 13)(7, "span");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsComponent_Conditional_8_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 13)(11, "span");
    \u0275\u0275text(12, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsComponent_Conditional_8_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.slug, $event) || (ctx_r1.slug = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 13)(15, "span");
    \u0275\u0275text(16, "Timezone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-select", 16);
    \u0275\u0275listener("changed", function OrganizationsComponent_Conditional_8_Template_app_select_changed_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.timezone = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 13)(19, "span");
    \u0275\u0275text(20, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "app-select", 16);
    \u0275\u0275listener("changed", function OrganizationsComponent_Conditional_8_Template_app_select_changed_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currency = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "p", 11);
    \u0275\u0275text(23, "Public booking page: ");
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " \xA0\xB7\xA0 lowercase letters, numbers and hyphens only.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 17)(28, "button", 18);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_8_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.slug);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.timezone)("options", ctx_r1.tzOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.currency)("options", ctx_r1.currencyOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.origin, "/", ctx_r1.slug || "slug", "/book");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.canCreate);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.creating() ? "Creating\u2026" : "Create organization");
  }
}
function OrganizationsComponent_For_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsComponent_For_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "/" + o_r4.slug + "/book", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("/", o_r4.slug, "/book");
  }
}
function OrganizationsComponent_For_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function OrganizationsComponent_For_19_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const o_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTo(o_r4.id));
    });
    \u0275\u0275text(1, "Switch");
    \u0275\u0275elementEnd();
  }
}
function OrganizationsComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, OrganizationsComponent_For_19_Conditional_4_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275template(8, OrganizationsComponent_For_19_Conditional_8_Template, 2, 2, "a", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 26);
    \u0275\u0275template(10, OrganizationsComponent_For_19_Conditional_10_Template, 2, 0, "button", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("row--active", o_r4.id === ctx_r1.auth.orgId());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r4.id === ctx_r1.auth.orgId() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(o_r4.slug ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(o_r4.id !== ctx_r1.auth.orgId() ? 10 : -1);
  }
}
function supportedList(key, fallback) {
  try {
    const fn = Intl.supportedValuesOf;
    if (typeof fn === "function")
      return fn(key);
  } catch {
  }
  return fallback;
}
var OrganizationsComponent = class _OrganizationsComponent {
  constructor() {
    this.auth = inject(BookingsAuthService);
    this.admin = inject(BookingAdminService);
    this.data = inject(BookingDataService);
    this.router = inject(Router);
    this.toast = inject(ToastService);
    this.origin = typeof window !== "undefined" ? window.location.origin : "";
    this.showCreate = signal(false);
    this.creating = signal(false);
    this.timezones = supportedList("timeZone", ["UTC", "Europe/Malta", "Europe/London", "Europe/Madrid", "America/New_York"]);
    this.currencies = supportedList("currency", ["EUR", "USD", "GBP", "CHF", "AUD", "CAD"]);
    this.tzOptions = this.timezones.map((x) => ({ value: x, label: x }));
    this.currencyOptions = this.currencies.map((c) => ({ value: c, label: c }));
    this.name = "";
    this.slug = "";
    this.timezone = "Europe/Malta";
    this.currency = "EUR";
  }
  switchTo(orgId) {
    if (orgId === this.auth.orgId())
      return;
    this.auth.setActiveOrg(orgId);
    this.data.load();
    this.router.navigate(["/bookings", "dashboard"]);
  }
  get canCreate() {
    return !this.creating() && this.name.trim().length > 0 && /^[a-z0-9-]+$/.test(this.slug.trim());
  }
  create() {
    return __async(this, null, function* () {
      if (!this.canCreate)
        return;
      this.creating.set(true);
      try {
        const res = yield this.admin.createOrg(this.name.trim(), this.slug.trim().toLowerCase(), this.timezone, this.currency.toUpperCase());
        if (res.error) {
          this.toast.error("Could not create \u2014 the slug may already be taken.");
          return;
        }
        this.toast.success("Organization created");
        this.name = "";
        this.slug = "";
        this.showCreate.set(false);
        yield this.auth.refresh();
        if (res.id)
          this.switchTo(res.id);
      } finally {
        this.creating.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function OrganizationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganizationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganizationsComponent, selectors: [["app-organizations"]], decls: 20, vars: 2, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "btn", "btn--primary"], [1, "card"], [1, "table"], [1, "row", "row--head"], [1, "row", 3, "row--active"], [1, "btn", "btn--primary", 3, "click"], [1, "card__h"], [1, "hint"], [1, "grid"], [1, "field"], ["placeholder", "Acme Studio", 3, "ngModelChange", "ngModel"], ["placeholder", "acme", 3, "ngModelChange", "ngModel"], [3, "changed", "value", "options"], [1, "actions"], [1, "btn", "btn--primary", 3, "click", "disabled"], [1, "row"], [1, "org"], [1, "org__name"], [1, "badge", "badge--active"], [1, "role"], [1, "link"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "action"], [1, "link-btn"], [1, "link-btn", 3, "click"]], template: function OrganizationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Organizations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "The organizations you manage. Click one to switch into it.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, OrganizationsComponent_Conditional_7_Template, 2, 1, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, OrganizationsComponent_Conditional_8_Template, 30, 10, "div", 5);
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "span");
        \u0275\u0275text(12, "Organization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "Your role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16, "Public page");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(18, OrganizationsComponent_For_19_Template, 11, 7, "div", 8, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.auth.isPlatformAdmin() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showCreate() ? 8 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.auth.orgs());
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SelectComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 18px;\n}\n.card__h[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #94a3b8;\n  margin: 8px 0 0;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 14px;\n  margin-bottom: 8px;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.table[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1.6fr 0.8fr;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #e2e8f0;\n  font-size: 13.5px;\n}\n.row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.row--head[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.row--active[_ngcontent-%COMP%] {\n  background: rgba(244, 169, 34, 0.12);\n}\n.org[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.org__name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.role[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  color: #475569;\n}\n.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #F4A922;\n  text-decoration: none;\n  font-variant-numeric: tabular-nums;\n}\n.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.action[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.badge--active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n@media (max-width: 600px) {\n  .row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .row--head[_ngcontent-%COMP%], \n   .link[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=organizations.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizationsComponent, { className: "OrganizationsComponent", filePath: "src/app/booking/platform/organizations/organizations.component.ts", lineNumber: 28 });
})();
export {
  OrganizationsComponent
};
//# sourceMappingURL=chunk-CAKINFIS.js.map
