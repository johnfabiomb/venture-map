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
- Clients: **org-wide, shared** (corrected by John 2026-10-12: *"a client information is
  a client information, it doesn't change, clients can be shared for sure"*). A client
  record — company, VAT, billing address — belongs to the business, not to whoever
  happens to shoot for them. The earlier per-worker filter was removed.

### 4. A filter now; permissions later
Build the selector and the scoping. No RLS changes yet. The split in the menu is what
makes a later permission layer a small change rather than a rewrite.


---

## Built (2026-10-12)

**Part 1 — per-worker scope.** Shipped. Switcher in the shell, every module scoped,
booking form pre-fills the worker, menu split into worker-scoped and Organization groups,
`get_profit(p_staff)` returning Contribution vs Profit.

**Part 2 — work tasks with reserved time.** Built.
- `booking_slots.booking_id` nullable + `work_item_id`, CHECK exactly one owner.
- `slot_set_blocking` always blocks a work slot.
- `get_busy_ranges` LEFT-joins so public availability sees reserved time.
- `work_item_bookings` many-to-many, backfilled.
- `ensureWorkEvent` + `sync-work-event` for Google Calendar.
- `booking_summary.work_count` / `work_status` for the list badge.
- `ui/work-editor/` reusing the availability picker.

### Still open
- The work board's columns are still driven by `production_status`; reserved time does
  not yet drive a "this week" view of post-production.
- A work block's calendar event is not deleted when the task itself is deleted (the
  booking path does this via `cancel-booking`); `deleteWorkItem` should pass its event
  ids to `sync-work-event`'s `deleteEventIds`.

---

## Next batch (John, 2026-10-12) — queued, not started

