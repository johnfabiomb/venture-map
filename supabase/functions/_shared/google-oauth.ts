// Per-ORG Google OAuth (three-legged, Gmail send). Deliberately separate from
// _shared/google-calendar.ts, which is a single STATIC owner refresh token
// (GOOGLE_OAUTH_REFRESH_TOKEN) shared by the whole app for one shared calendar.
// This module is the opposite shape: many orgs, each with their own refresh token,
// connected through a normal browser consent flow (connect-google-start /
// connect-google-callback) and looked up per-call by org id.
//
// Reuses the SAME registered OAuth client (GOOGLE_OAUTH_CLIENT_ID/SECRET) as the
// calendar integration — one Google Cloud OAuth app, two different flows. It is
// NOT a second app to register.

// deno-lint-ignore no-explicit-any
type SupabaseClient = any;

const OAUTH_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const OAUTH_REVOKE_URL = 'https://oauth2.googleapis.com/revoke';
const OAUTH_AUTHORIZE_URL = 'https://accounts.google.com/o/oauth2/v2/auth';

export const GMAIL_SEND_SCOPE = 'https://www.googleapis.com/auth/gmail.send';
const OPENID_SCOPE = 'openid';
const EMAIL_SCOPE = 'https://www.googleapis.com/auth/userinfo.email';
// Not used by this feature yet (send-invoice-email only ever needs GMAIL_SEND_SCOPE) —
// requested up front anyway so that when per-org Google Calendars are built (see
// booking-event.ts's "Per-org calendars are future" note / MULTI_TENANT_ROADMAP.md),
// an org that already connected Gmail doesn't have to sit through a second consent
// screen. include_granted_scopes below makes this additive rather than a re-ask.
const CALENDAR_SCOPE = 'https://www.googleapis.com/auth/calendar';

/** Scopes requested when an org connects its Google account. */
export const CONNECT_SCOPES: string[] = [OPENID_SCOPE, EMAIL_SCOPE, GMAIL_SEND_SCOPE, CALENDAR_SCOPE];

/**
 * Thrown by getOrgAccessToken when the org has never connected a Google account (no row,
 * or a row with no usable refresh token). Distinguished from GoogleReauthRequiredError so
 * callers can tell "never set this up" from "was connected, now broken" — the UI copy for
 * the two is different (one says "Connect Gmail", the other says "Reconnect Gmail").
 */
export class GoogleNotConnectedError extends Error {
  constructor() {
    super('Google account not connected for this organization');
    this.name = 'GoogleNotConnectedError';
  }
}

/**
 * Thrown by getOrgAccessToken when Google's refresh endpoint returns invalid_grant — the
 * refresh token is permanently dead (revoked from the Google account, a Workspace admin
 * pulled access, etc). No amount of retrying fixes this; the org must go through
 * connect-google-start again. Callers must surface "reconnect", not a generic error.
 */
export class GoogleReauthRequiredError extends Error {
  constructor(detail?: string) {
    super(detail ? `Google reconnect required: ${detail}` : 'Google reconnect required');
    this.name = 'GoogleReauthRequiredError';
  }
}

/**
 * Build the Google consent-screen URL for connect-google-start to redirect the admin to.
 * Pure/stateless — the caller is responsible for reading/validating env vars and for
 * persisting `state` before calling this.
 */
export function oauthAuthorizeUrl(p: {
  clientId: string;
  redirectUri: string;
  scopes: string[];
  state: string;
  loginHint?: string;
}): string {
  const params = new URLSearchParams({
    client_id: p.clientId,
    redirect_uri: p.redirectUri,
    response_type: 'code',
    scope: p.scopes.join(' '),
    state: p.state,
    // access_type=offline is what makes a refresh_token possible at all. prompt=consent is
    // what actually makes Google SEND one: once a user has consented before, a plain
    // re-auth (no prompt) returns an access token only and silently omits refresh_token —
    // so a reconnect after GoogleReauthRequiredError (or after disconnect-google) would
    // appear to succeed but store nothing usable. Both are required together.
    access_type: 'offline',
    prompt: 'consent',
    // Lets an org that already granted one set of scopes (e.g. a future Calendar
    // connection) add gmail.send without Google dropping the scopes already granted —
    // standard Google incremental-authorization behaviour, pairs with CONNECT_SCOPES
    // including the not-yet-used calendar scope above.
    include_granted_scopes: 'true',
  });
  if (p.loginHint) params.set('login_hint', p.loginHint);
  return `${OAUTH_AUTHORIZE_URL}?${params.toString()}`;
}

export interface GoogleTokenResponse {
  refresh_token?: string;
  access_token: string;
  expires_in: number;
  scope: string;
  id_token: string;
  token_type: string;
}

