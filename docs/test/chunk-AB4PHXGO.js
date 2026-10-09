import {
  buildMailto,
  defaultTemplate,
  renderInvoiceEmail
} from "./chunk-3WWECWQ4.js";
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuTrigger
} from "./chunk-JA4IGNBH.js";
import "./chunk-SQGLN6CN.js";
import {
  ExpenseDialogComponent
} from "./chunk-OWQHS4XE.js";
import {
  PaginatorComponent,
  paginate
} from "./chunk-32VX3ME2.js";
import {
  ModalComponent
} from "./chunk-5MZRX563.js";
import {
  ConfirmService
} from "./chunk-YSGXMD6R.js";
import {
  BookingAdminService
} from "./chunk-R4YZFFFN.js";
import {
  BookingDataService
} from "./chunk-YRYRXWOI.js";
import "./chunk-F57EG5LQ.js";
import {
  ToastService
} from "./chunk-IMYQFKHB.js";
import {
  BookingsAuthService
} from "./chunk-76D3SO4I.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BW7NI53J.js";
import {
  InvoiceSheetComponent,
  blobToBase64,
  renderElementToPdfBlob
} from "./chunk-2IJZ7QAG.js";
import "./chunk-7VIBRFOE.js";
import {
  RouterLink
} from "./chunk-F2R7EXZF.js";
import "./chunk-YHDSDEW7.js";
import {
  bookingsDb
} from "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
  CurrencyPipe,
  DatePipe,
  ElementRef,
  SlicePipe,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-JW5UDKQ7.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/ui/recipients-editor/recipients-editor.component.ts
function RecipientsEditorComponent_Conditional_3_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "That doesn't look like an email address");
    \u0275\u0275elementEnd();
  }
}
function RecipientsEditorComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 7);
    \u0275\u0275listener("ngModelChange", function RecipientsEditorComponent_Conditional_3_For_1_Template_input_ngModelChange_1_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set($index_r2, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 8);
    \u0275\u0275listener("click", function RecipientsEditorComponent_Conditional_3_For_1_Template_button_click_2_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove($index_r2));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, RecipientsEditorComponent_Conditional_3_For_1_Conditional_4_Template, 2, 0, "p", 9);
  }
  if (rf & 2) {
    const email_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("rec__input--invalid", ctx_r2.invalid(email_r4));
    \u0275\u0275property("ngModel", email_r4)("name", ctx_r2.label() + "Email" + $index_r2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + (email_r4 || "recipient"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.invalid(email_r4) ? 4 : -1);
  }
}
function RecipientsEditorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RecipientsEditorComponent_Conditional_3_For_1_Template, 5, 6, null, null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.emails());
  }
}
function RecipientsEditorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "No one yet \u2014 add an address below.");
    \u0275\u0275elementEnd();
  }
}
function RecipientsEditorComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function RecipientsEditorComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addAll());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + Add all previous (", ctx_r2.missing().length, ") ");
  }
}
var RecipientsEditorComponent = class _RecipientsEditorComponent {
  constructor() {
    this.emails = model.required();
    this.label = input("To");
    this.suggestions = input([]);
  }
  /**
   * Deliberately permissive. This is a warning shown to the owner, not a gate — the
   * Edge Function validates strictly before sending. Being stricter here would reject
   * perfectly valid addresses (long TLDs, `+` tags, sub-domains) and block a real send.
   */
  invalid(email) {
    const t = email.trim();
    return !!t && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
  }
  /** Suggestions not already in the list — nothing to re-add if they're all present. */
  missing() {
    const have = new Set(this.emails().map((e) => e.trim().toLowerCase()).filter(Boolean));
    return this.suggestions().filter((s) => !have.has(s.trim().toLowerCase()));
  }
  add() {
    this.emails.update((list) => [...list, ""]);
  }
  addAll() {
    const extra = this.missing();
    if (extra.length) {
      this.emails.update((list) => [...list.filter((e) => e.trim()), ...extra]);
    }
  }
  remove(i) {
    this.emails.update((list) => list.filter((_, idx) => idx !== i));
  }
  set(i, value) {
    this.emails.update((list) => list.map((e, idx) => idx === i ? value : e));
  }
  static {
    this.\u0275fac = function RecipientsEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecipientsEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecipientsEditorComponent, selectors: [["app-recipients-editor"]], inputs: { emails: [1, "emails"], label: [1, "label"], suggestions: [1, "suggestions"] }, outputs: { emails: "emailsChange" }, decls: 9, vars: 3, consts: [[1, "rec"], [1, "rec__label"], [1, "rec__empty"], [1, "rec__actions"], ["type", "button", 1, "rec__add", 3, "click"], ["type", "button", 1, "rec__add", "rec__add--prev"], [1, "rec__row"], ["type", "email", "placeholder", "name@email.com", 1, "rec__input", 3, "ngModelChange", "ngModel", "name"], ["type", "button", 1, "rec__remove", 3, "click"], [1, "rec__warn"], ["type", "button", 1, "rec__add", "rec__add--prev", 3, "click"]], template: function RecipientsEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, RecipientsEditorComponent_Conditional_3_Template, 2, 0)(4, RecipientsEditorComponent_Conditional_4_Template, 2, 0, "p", 2);
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
        \u0275\u0275listener("click", function RecipientsEditorComponent_Template_button_click_6_listener() {
          return ctx.add();
        });
        \u0275\u0275text(7, "+ Add address");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, RecipientsEditorComponent_Conditional_8_Template, 2, 1, "button", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.label());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.emails().length ? 3 : 4);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.missing().length ? 8 : -1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.rec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rec__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.rec__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.rec__input[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  min-width: 0;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 14px;\n  color: #0f172a;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 9px 12px;\n  background: #ffffff;\n  box-sizing: border-box;\n}\n.rec__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.rec__input--invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.rec__remove[_ngcontent-%COMP%] {\n  flex: none;\n  width: 32px;\n  height: 38px;\n  padding: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 20px;\n  line-height: 1;\n  border-radius: 6px;\n}\n.rec__remove[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.08);\n}\n.rec__warn[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #ef4444;\n}\n.rec__empty[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.rec__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.rec__add[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 2px 0;\n  cursor: pointer;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  color: #F4A922;\n}\n.rec__add[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.rec__add--prev[_ngcontent-%COMP%] {\n  color: #475569;\n}\n/*# sourceMappingURL=recipients-editor.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecipientsEditorComponent, { className: "RecipientsEditorComponent", filePath: "src/app/booking/ui/recipients-editor/recipients-editor.component.ts", lineNumber: 20 });
})();

