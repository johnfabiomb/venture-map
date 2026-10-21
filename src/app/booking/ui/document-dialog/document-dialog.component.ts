import { ChangeDetectionStrategy, Component, computed, effect, inject, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { SelectComponent, SelectOption } from '@booking/ui/select/select.component';
import { DocumentsService, DocumentType } from '@booking/core/services/documents.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';

/** What the bucket accepts (§31d). Stated here too so a wrong file is refused before the
 *  upload rather than by a 400 from storage. */
const ACCEPT = '.pdf,.png,.jpg,.jpeg,.webp,.heic';
const MAX_BYTES = 25 * 1024 * 1024;

/**
 * Add a document — an insurance certificate, a permit, a signed contract.
 *
 * `isLibrary` is the important choice and it is deliberately phrased as a question about
 * reuse rather than a technical flag: a certificate that covers every job should be kept
 * once and attached, not uploaded again for each booking.
 */
@Component({
  selector: 'app-document-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ModalComponent, SelectComponent],
  template: `
    <app-modal [open]="open()" (openChange)="open.set($event)" title="Add a document" [dismissable]="true">
      <div class="dd">
        <div class="field">
          <div class="field__top"><label>File</label></div>
          <input type="file" [accept]="accept" (change)="onFile($event)" />
          @if (file(); as f) {
            <small class="dd__file">{{ f.name }} · {{ (f.size / 1048576).toFixed(1) }} MB</small>
          }
          @if (fileError(); as e) { <small class="dd__err">{{ e }}</small> }
        </div>

        <div class="field-row">
          <div class="field">
            <div class="field__top"><label>Type</label></div>
            <app-select [value]="docType()" (changed)="onType($event)"
                        [options]="typeOptions()" placeholder="Choose a type" />
          </div>
          <div class="field">
            <div class="field__top"><label>Name</label></div>
            <input type="text" [ngModel]="title()" (ngModelChange)="title.set($event)" name="ddTitle"
                   [placeholder]="typeLabel() || 'e.g. Public liability 2026'" />
          </div>
        </div>

        @if (tracksExpiry()) {
          <!-- Only asked for types that actually lapse. An expiry box on a signed contract
               is a question with no answer. -->
          <div class="field-row">
            <div class="field">
              <div class="field__top"><label>Issued</label></div>
              <input type="date" [ngModel]="issuedOn()" (ngModelChange)="issuedOn.set($event)" name="ddIssued" />
            </div>
            <div class="field">
              <div class="field__top"><label>Expires</label></div>
              <input type="date" [ngModel]="expiresOn()" (ngModelChange)="expiresOn.set($event)" name="ddExpires" />
            </div>
          </div>
        }

        @if (allowLibraryChoice()) {
          <label class="dd__check">
            <input type="checkbox" [checked]="isLibrary()" (change)="isLibrary.set(!isLibrary())" />
            <span>
              <strong>Keep this for other jobs too</strong>
              <em>Your insurance or registration covers every booking — keep it once and attach it
                  when a client asks, instead of uploading it again each time.</em>
            </span>
          </label>
        }

        <div class="dd__actions">
          <button type="button" class="btn btn--ghost" (click)="open.set(false)">Cancel</button>
          <button type="button" class="btn btn--primary" [disabled]="!canSave()" (click)="save()">
            {{ saving() ? 'Uploading…' : 'Add document' }}
          </button>
        </div>
      </div>
    </app-modal>
  `,
  styles: [`
    .dd__file { font-size: 11.5px; color: #475569; }
    .dd__err { font-size: 11.5px; font-weight: 600; color: #b91c1c; }
    .dd__check {
      display: flex; gap: 9px; align-items: flex-start; padding: 11px 12px; margin-top: 4px;
      border: 1.5px solid #e2e8f0; border-radius: 8px; cursor: pointer;
    }
    .dd__check input { width: 16px; height: 16px; accent-color: #F4A922; flex-shrink: 0; margin-top: 1px; }
    .dd__check span { display: flex; flex-direction: column; gap: 2px; font-size: 13px; color: #334155; }
    .dd__check em { font-style: normal; font-size: 11.5px; color: #64748b; line-height: 1.45; }
    .dd__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 18px; }
    @media (max-width: 560px) { .dd__actions .btn { flex: 1 1 0; justify-content: center; } }
  `],
})
export class DocumentDialogComponent {
  private readonly docs = inject(DocumentsService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);

  readonly open = model(false);
  /** When set, the new document is attached to this booking as well. */
  readonly bookingId = input<string>('');
  /** Hide the "keep for other jobs" choice where it has no meaning (the library page
   *  itself, where everything is by definition reusable). */
  readonly allowLibraryChoice = input(true);
  readonly forceLibrary = input(false);
  readonly saved = output<void>();

  readonly accept = ACCEPT;
  readonly types = signal<DocumentType[]>([]);
  readonly file = signal<File | null>(null);
  readonly fileError = signal('');
  readonly docType = signal('');
  readonly title = signal('');
  readonly issuedOn = signal('');
  readonly expiresOn = signal('');
  readonly isLibrary = signal(false);
  readonly saving = signal(false);

  readonly typeOptions = computed<SelectOption[]>(() =>
    this.types().filter(t => t.kind === 'file')
      .map(t => ({ value: t.key, label: t.label })));
  readonly typeLabel = computed(() => this.types().find(t => t.key === this.docType())?.label ?? '');
  readonly tracksExpiry = computed(() => !!this.types().find(t => t.key === this.docType())?.tracks_expiry);
  readonly canSave = computed(() =>
    !this.saving() && !!this.file() && !this.fileError() && this.title().trim().length > 0);

  constructor() {
    effect(() => {
      if (!this.open()) return;
      queueMicrotask(async () => {
        const org = this.auth.orgId();
        this.file.set(null); this.fileError.set('');
        this.docType.set(''); this.title.set('');
        this.issuedOn.set(''); this.expiresOn.set('');
        this.isLibrary.set(this.forceLibrary());
        if (org) this.types.set(await this.docs.listTypes(org));
      });
    });
  }

  onFile(e: Event): void {
    const f = (e.target as HTMLInputElement).files?.[0] ?? null;
    this.fileError.set('');
    if (f && f.size > MAX_BYTES) {
      this.fileError.set(`That file is ${(f.size / 1048576).toFixed(1)} MB — the limit is 25 MB.`);
      this.file.set(null);
      return;
    }
    this.file.set(f);
    // Name it after the file if nothing has been typed — one less box for the common case.
    if (f && !this.title().trim()) this.title.set(f.name.replace(/\.[^.]+$/, ''));
  }

  onType(key: string): void {
    this.docType.set(key);
    // A type whose standard name is better than the filename ("Public liability
    // insurance" beats "scan_0012"), but never over something already typed.
    const label = this.typeLabel();
    if (label && (!this.title().trim() || this.title() === this.file()?.name.replace(/\.[^.]+$/, ''))) {
      this.title.set(label);
    }
  }

  async save(): Promise<void> {
    const org = this.auth.orgId();
    const f = this.file();
    if (!org || !f || this.saving()) return;
    this.saving.set(true);
    try {
      const res = await this.docs.upload(org, f, {
        title: this.title(), docType: this.docType() || null,
        isLibrary: this.isLibrary() || this.forceLibrary(),
        issuedOn: this.issuedOn() || null, expiresOn: this.expiresOn() || null,
      });
      if (res.error || !res.id) { this.toast.error(`Could not upload: ${res.error ?? 'unknown error'}`); return; }
      if (this.bookingId()) await this.docs.attach(org, this.bookingId(), res.id);
      this.toast.success('Document added');
      this.open.set(false);
      this.saved.emit();
    } finally { this.saving.set(false); }
  }
}
