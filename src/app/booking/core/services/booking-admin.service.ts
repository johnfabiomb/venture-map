import { Injectable, inject } from '@angular/core';
import { bookingsDb } from '@booking/core/db/supabase.bookings';
import { BookingSlot } from '@booking/core/interfaces/booking.interface';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { ServicePricing } from '@booking/core/interfaces/org.interface';
import { WorkingHoursConfig } from '@booking/core/interfaces/working-hours.interface';
import { EmailTemplate } from '@booking/core/utils/invoice-email.util';

export interface AdminService {
  id: string;
  org_id: string;
  name: string;
  description: string | null;
  pricing: ServicePricing;
  min_hours: number;
  max_hours: number;
  is_active: boolean;
  task_template: string[];
}

/** A stage key. Open string since §24: stages are rows the owner can add and rename,
 *  not a fixed union. The four original keys are seeded for every org. */
export type ProductionStage = string;

/** A board column. */
export interface WorkStage {
  id: string;
  key: string;
  label: string;
  sort: number;
  /** Terminal — work finished. Drives "still owed" rather than comparing to 'delivered'. */
  is_done: boolean;
  /** Google Calendar event colour id (1–11), so the calendar matches the board. */
  color_id: string | null;
}

/** A kind of work — an edit, a grade, an export. Rows rather than a constant, because
 *  the calendar event needs the label too and a constant would have to be duplicated
 *  into the Edge Function. */
export interface WorkType {
  id: string;
  key: string;
  label: string;
  sort: number;
}

/** Google's fixed event palette. There are no arbitrary colours, so the picker offers
 *  exactly what Google will actually render. */
export const GCAL_COLORS: { id: string; name: string; hex: string }[] = [
  { id: '1',  name: 'Lavender', hex: '#7986cb' },
  { id: '2',  name: 'Sage',     hex: '#33b679' },
  { id: '3',  name: 'Grape',    hex: '#8e24aa' },
  { id: '4',  name: 'Flamingo', hex: '#e67c73' },
  { id: '5',  name: 'Banana',   hex: '#f6bf26' },
  { id: '6',  name: 'Tangerine',hex: '#f4511e' },
  { id: '7',  name: 'Peacock',  hex: '#039be5' },
  { id: '8',  name: 'Graphite', hex: '#616161' },
  { id: '9',  name: 'Blueberry',hex: '#3f51b5' },
  { id: '10', name: 'Basil',    hex: '#0b8043' },
  { id: '11', name: 'Tomato',   hex: '#d50000' },
];
export const colorHex = (id: string | null): string =>
  GCAL_COLORS.find(c => c.id === id)?.hex ?? '#94a3b8';

export interface WorkJob {
  id: string;                  // work_item id (the board's unit)
  bookingId: string | null;    // linked booking, or null for a standalone card
  title: string;
  start_at: string | null;     // booking start (null for standalone)
  bookingEndAt: string | null; // booking end — drives auto-activation
  production_status: ProductionStage;
  isActive: boolean;           // on the board (true) vs in the Backlog (false)
  assigneeId: string | null;
  assigneeName: string | null;
  dueAt: string | null;        // deliver-by date
  clientName: string | null;
  serviceName: string | null;
  description: string | null;
  workType: string | null;         // work_types.key
  workTypeLabel: string | null;    // resolved by the view
  stageLabel: string | null;       // resolved by the view — stages are renameable
  /** The stage's own terminal flag. Never compare a stage to the string 'delivered'. */
  stageIsDone: boolean;
  doneAt: string | null;           // when it entered a terminal stage
  /** Terminal and aged past the org's archive window — off the board, in History. */
  isArchived: boolean;
}

export interface TaskRow {
  id: string;
  work_item_id: string | null;
  title: string;
  is_done: boolean;
  due_at: string | null;
}

/** A booking option for linking a new work card to a job. */
export interface JobOption {
  id: string;
  title: string;
  start_at: string;
  clientName: string | null;
}

export interface AdminStaff {
  id: string;
  org_id: string;
  user_id: string | null;
  name: string;
  email: string | null;
  is_bookable: boolean;
}

export interface StaffServiceRow {
  staff_id: string;
  service_id: string;
  working_hours: WorkingHoursConfig | null;
}

