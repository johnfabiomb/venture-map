import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, input, model, output, signal, viewChild } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bookingsDb } from '@booking/core/db/supabase.bookings';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingAdminService, InvoiceSettings } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { RecipientsEditorComponent } from '@booking/ui/recipients-editor/recipients-editor.component';
import { InvoiceSheetComponent } from '@booking/ui/invoice-sheet/invoice-sheet.component';
import { InvoiceBundle, InvoiceSend, GoogleConnection } from '@booking/core/interfaces/invoice.interface';
import {
  InvoiceEmailKind, EmailTemplate, defaultTemplate, renderInvoiceEmail, buildMailto,
} from '@booking/core/utils/invoice-email.util';
import { renderElementToPdfBlob, blobToBase64 } from '@booking/core/utils/pdf.util';

/** What the owner is told when the server refuses — each one is actionable. */
const SEND_ERRORS: Record<string, string> = {
  google_not_connected: 'Google isn\'t connected yet. Connect it in Settings → Email, or send from your own mail app instead.',
  google_disconnected:  'Google access was revoked. Reconnect it in Settings → Email.',
  from_not_verified:    'That From address isn\'t a verified "Send mail as" alias on your Google account. Add it in Gmail → Settings → Accounts, then try again.',
  in_progress:          'This one is already being sent — give it a moment.',
  invalid_recipient:    'One of the addresses isn\'t valid.',
  attachment_too_large: 'The PDF is too large to attach. Send it without the attachment — the link still works.',
  forbidden:            'You don\'t have permission to send for this organisation.',
};

/**
 * Send an invoice (or chase it) by email.
 *
 * Two paths, chosen by whether the org has connected Google:
 *   • connected  → one click, sent as the org's own alias with the PDF attached.
 *   • otherwise  → the message is composed into the owner's own mail client and the PDF
 *                  is downloaded to attach by hand. Works with zero setup, which is why
 *                  it exists: the feature must be useful before any Google configuration.
 *
 * The dialog fetches its own data so callers stay dumb — a list row, the editor and the
 * booking page all mount it the same way.
 */
@Component({
  selector: 'app-invoice-send',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SlicePipe, FormsModule, ModalComponent, RecipientsEditorComponent, InvoiceSheetComponent],
  templateUrl: './invoice-send.component.html',
  styleUrl: './invoice-send.component.scss',
})
export class InvoiceSendComponent {
  private readonly data = inject(BookingDataService);
  private readonly admin = inject(BookingAdminService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);

  readonly open = model(false);
  readonly invoiceId = input.required<string>();
  readonly kind = model<InvoiceEmailKind>('invoice');
  readonly sent = output<void>();

  readonly loading = signal(true);
  readonly busy = signal(false);
  readonly bundle = signal<InvoiceBundle | null>(null);
  readonly google = signal<GoogleConnection>({ connected: false });
  readonly history = signal<InvoiceSend[]>([]);
  readonly prior = signal<string[]>([]);
  readonly shareUrl = signal<string | null>(null);
  readonly error = signal('');
  /** Set after a draft hand-off: the mail client can't attach, so the owner must. */
  readonly drafted = signal(false);
  readonly truncated = signal(false);

  to: string[] = [];
  cc: string[] = [];
  subject = '';
  body = '';
  attachPdf = true;

  private settings: InvoiceSettings = {};
  private orgId = '';
  /** Rendered offscreen only to produce PDF bytes — never shown to the user. */
  private readonly sheet = viewChild<InvoiceSheetComponent, ElementRef<HTMLElement>>(
    InvoiceSheetComponent, { read: ElementRef });

  constructor() {
    // Reload whenever the dialog is opened, or the caller switches invoice/kind while
    // it is open. Re-reading is deliberate: the money and the send history may both have
    // changed since the list was last fetched.
    effect(() => {
      const isOpen = this.open();
      const id = this.invoiceId();
      this.kind();
      if (isOpen && id) void this.load();
    });
  }

  get canSendViaGmail(): boolean { return !!this.google().can_send; }
  get recipientCount(): number {
    return [...this.to, ...this.cc].filter(e => e.trim()).length;
  }

  private async load(): Promise<void> {
    this.loading.set(true);
    this.error.set('');
    this.drafted.set(false);
    this.truncated.set(false);
    try {
      const org = this.auth.orgId();
      if (!org) { this.error.set('No organisation.'); return; }
      this.orgId = org;

      const { data } = await bookingsDb.rpc('get_invoice_by_id', { p_invoice: this.invoiceId() });
      const b = data as InvoiceBundle | null;
      if (!b) { this.error.set('Could not load this invoice.'); return; }
      this.bundle.set(b);

      const [settings, google, history, prior] = await Promise.all([
        this.admin.getOrgSettings(org),
        this.data.googleStatus(org),
        this.data.listInvoiceSends(this.invoiceId()),
        this.data.priorRecipients(this.invoiceId()),
      ]);
      this.settings = settings?.invoice_settings ?? {};
      this.google.set(google);
      this.history.set(history);
      this.prior.set(prior);

      // The share link deliberately keeps the existing per-type split: a booking-linked
      // invoice reuses its booking PAY token (so the client still gets the Pay by card
      // button), a standalone one mints a view-only invoice token.
      this.shareUrl.set(b.booking
        ? await this.data.invoiceShareLink(b.booking.id)
        : await this.data.invoiceShareLinkById(this.invoiceId()));

      // Prefill: everyone who already holds this invoice, else the client's stored
      // address, else one blank row to type into (a walk-in has no client record at all).
      const clientEmail = (b.client?.email ?? '').trim();
      this.to = prior.length ? [...prior] : (clientEmail ? [clientEmail] : ['']);
      this.cc = [];
      this.resetTemplate();
    } finally {
      this.loading.set(false);
    }
  }

