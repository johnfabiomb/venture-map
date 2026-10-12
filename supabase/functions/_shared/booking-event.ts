import { createCalendarEvent, updateCalendarEvent, deleteCalendarEvent, CalendarTarget } from './google-calendar.ts';
import { bookingCalendars, noteWorkerCalendarError } from './google-targets.ts';

// Single source of truth for the Google Calendar event of a booking.
// Composes a human overview (payment status + work progress) and creates the event
// if missing or patches the description if it already exists. Called server-side from
// the payment webhook, the in-person confirmation, cash approval, and the admin
// "sync-booking-event" function so the calendar always mirrors the booking's state.

// deno-lint-ignore no-explicit-any
type SupabaseClient = any;

const PROGRESS_LABEL: Record<string, string> = {
  to_edit: 'To edit',
  editing: 'Editing',
  to_deliver: 'To deliver',
  delivered: 'Delivered ✓',
};

const BLOCKING_STATUSES = ['booked', 'in_progress', 'done'];

function pickName(v: unknown): string | null {
  const o = Array.isArray(v) ? v[0] : v;
  return (o as { name?: string } | null)?.name ?? null;
}

const euro = (n: number) => `€${(Math.round(n * 100) / 100).toFixed(2)}`;

interface SlotRow {
  id: string;
  start_at: string;
  end_at: string;
  /** "Pre-shoot planning", "Filming day" … — surfaced in the event title. */
  label: string | null;
  google_event_id: string | null;
  /** The copy on the organisation's shared overview calendar (§28), if any. */
  org_event_id: string | null;
}

interface BookingRow {
  id: string;
  booking_ref: string;
  title: string;
  description: string | null;
  location: string | null;
  start_at: string;
  end_at: string;
  price_total: number;
  status: string;
  production_status: string | null;
  google_event_id: string | null;
  notes: string | null;
  /** 'full' | 'minimal' — how much this event's description may disclose. */
  calendar_detail: string | null;
  client: unknown;
  service: unknown;
  payments: Array<{ amount: number; status: string; method: string; deleted_at: string | null }> | null;
  slots: SlotRow[] | null;
}

function composeDescription(b: BookingRow): string {
  // ── 'minimal' — safe to have other people in the event ────────────────────
  // A Google Calendar event has ONE description, and every attendee reads it. So the moment
  // a second shooter or the client is invited, whatever is here is theirs: the total, how
  // much has been paid, the production stage, and the owner's INTERNAL NOTES.
  // 'minimal' keeps what a collaborator actually needs to turn up and do the job, and drops
  // everything commercial. The booking ref stays LAST, exactly where it is at 'full'.
  if (b.calendar_detail === 'minimal') {
    const lines: string[] = [];
    if (b.description?.trim()) lines.push(b.description.trim(), '');
    const who = pickName(b.client);
    const svc = pickName(b.service);
    // Client and service are kept deliberately: without them the event is nearly useless to
    // whoever you invited. What is withheld is the money — total, payment state, progress —
    // and `notes`, which is the owner's private field and never belongs in a shared event.
    if (who) lines.push(`Client: ${who}`);
    if (svc) lines.push(`Service: ${svc}`);
    lines.push('', `Ref: ${b.booking_ref}`);
    return lines.join('\n');
  }

  // deleted_at is checked here because this runs as service_role, which bypasses the
  // `hide_deleted` policy — a removed payment would otherwise inflate the calendar line.
  const totalPaid = (b.payments ?? [])
    .filter(p => p.status === 'completed' && !p.deleted_at)
    .reduce((s, p) => s + Number(p.amount), 0);

  let payment: string;
  if (b.price_total > 0 && totalPaid >= b.price_total) {
    payment = `Paid in full (${euro(totalPaid)})`;
  } else if (totalPaid > 0) {
    payment = `Deposit paid ${euro(totalPaid)} — balance ${euro(b.price_total - totalPaid)}`;
  } else {
    payment = 'Awaiting payment';
  }

  const lines: string[] = [];
  // The admin's free-text work description leads; the auto summary follows.
  if (b.description?.trim()) lines.push(b.description.trim(), '');
  const client = pickName(b.client);
  const service = pickName(b.service);
  if (client) lines.push(`Client: ${client}`);
  if (service) lines.push(`Service: ${service}`);
  lines.push(`Total: ${euro(b.price_total)}`);
  lines.push(`Payment: ${payment}`);
  if (b.production_status) lines.push(`Progress: ${PROGRESS_LABEL[b.production_status] ?? b.production_status}`);
  if (b.notes) { lines.push('', b.notes); }
  lines.push('', `Ref: ${b.booking_ref}`);
  return lines.join('\n');
}

