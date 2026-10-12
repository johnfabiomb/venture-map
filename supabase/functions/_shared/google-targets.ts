import { SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { CalendarTarget, envCalendarTarget, exchangeRefreshToken } from './google-calendar.ts';

/**
 * WHICH calendars a booking touches, and which one may be read for availability.
 *
 * Two levels (§28), and the difference between them is the correctness of the feature:
 *
 *  - **The worker's own calendar** — their real diary. The ONLY calendar ever read for
 *    availability, and where their own jobs are written.
 *  - **The organisation's shared calendar** — an overview of everyone, each worker in
 *    their own colour. WRITE-ONLY.
 *
 * ⚠ Never read the shared calendar for availability. It holds every worker's jobs, so two
 * workers shooting at the same time appear on it as an overlap when they are not one.
 * Reading it would report the whole company busy whenever any one person was, and get
 * worse with every hire. Real double-booking is caught by `booking_slots_no_overlap`
 * (partitioned by staff_id) plus that single worker's own calendar.
 */

/** The legacy single-account calendar is only ever the calendar of ONE org. */
export function legacyCalendarAllowed(orgId: string): boolean {
  const calendarOrg = Deno.env.get('CALENDAR_ORG_ID');
  // No CALENDAR_ORG_ID set = no org claims the shared account. Fails CLOSED: writing
  // another tenant's bookings onto the platform owner's personal calendar is exactly the
  // class of mistake this guard exists for.
  return !!calendarOrg && orgId === calendarOrg;
}

async function fromCredentials(
  creds: { refresh_token?: string; calendar_id?: string; google_email?: string } | null,
  label: string,
): Promise<CalendarTarget | null> {
  if (!creds?.refresh_token) return null;
  return {
    accessToken: await exchangeRefreshToken(creds.refresh_token),
    calendarId: creds.calendar_id || 'primary',
    label: creds.google_email ? `${label} (${creds.google_email})` : label,
  };
}

/** A worker's OWN connected calendar, or null if they have not connected one. */
export async function workerCalendar(
  service: SupabaseClient, staffId: string | null,
): Promise<CalendarTarget | null> {
  if (!staffId) return null;
  const { data, error } = await service.rpc('staff_calendar_credentials', { p_staff: staffId });
  if (error) { console.warn('[calendars] staff_calendar_credentials:', error.message); return null; }
  return fromCredentials(data as never, 'worker calendar');
}

/** The org's shared overview calendar — null unless connected AND mirroring is on. */
export async function orgMirrorCalendar(
  service: SupabaseClient, orgId: string,
): Promise<CalendarTarget | null> {
  const { data, error } = await service.rpc('org_calendar_credentials', { p_org: orgId });
  if (error) { console.warn('[calendars] org_calendar_credentials:', error.message); return null; }
  return fromCredentials(data as never, 'organisation calendar');
}

export interface BookingCalendars {
  /** Where the event lives. Null = this booking gets no calendar event at all. */
  primary: CalendarTarget | null;
  /** An extra copy on the shared org calendar, or null. */
  mirror: CalendarTarget | null;
  /** True when `primary` is the worker's own connected calendar rather than the legacy one. */
  primaryIsWorker: boolean;
}

/**
 * Resolve both calendars for a booking.
 *
 * The mirror is only used when the worker has their OWN calendar. That rule prevents a
 * duplicate: the platform owner's org has a connected Google account whose primary
 * calendar IS the calendar the legacy env credential writes to, so mirroring a booking
 * that already went to the legacy calendar would put the same event there twice.
 */
export async function bookingCalendars(
  service: SupabaseClient, orgId: string, staffId: string | null,
): Promise<BookingCalendars> {
  const worker = await workerCalendar(service, staffId);
  if (worker) {
    return { primary: worker, mirror: await orgMirrorCalendar(service, orgId), primaryIsWorker: true };
  }
  const legacy = legacyCalendarAllowed(orgId) ? await envCalendarTarget() : null;
  return { primary: legacy, mirror: null, primaryIsWorker: false };
}

/**
 * The calendar to READ for one worker's availability.
 *
 * Their own if they have connected one, otherwise the legacy shared calendar — and only
 * when this org owns it. Never the org mirror; see the note at the top of this file.
 */
export async function availabilityCalendar(
  service: SupabaseClient, orgId: string, staffId: string | null,
): Promise<CalendarTarget | null> {
  const worker = await workerCalendar(service, staffId);
  if (worker) return worker;
  return legacyCalendarAllowed(orgId) ? await envCalendarTarget() : null;
}

/**
 * Delete an event id from whichever of a booking's calendars holds it.
 *
 * An event id exists on exactly ONE calendar, but the caller does not always know which
 * (an "orphaned block" id could have come from either), so both are tried. A miss is
 * harmless: deleteCalendarEvent treats 404/410 as success because the goal is "this event
 * is gone". What is NOT harmless is deleting against the wrong calendar and stopping —
 * that returns success while the real event stays on someone's diary forever, which is
 * exactly the bug per-worker calendars would otherwise have introduced.
 *
 * Returns true if at least one calendar reported it gone without an error.
 */
export async function deleteEventFromAny(
  service: SupabaseClient, orgId: string, staffId: string | null, eventId: string,
  deleteFn: (id: string, target?: CalendarTarget) => Promise<void>,
): Promise<boolean> {
  const cals = await bookingCalendars(service, orgId, staffId);
  const targets = [cals.primary, cals.mirror].filter((t): t is CalendarTarget => !!t);
  if (targets.length === 0) return false;
  let ok = false;
  for (const t of targets) {
    try { await deleteFn(eventId, t); ok = true; }
    catch (err) { console.warn(`[calendars] delete on ${t.label ?? 'calendar'} failed:`, (err as Error).message); }
  }
  return ok;
}

/** Note a failure against a worker's credential so a dead connection is visible in
 *  Settings rather than silently producing no events. Never throws. */
export async function noteWorkerCalendarError(
  service: SupabaseClient, staffId: string | null, err: unknown,
): Promise<void> {
  if (!staffId) return;
  const msg = (err as Error)?.message ?? String(err);
  await service.rpc('staff_calendar_note_error', { p_staff: staffId, p_error: msg.slice(0, 500) })
    .then(({ error }: { error: unknown }) => {
      if (error) console.warn('[calendars] could not record error:', error);
    });
}
