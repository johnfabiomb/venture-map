import { ensureBookingEvent } from './booking-event.ts';

// Single source of truth for turning a SUCCEEDED Stripe PaymentIntent into a completed
// `payments` row. Idempotent: keyed on the unique stripe_payment_intent_id, so the
// success-page return (`confirm-payment`) and the async `stripe-webhook` can both call
// it for the same intent without ever double-recording. Also confirms the booking and
// refreshes its calendar event. The `payments` ledger therefore only ever holds money
// that actually moved — no pending/abandoned-intent rows.

// deno-lint-ignore no-explicit-any
type SupabaseClient = any;

interface IntentLike {
  id: string;
  amount: number;                       // in cents
  metadata: Record<string, string> | null;
}

export interface RecordResult {
  /** True once the ledger holds a row for this intent — inserted now, or already present. */
  recorded: boolean;
  /** Set only when `recorded` is false: a PERMANENT reason, so the caller must NOT retry. */
  reason?: string;
}

/**
 * Record a succeeded intent, exactly once.
 *
 * Three outcomes, and the distinction matters because Stripe retries on a non-2xx:
 *   { recorded: true }            the ledger holds this payment.
 *   { recorded: false, reason }   PERMANENT — retrying cannot help (nothing to attach the
 *                                 money to). Acknowledge it; don't make Stripe retry for days.
 *   throws                        TRANSIENT (database unreachable, insert rejected) — the
 *                                 caller should return a non-2xx so Stripe retries with backoff.
 *
 * Previously this returned void and swallowed every failure, so money could move at Stripe
 * with nothing in the ledger, the webhook still returned 200, and the success page still
 * reported `recorded: true`. There was no second chance and no signal.
 */
export async function recordSucceededIntent(service: SupabaseClient, intent: IntentLike): Promise<RecordResult> {
  const bookingId = intent.metadata?.booking_id ?? null;
  const invoiceId = intent.metadata?.invoice_id ?? null;

  // An intent must name what it settles. Previously this required booking_id and returned
  // early otherwise — which for an invoice-only payment meant money moved at Stripe and
  // NOTHING was recorded. Both webhook and success-page paths come through here, so this
  // single guard covers both.
  if (!bookingId && !invoiceId) {
    console.error('recordSucceededIntent: intent names neither booking nor invoice', intent.id);
    return { recorded: false, reason: 'intent names neither booking nor invoice' };
  }

  // org_id is NOT NULL on payments — read it from the row itself, never from metadata alone.
  let orgId: string | null = null;
  if (bookingId) {
    const { data: bk } = await service.from('bookings').select('org_id').eq('id', bookingId).maybeSingle();
    orgId = bk?.org_id ?? null;
    if (!orgId) {
      console.error('recordSucceededIntent: booking not found', bookingId);
      return { recorded: false, reason: 'booking not found' };
    }
  } else {
    const { data: inv } = await service.from('invoices')
      .select('org_id').eq('id', invoiceId).is('deleted_at', null).maybeSingle();
    orgId = inv?.org_id ?? null;
    if (!orgId) {
      console.error('recordSucceededIntent: invoice not found', invoiceId);
      return { recorded: false, reason: 'invoice not found' };
    }
  }

  const type = intent.metadata?.payment_type === 'deposit' ? 'deposit' : 'full';

  // Written ONCE, on first sight of the intent. See the insert below for why this is no
  // longer an upsert.
  const row: Record<string, unknown> = {
    org_id: orgId,
    booking_id: bookingId,
    amount: intent.amount / 100,
    type,
    status: 'completed',
    method: 'card',
    stripe_payment_intent_id: intent.id,
    paid_at: new Date().toISOString(),
  };
  // Send invoice_id ONLY when we have one. The set_payment_invoice trigger resolves it from
  // booking_id on insert, so an explicit null here would fight the trigger and detach the
  // payment from its invoice, under-reporting every invoice-keyed total. For an invoice-only
  // payment the trigger cannot help — there is no booking to resolve from — so the id is
  // written here instead. payments_has_parent is satisfied either way, which is why that
  // CHECK exists.
  if (invoiceId) row.invoice_id = invoiceId;

  // INSERT-once, deliberately not an upsert any more.
  //
  // Both the success page and the webhook call this for the same intent, and a PostgREST
  // upsert rewrites every column it is handed on conflict — including `status` and
  // `paid_at`. That produced two silent money bugs:
  //   * a REFUNDED payment was flipped back to 'completed' the next time the client opened
  //     their receipt URL (a bookmark, a browser Back, a forwarded link), putting refunded
  //     money back into revenue; and
  //   * `paid_at` was rewritten to "now" on every re-record, so re-opening an old receipt
  //     moved that payment into the current month — get_earnings buckets cash by
  //     COALESCE(paid_at, created_at), so historic months silently changed.
  // The row is written once by whichever caller arrives first and is thereafter owned by
  // the admin, who may refund or soft-delete it. Idempotency is unchanged: the unique index
  // on stripe_payment_intent_id still guarantees exactly one row.
  const { data: existing, error: lookupErr } = await service.from('payments')
    .select('id, status').eq('stripe_payment_intent_id', intent.id).maybeSingle();
  if (lookupErr) throw new Error(`payment lookup failed: ${lookupErr.message}`);

  if (!existing) {
    const { error } = await service.from('payments').insert(row);
    // 23505 = the other caller won the race and inserted first. The row exists, which is all
    // we wanted, so that is success. Anything else is transient: throw so Stripe retries.
    if (error && error.code !== '23505') {
      throw new Error(`payment insert failed: ${error.message}`);
    }
  }

  // Everything below is BOOKING-only. An invoice with no job has no slot to confirm and no
  // calendar event to write — running either would be meaningless at best and, in the case
  // of the confirm, would silently match zero rows.
  if (!bookingId) return { recorded: true };

  // Paying confirms the booking: card holds and pay-later 'pending' links become 'booked'.
  const { error: confirmErr } = await service.from('bookings')
    .update({ status: 'booked', hold_expires_at: null })
    .eq('id', bookingId).in('status', ['hold', 'pending']);
  if (confirmErr) console.error('recordSucceededIntent: confirm failed (slot taken?)', confirmErr.message);

  // Create/refresh the Google Calendar event so it reflects the new payment state.
  try { await ensureBookingEvent(service, bookingId); }
  catch (e) { console.error('recordSucceededIntent: GCal sync failed', (e as Error).message); }

  // The money is recorded; a failed confirm or calendar sync is a follow-up problem, not a
  // reason to make Stripe resend the payment.
  return { recorded: true };
}
