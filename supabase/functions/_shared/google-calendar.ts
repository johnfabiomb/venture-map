const OAUTH_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const CALENDAR_BASE = 'https://www.googleapis.com/calendar/v3';

/**
 * WHICH calendar an operation acts on, and with whose authority.
 *
 * Every function here takes this OPTIONAL and falls back to the legacy single-account env
 * credential when it is omitted — so adding per-worker calendars (§28) changed no existing
 * call site and could not alter the behaviour of the one calendar already in production.
 * Callers that care — the booking event writer, and anything reading availability — pass
 * one explicitly. See `_shared/google-targets.ts` for how they are resolved.
 */
export interface CalendarTarget {
  accessToken: string;
  /** A Google calendar id, or the literal 'primary'. */
  calendarId: string;
  /** Only for error messages, so a failure says WHOSE calendar failed. */
  label?: string;
}

/** Swap a refresh token for an access token. Exported so the per-worker and per-org
 *  credentials use exactly the same exchange as the legacy one. */
export async function exchangeRefreshToken(refreshToken: string): Promise<string> {
  const res = await fetch(OAUTH_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: Deno.env.get('GOOGLE_OAUTH_CLIENT_ID')!,
      client_secret: Deno.env.get('GOOGLE_OAUTH_CLIENT_SECRET')!,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(`OAuth token refresh failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function getAccessToken(): Promise<string> {
  return exchangeRefreshToken(Deno.env.get('GOOGLE_OAUTH_REFRESH_TOKEN')!);
}

/** The legacy single-account calendar, from the Edge Function env. */
export async function envCalendarTarget(): Promise<CalendarTarget> {
  return {
    accessToken: await getAccessToken(),
    calendarId: Deno.env.get('GOOGLE_CALENDAR_ID')!,
    label: 'shared calendar',
  };
}

/** Resolve an optional target to a concrete one. Omitted = the legacy env calendar. */
async function resolve(t?: CalendarTarget): Promise<{ token: string; calId: string }> {
  const target = t ?? await envCalendarTarget();
  return { token: target.accessToken, calId: encodeURIComponent(target.calendarId) };
}

export async function checkSlotAvailability(
  startAt: string,
  endAt: string,
  excludeEventId?: string,
  target?: CalendarTarget,
): Promise<boolean> {
  const { token, calId } = await resolve(target);
  const url = `${CALENDAR_BASE}/calendars/${calId}/events?timeMin=${encodeURIComponent(startAt)}&timeMax=${encodeURIComponent(endAt)}&singleEvents=true`;

  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const data = await res.json();
  const events: Array<{ id: string; status: string }> = data.items ?? [];

  const blocking = events.filter(e => e.status !== 'cancelled' && e.id !== excludeEventId);
  return blocking.length === 0;
}

export async function createCalendarEvent(params: {
  title: string;
  description?: string | null;
  location?: string | null;
  startAt: string;
  endAt: string;
  /** Appended in brackets. Omit/empty for work blocks, which have no booking ref —
   *  otherwise every work event title ends in a stray "[]". */
  bookingRef?: string;
  /** Google's own event colour, 1–11. Google has no arbitrary colours, so the stage
   *  stores this id directly and the calendar can never disagree with the board. */
  colorId?: string | null;
  /** Which calendar to create it on. Omitted = the legacy shared calendar. */
  target?: CalendarTarget;
}): Promise<string> {
  const { token, calId } = await resolve(params.target);

  const body = {
    summary: params.bookingRef ? `${params.title} [${params.bookingRef}]` : params.title,
    description: params.description ?? undefined,
    location: params.location ?? undefined,
    start: { dateTime: params.startAt },
    end: { dateTime: params.endAt },
    ...(params.colorId ? { colorId: params.colorId } : {}),
  };

  const res = await fetch(`${CALENDAR_BASE}/calendars/${calId}/events`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!data.id) throw new Error(`GCal event creation failed: ${JSON.stringify(data)}`);
  return data.id;
}

export async function updateCalendarEvent(
  eventId: string,
  fields: { summary?: string; description?: string; location?: string | null; startAt?: string; endAt?: string; colorId?: string | null },
  target?: CalendarTarget,
): Promise<void> {
  const { token, calId } = await resolve(target);
  // PATCH only the keys provided; nest start/end as Google expects.
  const body: Record<string, unknown> = {};
  if (fields.summary !== undefined) body.summary = fields.summary;
  if (fields.description !== undefined) body.description = fields.description;
  if (fields.location !== undefined) body.location = fields.location ?? undefined;
  if (fields.colorId) body.colorId = fields.colorId;
  if (fields.startAt) body.start = { dateTime: fields.startAt };
  if (fields.endAt) body.end = { dateTime: fields.endAt };
  const res = await fetch(`${CALENDAR_BASE}/calendars/${calId}/events/${eventId}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GCal update failed (${res.status}): ${await res.text()}`);
}

export async function deleteCalendarEvent(eventId: string, target?: CalendarTarget): Promise<void> {
  const { token, calId } = await resolve(target);
  const res = await fetch(`${CALENDAR_BASE}/calendars/${calId}/events/${eventId}`, {
    method: 'DELETE', headers: { Authorization: `Bearer ${token}` },
  });
  // 204 = deleted. 404/410 = the event is already gone — treat as success so the
  // caller can safely forget the id. Anything else is a real failure: throw so the
  // caller keeps the id and can retry instead of orphaning the event on the calendar.
  if (!res.ok && res.status !== 404 && res.status !== 410) {
    throw new Error(`GCal delete failed (${res.status}): ${await res.text()}`);
  }
}

/** One Google entry that actually occupies the owner's time. */
export interface GoogleBusyEvent {
  id: string;
  title: string;
  start: string;      // ISO instant, or YYYY-MM-DD when allDay
  end: string;
  allDay: boolean;
}

interface RawGoogleEvent {
  id?: string;
  status?: string;
  summary?: string;
  transparency?: string;
  eventType?: string;
  start?: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
  attendees?: Array<{ self?: boolean; responseStatus?: string }>;
}

/** Does this event really take the owner's time, or is it just sitting on the calendar? */
function occupiesTime(e: RawGoogleEvent): boolean {
  if (e.status === 'cancelled') return false;
  // "Show as Free" — the owner has explicitly said this does not block them.
  if (e.transparency === 'transparent') return false;
  // Google's pseudo-events. workingLocation spans the whole day, so without this every
  // day would come back fully busy.
  if (e.eventType === 'workingLocation' || e.eventType === 'focusTime') return false;
  // An invitation that was turned down is not a commitment.
  if (e.attendees?.some(a => a.self && a.responseStatus === 'declined')) return false;
  return true;
}

/**
 * Entries on the owner's calendar in [timeMin, timeMax) that occupy their time.
 *
 * Shared deliberately: the admin picker uses this to WARN (the owner may double-book
 * knowingly) and public availability uses it to BLOCK (a customer may not). Both must
 * agree on what "busy" means, or the two views contradict each other.
 */
export async function listBusyEvents(
  timeMin: string, timeMax: string, target?: CalendarTarget,
): Promise<GoogleBusyEvent[]> {
  const items = await listEvents(timeMin, timeMax, target) as RawGoogleEvent[];
  return items
    .filter(occupiesTime)
    .map(e => ({
      id: e.id ?? '',
      title: (e.summary ?? '(untitled)').trim(),
      allDay: !e.start?.dateTime,
      start: e.start?.dateTime ?? e.start?.date ?? '',
      end: e.end?.dateTime ?? e.end?.date ?? '',
    }))
    .filter(e => e.start && e.end);
}

export async function listEvents(
  timeMin: string, timeMax: string, target?: CalendarTarget,
): Promise<unknown[]> {
  const { token, calId } = await resolve(target);
  const url = `${CALENDAR_BASE}/calendars/${calId}/events?timeMin=${encodeURIComponent(timeMin)}&timeMax=${encodeURIComponent(timeMax)}&singleEvents=true&orderBy=startTime&maxResults=250`;

  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const data = await res.json();
  return data.items ?? [];
}
