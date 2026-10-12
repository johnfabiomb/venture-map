# Multi-tenant readiness — what is safe, what is shared, what is missing

**Audited 2026-10-12** against the live database and the deployed Edge Functions, not
against this repo's intentions. Every "verified" below was proved by a query or an HTTP
probe; anything reasoned from code alone says so.

The questions being answered: *can I give someone access without them clashing with my
data, can a new organization set itself up on its own, and is anything still hardcoded to
me — can another org's bookings reach my calendar or their payments reach my Stripe?*

---

## 1. The one that was real: another org's card payments went into the owner's Stripe

**Before this audit, yes — exactly the worst case.** `chargeRouting` in
`supabase/functions/_shared/stripe.ts` ended with:

```ts
if (!org.accountId) return { intentParams: {} };   // platform fallback
```

A new organization that had not connected Stripe would take its clients' card payments
**onto the platform owner's Stripe account**. Nothing would error. The money would land in
the wrong bank account and that org would have no way to refund it. The fallback was
correct while there was one tenant and became a trapdoor the moment there were two.

**Fixed.** Charging on the platform account now requires an explicit per-org flag,
`organizations.platform_charges_allowed`, which **defaults to false**. It fails closed:
refusing a payment is recoverable, paying the wrong person is not.

Verified end to end against production, both directions:

| Case | Result |
|---|---|
| Owner's org (flag true, no connected account) | `HTTP 200`, `stripeAccount: null` — unchanged |
| A real second org, flag false | `HTTP 400 payment_setup_incomplete` — **no PaymentIntent created** |
| Same second org, flag flipped true | `HTTP 200` — so the flag is provably the gate |

The flag is **`service_role`-write-only**: `authenticated` holds UPDATE on only
`name, timezone, currency, booking_params, features, invoice_details, invoice_settings`
(verified against `information_schema.column_privileges`), so an org admin cannot grant
themselves the right to charge on someone else's account.

It is a database column and not an Edge Function secret on purpose. The first version of
this fix used a `PLATFORM_FALLBACK_ORG_ID` secret, which worked but was invisible to the
app — so the admin screens could not tell "this org has no Stripe account and cannot
charge" from "this org has no Stripe account and charges on the platform's", and therefore
could not warn a new organization that its card payments were off. That secret has been
removed.

**A new org now sees the warning** on the dashboard: *"Card payments are off — connect
Stripe"*, linking to Settings → Payments. Previously it would have discovered this when a
client reached the pay page.

A customer who hits the refusal reads *"Card payment isn't available for this booking yet.
Please get in touch and we'll arrange payment with you directly."* — not the raw code,
which is what the page used to print.

---

## 2. The calendar — RESOLVED 2026-10-13 (§28)

**This section described the gap. It is now built.** Two levels:

- **Each worker connects their own Google account** (Settings → Staff → *Connect Google*).
  That calendar is their real diary: it is the **only** calendar read to decide whether
  they are free, and it receives their own jobs.
- **The organisation can also keep one shared calendar** (Settings → Integrations) showing
  everyone, each person in their own colour. It is **write-only**.

⚠ **The shared calendar is never read for availability**, and that is the correctness of
the whole feature rather than a detail. It holds every worker's jobs, so two people
shooting at the same hour appear on it as an overlap when they are not one. Reading it
would report the whole company busy whenever any single person was, and get worse with
every hire. Overlaps there are expected and mean nothing. Double-booking is prevented
where it is genuinely true: `booking_slots_no_overlap` (partitioned by worker) plus that
one worker's own calendar.

Mirroring defaults to **off**. That default is load-bearing: the owner's org already has a
connected Google account whose primary calendar IS the calendar the legacy credential
writes to, so turning mirroring on for everyone would have written every existing booking
there a second time.

**Not verified end to end**, and this is the one thing in this document that is not. The
Google leg needs a second real Google account and a browser consent screen, which cannot
be done from a terminal. What WAS verified: the availability engine still blocks the right
hours after the refactor (BK-2026-134 at 09:00 UTC correctly blocks 11:00 Malta;
BK-2026-139 blocks 15:00–16:00), and every changed function type-checks and deploys. The
legacy path is unchanged by construction — `CalendarTarget` is an **optional** parameter
that falls back to exactly the previous env credential, so no existing call site changed
behaviour. **How to test it is in §8.**

## 2b. The original finding (for the record)

**Another org's bookings cannot reach the owner's Google Calendar.** `ensureBookingEvent`
and `ensureWorkEvent` both return early unless the booking's org matches the
`CALENDAR_ORG_ID` secret, and that secret **is set** in the live project (verified).

But the consequence is the honest headline: **a second organization gets no calendar at
all, silently.** `GOOGLE_CALENDAR_ID` and `GOOGLE_OAUTH_REFRESH_TOKEN` are single
env-var credentials for one Google account. A second org's bookings simply never produce
an event, and nothing tells them.

