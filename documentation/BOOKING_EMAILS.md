# Booking Platform — Email / Notifications

> **PARTLY SUPERSEDED.** Invoice email (send an invoice, send a payment reminder) is now
> **built** — see §20 of `supabase/bookings-schema.sql`, `ui/invoice-send/`, and the
> `send-invoice-email` / `connect-google-*` Edge Functions. It sends through the org's own
> **Google account** (Gmail API, per-org OAuth, token in Supabase Vault), **not** Resend:
> the owner requires mail to come from their own Workspace alias, which a third-party
> transactional provider cannot do without sending from a different mailbox.
>
> What remains unbuilt is the **booking lifecycle** half below — confirmations, receipts,
> cancellations and the owner alerts. Those should reuse the sending engine that now
> exists (per-org sender, `{placeholder}` templates, the `invoice_sends`-style log) rather
> than introducing the Resend path this document originally proposed. The 24h shoot
> reminder still needs a scheduler, which this project still does not have.

## Original recommended approach (superseded for invoices)
- **Provider:** [Resend](https://resend.com) (simple API, generous free tier) — or any SMTP via Supabase.
- **Where:** a single `send-email` Edge Function (service-role), called from the booking
  lifecycle (webhook, approve, create-booking-request) — never from the browser.
- **Per-org:** sender name/reply-to come from the **organization** (e.g. "John F. Montaño
  <bookings@…>"). Store an optional `organizations.email_from` / reply-to.
- **Secrets:** `RESEND_API_KEY` in Supabase Edge Function secrets.

## Emails to send

### To the customer
| Trigger | Email |
|---|---|
| Card payment succeeds (`stripe-webhook`) | **Booking confirmed** + **receipt** (ref, service, worker, date/time, amount paid, balance due, add-to-calendar .ics) |
| Cash request created (`create_booking_request`) | **Request received** — "we'll confirm shortly" |
| Admin approves cash request (`approve-cash-booking`) | **Booking confirmed** (+ how/when to pay) |
| Admin declines / cancels | **Booking declined / cancelled** (+ refund note if refunded) |
| Balance still due | **Pay the balance** (link to `/book/:token`) |
| 24h before the shoot | **Reminder** (needs a scheduled job / cron) |

### To the org (owner/admin + relevant worker)
| Trigger | Email |
|---|---|
| New cash request | **New request to approve** (client, service, time, amount) |
| New card booking confirmed | **New booking** (so you don't rely on the live panel) |
| Cancellation | **Booking cancelled** |

## Building blocks needed
- `send-email` Edge Function (Resend) with simple HTML templates per type.
- Call sites: `stripe-webhook` (confirmed + receipt + owner alert), `approve-cash-booking`
  (confirmed), `create_booking_request` path (request received + owner alert — needs an Edge
  Function wrapper or DB webhook since the RPC can't send email), `cancel-booking` (cancelled/refunded).
- A **reminder** job: a scheduled Edge Function (Supabase cron) that emails bookings ~24h out.
- `.ics` attachment generator for "add to calendar".

## Notes
- Keep templates minimal + on-brand (cream/gold, like the quotation).
- Idempotency: don't double-send (e.g. webhook retries) — guard on a `notified_at` flag or event id.
- The customer's email is on `clients.email`; the org's from-address on `organizations`.
