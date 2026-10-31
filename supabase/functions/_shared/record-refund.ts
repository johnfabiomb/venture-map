import { ensureBookingEvent } from './booking-event.ts';

// A refund made in Stripe brought back into the ledger. Until this existed the webhook
// handled only payment_intent.succeeded, so money refunded from the Stripe dashboard (or
// anywhere but cancel-booking, which marks its own refunds) still counted as paid: the
// invoice read settled, and the books were wrong with nothing on screen to say so.
//
// Idempotent, because Stripe delivers an event more than once and sends one per refund
// carrying the CUMULATIVE amount_refunded. Everything is derived from the charge itself
// (what was charged, what has gone back in total), never added to what is stored:
//   * refunded in full → the payment is marked 'refunded' and stops counting anywhere;
//   * refunded in part → its amount becomes what the client is still out of pocket, and
//     its note says how much went back (the record_history trigger keeps the old figure).

// deno-lint-ignore no-explicit-any
type SupabaseClient = any;

export interface ChargeLike {
  amount: number;            // cents, as charged
  amount_refunded: number;   // cents, cumulative across every refund of this charge
  payment_intent: string | { id: string } | null;
}

export type RefundResult = { updated: true } | { updated: false; reason: string };

const REFUND_NOTE = / · €[\d.]+ refunded in Stripe$/;

export async function recordRefund(service: SupabaseClient, charge: ChargeLike): Promise<RefundResult> {
  const intentId = typeof charge.payment_intent === 'string' ? charge.payment_intent : charge.payment_intent?.id;
  if (!intentId) return { updated: false, reason: 'no_payment_intent' };

  const { data: pay, error } = await service.from('payments')
    .select('id, amount, note, status, booking_id')
    .eq('stripe_payment_intent_id', intentId).is('deleted_at', null).maybeSingle();
  if (error) throw new Error(`refund lookup failed: ${error.message}`);   // transient: let Stripe retry
  if (!pay) return { updated: false, reason: 'no_payment_for_intent' };   // not ours to record

  const full = charge.amount_refunded >= charge.amount;
  const patch = full
    ? { status: 'refunded' }
    : {
        amount: (charge.amount - charge.amount_refunded) / 100,
        note: `${String(pay.note ?? '').replace(REFUND_NOTE, '')} · €${(charge.amount_refunded / 100).toFixed(2)} refunded in Stripe`
          .replace(/^ · /, ''),
      };
  const { error: upErr } = await service.from('payments').update(patch).eq('id', pay.id);
  if (upErr) throw new Error(`refund update failed: ${upErr.message}`);

  // The calendar event's Payment line follows the ledger.
  if (pay.booking_id) {
    try { await ensureBookingEvent(service, pay.booking_id); }
    catch (e) { console.error('recordRefund: GCal sync failed', (e as Error).message); }
  }
  return { updated: true };
}
