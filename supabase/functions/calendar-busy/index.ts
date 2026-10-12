import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders as _cors } from '../_shared/cors.ts';
import { listBusyEvents } from '../_shared/google-calendar.ts';
import { availabilityCalendar } from '../_shared/google-targets.ts';

// Read-only live free/busy for a time range, for the admin availability picker.
//
// `sync-calendar` imports Google events into `bookings` so they block, but it only runs
// when someone presses the button — so between presses the picker cannot see anything
// created in Google and silently offers times that are already taken. This asks Google
// directly about the day being looked at. It writes nothing.
//
// The picker WARNS on what this returns rather than blocking: the owner is allowed to
// double-book deliberately. Public availability (get-availability) blocks on the same
// data, because a customer is not.

const corsHeaders = { ..._cors, 'Content-Type': 'application/json' };
const json = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: corsHeaders });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const { from, to, staffId } = await req.json() as { from?: string; to?: string; staffId?: string };
    if (!from || !to) return json({ error: 'from and to are required' }, 400);
    if (!staffId) return json({ error: 'staffId is required' }, 400);

    const service = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: { user }, error: authError } = await service.auth.getUser(authHeader.replace('Bearer ', ''));
    if (authError || !user) return json({ error: 'Unauthorized' }, 401);

    // Which worker's diary is being asked about. The gate is membership of THAT WORKER'S
    // org — it used to be the single calendar-owning org, which with per-worker calendars
    // (§28) would have let an admin of the shared-calendar org read any other org's
    // worker, and locked every other org out of its own.
    const { data: staff } = await service
      .from('staff').select('id, org_id').eq('id', staffId).is('deleted_at', null).maybeSingle();
    if (!staff) return json({ error: 'Unknown worker' }, 404);

    const { data: member } = await service
      .from('org_members').select('role').eq('org_id', staff.org_id).eq('user_id', user.id).maybeSingle();
    if (!member || !['owner', 'admin'].includes(member.role)) return json({ error: 'Forbidden' }, 403);

    // This worker's OWN calendar (or the legacy shared one, for the org that owns it).
    // Never the organisation's overview calendar: it holds everyone's jobs, so reading it
    // would report this worker busy whenever any colleague was.
    const target = await availabilityCalendar(service, staff.org_id, staffId);
    // `configured: false` is NOT the same as "free". The picker shows "couldn't check"
    // rather than painting the day as available, which is how a double booking happens.
    if (!target) return json({ events: [], configured: false });

    return json({ events: await listBusyEvents(from, to, target), configured: true });
  } catch (err) {
    return json({ error: (err as Error).message }, 500);
  }
});
