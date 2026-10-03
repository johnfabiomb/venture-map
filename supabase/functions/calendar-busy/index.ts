import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders as _cors } from '../_shared/cors.ts';
import { listBusyEvents } from '../_shared/google-calendar.ts';

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

    const { from, to } = await req.json() as { from?: string; to?: string };
    if (!from || !to) return json({ error: 'from and to are required' }, 400);

    const service = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: { user }, error: authError } = await service.auth.getUser(authHeader.replace('Bearer ', ''));
    if (authError || !user) return json({ error: 'Unauthorized' }, 401);

    // Same gate as sync-calendar: owner/admin of the org that owns the shared calendar.
    // Event titles are personal ("Wife's Birthday"), so this is not public data.
    const calendarOrg = Deno.env.get('CALENDAR_ORG_ID');
    if (!calendarOrg) return json({ error: 'CALENDAR_ORG_ID not configured' }, 400);

    const { data: member } = await service
      .from('org_members').select('role').eq('org_id', calendarOrg).eq('user_id', user.id).maybeSingle();
    if (!member || !['owner', 'admin'].includes(member.role)) return json({ error: 'Forbidden' }, 403);

    return json({ events: await listBusyEvents(from, to) });
  } catch (err) {
    return json({ error: (err as Error).message }, 500);
  }
});
