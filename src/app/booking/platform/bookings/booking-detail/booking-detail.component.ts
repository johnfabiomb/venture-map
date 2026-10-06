import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { FormsModule } from '@angular/forms';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingAdminService, WorkJob } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { ExpenseDialogComponent } from '@booking/ui/expense-dialog/expense-dialog.component';
import { PanelComponent } from '@booking/ui/panel/panel.component';
import { PaymentDialogComponent } from '@booking/ui/payment-dialog/payment-dialog.component';
import { DeliveryDialogComponent } from '@booking/ui/delivery-dialog/delivery-dialog.component';
import { Payment, PaymentMethod, BookingSlot } from '@booking/core/interfaces/booking.interface';
import { LineItem, InvoiceListRow } from '@booking/core/interfaces/invoice.interface';
import { Delivery } from '@booking/core/interfaces/delivery.interface';
import { Expense } from '@booking/core/interfaces/expense.interface';

const METHOD_LABEL: Record<PaymentMethod, string> = {
  card: 'Card', cash: 'Cash', revolut: 'Revolut', bank: 'Bank transfer', other: 'Other',
};

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [RouterLink, FormsModule, DatePipe, CurrencyPipe, ExpenseDialogComponent,
            PanelComponent, PaymentDialogComponent, DeliveryDialogComponent,
            CdkMenuTrigger, CdkMenu, CdkMenuItem],
  templateUrl: './booking-detail.component.html',
  styleUrl: './booking-detail.component.scss',
})
export class BookingDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);
  private readonly auth = inject(BookingsAuthService);   // deliveries are org-scoped → need orgId()
  private readonly admin = inject(BookingAdminService);
  readonly data = inject(BookingDataService);

  id = '';  // booking id (used by the template for the Invoice link)
  readonly payments = signal<Payment[]>([]);
  readonly slots = signal<BookingSlot[]>([]);    // the booking's time blocks (one or more)
  readonly lineItems = signal<LineItem[]>([]);   // invoice breakdown (source of truth for the total)
  readonly invoices = signal<InvoiceListRow[]>([]);  // every invoice raised against this job
  readonly copied = signal(false);
  readonly adding = signal(false);
  readonly addingInvoice = signal(false);
  readonly workItem = signal<WorkJob | null>(null);   // this job's Work-board card, if any
  readonly addingCard = signal(false);

  // Delivery (what the client receives once paid)
  readonly delivery = signal<Delivery | null>(null);
  readonly deliveryDialogOpen = signal(false);
  readonly payDialogOpen = signal(false);

  // ── Costs ───────────────────────────────────────────────────────────────
  readonly expenses = signal<Expense[]>([]);
  readonly costDialogOpen = signal(false);
  /** The cost being edited; null means the dialog adds a new one. */
  readonly editingExpense = signal<Expense | null>(null);

  /** What the client is being charged. Read from the booking, never re-derived from the
   *  invoice lines — the booking total is the figure the rest of the app agrees on. */
  readonly chargedTotal = computed(() => this.booking()?.price_total ?? 0);
  readonly expensesTotal = computed(() => this.expenses().reduce((t, e) => t + Number(e.amount), 0));
  readonly profit = computed(() => this.chargedTotal() - this.expensesTotal());


  readonly booking = computed(() => this.data.bookings().find(b => b.id === this.id));
  readonly balance = computed(() => {
    const b = this.booking();
    return b ? Math.max(0, Math.round((b.price_total - b.total_paid) * 100) / 100) : 0;
  });

  // ── Delivery state ───────────────────────────────────────────────────────
  /** Something is actually attached (an empty row reads as nothing, like the client sees). */
  readonly hasDelivery = computed(() => {
    const d = this.delivery();
    return !!d && (!!d.message?.trim() || d.links.length > 0);
  });
  readonly released = computed(() => !!this.delivery()?.released_at);
  readonly paidInFull = computed(() => this.booking()?.payment_status === 'paid');
  /** Mirrors the server's rule in get_delivery_by_token, for the admin's status badge only. */
  readonly clientCanSee = computed(() => this.hasDelivery() && (this.released() || this.paidInFull()));
  /** Shown beside the collapsed Delivery heading, so folding it never hides whether the
   *  client can actually see anything. */
  readonly deliveryMeta = computed(() => {
    if (!this.hasDelivery()) return 'nothing attached';
    return this.clientCanSee() ? 'visible to client' : 'locked until paid';
  });


  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.id) {
      await this.auth.initialize();   // idempotent; needed for orgId() when saving a delivery
      const [payments, slots, items, delivery, invoices, card, expenses] = await Promise.all([
        this.data.getPayments(this.id),
        this.data.getBookingSlots(this.id),
        this.data.getInvoiceItems(this.id),
        this.data.getDelivery(this.id),
        this.data.listInvoicesForBooking(this.id),
        this.admin.workItemForBooking(this.id),
        this.data.getExpenses(this.id),
      ]);
      this.payments.set(payments);
      this.expenses.set(expenses);
      this.slots.set(slots);
      this.lineItems.set(items);
      this.invoices.set(invoices);
      this.workItem.set(card);
      this.applyDelivery(delivery);
    }
  }

  // ── Delivery actions ─────────────────────────────────────────────────────
  private applyDelivery(d: Delivery | null): void { this.delivery.set(d); }

  /** Re-read after a dialog saved, so the summary panels reflect what was written. */
  async onDeliverySaved(): Promise<void> { this.applyDelivery(await this.data.getDelivery(this.id)); }
  async onPaymentSaved(): Promise<void> { this.payments.set(await this.data.getPayments(this.id)); }

  methodLabel(m: string): string { return METHOD_LABEL[m as PaymentMethod] ?? m; }


  /** Opens the shared dialog. Passing a row edits it; passing nothing adds a new cost. */
  openCostDialog(e?: Expense): void {
    this.editingExpense.set(e ?? null);
    this.costDialogOpen.set(true);
  }

  async onCostSaved(): Promise<void> {
    this.editingExpense.set(null);
    this.expenses.set(await this.data.getExpenses(this.id));
  }

  async deleteExpense(e: Expense): Promise<void> {
    // A charged cost put a line on an invoice. That line is NOT removed here: matching it
    // back by description and amount would eventually delete the wrong one, and the
    // invoice may since have been issued to the client. Say so rather than guess.
    const charged = e.invoice_id
      ? ' It was charged to the client, and that invoice line stays — remove it in the invoice editor if you need to.'
      : '';
    if (!(await this.confirm.ask({
      title: 'Remove cost',
      message: `Remove “${e.description}” (€${Number(e.amount).toFixed(2)})?${charged}`,
      confirmLabel: 'Remove', danger: true,
    }))) return;
    await this.data.deleteExpense(e.id);
    this.expenses.set(await this.data.getExpenses(this.id));
    this.toast.success('Cost removed');
  }

  async deletePayment(p: Payment): Promise<void> {
    if (p.stripe_payment_intent_id) {
      this.toast.error('Card payments are managed in Stripe and can’t be removed here.');
      return;
    }
    const ok = await this.confirm.ask({
      title: 'Remove payment',
      message: `Remove this €${p.amount} payment? This only fixes the record — it does not refund anyone.`,
      confirmLabel: 'Remove', danger: true,
    });
    if (!ok) return;
    await this.data.deletePayment(p.id, this.id);
    this.payments.set(await this.data.getPayments(this.id));
    this.toast.info('Payment removed');
  }

  async copyLink(): Promise<void> {
    const url = await this.data.generateLink(this.id);
    if (!url) { this.toast.error('Could not generate the payment link.'); return; }
    await navigator.clipboard.writeText(url);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
    this.toast.success('Payment link copied to clipboard');
  }

  /** Copy the client-shareable (no-login) invoice link. */
  async copyInvoiceLink(): Promise<void> {
    const url = await this.data.invoiceShareLink(this.id);
    if (!url) { this.toast.error('Could not create the invoice link.'); return; }
    await navigator.clipboard.writeText(url);
    this.toast.success('Invoice link copied — share it with your client');
  }

  /**
   * Put an already-created booking on the Work board. Previously `needs_production` was a
   * create-time-only choice on the booking form, so a job you didn't flag up front could
   * never reach the board — you had to delete and recreate it. Creating the card also
   * seeds the service's task checklist, exactly as it does from the form.
   */
  async addToWorkBoard(): Promise<void> {
    const org = this.auth.orgId();
    if (!org || this.addingCard() || this.workItem()) return;
    this.addingCard.set(true);
    try {
      await this.admin.addWorkItem(org, this.id, '');
      this.workItem.set(await this.admin.workItemForBooking(this.id));
      this.toast.success('Added to the Work board');
    } catch {
      this.toast.error('Could not add this job to the Work board.');
    } finally { this.addingCard.set(false); }
  }

  /** Open an invoice's editor — by booking for the original (keeps existing links and
   *  the "from=booking" return behaviour), by invoice id for any later one. */
  invoiceEditLink(inv: InvoiceListRow): unknown[] {
    return this.invoices()[0]?.id === inv.id
      ? ['/bookings/invoice-edit', this.id]
      : ['/bookings/invoices/edit', inv.id];
  }

  /**
   * Raise an additional invoice against this job. This is the correct move when the
   * scope grows after the first invoice is already sent: an issued invoice is a
   * document the client holds, so you don't edit it — you issue a second one.
   * Created as a draft so it takes no invoice number until you actually issue it.
   */
  async addInvoice(): Promise<void> {
    const org = this.auth.orgId();
    if (!org || this.addingInvoice()) return;
    this.addingInvoice.set(true);
    try {
      const res = await this.data.addInvoiceToBooking(org, this.id);
      if (res.error || !res.id) { this.toast.error('Could not add another invoice.'); return; }
      this.toast.success('Draft invoice added');
      this.router.navigate(['/bookings/invoices/edit', res.id]);
    } finally { this.addingInvoice.set(false); }
  }

  goEdit(): void { this.router.navigate(['/bookings', this.id, 'edit']); }
}