/**
 * Ensure the booking's calendar event exists and its description reflects current
 * payment + production state. Returns the event id (or null if the booking isn't in
 * a calendar-visible state). Swallows nothing — callers decide how to handle errors.
 */
export async function ensureBookingEvent(service: SupabaseClient, bookingId: string): Promise<string | null> {
  const { data } = await service.from('bookings')
    .select('id, org_id, staff_id, booking_ref, title, description, location, start_at, end_at, price_total, status, production_status, google_event_id, notes, calendar_detail, client:client_id(name), service:service_id(name), staffRow:staff_id(calendar_color_id), payments(amount, status, method, deleted_at), slots:booking_slots(id, start_at, end_at, label, google_event_id, org_event_id)')
    .eq('id', bookingId)
    .single();
  if (!data) return null;
  const b = data as BookingRow & {
    org_id: string; staff_id: string | null;
    staffRow?: { calendar_color_id: string | null } | Array<{ calendar_color_id: string | null }> | null;
  };

  // WHERE this booking's events go (§28): the assigned worker's own calendar when they
  // have connected one, otherwise the legacy shared calendar — and that only for the org
  // which owns it, so another tenant's jobs can never appear on the platform owner's
  // diary. `mirror` is the organisation-wide overview, used only alongside a worker's own
  // calendar (see bookingCalendars for why).
  const cals = await bookingCalendars(service, b.org_id, b.staff_id);
  if (!cals.primary) return null;   // no calendar configured for this org — DB only
  // The worker's own colour on the shared calendar, so an overview of five people is
  // readable at a glance. Not applied to their personal calendar: that is their diary and
  // their colour scheme, not ours.
  const sr = Array.isArray(b.staffRow) ? b.staffRow[0] : b.staffRow;
  const mirrorColor = sr?.calendar_color_id ?? null;

  // Only confirmed bookings live on the calendar. (Cancellation handles deletion.)
  if (!BLOCKING_STATUSES.includes(b.status)) return b.google_event_id ?? null;

  const description = composeDescription(b);

  // A booking is one or more time blocks (booking_slots) → one calendar event per block,
  // so a split day (e.g. 13:00–14:00 + 16:00–18:00) shows two events, not one long one.
  // Legacy bookings without slot rows fall back to the booking's own start/end envelope.
  const slots: SlotRow[] = (b.slots ?? []).slice().sort((x, y) => x.start_at.localeCompare(y.start_at));
  if (slots.length === 0) {
    slots.push({ id: 'envelope', start_at: b.start_at, end_at: b.end_at, label: null, google_event_id: b.google_event_id, org_event_id: null });
  }

  const eventIds: string[] = [];
  for (let i = 0; i < slots.length; i++) {
    const slot = slots[i];
    // A named block says what it IS ("Pre-shoot planning" / "Filming day"), which is the
    // whole point: a two-block job used to show as two identical entries distinguished only
    // by "(1/2)" and "(2/2)". The numbering stays as the fallback for unnamed blocks, and
    // the booking ref stays LAST in the title either way.
    const label = slot.label?.trim();
    const part = label
      ? ` — ${label}`
      : (slots.length > 1 ? ` (${i + 1}/${slots.length})` : '');
    const summary = `${b.title}${part} [${b.booking_ref}]`;

    // The worker's own (or legacy) calendar — the one that matters, so a failure here is
    // thrown to the caller.
    try {
      if (slot.google_event_id) {
        await updateCalendarEvent(slot.google_event_id, {
          summary, description, location: b.location, startAt: slot.start_at, endAt: slot.end_at,
        }, cals.primary);
        eventIds.push(slot.google_event_id);
      } else {
        const eventId = await createCalendarEvent({
          // No ref here — createCalendarEvent appends it from `bookingRef`, which is what
          // keeps it last in the title on the create path too.
          title: `${b.title}${part}`,
          description, location: b.location, startAt: slot.start_at, endAt: slot.end_at,
          bookingRef: b.booking_ref, target: cals.primary,
        });
        eventIds.push(eventId);
        if (slot.id !== 'envelope') {
          await service.from('booking_slots').update({ google_event_id: eventId }).eq('id', slot.id);
        }
      }
    } catch (err) {
      // Record WHOSE calendar failed before rethrowing, so Settings can show a dead
      // connection instead of the owner wondering why events stopped appearing.
      if (cals.primaryIsWorker) await noteWorkerCalendarError(service, b.staff_id, err);
      throw err;
    }

    // The shared overview. Best-effort on purpose: it is a convenience copy, and failing
    // the whole booking sync because a secondary calendar rejected a write would make the
    // overview MORE important than the worker's own diary, which is backwards.
    if (cals.mirror && slot.id !== 'envelope') {
      try {
        if (slot.org_event_id) {
          await updateCalendarEvent(slot.org_event_id, {
            summary, description, location: b.location,
            startAt: slot.start_at, endAt: slot.end_at, colorId: mirrorColor,
          }, cals.mirror);
        } else {
          const orgEventId = await createCalendarEvent({
            title: `${b.title}${part}`, description, location: b.location,
            startAt: slot.start_at, endAt: slot.end_at, bookingRef: b.booking_ref,
            colorId: mirrorColor, target: cals.mirror,
          });
          await service.from('booking_slots').update({ org_event_id: orgEventId }).eq('id', slot.id);
        }
      } catch (err) {
        console.warn('[calendar] org mirror write failed:', (err as Error).message);
      }
    }
  }

  // Keep booking.google_event_id pointing at the first block's event (cancel-booking and
  // legacy single-event callers rely on it).
  const primary = eventIds[0] ?? null;
  if (primary && primary !== b.google_event_id) {
    await service.from('bookings').update({ google_event_id: primary }).eq('id', bookingId);
  }
  return primary;
}

