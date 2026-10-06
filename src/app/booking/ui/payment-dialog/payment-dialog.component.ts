import { ChangeDetectionStrategy, Component, computed, effect, inject, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { PaymentMethod } from '@booking/core/interfaces/booking.interface';

const METHOD_LABEL: Record<PaymentMethod, string> = {
  card: 'Card', cash: 'Cash', revolut: 'Revolut', bank: 'Bank transfer', other: 'Other',
};

/**
 * Recording a payment, as a modal.
 *
 * It was an always-open card sitting between the ledger and the costs, so the page
 * carried a form that is used once or twice in a booking's life and read as clutter the
 * rest of the time. Same shape as the cost dialog deliberately: money in and money out
 * should be entered the same way.
 */
@Component({
  selector: 'app-payment-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, CurrencyPipe, ModalComponent],
  template: `
    <app-modal [open]="open()" (openChange)="open.set($event)" title="Record a payment" [dismissable]="true">
      <div class="pd">
        @if (balance() > 0) {
          <button type="button" class="pd__fill" (click)="amount.set(balance())">
            Pay full balance ({{ balance() | currency:'EUR':'symbol':'1.0-2' }})
          </button>
        }

        <div class="pd__grid">
          <label class="pd__field">
            <span>Amount (€)</span>
            <input type="number" min="0" step="0.01" placeholder="0.00"
                   [ngModel]="amount()" (ngModelChange)="amount.set($event)" name="pdAmount" />
          </label>
          <label class="pd__field">
            <span>Method</span>
            <select [ngModel]="method()" (ngModelChange)="method.set($event)" name="pdMethod">
              @for (m of methods; track m) { <option [value]="m">{{ label(m) }}</option> }
            </select>
          </label>
          <label class="pd__field">
            <span>Date</span>
            <input type="date" [ngModel]="paidOn()" (ngModelChange)="paidOn.set($event)" name="pdDate" />
          </label>
          <label class="pd__field pd__field--wide">
            <span>Note <em>optional</em></span>
            <input placeholder="e.g. Deposit, Final payment"
                   [ngModel]="note()" (ngModelChange)="note.set($event)" name="pdNote" />
          </label>
        </div>

        @if (overpay()) {
          <!-- Not blocked: a tip, a rounded-up transfer or a correction are all real. It is
               stated so it is never a surprise on the ledger afterwards. -->
          <p class="pd__note">That is more than the {{ balance() | currency:'EUR':'symbol':'1.0-2' }} outstanding.</p>
        }

        <div class="pd__actions">
          <button type="button" class="btn btn--ghost" (click)="open.set(false)">Cancel</button>
          <button type="button" class="btn btn--primary" [disabled]="saving() || !valid()" (click)="save()">
            {{ saving() ? 'Recording…' : 'Record payment' }}
          </button>
        </div>
      </div>
    </app-modal>
  `,
  styles: [`
    .pd__fill {
      display: inline-block; margin-bottom: 14px; padding: 7px 12px;
      background: rgba(244,169,34,0.12); border: 1px solid rgba(244,169,34,0.4); border-radius: 8px;
      font-family: inherit; font-size: 12px; font-weight: 700; color: #92400e; cursor: pointer;
      &:hover { background: rgba(244,169,34,0.2); }
    }
    .pd__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; }
    .pd__field--wide { grid-column: span 2; }
    @media (max-width: 560px) { .pd__field--wide { grid-column: span 1; } }
    .pd__field { display: flex; flex-direction: column; gap: 5px; }
    .pd__field > span { font-size: 12px; font-weight: 600; color: #475569; }
    .pd__field em { color: #94a3b8; font-style: normal; font-weight: 400; }
    .pd__field input, .pd__field select {
      padding: 10px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px;
      font-size: 14px; font-family: inherit; color: #0f172a; background: #fff;
      width: 100%; box-sizing: border-box;
    }
    /* Below 16px iOS zooms in on focus and never zooms back out. */
    @media (max-width: 560px) { .pd__field input, .pd__field select { font-size: 16px; } }
    .pd__field input:focus, .pd__field select:focus { outline: none; border-color: #F4A922; }
    .pd__note { margin: 10px 0 0; font-size: 11.5px; font-weight: 600; color: #b45309; }
    .pd__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 18px; }
    @media (max-width: 560px) { .pd__actions .btn { flex: 1 1 0; justify-content: center; } }
  `],
})
export class PaymentDialogComponent {
  private readonly data = inject(BookingDataService);
  private readonly toast = inject(ToastService);

  readonly open = model(false);
  readonly bookingId = input.required<string>();
  readonly balance = input<number>(0);
  readonly bookingRef = input<string>('');
  readonly saved = output<void>();

  readonly methods: PaymentMethod[] = ['cash', 'revolut', 'bank', 'card', 'other'];
  readonly saving = signal(false);

  readonly amount = signal<number | null>(null);
  readonly method = signal<PaymentMethod>('cash');
  readonly note = signal('');
  readonly paidOn = signal(new Date().toISOString().slice(0, 10));

  readonly valid = computed(() => {
    const a = Number(this.amount());
    return isFinite(a) && a > 0;
  });
  readonly overpay = computed(() => Number(this.amount()) > this.balance() && this.balance() > 0);

  constructor() {
    // Reset on open — the instance is reused, and a half-typed amount from last time
    // reappearing on a different payment is how the wrong figure gets recorded.
    effect(() => {
      if (!this.open()) return;
      queueMicrotask(() => {
        this.amount.set(null);
        this.method.set('cash');
        this.note.set('');
        this.paidOn.set(new Date().toISOString().slice(0, 10));
      });
    });
  }

  label(m: PaymentMethod): string { return METHOD_LABEL[m]; }

  async save(): Promise<void> {
    if (!this.valid() || this.saving()) return;
    this.saving.set(true);
    try {
      const amount = Number(this.amount());
      const paidAt = this.paidOn() ? new Date(`${this.paidOn()}T12:00:00`).toISOString() : null;
      const res = await this.data.addPayment(this.bookingId(), {
        amount, method: this.method(), note: this.note().trim() || null, paidAt,
      });
      if (res.error) { this.toast.error('Could not record the payment.'); return; }
      const ref = this.bookingRef();
      this.toast.success(`€${amount.toFixed(2)} payment recorded${ref ? ` for ${ref}` : ''}`);
      this.open.set(false);
      this.saved.emit();
    } finally { this.saving.set(false); }
  }
}
