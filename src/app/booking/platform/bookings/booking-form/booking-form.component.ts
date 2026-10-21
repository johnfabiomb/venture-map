import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingAdminService, AdminService, AdminStaff, WorkType } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { LineItem } from '@booking/core/interfaces/invoice.interface';
import { Client, BookingSlot, EditableBooking } from '@booking/core/interfaces/booking.interface';
import { AvailabilityPickerComponent, PickedSlot } from './availability-picker.component';
import { suggestBookingTitle } from '@booking/core/utils/booking-title.util';
import { LineItemsEditorComponent } from '@booking/ui/line-items-editor/line-items-editor.component';
import { ClientEditorComponent } from '@booking/ui/client-editor/client-editor.component';
import { InfoHintComponent } from '@booking/ui/info-hint/info-hint.component';
import { SelectComponent, SelectOption } from '@booking/ui/select/select.component';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CurrencyPipe, AvailabilityPickerComponent, LineItemsEditorComponent, ClientEditorComponent, InfoHintComponent, SelectComponent],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss',
})
export class BookingFormComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly admin = inject(BookingAdminService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  readonly data = inject(BookingDataService);

  private editingRef = '';

  readonly services = signal<AdminService[]>([]);
  readonly staff = signal<AdminStaff[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly errorMsg = signal('');
  readonly editingId = signal<string | null>(null);
  readonly created = signal<{ id: string; ref: string; link: string | null } | null>(null);
  /** Ref of the booking this one was cloned from — drives the "copied from" banner.
   *  Empty for an ordinary new booking. */
  readonly copiedFrom = signal('');

  // ── Form state ──────────────────────────────────────────────────────
  // A booking's customer is EITHER an existing client (reusable CRM record with
  // company/VAT) OR a one-off typed name (a "quick" booking, never saved to Clients).
  clientMode: 'existing' | 'quick' = 'existing';
  clientId = '';
  contactName = '';
  readonly clientEditorOpen = signal(false);
  staffId = '';

  // Availability picker: one or more time blocks on the worker's calendar (across days).
  selectedSlots: PickedSlot[] = [];
  prefillSlots: BookingSlot[] = [];   // edit prefill for the picker (set once, never echoed)
  readonly orgTimezone = signal('Europe/Malta');
  readonly currency = signal('EUR');

  // Invoice line items — the source of truth for what's charged + the total.
  // Per-line hours feed the description/price only; the calendar span sets the duration.
  // Starts empty: the admin must add at least one charge (enforced by canSubmit).
  lineItems: LineItem[] = [];

  title = '';
  location = '';
  notes = '';
  paymentMode: 'both' | 'card' | 'later' = 'both';
  depositMode: 'deposit' | 'full' = 'deposit';
  depositPercent = 30;
  // ── The post-production ticket, filled in here when a block is marked for it ──
  // There is deliberately no Status field: a booking-linked card starts in the Backlog and
  // `work_board.is_active` promotes it the moment the shoot ends, so editing booked for
  // next month does not clutter this week's board.
  workTitle = '';
  workType = '';
  workDue = '';
  workAssignee = '';        // '' = whoever is doing the shoot
  workDescription = '';
  /** The job's existing ticket, when editing. Null = none yet; marking a block creates one. */
  readonly existingWorkItemId = signal<string | null>(null);

  // ── Title ────────────────────────────────────────────────────────────────
  /** True once the owner has typed their own title. From then on nothing overwrites it —
   *  a field that keeps changing under you while you fill in the rest of the form is
   *  worse than no help at all. */
  private titleTouched = false;

  /** What the form would call this job, from what has been entered so far. '' when there
   *  is not enough to say anything useful. */
  get suggestedTitle(): string {
    return suggestBookingTitle({
      // The CHARGE carries the real work. This form always saves the booking with
      // service_id null — the service is picked per line item — so the booking's own
      // service field could never have supplied it. A line that names a service gives the
      // clean name outright; otherwise the description is used and its " — 2 hours" tail
      // is stripped by the util.
      work: (() => {
        const withService = this.lineItems.find(i => i.serviceId && i.description.trim());
        if (withService) {
          return this.services().find(sv => sv.id === withService.serviceId)?.name
                 ?? withService.description;
        }
        return this.lineItems.find(i => i.description.trim())?.description;
      })(),
      location: this.location,
      client: this.clientMode === 'existing'
        ? this.data.clients().find(c => c.id === this.clientId)?.name
        : this.contactName,
    });
  }

  /** Called whenever something the title is built from changes. */
  syncTitle(): void {
    if (this.titleTouched) return;
    this.title = this.suggestedTitle;
  }

  onTitleInput(value: string): void {
    this.title = value;
    // Emptying the box hands control back, and the suggestion returns immediately — so
    // "clear it" doubles as "give me the suggested one again". Without this, deleting a
    // title you no longer wanted would leave the field permanently blank.
    this.titleTouched = value.trim().length > 0;
    if (!this.titleTouched) this.syncTitle();
  }
  /** 'minimal' strips money/progress/notes from the Google Calendar event so the job can
   *  safely have other attendees on it. Defaults to the org setting via the RPC. */
  calendarDetail: 'full' | 'minimal' = 'full';
  confirmed = false;         // OFF (default) → tentative booking (held, awaits confirmation); ON → booked + calendar now

  private orgDefaults = { depositPercent: 30, depositAllowed: true };

  /** The worker the sidebar scope already chose, if any — the field is hidden then. */
  readonly scopedWorkerName = computed(() => this.auth.activeStaff()?.name ?? '');

  readonly workerOptions = computed<SelectOption[]>(() =>
    this.workers.map(w => ({ value: w.id, label: w.name })));
  /** The kinds of work this org does (§25) — the same list the Work board offers. */
  readonly workTypes = signal<WorkType[]>([]);
  readonly workTypeOptions = computed<SelectOption[]>(() =>
    this.workTypes().map(t => ({ value: t.key, label: t.label })));
  /** Who is shooting, so the "Who edits" field can say that is the default rather than
   *  showing an empty box that silently means something. */
  readonly shooterName = computed(() =>
    this.workers.find(w => w.id === this.staffId)?.name ?? '');
  /** Org-wide, searchable: a client belongs to the business, and a worker must be able to
   *  take on one they have never shot for. */
  readonly clientOptions = computed<SelectOption[]>(() =>
    this.data.clients().map(c => ({ value: c.id, label: c.name, hint: c.company ?? undefined })));
  readonly paymentModeOptions: SelectOption[] = [
    { value: 'both',  label: 'Card or pay later', hint: 'cash / Revolut / bank' },
    { value: 'card',  label: 'Card only' },
    { value: 'later', label: 'Pay later only', hint: 'client just confirms' },
  ];
  readonly depositModeOptions: SelectOption[] = [
    { value: 'deposit', label: 'Allow a deposit' },
    { value: 'full',    label: 'Require full payment' },
  ];

  async ngOnInit(): Promise<void> {
    await this.auth.initialize();
    const org = this.auth.orgId();
    if (org) {
      const [services, staff, settings, workTypes] = await Promise.all([
        this.admin.listServices(org),
        this.admin.listStaff(org),
        this.admin.getOrgSettings(org),
        this.admin.listWorkTypes(org),
      ]);
      this.services.set(services.filter(s => s.is_active));
      this.staff.set(staff.filter(s => s.is_bookable));
      this.workTypes.set(workTypes);

      this.orgDefaults = {
        depositPercent: settings?.booking_params?.deposit_percent ?? 30,
        depositAllowed: settings?.booking_params?.deposit_allowed ?? true,
      };
      if (settings?.timezone) this.orgTimezone.set(settings.timezone);
      if (settings?.currency) this.currency.set(settings.currency);
      this.depositPercent = this.orgDefaults.depositPercent;
      this.depositMode = this.orgDefaults.depositAllowed ? 'deposit' : 'full';

      // Scoped to one worker → that IS the worker, so the field is pre-filled rather
       // than asked for again. An edit or a clone still wins, since both set it from
       // the source booking below.
      if (this.auth.staffId()) this.staffId = this.auth.staffId()!;

      const id = this.route.snapshot.paramMap.get('id');
      // `?from=` is a CLONE, not an edit: it reuses this same form because the result is
      // a genuinely new booking, so it belongs on /bookings/new rather than its own route.
      const cloneOf = this.route.snapshot.queryParamMap.get('from');
      if (id) await this.loadForEdit(id);
      else if (cloneOf) await this.loadForDuplicate(cloneOf);
    }
    this.loading.set(false);
  }

  /** Everything that describes the WORK — not the booking's identity, and not its times.
   *  Shared by edit and duplicate so the two can never drift apart. */
  private applyBookingFields(b: EditableBooking): void {
    if (b.client_id) {
      this.clientMode = 'existing'; this.clientId = b.client_id; this.contactName = '';
    } else if (b.contact_name) {
      this.clientMode = 'quick'; this.contactName = b.contact_name; this.clientId = '';
    }
    this.staffId = b.staff_id;
    this.title = b.title;
    // An existing title is the owner's, whether they typed it or accepted a suggestion.
    // Without this, editing the location on a saved booking would silently rewrite it.
    this.titleTouched = !!b.title?.trim();
    this.location = b.location ?? '';
    this.notes = b.notes ?? '';
    this.paymentMode = b.allow_card && b.allow_inperson ? 'both' : b.allow_card ? 'card' : 'later';
    this.depositMode = (b.deposit_allowed ?? this.orgDefaults.depositAllowed) ? 'deposit' : 'full';
    this.depositPercent = b.deposit_percent ?? this.orgDefaults.depositPercent;

    this.calendarDetail = b.calendar_detail ?? 'full';
  }

  /** The saved invoice breakdown, or a single line derived from the booking itself. */
  private async loadItems(id: string, b: EditableBooking): Promise<LineItem[]> {
    const items = await this.data.getInvoiceItems(id);
    return items.length ? items : [{ description: b.description ?? b.title, amount: b.price_total }];
  }

  private async loadForEdit(id: string): Promise<void> {
    const b = await this.data.getBooking(id);
    if (!b) { this.errorMsg.set('Booking not found.'); return; }
    this.editingId.set(id);
    this.editingRef = b.booking_ref;
    this.applyBookingFields(b);

    // Seed the picker from the booking's real time blocks (one or more).
    // Both kinds of block, so the full set round-trips. setWorkSlots REPLACES a ticket's
    // blocks, so loading only the booking's would silently wipe the reserved editing time
    // the moment anything else on this form was saved.
    const shoot = (await this.data.getBookingSlots(id))
      .map(sl => ({ ...sl, kind: 'shoot' as const }));
    const card = await this.admin.workItemForBooking(id);
    this.existingWorkItemId.set(card?.id ?? null);
    let work: BookingSlot[] = [];
    if (card) {
      work = (await this.admin.getWorkSlots(card.id)).map(sl => ({ ...sl, kind: 'work' as const }));
      // Prefill the ticket's own fields so editing the booking edits the ticket too,
      // rather than quietly creating a second description of the same work.
      this.workTitle = card.title ?? '';
      this.workType = card.workType ?? '';
      this.workDue = card.dueAt ? card.dueAt.slice(0, 10) : '';
      this.workAssignee = card.assigneeId ?? '';
      this.workDescription = card.description ?? '';
    }
    this.prefillSlots = [...shoot, ...work];
    this.lineItems = await this.loadItems(id, b);
  }

  /**
   * Clone a job: same work, blank diary. Repeat bookings here are the same shoot for the
   * same client on a different day, so everything about WHAT the job is carries over and
   * nothing about WHEN it happens does.
   *
   * Deliberately NOT copied:
   *  - editingId / booking_ref — this is a new booking and earns its own number
   *  - time blocks — the whole point; the owner picks fresh ones
   *  - confirmed — stays off, so cloning can never silently push a calendar event
   *  - status, payments, invoice — a copy has been neither agreed nor paid for
   */
  private async loadForDuplicate(id: string): Promise<void> {
    const b = await this.data.getBooking(id);
    if (!b) { this.errorMsg.set('Could not find the booking to copy from.'); return; }
    this.applyBookingFields(b);
    this.lineItems = await this.loadItems(id, b);
    this.copiedFrom.set(b.booking_ref);
  }

  // ── Derived ─────────────────────────────────────────────────────────
  get isEditing(): boolean { return this.editingId() !== null; }
  /** Any bookable worker — availability is worker-based. */
  get workers(): AdminStaff[] { return this.staff(); }
  /** Booking total = sum of the line items (source of truth). */
  get priceTotal(): number { return this.lineItems.reduce((s, i) => s + (Number(i.amount) || 0), 0); }
  get selectedClient(): Client | undefined { return this.data.clients().find(c => c.id === this.clientId); }
  /** A customer is set when an existing client is picked, or a quick name is typed. */
  get hasCustomer(): boolean {
    return this.clientMode === 'existing' ? !!this.clientId : this.contactName.trim().length > 0;
  }
  // ── Shoot vs post-production (§30) ──────────────────────────────────
  /** Blocks that belong to the BOOKING. The job's dates come from these alone, so an
   *  editing evening never stretches the shoot. */
  get shootBlocks(): PickedSlot[] { return this.selectedSlots.filter(s => s.kind !== 'work'); }
  /** Blocks that belong to the work TICKET. Still reserved, still blocking — they just
   *  answer a different question on the calendar. */
  get workBlocks(): PickedSlot[] { return this.selectedSlots.filter(s => s.kind === 'work'); }
  get hasWork(): boolean { return this.workBlocks.length > 0; }
  /**
   * Nothing but post-production time — your own work, with no client job behind it.
   *
   * This form then creates a WORK TASK and no booking at all. The two stay separate
   * records on purpose: a booking carries a reference, a price, a deposit and a
   * client-facing pay link, and giving every editing evening those would eventually mean
   * invoicing somebody for work they had already paid for. What is shared is this form —
   * which is the part that was actually annoying.
   */
  get isWorkOnly(): boolean { return !this.shootBlocks.length && this.hasWork; }

  /** The DB slots to persist (one row per chosen SHOOT block). */
  get slotsValue(): BookingSlot[] {
    return this.shootBlocks.map(s => ({
      start: s.iso, end: s.endIso,
      // `label` is the block's NAME; `timeLabel` is the derived "Mon 5 Oct · 08:00–09:00"
      // display string and must never be persisted.
      label: s.label?.trim() || null,
    }));
  }

  // ── Change handlers ─────────────────────────────────────────────────
  // Charges (pricing) are decoupled from the calendar — editing items never touches the time blocks.
  onItemsChange(items: LineItem[]): void { this.lineItems = items; this.syncTitle(); }
  // The picker clears its blocks (and emits []) when the worker changes, so no manual reset needed.
  onSlotsChanged(slots: PickedSlot[]): void { this.selectedSlots = slots; }

  // ── Client (reuses the full client editor — never a stub) ────────────
  openClientEditor(): void { this.clientEditorOpen.set(true); }
  onClientCreated(c: Client): void { this.clientMode = 'existing'; this.clientId = c.id; }

  // ── Submit ──────────────────────────────────────────────────────────
  get canSubmit(): boolean {
    // A charge may be €0: the job is agreed before the price sometimes is. What a line
    // still MUST have is a description — that is what the client reads on the invoice,
    // and a nameless zero line is not a placeholder, it is nothing.
    const itemsOk = this.lineItems.length > 0
      && this.lineItems.every(i => i.description.trim().length > 0);
    // Your own work needs no customer and no charges — there is nobody to bill. It needs
    // a worker, a block and something to call it.
    if (this.isWorkOnly) {
      return !this.saving() && !!this.staffId
        && (this.title.trim().length > 0 || this.workTitle.trim().length > 0);
    }
    // No title requirement: it is derived from the job when left blank (see
    // suggestedTitle). "I don't have a title" should never be the thing stopping a
    // booking from being saved.
    return !this.saving() && this.hasCustomer && !!this.staffId && this.shootBlocks.length > 0
      && itemsOk && (this.title.trim().length > 0 || this.suggestedTitle.length > 0);
  }

  /** The first thing still missing, in the order the form asks for it. Empty when the
   *  booking is ready to save. Surfaced next to a disabled Create button so the reason is
   *  never off-screen — the time blocks in particular are picked far below it on a phone. */
  /** What pressing the button will actually make — said out loud, because this one form
   *  now produces two different things depending on what is in it. */
  get submitLabel(): string {
    if (this.saving()) return 'Saving…';
    if (this.isEditing) return 'Save changes';
    return this.isWorkOnly ? 'Create work task' : 'Create booking';
  }

  get blockedReason(): string {
    if (this.isWorkOnly) {
      if (!this.staffId) return 'Pick who is doing it';
      if (!this.title.trim() && !this.workTitle.trim()) return 'Say what the work is';
      return '';
    }
    if (!this.hasCustomer) return 'Pick a customer';
    if (!this.staffId) return 'Pick a worker';
    if (!this.lineItems.length) return 'Add a charge';
    if (this.lineItems.some(i => !i.description.trim())) return 'Describe each charge';
    // Only reachable when the charges say nothing a title could be built from.
    if (!this.title.trim() && !this.suggestedTitle) return 'Add a title';
    if (!this.shootBlocks.length) return 'Pick a time block';
    return '';
  }

  async submit(): Promise<void> {
    if (!this.canSubmit) return;
    const org = this.auth.orgId();
    if (!org) { this.errorMsg.set('No organization context.'); return; }

    this.saving.set(true);
    this.errorMsg.set('');
    try {
      // Your own work: a work task and nothing else — no booking reference, no invoice,
      // no client link. Handled before anything else so none of the booking machinery
      // below can half-run.
      if (!this.isEditing && this.isWorkOnly) { await this.createWorkOnly(org); return; }

      // Keep the service metadata (serviceId/hours) so the breakdown round-trips on edit.
      const items: LineItem[] = this.lineItems.map(i => ({
        description: i.description.trim(), amount: Number(i.amount) || 0,
        ...(i.serviceId ? { serviceId: i.serviceId } : {}),
        ...(i.hours ? { hours: i.hours } : {}),
      }));
      const shared = {
        staffId: this.staffId, serviceId: null,
        clientId: this.clientMode === 'existing' ? this.clientId : null,
        contactName: this.clientMode === 'quick' ? this.contactName.trim() : null,
        title: this.title.trim() || this.suggestedTitle,
        description: items.map(i => i.description).join('\n'),  // client-facing summary on the pay page
        slots: this.slotsValue,
        priceTotal: this.priceTotal,
        allowCard: this.paymentMode !== 'later',
        allowInperson: this.paymentMode !== 'card',
        depositAllowed: this.depositMode === 'deposit',
        depositPercent: this.depositPercent,
        // Legacy column: the form no longer offers it. A ticket exists because a block
        // says so, not because a flag was set.
        needsProduction: false,
        calendarDetail: this.calendarDetail,
        location: this.location.trim() || null, notes: this.notes.trim() || null,
      };

      if (this.isEditing) {
        const res = await this.data.updateBooking(this.editingId()!, shared);
        if (res.error) { this.errorMsg.set(this.errorText(res.error)); return; }
        await this.data.saveInvoice(org, this.editingId()!, { lineItems: items, notes: null, issueDate: null });
        // `update_booking` deletes slots WHERE booking_id, so the ticket's blocks survive
        // it untouched — but it cannot create or change a ticket, so that goes through the
        // work APIs here. Not atomic like the create path; the booking is already saved by
        // this point, so a failure is reported without losing the edit.
        const workNote = await this.syncWorkOnEdit(org, this.editingId()!);
        if (workNote) this.toast.error(workNote, 9000);
        else this.toast.success(`${this.editingRef || 'Booking'} updated`);
        if (this.paymentMode !== 'later') {
          const link = await this.data.generateLink(this.editingId()!);
          this.created.set({ id: this.editingId()!, ref: this.editingRef, link });
        } else {
          this.goToList();
        }
        return;
      }

      const res = await this.data.createBooking({
        orgId: org, ...shared, confirmed: this.confirmed,
        // The post-production ticket, created in the SAME transaction as the booking —
        // the same way the invoice is created from the line items. Null when no block was
        // marked for it.
        work: this.hasWork ? {
          title: this.workTitle.trim() || this.title.trim(),
          description: this.workDescription.trim() || null,
          workType: this.workType || null,
          dueAt: this.workDue ? new Date(`${this.workDue}T12:00:00`).toISOString() : null,
          assigneeId: this.workAssignee || null,
          slots: this.workBlocks.map(b => ({
            start: b.iso, end: b.endIso, label: b.label?.trim() || null,
          })),
        } : null,
      });
      if (res.error || !res.id) { this.errorMsg.set(this.errorText(res.error)); return; }
      // Persist the line-item breakdown as the invoice (source of truth).
      await this.data.saveInvoice(org, res.id, { lineItems: items, notes: null, issueDate: null });
      // Confirmed → push to Google Calendar now. Tentative bookings are pushed only once
      // confirmed (by you, or when the client pays by card).
      if (this.confirmed) await this.data.confirmToCalendar(res.id);
      // The work ticket (if any) was created by create_booking itself, so there is no
      // second call here that could fail and leave the booking without it.
      const link = await this.data.generateLink(res.id);
      this.created.set({ id: res.id, ref: res.ref ?? '', link });
      this.toast.success(`Booking ${res.ref ?? ''} created`);
    } finally {
      this.saving.set(false);
    }
  }

  private errorText(error?: string): string {
    if (error === 'slot_taken') return 'That worker is already booked for that time. Pick another slot or worker.';
    return error ?? 'Something went wrong. Please try again.';
  }

  /** Shareable invoice link (anon, token-based) — derived from the client link. */
  get invoiceLink(): string | null {
    const link = this.created()?.link;
    return link ? link.replace('/book/', '/book/invoice?token=') : null;
  }

  /** Which link was just copied — drives the "✓ Copied" button feedback. */
  readonly copied = signal<'pay' | 'invoice' | null>(null);

  private async copyTo(text: string | null | undefined, which: 'pay' | 'invoice'): Promise<void> {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      this.copied.set(which);
      setTimeout(() => { if (this.copied() === which) this.copied.set(null); }, 1600);
    } catch { /* clipboard blocked — input stays selectable for manual copy */ }
  }

  copyLink(): void { void this.copyTo(this.created()?.link, 'pay'); }
  copyInvoiceLink(): void { void this.copyTo(this.invoiceLink, 'invoice'); }

  reset(): void {
    this.editingId.set(null);
    this.clientMode = 'existing';
    this.clientId = '';
    this.contactName = '';
    this.staffId = '';
    this.selectedSlots = [];
    this.prefillSlots = [];
    this.lineItems = [];
    this.title = ''; this.titleTouched = false; this.location = ''; this.notes = '';
    this.paymentMode = 'both';
    this.depositMode = this.orgDefaults.depositAllowed ? 'deposit' : 'full';
    this.depositPercent = this.orgDefaults.depositPercent;
    this.workTitle = ''; this.workType = ''; this.workDue = '';
    this.workAssignee = ''; this.workDescription = '';
    this.calendarDetail = 'full';
    this.confirmed = false;
    this.created.set(null); this.errorMsg.set('');
    // "Create another" starts from blank, so the clone banner must not linger.
    this.copiedFrom.set('');
  }

  /**
   * Create or update the job's post-production ticket from the form, on the EDIT path.
   * Returns a message when something could not be done, '' when all is well.
   *
   * Removing every post-production block clears the ticket's reserved time but KEEPS the
   * ticket: the work still has to happen, you just have not said when any more. Deleting
   * it would silently throw away its brief, its checklist and its place on the board.
   */
  private async syncWorkOnEdit(org: string, bookingId: string): Promise<string> {
    const blocks = this.workBlocks;
    let itemId = this.existingWorkItemId();
    if (!itemId && !blocks.length) return '';          // nothing to do, nothing to undo

    if (!itemId) {
      itemId = await this.admin.addWorkItem(org, bookingId, this.workTitle.trim() || this.title.trim());
      if (!itemId) return 'The booking was saved, but its post-production ticket could not be created.';
      this.existingWorkItemId.set(itemId);
    }

    await this.admin.updateWorkItem(itemId, {
      title: this.workTitle.trim() || this.title.trim(),
      description: this.workDescription.trim() || null,
      work_type: this.workType || null,
    });
    const assignee = this.workAssignee || this.staffId;
    await this.admin.assignCard(itemId, assignee || null);
    await this.admin.setDue(itemId, this.workDue ? new Date(`${this.workDue}T12:00:00`).toISOString() : null);

    const { clashes, orphanEventIds } = await this.admin.setWorkSlots(
      org, itemId, assignee,
      blocks.map(b => ({ start: b.iso, end: b.endIso, label: b.label?.trim() || null })));
    this.admin.syncWorkEvent(itemId, orphanEventIds);

    // Said out loud, never swallowed: time that could not be reserved is time the calendar
    // would otherwise claim is free.
    return clashes.length
      ? `Booking saved, but ${clashes.length} post-production block${clashes.length > 1 ? 's' : ''} could not be reserved — that time is already taken.`
      : '';
  }

  /**
   * Reserve time for your own work with no client job behind it — an editing evening, a
   * site recce, admin. Creates a work task and its blocks; nothing that bills anyone.
   */
  private async createWorkOnly(org: string): Promise<void> {
    const title = (this.workTitle.trim() || this.title.trim());
    const id = await this.admin.addWorkItem(org, null, title);
    if (!id) { this.errorMsg.set('Could not create the work task.'); return; }

    const assignee = this.workAssignee || this.staffId;
    await this.admin.updateWorkItem(id, {
      title,
      description: this.workDescription.trim() || null,
      work_type: this.workType || null,
    });
    await this.admin.assignCard(id, assignee || null);
    await this.admin.setDue(id, this.workDue ? new Date(`${this.workDue}T12:00:00`).toISOString() : null);

    const { clashes, orphanEventIds } = await this.admin.setWorkSlots(
      org, id, assignee,
      this.workBlocks.map(b => ({ start: b.iso, end: b.endIso, label: b.label?.trim() || null })));
    this.admin.syncWorkEvent(id, orphanEventIds);

    if (clashes.length) {
      this.toast.error(
        `Work task saved, but ${clashes.length} block${clashes.length > 1 ? 's' : ''} could not be reserved — that time is already taken.`, 9000);
    } else {
      this.toast.success(`“${title}” added to the Work board`);
    }
    this.router.navigate(['/bookings/work']);
  }

  goToList(): void { this.router.navigate(['/bookings/list']); }
}
