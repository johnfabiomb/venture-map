import {
  ClientEditorComponent
} from "./chunk-HNN4TJFX.js";
import {
  PaginatorComponent,
  paginate
} from "./chunk-32VX3ME2.js";
import "./chunk-5MZRX563.js";
import {
  BookingDataService
} from "./chunk-EEPGGCLM.js";
import "./chunk-IMYQFKHB.js";
import "./chunk-RKKFBZE5.js";
import "./chunk-BW7NI53J.js";
import "./chunk-SDZFQ4XN.js";
import "./chunk-JZYNJ4ST.js";
import {
  DatePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JW5UDKQ7.js";
import "./chunk-TWWAJFRB.js";

// src/app/booking/platform/clients/client-list/client-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ClientListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "circle", 11)(3, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No clients yet. Add one, or they'll appear here after your first booking.");
    \u0275\u0275elementEnd()();
  }
}
function ClientListComponent_Conditional_13_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 17);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_13_For_19_Template_tr_click_0_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEdit(c_r3));
    });
    \u0275\u0275elementStart(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 23);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 24)(15, "span", 25);
    \u0275\u0275text(16, "Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_12_0 = c_r3.email) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = c_r3.phone) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_14_0 = c_r3.company) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_15_0 = c_r3.vat_number) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 6, c_r3.created_at, "d MMM yy"));
  }
}
function ClientListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "VAT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Since");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, ClientListComponent_Conditional_13_For_19_Template, 17, 9, "tr", 15, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "app-paginator", 16);
    \u0275\u0275listener("pageChange", function ClientListComponent_Conditional_13_Template_app_paginator_pageChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.paged.setPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r3.paged.items());
    \u0275\u0275advance(2);
    \u0275\u0275property("page", ctx_r3.paged.page())("pageCount", ctx_r3.paged.pageCount())("total", ctx_r3.paged.total());
  }
}
var ClientListComponent = class _ClientListComponent {
  constructor() {
    this.data = inject(BookingDataService);
    this.paged = paginate(this.data.clients);
    this.editorOpen = signal(false);
    this.editClient = signal(null);
  }
  openNew() {
    this.editClient.set(null);
    this.editorOpen.set(true);
  }
  openEdit(c) {
    this.editClient.set(c);
    this.editorOpen.set(true);
  }
  static {
    this.\u0275fac = function ClientListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientListComponent, selectors: [["app-client-list"]], decls: 15, vars: 3, consts: [[1, "page"], [1, "page__head"], [1, "page__title"], [1, "page__sub"], [1, "head-actions"], [1, "btn", "btn--primary", 3, "click"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 3v10M3 8h10"], [1, "empty"], [3, "openChange", "open", "client"], ["viewBox", "0 0 48 48", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "18", "cy", "18", "r", "8"], ["d", "M6 42c0-7 5-11 12-11s12 4 12 11"], [1, "table-wrap"], [1, "table"], [1, "row"], [3, "pageChange", "page", "pageCount", "total"], [1, "row", 3, "click"], ["data-label", "Name", 1, "cell--client"], ["data-label", "Email"], ["data-label", "Phone"], ["data-label", "Company"], ["data-label", "VAT"], ["data-label", "Since", 1, "cell--date"], ["data-label", "", 1, "cell--edit"], [1, "link"]], template: function ClientListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Everyone you've worked with");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function ClientListComponent_Template_button_click_8_listener() {
          return ctx.openNew();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 6);
        \u0275\u0275element(10, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " New client ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, ClientListComponent_Conditional_12_Template, 6, 0, "div", 8)(13, ClientListComponent_Conditional_13_Template, 21, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "app-client-editor", 9);
        \u0275\u0275twoWayListener("openChange", function ClientListComponent_Template_app_client_editor_openChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.editorOpen, $event) || (ctx.editorOpen = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.data.clients().length === 0 ? 12 : 13);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.editorOpen);
        \u0275\u0275property("client", ctx.editClient());
      }
    }, dependencies: [DatePipe, ClientEditorComponent, PaginatorComponent], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  max-width: 1200px;\n}\n@media (max-width: 760px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: center;\n  }\n}\n.page__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.page__sub[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #475569;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 168px;\n  padding: 6px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.14);\n}\n.menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.menu__item[_ngcontent-%COMP%]:hover, \n.menu__item[_ngcontent-%COMP%]:focus-visible {\n  background: #f8fafc;\n  color: #0f172a;\n  outline: none;\n}\n.menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.menu__item--danger[_ngcontent-%COMP%]:hover, \n.menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  transition: 0.15s ease;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.94);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-family: inherit;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(244, 169, 34, 0.12);\n}\n.link-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.link-btn--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.link-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #0f172a;\n  background: #ffffff;\n  width: 100%;\n  box-sizing: border-box;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #F4A922;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n@media (max-width: 560px) {\n  .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #0f172a;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.item--off[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.item__main[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.item__meta[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  margin-top: 2px;\n  overflow-wrap: anywhere;\n}\n.item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  background: #eef2f6;\n  color: #475569;\n  padding: 2px 7px;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  overflow-x: auto;\n}\n@media (max-width: 760px) {\n  .table-wrap[_ngcontent-%COMP%] {\n    border: none;\n    background: none;\n    overflow: visible;\n  }\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n@media (max-width: 760px) {\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    background: #ffffff;\n    border: 1px solid #e2e8f0;\n    border-radius: 12px;\n    padding: 10px 14px;\n    margin: 0 0 10px;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 7px 0;\n    border: none;\n    text-align: right;\n    white-space: normal;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {\n    border-top: 1px solid #e2e8f0;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    margin-right: auto;\n    flex: none;\n    font-size: 12px;\n    font-weight: 600;\n    color: #475569;\n    text-align: left;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label][_ngcontent-%COMP%] {\n    max-width: none;\n    white-space: normal;\n    overflow: visible;\n    text-overflow: clip;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[data-label=""][_ngcontent-%COMP%]::before {\n    content: none;\n  }\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  font-size: 13.5px;\n  color: #475569;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafbfc;\n}\n.cell--client[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n}\n.cell--date[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.cell--edit[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.link[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #F4A922;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border: 1.5px solid transparent;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #F4A922;\n  border-color: #F4A922;\n  color: #000;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.92);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #e2e8f0;\n  color: #475569;\n}\n.btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #94a3b8;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  padding: 64px 40px;\n  color: #94a3b8;\n  text-align: center;\n}\n.empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  opacity: 0.35;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  max-width: 300px;\n}\n/*# sourceMappingURL=client-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientListComponent, { className: "ClientListComponent", filePath: "src/app/booking/platform/clients/client-list/client-list.component.ts", lineNumber: 16 });
})();
export {
  ClientListComponent
};
//# sourceMappingURL=chunk-YNNZZD4Q.js.map
