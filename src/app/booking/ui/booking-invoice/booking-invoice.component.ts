import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface InvoiceData {
  ref: string;
  title: string;
  description: string | null;
  location: string | null;
  startAt: string;
  endAt: string;
  priceTotal: number;
  priceExpenses: number;
  amountPaid: number;
  balanceDue: number;
  paymentType: 'deposit' | 'full';
  paidAt: Date | null;
}

@Component({
  selector: 'app-booking-invoice',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './booking-invoice.component.html',
  styleUrl: './booking-invoice.component.scss',
})
export class BookingInvoiceComponent {
  @Input() invoice: InvoiceData | null = null;
  // Opt-in: a booking invoice has no business defaulting to a link back to the Malta map
  // (a client who just paid for a shoot isn't a map visitor). Callers that want a "back"
  // affordance pass their own destination; otherwise the template renders none.
  @Input() backLink: string | null = null;
  @Input() backLabel = '← Back';

  // NOTE: there is deliberately no `typeLabel` here any more. The receipt's wording is
  // derived from the AMOUNTS (paid vs balance due), not from `paymentType` — a €50 payment
  // against a €100 job is a part payment whether or not a deposit was ever offered, and
  // labelling it "Deposit paid" when none was configured is simply untrue. `paymentType`
  // stays on the interface because callers still set it, but nothing renders from it.
}
