import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders as _cors } from '../_shared/cors.ts';
import { exchangeCodeForTokens, decodeIdTokenPayload, GMAIL_SEND_SCOPE } from '../_shared/google-oauth.ts';

// ⚠️ DEPLOY WITH --no-verify-jwt:
//   supabase functions deploy connect-google-callback --no-verify-jwt --project-ref odmwjhysvvbhxytyefhv
// Google redirects the user's BROWSER straight to this URL after consent — there is no
// Supabase session/Authorization header on that request (Google has never heard of our
// JWTs), so Supabase's default JWT verification would reject every real call before this
// code ever runs. This project has no supabase/config.toml (no per-function
// verify_jwt=false setting), so the flag has to be passed explicitly on deploy.
//
// Safety does NOT depend on the JWT check anyway — it depends entirely on the one-time
// `state` row consumed atomically below, which is the real CSRF/authorization guard here.
//
// A human's browser is on the other end of every response from this function, mid
// navigation — it must ALWAYS reply with a redirect (302 + Location), never a JSON body.

const corsHeaders = { ..._cors };

function appBaseUrl(): string {
  // Unlike connect-stripe-start (called via fetch FROM our own SPA, where the Origin
  // header is trustworthy), this request arrives via Google's redirect — there is no
  // Origin/Referer we can fall back on. APP_BASE_URL must be configured for this flow.
  const configured = Deno.env.get('APP_BASE_URL');
  if (!configured) throw new Error('APP_BASE_URL not set');
  return configured.replace(/\/+$/, '');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  let base: string;
  try {
    base = appBaseUrl();
  } catch (err) {
    // The one case that genuinely can't redirect: we don't know WHERE to send the
    // browser. Plain text is the most useful thing a human lands on here can get.
    console.error('[connect-google-callback] misconfigured:', (err as Error).message);
    return new Response('Google sign-in is not configured correctly. Please contact support.', {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
    });
  }

  const to = (qs: string) => new Response(null, { status: 302, headers: { ...corsHeaders, Location: `${base}/bookings/settings?${qs}` } });
  const fail = (reason: string) => to(`google=error&reason=${reason}`);

  try {
    const reqUrl = new URL(req.url);
    if (reqUrl.searchParams.get('error')) return to('google=denied');
    const code = reqUrl.searchParams.get('code');
    const state = reqUrl.searchParams.get('state');
    if (!code || !state) return fail('missing_params');

    const service = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // Consume the state ATOMICALLY in one statement — UPDATE ... WHERE used_at IS NULL AND
    // expires_at > now() ... RETURNING org_id, user_id. Two requests racing on the same
    // state serialize on Postgres's row lock: whichever commits first flips used_at away
    // from NULL, so the second necessarily matches zero rows and lands on fail('state').
    // That makes this replay-safe with no separate lock or transaction block.
    const { data: consumed, error: consumeErr } = await service
      .from('google_oauth_states')
      .update({ used_at: new Date().toISOString() })
      .eq('state', state)
      .is('used_at', null)
      .gt('expires_at', new Date().toISOString())
      .select('org_id, user_id')
      .maybeSingle();
    if (consumeErr || !consumed) return fail('state');

    // The org id comes ONLY from this row — resolved by looking up the opaque state WE
    // minted and stored in connect-google-start — never from the query string. That is the
    // actual CSRF guard: anyone can send this endpoint a `?state=` of their choosing, but
    // it only resolves to an org if it matches a row this app itself created for that org,
    // for a user who was authorized at start time.
    const { org_id: orgId, user_id: userId } = consumed as { org_id: string; user_id: string };

    // Must match connect-google-start's redirect_uri byte-for-byte (Google requires it).
    const redirectUri = `${Deno.env.get('SUPABASE_URL')!}/functions/v1/connect-google-callback`;
    const tokens = await exchangeCodeForTokens(code, redirectUri);

    if (!tokens.refresh_token) return fail('no_refresh_token');
    const scopes = tokens.scope.split(' ').filter(Boolean);
    if (!scopes.includes(GMAIL_SEND_SCOPE)) return fail('scope');

    const identity = decodeIdTokenPayload(tokens.id_token);
    if (!identity.email || !identity.sub) return fail('identity');

    const { error: storeErr } = await service.rpc('google_store_credentials', {
      p_org: orgId,
      p_email: identity.email,
      p_sub: identity.sub,
      p_scopes: scopes,
      p_refresh_token: tokens.refresh_token,
      p_user: userId,
    });
    if (storeErr) {
      console.error('[connect-google-callback] google_store_credentials failed:', storeErr.message);
      return fail('store_failed');
    }

    return to('google=connected');
  } catch (err) {
    console.error('[connect-google-callback] failed:', (err as Error).message);
    return fail('unknown');
  }
});
