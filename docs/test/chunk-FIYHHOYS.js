import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingAdminService,
  GCAL_COLORS,
  colorHex
} from "./chunk-3T6U65XO.js";
import {
  SelectComponent
} from "./chunk-MTW66F7I.js";
import "./chunk-GVBB2R7I.js";
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
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BW7NI53J.js";
import "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JW5UDKQ7.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/staff/staff-admin.component.ts
var _forTrack0 = ($index, $item) => $item.serviceId;
var _forTrack1 = ($index, $item) => $item.id;
function StaffAdminComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addStaff());
    });
    \u0275\u0275text(1, "+ Add worker");
    \u0275\u0275elementEnd();
  }
}
function StaffAdminComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 7)(2, "span");
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function StaffAdminComponent_Conditional_8_Template_input_ngModelChange_4_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.name, $event) || (f_r4.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 7)(6, "span");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function StaffAdminComponent_Conditional_8_Template_input_ngModelChange_8_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.email, $event) || (f_r4.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 10)(10, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function StaffAdminComponent_Conditional_8_Template_input_ngModelChange_10_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      \u0275\u0275twoWayBindingSet(f_r4.is_bookable, $event) || (f_r4.is_bookable = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Bookable (shown to clients)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 7)(13, "span");
    \u0275\u0275text(14, "Signs in as");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-select", 12);
    \u0275\u0275listener("changed", function StaffAdminComponent_Conditional_8_Template_app_select_changed_15_listener($event) {
      const f_r4 = \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView(f_r4.loginEmail = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 13);
    \u0275\u0275text(17, " Links this worker to someone who can sign in. They must already be under ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19, "Settings \u2192 Team");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, ". One login belongs to one worker. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 14)(22, "button", 15);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_8_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveStaff());
    });
    \u0275\u0275text(23, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 16);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_8_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelStaff());
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", f_r4.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", f_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r4.is_bookable);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", f_r4.loginEmail)("options", ctx_r1.loginOptions())("clearable", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !f_r4.name.trim());
  }
}
function StaffAdminComponent_Conditional_9_Conditional_0_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "span");
    \u0275\u0275text(2, "from");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function StaffAdminComponent_Conditional_9_Conditional_0_For_8_Conditional_4_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(r_r7.start, $event) || (r_r7.start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function StaffAdminComponent_Conditional_9_Conditional_0_For_8_Conditional_4_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const r_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(r_r7.end, $event) || (r_r7.end = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "(0\u201324)");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", r_r7.start);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", r_r7.end);
  }
}
function StaffAdminComponent_Conditional_9_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "label", 22)(2, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function StaffAdminComponent_Conditional_9_Conditional_0_For_8_Template_input_ngModelChange_2_listener($event) {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(r_r7.assigned, $event) || (r_r7.assigned = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StaffAdminComponent_Conditional_9_Conditional_0_For_8_Conditional_4_Template, 9, 2, "div", 23);
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_9_Conditional_0_For_8_Template_button_click_5_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveRow(r_r7));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r7.assigned);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r7.name, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r7.assigned ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.savingRow() === r_r7.serviceId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingRow() === r_r7.serviceId ? "\u2026" : "Save", " ");
  }
}
function StaffAdminComponent_Conditional_9_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Create a service first (Services tab).");
    \u0275\u0275elementEnd();
  }
}
function StaffAdminComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_9_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeManage());
    });
    \u0275\u0275text(1, "\u2039 Back to staff");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 17);
    \u0275\u0275text(5, "One shared calendar: a booking for any service blocks that time for all of them.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275repeaterCreate(7, StaffAdminComponent_Conditional_9_Conditional_0_For_8_Template, 7, 5, "div", 21, _forTrack0);
    \u0275\u0275template(9, StaffAdminComponent_Conditional_9_Conditional_0_Conditional_9_Template, 2, 0, "p", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.name, " \u2014 services & hours");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.rows());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.rows().length === 0 ? 9 : -1);
  }
}
function StaffAdminComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "No workers yet.");
    \u0275\u0275elementEnd();
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "not bookable");
    \u0275\u0275elementEnd();
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("signs in as ", ctx, "");
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "reconnect needed \u2014 no calendar permission");
    \u0275\u0275elementEnd();
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("last error: ", c_r12.last_error, "");
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275element(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_0_Conditional_3_Template, 2, 0, "span", 40)(4, StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_0_Conditional_4_Template, 2, 1, "span", 40);
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const s_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.disconnectCalendar(s_r13));
    });
    \u0275\u0275text(6, "Disconnect");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = \u0275\u0275nextContext();
    const s_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.hex(c_r12.calendar_color_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Calendar: ", c_r12.google_email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!c_r12.can_calendar ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r12.last_error ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.calendarBusy() === s_r13.id);
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "No calendar connected \u2014 their jobs won't reach any diary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 43);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const s_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.connectCalendar(s_r13));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.calendarBusy() === s_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.calendarBusy() === s_r13.id ? "Opening Google\u2026" : "Connect Google", " ");
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_0_Template, 7, 6)(1, StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Conditional_1_Template, 4, 2);
    \u0275\u0275elementStart(2, "label", 36)(3, "span");
    \u0275\u0275text(4, "Colour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-select", 37);
    \u0275\u0275listener("changed", function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Template_app_select_changed_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const s_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setColor(s_r13, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const c_r12 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(c_r12.connected ? 0 : 1);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", (tmp_15_0 = c_r12.calendar_color_id) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "")("options", ctx_r1.colorOptions)("searchable", false);
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275template(4, StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_4_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275template(7, StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_7_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275template(9, StaffAdminComponent_Conditional_9_Conditional_2_For_3_Conditional_9_Template, 6, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 33)(11, "button", 34);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Template_button_click_11_listener() {
      const s_r13 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.manageServices(s_r13));
    });
    \u0275\u0275text(12, "Services & hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 34);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Template_button_click_13_listener() {
      const s_r13 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editStaff(s_r13));
    });
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 35);
    \u0275\u0275listener("click", function StaffAdminComponent_Conditional_9_Conditional_2_For_3_Template_button_click_15_listener() {
      const s_r13 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeStaff(s_r13));
    });
    \u0275\u0275text(16, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_17_0;
    const s_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("item--off", !s_r13.is_bookable);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", s_r13.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!s_r13.is_bookable ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.servicesFor(s_r13.id).join(" \xB7 ") || "No services assigned", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.loginFor(s_r13)) ? 7 : -1, tmp_16_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.calendarFor(s_r13.id)) ? 9 : -1, tmp_17_0);
  }
}
function StaffAdminComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StaffAdminComponent_Conditional_9_Conditional_2_Conditional_0_Template, 2, 0, "p", 17);
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275repeaterCreate(2, StaffAdminComponent_Conditional_9_Conditional_2_For_3_Template, 17, 7, "div", 26, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.staff().length === 0 ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.staff());
  }
}
function StaffAdminComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StaffAdminComponent_Conditional_9_Conditional_0_Template, 10, 2)(1, StaffAdminComponent_Conditional_9_Conditional_1_Template, 2, 0, "p", 17)(2, StaffAdminComponent_Conditional_9_Conditional_2_Template, 4, 1);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.managing()) ? 0 : ctx_r1.loading() ? 1 : 2, tmp_1_0);
  }
}
var StaffAdminComponent = class _StaffAdminComponent {
  constructor() {
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.staff = signal([]);
    this.services = signal([]);
    this.assignments = [];
    this.loading = signal(true);
    this.calendars = signal([]);
    this.calendarBusy = signal("");
    this.colorOptions = [
      { value: "", label: "No colour" },
      ...GCAL_COLORS.map((c) => ({ value: c.id, label: c.name, color: c.hex }))
    ];
    this.memberLogins = signal([]);
    this.loginOptions = computed(() => [
      { value: "", label: "Not linked", hint: "this worker has no login" },
      ...this.memberLogins().map((m) => ({
        value: m.email,
        label: m.email,
        hint: m.staff_name ? `${m.role} \xB7 already linked to ${m.staff_name}` : m.role
      }))
    ]);
    this.editingStaff = signal(null);
    this.managing = signal(null);
    this.rows = signal([]);
    this.savingRow = signal(null);
  }
  calendarFor(staffId) {
    return this.calendars().find((c) => c.staff_id === staffId);
  }
  hex(id) {
    return colorHex(id);
  }
  connectCalendar(s) {
    return __async(this, null, function* () {
      if (this.calendarBusy())
        return;
      this.calendarBusy.set(s.id);
      try {
        const res = yield this.admin.connectStaffCalendar(s.id);
        if (!res.url) {
          this.toast.error(res.error ?? "Could not start the Google connection.");
          return;
        }
        window.location.href = res.url;
      } finally {
        this.calendarBusy.set("");
      }
    });
  }
  disconnectCalendar(s) {
    return __async(this, null, function* () {
      const cal = this.calendarFor(s.id);
      if (!(yield this.confirm.ask({
        title: `Disconnect ${s.name}'s calendar`,
        message: `New jobs for ${s.name} will stop appearing on ${cal?.google_email ?? "their calendar"}, and their real diary will no longer block bookings. Events already created are left alone.`,
        confirmLabel: "Disconnect",
        danger: true
      })))
        return;
      this.calendarBusy.set(s.id);
      try {
        const res = yield this.admin.disconnectStaffCalendar(s.id);
        if (!res.ok) {
          this.toast.error(res.error ?? "Could not disconnect.");
          return;
        }
        yield this.reload();
        this.toast.info("Calendar disconnected");
      } finally {
        this.calendarBusy.set("");
      }
    });
  }
  setColor(s, colorId) {
    return __async(this, null, function* () {
      yield this.admin.setStaffCalendarColor(s.id, colorId || null);
      yield this.reload();
    });
  }
  /** The login currently linked to a worker, for the roster line. */
  loginFor(s) {
    return this.memberLogins().find((m) => m.user_id === s.user_id)?.email ?? null;
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
      if (org) {
        const [st, sv, asg, logins, cals] = yield Promise.all([
          this.admin.listStaff(org),
          this.admin.listServices(org),
          this.admin.listStaffServices(),
          this.admin.listMemberLogins(org),
          this.admin.listStaffCalendars(org)
        ]);
        this.staff.set(st);
        this.services.set(sv);
        this.assignments = asg;
        this.memberLogins.set(logins);
        this.calendars.set(cals);
      }
      this.loading.set(false);
    });
  }
  servicesFor(staffId) {
    const ids = this.assignments.filter((a) => a.staff_id === staffId).map((a) => a.service_id);
    return this.services().filter((s) => ids.includes(s.id)).map((s) => s.name);
  }
  // ── Staff add/edit ────────────────────────────────────────────────
  addStaff() {
    this.editingStaff.set({ name: "", email: "", is_bookable: true, loginEmail: "", originalLogin: "" });
  }
  editStaff(s) {
    this.editingStaff.set({
      id: s.id,
      name: s.name,
      email: s.email ?? "",
      is_bookable: s.is_bookable,
      loginEmail: this.loginFor(s) ?? "",
      originalLogin: this.loginFor(s) ?? ""
    });
  }
  cancelStaff() {
    this.editingStaff.set(null);
  }
  saveStaff() {
    return __async(this, null, function* () {
      const f = this.editingStaff();
      const org = this.auth.orgId();
      if (!f || !f.name.trim() || !org)
        return;
      const isNew = !f.id;
      try {
        const id = yield this.admin.saveStaff(org, {
          id: f.id,
          name: f.name.trim(),
          email: f.email.trim() || null,
          is_bookable: f.is_bookable
        });
        if (!id) {
          this.toast.error("Could not save the worker. Please try again.");
          return;
        }
        const wanted = f.loginEmail.trim();
        if (wanted !== f.originalLogin) {
          const res = yield this.admin.linkStaffUser(id, wanted || null);
          if (!res.ok) {
            yield this.reload();
            this.editingStaff.set(null);
            this.toast.error(res.error === "already_linked" ? `Worker saved, but ${wanted} is already the login for "${res.staff_name}". One login, one worker.` : res.error === "not_a_member" ? `Worker saved, but ${wanted} has no access to this organization yet. Add them under Settings \u2192 Team first.` : "Worker saved, but the login could not be linked.", 9e3);
            return;
          }
        }
        this.editingStaff.set(null);
        yield this.reload();
        this.toast.success(`Worker "${f.name.trim()}" ${isNew ? "added" : "updated"}`);
      } catch {
        this.toast.error("Could not save the worker. Please try again.");
      }
    });
  }
  removeStaff(s) {
    return __async(this, null, function* () {
      if (!(yield this.confirm.ask({ title: "Remove worker", message: `Remove worker "${s.name}"?`, confirmLabel: "Remove", danger: true })))
        return;
      try {
        yield this.admin.deleteStaff(s.id);
        yield this.reload();
        this.toast.success(`Worker "${s.name}" removed`);
      } catch {
        this.toast.error("Could not remove the worker.");
      }
    });
  }
  // ── Service assignment + schedule ─────────────────────────────────
  manageServices(s) {
    this.managing.set(s);
    this.rows.set(this.services().map((svc) => {
      const a = this.assignments.find((x) => x.staff_id === s.id && x.service_id === svc.id);
      const range = a?.working_hours?.default?.[0];
      return { serviceId: svc.id, name: svc.name, assigned: !!a, start: range?.start ?? 9, end: range?.end ?? 17 };
    }));
  }
  closeManage() {
    this.managing.set(null);
  }
  saveRow(r) {
    return __async(this, null, function* () {
      const s = this.managing();
      if (!s)
        return;
      this.savingRow.set(r.serviceId);
      try {
        if (r.assigned)
          yield this.admin.assignService(s.id, r.serviceId, { default: [{ start: Number(r.start), end: Number(r.end) }] });
        else
          yield this.admin.unassignService(s.id, r.serviceId);
        yield this.reload();
        this.toast.success(`${r.name} ${r.assigned ? "assigned to" : "removed from"} ${s.name}`);
      } catch {
        this.toast.error("Could not update the assignment.");
      } finally {
        this.savingRow.set(null);
      }
    });
  }
  static {
    this.\u0275fac = function StaffAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffAdminComponent, selectors: [["app-staff-admin"]], decls: 10, vars: 2, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "btn", "btn--primary"], [1, "card", "editor"], [1, "btn", "btn--primary", 3, "click"], [1, "field"], ["type", "text", "placeholder", "Worker name", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "optional", 3, "ngModelChange", "ngModel"], [1, "check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["placeholder", "Not linked", 3, "changed", "value", "options", "clearable"], [1, "hint"], [1, "editor__actions"], [1, "btn", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--ghost", 3, "click"], [1, "muted"], [1, "back", 3, "click"], [1, "sub-h"], [1, "list"], [1, "svc"], [1, "svc__toggle"], [1, "svc__hours"], [1, "btn", "btn--sm", "btn--primary", 3, "click", "disabled"], ["type", "number", "min", "0", "max", "24", 3, "ngModelChange", "ngModel"], [1, "item", 3, "item--off"], [1, "item"], [1, "item__main"], [1, "item__name"], [1, "tag"], [1, "item__meta"], [1, "cal"], [1, "item__actions"], [1, "link-btn", 3, "click"], [1, "link-btn", "link-btn--danger", 3, "click"], [1, "cal__color"], ["size", "sm", "placeholder", "No colour", 3, "changed", "value", "options", "searchable"], [1, "cal__state", "cal__state--on"], [1, "cal__dot"], [1, "cal__warn"], [1, "link-btn", "link-btn--danger", 3, "click", "disabled"], [1, "cal__state"], [1, "link-btn", 3, "click", "disabled"]], template: function StaffAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Staff");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Your workers, the services they do, and their hours.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, StaffAdminComponent_Conditional_7_Template, 2, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, StaffAdminComponent_Conditional_8_Template, 26, 7, "div", 5)(9, StaffAdminComponent_Conditional_9_Template, 3, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(7);
        \u0275\u0275conditional(!ctx.editingStaff() && !ctx.managing() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_1_0 = ctx.editingStaff()) ? 8 : 9, tmp_1_0);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, SelectComponent], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.sub-h[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 6px 0 4px;\n}\n.back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #475569;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0 0 10px;\n}\n.back[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.editor__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 6px;\n}\n.svc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 12px 16px;\n}\n.svc__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14.5px;\n  font-weight: 600;\n  color: #0f172a;\n  min-width: 180px;\n}\n.svc__hours[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #475569;\n}\n.svc__hours[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 56px;\n  padding: 7px 9px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13.5px;\n}\n.svc[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.cal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px 12px;\n  margin-top: 8px;\n  font-size: 12px;\n}\n.cal__state[_ngcontent-%COMP%] {\n  color: var(--color-text-muted, #6b7280);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.cal__state--on[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary, #374151);\n  font-weight: 600;\n}\n.cal__dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.cal__warn[_ngcontent-%COMP%] {\n  color: #b45309;\n  font-weight: 600;\n}\n.cal__color[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.cal__color[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--color-text-muted, #6b7280);\n}\n.cal__color[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%] {\n  min-width: 132px;\n}\n@media (max-width: 560px) {\n  .cal[_ngcontent-%COMP%] {\n    gap: 6px 10px;\n  }\n  .cal__color[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=staff-admin.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffAdminComponent, { className: "StaffAdminComponent", filePath: "src/app/booking/platform/staff/staff-admin.component.ts", lineNumber: 25 });
})();
export {
  StaffAdminComponent
};
//# sourceMappingURL=chunk-FIYHHOYS.js.map