export interface InvoiceDetails {
  legal_name?: string;
  address?: string;
  phone?: string;
  email?: string;
  vat_number?: string;
  vat_registered?: boolean;
  vat_rate?: number;        // percent, default 18
  vat_note?: string;        // legal VAT statement printed on every invoice (e.g. reverse-charge)
  invoice_prefix?: string;  // default 'INV'
  invoice_footer?: string;  // payment terms / thank-you / bank details
}

/**
 * Invoicing BEHAVIOUR and email sending — a SEPARATE column from `invoice_details`.
 *
 * This split is load-bearing, not tidiness: `private._invoice_bundle` returns
 * `invoice_details` wholesale and `get_invoice_by_token` is granted to `anon`, so every
 * key in that blob is readable by anyone holding a share link. Nothing here is.
 */
export interface InvoiceSettings {
  payment_terms_days?: number;   // default due date = issue date + this
  email_from?: string;           // a verified "send mail as" alias, e.g. invoices@…
  email_from_name?: string;
  email_reply_to?: string;
  email_bcc_self?: boolean;
  templates?: {
    invoice?: EmailTemplate;
    reminder?: EmailTemplate;
  };
}

export interface OrgSettings {
  timezone: string;
  currency: string;
  booking_params: {
    deposit_percent?: number;
    deposit_allowed?: boolean;
    hold_minutes?: number;
    min_lead_minutes?: number;
    buffer_minutes?: number;
    cash_allowed?: boolean;
    /** Days a card stays on the board after reaching a terminal stage (§25). Default 3. */
    work_archive_days?: number;
  };
  features?: { work_board?: boolean };
  invoice_details?: InvoiceDetails;
  invoice_settings?: InvoiceSettings;
}

// Org-admin CRUD over services / staff / assignments / org settings.
// RLS (is_org_admin) enforces that an admin only ever touches their own org.
@Injectable({ providedIn: 'root' })
export class BookingAdminService {
  private readonly auth = inject(BookingsAuthService);

  // ── Services ──────────────────────────────────────────────────────
  // ── Work blocks: reserved post-production time ───────────────────────────
  // These are rows in `booking_slots` with work_item_id set. That is deliberate — the
  // no-overlap EXCLUDE constraint lives on that table, so reserved editing time really
  // does stop a shoot being booked over it. A separate table could not do that.

  /** A work item's reserved time blocks, earliest first. */
  async getWorkSlots(workItemId: string): Promise<BookingSlot[]> {
    const { data } = await bookingsDb
      .from('booking_slots')
      .select('start_at, end_at, label')
      .eq('work_item_id', workItemId).is('deleted_at', null).order('start_at');
    return (data ?? []).map(r => {
      const x = r as { start_at: string; end_at: string; label: string | null };
      return { start: x.start_at, end: x.end_at, label: x.label };
    });
  }

  /**
   * Replace a work item's blocks. Returns the ones that could NOT be reserved because
   * that time is already taken — the caller must say so rather than quietly dropping
   * them, since the whole point is knowing what is actually free.
   */
  async setWorkSlots(orgId: string, workItemId: string, staffId: string, slots: BookingSlot[]):
      Promise<{ clashes: BookingSlot[]; orphanEventIds: string[] }> {
    const { data: existing } = await bookingsDb
      .from('booking_slots').select('id, google_event_id')
      .eq('work_item_id', workItemId).is('deleted_at', null);
    const orphanEventIds = ((existing ?? []) as { google_event_id: string | null }[])
      .map(r => r.google_event_id).filter((x): x is string => !!x);

    // Hard delete, not soft: a block is a reservation, not a record worth auditing, and
    // a soft-deleted row would keep failing the unique-ish overlap checks on re-add.
    await bookingsDb.from('booking_slots').delete().eq('work_item_id', workItemId);

    // One at a time inside its own request: the EXCLUDE constraint aborts the whole
    // statement on the first clash, which would lose every other block the owner picked.
    const clashes: BookingSlot[] = [];
    for (const s of slots) {
      const { error } = await bookingsDb.from('booking_slots').insert({
        org_id: orgId, work_item_id: workItemId, staff_id: staffId,
        start_at: s.start, end_at: s.end, label: s.label ?? null,
      });
      if (error) {
        if ((error as { code?: string }).code === '23P01') clashes.push(s);
        else { console.error('[BookingAdmin] setWorkSlots:', error); clashes.push(s); }
      }
    }
    return { clashes, orphanEventIds };
  }