// ── Work blocks ─────────────────────────────────────────────────────────────
interface WorkSlotRow {
  id: string; start_at: string; end_at: string; label: string | null;
  google_event_id: string | null; org_event_id: string | null;
}

/**
 * Ensure a work item's reserved time is on the calendar — one event per block, exactly
 * like a booking's.
 *
 * Deliberately a sibling of ensureBookingEvent rather than a branch inside it: a work
 * item has no client, no money and no payment state, so sharing composeDescription would
 * mean threading nulls through every line of it. What they DO share is the slot table,
 * which is what makes the time genuinely reserved.
 */
export async function ensureWorkEvent(service: SupabaseClient, workItemId: string): Promise<string | null> {
  const { data } = await service.from('work_items')
    .select('id, org_id, assignee_id, title, description, work_type, production_status, due_at, deleted_at, assignee:assignee_id(calendar_color_id), slots:booking_slots(id, start_at, end_at, label, google_event_id, org_event_id), links:work_item_bookings(booking:booking_id(booking_ref, title))')
    .eq('id', workItemId)
    .maybeSingle();
  if (!data) return null;
  const w = data as unknown as {
    id: string; org_id: string; title: string; production_status: string;
    description: string | null; work_type: string | null; assignee_id: string | null;
    assignee?: { calendar_color_id: string | null } | Array<{ calendar_color_id: string | null }> | null;
    due_at: string | null; deleted_at: string | null;
    slots: WorkSlotRow[] | null;
    links: Array<{ booking: { booking_ref: string; title: string } | { booking_ref: string; title: string }[] | null }> | null;
  };
  if (w.deleted_at) return null;

  // The stage's own Google colour, so post-production is visibly distinct from a shoot
  // at a glance in the calendar. Falls back to Banana when a stage has none set.
  // The LABEL is read here too: stages are rows the owner renames (§24), so a hardcoded
  // map would show a raw key like `client_review` the moment a column was added.
  const { data: stage } = await service.from('work_stages')
    .select('label, color_id').eq('org_id', w.org_id).eq('key', w.production_status)
    .is('deleted_at', null).maybeSingle();
  const st = stage as { label: string; color_id: string | null } | null;
  const colorId = st?.color_id ?? '5';
  const stageLabel = st?.label ?? PROGRESS_LABEL[w.production_status] ?? w.production_status;

  // What kind of work this is — an edit, a grade, an export. Separate from the stage:
  // the stage says how far along it is, the type says what he is actually doing, and the
  // event used to show the stage under the word "Work", which read as the wrong thing.
  let typeLabel: string | null = null;
  if (w.work_type) {
    const { data: wt } = await service.from('work_types')
      .select('label').eq('org_id', w.org_id).eq('key', w.work_type)
      .is('deleted_at', null).maybeSingle();
    typeLabel = (wt as { label: string } | null)?.label ?? w.work_type;
  }

  // Same two-level resolution as a booking (§28): the assignee's own calendar if they
  // have connected one, else the legacy shared calendar for the org that owns it.
  const cals = await bookingCalendars(service, w.org_id, w.assignee_id);
  if (!cals.primary) return null;
  // On the worker's OWN calendar the colour says what KIND of work this is (the stage), so
  // editing is visibly different from a shoot. On the shared calendar it says WHO — five
  // people's post-production is only readable if each person has a colour. Two different
  // questions, so deliberately two different colours.
  const asg = Array.isArray(w.assignee) ? w.assignee[0] : w.assignee;
  const mirrorColor = asg?.calendar_color_id ?? colorId;

  const slots = (w.slots ?? []).slice().sort((a, b) => a.start_at.localeCompare(b.start_at));
  if (slots.length === 0) return null;   // no reserved time → nothing to show

  // Which jobs this work is for. The refs are what let him match the block back to the
  // shoot at a glance, which is the entire reason for the many-to-many.
  const jobs = (w.links ?? [])
    .map(l => (Array.isArray(l.booking) ? l.booking[0] : l.booking))
    .filter((b): b is { booking_ref: string; title: string } => !!b);

  const lines = [`Work: ${typeLabel ?? stageLabel}`];
  if (typeLabel) lines.push(`Stage: ${stageLabel}`);
  // The brief, verbatim. It is the reason to open the event on the phone at all.
  if (w.description?.trim()) lines.push('', w.description.trim());
  if (jobs.length) {
    lines.push('', 'For:');
    for (const j of jobs) lines.push(`• ${j.title} [${j.booking_ref}]`);
  }
  if (w.due_at) lines.push('', `Deliver by: ${new Date(w.due_at).toISOString().slice(0, 10)}`);
  // No money, no client contact: this is the owner's own time, and the event may be
  // shared with a second shooter the same way a booking's can.
  const description = lines.join('\n');

  const ids: string[] = [];
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i];
    const label = s.label?.trim();
    const part = label ? ` — ${label}` : (slots.length > 1 ? ` (${i + 1}/${slots.length})` : '');
    const summary = `${w.title}${part}`;
    try {
      if (s.google_event_id) {
        await updateCalendarEvent(s.google_event_id, {
          summary, description, location: null, startAt: s.start_at, endAt: s.end_at, colorId,
        }, cals.primary);
        ids.push(s.google_event_id);
      } else {
        const eventId = await createCalendarEvent({
          title: `${w.title}${part}`, description, location: null, colorId,
          startAt: s.start_at, endAt: s.end_at,
          // Work has no booking ref; the helper appends this in brackets, and a blank one
          // would leave a stray "[]" on every event title.
          bookingRef: '', target: cals.primary,
        });
        ids.push(eventId);
        await service.from('booking_slots').update({ google_event_id: eventId }).eq('id', s.id);
      }
    } catch (err) {
      if (cals.primaryIsWorker) await noteWorkerCalendarError(service, w.assignee_id, err);
      throw err;
    }

    // Shared overview, best-effort — same reasoning as a booking's.
    if (cals.mirror) {
      try {
        if (s.org_event_id) {
          await updateCalendarEvent(s.org_event_id, {
            summary, description, location: null,
            startAt: s.start_at, endAt: s.end_at, colorId: mirrorColor,
          }, cals.mirror);
        } else {
          const orgEventId = await createCalendarEvent({
            title: `${w.title}${part}`, description, location: null, colorId: mirrorColor,
            startAt: s.start_at, endAt: s.end_at, bookingRef: '', target: cals.mirror,
          });
          await service.from('booking_slots').update({ org_event_id: orgEventId }).eq('id', s.id);
        }
      } catch (err) {
        console.warn('[calendar] org mirror write failed (work):', (err as Error).message);
      }
    }
  }
  return ids[0] ?? null;
}