// src/app/booking/ui/invoice-send/invoice-send.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function InvoiceSendComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Due ", b_r2.invoice.due_date, "");
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " From ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.google().email);
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Will open in ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "your own mail app");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 Google isn't connected. ");
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "One thing left: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "attach the PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " that was just downloaded \u2014 email drafts can't carry a file.");
    \u0275\u0275elementEnd();
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "The message was too long for your mail app, so it was shortened \u2014 the full text is on your clipboard, paste it in.");
    \u0275\u0275elementEnd();
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 21);
    \u0275\u0275text(2, "Your mail app should have opened.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_26_Conditional_3_Template, 5, 0, "p", 22)(4, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_26_Conditional_4_Template, 2, 0, "p", 22);
    \u0275\u0275elementStart(5, "div", 23)(6, "button", 24);
    \u0275\u0275listener("click", function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_26_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.redownloadPdf());
    });
    \u0275\u0275text(7, "Download the PDF again");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_26_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.copyBody());
    });
    \u0275\u0275text(9, "Copy the message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 25);
    \u0275\u0275listener("click", function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_26_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(11, "Done");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.attachPdf ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.truncated() ? 4 : -1);
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.sendViaGmail());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275listener("click", function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.sendAsDraft());
    });
    \u0275\u0275text(3, "Open in my mail app");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r2.busy() || !ctx_r2.recipientCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.busy() ? "Sending\u2026" : "Send" + (ctx_r2.recipientCount > 1 ? " to " + ctx_r2.recipientCount + " people" : ""), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.busy());
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.sendAsDraft());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r2.busy() || !ctx_r2.recipientCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.busy() ? "Preparing\u2026" : "Open in my mail app", " ");
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Conditional_1_Template, 4, 3)(2, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Conditional_2_Template, 2, 2, "button", 26);
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275listener("click", function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canSendViaGmail ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.busy());
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_28_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
    \u0275\u0275elementStart(1, "span", 36);
    \u0275\u0275text(2, "failed");
    \u0275\u0275elementEnd();
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_28_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34);
    \u0275\u0275text(5);
    \u0275\u0275template(6, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_28_For_5_Conditional_6_Template, 3, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(h_r8.to_emails.join(", "));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", h_r8.kind === "reminder" ? "Reminder" : "Invoice", " \xB7 ", h_r8.channel === "gmail" ? "Sent by email" : "Drafted in your mail app", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(h_r8.status === "failed" ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(9, 5, h_r8.created_at, 0, 10));
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 29);
    \u0275\u0275text(2, "Already sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 30);
    \u0275\u0275repeaterCreate(4, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_28_For_5_Template, 10, 9, "li", 31, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.history());
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_5_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-recipients-editor", 7);
    \u0275\u0275twoWayListener("emailsChange", function InvoiceSendComponent_Conditional_2_Conditional_0_Template_app_recipients_editor_emailsChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.to, $event) || (ctx_r2.to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-recipients-editor", 8);
    \u0275\u0275twoWayListener("emailsChange", function InvoiceSendComponent_Conditional_2_Conditional_0_Template_app_recipients_editor_emailsChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.cc, $event) || (ctx_r2.cc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 9);
    \u0275\u0275template(9, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_9_Template, 3, 1)(10, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_10_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label", 10)(12, "span");
    \u0275\u0275text(13, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceSendComponent_Conditional_2_Conditional_0_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.subject, $event) || (ctx_r2.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label", 10)(16, "span");
    \u0275\u0275text(17, "Message ");
    \u0275\u0275elementStart(18, "button", 12);
    \u0275\u0275listener("click", function InvoiceSendComponent_Conditional_2_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetTemplate());
    });
    \u0275\u0275text(19, "Reset to template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "textarea", 13);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceSendComponent_Conditional_2_Conditional_0_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.body, $event) || (ctx_r2.body = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 14)(22, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function InvoiceSendComponent_Conditional_2_Conditional_0_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.attachPdf, $event) || (ctx_r2.attachPdf = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Attach the invoice PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_25_Template, 2, 1, "p", 2)(26, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_26_Template, 12, 2, "div", 16)(27, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_27_Template, 5, 2, "div", 17)(28, InvoiceSendComponent_Conditional_2_Conditional_0_Conditional_28_Template, 6, 0, "div", 18);
    \u0275\u0275elementStart(29, "div", 19);
    \u0275\u0275element(30, "app-invoice-sheet", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const b_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = b_r2.invoice.number) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "Draft");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((b_r2.client == null ? null : b_r2.client.company) || (b_r2.client == null ? null : b_r2.client.name) || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r2.invoice.due_date ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("emails", ctx_r2.to);
    \u0275\u0275property("suggestions", ctx_r2.prior());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("emails", ctx_r2.cc);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canSendViaGmail ? 9 : 10);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.subject);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.body);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.attachPdf);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.error() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.drafted() ? 26 : 27);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.history().length ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("bundle", b_r2);
  }
}
function InvoiceSendComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error() || "Could not load this invoice.");
  }
}
function InvoiceSendComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InvoiceSendComponent_Conditional_2_Conditional_0_Template, 31, 14)(1, InvoiceSendComponent_Conditional_2_Conditional_1_Template, 2, 1, "p", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.bundle()) ? 0 : 1, tmp_1_0);
  }
}
var SEND_ERRORS = {
  google_not_connected: "Google isn't connected yet. Connect it in Settings \u2192 Email, or send from your own mail app instead.",
  google_disconnected: "Google access was revoked. Reconnect it in Settings \u2192 Email.",
  from_not_verified: `That From address isn't a verified "Send mail as" alias on your Google account. Add it in Gmail \u2192 Settings \u2192 Accounts, then try again.`,
  in_progress: "This one is already being sent \u2014 give it a moment.",
  invalid_recipient: "One of the addresses isn't valid.",
  attachment_too_large: "The PDF is too large to attach. Send it without the attachment \u2014 the link still works.",
  forbidden: "You don't have permission to send for this organisation."
};
var InvoiceSendComponent = class _InvoiceSendComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.open = model(false);
    this.invoiceId = input.required();
    this.kind = model("invoice");
    this.sent = output();
    this.loading = signal(true);
    this.busy = signal(false);
    this.bundle = signal(null);
    this.google = signal({ connected: false });
    this.history = signal([]);
    this.prior = signal([]);
    this.shareUrl = signal(null);
    this.error = signal("");
    this.drafted = signal(false);
    this.truncated = signal(false);
    this.to = [];
    this.cc = [];
    this.subject = "";
    this.body = "";
    this.attachPdf = true;
    this.settings = {};
    this.orgId = "";
    this.sheet = viewChild(InvoiceSheetComponent, { read: ElementRef });
    effect(() => {
      const isOpen = this.open();
      const id = this.invoiceId();
      this.kind();
      if (isOpen && id)
        void this.load();
    });
  }
  get canSendViaGmail() {
    return !!this.google().can_send;
  }
  get recipientCount() {
    return [...this.to, ...this.cc].filter((e) => e.trim()).length;
  }
  load() {
    return __async(this, null, function* () {
      this.loading.set(true);
      this.error.set("");
      this.drafted.set(false);
      this.truncated.set(false);
      try {
        const org = this.auth.orgId();
        if (!org) {
          this.error.set("No organisation.");
          return;
        }
        this.orgId = org;
        const { data } = yield bookingsDb.rpc("get_invoice_by_id", { p_invoice: this.invoiceId() });
        const b = data;
        if (!b) {
          this.error.set("Could not load this invoice.");
          return;
        }
        this.bundle.set(b);
        const [settings, google, history, prior] = yield Promise.all([
          this.admin.getOrgSettings(org),
          this.data.googleStatus(org),
          this.data.listInvoiceSends(this.invoiceId()),
          this.data.priorRecipients(this.invoiceId())
        ]);
        this.settings = settings?.invoice_settings ?? {};
        this.google.set(google);
        this.history.set(history);
        this.prior.set(prior);
        this.shareUrl.set(b.booking ? yield this.data.invoiceShareLink(b.booking.id) : yield this.data.invoiceShareLinkById(this.invoiceId()));
        const clientEmail = (b.client?.email ?? "").trim();
        this.to = prior.length ? [...prior] : clientEmail ? [clientEmail] : [""];
        this.cc = [];
        this.resetTemplate();
      } finally {
        this.loading.set(false);
      }
    });
  }
  /** (Re)render the stored template against this invoice's real figures. */
  resetTemplate() {
    const b = this.bundle();
    if (!b)
      return;
    const stored = this.settings.templates?.[this.kind()];
    const tpl = {
      subject: stored?.subject?.trim() || defaultTemplate(this.kind()).subject,
      body: stored?.body?.trim() || defaultTemplate(this.kind()).body
    };
    const total = Number(b.invoice.total ?? 0);
    const paid = Number(b.total_paid ?? 0);
    const due = b.invoice.due_date;
    const daysOverdue = due ? Math.max(0, Math.floor((Date.now() - new Date(due).getTime()) / 864e5)) : 0;
    const rendered = renderInvoiceEmail(tpl, {
      clientName: b.client?.company || b.client?.name || null,
      invoiceNumber: b.invoice.number,
      invoiceTitle: b.invoice.title,
      total,
      balance: Math.max(0, total - paid),
      amountPaid: paid,
      issueDate: b.invoice.issue_date,
      serviceDate: b.invoice.service_date,
      dueDate: due,
      daysOverdue,
      invoiceLink: this.shareUrl(),
      businessName: b.org.invoice_details?.legal_name?.trim() || b.org.name,
      paymentTermsDays: this.settings.payment_terms_days ?? null,
      currency: b.org.currency ?? "EUR"
    });
    this.subject = rendered.subject;
    this.body = rendered.body;
  }
  clean(list) {
    const seen = /* @__PURE__ */ new Set();
    for (const e of list) {
      const t = e.trim().toLowerCase();
      if (t)
        seen.add(t);
    }
    return [...seen];
  }
  /** Render the offscreen sheet to PDF bytes. Null when there is nothing to render. */
  pdf() {
    return __async(this, null, function* () {
      const el = this.sheet()?.nativeElement;
      const b = this.bundle();
      if (!el || !b)
        return null;
      const blob = yield renderElementToPdfBlob(el);
      return { base64: yield blobToBase64(blob), filename: `${b.invoice.number ?? "invoice"}.pdf` };
    });
  }
  sendViaGmail() {
    return __async(this, null, function* () {
      if (this.busy())
        return;
      const to = this.clean(this.to);
      if (!to.length) {
        this.error.set("Add at least one recipient.");
        return;
      }
      this.busy.set(true);
      this.error.set("");
      try {
        const attachment = this.attachPdf ? yield this.pdf() : null;
        const res = yield this.data.sendInvoiceEmail({
          orgId: this.orgId,
          invoiceId: this.invoiceId(),
          kind: this.kind(),
          to,
          cc: this.clean(this.cc),
          subject: this.subject,
          bodyText: this.body,
          shareUrl: this.shareUrl(),
          attachPdf: !!attachment,
          pdfBase64: attachment?.base64,
          pdfFilename: attachment?.filename,
          // One key per attempt, so a double-click or a retried invoke cannot land twice
          // in a real client's inbox.
          idempotencyKey: crypto.randomUUID()
        });
        if (!res.ok) {
          this.error.set(SEND_ERRORS[res.error ?? ""] ?? res.error ?? "Could not send.");
          return;
        }
        this.toast.success(res.alreadySent ? "Already sent" : "Invoice sent");
        this.sent.emit();
        this.open.set(false);
      } catch (e) {
        this.error.set(e.message);
      } finally {
        this.busy.set(false);
      }
    });
  }
  /**
   * Hand off to the owner's own mail client.
   *
   * Order matters: the PDF is saved and awaited FIRST, so the file is already on disk
   * when the mail window steals focus. `location.href` rather than `window.open` —
   * assigning it isn't popup-blocked and doesn't navigate the page away, because the OS
   * mail handler takes over.
   */
  sendAsDraft() {
    return __async(this, null, function* () {
      if (this.busy())
        return;
      const to = this.clean(this.to);
      if (!to.length) {
        this.error.set("Add at least one recipient.");
        return;
      }
      this.busy.set(true);
      this.error.set("");
      try {
        let attached = false;
        if (this.attachPdf) {
          const p = yield this.pdf();
          if (p) {
            const a = document.createElement("a");
            a.href = `data:application/pdf;base64,${p.base64}`;
            a.download = p.filename;
            a.click();
            attached = true;
          }
        }
        yield this.data.logInvoiceDraft({
          invoiceId: this.invoiceId(),
          kind: this.kind(),
          to,
          cc: this.clean(this.cc),
          subject: this.subject,
          body: this.body,
          shareUrl: this.shareUrl(),
          attached
        });
        const { url, truncated } = buildMailto(to, this.clean(this.cc), this.subject, this.body);
        this.truncated.set(truncated);
        if (truncated) {
          yield navigator.clipboard.writeText(this.body).catch(() => void 0);
        }
        window.location.href = url;
        this.drafted.set(true);
        this.history.set(yield this.data.listInvoiceSends(this.invoiceId()));
        this.sent.emit();
      } catch (e) {
        this.error.set(e.message);
      } finally {
        this.busy.set(false);
      }
    });
  }
  copyBody() {
    return __async(this, null, function* () {
      yield navigator.clipboard.writeText(this.body);
      this.toast.success("Message copied");
    });
  }
  redownloadPdf() {
    return __async(this, null, function* () {
      const p = yield this.pdf();
      if (!p)
        return;
      const a = document.createElement("a");
      a.href = `data:application/pdf;base64,${p.base64}`;
      a.download = p.filename;
      a.click();
    });
  }
  close() {
    this.open.set(false);
  }
  static {
    this.\u0275fac = function InvoiceSendComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceSendComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceSendComponent, selectors: [["app-invoice-send"]], viewQuery: function InvoiceSendComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.sheet, InvoiceSheetComponent, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { open: [1, "open"], invoiceId: [1, "invoiceId"], kind: [1, "kind"] }, outputs: { open: "openChange", kind: "kindChange", sent: "sent" }, decls: 3, vars: 3, consts: [[3, "openChange", "open", "title"], [1, "muted"], [1, "err"], [1, "head"], [1, "head__num"], [1, "head__who"], [1, "head__due"], ["label", "To", 3, "emailsChange", "emails", "suggestions"], ["label", "Cc", 3, "emailsChange", "emails"], [1, "from"], [1, "field"], ["type", "text", "name", "subject", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "link-btn", 3, "click"], ["rows", "11", "name", "body", 3, "ngModelChange", "ngModel"], [1, "check"], ["type", "checkbox", "name", "attachPdf", 3, "ngModelChange", "ngModel"], [1, "draft-done"], [1, "acts"], [1, "hist"], ["aria-hidden", "true", 1, "pdf-stage"], [3, "bundle"], [1, "draft-done__title"], [1, "draft-done__todo"], [1, "draft-done__acts"], ["type", "button", 1, "btn", "btn--ghost", "btn--sm", 3, "click"], ["type", "button", 1, "btn", "btn--primary", "btn--sm", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "disabled"], ["type", "button", 1, "btn", "btn--ghost", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "hist__h"], [1, "list"], [1, "item"], [1, "item__main"], [1, "item__name"], [1, "item__meta"], [1, "tag"], [1, "err-inline"]], template: function InvoiceSendComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal", 0);
        \u0275\u0275twoWayListener("openChange", function InvoiceSendComponent_Template_app_modal_openChange_0_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
          return $event;
        });
        \u0275\u0275template(1, InvoiceSendComponent_Conditional_1_Template, 2, 0, "p", 1)(2, InvoiceSendComponent_Conditional_2_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275twoWayProperty("open", ctx.open);
        \u0275\u0275property("title", ctx.kind() === "reminder" ? "Send a reminder" : "Send invoice");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 1 : 2);
      }
    }, dependencies: [SlicePipe, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, ModalComponent, RecipientsEditorComponent, InvoiceSheetComponent], styles: [`

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
[_nghost-%COMP%] {
  display: block;
}
.muted[_ngcontent-%COMP%] {
  color: #475569;
  font-size: 14px;
}
.err[_ngcontent-%COMP%] {
  margin: 10px 0 0;
  font-size: 13px;
  color: #ef4444;
}
.err-inline[_ngcontent-%COMP%] {
  color: #ef4444;
  font-weight: 600;
}
.head[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px 12px;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 1px solid #e2e8f0;
}
.head__num[_ngcontent-%COMP%] {
  font-weight: 800;
  font-size: 15px;
  color: #0f172a;
}
.head__who[_ngcontent-%COMP%] {
  font-size: 13.5px;
  color: #475569;
}
.head__due[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 700;
  color: #b45309;
}
app-recipients-editor[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 12px;
}
.from[_ngcontent-%COMP%] {
  margin: 4px 0 14px;
  font-size: 12.5px;
  color: #475569;
}
.from[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #0f172a;
}
.field[_ngcontent-%COMP%] {
  margin-bottom: 14px;
}
.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.check[_ngcontent-%COMP%] {
  margin-bottom: 4px;
}
.acts[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}
.acts[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  justify-content: center;
}
.draft-done[_ngcontent-%COMP%] {
  margin-top: 18px;
  padding: 14px 16px;
  border: 1.5px solid #F4A922;
  border-radius: 8px;
  background: rgba(244, 169, 34, 0.12);
}
.draft-done__title[_ngcontent-%COMP%] {
  margin: 0 0 6px;
  font-size: 13.5px;
  font-weight: 700;
  color: #0f172a;
}
.draft-done__todo[_ngcontent-%COMP%] {
  margin: 0 0 8px;
  font-size: 13px;
  color: #475569;
}
.draft-done__acts[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.hist[_ngcontent-%COMP%] {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}
.hist__h[_ngcontent-%COMP%] {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
}
.hist[_ngcontent-%COMP%]   .item__name[_ngcontent-%COMP%] {
  font-size: 13px;
  overflow-wrap: anywhere;
}
.pdf-stage[_ngcontent-%COMP%] {
  position: fixed;
  left: -10000px;
  top: 0;
  width: 794px;
  pointer-events: none;
}
/*# sourceMappingURL=invoice-send.component.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceSendComponent, { className: "InvoiceSendComponent", filePath: "src/app/booking/ui/invoice-send/invoice-send.component.ts", lineNumber: 49 });
})();

// src/app/booking/platform/invoices/invoices-admin.component.ts
var _forTrack02 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function InvoicesAdminComponent_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    \u0275\u0275property("value", y_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r3);
  }
}
function InvoicesAdminComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 10);
    \u0275\u0275listener("change", function InvoicesAdminComponent_Conditional_8_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setYear($event.target.value));
    });
    \u0275\u0275elementStart(1, "option", 11);
    \u0275\u0275text(2, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, InvoicesAdminComponent_Conditional_8_For_4_Template, 2, 2, "option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv());
    });
    \u0275\u0275text(6, "Export CSV");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.year());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.years());
  }
}
function InvoicesAdminComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No invoices yet.");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_For_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.counts()[t_r5.key]);
  }
}
function InvoicesAdminComponent_Conditional_13_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_For_32_Template_button_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTab(t_r5.key));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InvoicesAdminComponent_Conditional_13_For_32_Conditional_3_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("tab--active", ctx_r1.tab() === t_r5.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.counts()[t_r5.key] ? 3 : -1);
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Nothing deleted. Removed invoices appear here and can be brought back.");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 32);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 33)(15, "button", 34);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_For_17_Template_button_click_15_listener() {
      const d_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.restore(d_r8));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    const d_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = d_r8.invoice_number) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "Draft");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_14_0 = d_r8.client_name) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r8.service_date ? \u0275\u0275pipeBind2(7, 7, d_r8.service_date, "d MMM y") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 10, d_r8.amount_gross, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 15, d_r8.deleted_at, "d MMM y"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.restoring() === d_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.restoring() === d_r8.id ? "Restoring\u2026" : "Restore", " ");
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "table", 25)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 26);
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Deleted");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_For_17_Template, 17, 18, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "app-paginator", 27);
    \u0275\u0275listener("pageChange", function InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_Template_app_paginator_pageChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.pagedDeleted.setPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.pagedDeleted.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r1.pagedDeleted.page())("pageCount", ctx_r1.pagedDeleted.pageCount())("total", ctx_r1.pagedDeleted.total());
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_0_Template, 2, 0, "p", 7)(1, InvoicesAdminComponent_Conditional_13_Conditional_33_Conditional_1_Template, 19, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.deleted().length === 0 ? 0 : 1);
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No invoices match this filter.");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r11.days_overdue, "d overdue");
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const r_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCost(r_r11));
    });
    \u0275\u0275text(1, "Add a cost\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const r_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSend(r_r11, "reminder"));
    });
    \u0275\u0275text(1, "Send reminder\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "a", 51);
    \u0275\u0275text(2, "Edit invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const r_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.open(r_r11));
    });
    \u0275\u0275text(4, "View / print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const r_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyShareLink(r_r11));
    });
    \u0275\u0275text(6, "Copy share link");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Conditional_7_Template, 2, 0, "button", 53);
    \u0275\u0275elementStart(8, "button", 52);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const r_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSend(r_r11, "invoice"));
    });
    \u0275\u0275text(9, "Send by email\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Conditional_10_Template, 2, 0, "button", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.editLink(r_r11));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(r_r11.booking_id ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(r_r11.balance_due > 0 ? 10 : -1);
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_Template_tr_click_0_listener() {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.open(r_r11));
    });
    \u0275\u0275elementStart(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 37);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 40);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 41);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 42)(25, "span", 43);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_Conditional_27_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 33)(29, "button", 45);
    \u0275\u0275listener("click", function InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_Template_button_click_29_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 46);
    \u0275\u0275element(31, "circle", 47)(32, "circle", 48)(33, "circle", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_ng_template_34_Template, 11, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    const r_r11 = ctx.$implicit;
    const rowMenu_r15 = \u0275\u0275reference(35);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = r_r11.invoice_number) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.service_date ? \u0275\u0275pipeBind2(5, 22, r_r11.service_date, "d MMM y") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("due", r_r11.is_overdue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r11.due_date ? \u0275\u0275pipeBind2(8, 25, r_r11.due_date, "d MMM y") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_17_0 = r_r11.client_name) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_18_0 = r_r11.staff_name) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_19_0 = r_r11.service_name) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 28, r_r11.amount_gross, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(20, 33, r_r11.amount_paid, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("due", r_r11.balance_due > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(23, 38, r_r11.balance_due, ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge--paid", r_r11.payment_status === "paid")("badge--partial", r_r11.payment_status === "partial")("badge--unpaid", r_r11.payment_status === "unpaid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(r_r11));
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r11.is_overdue ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("cdkMenuTriggerFor", rowMenu_r15);
  }
}
function InvoicesAdminComponent_Conditional_13_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "table", 25)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Worker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 26);
    \u0275\u0275text(19, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 26);
    \u0275\u0275text(21, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, InvoicesAdminComponent_Conditional_13_Conditional_35_For_27_Template, 36, 43, "tr", 35, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "app-paginator", 27);
    \u0275\u0275listener("pageChange", function InvoicesAdminComponent_Conditional_13_Conditional_35_Template_app_paginator_pageChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.paged.setPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(26);
    \u0275\u0275repeater(ctx_r1.paged.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r1.paged.page())("pageCount", ctx_r1.paged.pageCount())("total", ctx_r1.paged.total());
  }
}
function InvoicesAdminComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3, "Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "span", 16);
    \u0275\u0275text(8, "Billed (gross)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 15)(13, "span", 16);
    \u0275\u0275text(14, "Collected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 18);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "span", 16);
    \u0275\u0275text(20, "Outstanding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 19);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "span", 16);
    \u0275\u0275text(26, "Overdue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 17);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 20);
    \u0275\u0275repeaterCreate(31, InvoicesAdminComponent_Conditional_13_For_32_Template, 4, 4, "button", 21, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, InvoicesAdminComponent_Conditional_13_Conditional_33_Template, 2, 1)(34, InvoicesAdminComponent_Conditional_13_Conditional_34_Template, 2, 0, "p", 7)(35, InvoicesAdminComponent_Conditional_13_Conditional_35_Template, 29, 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.counts().all);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 8, ctx_r1.totalBilled(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 13, ctx_r1.totalPaid(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(23, 18, ctx_r1.outstanding(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("summary__val--due", ctx_r1.overdueTotal() > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(29, 23, ctx_r1.overdueTotal(), ctx_r1.currency(), "symbol", "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.tab() === "deleted" ? 33 : ctx_r1.filtered().length === 0 ? 34 : 35);
  }
}
var STATUS_LABEL = {
  unpaid: "Unpaid",
  partial: "Partial",
  paid: "Paid"
};
var InvoicesAdminComponent = class _InvoicesAdminComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.admin = inject(BookingAdminService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.confirm = inject(ConfirmService);
    this.currency = signal("EUR");
    this.invoices = signal([]);
    this.loading = signal(true);
    this.sendOpen = signal(false);
    this.sendId = signal("");
    this.sendKind = signal("invoice");
    this.deleted = signal([]);
    this.restoring = signal("");
    this.costOpen = signal(false);
    this.costBookingId = signal(null);
    this.year = signal("all");
    this.years = computed(() => {
      const ys = /* @__PURE__ */ new Set();
      for (const r of this.invoices()) {
        const y = this.rowYear(r);
        if (y)
          ys.add(y);
      }
      return [...ys].sort((a, b) => b.localeCompare(a));
    });
    this.yearScoped = computed(() => {
      const y = this.year();
      return y === "all" ? this.invoices() : this.invoices().filter((r) => this.rowYear(r) === y);
    });
    this.tabs = [
      { key: "all", label: "All" },
      { key: "unpaid", label: "Unpaid" },
      { key: "overdue", label: "Overdue" },
      { key: "partial", label: "Partially paid" },
      { key: "paid", label: "Paid" },
      { key: "deleted", label: "Deleted" }
    ];
    this.tab = signal("all");
    this.counts = computed(() => {
      const c = {
        all: 0,
        unpaid: 0,
        partial: 0,
        paid: 0,
        overdue: 0,
        // Counted from its own list, not from yearScoped — deleted rows never appear there.
        deleted: this.deleted().length
      };
      for (const r of this.yearScoped()) {
        c.all++;
        c[r.payment_status]++;
        if (r.is_overdue)
          c.overdue++;
      }
      return c;
    });
    this.filtered = computed(() => {
      const t = this.tab();
      if (t === "deleted")
        return [];
      if (t === "all")
        return this.yearScoped();
      if (t === "overdue")
        return this.yearScoped().filter((r) => r.is_overdue);
      return this.yearScoped().filter((r) => r.payment_status === t);
    });
    this.paged = paginate(this.filtered);
    this.pagedDeleted = paginate(this.deleted);
    this.totalBilled = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_gross, 0));
    this.totalNet = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_net, 0));
    this.overdueTotal = computed(() => this.yearScoped().reduce((s, r) => s + (r.is_overdue ? r.balance_due : 0), 0));
    this.totalPaid = computed(() => this.yearScoped().reduce((s, r) => s + r.amount_paid, 0));
    this.outstanding = computed(() => this.yearScoped().reduce((s, r) => s + r.balance_due, 0));
  }
  loadDeleted() {
    return __async(this, null, function* () {
      this.deleted.set(yield this.data.listDeletedInvoices());
    });
  }
  restore(d) {
    return __async(this, null, function* () {
      if (this.restoring())
        return;
      if (!(yield this.confirm.ask({
        title: "Restore invoice",
        message: `Bring ${d.invoice_number ?? "this invoice"} back, with its lines and share links?`,
        confirmLabel: "Restore"
      })))
        return;
      this.restoring.set(d.id);
      try {
        const res = yield this.data.restoreInvoice(d.id);
        if (!res.restored) {
          this.toast.error(res.error ?? "Could not restore.");
          return;
        }
        this.toast.success("Invoice restored");
        yield Promise.all([this.reload(), this.loadDeleted()]);
      } finally {
        this.restoring.set("");
      }
    });
  }
  openCost(r) {
    if (!r.booking_id)
      return;
    this.costBookingId.set(r.booking_id);
    this.costOpen.set(true);
  }
  openSend(r, kind) {
    this.sendId.set(r.id);
    this.sendKind.set(kind);
    this.sendOpen.set(true);
  }
  /** An invoice's year: its own service date, falling back to its number's year. */
  rowYear(r) {
    if (r.service_date)
      return r.service_date.slice(0, 4);
    return r.number_year ? String(r.number_year) : "";
  }
  setTab(t) {
    this.tab.set(t);
    this.paged.reset();
  }
  setYear(y) {
    this.year.set(y);
    this.paged.reset();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.auth.initialize();
      const org = this.auth.orgId();
      if (org) {
        const s = yield this.admin.getOrgSettings(org);
        this.currency.set(s?.currency || "EUR");
      }
      this.invoices.set(yield this.data.queryInvoices());
      this.loading.set(false);
      void this.loadDeleted();
    });
  }
  /** Re-pull the rows. Sending can ISSUE a draft, which gives it a number and changes
   *  which tab it belongs to — so the list must refresh, not just the dialog. */
  reload() {
    return __async(this, null, function* () {
      this.invoices.set(yield this.data.queryInvoices());
    });
  }
  statusLabel(r) {
    return STATUS_LABEL[r.payment_status];
  }
  /** Open the printable invoice. A booking-linked one keeps its existing URL so old
   *  links stay valid; a standalone invoice is addressed by its own id via `?inv=`. */
  open(r) {
    const url = r.booking_id ? `/book/invoice/${r.booking_id}` : `/book/invoice?inv=${r.id}`;
    window.open(url, "_blank", "noopener");
  }
  /** Booking-linked invoices keep the booking-keyed editor route (the booking detail
   *  page links there); a standalone invoice opens by its own id. */
  editLink(r) {
    return r.booking_id ? ["/bookings/invoice-edit", r.booking_id] : ["/bookings/invoices/edit", r.id];
  }
  /** Copy the client-shareable (no-login) invoice link.
   *  A booking-linked invoice reuses its pay-link token so nothing changes for existing
   *  clients. A standalone invoice mints an INVOICE token, which grants only "view this
   *  invoice" — not the pay page and the deliverables a pay link would also open. */
  copyShareLink(r) {
    return __async(this, null, function* () {
      const url = r.booking_id ? yield this.data.invoiceShareLink(r.booking_id) : yield this.data.invoiceShareLinkById(r.id);
      if (!url) {
        this.toast.error("Could not create the invoice link.");
        return;
      }
      yield navigator.clipboard.writeText(url);
      this.toast.success("Invoice link copied \u2014 share it with your client");
    });
  }
  /** Download the visible list as CSV for the accountant. */
  exportCsv() {
    const rows = [["Invoice", "Date", "Client", "Worker", "Service", "Gross", "Net", "Paid", "Balance", "Status"]];
    for (const r of this.filtered()) {
      rows.push([
        r.invoice_number ?? "",
        (r.service_date ?? "").slice(0, 10),
        (r.client_name ?? "").replace(/"/g, '""'),
        (r.staff_name ?? "").replace(/"/g, '""'),
        (r.service_name ?? "").replace(/"/g, '""'),
        r.amount_gross.toFixed(2),
        r.amount_net.toFixed(2),
        r.amount_paid.toFixed(2),
        r.balance_due.toFixed(2),
        r.payment_status
      ]);
    }
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `invoices-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function InvoicesAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoicesAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesAdminComponent, selectors: [["app-invoices-admin"]], decls: 16, vars: 7, consts: [["rowMenu", ""], [1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-tools"], ["routerLink", "/bookings/invoices/new", 1, "btn", "btn--primary"], [1, "muted"], [3, "openChange", "saved", "open", "forBookingId"], [3, "openChange", "kindChange", "sent", "open", "invoiceId", "kind"], [1, "year-select", 3, "change", "value"], ["value", "all"], [3, "value"], [1, "btn", "btn--ghost", 3, "click"], [1, "summary"], [1, "summary__card"], [1, "summary__label"], [1, "summary__val"], [1, "summary__val", "summary__val--ok"], [1, "summary__val", "summary__val--due"], ["role", "tablist", 1, "tabs"], ["role", "tab", 1, "tab", 3, "tab--active"], ["role", "tab", 1, "tab", 3, "click"], [1, "tab__count"], [1, "table-wrap"], [1, "table"], [1, "num"], [3, "pageChange", "page", "pageCount", "total"], ["data-label", "Invoice", 1, "mono"], ["data-label", "Client", 1, "ellipsis"], ["data-label", "Date"], ["data-label", "Total", 1, "num"], ["data-label", "Deleted"], ["data-label", "", 1, "actions"], [1, "link-btn", 3, "click", "disabled"], [1, "row"], [1, "row", 3, "click"], ["data-label", "Due"], ["data-label", "Worker", 1, "ellipsis"], ["data-label", "Service", 1, "ellipsis"], ["data-label", "Paid", 1, "num"], ["data-label", "Balance", 1, "num"], ["data-label", "Status"], [1, "badge"], [1, "badge", "badge--overdue"], ["aria-label", "Actions", 1, "kebab", 3, "click", "cdkMenuTriggerFor"], ["viewBox", "0 0 20 20", "width", "18", "height", "18", "fill", "currentColor"], ["cx", "10", "cy", "4", "r", "1.7"], ["cx", "10", "cy", "10", "r", "1.7"], ["cx", "10", "cy", "16", "r", "1.7"], ["cdkMenu", "", 1, "menu"], ["cdkMenuItem", "", 1, "menu__item", 3, "routerLink"], ["cdkMenuItem", "", 1, "menu__item", 3, "click"], ["cdkMenuItem", "", 1, "menu__item"]], template: function InvoicesAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
        \u0275\u0275text(4, "Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Your money record. An invoice can sit on a job in the calendar, or stand on its own.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275template(8, InvoicesAdminComponent_Conditional_8_Template, 7, 1);
        \u0275\u0275elementStart(9, "a", 6);
        \u0275\u0275text(10, "New invoice");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, InvoicesAdminComponent_Conditional_11_Template, 2, 0, "p", 7)(12, InvoicesAdminComponent_Conditional_12_Template, 2, 0, "p", 7)(13, InvoicesAdminComponent_Conditional_13_Template, 36, 28);
        \u0275\u0275elementStart(14, "app-expense-dialog", 8);
        \u0275\u0275twoWayListener("openChange", function InvoicesAdminComponent_Template_app_expense_dialog_openChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.costOpen, $event) || (ctx.costOpen = $event);
          return $event;
        });
        \u0275\u0275listener("saved", function InvoicesAdminComponent_Template_app_expense_dialog_saved_14_listener() {
          return ctx.reload();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "app-invoice-send", 9);
        \u0275\u0275twoWayListener("openChange", function InvoicesAdminComponent_Template_app_invoice_send_openChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sendOpen, $event) || (ctx.sendOpen = $event);
          return $event;
        })("kindChange", function InvoicesAdminComponent_Template_app_invoice_send_kindChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sendKind, $event) || (ctx.sendKind = $event);
          return $event;
        });
        \u0275\u0275listener("sent", function InvoicesAdminComponent_Template_app_invoice_send_sent_15_listener() {
          return ctx.reload();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.invoices().length > 0 ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 11 : ctx.invoices().length === 0 ? 12 : 13);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("open", ctx.costOpen);
        \u0275\u0275property("forBookingId", ctx.costBookingId());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("open", ctx.sendOpen);
        \u0275\u0275property("invoiceId", ctx.sendId());
        \u0275\u0275twoWayProperty("kind", ctx.sendKind);
      }
    }, dependencies: [DatePipe, CurrencyPipe, RouterLink, CdkMenuTrigger, CdkMenu, CdkMenuItem, InvoiceSendComponent, ExpenseDialogComponent, PaginatorComponent], styles: [`

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
[_nghost-%COMP%] {
  display: block;
}
.page[_ngcontent-%COMP%] {
  max-width: 1600px;
  padding: 36px 48px;
}
@media (max-width: 900px) {
  .page[_ngcontent-%COMP%] {
    padding: 24px 20px;
  }
}
.head-tools[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.year-select[_ngcontent-%COMP%] {
  padding: 8px 12px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  font-family: inherit;
  color: #0f172a;
  background: #ffffff;
  cursor: pointer;
}
.summary[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}
.tabs[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 2px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 4px;
}
.tab[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  border-radius: 8px;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.tab[_ngcontent-%COMP%]:hover {
  color: #0f172a;
}
.tab--active[_ngcontent-%COMP%] {
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
}
.tab__count[_ngcontent-%COMP%] {
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  background: #e2e8f0;
  color: #475569;
}
.tab--active[_ngcontent-%COMP%]   .tab__count[_ngcontent-%COMP%] {
  background: rgba(244, 169, 34, 0.12);
  color: #0f172a;
}
.badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 3px 9px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
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
.badge--overdue[_ngcontent-%COMP%] {
  background: #b45309;
  color: #fff;
  margin-left: 6px;
}
.summary__card[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.summary__label[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.summary__val[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 800;
  color: #0f172a;
}
.summary__val--ok[_ngcontent-%COMP%] {
  color: #16a34a;
}
.summary__val--due[_ngcontent-%COMP%] {
  color: #b45309;
}
.table-wrap[_ngcontent-%COMP%] {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  overflow-x: auto;
}
@media (max-width: 760px) {
  .table-wrap[_ngcontent-%COMP%] {
    border: none;
    background: none;
    overflow: visible;
  }
}
.table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
@media (max-width: 760px) {
  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
    display: none;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
    display: block;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 10px 14px;
    margin: 0 0 10px;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
    margin-bottom: 0;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0;
    border: none;
    text-align: right;
    white-space: normal;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {
    border-top: 1px solid #e2e8f0;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {
    content: attr(data-label);
    margin-right: auto;
    flex: none;
    font-size: 12px;
    font-weight: 600;
    color: #475569;
    text-align: left;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label][_ngcontent-%COMP%] {
    max-width: none;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%]::before {
    content: none;
  }
}
.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 10px 14px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #94a3b8;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  white-space: nowrap;
}
.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 11px 14px;
  font-size: 13.5px;
  color: #475569;
  border-bottom: 1px solid #e2e8f0;
}
.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  cursor: pointer;
}
.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {
  background: rgba(244, 169, 34, 0.12);
}
.num[_ngcontent-%COMP%] {
  text-align: right;
  white-space: nowrap;
}
th.num[_ngcontent-%COMP%] {
  text-align: right;
}
.actions[_ngcontent-%COMP%] {
  text-align: right;
  white-space: nowrap;
}
.kebab[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: none;
  border: none;
  border-radius: 6px;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
}
.kebab[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
  color: #0f172a;
}
.kebab[aria-expanded=true][_ngcontent-%COMP%] {
  background: #f8fafc;
  color: #0f172a;
}
.menu[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  min-width: 168px;
  padding: 6px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);
}
.menu__item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  text-align: left;
  background: none;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  font-family: inherit;
  font-size: 13.5px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: background 0.15s ease;
}
.menu__item[_ngcontent-%COMP%]:hover, 
.menu__item[_ngcontent-%COMP%]:focus-visible {
  background: #f8fafc;
  color: #0f172a;
  outline: none;
}
.mono[_ngcontent-%COMP%] {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: #0f172a;
}
.ellipsis[_ngcontent-%COMP%] {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.due[_ngcontent-%COMP%] {
  color: #b45309;
  font-weight: 600;
}
/*# sourceMappingURL=invoices-admin.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesAdminComponent, { className: "InvoicesAdminComponent", filePath: "src/app/booking/platform/invoices/invoices-admin.component.ts", lineNumber: 44 });
})();
export {
  InvoicesAdminComponent
};
//# sourceMappingURL=chunk-AB4PHXGO.js.map