  /** Push the work item's blocks to Google Calendar (fire and forget, like bookings). */
  syncWorkEvent(workItemId: string, deleteEventIds?: string[]): void {
    void bookingsDb.functions.invoke('sync-work-event', { body: { workItemId, deleteEventIds } })
      .then(({ error }) => { if (error) console.warn('[BookingAdmin] work calendar sync failed:', error.message); });
  }

  /** Bookings this work item covers (many-to-many). */
  async getWorkBookings(workItemId: string): Promise<string[]> {
    const { data } = await bookingsDb
      .from('work_item_bookings').select('booking_id').eq('work_item_id', workItemId);
    return ((data ?? []) as { booking_id: string }[]).map(r => r.booking_id);
  }

  /** Replace the set of jobs this work covers. Links are re-creatable, so hard writes. */
  async setWorkBookings(orgId: string, workItemId: string, bookingIds: string[]): Promise<void> {
    await bookingsDb.from('work_item_bookings').delete().eq('work_item_id', workItemId);
    if (!bookingIds.length) return;
    const { error } = await bookingsDb.from('work_item_bookings').insert(
      bookingIds.map(booking_id => ({ org_id: orgId, work_item_id: workItemId, booking_id })));
    if (error) console.error('[BookingAdmin] setWorkBookings:', error);
  }

  async listServices(orgId: string): Promise<AdminService[]> {
    const staff = this.auth.staffId();
    if (!staff) {
      const { data } = await bookingsDb.from('services').select('*').eq('org_id', orgId).order('name');
      return (data ?? []) as AdminService[];
    }
    // `staff_services` already records who offers what, so a worker scope just surfaces
    // what the schema has always said rather than inventing a new rule.
    const { data } = await bookingsDb
      .from('services')
      .select('*, staff_services!inner(staff_id)')
      .eq('org_id', orgId)
      .eq('staff_services.staff_id', staff)
      .order('name');
    return (data ?? []) as AdminService[];
  }
  async saveService(orgId: string, s: Partial<AdminService>): Promise<void> {
    const row = {
      org_id: orgId, name: s.name, description: s.description ?? null,
      pricing: s.pricing, min_hours: s.min_hours, max_hours: s.max_hours,
      is_active: s.is_active ?? true, task_template: s.task_template ?? [],
    };
    if (s.id) await bookingsDb.from('services').update(row).eq('id', s.id);
    else await bookingsDb.from('services').insert(row);
  }
  async deleteService(id: string): Promise<void> {
    // Soft delete via RPC — RLS hides it from every read; the row (and its history) is kept.
    await bookingsDb.rpc('soft_delete', { p_table: 'services', p_id: id });
  }

  // ── Staff ─────────────────────────────────────────────────────────
  async listStaff(orgId: string): Promise<AdminStaff[]> {
    const { data } = await bookingsDb.from('staff').select('*').eq('org_id', orgId).order('name');
    return (data ?? []) as AdminStaff[];
  }
  async saveStaff(orgId: string, s: Partial<AdminStaff>): Promise<void> {
    const row = { org_id: orgId, name: s.name, email: s.email ?? null, is_bookable: s.is_bookable ?? true };
    if (s.id) await bookingsDb.from('staff').update(row).eq('id', s.id);
    else await bookingsDb.from('staff').insert(row);
  }
  async deleteStaff(id: string): Promise<void> {
    await bookingsDb.rpc('soft_delete', { p_table: 'staff', p_id: id });
  }

  // ── Staff ↔ Service assignment + schedule ─────────────────────────
  async listStaffServices(): Promise<StaffServiceRow[]> {
    // RLS already limits to the admin's org.
    const { data } = await bookingsDb.from('staff_services').select('staff_id, service_id, working_hours');
    return (data ?? []) as StaffServiceRow[];
  }
  async assignService(staffId: string, serviceId: string, workingHours: WorkingHoursConfig): Promise<void> {
    await bookingsDb.from('staff_services').upsert({ staff_id: staffId, service_id: serviceId, working_hours: workingHours });
  }
  async unassignService(staffId: string, serviceId: string): Promise<void> {
    await bookingsDb.from('staff_services').delete().eq('staff_id', staffId).eq('service_id', serviceId);
  }

