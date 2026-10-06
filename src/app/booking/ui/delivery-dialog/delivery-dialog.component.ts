import { ChangeDetectionStrategy, Component, computed, effect, inject, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '@booking/ui/modal/modal.component';
import { LinksEditorComponent } from '@booking/ui/links-editor/links-editor.component';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { Delivery, DeliveryLink, isDeliveryUrl } from '@booking/core/interfaces/delivery.interface';

/**
 * What the client receives once the job is paid — edited in a modal like every other
 * action on the booking page, so the page itself stays a set of read-only summaries.
 *
 * The paid-gate is enforced server-side; the wording here only reports it.
 */
@Component({
  selector: 'app-delivery-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ModalComponent, LinksEditorComponent],
  template: `
    <app-modal [open]="open()" (openChange)="open.set($event)" title="Delivery" [dismissable]="true">
      <div class="dd">
        <label class="dd__field">
          <span>Message <em>optional</em></span>
          <textarea rows="3" [ngModel]="message()" (ngModelChange)="message.set($event)" name="ddMsg"
                    placeholder="e.g. Here are your final edits — please download within 30 days."></textarea>
        </label>

        <span class="dd__label">Links</span>
        <app-links-editor [(links)]="links" />

        @if (!valid()) {
          <p class="dd__note dd__note--warn">Every link must start with http:// or https://</p>
        } @else {
          <p class="dd__note">
            @if (!anything()) { Nothing attached — the client sees no delivery section. }
            @else if (released() || paidInFull()) { Visible on the client's booking link. }
            @else { Hidden until the booking is paid in full, unless you release it. }
          </p>
        }

        <div class="dd__actions">
          @if (hasSaved() && !paidInFull()) {
            <button type="button" class="btn btn--ghost" [disabled]="busy()" (click)="toggleRelease()">
              {{ released() ? 'Lock again' : 'Release now' }}
            </button>
          }
          @if (hasSaved()) {
            <button type="button" class="btn btn--ghost btn--danger-text" [disabled]="busy()" (click)="remove()">Remove</button>
          }
          <span class="dd__spacer"></span>
          <button type="button" class="btn btn--ghost" (click)="open.set(false)">Cancel</button>
          <button type="button" class="btn btn--primary" [disabled]="busy() || !valid()" (click)="save()">
            {{ busy() ? 'Saving…' : 'Save delivery' }}
          </button>
        </div>
      </div>
    </app-modal>
  `,
  styles: [`
    .dd__field { display: flex; flex-direction: column; gap: 5px; }
    .dd__field > span { font-size: 12px; font-weight: 600; color: #475569; }
    .dd__field em { color: #94a3b8; font-style: normal; font-weight: 400; }
    .dd__field textarea {
      padding: 10px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px;
      font-size: 14px; font-family: inherit; color: #0f172a; background: #fff;
      width: 100%; box-sizing: border-box; resize: vertical;
    }
    @media (max-width: 560px) { .dd__field textarea { font-size: 16px; } }
    .dd__field textarea:focus { outline: none; border-color: #F4A922; }
    .dd__label { display: block; font-size: 12px; font-weight: 600; color: #475569; margin: 14px 0 6px; }
    .dd__note { margin: 12px 0 0; font-size: 11.5px; color: #64748b; line-height: 1.45; }
    .dd__note--warn { color: #b91c1c; font-weight: 600; }
    .dd__actions { display: flex; align-items: center; gap: 10px; margin-top: 18px; flex-wrap: wrap; }
    .dd__spacer { flex: 1 1 auto; }
    .btn--danger-text { color: #dc2626; }
    @media (max-width: 560px) {
      .dd__spacer { display: none; }
      .dd__actions .btn { flex: 1 1 auto; justify-content: center; }
    }
  `],
})
export class DeliveryDialogComponent {
  private readonly data = inject(BookingDataService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);

  readonly open = model(false);
  readonly bookingId = input.required<string>();
  readonly delivery = input<Delivery | null>(null);
  readonly paidInFull = input<boolean>(false);
  readonly saved = output<void>();

  readonly busy = signal(false);
  readonly message = signal('');
  links: DeliveryLink[] = [];

  readonly released = computed(() => !!this.delivery()?.released_at);
  readonly hasSaved = computed(() => {
    const d = this.delivery();
    return !!d && (!!d.message?.trim() || d.links.length > 0);
  });

  /** Blank rows are fine while typing; only a filled-in bad URL is invalid. */
  readonly valid = computed(() => this.linksSnapshot().every(l => !l.url.trim() || isDeliveryUrl(l.url)));
  private readonly linksSnapshot = signal<DeliveryLink[]>([]);
  readonly anything = computed(() =>
    !!this.message().trim() || this.linksSnapshot().some(l => l.url.trim()));

  constructor() {
    effect(() => {
      if (!this.open()) return;
      const d = this.delivery();
      queueMicrotask(() => {
        this.message.set(d?.message ?? '');
        // Copied, never shared: the editor writes immutably but the caller's array must
        // not change under it if the dialog is cancelled.
        this.links = (d?.links ?? []).map(l => ({ ...l }));
        this.linksSnapshot.set(this.links);
      });
    });
  }

  onLinksChange(): void { this.linksSnapshot.set([...this.links]); }

  async save(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) { this.toast.error('No organization context.'); return; }
    if (!this.valid()) { this.toast.error('Every link must start with http:// or https://'); return; }
    this.busy.set(true);
    try {
      // Drop blank rows so a half-typed line never reaches the client.
      const links = this.links
        .map(l => ({ label: l.label.trim(), url: l.url.trim() }))
        .filter(l => l.url);
      const res = await this.data.saveDelivery(org, this.bookingId(), {
        message: this.message().trim() || null, links,
      });
      if (res.error) { this.toast.error('Could not save the delivery.'); return; }
      this.toast.success('Delivery saved');
      this.open.set(false);
      this.saved.emit();
    } finally { this.busy.set(false); }
  }

  async toggleRelease(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) { this.toast.error('No organization context.'); return; }
    const releasing = !this.released();
    const ok = await this.confirm.ask(releasing
      ? { title: 'Release delivery now', message: 'The client will be able to open this immediately, before the booking is paid in full. Continue?', confirmLabel: 'Release' }
      : { title: 'Lock delivery', message: 'The client will lose access until the booking is paid in full.', confirmLabel: 'Lock', danger: true });
    if (!ok) return;
    this.busy.set(true);
    try {
      await this.data.setDeliveryReleased(org, this.bookingId(), releasing);
      this.toast.success(releasing ? 'Delivery released' : 'Delivery locked');
      this.saved.emit();
    } finally { this.busy.set(false); }
  }

  async remove(): Promise<void> {
    if (!(await this.confirm.ask({
      title: 'Remove delivery',
      message: 'The client will no longer see a delivery section on their booking link.',
      confirmLabel: 'Remove', danger: true,
    }))) return;
    const org = this.auth.orgId();
    if (!org) return;
    this.busy.set(true);
    try {
      await this.data.saveDelivery(org, this.bookingId(), { message: null, links: [] });
      this.message.set('');
      this.links = [];
      this.linksSnapshot.set([]);
      this.toast.success('Delivery removed');
      this.open.set(false);
      this.saved.emit();
    } finally { this.busy.set(false); }
  }
}
