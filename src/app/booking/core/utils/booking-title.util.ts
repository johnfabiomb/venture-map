/**
 * Suggest a booking title from what has already been typed.
 *
 * A title has TWO readers and that is what makes it hard to write: it is the summary on
 * the owner's Google Calendar at 6am ("what am I doing, where") and the heading the client
 * sees on their own link ("yes, that is my job"). A good one answers **what, and which
 * one** — enough to tell this job apart from the others.
 *
 * Which detail distinguishes it depends on the job, so the rule is not a fixed template:
 *   - there is a LOCATION  → "Drone Filming at Mercury Tower"
 *     The place is what separates four shoots for the same client; the client is already
 *     on the booking, so repeating it adds nothing.
 *   - otherwise a CLIENT   → "Drone Filming for RockMedia"
 *     Now the client is the distinguishing detail.
 *
 * Deliberately NO date or time. The booking carries its own dates in every view that
 * matters — on the calendar the date IS the position of the event — so putting it in the
 * title repeats it in three places and buys nothing. (One hand-written title did this and
 * is the hardest in the list to scan.)
 */

/** Charge descriptions that say nothing about the work. "Custom charge at Mercury Tower"
 *  is worse than no suggestion at all. */
const SAYS_NOTHING = new Set([
  'custom', 'custom charge', 'charge', 'charges', 'extra', 'extras', 'misc',
  'miscellaneous', 'other', 'fee', 'fees', 'service', 'services', 'work',
  'deposit', 'balance', 'payment', 'discount', 'adjustment', 'tbc', 'n/a',
]);

/** " — 2 hours", " - 1 hour", " (2h)" — the quantity, which the charge line already shows
 *  and which would date the title the moment the hours change. */
const QUANTITY_TAIL = /\s*[—–-]\s*\d+(\.\d+)?\s*(hours?|hrs?|h)\s*$|\s*\(\s*\d+(\.\d+)?\s*h\s*\)\s*$/i;

/** Company suffixes. Accurate but not informative, and they make a title read like a
 *  database row rather than a job. */
const LEGAL_TAIL = /\s*[,.]?\s*\b(ltd|ltd\.|limited|plc|llc|inc|inc\.)\s*$/i;

const tidy = (v: string | null | undefined): string => (v ?? '').replace(/\s+/g, ' ').trim();

/** The work itself — "Drone Pilot Filming". Null when nothing meaningful was given. */
function cleanWork(raw: string | null | undefined): string | null {
  const v = tidy(raw).replace(QUANTITY_TAIL, '').trim();
  if (v.length < 3) return null;
  if (SAYS_NOTHING.has(v.toLowerCase())) return null;
  if (/^[\d\s.,€$£-]+$/.test(v)) return null;          // a bare amount is not a description
  return v;
}

/** The venue, not the postal address. Locations are typed as anything from "MICAS" to
 *  "AestheLab Clinic & Academy International, 27 D. Cachia, Iklin IKL 1271" — the part
 *  before the first comma is the bit a human would say out loud. */
function cleanPlace(raw: string | null | undefined): string | null {
  const v = tidy(raw).split(',')[0].trim();
  return v.length >= 2 ? v : null;
}

function cleanClient(raw: string | null | undefined): string | null {
  const v = tidy(raw).replace(LEGAL_TAIL, '').trim();
  return v.length >= 2 ? v : null;
}

const mentions = (haystack: string, needle: string): boolean =>
  haystack.toLowerCase().includes(needle.toLowerCase());

export interface TitleSource {
  /** The service name, or the first charge's description. */
  work?: string | null;
  location?: string | null;
  /** A saved client's name, or the one-off contact name — to a title they serve the same
   *  purpose, so they are treated identically. */
  client?: string | null;
}

/** '' when there is not enough to say anything useful — an empty box the owner fills is
 *  better than a confident guess that is wrong. */
export function suggestBookingTitle(src: TitleSource): string {
  const work = cleanWork(src.work);
  if (!work) return '';

  // When there IS a place it is the distinguishing detail, so the answer is settled here
  // either way. Returning early matters: falling through to the client as well produced
  // "Filming at Cafe Del Mar for Stephen Wellman", which is long and says the same thing
  // twice.
  const place = cleanPlace(src.location);
  if (place) return mentions(work, place) ? work : `${work} at ${place}`;

  const who = cleanClient(src.client);
  if (who && !mentions(work, who)) return `${work} for ${who}`;

  return work;
}
