import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { InvoiceDetails } from '@booking/core/services/booking-admin.service';
import { InvoiceBundle, InvoiceLineItem } from '@booking/core/interfaces/invoice.interface';
import { renderInvoiceFooter } from '@booking/core/utils/invoice-footer.util';

/**
 * The printable A4 invoice sheet — a pure presentational render of an `InvoiceBundle`.
 * No data fetching, no payment logic: that stays on the pages that use it (the public
 * invoice page owns the toolbar/Stripe flow around it).
 *
 * Extracted so the exact same sheet can be rendered from more than one place — on-screen
 * for `/book/invoice`, and offscreen (e.g. by an email-send dialog) purely to turn it into
 * PDF bytes via `renderElementToPdfBlob` (`core/utils/pdf.util.ts`). Because of that second
 * use, this component's host element must look right on its own, with no dependency on an
 * ancestor page's styles — the `:host` rule below IS the sheet (see the SCSS file).
 */
@Component({
  selector: 'app-invoice-sheet',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './invoice-sheet.component.html',
  styleUrl: './invoice-sheet.component.scss',
})
export class InvoiceSheetComponent {
  readonly bundle = input.required<InvoiceBundle>();

  // ── Derived invoice values (moved verbatim from InvoiceComponent) ────────────────────
  get inv(): InvoiceDetails { return this.bundle()?.org.invoice_details ?? {}; }
  /** Footer with {deposit}/{balance}/{depositPercent}/{total} keys filled from this booking. */
  get footerText(): string {
    return renderInvoiceFooter(this.inv.invoice_footer, {
      total: this.total,
      // `booking` is null for a standalone invoice — the optional chain has to cover it,
      // not just `data()`. A footer template using {deposit} simply renders no percentage.
      depositPercent: this.bundle()?.booking?.deposit_percent ?? null,
      currency: this.currency,
    });
  }
  get currency(): string { return this.bundle()?.org.currency ?? 'EUR'; }
  get supplierName(): string { return this.inv.legal_name?.trim() || this.bundle()?.org.name || ''; }
  get vatRegistered(): boolean { return !!this.inv.vat_registered; }
  get vatRate(): number { return this.inv.vat_rate ?? 18; }

  /** The invoice number, formatted once server-side from the org's own prefix. The
   *  booking-ref fallback stays only for a booking that has no invoice row at all. */
  get invoiceNumber(): string {
    const fromBundle = this.bundle()?.invoice.number;
    if (fromBundle) return fromBundle;
    const ref = this.bundle()?.booking?.booking_ref ?? '';
    const prefix = (this.inv.invoice_prefix || 'INV').toUpperCase();
    const dash = ref.indexOf('-');
    return dash >= 0 ? `${prefix}-${ref.slice(dash + 1)}` : `${prefix}-${ref}`;
  }

  /** When the work happened. The invoice's own date, falling back to the booking's. */
  get serviceDate(): string | null { return this.bundle()?.invoice.service_date ?? null; }
  /** When payment is expected. Null until the invoice is issued. */
  get dueDate(): string | null { return this.bundle()?.invoice.due_date ?? null; }
  /** A standalone invoice has no job in the calendar behind it. */
  get bookingRef(): string | null { return this.bundle()?.booking?.booking_ref ?? null; }

  get lineItems(): InvoiceLineItem[] { return this.bundle()?.invoice.line_items ?? []; }
  get notes(): string | null { return this.bundle()?.invoice.notes ?? null; }
  /** Issue date: the saved invoice date if customised, otherwise today. */
  get issueDate(): string | Date { return this.bundle()?.invoice.issue_date ?? new Date(); }
  get total(): number { return this.bundle()?.invoice.total ?? 0; }
  /** With VAT prices are treated as inclusive: back out the net and VAT from the gross total. */
  get net(): number { return this.vatRegistered ? this.total / (1 + this.vatRate / 100) : this.total; }
  get vat(): number { return this.vatRegistered ? this.total - this.net : 0; }
  get paid(): number { return this.bundle()?.total_paid ?? 0; }
  get balance(): number { return Math.max(0, this.total - this.paid); }
  /** Settled: no balance left. The invoice then reads as a receipt (PAID, no pay instructions). */
  get fullyPaid(): boolean { return this.total > 0 && this.paid >= this.total - 0.005; }
  /** Distinct payment methods used (for the PAID receipt line). */
  get paidMethods(): string {
    const pays = this.bundle()?.payments ?? [];
    return [...new Set(pays.map(p => p.method))].join(', ');
  }
  /** Date of the most recent completed payment. */
  get lastPaidAt(): string | null {
    const pays = this.bundle()?.payments ?? [];
    return pays.length ? pays[pays.length - 1].paid_at : null;
  }
}