This is **not** ready for a second organization. It IS fine for adding a person to the
*existing* organization, which is what is happening tomorrow — her bookings are the
owner's org's bookings and land on the same calendar, which is what you want.

The groundwork for the real fix already exists: `org_google_accounts` holds a per-org
Google credential with the refresh token in Supabase Vault, `google_send_credentials(p_org)`
reads it, and the connect flow is built (`connect-google-start`, `connect-google-callback`,
`connect-google-status`, `disconnect-google`). What is missing is routing
`_shared/google-calendar.ts` through that per-org credential instead of the env vars.

⚠ That work **cannot be verified without a second real Google account**, so it should not
be shipped the day before giving someone access. Scoped as its own batch.

---

## 3. Data isolation between organizations: verified good

Every one of the 25 tables in `public` has RLS enabled (verified). Org-scoped tables carry
`org_id` and policies built on `is_org_admin(org_id)`.

Four tables have RLS on with **no policies at all** — `org_google_accounts`,
`google_oauth_states`, `invoice_counters`, `platform_admins` — which is the deliberate
deny-all pattern: `service_role` bypasses RLS, everyone else gets nothing. Confirmed that
`anon` and `authenticated` hold **no SELECT/INSERT/UPDATE/DELETE** on the credential
tables, so **an org admin cannot read their own Google refresh token**, which is the point.

`creator_label(org, user)` returns NULL when asked about a user outside the org passed in
(verified), so the new ownership trail cannot be used to read names across tenants.