  // ── Org settings ──────────────────────────────────────────────────
  async getOrgSettings(orgId: string): Promise<OrgSettings | null> {
    const { data } = await bookingsDb.from('organizations').select('timezone, currency, booking_params, features, invoice_details, invoice_settings').eq('id', orgId).maybeSingle();
    return (data as OrgSettings) ?? null;
  }

  // ── Work board (production) ───────────────────────────────────────
  /** All cards (active + backlog) from the work_board view — names/is_active resolved server-side. */
  /** The `work_board` columns a WorkJob needs. One constant, because two call sites read
   *  this view and a column added to only one of them is a field that is silently null. */
  private static readonly WORK_BOARD_COLS =
    'id, title, production_status, booking_id, booking_start_at, booking_end_at, is_active,'
    + ' assignee_id, assignee_name, due_at, client_name, service_name, description,'
    + ' work_type, work_type_label, stage_label, stage_is_done, done_at, is_archived';

  private mapWorkJob(w: Record<string, unknown>): WorkJob {
    return {
      id: w['id'] as string, bookingId: (w['booking_id'] as string | null) ?? null,
      title: w['title'] as string,
      start_at: (w['booking_start_at'] as string | null) ?? null,
      bookingEndAt: (w['booking_end_at'] as string | null) ?? null,
      production_status: w['production_status'] as ProductionStage,
      isActive: !!w['is_active'],
      assigneeId: (w['assignee_id'] as string | null) ?? null,
      assigneeName: (w['assignee_name'] as string | null) ?? null,
      dueAt: (w['due_at'] as string | null) ?? null,
      clientName: (w['client_name'] as string | null) ?? null,
      serviceName: (w['service_name'] as string | null) ?? null,
      description: (w['description'] as string | null) ?? null,
      workType: (w['work_type'] as string | null) ?? null,
      workTypeLabel: (w['work_type_label'] as string | null) ?? null,
      stageLabel: (w['stage_label'] as string | null) ?? null,
      stageIsDone: !!w['stage_is_done'],
      doneAt: (w['done_at'] as string | null) ?? null,
      isArchived: !!w['is_archived'],
    };
  }

  async loadJobs(orgId: string): Promise<WorkJob[]> {
    const staff = this.auth.staffId();
    let q = bookingsDb.from('work_board')
      .select(BookingAdminService.WORK_BOARD_COLS)
      .eq('org_id', orgId);
    // Assigned to this worker, OR unassigned — an unassigned card belongs to nobody and
    // would otherwise vanish from every view, which is how work gets forgotten.
    if (staff) q = q.or(`assignee_id.eq.${staff},assignee_id.is.null`);
    const { data } = await q.order('sort').order('created_at');
    return ((data ?? []) as unknown as Array<Record<string, unknown>>).map(w => this.mapWorkJob(w));
  }
  /** Pull a backlog card onto the board (or push one back). */
  async activateCard(id: string): Promise<void> {
    await bookingsDb.from('work_items').update({ activated_at: new Date().toISOString() }).eq('id', id);
  }
  async backlogCard(id: string): Promise<void> {
    await bookingsDb.from('work_items').update({ activated_at: null }).eq('id', id);
  }
  /** Assign a card to a staff member (or clear it). */
  async assignCard(id: string, staffId: string | null): Promise<void> {
    await bookingsDb.from('work_items').update({ assignee_id: staffId }).eq('id', id);
  }
  /** Set / clear a card's deliver-by date (yyyy-MM-dd or null). */
  async setDue(id: string, dueAt: string | null): Promise<void> {
    await bookingsDb.from('work_items').update({ due_at: dueAt }).eq('id', id);
  }
  /** Bookings the admin can attach a new work card to (most recent first). */
  async loadJobOptions(orgId: string): Promise<JobOption[]> {
    const { data } = await bookingsDb.from('booking_summary')
      .select('id, title, start_at, client_name').eq('org_id', orgId)
      .order('start_at', { ascending: false }).limit(100);
    return ((data ?? []) as Array<Record<string, unknown>>).map(b => ({
      id: b['id'] as string, title: b['title'] as string,
      start_at: b['start_at'] as string, clientName: (b['client_name'] as string | null) ?? null,
    }));
  }
  /** Create a work card — standalone (bookingId null) or linked to a booking (seeds its service tasks). */
  /** Returns the new card's id — the work editor needs it to attach slots and links. */
  async addWorkItem(orgId: string, bookingId: string | null, title: string): Promise<string | null> {
    const { data, error } = await bookingsDb.rpc('create_work_item',
      { p_org: orgId, p_booking: bookingId, p_title: title });
    if (error) { console.error('[BookingAdmin] addWorkItem:', error); return null; }
    const row = Array.isArray(data) ? data[0] : data;
    return (typeof row === 'string' ? row : (row as { id?: string } | null)?.id) ?? null;
  }

