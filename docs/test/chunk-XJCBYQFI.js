import {
  buildMailto,
  defaultTemplate,
  renderInvoiceEmail
} from "./chunk-3WWECWQ4.js";
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuTrigger
} from "./chunk-YYZD4ABX.js";
import {
  ModalComponent
} from "./chunk-5MZRX563.js";
import {
  BookingAdminService
} from "./chunk-3T6U65XO.js";
import {
  BookingDataService
} from "./chunk-EEPGGCLM.js";
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
  NgControlStatus,
  NgModel
} from "./chunk-BW7NI53J.js";
import {
  InvoiceSheetComponent,
  blobToBase64,
  renderElementToPdfBlob
} from "./chunk-2IJZ7QAG.js";
import {
  RouterLink
} from "./chunk-F2R7EXZF.js";
import {
  bookingsDb
} from "./chunk-SDZFQ4XN.js";
import {
  ElementRef,
  SlicePipe,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
    }, dependencies: [SlicePipe, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, ModalComponent, RecipientsEditorComponent, InvoiceSheetComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.err[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 13px;\n  color: #ef4444;\n}\n.err-inline[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 600;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 6px 12px;\n  padding-bottom: 12px;\n  margin-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.head__num[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 15px;\n  color: #0f172a;\n}\n.head__who[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n}\n.head__due[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #b45309;\n}\napp-recipients-editor[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n}\n.from[_ngcontent-%COMP%] {\n  margin: 4px 0 14px;\n  font-size: 12.5px;\n  color: #475569;\n}\n.from[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.check[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.acts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 18px;\n}\n.acts[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  justify-content: center;\n}\n.draft-done[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding: 14px 16px;\n  border: 1.5px solid #F4A922;\n  border-radius: 8px;\n  background: rgba(244, 169, 34, 0.12);\n}\n.draft-done__title[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.draft-done__todo[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 13px;\n  color: #475569;\n}\n.draft-done__acts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 10px;\n}\n.hist[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid #e2e8f0;\n}\n.hist__h[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n}\n.hist[_ngcontent-%COMP%]   .item__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n.pdf-stage[_ngcontent-%COMP%] {\n  position: fixed;\n  left: -10000px;\n  top: 0;\n  width: 794px;\n  pointer-events: none;\n}\n/*# sourceMappingURL=invoice-send.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceSendComponent, { className: "InvoiceSendComponent", filePath: "src/app/booking/ui/invoice-send/invoice-send.component.ts", lineNumber: 49 });
})();

// src/app/booking/ui/invoice-actions/invoice-actions.component.ts
function InvoiceActionsComponent_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function InvoiceActionsComponent_ng_template_5_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.send.emit("reminder"));
    });
    \u0275\u0275text(1, "Send reminder\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoiceActionsComponent_ng_template_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function InvoiceActionsComponent_ng_template_5_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addCost.emit());
    });
    \u0275\u0275text(1, "Add a cost\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoiceActionsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 7);
    \u0275\u0275listener("click", function InvoiceActionsComponent_ng_template_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.send.emit("invoice"));
    });
    \u0275\u0275text(2, "Send by email\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InvoiceActionsComponent_ng_template_5_Conditional_3_Template, 2, 0, "button", 8);
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function InvoiceActionsComponent_ng_template_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyShareLink());
    });
    \u0275\u0275text(5, "Copy share link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 7);
    \u0275\u0275listener("click", function InvoiceActionsComponent_ng_template_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPrintable());
    });
    \u0275\u0275text(7, "View / print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 9);
    \u0275\u0275text(9, "Edit invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, InvoiceActionsComponent_ng_template_5_Conditional_10_Template, 2, 0, "button", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.invoice().balance_due > 0 ? 3 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r2.editLink());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.invoice().booking_id ? 10 : -1);
  }
}
var InvoiceActionsComponent = class _InvoiceActionsComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.toast = inject(ToastService);
    this.invoice = input.required();
    this.send = output();
    this.addCost = output();
  }
  /**
   * ALWAYS the invoice-keyed route.
   *
   * The booking-keyed one (`/bookings/invoice-edit/:bookingId`) resolves to a booking's
   * OLDEST invoice, so using it for any booking-linked row meant editing a booking's
   * second invoice silently opened its first — live today on BK-2026-094. Keyed on the
   * invoice there is exactly one thing it can open. The booking-keyed route still exists,
   * so links already in the wild keep working.
   */
  editLink() {
    return ["/bookings/invoices/edit", this.invoice().id];
  }
  openPrintable() {
    const r = this.invoice();
    const url = r.booking_id ? `/book/invoice/${r.booking_id}` : `/book/invoice?inv=${r.id}`;
    window.open(url, "_blank", "noopener");
  }
  copyShareLink() {
    return __async(this, null, function* () {
      const r = this.invoice();
      const url = r.booking_id ? yield this.data.invoiceShareLink(r.booking_id) : yield this.data.invoiceShareLinkById(r.id);
      if (!url) {
        this.toast.error("Could not create the invoice link.");
        return;
      }
      yield navigator.clipboard.writeText(url);
      this.toast.success("Invoice link copied \u2014 share it with your client");
    });
  }
  static {
    this.\u0275fac = function InvoiceActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceActionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceActionsComponent, selectors: [["app-invoice-actions"]], inputs: { invoice: [1, "invoice"] }, outputs: { send: "send", addCost: "addCost" }, decls: 7, vars: 1, consts: [["menu", ""], ["aria-label", "Invoice actions", 1, "ia__kebab", 3, "click", "cdkMenuTriggerFor"], ["viewBox", "0 0 20 20", "width", "18", "height", "18", "fill", "currentColor"], ["cx", "10", "cy", "4", "r", "1.7"], ["cx", "10", "cy", "10", "r", "1.7"], ["cx", "10", "cy", "16", "r", "1.7"], ["cdkMenu", "", 1, "ia__menu"], ["cdkMenuItem", "", 1, "ia__item", 3, "click"], ["cdkMenuItem", "", 1, "ia__item"], ["cdkMenuItem", "", 1, "ia__item", 3, "routerLink"]], template: function InvoiceActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "button", 1);
        \u0275\u0275listener("click", function InvoiceActionsComponent_Template_button_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 2);
        \u0275\u0275element(2, "circle", 3)(3, "circle", 4)(4, "circle", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, InvoiceActionsComponent_ng_template_5_Template, 11, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const menu_r6 = \u0275\u0275reference(6);
        \u0275\u0275property("cdkMenuTriggerFor", menu_r6);
      }
    }, dependencies: [RouterLink, CdkMenuTrigger, CdkMenu, CdkMenuItem], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n.ia__kebab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n}\n.ia__kebab[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #475569;\n}\n.ia__menu[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.14);\n  padding: 5px;\n  min-width: 190px;\n}\n.ia__item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 9px 12px;\n  background: none;\n  border: none;\n  border-radius: 7px;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 13px;\n  color: #0f172a;\n  text-decoration: none;\n}\n.ia__item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n/*# sourceMappingURL=invoice-actions.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceActionsComponent, { className: "InvoiceActionsComponent", filePath: "src/app/booking/ui/invoice-actions/invoice-actions.component.ts", lineNumber: 70 });
})();

export {
  InvoiceSendComponent,
  InvoiceActionsComponent
};
//# sourceMappingURL=chunk-XJCBYQFI.js.map
