import { Component, ElementRef, OnInit, inject, signal, viewChild, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { bookingsDb } from '@booking/core/db/supabase.bookings';
import { InvoiceBundle } from '@booking/core/interfaces/invoice.interface';
import { downloadElementAsPdf } from '@booking/core/utils/pdf.util';
import { STRIPE_PK } from '@booking/core/config/stripe';
import { InvoiceSheetComponent } from '@booking/ui/invoice-sheet/invoice-sheet.component';

// Standalone, printable A4 invoice. Three ways in:
//   /book/invoice/:id        → get_invoice (org admin OR the booking's own client)
//   /book/invoice?inv=…      → get_invoice_by_id (by INVOICE id — the only way to reach
//                              an invoice that has no booking)
//   /book/invoice?token=…    → get_invoice_by_token (anon-safe: a share or pay link)
// so admins, signed-in clients AND token-link recipients can all view/print it.
// This page owns the toolbar and the Stripe pay flow; the printable sheet itself is
// InvoiceSheetComponent (ui/invoice-sheet) — a reusable presentational render of the same
// InvoiceBundle, so it can also be rendered offscreen elsewhere (e.g. to email a PDF).
@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CurrencyPipe, InvoiceSheetComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  readonly state = signal<'loading' | 'ready' | 'error'>('loading');
  readonly data = signal<InvoiceBundle | null>(null);
  readonly downloading = signal(false);
  // The rendered sheet component — read two ways: the instance (for its `invoiceNumber`,
  // used as the download filename) and its host element (the thing actually captured into
  // the PDF, unchanged from when this was a local `#sheet` template ref).
  private readonly sheetCmp = viewChild(InvoiceSheetComponent);
  private readonly sheetEl = viewChild(InvoiceSheetComponent, { read: ElementRef<HTMLElement> });

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

  // ── Derived invoice values still needed here ──────────────────────────
  // The full set (inv/total/net/vat/paid/fullyPaid/etc.) now lives on InvoiceSheetComponent,
  // which renders from this same `data()` bundle. These two are kept here too only because
  // the toolbar/paybox above the sheet — not the sheet itself — also renders them; reading
  // them through the child would be correct once its view is ready, but wrong (undefined)
  // on the very first render pass, since the sheet element sits after this toolbar in the
  // template. Computing them directly from the bundle this component already holds avoids
  // that entirely.
  get currency(): string { return this.data()?.org.currency ?? 'EUR'; }
  get balance(): number {
    const total = this.data()?.invoice.total ?? 0;
    const paid = this.data()?.total_paid ?? 0;
    return Math.max(0, total - paid);
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

  /** Whether either pay route is on offer. The toolbar demotes Download to secondary when
   *  it is, so the row never shows two competing primary buttons. */
  get hasPayAction(): boolean { return this.canPay || this.canPayViaBooking; }

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
    const el = this.sheetEl()?.nativeElement;
    if (!el || this.downloading()) return;
    this.downloading.set(true);
    try {
      const filename = this.sheetCmp()?.invoiceNumber ?? 'invoice';
      await downloadElementAsPdf(el, `${filename}.pdf`);
    } finally {
      this.downloading.set(false);
    }
  }
}
