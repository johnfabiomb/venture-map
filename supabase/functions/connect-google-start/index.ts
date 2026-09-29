import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders as _cors } from '../_shared/cors.ts';
import { oauthAuthorizeUrl, CONNECT_SCOPES } from '../_shared/google-oauth.ts';

// Org owner/admin starts the Gmail-send OAuth flow for THEIR org: mint a one-time state
// token, persist it, and hand back Google's consent-screen URL. Authorization shape is
// copied verbatim from connect-stripe-start — the caller must be owner/admin of the
// org_id they pass, so an admin can never start a connection for another org.
//
// JWT-verified (Supabase's default) — this is called directly from our own SPA, unlike
// connect-google-callback below which Google redirects the browser to unauthenticated.
//
// Reuses the SAME registered OAuth client (GOOGLE_OAUTH_CLIENT_ID/SECRET) as the existing
// shared-calendar integration — one Google Cloud OAuth app, two different flows (one
// static refresh token for the calendar owner, many per-org three-legged connections for
// Gmail here), not a second app to register.
//
// NOTE (operational, not code): gmail.send is a Google "sensitive scope" — the OAuth
// consent screen must have it added and, for use beyond ~100 test users, verified, or
// Google will bounce the request before the admin ever sees a consent screen.

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

    // Authorize: caller must be owner/admin of THIS org.
    const { data: member } = await service.from('org_members')
      .select('role').eq('org_id', orgId).eq('user_id', user.id).maybeSingle();
    if (!member || !['owner', 'admin'].includes(member.role)) return json({ error: 'forbidden' }, 403);

    const clientId = Deno.env.get('GOOGLE_OAUTH_CLIENT_ID');
    if (!clientId) return json({ error: 'GOOGLE_OAUTH_CLIENT_ID not set' }, 500);

    // Opportunistic cleanup: this project has no cron, so expired one-time states would
    // otherwise accumulate forever. Cheap (indexed PK range scan) and always safe to run —
    // a state past its expiry is by definition useless to anyone.
    await service.from('google_oauth_states').delete().lt('expires_at', new Date().toISOString());

    // A long, unguessable one-time token — two UUIDs give far more entropy than needed,
    // which is the point (never worth trying to brute force). 15 minutes mirrors this
    // codebase's existing hold_expires_at convention for short-lived single-use tokens:
    // generous enough to get an admin through Google's consent screen, short enough that a
    // leaked-but-unused state can't be replayed hours later.
    const state = crypto.randomUUID() + crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();
    const { error: stateErr } = await service.from('google_oauth_states')
      .insert({ state, org_id: orgId, user_id: user.id, expires_at: expiresAt });
    if (stateErr) throw stateErr;

    // Derived, never hardcoded (roadmap rule F9): this function's own deployed URL. Must
    // match connect-google-callback's redirect_uri byte-for-byte — Google requires the
    // token-exchange redirect_uri to be identical to the one used in the authorize step.
    const redirectUri = `${url}/functions/v1/connect-google-callback`;

    // Prefill the consent screen with the address this org already intends to send from,
    // if they've set one — skips Google's account picker when it's obvious which account
    // they mean to connect.
    const { data: org } = await service.from('organizations')
      .select('invoice_settings').eq('id', orgId).maybeSingle();
    const loginHint = (org?.invoice_settings as { email_from?: string } | null)?.email_from;

    const authorizeUrl = oauthAuthorizeUrl({ clientId, redirectUri, scopes: CONNECT_SCOPES, state, loginHint });
    return json({ url: authorizeUrl });
  } catch (err) {
    console.error('[connect-google-start] failed:', (err as Error).message);
    return json({ error: (err as Error).message }, 500);
  }
});