**Fixed while here:** a blanket `GRANT ALL` had left `anon` and `authenticated` holding
**TRUNCATE on every table**. RLS does not apply to TRUNCATE — it is table-level — so that
privilege sidestepped every policy in the schema: one statement would have emptied
`invoice_counters` (destroying every org's invoice numbering) or `org_google_accounts`
(disconnecting everyone's Google). Not reachable through PostgREST, which has no TRUNCATE
verb, so this was defence-in-depth rather than an open door. Now revoked; verified zero
tables still grant it.

---

## 4. Inside one organization there are no permissions — and that is the honest answer

Across organizations: fully isolated. **Within** one: an **admin can see and change
everything** — every booking, invoice, client, payment and cost — and can delete any of
it. The worker scope in the sidebar is a **view filter, not a permission** (an explicit
earlier decision: *"filter now, permissions later"*).

So "without one deleting or editing others' information" is **true between organizations
and false within one**. Anyone added as an admin is a full partner in that org's data.
For a spouse that is probably exactly right. For a freelance second shooter it is not,
and a worker-level role does not exist yet.

**Fixed while here — privilege escalation.** `is_org_admin` treats `owner` and `admin`
identically, and `add_org_member` let an admin pass any role. An **admin could add their
own email as `owner`**, then remove the real owner (`remove_org_member` only protects the
*last* owner, and by then there would have been two). One call, full takeover.
`add_org_member` now requires owner (or platform admin) to grant the owner role, or to
re-role an existing owner. `is_org_owner(p_org)` added for it.

---

## 5. Can a new organization set itself up unaided?

| Thing | Self-serve? | Where |
|---|---|---|
| Company identity, VAT no., invoice prefix, footer | **Yes** | Settings → Company |
| Invoice numbering | **Yes**, per-org (`invoice_counters` is keyed `(org_id, year)`) | automatic |
| Payment terms, email templates, sender | **Yes** | Settings → Email |
| Gmail sending (per-org OAuth, token in Vault) | **Yes** | Settings → Email → Connect Google |
| Stripe (own account, direct charges) | **Yes** | Settings → Payments |
| Services, pricing, working hours | **Yes** | Settings → Services / Staff |
| Team access | **Yes** | Settings → Team |
| Worker ↔ login link | **Yes, new** | Settings → Staff → "Signs in as" |
| **Google Calendar** | **No** — single shared credential | see §2 |

No hardcoded owner email, calendar id or base URL was found in any Edge Function
(grepped). The remaining single-tenant pieces are the three calendar env vars.

---

## 6. Runbook: giving someone access to your organization

A **login** and a **bookable worker** are two different records. Most of the confusion
here comes from that, so do both.

**Updated 2026-10-13: invitations (§27) removed the awkward first step.** She no longer
has to sign in before you can set her up.

1. **Invite her.** Settings → **Team** → her email → role **Admin** → fill in *Also add as
   a worker* with her name and pick her calendar colour → **Send invitation**. If she
   already has an account she is added on the spot and the toast says so; if not, the
   invitation waits.
2. **She signs in.** Send her `https://johnfabiomb.com/bookings/login` (Google or a magic
   link). The invitation is claimed on that first page load — `claim_org_invites()` runs
   inside `resolveRole` **before** membership is read — so she lands with access and her
   worker row already created and linked to her login. No "no access" screen.
3. **Give her services and hours.** Settings → Staff → *Services & hours* on her row.
   Without this she is bookable in name only and the availability picker has nothing to
   offer.
4. **Connect her calendar.** Settings → Staff → her row → **Connect Google**, signed in as
   her. See §8 for how to check it landed on the right calendar.

The older manual path still works if you prefer it: create the worker under Staff and set
**"Signs in as"** to her email once she has an account.

**Fixed while here — the trap that would have caught you at step 2.** The Team tab offered
a **"Staff — a worker"** role, which is exactly what you would pick for someone who shoots
for you. But sign-in only accepts `owner`/`admin`, so she would have signed in and been
told she has no access, with nothing anywhere explaining why. `staff` is no longer offered.
`owner` is not offered either, because only an owner can grant it — showing an admin an
option that always fails is worse than not showing it.

**Fixed while here — the link was impossible.** `staff.user_id` is what
`current_staff_id()` resolves and what the "a worker may read their own bookings" policy is
built on, but `saveStaff()` never wrote the column. Every staff row except the seeded
owner's had `user_id` NULL, and there was **no way in the app to set it** — a second worker
could never be joined to the person who logs in. Now `link_staff_user(p_staff, p_email)`,
which validates against org membership so a worker can only ever be linked to someone who
already has access, and refuses with a named reason if that login already belongs to
another worker.

---

## 7. Ownership trail (the "who created it" audit)

`created_by` now records the person on `invoices`, `payments`, `expenses`, `work_items`
and `clients`, plus `created_by_user` on `bookings`.

**Why bookings is named differently, and why it matters.** `bookings.created_by` **already
existed** as TEXT holding `'admin' | 'client'` — it is not an audit field at all, it
decides whether a tentative booking **blocks its slot** and gates the client-insert
policy. `ADD COLUMN IF NOT EXISTS created_by UUID` silently did nothing and only surfaced
when a view failed on `creator_label(uuid, text)`. Overloading that name would have broken
double-booking prevention.

Design notes:
- **`DEFAULT auth.uid()`** — the value comes from the verified JWT inside the database, so
  the app never sends it and therefore cannot forge it.
- An Edge Function on the service key has no `auth.uid()`, so its rows record NULL, which
  correctly reads as *"the system did this"* (a Stripe webhook, not a person).
- **`ON DELETE SET NULL`, never CASCADE** — removing a user account must never delete the
  invoices they entered. Money records outlive staff.
- **Not backfilled.** Every existing row was created by the owner working alone, but
  writing his id onto them would be inventing an audit trail, and an invented audit trail
  is worth nothing. NULL means "before we recorded this", and the UI hides the field
  entirely rather than showing "Added by —".
- `creator_label()` prefers the person's **staff name** over their login email, because a
  name is what you recognise.

**No person's name goes on the invoice document.** An invoice's legal issuer is the
**organisation** — Maltese VAT cares about the registered business, not who clicked the
button. This is an internal trail for the day someone asks "who entered this €200?".

Shown in: booking detail ("Added by"), the Invoices table ("Raised by"), and the work card
(a quiet "by …").

---

## 8. How to test the calendars

30 seconds each, in this order.

**A — your own calendar still works (regression).** Create a booking for yourself as
usual. The event should appear on your Google Calendar exactly as it always has. Nothing
about your setup changed: you have no worker-level calendar connected, so you fall through
to the same credential as before.

**B — a second worker's own calendar.** Settings → **Staff** → her row → **Connect
Google** → sign in **as her** (the consent screen is pre-filled with her address — if it
offers yours, stop; connecting the wrong account is tedious to unpick). Her row should
then read *"Calendar: her@email"*. Now create a booking assigned to **her**. The event
must land on **her** calendar and **not** on yours. That is the whole feature in one check.

**C — her diary blocks her, and not you.** Put a personal event on her Google calendar for
some hour. Open a new booking, pick **her**, go to that day: that hour should warn as
busy. Switch the worker to **you** on the same day: it must **not** be busy. If it blocks
you too, something is reading the wrong calendar — tell me, because that is the bug this
design exists to prevent.

**D — the shared overview (optional).** Settings → **Integrations** → tick *Copy every
booking to one shared calendar*. Give each worker a colour under Staff. New bookings then
appear on both that worker's calendar and the shared one, colour-coded by person. Overlaps
on it are normal — do not read anything into them.

**If a connection breaks**, her Staff row shows the last error, and
`staff_calendar_status` surfaces it — so a dead token is visible rather than silently
producing no events.

## 9. What is still open

1. **No worker-level role** (§4). Anyone given access is a full admin of that org: they
   see and can change every booking, invoice, client, payment and cost. The worker scope in
   the sidebar is a view filter, not a permission. This is the next real piece of work, and
   it needs a decision first — what should a worker see? Their own jobs and nothing else,
   or their own jobs plus the client list? Prices? That answer shapes the RLS.
2. **Calendar OAuth is unverified end to end** (§2) — needs a second Google account and a
   browser. §8 is the 30-second test.
3. **The compromised `sbp_` personal access token** in `fpv-pilot-page/credentials` is
   still not rotated. It grants full control of the project. Unrelated to multi-tenancy
   and more urgent than all of it.
