import {
  BookingsAuthService
} from "./chunk-AO4LSMG5.js";
import {
  bookingsDb
} from "./chunk-KKVK7E5Z.js";
import {
  inject,
  ɵɵdefineInjectable
} from "./chunk-VEX6DIAJ.js";
import {
  __async,
  __objRest
} from "./chunk-TWWAJFRB.js";

// src/app/booking/core/services/booking-admin.service.ts
var GCAL_COLORS = [
  { id: "1", name: "Lavender", hex: "#7986cb" },
  { id: "2", name: "Sage", hex: "#33b679" },
  { id: "3", name: "Grape", hex: "#8e24aa" },
  { id: "4", name: "Flamingo", hex: "#e67c73" },
  { id: "5", name: "Banana", hex: "#f6bf26" },
  { id: "6", name: "Tangerine", hex: "#f4511e" },
  { id: "7", name: "Peacock", hex: "#039be5" },
  { id: "8", name: "Graphite", hex: "#616161" },
  { id: "9", name: "Blueberry", hex: "#3f51b5" },
  { id: "10", name: "Basil", hex: "#0b8043" },
  { id: "11", name: "Tomato", hex: "#d50000" }
];
var colorHex = (id) => GCAL_COLORS.find((c) => c.id === id)?.hex ?? "#94a3b8";
var BookingAdminService = class _BookingAdminService {
  constructor() {
    this.auth = inject(BookingsAuthService);
  }
  // ── Services ──────────────────────────────────────────────────────
  // ── Work blocks: reserved post-production time ───────────────────────────
  // These are rows in `booking_slots` with work_item_id set. That is deliberate — the
  // no-overlap EXCLUDE constraint lives on that table, so reserved editing time really
  // does stop a shoot being booked over it. A separate table could not do that.
  /** A work item's reserved time blocks, earliest first. */
  getWorkSlots(workItemId) {
    return __async(this, null, function* () {
      const { data } = yield bookingsDb.from("booking_slots").select("start_at, end_at, label").eq("work_item_id", workItemId).is("deleted_at", null).order("start_at");
      return (data ?? []).map((r) => {
        const x = r;
        return { start: x.start_at, end: x.end_at, label: x.label };
      });
    });
  }
  /**
   * Replace a work item's blocks. Returns the ones that could NOT be reserved because
   * that time is already taken — the caller must say so rather than quietly dropping
   * them, since the whole point is knowing what is actually free.
   */
  setWorkSlots(orgId, workItemId, staffId, slots) {
    return __async(this, null, function* () {
      const { data: existing } = yield bookingsDb.from("booking_slots").select("id, google_event_id").eq("work_item_id", workItemId).is("deleted_at", null);
      const orphanEventIds = (existing ?? []).map((r) => r.google_event_id).filter((x) => !!x);
      yield bookingsDb.from("booking_slots").delete().eq("work_item_id", workItemId);
      const clashes = [];
      for (const s of slots) {
        const { error } = yield bookingsDb.from("booking_slots").insert({
          org_id: orgId,
          work_item_id: workItemId,
          staff_id: staffId,
          start_at: s.start,
          end_at: s.end,
          label: s.label ?? null
        });
        if (error) {
          if (error.code === "23P01")
            clashes.push(s);
          else {
            console.error("[BookingAdmin] setWorkSlots:", error);
            clashes.push(s);
          }
        }
      }
      return { clashes, orphanEventIds };
    });
  }
  /** Push the work item's blocks to Google Calendar (fire and forget, like bookings). */
  syncWorkEvent(workItemId, deleteEventIds) {
    void bookingsDb.functions.invoke("sync-work-event", { body: { workItemId, deleteEventIds } }).then(({ error }) => {
      if (error)
        console.warn("[BookingAdmin] work calendar sync failed:", error.message);
    });
  }
  /** Bookings this work item covers (many-to-many). */
  getWorkBookings(workItemId) {
    return __async(this, null, function* () {
      const { data } = yield bookingsDb.from("work_item_bookings").select("booking_id").eq("work_item_id", workItemId);
      return (data ?? []).map((r) => r.booking_id);
    });
  }
  /** Replace the set of jobs this work covers. Links are re-creatable, so hard writes. */
  setWorkBookings(orgId, workItemId, bookingIds) {
    return __async(this, null, function* () {
      yield bookingsDb.from("work_item_bookings").delete().eq("work_item_id", workItemId);
      if (!bookingIds.length)
        return;
      const { error } = yield bookingsDb.from("work_item_bookings").insert(bookingIds.map((booking_id) => ({ org_id: orgId, work_item_id: workItemId, booking_id })));
      if (error)
        console.error("[BookingAdmin] setWorkBookings:", error);
    });
  }
  listServices(orgId) {
    return __async(this, null, function* () {
      const staff = this.auth.staffId();
      if (!staff) {
        const { data: data2 } = yield bookingsDb.from("services").select("*").eq("org_id", orgId).order("name");
        return data2 ?? [];
      }
      const { data } = yield bookingsDb.from("services").select("*, staff_services!inner(staff_id)").eq("org_id", orgId).eq("staff_services.staff_id", staff).order("name");
      return data ?? [];
    });
  }
  saveService(orgId, s) {
    return __async(this, null, function* () {
      const row = {
        org_id: orgId,
        name: s.name,
        description: s.description ?? null,
        pricing: s.pricing,
        min_hours: s.min_hours,
        max_hours: s.max_hours,
        is_active: s.is_active ?? true,
        task_template: s.task_template ?? []
      };
      if (s.id)
        yield bookingsDb.from("services").update(row).eq("id", s.id);
      else
        yield bookingsDb.from("services").insert(row);
    });
  }
  deleteService(id) {
    return __async(this, null, function* () {
      yield bookingsDb.rpc("soft_delete", { p_table: "services", p_id: id });
    });
  }
  // ── Staff ─────────────────────────────────────────────────────────
  listStaff(orgId) {
    return __async(this, null, function* () {
      const { data } = yield bookingsDb.from("staff").select("*").eq("org_id", orgId).order("name");
      return data ?? [];
    });
  }
  /** Returns the worker's id — a NEW worker has to be linkable to a login in the same
   *  action, and `user_id` is written only through `linkStaffUser` (it is validated
   *  against org membership, so it must not be a plain column write). */
  saveStaff(orgId, s) {
    return __async(this, null, function* () {
      const row = { org_id: orgId, name: s.name, email: s.email ?? null, is_bookable: s.is_bookable ?? true };
      if (s.id) {
        const { error: error2 } = yield bookingsDb.from("staff").update(row).eq("id", s.id);
        if (error2) {
          console.error("[BookingAdmin] saveStaff:", error2);
          return null;
        }
        return s.id;
      }
      const { data, error } = yield bookingsDb.from("staff").insert(row).select("id").single();
      if (error) {
        console.error("[BookingAdmin] saveStaff:", error);
        return null;
      }
      return data.id;
    });
  }
  deleteStaff(id) {
    return __async(this, null, function* () {
      yield bookingsDb.rpc("soft_delete", { p_table: "staff", p_id: id });
    });
  }
  // ── Staff ↔ Service assignment + schedule ─────────────────────────
  listStaffServices() {
    return __async(this, null, function* () {
      const { data } = yield bookingsDb.from("staff_services").select("staff_id, service_id, working_hours");
      return data ?? [];
    });
  }
  assignService(staffId, serviceId, workingHours) {
    return __async(this, null, function* () {
      yield bookingsDb.from("staff_services").upsert({ staff_id: staffId, service_id: serviceId, working_hours: workingHours });
    });
  }
  unassignService(staffId, serviceId) {
    return __async(this, null, function* () {
      yield bookingsDb.from("staff_services").delete().eq("staff_id", staffId).eq("service_id", serviceId);
    });
  }
  // ── Org settings ──────────────────────────────────────────────────
  getOrgSettings(orgId) {
    return __async(this, null, function* () {
      const { data } = yield bookingsDb.from("organizations").select("timezone, currency, booking_params, features, invoice_details, invoice_settings, stripe_charges_enabled, platform_charges_allowed, calendar_id, calendar_mirror").eq("id", orgId).maybeSingle();
      return data ?? null;
    });
  }
  static {
    this.WORK_BOARD_COLS = "id, title, production_status, booking_id, booking_start_at, booking_end_at, is_active, assignee_id, assignee_name, due_at, client_name, service_name, description, work_type, work_type_label, stage_label, stage_is_done, done_at, is_archived, created_by, created_by_name";
  }
  mapWorkJob(w) {
    return {
      id: w["id"],
      bookingId: w["booking_id"] ?? null,
      title: w["title"],
      start_at: w["booking_start_at"] ?? null,
      bookingEndAt: w["booking_end_at"] ?? null,
      production_status: w["production_status"],
      isActive: !!w["is_active"],
      assigneeId: w["assignee_id"] ?? null,
      assigneeName: w["assignee_name"] ?? null,
      dueAt: w["due_at"] ?? null,
      clientName: w["client_name"] ?? null,
      serviceName: w["service_name"] ?? null,
      description: w["description"] ?? null,
      workType: w["work_type"] ?? null,
      workTypeLabel: w["work_type_label"] ?? null,
      stageLabel: w["stage_label"] ?? null,
      stageIsDone: !!w["stage_is_done"],
      doneAt: w["done_at"] ?? null,
      isArchived: !!w["is_archived"],
      createdByName: w["created_by_name"] ?? null
    };
  }
  loadJobs(orgId) {
    return __async(this, null, function* () {
      const staff = this.auth.staffId();
      let q = bookingsDb.from("work_board").select(_BookingAdminService.WORK_BOARD_COLS).eq("org_id", orgId);
      if (staff)
        q = q.or(`assignee_id.eq.${staff},assignee_id.is.null`);
      const { data } = yield q.order("sort").order("created_at");
      return (data ?? []).map((w) => this.mapWorkJob(w));
    });
  }
  /** Pull a backlog card onto the board (or push one back). */
  activateCard(id) {
    return __async(this, null, function* () {
      yield bookingsDb.from("work_items").update({ activated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", id);
    });
  }
  backlogCard(id) {
    return __async(this, null, function* () {
      yield bookingsDb.from("work_items").update({ activated_at: null }).eq("id", id);
    });
  }
  /** Assign a card to a staff member (or clear it). */
  assignCard(id, staffId) {
    return __async(this, null, function* () {
      yield bookingsDb.from("work_items").update({ assignee_id: staffId }).eq("id", id);
    });
  }
  /** Set / clear a card's deliver-by date (yyyy-MM-dd or null). */
  setDue(id, dueAt) {
    return __async(this, null, function* () {
      yield bookingsDb.from("work_items").update({ due_at: dueAt }).eq("id", id);
    });
  }
  /** Bookings the admin can attach a new work card to (most recent first). */
  loadJobOptions(orgId) {
    return __async(this, null, function* () {
      const { data } = yield bookingsDb.from("booking_summary").select("id, title, start_at, client_name").eq("org_id", orgId).order("start_at", { ascending: false }).limit(100);
      return (data ?? []).map((b) => ({
        id: b["id"],
        title: b["title"],
        start_at: b["start_at"],
        clientName: b["client_name"] ?? null
      }));
    });
  }
  /** Create a work card — standalone (bookingId null) or linked to a booking (seeds its service tasks). */
  /** Returns the new card's id — the work editor needs it to attach slots and links. */
  addWorkItem(orgId, bookingId, title) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("create_work_item", { p_org: orgId, p_booking: bookingId, p_title: title });
      if (error) {
        console.error("[BookingAdmin] addWorkItem:", error);
        return null;
      }
      const row = Array.isArray(data) ? data[0] : data;
      return (typeof row === "string" ? row : row?.id) ?? null;
    });
  }
  /** Patch a card's own fields. Only the keys passed are written, so a caller that knows
   *  about the title can never blank a description it has never heard of. */
  updateWorkItem(id, patch) {
    return __async(this, null, function* () {
      if (Object.keys(patch).length === 0)
        return;
      const { error } = yield bookingsDb.from("work_items").update(patch).eq("id", id);
      if (error)
        console.error("[BookingAdmin] updateWorkItem:", error);
    });
  }
  /** The kinds of work this org does (§25). */
  listWorkTypes(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.from("work_types").select("id, key, label, sort").eq("org_id", orgId).order("sort");
      if (error) {
        console.error("[BookingAdmin] listWorkTypes:", error);
        return [];
      }
      return data ?? [];
    });
  }
  /** Add or rename a type. New ones get a slug key derived from the label, uniquified
   *  against existing keys so re-adding a deleted name can't collide with it. */
  saveWorkType(orgId, wt) {
    return __async(this, null, function* () {
      const label = wt.label.trim();
      if (wt.id) {
        const { error: error2 } = yield bookingsDb.from("work_types").update({ label }).eq("id", wt.id);
        return error2 ? { error: error2.message } : {};
      }
      const base = label.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || "type";
      const existing = yield this.listWorkTypes(orgId);
      let key = base, n = 2;
      while (existing.some((e) => e.key === key))
        key = `${base}_${n++}`;
      const sort = existing.length ? Math.max(...existing.map((e) => e.sort)) + 1 : 1;
      const { error } = yield bookingsDb.from("work_types").insert({ org_id: orgId, key, label, sort });
      return error ? { error: error.message } : {};
    });
  }
  reorderWorkTypes(ids) {
    return __async(this, null, function* () {
      yield Promise.all(ids.map((id, i) => bookingsDb.from("work_types").update({ sort: i + 1 }).eq("id", id)));
    });
  }
  /** Soft-deletes the type AND clears it off the cards that used it, in one transaction —
   *  `work_type` holds a KEY with no FK, so a half-done delete leaves a dead reference. */
  deleteWorkType(typeId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("delete_work_type", { p_type: typeId });
      if (error)
        return { ok: false, error: error.message };
      return data ?? { ok: false };
    });
  }
  /**
   * Move a card to a board column. 'backlog' is not a stage — it is the absence of
   * `activated_at` — so the two cases are different writes. Lives here rather than in the
   * board component because the work editor's Status field performs the same move.
   */
  moveWorkCard(id, target, bookingId, isActive) {
    return __async(this, null, function* () {
      if (target === "backlog") {
        yield this.backlogCard(id);
        return;
      }
      if (!isActive)
        yield this.activateCard(id);
      yield this.setStage(id, target, bookingId);
    });
  }
  /**
   * The Work-board card for a booking, or null if it has none.
   * Lets the booking-detail page offer "add to the Work board" AFTER creation — until now
   * `needs_production` could only be chosen on the booking form, so a job you didn't flag
   * up front could never be put on the board.
   */
  workItemForBooking(bookingId) {
    return __async(this, null, function* () {
      const { data } = yield bookingsDb.from("work_board").select(_BookingAdminService.WORK_BOARD_COLS).eq("booking_id", bookingId).order("created_at", { ascending: true }).limit(1).maybeSingle();
      if (!data)
        return null;
      return this.mapWorkJob(data);
    });
  }
  /** Remove a card from the board (soft delete via RPC). Never touches the booking — only
   *  unflags it. The work_items → tasks cascade trigger hides its checklist automatically. */
  deleteWorkItem(id, bookingId) {
    return __async(this, null, function* () {
      const { data: slots } = yield bookingsDb.from("booking_slots").select("google_event_id").eq("work_item_id", id).is("deleted_at", null);
      const eventIds = (slots ?? []).map((r) => r.google_event_id).filter((x) => !!x);
      yield bookingsDb.rpc("soft_delete", { p_table: "work_items", p_id: id });
      yield bookingsDb.from("booking_slots").delete().eq("work_item_id", id);
      if (eventIds.length)
        this.syncWorkEvent(id, eventIds);
      if (bookingId)
        yield bookingsDb.from("bookings").update({ needs_production: false }).eq("id", bookingId);
    });
  }
  // ── Board stages (the columns) ───────────────────────────────────────────
  listWorkStages(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.from("work_stages").select("id, key, label, sort, is_done, color_id").eq("org_id", orgId).order("sort");
      if (error) {
        console.error("[BookingAdmin] listWorkStages:", error);
        return [];
      }
      return data ?? [];
    });
  }
  /** Create or rename a stage. The KEY is generated once and never changes — renaming a
   *  label must not orphan every card sitting in that column. */
  saveWorkStage(orgId, st) {
    return __async(this, null, function* () {
      if (st.id) {
        const { error: error2 } = yield bookingsDb.from("work_stages").update({ label: st.label.trim(), is_done: st.is_done ?? false, color_id: st.color_id ?? null }).eq("id", st.id);
        return error2 ? { error: error2.message } : {};
      }
      const base = st.label.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || "stage";
      const existing = yield this.listWorkStages(orgId);
      let key = base, n = 2;
      while (existing.some((e) => e.key === key))
        key = `${base}_${n++}`;
      const sort = existing.length ? Math.max(...existing.map((e) => e.sort)) + 1 : 1;
      const { error } = yield bookingsDb.from("work_stages").insert({
        org_id: orgId,
        key,
        label: st.label.trim(),
        sort,
        is_done: st.is_done ?? false,
        color_id: st.color_id ?? null
      });
      return error ? { error: error.message } : {};
    });
  }
  reorderWorkStages(ids) {
    return __async(this, null, function* () {
      yield Promise.all(ids.map((id, i) => bookingsDb.from("work_stages").update({ sort: i + 1 }).eq("id", id)));
    });
  }
  /** Delete a stage, moving its cards to another. Server-side so the move and the delete
   *  cannot half-happen and leave cards pointing at a stage that is gone. */
  deleteWorkStage(stageId, moveToId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("delete_work_stage", { p_stage: stageId, p_move_to: moveToId });
      if (error)
        return { ok: false, error: error.message };
      const r = data ?? {};
      return { ok: !!r.ok, moved: r.moved, error: r.error };
    });
  }
  loadTasks(orgId) {
    return __async(this, null, function* () {
      const { data } = yield bookingsDb.from("tasks").select("id, work_item_id, title, is_done, due_at").eq("org_id", orgId).order("sort").order("created_at");
      return data ?? [];
    });
  }
  toggleTask(id, done) {
    return __async(this, null, function* () {
      yield bookingsDb.from("tasks").update({ is_done: done, done_at: done ? (/* @__PURE__ */ new Date()).toISOString() : null }).eq("id", id);
    });
  }
  addTask(orgId, workItemId, title) {
    return __async(this, null, function* () {
      yield bookingsDb.from("tasks").insert({ org_id: orgId, work_item_id: workItemId, title });
    });
  }
  removeTask(id) {
    return __async(this, null, function* () {
      yield bookingsDb.rpc("soft_delete", { p_table: "tasks", p_id: id });
    });
  }
  setStage(workItemId, stage, bookingId = null) {
    return __async(this, null, function* () {
      yield bookingsDb.from("work_items").update({ production_status: stage }).eq("id", workItemId);
      if (bookingId) {
        yield bookingsDb.from("bookings").update({ production_status: stage }).eq("id", bookingId);
        void bookingsDb.functions.invoke("sync-booking-event", { body: { bookingId } }).then(({ error }) => {
          if (error)
            console.warn("[BookingAdmin] calendar sync failed:", error.message);
        });
      }
    });
  }
  updateOrgSettings(orgId, patch) {
    return __async(this, null, function* () {
      const _a = patch, { stripe_charges_enabled: _s, platform_charges_allowed: _p } = _a, writable = __objRest(_a, ["stripe_charges_enabled", "platform_charges_allowed"]);
      yield bookingsDb.from("organizations").update(writable).eq("id", orgId);
    });
  }
  // ── Integrations ──────────────────────────────────────────────────
  checkIntegrations() {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.functions.invoke("check-integrations");
      if (error)
        return { error: error.message };
      return data;
    });
  }
  // ── Stripe Connect (per-org payouts) ──────────────────────────────
  /** Start (or resume) Stripe Connect onboarding; returns the hosted onboarding URL. */
  connectStripeStart(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.functions.invoke("connect-stripe-start", { body: { orgId } });
      if (error)
        return { error: error.message };
      return data;
    });
  }
  /** Read the org's Connect status (re-checks Stripe + caches the result). */
  connectStripeStatus(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.functions.invoke("connect-stripe-status", { body: { orgId } });
      if (error)
        return { connected: false, chargesEnabled: false, detailsSubmitted: false, error: error.message };
      return data;
    });
  }
  // ── Google / Gmail (per-org sending) ──────────────────────────────
  /** Start the Google consent flow; returns the URL to redirect the browser to. */
  connectGoogleStart(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.functions.invoke("connect-google-start", { body: { orgId } });
      if (error)
        return { error: error.message };
      return data;
    });
  }
  /**
   * Revoke at Google and forget the credential.
   * An Edge Function rather than an RPC because Postgres cannot call Google's revoke
   * endpoint — dropping the row alone would leave a token live on Google's side.
   */
  disconnectGoogle(orgId) {
    return __async(this, null, function* () {
      const { error } = yield bookingsDb.functions.invoke("disconnect-google", { body: { orgId } });
      if (error)
        throw new Error(error.message);
    });
  }
  // ── Organizations & members (platform-admin gated where required) ──
  /** Create a new organization (platform admin only). Returns the new org id. */
  createOrg(name, slug, timezone, currency) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("create_org", { p_name: name, p_slug: slug, p_timezone: timezone, p_currency: currency });
      if (error)
        return { error: error.message };
      return { id: data };
    });
  }
  listMembers(orgId) {
    return __async(this, null, function* () {
      const { data } = yield bookingsDb.rpc("list_org_members", { p_org: orgId });
      return data ?? [];
    });
  }
  /** Add/update a member by email. 'no_user' = they must sign in once first. */
  addMember(orgId, email, role) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("add_org_member", { p_org: orgId, p_email: email, p_role: role });
      if (error)
        return "error";
      return data ?? "error";
    });
  }
  /**
   * Every org member with their login email and the worker row they are linked to.
   * Drives the "this worker signs in as…" picker on the Staff page.
   */
  listMemberLogins(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("org_member_emails", { p_org: orgId });
      if (error) {
        console.error("[BookingAdmin] listMemberLogins:", error);
        return [];
      }
      return data ?? [];
    });
  }
  /**
   * Link a worker row to an org member's login — or clear it with an empty email.
   *
   * `staff.user_id` is what `current_staff_id()` resolves and what the "a worker may see
   * their own bookings" policy is built on, but `saveStaff` never wrote the column, so a
   * second worker could never be joined to the person who actually logs in. Goes through
   * an RPC because the link must be validated against org membership — a worker must not
   * be attachable to an arbitrary account.
   */
  linkStaffUser(staffId, email) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("link_staff_user", { p_staff: staffId, p_email: email });
      if (error)
        return { ok: false, error: error.message };
      return data ?? { ok: false };
    });
  }
  // ── Calendars (§28) ───────────────────────────────────────────────
  /** Every worker's calendar connection state. Never returns a token. */
  listStaffCalendars(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("staff_calendar_status", { p_org: orgId });
      if (error) {
        console.error("[BookingAdmin] listStaffCalendars:", error);
        return [];
      }
      return data ?? [];
    });
  }
  /** The colour this worker's jobs get on the ORGANISATION's shared calendar. Not applied
   *  to their own calendar — that is their diary and their colour scheme. */
  setStaffCalendarColor(staffId, colorId) {
    return __async(this, null, function* () {
      const { error } = yield bookingsDb.from("staff").update({ calendar_color_id: colorId }).eq("id", staffId);
      if (error)
        console.error("[BookingAdmin] setStaffCalendarColor:", error);
    });
  }
  /** Start Google consent for a WORKER's own calendar. Returns the URL to send them to. */
  connectStaffCalendar(staffId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.functions.invoke("connect-google-start", { body: { staffId } });
      if (error)
        return { error: error.message };
      const p = data;
      return p?.url ? { url: p.url } : { error: p?.error ?? "could not start" };
    });
  }
  disconnectStaffCalendar(staffId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.functions.invoke("disconnect-google", { body: { staffId } });
      if (error)
        return { ok: false, error: error.message };
      const p = data;
      return p?.error ? { ok: false, error: p.error } : { ok: true };
    });
  }
  // ── Invitations (§27) ─────────────────────────────────────────────
  /**
   * Invite someone by email. If they already have an account they are added immediately
   * (`added_now`), otherwise the invitation waits and is claimed on their first sign-in —
   * which is the point: nobody has to register, hit a "no access" wall, and come back.
   */
  inviteMember(orgId, email, role, staffName, staffColor) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("invite_org_member", {
        p_org: orgId,
        p_email: email,
        p_role: role,
        p_staff_name: staffName || null,
        p_staff_color: staffColor || null
      });
      if (error)
        return { ok: false, error: error.message };
      return data ?? { ok: false };
    });
  }
  listInvites(orgId) {
    return __async(this, null, function* () {
      const { data, error } = yield bookingsDb.rpc("list_org_invites", { p_org: orgId });
      if (error) {
        console.error("[BookingAdmin] listInvites:", error);
        return [];
      }
      return data ?? [];
    });
  }
  revokeInvite(id) {
    return __async(this, null, function* () {
      const { error } = yield bookingsDb.from("org_invites").delete().eq("id", id);
      if (error)
        console.error("[BookingAdmin] revokeInvite:", error);
    });
  }
  removeMember(orgId, userId) {
    return __async(this, null, function* () {
      const { error } = yield bookingsDb.rpc("remove_org_member", { p_org: orgId, p_user: userId });
      if (error)
        return { error: error.message };
      return { ok: true };
    });
  }
  static {
    this.\u0275fac = function BookingAdminService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingAdminService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingAdminService, factory: _BookingAdminService.\u0275fac, providedIn: "root" });
  }
};

export {
  GCAL_COLORS,
  colorHex,
  BookingAdminService
};
//# sourceMappingURL=chunk-RQDGKONB.js.map
