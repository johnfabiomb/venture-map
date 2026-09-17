import { Component, ElementRef, OnInit, inject, signal, viewChild, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { bookingsDb } from '@booking/core/db/supabase.bookings';
import { InvoiceDetails } from '@booking/core/services/booking-admin.service';
import { downloadElementAsPdf } from '@booking/core/utils/pdf.util';
import { renderInvoiceFooter } from '@booking/core/utils/invoice-footer.util';
import { STRIPE_PK } from '@booking/core/config/stripe';

export interface InvoiceLineItem { description: string; amount: number; }

interface InvoiceBundle {
  org: { name: string; currency: string; invoice_details: InvoiceDetails };
  client: { name: string; company: string | null; vat_number: string | null; billing_address: string | null; email: string | null; phone: string | null } | null;
  // NULL for a standalone invoice — work billed with no time slot. Everything that
  // reads this must null-check it; it is the whole point of the invoice restructure.
  booking: { id: string; booking_ref: string; location: string | null; start_at: string; end_at: string; status: string; price_total: number; deposit_percent: number | null } | null;
  invoice: {
    id: string | null;
    line_items: InvoiceLineItem[];
    notes: string | null;
    issue_date: string | null;
    customized: boolean;
    total: number;
    number: string | null;        // formatted server-side with the org's prefix
    service_date: string | null;  // the invoice's own date; falls back to the booking's
    status: string | null;
  };
  total_paid: number;
  payments: { amount: number; method: string; paid_at: string | null }[];
}

// Standalone, printable A4 invoice. Three ways in:
//   /book/invoice/:id        → get_invoice (org admin OR the booking's own client)
//   /book/invoice?inv=…      → get_invoice_by_id (by INVOICE id — the only way to reach
//                              an invoice that has no booking)
//   /book/invoice?token=…    → get_invoice_by_token (anon-safe: a share or pay link)
// so admins, signed-in clients AND token-link recipients can all view/print it.
@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  readonly state = signal<'loading' | 'ready' | 'error'>('loading');
  readonly data = signal<InvoiceBundle | null>(null);
  readonly downloading = signal(false);
  // The A4 sheet element — captured as-is into the PDF.
  private readonly sheet = viewChild<ElementRef<HTMLElement>>('sheet');

  // ── Paying this invoice by card (share-link recipients only) ──────────
  readonly payState = signal<'idle' | 'form' | 'processing'>('idle');
  readonly payError = signal('');
  private token = '';
  private stripe: any = null;
  private elements: any = null;
  private paymentElement: any = null;

  async ngOnInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    const id = this.route.snapshot.paramMap.get('id');
    const token = this.route.snapshot.queryParamMap.get('token');
    this.token = token ?? '';
    // `?inv=` addresses the INVOICE itself. It rides on the existing literal
    // /book/invoice route, so it needs no route change — and that literal path has a
    // real static file, so a shared link lands on a 200 with the branded card rather
    // than the SPA 404 fallback.
    const invId = this.route.snapshot.queryParamMap.get('inv');
    if (!id && !token && !invId) { this.state.set('error'); return; }
    const { data, error } = token
      ? await bookingsDb.rpc('get_invoice_by_token', { p_token: token })
      : invId
        ? await bookingsDb.rpc('get_invoice_by_id', { p_invoice: invId })
        : await bookingsDb.rpc('get_invoice', { p_booking: id });
    if (error || !data) { this.state.set('error'); return; }
    this.data.set(data as InvoiceBundle);
    this.state.set('ready');

    // Allow other pages to deep-link an action: …?auto=download | ?auto=print
    const auto = this.route.snapshot.queryParamMap.get('auto');
    if (auto === 'print') setTimeout(() => this.print(), 300);
    else if (auto === 'download') setTimeout(() => this.download(), 300);
  }

  // ── Derived invoice values ──────────────────────────────────────────
  get inv(): InvoiceDetails { return this.data()?.org.invoice_details ?? {}; }
  /** Footer with {deposit}/{balance}/{depositPercent}/{total} keys filled from this booking. */
  get footerText(): string {
    return renderInvoiceFooter(this.inv.invoice_footer, {
      total: this.total,
      // `booking` is null for a standalone invoice — the optional chain has to cover it,
      // not just `data()`. A footer template using {deposit} simply renders no percentage.
      depositPercent: this.data()?.booking?.deposit_percent ?? null,
      currency: this.currency,
    });
  }
  get currency(): string { return this.data()?.org.currency ?? 'EUR'; }
  get supplierName(): string { return this.inv.legal_name?.trim() || this.data()?.org.name || ''; }
  get vatRegistered(): boolean { return !!this.inv.vat_registered; }
  get vatRate(): number { return this.inv.vat_rate ?? 18; }

  /** The invoice number, formatted once server-side from the org's own prefix. The
   *  booking-ref fallback stays only for a booking that has no invoice row at all. */
  get invoiceNumber(): string {
    const fromBundle = this.data()?.invoice.number;
    if (fromBundle) return fromBundle;
    const ref = this.data()?.booking?.booking_ref ?? '';
    const prefix = (this.inv.invoice_prefix || 'INV').toUpperCase();
    const dash = ref.indexOf('-');
    return dash >= 0 ? `${prefix}-${ref.slice(dash + 1)}` : `${prefix}-${ref}`;
  }

  /** When the work happened. The invoice's own date, falling back to the booking's. */
  get serviceDate(): string | null { return this.data()?.invoice.service_date ?? null; }
  /** A standalone invoice has no job in the calendar behind it. */
  get bookingRef(): string | null { return this.data()?.booking?.booking_ref ?? null; }

  get lineItems(): InvoiceLineItem[] { return this.data()?.invoice.line_items ?? []; }
  get notes(): string | null { return this.data()?.invoice.notes ?? null; }
  /** Issue date: the saved invoice date if customised, otherwise today. */
  get issueDate(): string | Date { return this.data()?.invoice.issue_date ?? new Date(); }
  get total(): number { return this.data()?.invoice.total ?? 0; }
  /** With VAT prices are treated as inclusive: back out the net and VAT from the gross total. */
  get net(): number { return this.vatRegistered ? this.total / (1 + this.vatRate / 100) : this.total; }
  get vat(): number { return this.vatRegistered ? this.total - this.net : 0; }
  get paid(): number { return this.data()?.total_paid ?? 0; }
  get balance(): number { return Math.max(0, this.total - this.paid); }
  /** Settled: no balance left. The invoice then reads as a receipt (PAID, no pay instructions). */
  get fullyPaid(): boolean { return this.total > 0 && this.paid >= this.total - 0.005; }
  /** Distinct payment methods used (for the PAID receipt line). */
  get paidMethods(): string {
    const pays = this.data()?.payments ?? [];
    return [...new Set(pays.map(p => p.method))].join(', ');
  }
  /** Date of the most recent completed payment. */
  get lastPaidAt(): string | null {
    const pays = this.data()?.payments ?? [];
    return pays.length ? pays[pays.length - 1].paid_at : null;
  }

  /**
   * Whether to offer card payment. Only on the SHARE-LINK path: the `/:id` and `?inv=`
   * routes are the owner's own preview, and an owner has no business paying their own
   * invoice. Also requires the invoice to be actually issued with something outstanding
   * — the server re-checks all of this, this just avoids offering a button that fails.
   */
  get canPay(): boolean {
    return this.payable && !this.hasBooking;
  }

  /** The preconditions common to both ways of paying. */
  private get payable(): boolean {
    return !!this.token && this.balance > 0 && this.data()?.invoice.status === 'issued';
  }

  /** A standalone invoice has no job behind it — it is paid here, on its own link. */
  get hasBooking(): boolean { return !!this.data()?.booking; }

  /**
   * A booking-linked invoice pays on its BOOKING's pay page, not here.
   *
   * `copyShareLink` deliberately reuses the booking's existing pay token for these (so a
   * link already in a client's hands keeps working), which means the token in this URL
   * belongs to `booking_links`. `create-invoice-payment-intent` resolves only
   * `invoice_links` tokens, so the direct button 400s 100% of the time — live data
   * confirms it has never worked: 93 booking_links exist and 0 invoice_links.
   * The pay page is also the better destination: it is the well-tested path and it offers
   * deposit vs full, which this balance-only button cannot.
   */
  get canPayViaBooking(): boolean { return this.payable && this.hasBooking; }
  get payPageLink(): string { return `/book/${this.token}`; }

  private loadStripeJs(): Promise<void> {
    return new Promise((resolve, reject) => {
      if ((window as any).Stripe) { resolve(); return; }
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.onload = () => resolve();
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /** Create the intent server-side, then mount Stripe's form. The AMOUNT is never sent
   *  from here — the server computes the outstanding balance from the invoice's own
   *  lines and payments, so a stale page cannot ask to be charged the wrong figure. */
  async startPayment(): Promise<void> {
    if (!this.canPay || this.payState() !== 'idle') return;
    this.payError.set('');
    this.payState.set('form');
    try {
      const { data, error } = await bookingsDb.functions.invoke('create-invoice-payment-intent', {
        body: { token: this.token },
      });
      if (error) throw error;
      const { clientSecret, stripeAccount, error: fnError } = (data ?? {}) as
        { clientSecret?: string; stripeAccount?: string | null; error?: string };
      if (fnError) throw new Error(fnError);
      if (!clientSecret) throw new Error('Could not start the payment. Please try again.');

      await this.loadStripeJs();
      // A direct charge lives on the connected account, so Stripe.js must be bound to it.
      this.stripe = stripeAccount
        ? (window as any).Stripe(STRIPE_PK, { stripeAccount })
        : (window as any).Stripe(STRIPE_PK);

      this.elements = this.stripe.elements({ clientSecret, appearance: { theme: 'stripe' } });
      this.paymentElement = this.elements.create('payment');
      setTimeout(() => this.paymentElement.mount('#invoice-payment-element'), 50);
    } catch (err: any) {
      // supabase-js discards the body of a non-2xx function response and substitutes
      // "Edge Function returned a non-2xx status code", so every real reason the server
      // gives — "This invoice is already fully paid", "Link has expired", "This business
      // has not finished payment setup yet" — was replaced by that string before the
      // client ever saw it. The actual payload is on err.context; read it first.
      const body = await err?.context?.json?.().catch(() => null);
      this.payError.set(body?.error ?? err?.message ?? 'Something went wrong.');
      this.payState.set('idle');
    }
  }

  async submitPayment(): Promise<void> {
    if (!this.stripe || !this.elements || this.payState() === 'processing') return;
    this.payState.set('processing');
    this.payError.set('');
    const { error } = await this.stripe.confirmPayment({
      elements: this.elements,
      confirmParams: {
        // `tok` is what /pay/success passes to confirm-payment, which resolves an
        // invoice token as readily as a booking one.
        return_url: `${window.location.origin}/pay/success?tok=${this.token}`,
      },
    });
    if (error) {
      // Declined, failed validation, or 3-D Secure cancelled — the client is still on
      // the page, so return to the form and let them retry.
      this.payError.set(error.message ?? 'Payment failed.');
      this.payState.set('form');
    }
    // On success Stripe redirects; the page unloads.
  }

  cancelPayment(): void {
    if (this.paymentElement) { this.paymentElement.destroy(); this.paymentElement = null; }
    this.payState.set('idle');
    this.payError.set('');
  }

  /** Send the invoice to the printer (browser print dialog) — unchanged behaviour. */
  print(): void { if (isPlatformBrowser(this.platformId)) window.print(); }

  /** Download the invoice as a PDF file, exactly as shown (no margins / browser chrome). */
  async download(): Promise<void> {
    const el = this.sheet()?.nativeElement;
    if (!el || this.downloading()) return;
    this.downloading.set(true);
    try {
      await downloadElementAsPdf(el, `${this.invoiceNumber}.pdf`);
    } finally {
      this.downloading.set(false);
    }
  }
}
