import {
  ConfirmService
} from "./chunk-2IDKTD3Z.js";
import {
  LineItemsEditorComponent
} from "./chunk-OGLKJADC.js";
import {
  ClientEditorComponent
} from "./chunk-4DBAHWPQ.js";
import "./chunk-2PKC7M3P.js";
import {
  BookingAdminService
} from "./chunk-M5XBQEFL.js";
import {
  BookingDataService
} from "./chunk-54P4THQU.js";
import "./chunk-FSJG3SUO.js";
import {
  ToastService
} from "./chunk-C7UDYKXR.js";
import {
  BookingsAuthService
} from "./chunk-KKHOHJA2.js";
import "./chunk-DEXNZGWM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-3H6OUIAT.js";
import "./chunk-F6LTA4RG.js";
import "./chunk-4746DPCT.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-Q6APD67I.js";
import "./chunk-GHBBMOR7.js";
import {
  DatePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EBVVQ6Y2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/booking/platform/invoices/invoice-edit.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function InvoiceEditComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Invoice not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 2);
    \u0275\u0275text(3, "\u2190 Invoices");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " New invoice ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Edit invoice ", ctx_r1.invoiceNumber, " ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275text(2, "no job");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.preview());
    });
    \u0275\u0275text(1, "Preview");
    \u0275\u0275elementEnd();
  }
}
function InvoiceEditComponent_Conditional_3_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275property("value", o_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", o_r4.title, "", o_r4.clientName ? " \xB7 " + o_r4.clientName : "", " (", \u0275\u0275pipeBind2(2, 4, o_r4.start_at, "d MMM y"), ")");
  }
}
function InvoiceEditComponent_Conditional_3_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.company || c_r5.name);
  }
}
function InvoiceEditComponent_Conditional_3_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275property("value", s_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6.name);
  }
}
function InvoiceEditComponent_Conditional_3_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("value", s_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.name);
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Saving updates the booking's total (and its calendar event) to match. ");
  }
}
function InvoiceEditComponent_Conditional_3_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Conditional_96_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetToBooking());
    });
    \u0275\u0275text(1, "Reset to booking");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
function InvoiceEditComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "button", 4);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.leave());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 5);
    \u0275\u0275template(5, InvoiceEditComponent_Conditional_3_Conditional_5_Template, 1, 0)(6, InvoiceEditComponent_Conditional_3_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275template(9, InvoiceEditComponent_Conditional_3_Conditional_9_Template, 3, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, InvoiceEditComponent_Conditional_3_Conditional_10_Template, 2, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8)(12, "h2", 9);
    \u0275\u0275text(13, "What this invoice is for");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 10);
    \u0275\u0275text(15, " Leave the job empty to bill work that never had a time slot. Picking a job links the invoice to it and keeps that booking's total in step. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 11)(17, "span");
    \u0275\u0275text(18, "Job ");
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobId, $event) || (ctx_r1.jobId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_select_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onJobChange());
    });
    \u0275\u0275elementStart(22, "option", 14);
    \u0275\u0275text(23, "No job \u2014 invoice only");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, InvoiceEditComponent_Conditional_3_For_25_Template, 3, 7, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 11)(27, "span");
    \u0275\u0275text(28, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.title, $event) || (ctx_r1.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 17)(31, "label", 11)(32, "span");
    \u0275\u0275text(33, "Client ");
    \u0275\u0275elementStart(34, "span", 12);
    \u0275\u0275text(35, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientId, $event) || (ctx_r1.clientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(37, "option", 14);
    \u0275\u0275text(38, "No saved client");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(39, InvoiceEditComponent_Conditional_3_For_40_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "label", 11)(42, "span");
    \u0275\u0275text(43, "\u2026or a one-off name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.contactName, $event) || (ctx_r1.contactName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "button", 4);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openClientEditor());
    });
    \u0275\u0275text(46, "+ New client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 17)(48, "label", 11)(49, "span");
    \u0275\u0275text(50, "Worker ");
    \u0275\u0275elementStart(51, "span", 12);
    \u0275\u0275text(52, "(who earned it)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_select_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.staffId, $event) || (ctx_r1.staffId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(54, "option", 14);
    \u0275\u0275text(55, "Unassigned");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(56, InvoiceEditComponent_Conditional_3_For_57_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "label", 11)(59, "span");
    \u0275\u0275text(60, "Service ");
    \u0275\u0275elementStart(61, "span", 12);
    \u0275\u0275text(62, "(for reporting)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_select_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.serviceId, $event) || (ctx_r1.serviceId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(64, "option", 14);
    \u0275\u0275text(65, "Unattributed");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(66, InvoiceEditComponent_Conditional_3_For_67_Template, 2, 2, "option", 15, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 17)(69, "label", 11)(70, "span");
    \u0275\u0275text(71, "Work done on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.serviceDate, $event) || (ctx_r1.serviceDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "label", 11)(74, "span");
    \u0275\u0275text(75, "Issue date ");
    \u0275\u0275elementStart(76, "span", 12);
    \u0275\u0275text(77, "(sets the number's year)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.issueDate, $event) || (ctx_r1.issueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "div", 8)(80, "h2", 9);
    \u0275\u0275text(81, "Line items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p", 10);
    \u0275\u0275text(83, " These are the source of truth for what the client is charged. ");
    \u0275\u0275template(84, InvoiceEditComponent_Conditional_3_Conditional_84_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "app-line-items-editor", 20);
    \u0275\u0275twoWayListener("itemsChange", function InvoiceEditComponent_Conditional_3_Template_app_line_items_editor_itemsChange_85_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.items, $event) || (ctx_r1.items = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 8)(87, "label", 11)(88, "span");
    \u0275\u0275text(89, "Invoice note ");
    \u0275\u0275elementStart(90, "span", 12);
    \u0275\u0275text(91, "(optional, printed on this invoice)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceEditComponent_Conditional_3_Template_textarea_ngModelChange_92_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "div", 22)(94, "button", 23);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(96, InvoiceEditComponent_Conditional_3_Conditional_96_Template, 2, 1, "button", 24);
    \u0275\u0275elementStart(97, "button", 25);
    \u0275\u0275listener("click", function InvoiceEditComponent_Conditional_3_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.leave());
    });
    \u0275\u0275text(98, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "app-client-editor", 26);
    \u0275\u0275twoWayListener("openChange", function InvoiceEditComponent_Conditional_3_Template_app_client_editor_openChange_99_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.clientEditorOpen, $event) || (ctx_r1.clientEditorOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function InvoiceEditComponent_Conditional_3_Template_app_client_editor_saved_99_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClientCreated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.backLabel);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isNew() ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.billsTo, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isStandalone ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isNew() ? 10 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.jobOptions());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.title);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.clientId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.data.clients());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contactName);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.staffId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.staff());
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.serviceId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.services());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.serviceDate);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.issueDate);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r1.isStandalone ? 84 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("items", ctx_r1.items);
    \u0275\u0275property("currency", ctx_r1.currency)("services", ctx_r1.services());
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canSave);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : ctx_r1.isNew() ? "Create invoice" : "Save invoice", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isStandalone && !ctx_r1.isNew() ? 96 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("open", ctx_r1.clientEditorOpen);
  }
}
var InvoiceEditComponent = class _InvoiceEditComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.data = inject(BookingDataService);
    this.auth = inject(BookingsAuthService);
    this.admin = inject(BookingAdminService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.services = signal([]);
    this.staff = signal([]);
    this.jobOptions = signal([]);
    this.loading = signal(true);
    this.saving = signal(false);
    this.notFound = signal(false);
    this.isNew = signal(false);
    this.clientEditorOpen = signal(false);
    this.invoiceId = null;
    this.invoiceNumber = "";
    this.currency = "EUR";
    this.items = [];
    this.notes = "";
    this.issueDate = "";
    this.title = "";
    this.serviceDate = "";
    this.contactName = "";
    this.jobId = "";
    this.clientId = "";
    this.staffId = "";
    this.serviceId = "";
    this.status = "issued";
    this.backTo = "invoices";
    this.baseline = "";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (!org) {
        this.notFound.set(true);
        this.loading.set(false);
        return;
      }
      const [svcs, stf, jobs] = yield Promise.all([
        this.admin.listServices(org),
        this.admin.listStaff(org),
        this.admin.loadJobOptions(org),
        this.data.loadClients()
      ]);
      this.services.set(svcs.filter((s) => s.is_active));
      this.staff.set(stf);
      this.jobOptions.set(jobs);
      this.currency = (yield this.admin.getOrgSettings(org))?.currency ?? "EUR";
      if (this.route.snapshot.queryParamMap.get("from") === "booking")
        this.backTo = "booking";
      const byInvoice = this.route.snapshot.paramMap.get("invoiceId");
      const byBooking = this.route.snapshot.paramMap.get("id");
      if (byInvoice)
        yield this.loadByInvoice(byInvoice);
      else if (byBooking)
        yield this.loadByBooking(byBooking);
      else
        this.startNew();
      this.baseline = this.snapshot();
      this.loading.set(false);
    });
  }
  /** A brand-new standalone invoice: no booking, dated today. */
  startNew() {
    this.isNew.set(true);
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    this.issueDate = today;
    this.serviceDate = today;
    this.items = [{ description: "", amount: 0 }];
  }
  loadByInvoice(id) {
    return __async(this, null, function* () {
      const inv = yield this.data.getInvoiceById(id);
      if (!inv) {
        this.notFound.set(true);
        return;
      }
      this.applyInvoice(inv.id, inv);
    });
  }
  loadByBooking(bookingId) {
    return __async(this, null, function* () {
      const inv = yield this.data.getInvoiceByBooking(bookingId);
      if (inv) {
        this.applyInvoice(inv.id, inv);
        this.jobId = bookingId;
        return;
      }
      this.jobId = bookingId;
      this.items = yield this.data.getInvoiceItems(bookingId);
      if (this.items.length === 0)
        this.items = [{ description: "", amount: 0 }];
      this.issueDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    });
  }
  applyInvoice(id, inv) {
    this.invoiceId = id;
    this.jobId = inv.booking_id ?? "";
    this.clientId = inv.client_id ?? "";
    this.staffId = inv.staff_id ?? "";
    this.serviceId = inv.service_id ?? "";
    this.contactName = inv.contact_name ?? "";
    this.title = inv.title ?? "";
    this.serviceDate = inv.service_date ?? "";
    this.issueDate = inv.issue_date ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    this.notes = inv.notes ?? "";
    this.status = inv.status ?? "issued";
    this.items = (inv.line_items ?? []).map((i) => __spreadValues(__spreadValues({
      description: i.description,
      amount: Number(i.amount)
    }, i.serviceId ? { serviceId: i.serviceId } : {}), i.hours ? { hours: Number(i.hours) } : {}));
    if (this.items.length === 0)
      this.items = [{ description: "", amount: 0 }];
    this.invoiceNumber = inv.number_seq ? `${inv.number_year}-${String(inv.number_seq).padStart(3, "0")}` : "";
  }
  // ── Derived ─────────────────────────────────────────────────────────
  get total() {
    return this.items.reduce((s, i) => s + (Number(i.amount) || 0), 0);
  }
  get isStandalone() {
    return !this.jobId;
  }
  get selectedClientName() {
    return this.data.clients().find((c) => c.id === this.clientId)?.name ?? "";
  }
  /** Who this invoice bills: a real client row, else the typed one-off name. */
  get billsTo() {
    return this.selectedClientName || this.contactName || "\u2014";
  }
  get canSave() {
    const itemsOk = this.items.length > 0 && this.items.every((i) => i.description.trim().length > 0);
    const identified = !!this.jobId || !!this.clientId || this.contactName.trim().length > 0;
    return !this.saving() && itemsOk && identified;
  }
  snapshot() {
    return JSON.stringify({
      items: this.items,
      notes: this.notes,
      issueDate: this.issueDate,
      title: this.title,
      serviceDate: this.serviceDate,
      contactName: this.contactName,
      jobId: this.jobId,
      clientId: this.clientId,
      staffId: this.staffId,
      serviceId: this.serviceId,
      status: this.status
    });
  }
  isDirty() {
    return !this.loading() && this.snapshot() !== this.baseline;
  }
  onItemsChange(items) {
    this.items = items;
  }
  // ── Client picker (reuses the full editor — never a stub) ───────────
  openClientEditor() {
    this.clientEditorOpen.set(true);
  }
  onClientCreated(c) {
    this.clientId = c.id;
  }
  /** Picking a job adopts its client/worker/date, so a linked invoice starts consistent. */
  onJobChange() {
    const job = this.jobOptions().find((j) => j.id === this.jobId);
    if (!job)
      return;
    if (!this.title)
      this.title = job.title;
    if (!this.serviceDate && job.start_at)
      this.serviceDate = job.start_at.slice(0, 10);
  }
  returnCommands() {
    return this.backTo === "invoices" || !this.jobId ? ["/bookings/invoices"] : ["/bookings", this.jobId];
  }
  get backLabel() {
    return this.backTo === "invoices" || !this.jobId ? "\u2190 Invoices" : "\u2190 Back to booking";
  }
  leave() {
    return __async(this, null, function* () {
      if (this.isDirty() && !(yield this.confirm.ask({
        title: "Unsaved changes",
        message: "You have unsaved changes to this invoice. Leave without saving?",
        confirmLabel: "Leave",
        danger: true
      })))
        return;
      this.router.navigate(this.returnCommands());
    });
  }
  onBeforeUnload(e) {
    if (this.isDirty()) {
      e.preventDefault();
      e.returnValue = "";
    }
  }
  save() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || !this.canSave)
        return;
      this.saving.set(true);
      try {
        const items = this.items.map((i) => __spreadValues(__spreadValues({
          description: i.description.trim(),
          amount: Number(i.amount) || 0
        }, i.serviceId ? { serviceId: i.serviceId } : {}), i.hours ? { hours: i.hours } : {}));
        const invoice = __spreadProps(__spreadValues({}, this.invoiceId ? { id: this.invoiceId } : {}), {
          booking_id: this.jobId || null,
          client_id: this.clientId || null,
          staff_id: this.staffId || null,
          service_id: this.serviceId || null,
          contact_name: this.contactName.trim() || null,
          title: this.title.trim() || null,
          service_date: this.serviceDate || null,
          issue_date: this.issueDate || null,
          notes: this.notes.trim() || null,
          status: this.status
        });
        const res = yield this.data.saveInvoiceRecord(org, invoice, items);
        if (res.error || !res.id) {
          this.toast.error("Could not save the invoice.");
          return;
        }
        this.invoiceId = res.id;
        if (this.jobId) {
          const all = yield this.data.listInvoicesForBooking(this.jobId);
          const gross = all.reduce((sum, r) => sum + Number(r.amount_gross ?? 0), 0);
          yield this.data.setAmount(this.jobId, all.length ? gross : this.total);
        }
        this.baseline = this.snapshot();
        this.toast.success(this.isNew() ? "Invoice created" : "Invoice saved");
        this.router.navigate(this.returnCommands());
      } finally {
        this.saving.set(false);
      }
    });
  }
  /** Only meaningful for a booking-linked invoice: revert the lines to the booking. */
  resetToBooking() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      if (!org || !this.jobId)
        return;
      if (!(yield this.confirm.ask({
        title: "Reset invoice",
        message: "Discard your edits and revert this invoice to the booking details?",
        confirmLabel: "Reset",
        danger: true
      })))
        return;
      this.saving.set(true);
      try {
        yield this.data.resetInvoice(org, this.jobId);
        this.baseline = this.snapshot();
        this.toast.info("Invoice reset to the booking");
        this.router.navigate(this.returnCommands());
      } finally {
        this.saving.set(false);
      }
    });
  }
  /** Preview the printable invoice — by booking when there is one (keeps existing URLs
   *  working), otherwise by the invoice's own id. Unavailable only before the first save,
   *  when there is no invoice id to address yet. */
  preview() {
    if (this.jobId) {
      window.open(`/book/invoice/${this.jobId}`, "_blank", "noopener");
      return;
    }
    if (this.invoiceId)
      window.open(`/book/invoice?inv=${this.invoiceId}`, "_blank", "noopener");
  }
  static {
    this.\u0275fac = function InvoiceEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceEditComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceEditComponent, selectors: [["app-invoice-edit"]], hostBindings: function InvoiceEditComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function InvoiceEditComponent_beforeunload_HostBindingHandler($event) {
          return ctx.onBeforeUnload($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 4, vars: 1, consts: [[1, "page"], [1, "muted"], ["routerLink", "/bookings/invoices", 1, "btn", "btn--ghost"], [1, "page__head"], ["type", "button", 1, "back", 3, "click"], [1, "page__title"], [1, "page__sub"], [1, "btn", "btn--ghost"], [1, "card"], [1, "card__h"], [1, "hint"], [1, "field"], [1, "opt"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "text", "placeholder", "e.g. Drone filming \u2014 Valletta", 3, "ngModelChange", "ngModel"], [1, "field-row"], ["type", "text", "placeholder", "Billed to this name only", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], [3, "itemsChange", "items", "currency", "services"], ["rows", "2", "placeholder", "Anything specific the client asked for on this invoice", 3, "ngModelChange", "ngModel"], [1, "actions"], [1, "btn", "btn--primary", 3, "click", "disabled"], [1, "btn", "btn--ghost", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], [3, "openChange", "saved", "open"], [1, "tag"], [1, "btn", "btn--ghost", 3, "click"], [1, "btn", "btn--ghost", 3, "click", "disabled"]], template: function InvoiceEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, InvoiceEditComponent_Conditional_1_Template, 2, 0, "p", 1)(2, InvoiceEditComponent_Conditional_2_Template, 4, 0)(3, InvoiceEditComponent_Conditional_3_Template, 100, 22);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 1 : ctx.notFound() ? 2 : 3);
      }
    }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe, RouterLink, LineItemsEditorComponent, ClientEditorComponent], styles: [`

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
[_nghost-%COMP%] {
  display: block;
}
.back[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 12.5px;
  color: #F4A922;
  text-decoration: none;
  font-weight: 600;
}
.back[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.tag[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 700;
  color: #b45309;
  background: #fef3c7;
  padding: 2px 8px;
  border-radius: 10px;
}
.card[_ngcontent-%COMP%] {
  padding: 20px;
  margin-bottom: 16px;
}
.card__h[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px;
}
.hint[_ngcontent-%COMP%] {
  font-size: 12.5px;
  color: #94a3b8;
  margin: 0 0 16px;
}
.opt[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-weight: 400;
}
.total-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1.5px solid #e2e8f0;
  font-size: 16px;
  font-weight: 800;
  color: #0f172a;
}
.field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 14px;
}
.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #475569;
}
.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], 
.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
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
.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, 
.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #F4A922;
}
.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  resize: vertical;
}
.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  cursor: pointer;
}
.field-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 0 14px;
}
.field-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {
  min-width: 0;
}
@media (max-width: 560px) {
  .field-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
}
/*# sourceMappingURL=invoice-edit.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceEditComponent, { className: "InvoiceEditComponent", filePath: "src/app/booking/platform/invoices/invoice-edit.component.ts", lineNumber: 33 });
})();
export {
  InvoiceEditComponent
};
//# sourceMappingURL=chunk-ASMZAS6V.js.map
