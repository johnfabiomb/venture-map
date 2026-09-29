import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders as _cors } from '../_shared/cors.ts';
import { revokeGoogleToken } from '../_shared/google-oauth.ts';

// Org owner/admin disconnects their org's Gmail-send account. This can't be "a plain RPC"
// the frontend calls directly: revoking at Google needs an outbound HTTPS call (POST
// oauth2.googleapis.com/revoke), and Postgres/PostgREST has no way to call out to Google —
// only an Edge Function can do that leg. So this is the one place that both talks to
// Google AND tears down our own DB state.

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

    const { data: member } = await service.from('org_members')
      .select('role').eq('org_id', orgId).eq('user_id', user.id).maybeSingle();
    if (!member || !['owner', 'admin'].includes(member.role)) return json({ error: 'forbidden' }, 403);

    // google_send_credentials is service_role ONLY (it decrypts the Vault secret) — the one
    // place allowed to see the raw refresh token, and only for as long as it takes to
    // revoke it below.
    const { data: creds, error: credErr } = await service.rpc('google_send_credentials', { p_org: orgId });
    if (credErr) throw credErr;
    const refreshToken = (creds as { refresh_token?: string } | null)?.refresh_token;
    if (!refreshToken) {
      // Nothing connected — disconnect is idempotent, not an error.
      return json({ ok: true, alreadyDisconnected: true });
    }

    // Best-effort revoke. Google returning an error (or being unreachable) must NOT trap
    // the admin in a state where they can't disconnect — the org_google_accounts row is
    // what actually controls whether this app can send as them, so it comes off below
    // regardless of whether Google's side confirms.
    try {
      await revokeGoogleToken(refreshToken);
    } catch (revokeErr) {
      console.error('[disconnect-google] revoke failed (continuing):', (revokeErr as Error).message);
    }

    // Drop the credential row AND its Vault secret together, inside the database.
    // Deleting from `vault.secrets` over PostgREST would depend on the vault schema being
    // exposed to the API — it is not, by default — so both steps go through one
    // service-role RPC instead of being attempted best-effort from here. Revoking at
    // GOOGLE stays above: Postgres cannot make an outbound call.
    const { error: delErr } = await service.rpc('google_delete_credentials', { p_org: orgId });
    if (delErr) throw delErr;

    return json({ ok: true });
  } catch (err) {
    console.error('[disconnect-google] failed:', (err as Error).message);
    return json({ error: (err as Error).message }, 500);
  }
});
