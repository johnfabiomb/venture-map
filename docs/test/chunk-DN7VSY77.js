import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingAdminService
} from "./chunk-3T6U65XO.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-RKKFBZE5.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BW7NI53J.js";
import "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JW5UDKQ7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/services/services-admin.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ServicesAdminComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ServicesAdminComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add());
    });
    \u0275\u0275text(1, "+ New service");
    \u0275\u0275elementEnd();
  }
}
function ServicesAdminComponent_Conditional_8_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ServicesAdminComponent_Conditional_8_For_28_Template_input_ngModelChange_1_listener($event) {
      const t_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(t_r6.hours, $event) || (t_r6.hours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3, "h \u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5, "\u20AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ServicesAdminComponent_Conditional_8_For_28_Template_input_ngModelChange_6_listener($event) {
      const t_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(t_r6.price, $event) || (t_r6.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function ServicesAdminComponent_Conditional_8_For_28_Template_button_click_7_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeTier($index_r7));
    });
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", t_r6.hours);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", t_r6.price);
  }
}
function ServicesAdminComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 8)(2, "span");
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ServicesAdminComponent_Conditional_8_Template_input_ngModelChange_4_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.name, $event) || (f_r4.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 8)(6, "span");
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ServicesAdminComponent_Conditional_8_Template_input_ngModelChange_8_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.description, $event) || (f_r4.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "label", 8)(11, "span");
    \u0275\u0275text(12, "Min hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ServicesAdminComponent_Conditional_8_Template_input_ngModelChange_13_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.min_hours, $event) || (f_r4.min_hours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 8)(15, "span");
    \u0275\u0275text(16, "Max hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ServicesAdminComponent_Conditional_8_Template_input_ngModelChange_17_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.max_hours, $event) || (f_r4.max_hours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 8)(19, "span");
    \u0275\u0275text(20, "Extra hour (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ServicesAdminComponent_Conditional_8_Template_input_ngModelChange_21_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.extra_hour_price, $event) || (f_r4.extra_hour_price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 14)(23, "div", 15);
    \u0275\u0275text(24, "Price tiers ");
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "(exact prices for set durations; longer uses the extra-hour rate)");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(27, ServicesAdminComponent_Conditional_8_For_28_Template, 9, 2, "div", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(29, "button", 17);
    \u0275\u0275listener("click", function ServicesAdminComponent_Conditional_8_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTier());
    });
    \u0275\u0275text(30, "+ Add tier");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label", 8)(32, "span");
    \u0275\u0275text(33, "Default tasks ");
    \u0275\u0275elementStart(34, "em", 18);
    \u0275\u0275text(35, "one per line \u2014 auto-added to each booking of this service");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ServicesAdminComponent_Conditional_8_Template_textarea_ngModelChange_36_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.taskText, $event) || (f_r4.taskText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "label", 20)(38, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ServicesAdminComponent_Conditional_8_Template_input_ngModelChange_38_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.is_active, $event) || (f_r4.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " Active (bookable)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 22)(41, "button", 23);
    \u0275\u0275listener("click", function ServicesAdminComponent_Conditional_8_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 24);
    \u0275\u0275listener("click", function ServicesAdminComponent_Conditional_8_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(44, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", f_r4.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", f_r4.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", f_r4.min_hours);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", f_r4.max_hours);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", f_r4.extra_hour_price);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(f_r4.tiers);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", f_r4.taskText);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r4.is_active);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !f_r4.name.trim() || ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving() ? "Saving\u2026" : "Save");
  }
}
function ServicesAdminComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function ServicesAdminComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "No services yet \u2014 add your first one.");
    \u0275\u0275elementEnd();
  }
}
function ServicesAdminComponent_Conditional_10_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "hidden");
    \u0275\u0275elementEnd();
  }
}
function ServicesAdminComponent_Conditional_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275template(4, ServicesAdminComponent_Conditional_10_For_3_Conditional_4_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35)(8, "button", 17);
    \u0275\u0275listener("click", function ServicesAdminComponent_Conditional_10_For_3_Template_button_click_8_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.edit(s_r9));
    });
    \u0275\u0275text(9, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 36);
    \u0275\u0275listener("click", function ServicesAdminComponent_Conditional_10_For_3_Template_button_click_10_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(s_r9));
    });
    \u0275\u0275text(11, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("item--off", !s_r9.is_active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", s_r9.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!s_r9.is_active ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.priceLabel(s_r9), " \xB7 ", s_r9.min_hours, "\u2013", s_r9.max_hours, "h");
  }
}
function ServicesAdminComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ServicesAdminComponent_Conditional_10_Conditional_0_Template, 2, 0, "p", 6);
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275repeaterCreate(2, ServicesAdminComponent_Conditional_10_For_3_Template, 12, 7, "div", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.services().length === 0 ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.services());
  }
}
var blankForm = () => ({
  name: "",
  description: "",
  min_hours: 1,
  max_hours: 8,
  extra_hour_price: 0,
  tiers: [{ hours: 1, price: 0 }],
  is_active: true,
  taskText: ""
});
var ServicesAdminComponent = class _ServicesAdminComponent {
  constructor() {
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.services = signal([]);
    this.loading = signal(true);
    this.editing = signal(null);
    this.saving = signal(false);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      yield this.reload();
    });
  }
  reload() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (org)
        this.services.set(yield this.admin.listServices(org));
      this.loading.set(false);
    });
  }
  add() {
    this.editing.set(blankForm());
  }
  edit(s) {
    this.editing.set({
      id: s.id,
      name: s.name,
      description: s.description ?? "",
      min_hours: s.min_hours,
      max_hours: s.max_hours,
      extra_hour_price: s.pricing?.extra_hour_price ?? 0,
      tiers: (s.pricing?.tiers ?? [{ hours: 1, price: 0 }]).map((t) => __spreadValues({}, t)),
      is_active: s.is_active,
      taskText: (s.task_template ?? []).join("\n")
    });
  }
  cancel() {
    this.editing.set(null);
  }
  addTier() {
    this.editing.update((f) => f ? __spreadProps(__spreadValues({}, f), { tiers: [...f.tiers, { hours: f.tiers.length + 1, price: 0 }] }) : f);
  }
  removeTier(i) {
    this.editing.update((f) => f ? __spreadProps(__spreadValues({}, f), { tiers: f.tiers.filter((_, j) => j !== i) }) : f);
  }
  save() {
    return __async(this, null, function* () {
      const f = this.editing();
      if (!f || !f.name.trim() || this.saving())
        return;
      const org = this.auth.orgId();
      if (!org)
        return;
      const isNew = !f.id;
      this.saving.set(true);
      try {
        yield this.admin.saveService(org, {
          id: f.id,
          name: f.name.trim(),
          description: f.description.trim() || null,
          min_hours: Number(f.min_hours),
          max_hours: Number(f.max_hours),
          is_active: f.is_active,
          pricing: {
            tiers: f.tiers.map((t) => ({ hours: Number(t.hours), price: Number(t.price) })).sort((a, b) => a.hours - b.hours),
            extra_hour_price: Number(f.extra_hour_price)
          },
          task_template: f.taskText.split("\n").map((t) => t.trim()).filter(Boolean)
        });
        this.editing.set(null);
        yield this.reload();
        this.toast.success(`Service "${f.name.trim()}" ${isNew ? "created" : "updated"}`);
      } catch {
        this.toast.error("Could not save the service. Please try again.");
      } finally {
        this.saving.set(false);
      }
    });
  }
  remove(s) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.ask({ title: "Delete service", message: `Delete service "${s.name}"? This can't be undone.`, confirmLabel: "Delete", danger: true })))
        return;
      try {
        yield this.admin.deleteService(s.id);
        yield this.reload();
        this.toast.success(`Service "${s.name}" deleted`);
      } catch {
        this.toast.error("Could not delete the service.");
      }
    });
  }
  priceLabel(s) {
    const t = s.pricing?.tiers ?? [];
    if (t.length === 1)
      return `\u20AC${t[0].price} + \u20AC${s.pricing.extra_hour_price}/hr`;
    return t.map((x) => `${x.hours}h \u20AC${x.price}`).join(" \xB7 ") + ` + \u20AC${s.pricing.extra_hour_price}/hr`;
  }
  static {
    this.\u0275fac = function ServicesAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServicesAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesAdminComponent, selectors: [["app-services-admin"]], decls: 11, vars: 2, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "btn", "btn--primary"], [1, "card", "editor"], [1, "muted"], [1, "btn", "btn--primary", 3, "click"], [1, "field"], ["type", "text", "placeholder", "e.g. Drone Pilot Filming", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Short description", 3, "ngModelChange", "ngModel"], [1, "row"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], [1, "tiers"], [1, "tiers__label"], [1, "tier"], [1, "link-btn", 3, "click"], [1, "hint-em"], ["rows", "4", "placeholder", "Back up footage\nEdit footage\nSend delivery link", 3, "ngModelChange", "ngModel"], [1, "check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "editor__actions"], [1, "btn", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--ghost", 3, "click"], [1, "tier__x"], [1, "tier__cur"], ["title", "Remove", 1, "tier__del", 3, "click"], [1, "list"], [1, "item", 3, "item--off"], [1, "item"], [1, "item__main"], [1, "item__name"], [1, "tag"], [1, "item__meta"], [1, "item__actions"], [1, "link-btn", "link-btn--danger", 3, "click"]], template: function ServicesAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "What you offer, and how it's priced.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ServicesAdminComponent_Conditional_7_Template, 2, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, ServicesAdminComponent_Conditional_8_Template, 45, 9, "div", 5)(9, ServicesAdminComponent_Conditional_9_Template, 2, 0, "p", 6)(10, ServicesAdminComponent_Conditional_10_Template, 4, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(7);
        \u0275\u0275conditional(!ctx.editing() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_1_0 = ctx.editing()) ? 8 : ctx.loading() ? 9 : 10, tmp_1_0);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sec[_ngcontent-%COMP%]    + .sec[_ngcontent-%COMP%] {\n  border-top: 1px solid #e2e8f0;\n  padding-top: 20px;\n}\n.sec__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n}\n.field__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 20px;\n}\n.field__top[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 500;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.field[_ngcontent-%COMP%]   .note--warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 860px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .field-row--three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.hint-em[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  color: #94a3b8;\n  font-size: 11px;\n}\n.editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.editor__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 6px;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n@media (max-width: 560px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.tiers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tiers__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.tiers__label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #94a3b8;\n}\n.tier[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tier[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70px;\n  padding: 8px 10px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.tier__x[_ngcontent-%COMP%], \n.tier__cur[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n}\n.tier__del[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: #94a3b8;\n  font-size: 20px;\n  cursor: pointer;\n  line-height: 1;\n}\n.tier__del[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n/*# sourceMappingURL=services-admin.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesAdminComponent, { className: "ServicesAdminComponent", filePath: "src/app/booking/platform/services/services-admin.component.ts", lineNumber: 32 });
})();
export {
  ServicesAdminComponent
};
//# sourceMappingURL=chunk-DN7VSY77.js.map
