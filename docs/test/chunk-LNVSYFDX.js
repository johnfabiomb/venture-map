import {
  ModalComponent
} from "./chunk-YT6H6K5O.js";
import {
  SelectComponent
} from "./chunk-XYER4DO7.js";
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
  bookingsDb
} from "./chunk-KKVK7E5Z.js";
import {
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VEX6DIAJ.js";
import {
  __async
} from "./chunk-TWWAJFRB.js";

// src/app/booking/core/services/documents.service.ts
var BUCKET = "documents";
var DocumentsService = class _DocumentsService {
  constructor() {
    this.auth = inject(BookingsAuthService);
  }
  listTypes(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.from("document_types").select("id, key, label, kind, tracks_expiry, is_standard, sort").eq("org_id", orgId).order("sort");
      if (error) {
        console.error("[Documents] listTypes:", error);
        return [];
      }
      return data ?? [];
    });
  }
  /** The reusable org library — your insurance certificate, your registration. */
  listLibrary(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.from("documents").select("*").eq("org_id", orgId).eq("is_library", true).order("created_at", { ascending: false });
      if (error) {
        console.error("[Documents] listLibrary:", error);
        return [];
      }
      return data ?? [];
    });
  }
  /** Everything attached to one booking, library items included. */
  listForBooking(bookingId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.from("booking_documents").select("document:document_id(*)").eq("booking_id", bookingId);
      if (error) {
        console.error("[Documents] listForBooking:", error);
        return [];
      }
      return (data ?? []).map((r) => Array.isArray(r.document) ? r.document[0] : r.document).filter((d) => !!d);
    });
  }
  /**
   * The storage path for a document's file. The leading org id is what the storage
   * policy authorises against — never assemble one by hand elsewhere.
   * The filename is sanitised because it reaches a URL and a Content-Disposition header.
   */
  pathFor(orgId, docId, fileName) {
    const safe = fileName.replace(/[^\w.\- ]+/g, "_").replace(/\s+/g, "_").slice(-80);
    return `${orgId}/${docId}/${safe}`;
  }
  /**
   * Create the row FIRST, then upload. The other order risks a file in the bucket that no
   * row points at — invisible, undeletable through the app, and still counting against
   * storage. This way a failed upload leaves a document that visibly has no file, which
   * can be retried or removed.
   */
  upload(orgId, file, meta) {
    return __async(this, null, function* () {
      const { data: row, error: insErr } = yield bookingsDb.from("documents").insert({
        org_id: orgId,
        kind: "file",
        doc_type: meta.docType,
        title: meta.title.trim(),
        is_library: meta.isLibrary,
        issued_on: meta.issuedOn || null,
        expires_on: meta.expiresOn || null,
        notes: meta.notes?.trim() || null,
        file_name: file.name,
        file_size: file.size,
        mime_type: file.type || null
      }).select("id").single();
      if (insErr || !row)
        return { error: insErr?.message ?? "could not create the document" };
      const id = row.id;
      const path = this.pathFor(orgId, id, file.name);
      const { error: upErr } = yield bookingsDb.storage.from(BUCKET).upload(path, file, { contentType: file.type || void 0, upsert: false });
      if (upErr) {
        yield bookingsDb.from("documents").delete().eq("id", id);
        return { error: upErr.message };
      }
      const { error: pathErr } = yield bookingsDb.from("documents").update({ file_path: path }).eq("id", id);
      if (pathErr)
        return { error: pathErr.message };
      return { id };
    });
  }
  /**
   * A short-lived link to the file. The bucket is private, so there is no permanent URL —
   * which is the point: an insurance certificate should not be readable by anyone who
   * once saw a link.
   */
  signedUrl(path, seconds = 120) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.storage.from(BUCKET).createSignedUrl(path, seconds);
      if (error) {
        console.error("[Documents] signedUrl:", error);
        return null;
      }
      return data?.signedUrl ?? null;
    });
  }
  /** Soft-deletes the row and removes the file. The file is not kept: a private bucket
   *  full of documents nobody can see is a liability, not an archive. */
  remove(doc) {
    return __async(this, null, function* () {
      if (doc.file_path) {
        const { error: error2 } = yield bookingsDb.storage.from(BUCKET).remove([doc.file_path]);
        if (error2)
          console.warn("[Documents] file remove failed:", error2.message);
      }
      const { error } = yield bookingsDb.rpc("soft_delete", { p_table: "documents", p_id: doc.id });
      if (error)
        console.error("[Documents] remove:", error);
    });
  }
  attach(orgId, bookingId, documentId) {
    return __async(this, null, function* () {
      const { error } = yield bookingsDb.from("booking_documents").insert({ org_id: orgId, booking_id: bookingId, document_id: documentId });
      if (error && error.code !== "23505") {
        console.error("[Documents] attach:", error);
      }
    });
  }
  detach(bookingId, documentId) {
    return __async(this, null, function* () {
      const { error } = yield bookingsDb.from("booking_documents").delete().eq("booking_id", bookingId).eq("document_id", documentId);
      if (error)
        console.error("[Documents] detach:", error);
    });
  }
  /** Expired, or expiring within `days`. An out-of-date certificate attached to next
   *  week's job is worse than none, because it looks handled. */
  expiryState(doc, days = 30) {
    if (!doc.expires_on)
      return "none";
    const left = Math.ceil((new Date(doc.expires_on).getTime() - Date.now()) / 864e5);
    if (left < 0)
      return "expired";
    return left <= days ? "soon" : "ok";
  }
  static {
    this.\u0275fac = function DocumentsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocumentsService, factory: _DocumentsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/booking/ui/document-dialog/document-dialog.component.ts
function DocumentDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r1 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", f_r1.name, " \xB7 ", (f_r1.size / 1048576).toFixed(1), " MB");
  }
}
function DocumentDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function DocumentDialogComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 2)(2, "div", 3)(3, "label");
    \u0275\u0275text(4, "Issued");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 14);
    \u0275\u0275listener("ngModelChange", function DocumentDialogComponent_Conditional_20_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.issuedOn.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "label");
    \u0275\u0275text(9, "Expires");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 15);
    \u0275\u0275listener("ngModelChange", function DocumentDialogComponent_Conditional_20_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expiresOn.set($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.issuedOn());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.expiresOn());
  }
}
function DocumentDialogComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 10)(1, "input", 16);
    \u0275\u0275listener("change", function DocumentDialogComponent_Conditional_21_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isLibrary.set(!ctx_r2.isLibrary()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span")(3, "strong");
    \u0275\u0275text(4, "Keep this for other jobs too");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "em");
    \u0275\u0275text(6, "Your insurance or registration covers every booking \u2014 keep it once and attach it when a client asks, instead of uploading it again each time.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isLibrary());
  }
}
var ACCEPT = ".pdf,.png,.jpg,.jpeg,.webp,.heic";
var MAX_BYTES = 25 * 1024 * 1024;
var DocumentDialogComponent = class _DocumentDialogComponent {
  constructor() {
    this.docs = inject(DocumentsService);
    this.auth = inject(BookingsAuthService);
    this.toast = inject(ToastService);
    this.open = model(false);
    this.bookingId = input("");
    this.allowLibraryChoice = input(true);
    this.forceLibrary = input(false);
    this.saved = output();
    this.accept = ACCEPT;
    this.types = signal([]);
    this.file = signal(null);
    this.fileError = signal("");
    this.docType = signal("");
    this.title = signal("");
    this.issuedOn = signal("");
    this.expiresOn = signal("");
    this.isLibrary = signal(false);
    this.saving = signal(false);
    this.typeOptions = computed(() => this.types().filter((t) => t.kind === "file").map((t) => ({ value: t.key, label: t.label })));
    this.typeLabel = computed(() => this.types().find((t) => t.key === this.docType())?.label ?? "");
    this.tracksExpiry = computed(() => !!this.types().find((t) => t.key === this.docType())?.tracks_expiry);
    this.canSave = computed(() => !this.saving() && !!this.file() && !this.fileError() && this.title().trim().length > 0);
    effect(() => {
      if (!this.open())
        return;
      queueMicrotask(() => __async(this, null, function* () {
        const org = this.auth.orgId();
        this.file.set(null);
        this.fileError.set("");
        this.docType.set("");
        this.title.set("");
        this.issuedOn.set("");
        this.expiresOn.set("");
        this.isLibrary.set(this.forceLibrary());
        if (org)
          this.types.set(yield this.docs.listTypes(org));
      }));
    });
  }
  onFile(e) {
    const f = e.target.files?.[0] ?? null;
    this.fileError.set("");
    if (f && f.size > MAX_BYTES) {
      this.fileError.set(`That file is ${(f.size / 1048576).toFixed(1)} MB \u2014 the limit is 25 MB.`);
      this.file.set(null);
      return;
    }
    this.file.set(f);
    if (f && !this.title().trim())
      this.title.set(f.name.replace(/\.[^.]+$/, ""));
  }
  onType(key) {
    this.docType.set(key);
    const label = this.typeLabel();
    if (label && (!this.title().trim() || this.title() === this.file()?.name.replace(/\.[^.]+$/, ""))) {
      this.title.set(label);
    }
  }
  save() {
    return __async(this, null, function* () {
      const org = this.auth.orgId();
      const f = this.file();
      if (!org || !f || this.saving())
        return;
      this.saving.set(true);
      try {
        const res = yield this.docs.upload(org, f, {
          title: this.title(),
          docType: this.docType() || null,
          isLibrary: this.isLibrary() || this.forceLibrary(),
          issuedOn: this.issuedOn() || null,
          expiresOn: this.expiresOn() || null
        });
        if (res.error || !res.id) {
          this.toast.error(`Could not upload: ${res.error ?? "unknown error"}`);
          return;
        }
        if (this.bookingId())
          yield this.docs.attach(org, this.bookingId(), res.id);
        this.toast.success("Document added");
        this.open.set(false);
        this.saved.emit();
      } finally {
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function DocumentDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentDialogComponent, selectors: [["app-document-dialog"]], inputs: { open: [1, "open"], bookingId: [1, "bookingId"], allowLibraryChoice: [1, "allowLibraryChoice"], forceLibrary: [1, "forceLibrary"] }, outputs: { open: "openChange", saved: "saved" }, decls: 27, vars: 13, consts: [["title", "Add a document", 3, "openChange", "open", "dismissable"], [1, "dd"], [1, "field"], [1, "field__top"], ["type", "file", 3, "change", "accept"], [1, "dd__file"], [1, "dd__err"], [1, "field-row"], ["placeholder", "Choose a type", 3, "changed", "value", "options"], ["type", "text", "name", "ddTitle", 3, "ngModelChange", "ngModel", "placeholder"], [1, "dd__check"], [1, "dd__actions"], ["type", "button", 1, "btn", "btn--ghost", 3, "click"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "date", "name", "ddIssued", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "ddExpires", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "change", "checked"]], template: function DocumentDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-modal", 0);
        \u0275\u0275listener("openChange", function DocumentDialogComponent_Template_app_modal_openChange_0_listener($event) {
          return ctx.open.set($event);
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label");
        \u0275\u0275text(5, "File");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "input", 4);
        \u0275\u0275listener("change", function DocumentDialogComponent_Template_input_change_6_listener($event) {
          return ctx.onFile($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, DocumentDialogComponent_Conditional_7_Template, 2, 2, "small", 5)(8, DocumentDialogComponent_Conditional_8_Template, 2, 1, "small", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 2)(11, "div", 3)(12, "label");
        \u0275\u0275text(13, "Type");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "app-select", 8);
        \u0275\u0275listener("changed", function DocumentDialogComponent_Template_app_select_changed_14_listener($event) {
          return ctx.onType($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "label");
        \u0275\u0275text(18, "Name");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "input", 9);
        \u0275\u0275listener("ngModelChange", function DocumentDialogComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.title.set($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, DocumentDialogComponent_Conditional_20_Template, 11, 2, "div", 7)(21, DocumentDialogComponent_Conditional_21_Template, 7, 1, "label", 10);
        \u0275\u0275elementStart(22, "div", 11)(23, "button", 12);
        \u0275\u0275listener("click", function DocumentDialogComponent_Template_button_click_23_listener() {
          return ctx.open.set(false);
        });
        \u0275\u0275text(24, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 13);
        \u0275\u0275listener("click", function DocumentDialogComponent_Template_button_click_25_listener() {
          return ctx.save();
        });
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275property("open", ctx.open())("dismissable", true);
        \u0275\u0275advance(6);
        \u0275\u0275property("accept", ctx.accept);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_3_0 = ctx.file()) ? 7 : -1, tmp_3_0);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_4_0 = ctx.fileError()) ? 8 : -1, tmp_4_0);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.docType())("options", ctx.typeOptions());
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.title())("placeholder", ctx.typeLabel() || "e.g. Public liability 2026");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.tracksExpiry() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allowLibraryChoice() ? 21 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.canSave());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.saving() ? "Uploading\u2026" : "Add document", " ");
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ModalComponent, SelectComponent], styles: ["\n\n.dd__file[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #475569;\n}\n.dd__err[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #b91c1c;\n}\n.dd__check[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  align-items: flex-start;\n  padding: 11px 12px;\n  margin-top: 4px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.dd__check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #F4A922;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.dd__check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 13px;\n  color: #334155;\n}\n.dd__check[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 11.5px;\n  color: #64748b;\n  line-height: 1.45;\n}\n.dd__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 18px;\n}\n@media (max-width: 560px) {\n  .dd__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=document-dialog.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentDialogComponent, { className: "DocumentDialogComponent", filePath: "src/app/booking/ui/document-dialog/document-dialog.component.ts", lineNumber: 100 });
})();

export {
  DocumentsService,
  DocumentDialogComponent
};
//# sourceMappingURL=chunk-LNVSYFDX.js.map