1. **A real select component.** The native `<select>` looks different in every browser
   and does not match the rest of the UI (his screenshot: the sidebar worker select vs
   the form's Worker field). Wanted: a single universal control, browser-independent,
   **with search**, in the spirit of select2 / ng-select. Then replace EVERY select in
   the admin with it. Check what else it needs while building (clear, multi-select,
   keyboard, empty state, mobile).
2. **Hide the Worker field when the scope already says who.** Creating a booking or a
   work task inside a selected worker must not ask again. Applies to every module.
3. **Invoices should record who raised them** so it is visible who created what. He is
   unsure whether this is right — *"check what legally and organizationally makes sense
   or not IN ALL THE MODULES."* So: audit every module for created-by / ownership, and
   report what genuinely matters (VAT/accounting: an invoice's issuer is the ORG, not a
   person; but an internal audit trail of who raised it is normal and useful).

---

## Batch 2 (John, 2026-10-12) — done

### Work task as a ticket
Asked for: *"the job this cover should be a check first… we should also show status
there and move the ticket by selecting the new status in the modal… try to include all
the fields of the task in the modal, those that make sense, imagine Trello or Jira"*,
then *"it needs to be searchable, there are so many bookings"*, then *"I would like to
add a description… in the calendar it says 'Work: To edit' but I never selected to edit,
I don't find any option to select what kind of work I'm gonna do"*.

Shipped in `ui/work-editor/`: details (free text), **type of work**, **status**,
checklist, a gated + searchable multi-select job picker, assignee always shown and
pre-filled from the scope.

**Why "work type" is a table and not a constant.** Payment methods are a TypeScript
constant (`METHOD_LABEL`) and that is the obvious precedent — but the *calendar* needs
the label too, so a constant would have to be duplicated into
`supabase/functions/_shared/booking-event.ts`, and the two copies would disagree the
first time a type was renamed. `work_types` (§25) mirrors `work_stages`' shape minus the
colour, so the existing `ui/stage-manager/` can be generalised to manage both later with
no migration. Managed from the board's **cog → Types of work & board**
(`ui/work-settings/`), which is also where the archive window lives and where future
work settings go — John: *"maybe a cog for that and we can add specific work settings when
we need more things."* Deleting a type clears it off the tasks that used it via
`delete_work_type`, in one transaction: `work_type` holds a key with no FK, so there is
nothing in the database to stop a dead reference.

**Why the calendar said "Work: To edit".** `ensureWorkEvent` built its first line from
`PROGRESS_LABEL[production_status]` — a hardcoded map of the original four stages. Two
bugs in one line: it showed the board COLUMN under the word "Work" (so it looked like a
work type that had never been chosen), and it would print a raw key like `client_review`
for any column added since stages became rows. It reads the type for that line now, and
the stage's own label from `work_stages` for the line beneath.

### Delivered work ages off the board
Asked for: *"after a ticket was sent to deliver for over three or four days… it should go
somewhere, a kind of backlog but not backlog — see how Jira does it, it goes away, you
don't see it anymore unless you have a button to see the tickets that went through."*

`work_items.done_at` (trigger-maintained) + `work_board.is_archived`, computed on read
against `organizations.booking_params.work_archive_days` (default 3), plus a **History**
toggle on the board. Deliberately:
- **Nothing is deleted and nothing moves.** An archived card is still in its column with
  its stage intact; only the board's filter changes. A "move it to an archive stage"
  design would have rewritten `production_status` and lost where the work actually ended.
- **`is_done` comes from the stage, not from `done_at`.** Un-flag a stage as terminal and
  its cards return to the board immediately, with no backfill.
- **The trigger stamps only the FIRST arrival**, so editing a delivered card — or
  dragging it within its column — cannot push its archive date three more days out.
- Existing delivered cards were backfilled from `created_at`, not `now()`: dating them
  from now would have held the entire existing pile on the board for another three days,
  which is the opposite of the point.

### Scope reactivity (the bugs behind "some stuff is not working")
Asked for: *"I want that viewing select of the worker to have a state so when I select
John Montaño or Posveda it stays there even if I reload… also when I change the viewing
for another worker the sidebar booking count doesn't update, in clients neither, and some
tabs in the booking section don't update either."*

Two distinct faults:
1. **The scope was never read back.** `persistCache()` saved `staff`; `readCache()`
   returned `{ uid, org }` and dropped it. Every page load silently reverted to the whole
   organisation. One line.
2. **Nothing re-queried on a switch.** `scoped()` applies the scope at query time, but a
   query only re-runs when something asks it to, and every page had its own fetched state
   and its own `ngOnInit`. The dashboard was the only page that got this right.

Fixed by moving the rule out of the pages: `core/utils/scope-reload.util.ts`
(`onScopeChange`). `BookingDataService` uses it for the shared caches — so the sidebar
counts and anything reading `bookings()` now follow the scope with no page-level code —
and the bookings list, invoices list and work board use it as their **first load as well
as their refresh**, which is what keeps it from double-fetching.

**The Clients count is unchanged on purpose.** Clients are organisation-wide by John's own
decision (*"a client information is a client information, it doesn't change"*), so that
number is the same whoever you are viewing. Nothing to fix there.

### Also fixed while in here
- The **stage manager had no trigger** — columns were editable in code only. Added a
  **Columns** button.
- The board compared stages to the literal `'delivered'` in `overdueCount` and
  `isOverdue`, which is exactly what `is_done` exists to prevent.
- Two `work_board` readers (`loadJobs`, `workItemForBooking`) each had their own column
  list and mapping; a column added to one was silently null in the other. Now one
  `WORK_BOARD_COLS` constant and one `mapWorkJob`.

### Still open
- `.menu` has three drifted local copies (56 / 86 / 72 declarations) in booking detail,
  booking list and invoices. The canonical one is now in `admin.shared.scss`; the three
  local blocks still win by source order, so they were left alone rather than reconciled
  blind — deleting them wants its own pass with the visual diff in front of you.
- The ownership / "who created it" audit across all modules (batch 1, item 3) is still
  unstarted.
- Reserved time still does not drive a "this week" view of post-production.
