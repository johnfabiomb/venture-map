import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { ensureWorkEvent } from '../_shared/booking-event.ts';
import { deleteCalendarEvent } from '../_shared/google-calendar.ts';
import { deleteEventFromAny } from '../_shared/google-targets.ts';

// Admin-only. Pushes a work item's reserved time blocks to Google Calendar, so
// post-production shows up beside the shoots rather than living only in the app.
// Mirrors sync-booking-event exactly, including its authorization.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
};
const json = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: corsHeaders });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'auth required' }, 401);
    const { workItemId, deleteEventIds } = await req.json() as { workItemId: string; deleteEventIds?: string[] };
    if (!workItemId) return json({ error: 'workItemId required' }, 400);

    const url = Deno.env.get('SUPABASE_URL')!;
    const service = createClient(url, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
    const userClient = createClient(url, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return json({ error: 'not signed in' }, 401);

    const { data: item } = await service.from('work_items')
      .select('org_id, assignee_id').eq('id', workItemId).maybeSingle();
    if (!item) return json({ error: 'not_found' });

    const { data: member } = await service.from('org_members')
      .select('role').eq('org_id', item.org_id).eq('user_id', user.id).maybeSingle();
    if (!member || !['owner', 'admin'].includes(member.role)) return json({ error: 'forbidden' }, 403);

    // Blocks that were moved or removed leave their events behind otherwise.
    // Both calendars, for the same reason as a booking's — see sync-booking-event.
    for (const eid of (deleteEventIds ?? [])) {
      if (!eid) continue;
      try {
        await deleteEventFromAny(service, item.org_id, item.assignee_id ?? null, eid, deleteCalendarEvent);
      } catch (e) { console.error('orphan work event delete failed:', (e as Error).message); }
    }
    const eventId = await ensureWorkEvent(service, workItemId);
    return json({ ok: true, event_id: eventId });
  } catch (err) {
    return json({ error: (err as Error).message }, 500);
  }
});
