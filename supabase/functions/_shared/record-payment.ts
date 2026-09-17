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

export async function recordSucceededIntent(service: SupabaseClient, intent: IntentLike): Promise<void> {
  const bookingId = intent.metadata?.booking_id ?? null;
  const invoiceId = intent.metadata?.invoice_id ?? null;

  // An intent must name what it settles. Previously this required booking_id and returned
  // early otherwise — which for an invoice-only payment meant money moved at Stripe and
  // NOTHING was recorded. Both webhook and success-page paths come through here, so this
  // single guard covers both.
  if (!bookingId && !invoiceId) {
    console.error('recordSucceededIntent: intent names neither booking nor invoice', intent.id);
    return;
  }

  // org_id is NOT NULL on payments — read it from the row itself, never from metadata alone.
  let orgId: string | null = null;
  if (bookingId) {
    const { data: bk } = await service.from('bookings').select('org_id').eq('id', bookingId).maybeSingle();
    orgId = bk?.org_id ?? null;
    if (!orgId) { console.error('recordSucceededIntent: booking not found', bookingId); return; }
  } else {
    const { data: inv } = await service.from('invoices')
      .select('org_id').eq('id', invoiceId).is('deleted_at', null).maybeSingle();
    orgId = inv?.org_id ?? null;
    if (!orgId) { console.error('recordSucceededIntent: invoice not found', invoiceId); return; }
  }

  const type = intent.metadata?.payment_type === 'deposit' ? 'deposit' : 'full';

  // Upsert on the unique intent id → exactly one completed row, however many times this runs.
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
  // Send invoice_id ONLY when we have one. This upsert is ON CONFLICT DO UPDATE, and both
  // the success page and the webhook record the same intent — so the second write is the
  // norm, not an edge case. Passing null there would overwrite the invoice_id that the
  // set_payment_invoice trigger resolved on insert, silently detaching a booking payment
  // from its invoice and under-reporting every invoice-keyed total.
  // For an invoice-only payment the trigger cannot help (there is no booking to resolve
  // from), so the id is written explicitly here. payments_has_parent is satisfied either
  // way, which is why that CHECK exists.
  if (invoiceId) row.invoice_id = invoiceId;

  const { error } = await service.from('payments').upsert(row, { onConflict: 'stripe_payment_intent_id' });
  if (error) { console.error('recordSucceededIntent: upsert failed', error.message); return; }

  // Everything below is BOOKING-only. An invoice with no job has no slot to confirm and no
  // calendar event to write — running either would be meaningless at best and, in the case
  // of the confirm, would silently match zero rows.
  if (!bookingId) return;

  // Paying confirms the booking: card holds and pay-later 'pending' links become 'booked'.
  const { error: confirmErr } = await service.from('bookings')
    .update({ status: 'booked', hold_expires_at: null })
    .eq('id', bookingId).in('status', ['hold', 'pending']);
  if (confirmErr) console.error('recordSucceededIntent: confirm failed (slot taken?)', confirmErr.message);

  // Create/refresh the Google Calendar event so it reflects the new payment state.
  try { await ensureBookingEvent(service, bookingId); }
  catch (e) { console.error('recordSucceededIntent: GCal sync failed', (e as Error).message); }
}
