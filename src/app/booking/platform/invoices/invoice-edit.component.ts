import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { BookingAdminService, AdminService, AdminStaff, JobOption } from '@booking/core/services/booking-admin.service';
import { LineItem, InvoiceInput, InvoiceStatus } from '@booking/core/interfaces/invoice.interface';
import { LineItemsEditorComponent } from '@booking/ui/line-items-editor/line-items-editor.component';
import { ClientEditorComponent } from '@booking/ui/client-editor/client-editor.component';
import { Client } from '@booking/core/interfaces/booking.interface';

// The invoice editor. An invoice is the MONEY record: it may sit on a job in the
// calendar, or stand completely alone (work billed with no time slot).
//
// Three entry points, all landing here:
//   /bookings/invoices/new              → a new standalone invoice
//   /bookings/invoices/edit/:invoiceId  → by INVOICE id (the only way to open one
//                                          that has no booking)
//   /bookings/invoice-edit/:id          → by BOOKING id (kept: the booking detail
//                                          page and older links point here)
//
// Money is never computed here beyond the line total; everything else lives in SQL.
@Component({
  selector: 'app-invoice-edit',
  standalone: true,
  imports: [FormsModule, DatePipe, RouterLink, LineItemsEditorComponent, ClientEditorComponent],
  templateUrl: './invoice-edit.component.html',
  styleUrl: './invoice-edit.component.scss',
})
export class InvoiceEditComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly data = inject(BookingDataService);
  private readonly auth = inject(BookingsAuthService);
  private readonly admin = inject(BookingAdminService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);

  readonly services = signal<AdminService[]>([]);
  readonly staff = signal<AdminStaff[]>([]);
  readonly jobOptions = signal<JobOption[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly notFound = signal(false);
  readonly isNew = signal(false);
  readonly clientEditorOpen = signal(false);

  /** The invoice row's id, once known. Null for an unsaved new invoice. */
  invoiceId: string | null = null;
  /** The linked booking, if any. '' in `jobId` means standalone. */
  invoiceNumber = '';
  currency = 'EUR';

  // ── Editable state ──────────────────────────────────────────────────
  items: LineItem[] = [];
  notes = '';
  issueDate = '';     // yyyy-MM-dd — also decides the invoice number's year
  title = '';
  serviceDate = '';   // yyyy-MM-dd — when the work happened
  contactName = '';
  jobId = '';         // booking id; '' = standalone
  clientId = '';      // '' = none
  staffId = '';       // '' = none
  serviceId = '';     // '' = none
  status: InvoiceStatus = 'issued';

  // Where "back"/Cancel returns. A booking that opens the editor passes ?from=booking.
  private backTo: 'invoices' | 'booking' = 'invoices';
  private baseline = '';

  async ngOnInit(): Promise<void> {
    await this.auth.initialize();
    const org = this.auth.orgId();
    if (!org) { this.notFound.set(true); this.loading.set(false); return; }

    const [svcs, stf, jobs] = await Promise.all([
      this.admin.listServices(org),
      this.admin.listStaff(org),
      this.admin.loadJobOptions(org),
      this.data.loadClients(),
    ]);
    this.services.set(svcs.filter(s => s.is_active));
    this.staff.set(stf);
    this.jobOptions.set(jobs);
    this.currency = (await this.admin.getOrgSettings(org))?.currency ?? 'EUR';

    if (this.route.snapshot.queryParamMap.get('from') === 'booking') this.backTo = 'booking';

    const byInvoice = this.route.snapshot.paramMap.get('invoiceId');
    const byBooking = this.route.snapshot.paramMap.get('id');

    if (byInvoice)      await this.loadByInvoice(byInvoice);
    else if (byBooking) await this.loadByBooking(byBooking);
    else                this.startNew();

    this.baseline = this.snapshot();
    this.loading.set(false);
  }

  /** A brand-new standalone invoice: no booking, dated today. */
  private startNew(): void {
    this.isNew.set(true);
    const today = new Date().toISOString().slice(0, 10);
    this.issueDate = today;
    this.serviceDate = today;
    this.items = [{ description: '', amount: 0 }];
  }

  private async loadByInvoice(id: string): Promise<void> {
    const inv = await this.data.getInvoiceById(id);
    if (!inv) { this.notFound.set(true); return; }
    this.applyInvoice(inv.id, inv);
  }

  private async loadByBooking(bookingId: string): Promise<void> {
    const inv = await this.data.getInvoiceByBooking(bookingId);
    if (inv) {
      this.applyInvoice(inv.id, inv);
      this.jobId = bookingId;
      return;
    }
    // No invoice row yet (a booking created before it saved one): fall back to the
    // lines derived live from the booking, and create the row on first save.
    this.jobId = bookingId;
    this.items = await this.data.getInvoiceItems(bookingId);
    if (this.items.length === 0) this.items = [{ description: '', amount: 0 }];
    this.issueDate = new Date().toISOString().slice(0, 10);
  }

  private applyInvoice(id: string, inv: {
    booking_id: string | null; client_id: string | null; staff_id: string | null;
    service_id: string | null; contact_name: string | null; title: string | null;
    service_date: string | null; issue_date: string | null; notes: string | null;
    line_items: LineItem[]; status: InvoiceStatus; number_year: number | null; number_seq: number | null;
  }): void {
    this.invoiceId   = id;
    this.jobId       = inv.booking_id ?? '';
    this.clientId    = inv.client_id ?? '';
    this.staffId     = inv.staff_id ?? '';
    this.serviceId   = inv.service_id ?? '';
    this.contactName = inv.contact_name ?? '';
    this.title       = inv.title ?? '';
    this.serviceDate = inv.service_date ?? '';
    this.issueDate   = inv.issue_date ?? new Date().toISOString().slice(0, 10);
    this.notes       = inv.notes ?? '';
    this.status      = inv.status ?? 'issued';
    this.items = (inv.line_items ?? []).map(i => ({
      description: i.description, amount: Number(i.amount),
      ...(i.serviceId ? { serviceId: i.serviceId } : {}),
      ...(i.hours ? { hours: Number(i.hours) } : {}),
    }));
    if (this.items.length === 0) this.items = [{ description: '', amount: 0 }];
    this.invoiceNumber = inv.number_seq ? `${inv.number_year}-${String(inv.number_seq).padStart(3, '0')}` : '';
  }

  // ── Derived ─────────────────────────────────────────────────────────
  get total(): number { return this.items.reduce((s, i) => s + (Number(i.amount) || 0), 0); }
  get isStandalone(): boolean { return !this.jobId; }
  get selectedClientName(): string {
    return this.data.clients().find(c => c.id === this.clientId)?.name ?? '';
  }
  /** Who this invoice bills: a real client row, else the typed one-off name. */
  get billsTo(): string { return this.selectedClientName || this.contactName || '—'; }

  get canSave(): boolean {
    const itemsOk = this.items.length > 0 && this.items.every(i => i.description.trim().length > 0);
    // A standalone invoice must say who it's for and what it's for — a booking-linked
    // one inherits both from its job.
    const identified = !!this.jobId || !!this.clientId || this.contactName.trim().length > 0;
    return !this.saving() && itemsOk && identified;
  }

  private snapshot(): string {
    return JSON.stringify({
      items: this.items, notes: this.notes, issueDate: this.issueDate, title: this.title,
      serviceDate: this.serviceDate, contactName: this.contactName, jobId: this.jobId,
      clientId: this.clientId, staffId: this.staffId, serviceId: this.serviceId, status: this.status,
    });
  }
  isDirty(): boolean { return !this.loading() && this.snapshot() !== this.baseline; }

  onItemsChange(items: LineItem[]): void { this.items = items; }

  // ── Client picker (reuses the full editor — never a stub) ───────────
  openClientEditor(): void { this.clientEditorOpen.set(true); }
  onClientCreated(c: Client): void { this.clientId = c.id; }

  /** Picking a job adopts its client/worker/date, so a linked invoice starts consistent. */
  onJobChange(): void {
    const job = this.jobOptions().find(j => j.id === this.jobId);
    if (!job) return;
    if (!this.title) this.title = job.title;
    if (!this.serviceDate && job.start_at) this.serviceDate = job.start_at.slice(0, 10);
  }

  private returnCommands(): unknown[] {
    return this.backTo === 'invoices' || !this.jobId
      ? ['/bookings/invoices']
      : ['/bookings', this.jobId];
  }
  get backLabel(): string {
    return this.backTo === 'invoices' || !this.jobId ? '← Invoices' : '← Back to booking';
  }

  async leave(): Promise<void> {
    if (this.isDirty() && !(await this.confirm.ask({
      title: 'Unsaved changes',
      message: 'You have unsaved changes to this invoice. Leave without saving?',
      confirmLabel: 'Leave', danger: true,
    }))) return;
    this.router.navigate(this.returnCommands());
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(e: BeforeUnloadEvent): void {
    if (this.isDirty()) { e.preventDefault(); e.returnValue = ''; }
  }

  async save(): Promise<void> {
    const org = this.auth.orgId();
    if (!org || !this.canSave) return;
    this.saving.set(true);
    try {
      const items: LineItem[] = this.items.map(i => ({
        description: i.description.trim(), amount: Number(i.amount) || 0,
        ...(i.serviceId ? { serviceId: i.serviceId } : {}),
        ...(i.hours ? { hours: i.hours } : {}),
      }));
      // Every key is sent deliberately: this screen owns all of them, so the RPC's
      // patch behaviour should write each one (including clearing to null).
      const invoice: InvoiceInput = {
        ...(this.invoiceId ? { id: this.invoiceId } : {}),
        booking_id:   this.jobId || null,
        client_id:    this.clientId || null,
        staff_id:     this.staffId || null,
        service_id:   this.serviceId || null,
        contact_name: this.contactName.trim() || null,
        title:        this.title.trim() || null,
        service_date: this.serviceDate || null,
        issue_date:   this.issueDate || null,
        notes:        this.notes.trim() || null,
        status:       this.status,
      };
      const res = await this.data.saveInvoiceRecord(org, invoice, items);
      if (res.error || !res.id) { this.toast.error('Could not save the invoice.'); return; }
      this.invoiceId = res.id;

      // A booking-linked invoice keeps its booking's total (and calendar event) in step.
      // A standalone invoice has no booking to sync — and must not try.
      //
      // Sum EVERY live invoice on the booking, not just this one. A booking may now carry
      // several (a deposit plus a final, or a supplementary raised when scope grows), and
      // writing this invoice's own total would overwrite price_total with a fraction of the
      // job — which is exactly what the client's pay link charges and what the delivery
      // paywall unlocks against. Saving a €200 deposit invoice against a €650 job would
      // have re-priced the job to €200 and released the deliverables early.
      if (this.jobId) {
        const all = await this.data.listInvoicesForBooking(this.jobId);
        const gross = all.reduce((sum, r) => sum + Number(r.amount_gross ?? 0), 0);
        await this.data.setAmount(this.jobId, all.length ? gross : this.total);
      }

      this.baseline = this.snapshot();
      this.toast.success(this.isNew() ? 'Invoice created' : 'Invoice saved');
      this.router.navigate(this.returnCommands());
    } finally { this.saving.set(false); }
  }

  /** Only meaningful for a booking-linked invoice: revert the lines to the booking. */
  async resetToBooking(): Promise<void> {
    const org = this.auth.orgId();
    if (!org || !this.jobId) return;
    if (!(await this.confirm.ask({
      title: 'Reset invoice',
      message: 'Discard your edits and revert this invoice to the booking details?',
      confirmLabel: 'Reset', danger: true,
    }))) return;
    this.saving.set(true);
    try {
      await this.data.resetInvoice(org, this.jobId);
      this.baseline = this.snapshot();
      this.toast.info('Invoice reset to the booking');
      this.router.navigate(this.returnCommands());
    } finally { this.saving.set(false); }
  }

  /** Preview the printable invoice — by booking when there is one (keeps existing URLs
   *  working), otherwise by the invoice's own id. Unavailable only before the first save,
   *  when there is no invoice id to address yet. */
  preview(): void {
    if (this.jobId) { window.open(`/book/invoice/${this.jobId}`, '_blank', 'noopener'); return; }
    if (this.invoiceId) window.open(`/book/invoice?inv=${this.invoiceId}`, '_blank', 'noopener');
  }
}