  /** Patch a card's own fields. Only the keys passed are written, so a caller that knows
   *  about the title can never blank a description it has never heard of. */
  async updateWorkItem(
    id: string,
    patch: { title?: string; description?: string | null; work_type?: string | null },
  ): Promise<void> {
    if (Object.keys(patch).length === 0) return;
    const { error } = await bookingsDb.from('work_items').update(patch).eq('id', id);
    if (error) console.error('[BookingAdmin] updateWorkItem:', error);
  }

  /** The kinds of work this org does (§25). */
  async listWorkTypes(orgId: string): Promise<WorkType[]> {
    const { data, error } = await bookingsDb.from('work_types')
      .select('id, key, label, sort').eq('org_id', orgId).order('sort');
    if (error) { console.error('[BookingAdmin] listWorkTypes:', error); return []; }
    return (data ?? []) as WorkType[];
  }

  /** Add or rename a type. New ones get a slug key derived from the label, uniquified
   *  against existing keys so re-adding a deleted name can't collide with it. */
  async saveWorkType(orgId: string, wt: Partial<WorkType> & { label: string }): Promise<{ error?: string }> {
    const label = wt.label.trim();
    if (wt.id) {
      const { error } = await bookingsDb.from('work_types').update({ label }).eq('id', wt.id);
      return error ? { error: error.message } : {};
    }
    const base = label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') || 'type';
    const existing = await this.listWorkTypes(orgId);
    let key = base, n = 2;
    while (existing.some(e => e.key === key)) key = `${base}_${n++}`;
    const sort = existing.length ? Math.max(...existing.map(e => e.sort)) + 1 : 1;
    const { error } = await bookingsDb.from('work_types')
      .insert({ org_id: orgId, key, label, sort });
    return error ? { error: error.message } : {};
  }
  async reorderWorkTypes(ids: string[]): Promise<void> {
    await Promise.all(ids.map((id, i) =>
      bookingsDb.from('work_types').update({ sort: i + 1 }).eq('id', id)));
  }
  /** Soft-deletes the type AND clears it off the cards that used it, in one transaction —
   *  `work_type` holds a KEY with no FK, so a half-done delete leaves a dead reference. */
  async deleteWorkType(typeId: string): Promise<{ ok: boolean; cleared?: number; error?: string }> {
    const { data, error } = await bookingsDb.rpc('delete_work_type', { p_type: typeId });
    if (error) return { ok: false, error: error.message };
    return (data ?? { ok: false }) as { ok: boolean; cleared?: number; error?: string };
  }

  /**
   * Move a card to a board column. 'backlog' is not a stage — it is the absence of
   * `activated_at` — so the two cases are different writes. Lives here rather than in the
   * board component because the work editor's Status field performs the same move.
   */
  async moveWorkCard(
    id: string, target: string, bookingId: string | null, isActive: boolean,
  ): Promise<void> {
    if (target === 'backlog') { await this.backlogCard(id); return; }
    if (!isActive) await this.activateCard(id);
    await this.setStage(id, target, bookingId);
  }

