import { ChangeDetectionStrategy, Component, computed, effect, inject, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { Expense, EXPENSE_CATEGORIES } from '@booking/core/interfaces/expense.interface';

/**
 * The one way to add or edit a cost, opened from the booking page, the invoices list and
 * the Costs & profit page.
 *
 * A single component on purpose: the first version put the form inline on the booking
 * page only, where it sat at the bottom of the payments column — the end of a long page
 * on a phone — and there was no way in at all from an invoice. Three copies of the form
 * would have drifted the first time a field was added.
 */
@Component({
  selector: 'app-expense-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ModalComponent],
  template: `
    <app-modal [open]="open()" (openChange)="open.set($event)"
               [title]="editing() ? 'Edit cost' : 'Add a cost'" [dismissable]="true">
      <div class="xd">
        <div class="xd__grid">
          <label class="xd__field">
            <span>Amount (€)</span>
            <input type="number" min="0" step="0.01" placeholder="0.00"
                   [ngModel]="amount()" (ngModelChange)="amount.set($event)" name="xdAmount" />
          </label>
          <label class="xd__field">
            <span>Category</span>
            <input list="xdCats" placeholder="Travel"
                   [ngModel]="category()" (ngModelChange)="category.set($event)" name="xdCat" />
            <datalist id="xdCats">
              @for (c of categories; track c) { <option [value]="c"></option> }
            </datalist>
          </label>
          <label class="xd__field">
            <span>Date</span>
            <input type="date" [ngModel]="spentOn()" (ngModelChange)="spentOn.set($event)" name="xdDate" />
          </label>
          <label class="xd__field xd__field--wide">
            <span>What was it?</span>
            <input placeholder="e.g. Fuel to Zebbug, second shooter, Adobe CC"
                   [ngModel]="description()" (ngModelChange)="description.set($event)" name="xdDesc" />
          </label>
          <label class="xd__field">
            <span>Paid to <em>optional</em></span>
            <input placeholder="e.g. Circle K"
                   [ngModel]="vendor()" (ngModelChange)="vendor.set($event)" name="xdVendor" />
          </label>
          <label class="xd__field xd__field--wide">
            <span>Job</span>
            @if (lockJob()) {
              <!-- Opened from a booking or an invoice: the job is already decided, so it is
                   shown for confirmation rather than offered as a choice to get wrong. -->
              <input [value]="lockedJobLabel()" disabled />
            } @else {
              <select [ngModel]="bookingId()" (ngModelChange)="bookingId.set($event)" name="xdJob">
                <option value="">No job — a general business cost</option>
                @for (j of jobs(); track j.id) {
                  <option [value]="j.id">{{ j.booking_ref }} · {{ j.title }}</option>
                }
              </select>
            }
          </label>
        </div>

        <label class="xd__check">
          <input type="checkbox" [ngModel]="billable()" (ngModelChange)="billable.set($event)" name="xdBill" />
          <span>Rebilled to the client on the invoice</span>
        </label>

        <div class="xd__actions">
          <button type="button" class="btn btn--ghost" (click)="open.set(false)">Cancel</button>
          <button type="button" class="btn btn--primary" [disabled]="saving() || !valid()" (click)="save()">
            {{ saving() ? 'Saving…' : (editing() ? 'Save changes' : 'Add cost') }}
          </button>
        </div>
      </div>
    </app-modal>
  `,
  styles: [`
    .xd__grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px;
    }
    .xd__field--wide { grid-column: span 2; }
    @media (max-width: 560px) { .xd__field--wide { grid-column: span 1; } }
    .xd__field { display: flex; flex-direction: column; gap: 5px; }
    .xd__field > span { font-size: 12px; font-weight: 600; color: #475569; }
    .xd__field em { color: #94a3b8; font-style: normal; font-weight: 400; }
    .xd__field input, .xd__field select {
      padding: 10px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px;
      font-size: 14px; font-family: inherit; color: #0f172a; background: #fff;
      width: 100%; box-sizing: border-box;
    }
    /* Below 16px iOS zooms in on focus and never zooms back out. */
    @media (max-width: 560px) { .xd__field input, .xd__field select { font-size: 16px; } }
    .xd__field input:disabled { background: #f8fafc; color: #64748b; }
    .xd__field input:focus, .xd__field select:focus { outline: none; border-color: #F4A922; }
    .xd__check {
      display: flex; align-items: center; gap: 8px; margin-top: 14px;
      font-size: 12.5px; color: #475569; cursor: pointer;
    }
    .xd__check input { width: 16px; height: 16px; accent-color: #F4A922; cursor: pointer; }
    .xd__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 18px; }
    @media (max-width: 560px) { .xd__actions .btn { flex: 1 1 0; justify-content: center; } }
  `],
})
export class ExpenseDialogComponent {
  private readonly data = inject(BookingDataService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);

  readonly open = model(false);
  /** Preselect (and lock) a job — set when opened from a booking or an invoice. */
  readonly forBookingId = input<string | null>(null);
  /** An existing cost to edit; null adds a new one. */
  readonly expense = input<Expense | null>(null);
  readonly saved = output<void>();

  readonly categories = EXPENSE_CATEGORIES;
  readonly saving = signal(false);

  readonly amount = signal<number | null>(null);
  readonly category = signal('Travel');
  readonly description = signal('');
  readonly vendor = signal('');
  readonly bookingId = signal('');
  readonly billable = signal(false);
  readonly spentOn = signal(new Date().toISOString().slice(0, 10));

  readonly editing = computed(() => !!this.expense());
  readonly lockJob = computed(() => !!this.forBookingId());
  readonly jobs = computed(() =>
    [...this.data.bookings()]
      .sort((a, b) => b.next_start_at.localeCompare(a.next_start_at))
      .slice(0, 150));
  readonly lockedJobLabel = computed(() => {
    const b = this.data.bookings().find(x => x.id === this.forBookingId());
    return b ? `${b.booking_ref} · ${b.title}` : 'This job';
  });
  readonly valid = computed(() => {
    const a = Number(this.amount());
    return isFinite(a) && a > 0 && this.description().trim().length > 0;
  });

  constructor() {
    // Reset on every open so a previous entry never bleeds into the next one — the dialog
    // instance is reused and would otherwise come back pre-filled with the last cost.
    effect(() => {
      if (!this.open()) return;
      const e = this.expense();
      const preset = this.forBookingId();
      queueMicrotask(() => {
        this.amount.set(e ? Number(e.amount) : null);
        this.category.set(e?.category ?? 'Travel');
        this.description.set(e?.description ?? '');
        this.vendor.set(e?.vendor ?? '');
        this.bookingId.set(e?.booking_id ?? preset ?? '');
        this.billable.set(e?.billable ?? false);
        this.spentOn.set(e?.spent_on ?? new Date().toISOString().slice(0, 10));
      });
    });
  }

  async save(): Promise<void> {
    if (!this.valid() || this.saving()) return;
    const org = this.auth.orgId();
    if (!org) { this.toast.error('No organization context.'); return; }

    this.saving.set(true);
    try {
      const amount = Number(this.amount());
      const res = await this.data.saveExpense(org, {
        id: this.expense()?.id,
        bookingId: this.forBookingId() ?? this.bookingId() ?? null,
        category: this.category(),
        description: this.description(),
        amount,
        spentOn: this.spentOn(),
        vendor: this.vendor() || null,
        billable: this.billable(),
      });
      if (res.error) { this.toast.error('Could not save the cost.'); return; }
      this.toast.success(this.editing() ? 'Cost updated' : `€${amount.toFixed(2)} cost added`);
      this.open.set(false);
      this.saved.emit();
    } finally { this.saving.set(false); }
  }
}