/** Server-to-server authorization_code → tokens exchange, called once by the callback. */
export async function exchangeCodeForTokens(code: string, redirectUri: string): Promise<GoogleTokenResponse> {
  const res = await fetch(OAUTH_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: Deno.env.get('GOOGLE_OAUTH_CLIENT_ID')!,
      client_secret: Deno.env.get('GOOGLE_OAUTH_CLIENT_SECRET')!,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(`Google code exchange failed: ${JSON.stringify(data)}`);
  return data as GoogleTokenResponse;
}

/**
 * Get a usable access token for an org's connected Gmail account, refreshing only when
 * needed. Calls the service_role-only google_send_credentials RPC (it decrypts the Vault
 * secret) to get the refresh token plus whatever access token was cached from the last
 * refresh.
 *
 * Deliberately different from _shared/google-calendar.ts's getAccessToken(), which
 * re-exchanges on EVERY call — fine for one shared credential used a handful of times a
 * day, but this is a per-org token that can be requested repeatedly within a single send
 * (and will be more once bulk/reminder sends exist), so this caches the access token on
 * org_google_accounts and only round-trips to Google when it's actually expired (60s of
 * slack to cover request latency).
 */
export async function getOrgAccessToken(service: SupabaseClient, orgId: string): Promise<string> {
  const { data, error } = await service.rpc('google_send_credentials', { p_org: orgId });
  if (error) throw error;
  const creds = data as {
    refresh_token?: string;
    access_token?: string;
    access_expires_at?: string;
  } | null;
  if (!creds?.refresh_token) throw new GoogleNotConnectedError();

  const expiresAtMs = creds.access_expires_at ? new Date(creds.access_expires_at).getTime() : 0;
  if (creds.access_token && expiresAtMs > Date.now() + 60_000) {
    await service.from('org_google_accounts')
      .update({ last_used_at: new Date().toISOString() }).eq('org_id', orgId);
    return creds.access_token;
  }

  const res = await fetch(OAUTH_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: Deno.env.get('GOOGLE_OAUTH_CLIENT_ID')!,
      client_secret: Deno.env.get('GOOGLE_OAUTH_CLIENT_SECRET')!,
      refresh_token: creds.refresh_token,
      grant_type: 'refresh_token',
    }),
  });
  const refreshed = await res.json();

  if (!refreshed.access_token) {
    // invalid_grant = permanently dead token (see GoogleReauthRequiredError above). Record
    // it on the row so Settings can show "reconnect" without another failed send, and throw
    // a type the caller can distinguish from a transient network/5xx error.
    const detail = refreshed.error_description ?? refreshed.error ?? 'unknown';
    await service.from('org_google_accounts').update({ last_error: detail }).eq('org_id', orgId);
    if (refreshed.error === 'invalid_grant') throw new GoogleReauthRequiredError(detail);
    throw new Error(`Google token refresh failed: ${JSON.stringify(refreshed)}`);
  }

  const access_expires_at = new Date(Date.now() + Number(refreshed.expires_in ?? 3600) * 1000).toISOString();
  await service.from('org_google_accounts').update({
    access_token: refreshed.access_token,
    access_expires_at,
    last_used_at: new Date().toISOString(),
    last_error: null, // clear any stale error now that a refresh has actually succeeded
  }).eq('org_id', orgId);
  return refreshed.access_token;
}

/** Best-effort token revocation at Google. See disconnect-google for how failures here are handled. */
export async function revokeGoogleToken(token: string): Promise<void> {
  const res = await fetch(`${OAUTH_REVOKE_URL}?token=${encodeURIComponent(token)}`, { method: 'POST' });
  // Google returns 200 even when the token was already invalid/expired. Anything else is a
  // real failure worth logging — but see disconnect-google for why it's not fatal there.
  if (!res.ok) throw new Error(`Google token revoke failed (${res.status}): ${await res.text()}`);
}

/**
 * Decode (NOT verify) the middle segment of a Google id_token JWT for its email/sub claims.
 *
 * Signature verification is deliberately skipped: this token was never handled by a
 * browser or any untrusted party where it could be forged/substituted — it came back over
 * TLS directly from Google's token endpoint in a server-to-server call
 * (exchangeCodeForTokens). Verifying the JWS signature here would only re-prove something
 * the transport already guarantees, at the cost of fetching/caching Google's signing keys
 * for no real security gain.
 */
export function decodeIdTokenPayload(idToken: string): { email?: string; sub?: string } {
  const parts = idToken.split('.');
  if (parts.length !== 3) throw new Error('Malformed Google id_token');
  const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
  const payload = JSON.parse(atob(padded));
  return { email: payload.email, sub: payload.sub };
}