  /** (Re)render the stored template against this invoice's real figures. */
  resetTemplate(): void {
    const b = this.bundle();
    if (!b) return;
    const stored = this.settings.templates?.[this.kind()];
    const tpl: EmailTemplate = {
      subject: stored?.subject?.trim() || defaultTemplate(this.kind()).subject,
      body:    stored?.body?.trim()    || defaultTemplate(this.kind()).body,
    };
    const total = Number(b.invoice.total ?? 0);
    const paid = Number(b.total_paid ?? 0);
    const due = b.invoice.due_date;
    const daysOverdue = due
      ? Math.max(0, Math.floor((Date.now() - new Date(due).getTime()) / 86_400_000))
      : 0;

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
      currency: b.org.currency ?? 'EUR',
    });
    this.subject = rendered.subject;
    this.body = rendered.body;
  }

  private clean(list: string[]): string[] {
    const seen = new Set<string>();
    for (const e of list) {
      const t = e.trim().toLowerCase();
      if (t) seen.add(t);
    }
    return [...seen];
  }

  /** Render the offscreen sheet to PDF bytes. Null when there is nothing to render. */
  private async pdf(): Promise<{ base64: string; filename: string } | null> {
    const el = this.sheet()?.nativeElement;
    const b = this.bundle();
    if (!el || !b) return null;
    const blob = await renderElementToPdfBlob(el);
    return { base64: await blobToBase64(blob), filename: `${b.invoice.number ?? 'invoice'}.pdf` };
  }

  async sendViaGmail(): Promise<void> {
    if (this.busy()) return;
    const to = this.clean(this.to);
    if (!to.length) { this.error.set('Add at least one recipient.'); return; }
    this.busy.set(true);
    this.error.set('');
    try {
      const attachment = this.attachPdf ? await this.pdf() : null;
      const res = await this.data.sendInvoiceEmail({
        orgId: this.orgId,
        invoiceId: this.invoiceId(),
        kind: this.kind(),
        to, cc: this.clean(this.cc),
        subject: this.subject,
        bodyText: this.body,
        shareUrl: this.shareUrl(),
        attachPdf: !!attachment,
        pdfBase64: attachment?.base64,
        pdfFilename: attachment?.filename,
        // One key per attempt, so a double-click or a retried invoke cannot land twice
        // in a real client's inbox.
        idempotencyKey: crypto.randomUUID(),
      });
      if (!res.ok) {
        this.error.set(SEND_ERRORS[res.error ?? ''] ?? res.error ?? 'Could not send.');
        return;
      }
      this.toast.success(res.alreadySent ? 'Already sent' : 'Invoice sent');
      this.sent.emit();
      this.open.set(false);
    } catch (e) {
      this.error.set((e as Error).message);
    } finally {
      this.busy.set(false);
    }
  }

  /**
   * Hand off to the owner's own mail client.
   *
   * Order matters: the PDF is saved and awaited FIRST, so the file is already on disk
   * when the mail window steals focus. `location.href` rather than `window.open` —
   * assigning it isn't popup-blocked and doesn't navigate the page away, because the OS
   * mail handler takes over.
   */
  async sendAsDraft(): Promise<void> {
    if (this.busy()) return;
    const to = this.clean(this.to);
    if (!to.length) { this.error.set('Add at least one recipient.'); return; }
    this.busy.set(true);
    this.error.set('');
    try {
      let attached = false;
      if (this.attachPdf) {
        const p = await this.pdf();
        if (p) {
          const a = document.createElement('a');
          a.href = `data:application/pdf;base64,${p.base64}`;
          a.download = p.filename;
          a.click();
          attached = true;
        }
      }

      await this.data.logInvoiceDraft({
        invoiceId: this.invoiceId(), kind: this.kind(),
        to, cc: this.clean(this.cc), subject: this.subject, body: this.body,
        shareUrl: this.shareUrl(), attached,
      });

      const { url, truncated } = buildMailto(to, this.clean(this.cc), this.subject, this.body);
      this.truncated.set(truncated);
      if (truncated) {
        // The full text goes to the clipboard rather than being silently cut — a
        // half-sent email to a client is worse than an extra paste.
        await navigator.clipboard.writeText(this.body).catch(() => undefined);
      }
      window.location.href = url;

      // Stay open: the owner still has to attach the PDF, which mailto cannot carry.
      this.drafted.set(true);
      this.history.set(await this.data.listInvoiceSends(this.invoiceId()));
      this.sent.emit();
    } catch (e) {
      this.error.set((e as Error).message);
    } finally {
      this.busy.set(false);
    }
  }

  async copyBody(): Promise<void> {
    await navigator.clipboard.writeText(this.body);
    this.toast.success('Message copied');
  }

  async redownloadPdf(): Promise<void> {
    const p = await this.pdf();
    if (!p) return;
    const a = document.createElement('a');
    a.href = `data:application/pdf;base64,${p.base64}`;
    a.download = p.filename;
    a.click();
  }

  close(): void { this.open.set(false); }
}
