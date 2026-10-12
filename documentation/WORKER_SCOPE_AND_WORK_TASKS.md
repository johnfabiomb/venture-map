# Per-worker scope + work tasks in the calendar

Captured 2026-10-12 from John's brief. Two pieces of work, in his stated order:
**Part 1 first (per-worker scope), then Part 2 (work tasks).**

---

## Part 1 — See everything per worker

> "we are seeing everything per organization... I want a kind of select like the
> organization one where I can go to John Montaño and watch all the information,
> booking and stuff only for John Montaño, even the dashboard."

1. A **worker selector** in the shell, working like the existing organization
   switcher (persisted, global, survives reload).
2. Every module respects it: dashboard, bookings, invoices, costs & profit, work board.
3. **Creating a booking pre-selects that worker** — no worker dropdown to fill in,
   because the context already says who.
4. The **menu is split**: organization-level settings in one group, per-user things in
   another, so access can later be granted to one and not the other.
5. **Nothing about money or data may break.**

### What exists today
- `staff` table, 2 rows: John Montaño, Posveda. Org: John F. Montaño (1).
- `bookings.staff_id` and `invoices.staff_id` exist → both filter cleanly per worker.
- The dashboard ALREADY has a per-worker dropdown (`who` signal → `get_earnings(p_staff)`).
  That becomes the global selector rather than a second, conflicting control.
- Org switching: `BookingsAuthService.setActiveOrg()` + a localStorage cache. The worker
  selector should mirror that shape exactly.

### Known wrinkle — expenses have no worker
`expenses` attaches to a **booking** (which has a worker) or to **nothing**
(a standalone overhead: software, insurance, gear). So in a worker view:
- job-linked costs follow their booking's worker — fine;
- **overheads belong to no worker.** Counting them against one worker would be wrong,
  and hiding them makes a worker's profit look better than the business's.
→ decided below.

---

## Part 2 — Work tasks that occupy calendar time

> "I create a filming, and I create a task for editing... I want to occupy a slot in my
> calendar so I know I need to do that... so I know what is actually available instead of
> just hoping I will have time enough to edit."

1. Create a **work task from scratch** (not tied to any booking).
2. **Many-to-many with bookings**: one task can cover several shoots, one shoot can have
   several tasks.
3. A task can **reserve time blocks**, which appear in Google Calendar like a booking does.
4. The **bookings list shows task status** for a job.
5. Tables **mobile-first**, then desktop.

### What exists today
- `work_items` is already most of this: `booking_id` (nullable → standalone already
  supported, 2 such rows exist), `assignee_id`, `due_at`, `production_status`
  (to_edit / editing / to_deliver / delivered), `activated_at`, `sort`.
- `tasks` is a different thing: a checklist of sub-items under one booking. Not this.
- 7 work_items exist, 2 of them standalone.

### What is missing
- **Time blocks.** `work_items` has no start/end, so nothing can reach the calendar.
  Bookings get theirs from `booking_slots`; work needs the equivalent.
- **Many-to-many.** `work_items.booking_id` is a single FK.
- **Calendar push.** `ensureBookingEvent` only knows bookings.
- **Task status on the bookings list.**

---

## Open questions put to John
(answers recorded in the Decisions section below once given)

1. Standalone overheads in a per-worker money view — shared, hidden, or org-only?
2. Does reserved editing time **block** new bookings in that slot?
3. Which modules stay org-wide (clients, services, settings) vs per-worker?
4. Is this a view filter now, or also a permissions model (a worker who CANNOT see
   org-level things)?

## Decisions (John, 2026-10-12)

### 1. Overheads — org view only, using the standard accounting split
John: *"organization view, but make sure it makes sense, see how it's actually
professionally handled."*

The professional treatment is a **two-level P&L**, and it maps exactly onto this:

- **Direct costs** are attributable to a job (fuel to that shoot, the second shooter on
  that day). They belong to the worker who did the job.
- **Overheads / operating expenses** are the cost of being in business at all (software,
  insurance, gear). They belong to nobody in particular.

So a per-worker view shows **Contribution**, not Profit:

| View | Line |
|---|---|
| Worker | Revenue − direct costs = **Contribution** |
| Organization | Revenue − direct costs − overheads = **Profit** |

This is why the worker view must not be labelled "Profit": a worker never carries the
insurance bill, and if two workers each showed the full overhead you would double-count
the same payment the moment you compared or summed them. One real number, in one place,
and the worker view answers the question it CAN answer honestly: what did this person's
work contribute toward covering the overheads.

The Costs & profit page therefore changes label and composition with the scope, and says
which one it is on screen. Overheads stay visible and uncounted in a worker view
(listed, excluded from the total) rather than vanishing — hiding them would make a
worker's number look like the business's.

### 2. Reserved work time blocks everything
Editing time behaves exactly like a shoot: unavailable to clients AND warned about for
John. This is the whole point — "what is actually available" has to include the hours
already owed to post-production.

### 3. Org-wide: Settings and Staff only
Clients and Services become **per-worker views**:
- Services already are per-worker in the data (`staff_services`), so this just reflects
  what the schema already says.
- Clients: the page lists clients this worker has actually worked with.
  ⚠ The client PICKER on a booking form must still offer everyone — otherwise a worker
  could never take on a new client. Page filter ≠ picker filter.

### 4. A filter now; permissions later
Build the selector and the scoping. No RLS changes yet. The split in the menu is what
makes a later permission layer a small change rather than a rewrite.
