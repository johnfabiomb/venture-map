import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { ensureBookingEvent } from '../_shared/booking-event.ts';

// Public, token-gated. A client opens a booking link and chooses to settle in person
// (cash / Revolut / bank transfer) instead of paying by card.
//
// What that MEANS depends on who created the booking, and `created_by` already records it:
//
//   created_by = 'admin'  — the owner built this job and sent the link. They have already
//     agreed to it; the client accepting IS the confirmation. Book it and push the
//     calendar event now. Previously this also landed in "To confirm", so the owner had
//     to approve a job they had themselves created and the client had already accepted —
//     the booking just sat there and nothing reached the calendar.
//
//   created_by = 'client' — a self-service request from the public page. Nobody has
//     agreed to it yet, so it stays a REQUEST: held as 'pending' for the owner to approve.
//
// Already confirmed (paid, or pre-confirmed by the owner) → no-op either way.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
};
const json = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: corsHeaders });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
  try {
    const { token } = await req.json() as { token: string };
    if (!token) return json({ error: 'token required' }, 400);

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: link } = await supabase
      .from('booking_links')
      .select('is_active, expires_at, bookings(id, status, google_event_id, notes, allow_card, allow_inperson, created_by)')
      .eq('token', token)
      .single();

    if (!link?.is_active) return json({ error: 'invalid_link' });
    if (link.expires_at && new Date(link.expires_at) < new Date()) return json({ error: 'expired' });

    const b = link.bookings as unknown as {
      id: string; status: string; google_event_id: string | null; notes: string | null;
      allow_card: boolean; allow_inperson: boolean; created_by: string | null;
    };

    if (!b.allow_inperson) return json({ error: 'not_allowed' });
    if (b.status === 'cancelled' || b.status === 'expired') return json({ error: 'cancelled' });
    // Already confirmed (admin pre-confirmed, or paid → on the calendar) → nothing to request.
    const CONFIRMED = ['booked', 'in_progress', 'done'];
    if (CONFIRMED.includes(b.status) || b.google_event_id) return json({ ok: true, already: true, confirmed: true });

    const stamp = `Client agreed to pay in person (cash / Revolut / bank transfer). ${new Date().toISOString().slice(0, 10)}`;
    const notes = b.notes && b.notes.includes('Client agreed to pay in person')
      ? b.notes
      : (b.notes ? `${b.notes}\n${stamp}` : stamp);

    // The owner created this job, so their agreement is not in question — the client
    // accepting completes it.
    if (b.created_by === 'admin') {
      const { error: updErr } = await supabase.from('bookings')
        .update({ status: 'booked', hold_expires_at: null, notes })
        .eq('id', b.id).neq('status', 'booked');
      if (updErr) {
        // The worker's slot was taken in the meantime (btree_gist EXCLUDE). Fall back to a
        // request so the owner can re-time it, rather than failing in the client's face.
        if ((updErr as { code?: string }).code === '23P01') {
          await supabase.from('bookings').update({ status: 'pending', notes }).eq('id', b.id);
          return json({ ok: true, confirmed: false, requested: true, clash: true });
        }
        throw updErr;
      }
      // Never let a calendar hiccup fail the client's confirmation: the booking is made.
      try {
        await ensureBookingEvent(supabase, b.id);
      } catch (calErr) {
        console.error('GCal event creation failed after client confirm:', JSON.stringify(calErr));
      }
      return json({ ok: true, confirmed: true });
    }

    // Self-service request: hold it as 'pending' for the owner to approve. Idempotent —
    // a repeat click just refreshes the note.
    await supabase.from('bookings').update({ status: 'pending', notes }).eq('id', b.id);
    return json({ ok: true, confirmed: false, requested: true });
  } catch (err) {
    return json({ error: (err as Error).message }, 500);
  }
});
