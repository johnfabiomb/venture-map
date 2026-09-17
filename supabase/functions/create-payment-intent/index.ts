import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders as _cors } from '../_shared/cors.ts';
import { platformStripe, resolveOrgStripe, chargeRouting } from '../_shared/stripe.ts';
const corsHeaders = { ..._cors, 'Content-Type': 'application/json' };

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  try {
    const { token, paymentType } = await req.json() as { token: string; paymentType: 'deposit' | 'full' | 'remainder' };

    if (!token || !paymentType) {
      return new Response(JSON.stringify({ error: 'token and paymentType required' }), { status: 400, headers: corsHeaders });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: link } = await supabase
      .from('booking_links')
      .select('is_active, expires_at, deleted_at, booking_id, bookings(id, org_id, booking_ref, title, start_at, price_total, allow_card, deposit_percent, deposit_allowed, status, deleted_at)')
      .eq('token', token)
      .single();

    // `deleted_at` must be checked on BOTH sides. This client is service_role, which
    // bypasses the `hide_deleted` RESTRICTIVE policy, and the booking soft-delete cascade
    // stamps booking_links.deleted_at WITHOUT clearing is_active — so `is_active` alone is
    // not a validity test. Checking only that left five live tokens for cancelled-and-
    // deleted bookings (BK-2026-042/084/088/113, €781 in total) still fully chargeable.
    // check-availability already filtered both flags; this function was the odd one out.
    if (!link?.is_active || link.deleted_at) {
      return new Response(JSON.stringify({ error: 'Invalid or expired link' }), { status: 400, headers: corsHeaders });
    }

    if (link.expires_at && new Date(link.expires_at) < new Date()) {
      return new Response(JSON.stringify({ error: 'Link has expired' }), { status: 400, headers: corsHeaders });
    }

    const booking = link.bookings as {
      id: string; org_id: string; booking_ref: string; title: string; start_at: string; price_total: number;
      allow_card: boolean; deposit_percent: number | null; deposit_allowed: boolean | null;
      status: string; deleted_at: string | null;
    };

    if (!booking || booking.deleted_at) {
      return new Response(JSON.stringify({ error: 'Invalid or expired link' }), { status: 400, headers: corsHeaders });
    }

    // A cancelled or declined booking keeps its pay link: `cancel-booking` and
    // `declineRequest` both set the status without revoking the token, and cancel-booking
    // additionally removes the calendar events — so the slot reads free and the pay page
    // renders live Pay buttons. Nothing downstream would catch the mistake either:
    // record-payment's confirm is scoped `.in('status', ['hold','pending'])`, so it updates
    // zero rows without raising, and ensureBookingEvent returns early for a non-blocking
    // status. The client would be charged for a job that is not happening, with no error
    // logged anywhere. `accept-inperson` — the sibling action on the same page — already
    // carries exactly this guard; this function was missing it.
    if (['cancelled', 'expired', 'draft'].includes(booking.status)) {
      return new Response(JSON.stringify({ error: 'This booking has been cancelled.' }), { status: 400, headers: corsHeaders });
    }

    if (!booking.allow_card) {
      return new Response(JSON.stringify({ error: 'Card payment is not enabled for this booking' }), { status: 400, headers: corsHeaders });
    }

    // Effective deposit policy: the per-booking value, or a safe default for legacy rows.
    const depositPct = booking.deposit_percent ?? 30;
    const depositAllowed = booking.deposit_allowed ?? true;

    const isPast = new Date(booking.start_at) <= new Date();
    if (paymentType === 'deposit' && (isPast || !depositAllowed)) {
      return new Response(JSON.stringify({ error: isPast ? 'Past bookings require full payment' : 'This booking requires full payment' }), { status: 400, headers: corsHeaders });
    }

    // What's already been paid — needed for EVERY payment type, not just 'remainder'.
    // The pay page computes its state once on load and never refreshes, so the client can
    // hold a stale view: browser Back out of /pay/success (bfcache), a second tab, or a
    // cash payment you record while they sit on the page. Pricing 'full' or 'deposit' off
    // price_total alone therefore charged ON TOP of money already taken — a deposit
    // followed by "Pay in full" collected 130% of the job.
    //
    // `.is('deleted_at', null)` is REQUIRED: this client is service_role, which bypasses
    // the `hide_deleted` RESTRICTIVE policy. Without it a payment the admin removed still
    // counts toward totalPaid and the remainder is charged SHORT.
    const { data: priorPayments } = await supabase
      .from('payments')
      .select('amount')
      .eq('booking_id', booking.id)
      .eq('status', 'completed')
      .is('deleted_at', null);
    const totalPaid = (priorPayments ?? []).reduce((sum, p) => sum + Number(p.amount), 0);
    const balance = Math.round((booking.price_total - totalPaid) * 100) / 100;

    // Settled already — reject whichever button was pressed, not just 'remainder'.
    if (balance <= 0) {
      return new Response(JSON.stringify({ error: 'Booking is already fully paid' }), { status: 400, headers: corsHeaders });
    }

    let amount: number;
    if (paymentType === 'remainder') {
      amount = balance;
    } else {
      const depositAmount = Math.round(booking.price_total * depositPct) / 100;
      amount = paymentType === 'deposit' ? depositAmount : booking.price_total;
    }
    // Never charge more than is actually outstanding. This is the guard that makes a
    // stale client page safe, regardless of which amount it asked for.
    amount = Math.min(amount, balance);
    const amountCents = Math.round(amount * 100);

    // Route to the org's connected account (direct charge + platform fee) or fall back
    // to the platform account. Reject if the org connected but hasn't finished onboarding.
    const orgStripe = await resolveOrgStripe(supabase, booking.org_id);
    if (orgStripe.accountId && !orgStripe.chargesEnabled) {
      return new Response(JSON.stringify({ error: 'This business has not finished payment setup yet.' }), { status: 400, headers: corsHeaders });
    }
    const routing = chargeRouting(orgStripe, amountCents);
    const stripe = platformStripe();

    const intentParams = {
      amount: amountCents,
      currency: 'eur',
      description: `${booking.title} [${booking.booking_ref}] — ${paymentType}`,
      metadata: {
        booking_id: booking.id,
        booking_ref: booking.booking_ref,
        org_id: booking.org_id,
        payment_type: paymentType,
        token,
      },
      automatic_payment_methods: { enabled: true },
      ...routing.intentParams,
    };
    // Pass per-request options ONLY for a connected account — never an empty `{}`,
    // which the Stripe SDK rejects as "Unknown arguments".
    const intent = routing.requestOptions
      ? await stripe.paymentIntents.create(intentParams, routing.requestOptions)
      : await stripe.paymentIntents.create(intentParams);

    // NOTE: we do NOT write a `payments` row here. An intent is not a payment — the
    // customer may pick several amounts before paying (or abandon). A `payments` row is
    // created only when money actually moves, recorded idempotently by `confirm-payment`
    // (on the success-page return) and `stripe-webhook` (async), both keyed on the
    // PaymentIntent id. This keeps the ledger free of pending/abandoned clutter.

    // The client needs the connected account id to init Stripe.js for a direct charge.
    return new Response(JSON.stringify({ clientSecret: intent.client_secret, stripeAccount: orgStripe.accountId }), { headers: corsHeaders });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500, headers: corsHeaders });
  }
});
