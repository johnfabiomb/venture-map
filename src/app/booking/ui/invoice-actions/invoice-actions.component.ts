import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { InvoiceListRow } from '@booking/core/interfaces/invoice.interface';
import { InvoiceEmailKind } from '@booking/core/utils/invoice-email.util';

/**
 * Everything you can do to an invoice, in one menu.
 *
 * Lives here rather than on the Invoices page because the same invoice is reached from a
 * booking too: having finished a job, the owner was having to leave the booking, open
 * Invoices, find the right row in the list and only then send it. Now the booking shows
 * its invoices the same way, with the same actions.
 *
 * Self-contained where it can be (open, copy, edit, open the booking); the actions that
 * need a DIALOG (send, add a cost, record a payment) are emitted, so the host mounts ONE
 * dialog instead of one per row.
 */
@Component({
  selector: 'app-invoice-actions',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, CdkMenuTrigger, CdkMenu, CdkMenuItem],
  template: `
    <button class="ia__kebab" [cdkMenuTriggerFor]="menu"
            (click)="$event.stopPropagation()" aria-label="Invoice actions">
      <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
        <circle cx="10" cy="4" r="1.7"/><circle cx="10" cy="10" r="1.7"/><circle cx="10" cy="16" r="1.7"/>
      </svg>
    </button>
    <ng-template #menu>
      <div class="ia__menu" cdkMenu>
        <button class="ia__item" cdkMenuItem (click)="send.emit('invoice')">Send by email…</button>
        <!-- Chasing only makes sense while something is actually owed. -->
        @if (invoice().balance_due > 0) {
          <button class="ia__item" cdkMenuItem (click)="send.emit('reminder')">Send reminder…</button>
        }
        <button class="ia__item" cdkMenuItem (click)="copyShareLink()">Copy share link</button>
        <button class="ia__item" cdkMenuItem (click)="openPrintable()">View / print</button>
        <a class="ia__item" cdkMenuItem [routerLink]="editLink()">Edit invoice</a>
        <!-- The booking page has its own payment button and IS the booking, so both stay
             off the menu there. On the Invoices page this is the only way to settle an
             invoice that has no booking. -->
        @if (!inBooking() && invoice().balance_due > 0) {
          <button class="ia__item" cdkMenuItem (click)="recordPayment.emit()">Record a payment…</button>
        }
        @if (!inBooking() && invoice().has_booking && invoice().booking_id) {
          <a class="ia__item" cdkMenuItem [routerLink]="['/bookings', invoice().booking_id]">Open booking {{ invoice().booking_ref }}</a>
        }
        <!-- Closing an invoice. An issued one is VOIDED (its number stays in the series); a
             draft was never issued, so it is deleted. Same rules as set_invoice_void. -->
        @if (canVoid()) {
          <button class="ia__item ia__item--danger" cdkMenuItem (click)="voidIt()">Void invoice…</button>
        }
        @if (invoice().status === 'void') {
          <button class="ia__item" cdkMenuItem (click)="unvoid()">Un-void invoice</button>
        }
        @if (invoice().status === 'draft') {
          <button class="ia__item ia__item--danger" cdkMenuItem (click)="deleteDraft()">Delete draft…</button>
        }
        <!-- Costs attach to the JOB. A standalone invoice has none, so those are recorded
             on Costs & profit as general business costs instead. -->
        @if (invoice().booking_id) {
          <button class="ia__item" cdkMenuItem (click)="addCost.emit()">Add a cost…</button>
        }
      </div>
    </ng-template>
  `,
  styles: [`
    :host { display: inline-flex; }
    .ia__kebab {
      display: inline-flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 8px;
      background: none; border: none; color: #94a3b8; cursor: pointer;
    }
    .ia__kebab:hover { background: #f1f5f9; color: #475569; }
    .ia__menu {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 10px;
      box-shadow: 0 10px 28px rgba(15,23,42,0.14); padding: 5px; min-width: 190px;
    }
    .ia__item {
      display: block; width: 100%; text-align: left; padding: 9px 12px;
      background: none; border: none; border-radius: 7px; cursor: pointer;
      font-family: inherit; font-size: 13px; color: #0f172a; text-decoration: none;
    }
    .ia__item:hover { background: #f8fafc; }
    .ia__item--danger { color: #b91c1c; }
  `],
})
export class InvoiceActionsComponent {
  private readonly data = inject(BookingDataService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);

  readonly invoice = input.required<InvoiceListRow>();
  /** Shown on the booking's own page: no "Open booking", and payments use the page's button. */
  readonly inBooking = input(false);
  readonly send = output<InvoiceEmailKind>();
  readonly addCost = output<void>();
  readonly recordPayment = output<void>();
  /** Voided, un-voided or deleted here: the host reloads its list. */
  readonly changed = output<void>();

  /**
   * Mirrors set_invoice_void, so the menu never offers what the server refuses: issued,
   * nothing paid, and no booking that is still on (that booking's total comes from it).
   */
  canVoid(): boolean {
    const r = this.invoice();
    return r.status === 'issued' && r.amount_paid <= 0
      && (!r.has_booking || r.booking_status === 'cancelled' || r.booking_status === 'expired');
  }

  async voidIt(): Promise<void> {
    const r = this.invoice();
    if (!(await this.confirm.ask({
      title: 'Void invoice',
      message: `Void ${r.invoice_number ?? 'this invoice'}? It stops counting as owed and as earnings, and the client can no longer pay it. Its number stays in your series. You can un-void it later.`,
      confirmLabel: 'Void invoice', danger: true,
    }))) return;
    const res = await this.data.setInvoiceVoid(r.id, true);
    if (res.error) { this.toast.error(res.error); return; }
    this.toast.success(`${r.invoice_number ?? 'Invoice'} voided`);
    this.changed.emit();
  }

  async unvoid(): Promise<void> {
    const r = this.invoice();
    const res = await this.data.setInvoiceVoid(r.id, false);
    if (res.error) { this.toast.error(res.error); return; }
    this.toast.success(`${r.invoice_number ?? 'Invoice'} is open again`);
    this.changed.emit();
  }

  async deleteDraft(): Promise<void> {
    if (!(await this.confirm.ask({
      title: 'Delete draft',
      message: 'Delete this draft invoice? It was never issued, so no number is lost. You can restore it from Invoices → Deleted.',
      confirmLabel: 'Delete draft', danger: true,
    }))) return;
    const res = await this.data.deleteDraftInvoice(this.invoice().id);
    if (res.error) { this.toast.error('Could not delete the draft.'); return; }
    this.toast.info('Draft deleted');
    this.changed.emit();
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
  editLink(): string[] { return ['/bookings/invoices/edit', this.invoice().id]; }

  openPrintable(): void {
    const r = this.invoice();
    const url = r.booking_id ? `/book/invoice/${r.booking_id}` : `/book/invoice?inv=${r.id}`;
    window.open(url, '_blank', 'noopener');
  }

  async copyShareLink(): Promise<void> {
    const r = this.invoice();
    // A booking-linked invoice reuses its pay-link token so nothing changes for clients
    // already holding one; a standalone invoice mints an INVOICE token, which grants only
    // "view this invoice" rather than the pay page and the deliverables.
    const url = r.booking_id
      ? await this.data.invoiceShareLink(r.booking_id)
      : await this.data.invoiceShareLinkById(r.id);
    if (!url) { this.toast.error('Could not create the invoice link.'); return; }
    await navigator.clipboard.writeText(url);
    this.toast.success('Invoice link copied — share it with your client');
  }
}