  /**
   * The Work-board card for a booking, or null if it has none.
   * Lets the booking-detail page offer "add to the Work board" AFTER creation — until now
   * `needs_production` could only be chosen on the booking form, so a job you didn't flag
   * up front could never be put on the board.
   */
  async workItemForBooking(bookingId: string): Promise<WorkJob | null> {
    const { data } = await bookingsDb.from('work_board')
      .select(BookingAdminService.WORK_BOARD_COLS)
      .eq('booking_id', bookingId)
      .order('created_at', { ascending: true })
      .limit(1)
      .maybeSingle();
    if (!data) return null;
    return this.mapWorkJob(data as unknown as Record<string, unknown>);
  }
  /** Remove a card from the board (soft delete via RPC). Never touches the booking — only
   *  unflags it. The work_items → tasks cascade trigger hides its checklist automatically. */
  async deleteWorkItem(id: string, bookingId: string | null): Promise<void> {
    // Collect the calendar events FIRST: once the item is soft-deleted, ensureWorkEvent
    // refuses to look at it and the events would sit in the calendar forever, claiming
    // time that is no longer reserved — the worst possible failure for this feature.
    const { data: slots } = await bookingsDb
      .from('booking_slots').select('google_event_id')
      .eq('work_item_id', id).is('deleted_at', null);
    const eventIds = ((slots ?? []) as { google_event_id: string | null }[])
      .map(r => r.google_event_id).filter((x): x is string => !!x);

    await bookingsDb.rpc('soft_delete', { p_table: 'work_items', p_id: id });
    // Free the reserved time immediately. A soft-deleted work item keeps its slots
    // blocking otherwise, because the EXCLUDE only ignores a deleted SLOT.
    await bookingsDb.from('booking_slots').delete().eq('work_item_id', id);
    if (eventIds.length) this.syncWorkEvent(id, eventIds);
    if (bookingId) await bookingsDb.from('bookings').update({ needs_production: false }).eq('id', bookingId);
  }
  // ── Board stages (the columns) ───────────────────────────────────────────
  async listWorkStages(orgId: string): Promise<WorkStage[]> {
    const { data, error } = await bookingsDb.from('work_stages')
      .select('id, key, label, sort, is_done, color_id')
      .eq('org_id', orgId).order('sort');
    if (error) { console.error('[BookingAdmin] listWorkStages:', error); return []; }
    return (data ?? []) as WorkStage[];
  }

  /** Create or rename a stage. The KEY is generated once and never changes — renaming a
   *  label must not orphan every card sitting in that column. */
  async saveWorkStage(orgId: string, st: Partial<WorkStage> & { label: string }): Promise<{ error?: string }> {
    if (st.id) {
      const { error } = await bookingsDb.from('work_stages')
        .update({ label: st.label.trim(), is_done: st.is_done ?? false, color_id: st.color_id ?? null })
        .eq('id', st.id);
      return error ? { error: error.message } : {};
    }
    const base = st.label.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') || 'stage';
    const existing = await this.listWorkStages(orgId);
    // A re-added stage with the same name must not collide with the soft-deleted one.
    let key = base, n = 2;
    while (existing.some(e => e.key === key)) key = `${base}_${n++}`;
    const sort = existing.length ? Math.max(...existing.map(e => e.sort)) + 1 : 1;
    const { error } = await bookingsDb.from('work_stages').insert({
      org_id: orgId, key, label: st.label.trim(), sort,
      is_done: st.is_done ?? false, color_id: st.color_id ?? null,
    });
    return error ? { error: error.message } : {};
  }

  async reorderWorkStages(ids: string[]): Promise<void> {
    await Promise.all(ids.map((id, i) =>
      bookingsDb.from('work_stages').update({ sort: i + 1 }).eq('id', id)));
  }

  /** Delete a stage, moving its cards to another. Server-side so the move and the delete
   *  cannot half-happen and leave cards pointing at a stage that is gone. */
  async deleteWorkStage(stageId: string, moveToId: string): Promise<{ ok: boolean; moved?: number; error?: string }> {
    const { data, error } = await bookingsDb.rpc('delete_work_stage',
      { p_stage: stageId, p_move_to: moveToId });
    if (error) return { ok: false, error: error.message };
    const r = (data ?? {}) as { ok?: boolean; moved?: number; error?: string };
    return { ok: !!r.ok, moved: r.moved, error: r.error };
  }

  async loadTasks(orgId: string): Promise<TaskRow[]> {
    const { data } = await bookingsDb.from('tasks').select('id, work_item_id, title, is_done, due_at')
      .eq('org_id', orgId).order('sort').order('created_at');
    return (data ?? []) as TaskRow[];
  }
  async toggleTask(id: string, done: boolean): Promise<void> {
    await bookingsDb.from('tasks').update({ is_done: done, done_at: done ? new Date().toISOString() : null }).eq('id', id);
  }
  async addTask(orgId: string, workItemId: string, title: string): Promise<void> {
    await bookingsDb.from('tasks').insert({ org_id: orgId, work_item_id: workItemId, title });
  }
  async removeTask(id: string): Promise<void> { await bookingsDb.rpc('soft_delete', { p_table: 'tasks', p_id: id }); }
  async setStage(workItemId: string, stage: ProductionStage, bookingId: string | null = null): Promise<void> {
    await bookingsDb.from('work_items').update({ production_status: stage }).eq('id', workItemId);
    // For a booking-linked card, mirror progress to the booking + its Google Calendar event.
    if (bookingId) {
      await bookingsDb.from('bookings').update({ production_status: stage }).eq('id', bookingId);
      void bookingsDb.functions.invoke('sync-booking-event', { body: { bookingId } })
        .then(({ error }) => { if (error) console.warn('[BookingAdmin] calendar sync failed:', error.message); });
    }
  }
  async updateOrgSettings(orgId: string, patch: Partial<OrgSettings>): Promise<void> {
    await bookingsDb.from('organizations').update(patch).eq('id', orgId);
  }

