import Stripe from 'https://esm.sh/stripe@17?target=deno';
import { SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Centralizes "which Stripe account does this org charge on, and what platform fee".
// Every money function (start-card-booking, create-payment-intent, cancel-booking)
// resolves payments through here so the connected-account decision is made in ONE
// place — never ad hoc. The platform SECRET key lives only in the Edge Function env;
// it is never stored in the DB or sent to the client.

export interface OrgStripe {
  /** Which org this is. Needed because the platform-account fallback is permitted for
   *  exactly ONE org and refused for every other — see chargeRouting. */
  orgId: string;
  /** The org's connected Standard account, or null = charge on the platform account. */
  accountId: string | null;
  /** Onboarding finished and the account can accept charges. */
  chargesEnabled: boolean;
  /** Platform application fee in basis points (0 = none). */
  feeBps: number;
  /** May this org charge on the PLATFORM's Stripe account when it has none of its own?
   *  service_role-write-only in the DB (§26) — an org admin cannot grant it to itself. */
  platformChargesAllowed: boolean;
}

/** A Stripe client bound to the platform secret key. */
export function platformStripe(): Stripe {
  const key = Deno.env.get('STRIPE_SECRET_KEY');
  if (!key) throw new Error('STRIPE_SECRET_KEY not set');
  return new Stripe(key);
}

/** Load an org's Connect state. Throws if the org is missing. */
export async function resolveOrgStripe(service: SupabaseClient, orgId: string): Promise<OrgStripe> {
  const { data, error } = await service
    .from('organizations')
    .select('stripe_account_id, stripe_charges_enabled, application_fee_bps, platform_charges_allowed')
    .eq('id', orgId)
    .maybeSingle();
  if (error) throw error;
  if (!data) throw new Error('org_not_found');
  return {
    orgId,
    accountId: (data.stripe_account_id as string | null) ?? null,
    chargesEnabled: Boolean(data.stripe_charges_enabled),
    feeBps: Number(data.application_fee_bps ?? 0),
    platformChargesAllowed: Boolean(data.platform_charges_allowed),
  };
}

export interface ChargeRouting {
  /** Extra PaymentIntent.create params (application fee on direct charges). */
  intentParams: { application_fee_amount?: number };
  /**
   * Per-request options — `{ stripeAccount }` for direct charges, or `undefined` for
   * the platform account. It MUST be undefined (never `{}`) when there's no connected
   * account: the Stripe SDK rejects an empty options object with
   * "Unknown arguments ([object Object])".
   */
  requestOptions?: Stripe.RequestOptions;
}

/**
 * Decide how to route a charge of `amountCents` for an org.
 * - Connected + charges enabled → DIRECT charge on the connected account, platform fee applied.
 * - Connected but onboarding NOT complete → reject (don't silently charge the platform).
 * - No connected account → permitted ONLY when the org's `platform_charges_allowed` flag
 *   is set; everyone else is rejected.
 *
 * ⚠ That last rule is the whole point of this function. The fallback used to be
 * unconditional, which was correct while there was one tenant and is catastrophic with
 * two: a second organization that had not connected Stripe would take its clients' card
 * payments **into the platform owner's Stripe account**. Nothing would error — the money
 * would simply land in the wrong bank account, and the org would have no way to refund it.
 *
 * It FAILS CLOSED: the flag defaults to false, so a new organization is refused until it
 * connects its own account — "refuse the payment" is recoverable and "paid the wrong
 * person" is not. The permission is an explicit per-org flag rather than something
 * inferred from "the oldest org" or "the org with no Stripe account", both of which
 * silently re-open the hole the moment the data changes.
 *
 * It is a DB column and not an env var so that the admin UI can read the same answer and
 * warn an organization that its card payments are off. An env var is invisible to the
 * app, which is how you end up with a settings screen that cannot tell the truth.
 */
export function chargeRouting(org: OrgStripe, amountCents: number): ChargeRouting {
  if (!org.accountId) {
    if (!org.platformChargesAllowed) throw new Error('payment_setup_incomplete');
    return { intentParams: {} }; // platform fallback — NO requestOptions (undefined)
  }
  if (!org.chargesEnabled) {
    throw new Error('payment_setup_incomplete');
  }
  const intentParams: { application_fee_amount?: number } = {};
  if (org.feeBps > 0) {
    intentParams.application_fee_amount = Math.round((amountCents * org.feeBps) / 10000);
  }
  return { intentParams, requestOptions: { stripeAccount: org.accountId } };
}

/** Per-request options for an org, or undefined for the platform account (never `{}`). */
export function orgRequestOptions(org: OrgStripe): Stripe.RequestOptions | undefined {
  return org.accountId ? { stripeAccount: org.accountId } : undefined;
}

/**
 * Is this a "this organization cannot take card payments yet" refusal rather than a
 * server fault? A configuration problem is a 400 the page can explain to the customer,
 * not a 500 that reads as "the site is broken" and invites them to retry forever.
 */
export function isSetupError(err: unknown): boolean {
  const m = (err as Error | null)?.message;
  return m === 'payment_setup_incomplete' || m === 'org_not_found';
}
