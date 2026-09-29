import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders as _cors } from '../_shared/cors.ts';

// Org owner/admin reads their org's Gmail-send connection status, for the Settings page.
// Shape mirrors connect-stripe-status. One deliberate difference: google_connection_status
// is GRANTed to `authenticated` and does its OWN org-admin check internally (unlike the
// Stripe columns on `organizations`, which are plain columns we read via service_role only
// after checking org_members ourselves) — so it is called through the CALLER-SCOPED client
// (JWT forwarded), not the service-role client. Calling it as service_role would make
// auth.uid() resolve to NULL inside the function, and its own admin check would then
// (incorrectly) deny a caller this function has already confirmed is a real admin.

const corsHeaders = { ..._cors, 'Content-Type': 'application/json' };
const json = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: corsHeaders });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'auth required' }, 401);
    const { orgId } = await req.json() as { orgId: string };
    if (!orgId) return json({ error: 'orgId required' }, 400);

    const url = Deno.env.get('SUPABASE_URL')!;
    const service = createClient(url, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
    const userClient = createClient(url, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return json({ error: 'not signed in' }, 401);

    // Fail fast with the same shape as every other admin-gated function in this codebase,
    // before spending a round-trip on the RPC below.
    const { data: member } = await service.from('org_members')
      .select('role').eq('org_id', orgId).eq('user_id', user.id).maybeSingle();
    if (!member || !['owner', 'admin'].includes(member.role)) return json({ error: 'forbidden' }, 403);

    const { data, error } = await userClient.rpc('google_connection_status', { p_org: orgId });
    if (error) {
      console.error('[connect-google-status] RPC failed:', error.message);
      return json({ error: 'forbidden' }, 403);
    }

    const status = (data ?? {}) as {
      connected?: boolean; email?: string | null; can_send?: boolean;
      scopes?: string[]; connected_at?: string | null; last_error?: string | null;
    };
    return json({
      connected: Boolean(status.connected),
      email: status.email ?? null,
      canSend: Boolean(status.can_send),
      scopes: status.scopes ?? [],
      connectedAt: status.connected_at ?? null,
      lastError: status.last_error ?? null,
    });
  } catch (err) {
    return json({ error: (err as Error).message }, 500);
  }
});