  // ── Integrations ──────────────────────────────────────────────────
  async checkIntegrations(): Promise<{ stripe?: { ok: boolean; detail: string }; google?: { ok: boolean; detail: string }; error?: string }> {
    const { data, error } = await bookingsDb.functions.invoke('check-integrations');
    if (error) return { error: error.message };
    return data as { stripe: { ok: boolean; detail: string }; google: { ok: boolean; detail: string } };
  }

  // ── Stripe Connect (per-org payouts) ──────────────────────────────
  /** Start (or resume) Stripe Connect onboarding; returns the hosted onboarding URL. */
  async connectStripeStart(orgId: string): Promise<{ url?: string; error?: string }> {
    const { data, error } = await bookingsDb.functions.invoke('connect-stripe-start', { body: { orgId } });
    if (error) return { error: error.message };
    return data as { url?: string; error?: string };
  }

  /** Read the org's Connect status (re-checks Stripe + caches the result). */
  async connectStripeStatus(orgId: string): Promise<ConnectStatus> {
    const { data, error } = await bookingsDb.functions.invoke('connect-stripe-status', { body: { orgId } });
    if (error) return { connected: false, chargesEnabled: false, detailsSubmitted: false, error: error.message };
    return data as ConnectStatus;
  }

  // ── Google / Gmail (per-org sending) ──────────────────────────────
  /** Start the Google consent flow; returns the URL to redirect the browser to. */
  async connectGoogleStart(orgId: string): Promise<{ url?: string; error?: string }> {
    const { data, error } = await bookingsDb.functions.invoke('connect-google-start', { body: { orgId } });
    if (error) return { error: error.message };
    return data as { url?: string; error?: string };
  }

  /**
   * Revoke at Google and forget the credential.
   * An Edge Function rather than an RPC because Postgres cannot call Google's revoke
   * endpoint — dropping the row alone would leave a token live on Google's side.
   */
  async disconnectGoogle(orgId: string): Promise<void> {
    const { error } = await bookingsDb.functions.invoke('disconnect-google', { body: { orgId } });
    if (error) throw new Error(error.message);
  }

  // ── Organizations & members (platform-admin gated where required) ──
  /** Create a new organization (platform admin only). Returns the new org id. */
  async createOrg(name: string, slug: string, timezone: string, currency: string): Promise<{ id?: string; error?: string }> {
    const { data, error } = await bookingsDb.rpc('create_org', { p_name: name, p_slug: slug, p_timezone: timezone, p_currency: currency });
    if (error) return { error: error.message };
    return { id: data as string };
  }

  async listMembers(orgId: string): Promise<OrgMember[]> {
    const { data } = await bookingsDb.rpc('list_org_members', { p_org: orgId });
    return (data ?? []) as OrgMember[];
  }

  /** Add/update a member by email. 'no_user' = they must sign in once first. */
  async addMember(orgId: string, email: string, role: string): Promise<'ok' | 'no_user' | 'error'> {
    const { data, error } = await bookingsDb.rpc('add_org_member', { p_org: orgId, p_email: email, p_role: role });
    if (error) return 'error';
    return (data as 'ok' | 'no_user') ?? 'error';
  }

  async removeMember(orgId: string, userId: string): Promise<{ ok?: boolean; error?: string }> {
    const { error } = await bookingsDb.rpc('remove_org_member', { p_org: orgId, p_user: userId });
    if (error) return { error: error.message };
    return { ok: true };
  }
}

export interface OrgMember { user_id: string; email: string; role: string; }

export interface ConnectStatus {
  connected: boolean;
  chargesEnabled: boolean;
  detailsSubmitted: boolean;
  accountId?: string;
  error?: string;
}
