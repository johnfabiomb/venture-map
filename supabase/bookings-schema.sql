-- ============================================================================
-- JM BOOKINGS — FULL SCHEMA (MULTI-TENANT)  ·  single source of truth
-- ============================================================================
-- This one file builds the entire booking database, multi-tenant from day one,
-- and seeds the first organization (johnfabiomb) with John Montaño as the only
-- worker and two services. It is the single source of truth — all columns are
-- defined inline on their tables (no incremental ALTERs).
--
-- ⚠️  Running the RESET section DROPS every booking table (all data). Review
--     before applying to a live project.
--
-- Tenancy model:
--   organizations → org_members (owner|admin|staff) + platform_admins
--   staff (workers, one shared calendar each) → staff_services (M2M, per-pairing
--   working hours) → services (fixed duration + price)
--   clients / bookings / payments / booking_links all carry org_id.
--   Double-booking is prevented PER WORKER (staff_id) — services on the same
--   worker share the calendar; different workers may overlap.
-- ============================================================================

-- ── 0. RESET (comment out to keep data) ────────────────────────────────────
DROP VIEW  IF EXISTS public.booking_summary CASCADE;
DROP TABLE IF EXISTS public.deliveries      CASCADE;
DROP TABLE IF EXISTS public.invoice_lines   CASCADE;   -- before invoices (FK)
DROP TABLE IF EXISTS public.invoice_counters CASCADE;
DROP TABLE IF EXISTS public.invoices        CASCADE;
DROP TABLE IF EXISTS public.work_items      CASCADE;
DROP TABLE IF EXISTS public.tasks           CASCADE;
DROP TABLE IF EXISTS public.payments        CASCADE;
DROP TABLE IF EXISTS public.booking_links   CASCADE;
DROP TABLE IF EXISTS public.booking_slots   CASCADE;
DROP TABLE IF EXISTS public.bookings        CASCADE;
DROP TABLE IF EXISTS public.clients         CASCADE;
DROP TABLE IF EXISTS public.staff_services  CASCADE;
DROP TABLE IF EXISTS public.services        CASCADE;
DROP TABLE IF EXISTS public.staff           CASCADE;
DROP TABLE IF EXISTS public.org_members     CASCADE;
DROP TABLE IF EXISTS public.platform_admins CASCADE;
DROP TABLE IF EXISTS public.organizations   CASCADE;


-- ── 1. Extensions & enums ──────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS btree_gist;

DO $$ BEGIN CREATE TYPE booking_status AS ENUM
  ('draft','pending','hold','booked','in_progress','done','cancelled','expired');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE payment_type AS ENUM ('deposit','full');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN CREATE TYPE payment_status AS ENUM
  ('pending','processing','completed','failed','refunded');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;


-- ── 2. Tenancy tables ──────────────────────────────────────────────────────
CREATE TABLE public.organizations (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug           TEXT UNIQUE NOT NULL,
  name           TEXT NOT NULL,
  timezone       TEXT NOT NULL DEFAULT 'Europe/Malta',
  currency       TEXT NOT NULL DEFAULT 'EUR',
  booking_params JSONB NOT NULL DEFAULT
    '{"hold_minutes":15,"min_lead_minutes":120,"buffer_minutes":0,"deposit_percent":30,"cash_allowed":true}',
  -- Feature flags (e.g. work_board) and the printable-invoice identity (legal_name,
  -- address, vat_number, vat_rate, invoice_prefix, invoice_footer …) — both per-org JSONB.
  features       JSONB NOT NULL DEFAULT '{}',
  invoice_details JSONB NOT NULL DEFAULT '{}',
  -- Stripe Connect: the org's connected account + onboarding flags + optional platform
  -- fee (basis points). These are payout-critical → service-role-write-only (see §14).
  -- NULL stripe_account_id ⇒ charge on the platform account (single-account fallback).
  stripe_account_id        TEXT,
  stripe_charges_enabled   BOOLEAN NOT NULL DEFAULT false,
  stripe_details_submitted BOOLEAN NOT NULL DEFAULT false,
  application_fee_bps      INT NOT NULL DEFAULT 0 CHECK (application_fee_bps BETWEEN 0 AND 10000),
  status         TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','suspended')),
  created_at     TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.platform_admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE TABLE public.org_members (
  org_id     UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role       TEXT NOT NULL CHECK (role IN ('owner','admin','staff')),
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (org_id, user_id)
);

CREATE TABLE public.staff (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id      UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  user_id     UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name        TEXT NOT NULL,
  email       TEXT,
  is_bookable BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now(),
  deleted_at  TIMESTAMPTZ             -- soft delete (see §18); NULL = live
);
CREATE UNIQUE INDEX staff_org_user_key ON public.staff(org_id, user_id) WHERE user_id IS NOT NULL;

CREATE TABLE public.services (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id      UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  description TEXT,
  -- Variable-duration pricing. Exact tiers + a flat rate for hours beyond the top tier:
  --   price(H) = tier[H].price  OR  (largest tier <= H).price + (H - that tier) * extra_hour_price
  -- e.g. Drone: tiers 1=100,2=190,3=270,4=350 + 80/extra ;  Camera: tier 1=80 + 80/extra (flat 80/h)
  pricing     JSONB NOT NULL DEFAULT '{"tiers":[{"hours":1,"price":0}],"extra_hour_price":0}',
  min_hours   INT NOT NULL DEFAULT 1 CHECK (min_hours > 0),
  max_hours   INT NOT NULL DEFAULT 8 CHECK (max_hours >= min_hours),
  is_active   BOOLEAN NOT NULL DEFAULT true,
  task_template JSONB NOT NULL DEFAULT '[]',  -- default Work-board checklist seeded onto a card
  created_at  TIMESTAMPTZ DEFAULT now(),
  deleted_at  TIMESTAMPTZ
);

-- Which worker offers which service, with that pairing's bookable window.
-- working_hours shape: { "default":[{"start":8,"end":18}], "0".."6":..., "overrides":{...} }
CREATE TABLE public.staff_services (
  staff_id      UUID NOT NULL REFERENCES public.staff(id) ON DELETE CASCADE,
  service_id    UUID NOT NULL REFERENCES public.services(id) ON DELETE CASCADE,
  working_hours JSONB,
  deleted_at    TIMESTAMPTZ,
  PRIMARY KEY (staff_id, service_id)
);


-- ── 3. Domain tables ───────────────────────────────────────────────────────
CREATE TABLE public.clients (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id          UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  user_id         UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name            TEXT NOT NULL,
  email           TEXT,
  phone           TEXT,
  company         TEXT,
  vat_number      TEXT,
  billing_address TEXT,
  notes           TEXT,
  created_at      TIMESTAMPTZ DEFAULT now(),
  deleted_at      TIMESTAMPTZ
);
CREATE UNIQUE INDEX clients_org_user_key ON public.clients(org_id, user_id) WHERE user_id IS NOT NULL;

CREATE TABLE public.bookings (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id          UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  staff_id        UUID NOT NULL REFERENCES public.staff(id) ON DELETE RESTRICT,
  service_id      UUID REFERENCES public.services(id) ON DELETE SET NULL,
  -- A booking identifies its customer EITHER by a real client row (client_id — the
  -- reusable, invoiceable CRM relationship with company/VAT) OR by a one-off typed
  -- name (contact_name — a "walk-in"/quick booking never persisted to the clients
  -- table). The booking_has_name CHECK enforces exactly that for new/edited rows;
  -- external (imported calendar) blocks are exempt — they're nameless time holds.
  client_id       UUID REFERENCES public.clients(id) ON DELETE SET NULL,
  contact_name    TEXT,
  booking_ref     TEXT NOT NULL,
  title           TEXT NOT NULL,
  description     TEXT,
  location        TEXT,
  start_at        TIMESTAMPTZ NOT NULL,
  end_at          TIMESTAMPTZ NOT NULL,
  price_total     NUMERIC(10,2) NOT NULL DEFAULT 0,
  price_expenses  NUMERIC(10,2) NOT NULL DEFAULT 0,
  status          booking_status NOT NULL DEFAULT 'booked',
  hold_expires_at TIMESTAMPTZ,
  created_by      TEXT NOT NULL DEFAULT 'admin' CHECK (created_by IN ('admin','client')),
  -- Which payment options the client sees on the /book/:token link. "Pay later"
  -- (in-person: cash/Revolut/bank) is ALWAYS a request the admin confirms; paying by
  -- card auto-confirms. A booking created tentative (status 'pending', created_by
  -- 'admin') is held until the admin confirms it.
  allow_card      BOOLEAN NOT NULL DEFAULT true,
  allow_inperson  BOOLEAN NOT NULL DEFAULT true,
  google_event_id TEXT,
  is_external     BOOLEAN NOT NULL DEFAULT false,
  notes           TEXT,
  -- Per-booking deposit override; NULL ⇒ inherit the org default (booking_params).
  -- deposit_percent is whole-percent; deposit amount = price_total * pct/100.
  deposit_percent INT     CHECK (deposit_percent BETWEEN 1 AND 100),
  deposit_allowed BOOLEAN,
  -- Work board: needs_production opts the booking in; production_status is the stage
  -- (mirrored onto the linked work_items card for the calendar "Progress" line).
  needs_production  BOOLEAN NOT NULL DEFAULT false,
  production_status TEXT CHECK (production_status IN ('to_edit','editing','to_deliver','delivered')),
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now(),
  deleted_at      TIMESTAMPTZ,            -- soft delete (see §18); cascades to children
  UNIQUE (org_id, booking_ref),
  CONSTRAINT booking_has_name CHECK (client_id IS NOT NULL OR contact_name IS NOT NULL OR is_external)
);

-- Concurrency is enforced PER WORKER on booking_slots: a booking occupies one or more
-- time blocks, and booking_slots_no_overlap (below) forbids overlapping blocking slots
-- for a worker. bookings.start_at/end_at is the ENVELOPE (earliest start → latest end).
CREATE TABLE public.booking_slots (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id     UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  booking_id UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  staff_id   UUID NOT NULL REFERENCES public.staff(id) ON DELETE RESTRICT,
  start_at   TIMESTAMPTZ NOT NULL,
  end_at     TIMESTAMPTZ NOT NULL,
  blocking   BOOLEAN NOT NULL DEFAULT true,   -- mirrors booking status (reserves the worker)
  google_event_id TEXT,                       -- per-slot Google Calendar event
  created_at TIMESTAMPTZ DEFAULT now(),
  deleted_at TIMESTAMPTZ                       -- soft delete; a deleted slot frees the time
);
CREATE INDEX booking_slots_booking_idx ON public.booking_slots(booking_id);
CREATE INDEX booking_slots_staff_idx   ON public.booking_slots(staff_id);

-- A slot reserves the worker while its booking is in a blocking status OR it's an
-- ADMIN-created tentative booking (status 'pending', created_by 'admin'): the admin
-- deliberately picked that time, so it's held until they confirm/decline. Self-serve
-- client cash-requests (created_by 'client') stay NON-blocking — many clients may
-- request the same slot and the first one approved wins.
CREATE OR REPLACE FUNCTION public.slot_set_blocking() RETURNS TRIGGER
LANGUAGE plpgsql AS $f$
BEGIN
  SELECT (status IN ('hold','booked','in_progress','done')
          OR (status = 'pending' AND created_by = 'admin')) INTO NEW.blocking
    FROM public.bookings WHERE id = NEW.booking_id;
  RETURN NEW;
END $f$;
DROP TRIGGER IF EXISTS booking_slots_blocking ON public.booking_slots;
CREATE TRIGGER booking_slots_blocking BEFORE INSERT ON public.booking_slots
  FOR EACH ROW EXECUTE FUNCTION public.slot_set_blocking();

-- Status change on a booking frees/reserves all its slots.
CREATE OR REPLACE FUNCTION public.bookings_sync_slot_blocking() RETURNS TRIGGER
LANGUAGE plpgsql AS $f$
BEGIN
  UPDATE public.booking_slots
     SET blocking = (NEW.status IN ('hold','booked','in_progress','done')
                     OR (NEW.status = 'pending' AND NEW.created_by = 'admin'))
   WHERE booking_id = NEW.id;
  RETURN NEW;
END $f$;
DROP TRIGGER IF EXISTS bookings_blocking_after ON public.bookings;
CREATE TRIGGER bookings_blocking_after AFTER UPDATE OF status ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.bookings_sync_slot_blocking();

-- A worker can't be double-booked across any slot. SQLSTATE 23P01 on conflict.
ALTER TABLE public.booking_slots ADD CONSTRAINT booking_slots_no_overlap
  EXCLUDE USING gist (staff_id WITH =, tstzrange(start_at, end_at, '[)') WITH &&)
  WHERE (blocking AND deleted_at IS NULL);   -- a soft-deleted booking frees its slot

ALTER TABLE public.booking_slots ENABLE ROW LEVEL SECURITY;
CREATE POLICY bs_admin ON public.booking_slots FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));
GRANT SELECT, INSERT, UPDATE, DELETE ON public.booking_slots TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.booking_slots TO service_role;  -- Edge Functions (calendar sync, cancel, purge)

-- Atomic create/update of a booking + its slots (envelope = min/max of slots).
-- p_slots = [{ "start": iso, "end": iso }, …]. SQLSTATE 23P01 propagates on overlap.
CREATE OR REPLACE FUNCTION public.create_booking(p_booking jsonb, p_slots jsonb)
RETURNS TABLE (id uuid, booking_ref text)
LANGUAGE plpgsql SECURITY INVOKER SET search_path=public AS $$
DECLARE v_id uuid; v_org uuid; v_staff uuid; v_start timestamptz; v_end timestamptz; v_slot jsonb;
BEGIN
  v_org := (p_booking->>'org_id')::uuid; v_staff := (p_booking->>'staff_id')::uuid;
  SELECT min((e->>'start')::timestamptz), max((e->>'end')::timestamptz) INTO v_start, v_end
    FROM jsonb_array_elements(p_slots) e;
  IF v_start IS NULL THEN RAISE EXCEPTION 'no_slots'; END IF;
  INSERT INTO bookings (org_id, staff_id, service_id, client_id, contact_name, title, description,
    start_at, end_at, price_total, price_expenses, status, created_by,
    allow_card, allow_inperson, deposit_allowed, deposit_percent, needs_production, is_external, location, notes)
  VALUES (v_org, v_staff, (p_booking->>'service_id')::uuid, (p_booking->>'client_id')::uuid,
    NULLIF(p_booking->>'contact_name',''),
    p_booking->>'title', p_booking->>'description', v_start, v_end,
    (p_booking->>'price_total')::numeric, COALESCE((p_booking->>'price_expenses')::numeric, 0),
    COALESCE(p_booking->>'status','booked')::booking_status, COALESCE(p_booking->>'created_by','admin'),
    COALESCE((p_booking->>'allow_card')::boolean, true), COALESCE((p_booking->>'allow_inperson')::boolean, true),
    COALESCE((p_booking->>'deposit_allowed')::boolean, true), COALESCE((p_booking->>'deposit_percent')::int, 30),
    COALESCE((p_booking->>'needs_production')::boolean, false), COALESCE((p_booking->>'is_external')::boolean, false),
    p_booking->>'location', p_booking->>'notes')
  RETURNING bookings.id INTO v_id;
  FOR v_slot IN SELECT e FROM jsonb_array_elements(p_slots) e LOOP
    INSERT INTO booking_slots (org_id, booking_id, staff_id, start_at, end_at)
    VALUES (v_org, v_id, v_staff, (v_slot->>'start')::timestamptz, (v_slot->>'end')::timestamptz);
  END LOOP;
  RETURN QUERY SELECT v_id, b.booking_ref FROM bookings b WHERE b.id = v_id;
END $$;
GRANT EXECUTE ON FUNCTION public.create_booking(jsonb,jsonb) TO authenticated;

-- Returns the google_event_ids of OLD time blocks no longer in the new slot set — the caller
-- (sync-booking-event) deletes them so a moved/removed block doesn't leave a stale calendar event.
CREATE OR REPLACE FUNCTION public.update_booking(p_booking_id uuid, p_booking jsonb, p_slots jsonb)
RETURNS text[] LANGUAGE plpgsql SECURITY INVOKER SET search_path=public AS $$
DECLARE v_org uuid; v_staff uuid; v_start timestamptz; v_end timestamptz; v_slot jsonb; v_old jsonb; v_orphans text[];
BEGIN
  SELECT org_id INTO v_org FROM bookings WHERE id = p_booking_id;
  v_staff := (p_booking->>'staff_id')::uuid;
  SELECT min((e->>'start')::timestamptz), max((e->>'end')::timestamptz) INTO v_start, v_end
    FROM jsonb_array_elements(p_slots) e;
  IF v_start IS NULL THEN RAISE EXCEPTION 'no_slots'; END IF;
  -- Snapshot the slot→event mapping so unchanged blocks keep their Google Calendar event
  -- (matched by exact start/end) instead of being recreated/orphaned on every edit.
  SELECT COALESCE(jsonb_agg(jsonb_build_object('s', start_at, 'e', end_at, 'g', google_event_id)), '[]'::jsonb)
    INTO v_old FROM booking_slots WHERE booking_id = p_booking_id;
  -- Events for OLD blocks not present in the NEW slot set → orphans for the caller to delete.
  SELECT COALESCE(array_agg(o->>'g'), '{}') INTO v_orphans
    FROM jsonb_array_elements(v_old) o
    WHERE o->>'g' IS NOT NULL
      AND NOT EXISTS (SELECT 1 FROM jsonb_array_elements(p_slots) e
        WHERE (e->>'start')::timestamptz = (o->>'s')::timestamptz
          AND (e->>'end')::timestamptz = (o->>'e')::timestamptz);
  DELETE FROM booking_slots WHERE booking_id = p_booking_id;
  UPDATE bookings SET staff_id=v_staff, service_id=(p_booking->>'service_id')::uuid,
    client_id=(p_booking->>'client_id')::uuid, contact_name=NULLIF(p_booking->>'contact_name',''),
    title=p_booking->>'title', description=p_booking->>'description',
    start_at=v_start, end_at=v_end, price_total=(p_booking->>'price_total')::numeric,
    allow_card=COALESCE((p_booking->>'allow_card')::boolean,true), allow_inperson=COALESCE((p_booking->>'allow_inperson')::boolean,true),
    deposit_allowed=COALESCE((p_booking->>'deposit_allowed')::boolean,true), deposit_percent=COALESCE((p_booking->>'deposit_percent')::int,30),
    needs_production=COALESCE((p_booking->>'needs_production')::boolean,false), is_external=false,
    location=p_booking->>'location', notes=p_booking->>'notes'
  WHERE id=p_booking_id;
  FOR v_slot IN SELECT e FROM jsonb_array_elements(p_slots) e LOOP
    INSERT INTO booking_slots (org_id, booking_id, staff_id, start_at, end_at, google_event_id)
    VALUES (v_org, p_booking_id, v_staff, (v_slot->>'start')::timestamptz, (v_slot->>'end')::timestamptz,
      (SELECT o->>'g' FROM jsonb_array_elements(v_old) o
        WHERE (o->>'s')::timestamptz = (v_slot->>'start')::timestamptz
          AND (o->>'e')::timestamptz = (v_slot->>'end')::timestamptz
          AND o->>'g' IS NOT NULL LIMIT 1));
  END LOOP;
  RETURN v_orphans;
END $$;
GRANT EXECUTE ON FUNCTION public.update_booking(uuid,jsonb,jsonb) TO authenticated;

CREATE TABLE public.payments (
  id                       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id                   UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  -- Nullable since §15: a payment may settle a standalone invoice with no booking.
  -- `invoice_id` + the payments_has_parent CHECK are added in §15c (invoices is
  -- defined later). Every Edge Function still inserts booking_id only — the
  -- set_payment_invoice trigger fills invoice_id in, which is precisely why none
  -- of the Stripe/webhook/calendar functions needed changing.
  booking_id               UUID REFERENCES public.bookings(id) ON DELETE CASCADE,
  amount                   NUMERIC(10,2) NOT NULL,
  type                     payment_type   NOT NULL,
  status                   payment_status NOT NULL DEFAULT 'pending',
  method                   TEXT NOT NULL DEFAULT 'card' CHECK (method IN ('card','cash','revolut','bank','other')),
  note                     TEXT,                          -- free label for manual payments ("deposit", "final", …)
  stripe_payment_intent_id TEXT UNIQUE,
  stripe_account_id        TEXT,
  paid_at                  TIMESTAMPTZ,
  created_at               TIMESTAMPTZ DEFAULT now(),
  deleted_at               TIMESTAMPTZ
);

-- A booking can have many payments (deposit + partials + final). total_paid in
-- booking_summary sums all completed ones; outstanding = price_total − total_paid.

CREATE TABLE public.booking_links (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id     UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  booking_id UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  token      TEXT UNIQUE NOT NULL DEFAULT encode(gen_random_bytes(16), 'hex'),
  expires_at TIMESTAMPTZ,
  is_active  BOOLEAN NOT NULL DEFAULT true,
  opened_at  TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  deleted_at TIMESTAMPTZ
);


-- ── 4. Indexes ─────────────────────────────────────────────────────────────
CREATE INDEX bookings_org_idx        ON public.bookings(org_id);
CREATE INDEX bookings_staff_idx      ON public.bookings(staff_id);
CREATE INDEX bookings_start_idx      ON public.bookings(start_at);
CREATE INDEX bookings_status_idx     ON public.bookings(status);
-- Cover the client/service FKs (booking_summary joins + ON DELETE SET NULL scans).
CREATE INDEX bookings_client_idx     ON public.bookings(client_id);
CREATE INDEX bookings_service_idx    ON public.bookings(service_id);
CREATE INDEX clients_org_idx         ON public.clients(org_id);
CREATE INDEX payments_booking_idx    ON public.payments(booking_id);
CREATE INDEX booking_links_token_idx ON public.booking_links(token);
CREATE INDEX booking_links_booking_idx ON public.booking_links(booking_id);  -- lookup link by booking
CREATE INDEX services_org_idx        ON public.services(org_id);
CREATE INDEX staff_org_idx           ON public.staff(org_id);
CREATE INDEX staff_services_service_idx ON public.staff_services(service_id);  -- reverse of the (staff_id,service_id) PK


-- ── 5. Triggers ────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER
LANGUAGE plpgsql AS $$ BEGIN NEW.updated_at := now(); RETURN NEW; END $$;

DROP TRIGGER IF EXISTS bookings_updated_at ON public.bookings;
CREATE TRIGGER bookings_updated_at BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Per-ORG booking ref (BK-YYYY-NNN, numbered within the org).
-- SECURITY DEFINER so the MAX scan sees ALL bookings incl. soft-deleted ones — otherwise the
-- restrictive hide_deleted RLS hides them and a deleted row's ref gets reused → UNIQUE violation.
CREATE OR REPLACE FUNCTION public.set_booking_ref() RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public AS $$
DECLARE y TEXT := to_char(now(),'YYYY'); seq INT;
BEGIN
  IF NEW.booking_ref IS NULL OR NEW.booking_ref = '' THEN
    SELECT COALESCE(MAX(CAST(SPLIT_PART(booking_ref,'-',3) AS INT)),0)+1 INTO seq
      FROM public.bookings WHERE org_id = NEW.org_id AND booking_ref LIKE 'BK-'||y||'-%';
    NEW.booking_ref := 'BK-'||y||'-'||LPAD(seq::text,3,'0');
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS bookings_set_ref ON public.bookings;
CREATE TRIGGER bookings_set_ref BEFORE INSERT ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.set_booking_ref();


-- ── 6. Membership & helper functions (SECURITY DEFINER) ────────────────────
CREATE OR REPLACE FUNCTION public.is_platform_admin() RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT EXISTS (SELECT 1 FROM platform_admins WHERE user_id = auth.uid());
$$;

CREATE OR REPLACE FUNCTION public.current_org_ids() RETURNS SETOF UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT org_id FROM org_members WHERE user_id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.is_org_member(p_org UUID) RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT EXISTS (SELECT 1 FROM org_members WHERE org_id=p_org AND user_id=auth.uid());
$$;

CREATE OR REPLACE FUNCTION public.is_org_admin(p_org UUID) RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT EXISTS (SELECT 1 FROM org_members
                 WHERE org_id=p_org AND user_id=auth.uid() AND role IN ('owner','admin'));
$$;

CREATE OR REPLACE FUNCTION public.current_staff_id(p_org UUID) RETURNS UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT id FROM staff WHERE org_id=p_org AND user_id=auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.current_client_id(p_org UUID) RETURNS UUID
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT id FROM clients WHERE org_id=p_org AND user_id=auth.uid();
$$;


-- ── 7. Availability (per worker — shared calendar across services) ─────────
CREATE OR REPLACE FUNCTION public.get_busy_ranges(
  p_staff_id UUID, range_start TIMESTAMPTZ, range_end TIMESTAMPTZ
) RETURNS TABLE (start_at TIMESTAMPTZ, end_at TIMESTAMPTZ)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT s.start_at, s.end_at FROM booking_slots s JOIN bookings b ON b.id = s.booking_id
  WHERE s.staff_id = p_staff_id AND s.deleted_at IS NULL AND b.deleted_at IS NULL
    AND ( b.status IN ('booked','in_progress','done')
          OR (b.status = 'hold' AND b.hold_expires_at > now()) )
    AND s.start_at < range_end AND s.end_at > range_start;
$$;


-- ── 8. Client RPCs (org-scoped, server-authoritative) ──────────────────────
CREATE OR REPLACE FUNCTION public.upsert_my_client(
  p_org UUID, p_name TEXT, p_email TEXT, p_company TEXT, p_vat TEXT, p_address TEXT
) RETURNS UUID
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_uid UUID := auth.uid(); v_cid UUID;
BEGIN
  IF v_uid IS NULL THEN RAISE EXCEPTION 'not authenticated'; END IF;
  SELECT id INTO v_cid FROM clients WHERE org_id=p_org AND user_id=v_uid;
  IF v_cid IS NULL THEN
    SELECT id INTO v_cid FROM clients
      WHERE org_id=p_org AND user_id IS NULL AND lower(email)=lower(p_email)
      ORDER BY created_at LIMIT 1;
    IF v_cid IS NOT NULL THEN UPDATE clients SET user_id=v_uid WHERE id=v_cid; END IF;
  END IF;
  IF v_cid IS NULL THEN
    INSERT INTO clients (org_id, user_id, name, email, company, vat_number, billing_address)
      VALUES (p_org, v_uid, p_name, p_email, NULLIF(p_company,''), NULLIF(p_vat,''), NULLIF(p_address,''))
      RETURNING id INTO v_cid;
  ELSE
    UPDATE clients SET name=p_name, email=p_email, company=NULLIF(p_company,''),
      vat_number=NULLIF(p_vat,''), billing_address=NULLIF(p_address,'') WHERE id=v_cid;
  END IF;
  RETURN v_cid;
END $$;

-- Price for a service at a given number of hours (server-authoritative).
-- Exact tier match wins; otherwise (largest tier <= hours) + extra-hour rate.
CREATE OR REPLACE FUNCTION public.service_price(p_service UUID, p_hours INT)
RETURNS NUMERIC
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path=public AS $$
DECLARE pr JSONB; base_hours INT; base_price NUMERIC; extra NUMERIC;
BEGIN
  SELECT pricing INTO pr FROM services WHERE id = p_service;
  IF pr IS NULL THEN RETURN NULL; END IF;
  SELECT (t->>'price')::numeric INTO base_price
    FROM jsonb_array_elements(pr->'tiers') t WHERE (t->>'hours')::int = p_hours;
  IF base_price IS NOT NULL THEN RETURN base_price; END IF;
  SELECT (t->>'hours')::int, (t->>'price')::numeric INTO base_hours, base_price
    FROM jsonb_array_elements(pr->'tiers') t WHERE (t->>'hours')::int <= p_hours
    ORDER BY (t->>'hours')::int DESC LIMIT 1;
  IF base_price IS NULL THEN RETURN NULL; END IF;       -- below the minimum tier
  extra := COALESCE((pr->>'extra_hour_price')::numeric, 0);
  RETURN base_price + (p_hours - base_hours) * extra;
END $$;

-- Cash request: hours + price come from the service (client can't tamper).
CREATE OR REPLACE FUNCTION public.create_booking_request(
  p_org UUID, p_staff UUID, p_service UUID, p_start TIMESTAMPTZ, p_hours INT, p_notes TEXT DEFAULT NULL
) RETURNS TABLE (id UUID, booking_ref TEXT)
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_client UUID; v_price NUMERIC; v_name TEXT; v_min INT; v_max INT;
BEGIN
  v_client := public.current_client_id(p_org);
  IF v_client IS NULL THEN RAISE EXCEPTION 'no client profile'; END IF;
  IF p_start <= now() THEN RAISE EXCEPTION 'start must be in the future'; END IF;
  SELECT s.name, s.min_hours, s.max_hours INTO v_name, v_min, v_max
    FROM services s WHERE s.id=p_service AND s.org_id=p_org AND s.is_active;
  IF v_name IS NULL THEN RAISE EXCEPTION 'invalid service'; END IF;
  IF p_hours < v_min OR p_hours > v_max THEN RAISE EXCEPTION 'invalid duration'; END IF;
  IF NOT EXISTS (SELECT 1 FROM staff_services ss JOIN staff s ON s.id=ss.staff_id
                 WHERE ss.staff_id=p_staff AND ss.service_id=p_service AND s.org_id=p_org) THEN
    RAISE EXCEPTION 'worker does not offer this service';
  END IF;
  v_price := public.service_price(p_service, p_hours);
  RETURN QUERY
  INSERT INTO bookings (org_id, staff_id, service_id, client_id, title, start_at, end_at,
                        price_total, status, created_by, notes)
  VALUES (p_org, p_staff, p_service, v_client, v_name || ' (' || p_hours || 'h)', p_start,
          p_start + make_interval(hours => p_hours), v_price, 'pending', 'client', p_notes)
  RETURNING bookings.id, bookings.booking_ref;
END $$;


-- ── 9. Admin dashboard view (org admins only) ──────────────────────────────
CREATE VIEW public.booking_summary AS
SELECT
  b.id, b.org_id, b.booking_ref, b.staff_id, b.service_id, b.client_id,
  b.title, b.start_at, b.end_at, b.price_total, b.price_expenses,
  b.price_total - b.price_expenses AS price_revenue,
  b.status, b.google_event_id, b.is_external, b.created_by,
  st.name AS staff_name, s.name AS service_name,
  COALESCE(c.name, b.contact_name) AS client_name, c.email AS client_email,
  (SELECT COUNT(*) FROM public.booking_slots bs WHERE bs.booking_id = b.id AND bs.deleted_at IS NULL) AS slot_count,
  COALESCE(SUM(p.amount) FILTER (WHERE p.status='completed' AND p.deleted_at IS NULL),0) AS total_paid,
  CASE
    WHEN b.is_external THEN 'external'
    WHEN COALESCE(SUM(p.amount) FILTER (WHERE p.status='completed' AND p.deleted_at IS NULL),0) >= b.price_total
         AND b.price_total > 0 THEN 'paid'
    WHEN COALESCE(SUM(p.amount) FILTER (WHERE p.status='completed' AND p.deleted_at IS NULL),0) > 0 THEN 'partial'
    ELSE 'unpaid'
  END AS payment_status
FROM public.bookings b
LEFT JOIN public.staff    st ON st.id = b.staff_id
LEFT JOIN public.services s  ON s.id  = b.service_id
LEFT JOIN public.clients  c  ON c.id  = b.client_id
LEFT JOIN public.payments p  ON p.booking_id = b.id
WHERE (public.is_org_admin(b.org_id) OR public.is_platform_admin()) AND b.deleted_at IS NULL
GROUP BY b.id, st.id, s.id, c.id;


-- ── 10. Row-Level Security ─────────────────────────────────────────────────
ALTER TABLE public.organizations   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.org_members     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.platform_admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.staff           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.staff_services  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clients         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_links   ENABLE ROW LEVEL SECURITY;

-- organizations: members read their org; org admin updates it; platform admin all
CREATE POLICY org_read   ON public.organizations FOR SELECT
  USING (public.is_org_member(id) OR public.is_platform_admin());
CREATE POLICY org_update ON public.organizations FOR UPDATE
  USING (public.is_org_admin(id) OR public.is_platform_admin());

-- platform_admins: read own row only
CREATE POLICY pa_read ON public.platform_admins FOR SELECT USING (user_id = auth.uid());

-- org_members: read own membership; org admins manage their org's members
CREATE POLICY mem_read ON public.org_members FOR SELECT
  USING (user_id = auth.uid() OR public.is_org_admin(org_id) OR public.is_platform_admin());
CREATE POLICY mem_admin ON public.org_members FOR ALL
  USING (public.is_org_admin(org_id) OR public.is_platform_admin())
  WITH CHECK (public.is_org_admin(org_id) OR public.is_platform_admin());

-- staff / services / staff_services: org members read; org admins manage
CREATE POLICY staff_read  ON public.staff FOR SELECT USING (public.is_org_member(org_id));
CREATE POLICY staff_admin ON public.staff FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));
CREATE POLICY svc_read    ON public.services FOR SELECT USING (public.is_org_member(org_id));
CREATE POLICY svc_admin   ON public.services FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));
CREATE POLICY ss_read     ON public.staff_services FOR SELECT
  USING (EXISTS (SELECT 1 FROM staff s WHERE s.id=staff_id AND public.is_org_member(s.org_id)));
CREATE POLICY ss_admin    ON public.staff_services FOR ALL
  USING (EXISTS (SELECT 1 FROM staff s WHERE s.id=staff_id AND public.is_org_admin(s.org_id)))
  WITH CHECK (EXISTS (SELECT 1 FROM staff s WHERE s.id=staff_id AND public.is_org_admin(s.org_id)));

-- clients: org admin all; a client reads/updates/inserts their own row
CREATE POLICY cl_admin   ON public.clients FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));
CREATE POLICY cl_self_r  ON public.clients FOR SELECT USING (user_id = auth.uid());
CREATE POLICY cl_self_u  ON public.clients FOR UPDATE USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY cl_self_i  ON public.clients FOR INSERT WITH CHECK (user_id = auth.uid());

-- bookings: org admin all; staff read own; client read own; client insert pending/hold; token read
CREATE POLICY bk_admin   ON public.bookings FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));
CREATE POLICY bk_staff_r ON public.bookings FOR SELECT
  USING (staff_id = public.current_staff_id(org_id));
CREATE POLICY bk_client_r ON public.bookings FOR SELECT
  USING (client_id = public.current_client_id(org_id));
CREATE POLICY bk_client_i ON public.bookings FOR INSERT
  WITH CHECK (client_id = public.current_client_id(org_id)
              AND created_by = 'client' AND status IN ('pending','hold'));
-- NOTE: there is deliberately NO token-read policy here. RLS cannot see the client's
-- `.eq('token', …)` filter, so any such policy is token-LESS in practice — it once let
-- anyone with the publishable key enumerate every booking behind an active link. Public
-- token access goes through get_booking_by_token / get_invoice_by_token /
-- get_delivery_by_token (SECURITY DEFINER), where the token IS a predicate.

-- payments: org admin all; client reads payments on their own bookings
CREATE POLICY pay_admin  ON public.payments FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));
-- Two arms, because a payment can belong to a booking, an invoice, or both. The invoice
-- arm is load-bearing: delete_booking(keep) and any future detach set payments.booking_id
-- to NULL, and `NULL IN (…)` is NULL → false, so a booking-only policy silently locked a
-- client out of reading their OWN payment (their /pay/success receipt went blank).
-- Names are qualified — the unqualified form is the tautology class documented at §15.
CREATE POLICY pay_client_r ON public.payments FOR SELECT
  USING (
    booking_id IN (SELECT b.id FROM public.bookings b
                    WHERE b.client_id = public.current_client_id(b.org_id))
    OR invoice_id IN (SELECT i.id FROM public.invoices i
                       WHERE i.client_id = public.current_client_id(i.org_id))
  );

-- booking_links: org admin only. No token policy — see the note above bookings; the
-- public pay flow resolves tokens inside SECURITY DEFINER functions instead.
CREATE POLICY bl_admin ON public.booking_links FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));


-- ── 11. Grants ─────────────────────────────────────────────────────────────
GRANT USAGE ON SCHEMA public TO anon, authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE ON
  public.organizations, public.org_members, public.staff, public.services,
  public.staff_services, public.clients, public.bookings, public.payments,
  public.booking_links TO authenticated;
GRANT SELECT ON public.platform_admins, public.booking_summary TO authenticated;

-- anon gets NO table grants. Everything public is served through SECURITY DEFINER RPCs
-- (get_booking_by_token / get_invoice_by_token / get_delivery_by_token, get_busy_ranges,
-- service_price) or Edge Functions running as service_role. Granting anon SELECT on
-- bookings/booking_links is what made pay-link tokens enumerable — don't reintroduce it.
-- (On an existing database: REVOKE SELECT ON public.bookings, public.booking_links FROM anon;)

GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;

GRANT EXECUTE ON FUNCTION
  public.is_platform_admin(), public.current_org_ids(), public.is_org_member(UUID),
  public.is_org_admin(UUID), public.current_staff_id(UUID), public.current_client_id(UUID),
  public.upsert_my_client(UUID,TEXT,TEXT,TEXT,TEXT,TEXT),
  public.create_booking_request(UUID,UUID,UUID,TIMESTAMPTZ,INT,TEXT)
  TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_busy_ranges(UUID,TIMESTAMPTZ,TIMESTAMPTZ) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.service_price(UUID,INT) TO anon, authenticated;


-- ── 12. SEED — first organization: johnfabiomb ─────────────────────────────
-- John's auth user id (creator@johnfabiomb.com), verified in the live project.
DO $$
DECLARE
  v_uid    UUID := '4594a5c1-ad28-40e3-a166-0d641544b3cc';
  v_org    UUID;
  v_staff  UUID;
  v_drone  UUID;
  v_camera UUID;
BEGIN
  INSERT INTO organizations (slug, name) VALUES ('johnfabiomb','John F. Montaño')
    RETURNING id INTO v_org;

  INSERT INTO platform_admins (user_id) VALUES (v_uid) ON CONFLICT DO NOTHING;
  INSERT INTO org_members (org_id, user_id, role) VALUES (v_org, v_uid, 'owner');

  INSERT INTO staff (org_id, user_id, name, email)
    VALUES (v_org, v_uid, 'John Montaño', 'creator@johnfabiomb.com')
    RETURNING id INTO v_staff;

  -- Drone: 1h 100, 2h 190, 3h 270, 4h 350, then +80/extra hour.
  INSERT INTO services (org_id, name, description, pricing, min_hours, max_hours)
    VALUES (v_org, 'Drone Pilot Filming', 'Aerial / FPV drone filming.',
      '{"tiers":[{"hours":1,"price":100},{"hours":2,"price":190},{"hours":3,"price":270},{"hours":4,"price":350}],"extra_hour_price":80}',
      1, 8)
    RETURNING id INTO v_drone;
  -- Camera: flat 80/hour.
  INSERT INTO services (org_id, name, description, pricing, min_hours, max_hours)
    VALUES (v_org, 'Camera Filming', 'On-the-ground camera filming.',
      '{"tiers":[{"hours":1,"price":80}],"extra_hour_price":80}',
      1, 12)
    RETURNING id INTO v_camera;

  -- John offers both. Drone = daytime only; Camera = 24h. (Same shared calendar.)
  INSERT INTO staff_services (staff_id, service_id, working_hours) VALUES
    (v_staff, v_drone,  '{"default":[{"start":8,"end":18}]}'),
    (v_staff, v_camera, '{"default":[{"start":0,"end":24}]}');
END $$;


-- ── 13. Work board (production to-do) ──────────────────────────────────────
-- The Work board (to_edit → editing → to_deliver → delivered) is a list of
-- work_items (§13a); a card may link to a booking or stand alone. Tasks are a
-- checklist on a card. (Columns bookings.needs_production/production_status,
-- services.task_template and organizations.features are defined on their tables.)
CREATE TABLE public.tasks (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id     UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES public.bookings(id) ON DELETE CASCADE,
  title      TEXT NOT NULL,
  is_done    BOOLEAN NOT NULL DEFAULT false,
  due_at     TIMESTAMPTZ,
  sort       INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  done_at    TIMESTAMPTZ,
  deleted_at TIMESTAMPTZ
);
CREATE INDEX tasks_org_idx     ON public.tasks(org_id);
CREATE INDEX tasks_booking_idx ON public.tasks(booking_id);
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY tasks_admin ON public.tasks FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tasks TO authenticated;

-- A booking joins the Work board only when explicitly marked `needs_production`
-- (and never if it's an imported/external calendar event). Clearing the flag
-- (or it being external) removes it from the board.
CREATE OR REPLACE FUNCTION public.set_production_status() RETURNS TRIGGER
LANGUAGE plpgsql AS $f$
BEGIN
  IF NEW.is_external OR NOT COALESCE(NEW.needs_production, false) THEN
    NEW.production_status := NULL;
  ELSIF NEW.status IN ('booked','in_progress','done') AND NEW.production_status IS NULL THEN
    NEW.production_status := 'to_edit';
  END IF;
  RETURN NEW;
END $f$;
DROP TRIGGER IF EXISTS bookings_production_before ON public.bookings;
CREATE TRIGGER bookings_production_before BEFORE INSERT OR UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.set_production_status();


-- ── 13a. Work items (the Work board's unit) ────────────────────────────────
-- The Work board is its own list of cards (Trello-style). A card MAY link to a
-- booking (carrying its client/service/date) or stand alone (a personal reminder
-- with no booking). This replaces the old "one card per needs_production booking"
-- coupling: cards are now created/deleted explicitly, so deleting a card never
-- touches the booking, and you can make your own cards with no job attached.
CREATE TABLE public.work_items (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id            UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  booking_id        UUID REFERENCES public.bookings(id) ON DELETE CASCADE,   -- null = standalone
  title             TEXT NOT NULL,
  production_status TEXT NOT NULL DEFAULT 'to_edit'
                    CHECK (production_status IN ('to_edit','editing','to_deliver','delivered')),
  -- Backlog vs board: NULL = in the Backlog (waiting); set = pulled onto the active
  -- board. A card is also "active" once its booking has ended (computed in work_board),
  -- so future shoots sit in the Backlog and surface automatically when they're over.
  activated_at      TIMESTAMPTZ,
  assignee_id       UUID REFERENCES public.staff(id) ON DELETE SET NULL,  -- Trello-style owner
  due_at            TIMESTAMPTZ,                                          -- deliver-by date
  sort              INT NOT NULL DEFAULT 0,
  created_at        TIMESTAMPTZ DEFAULT now(),
  deleted_at        TIMESTAMPTZ
);
CREATE INDEX work_items_org_idx      ON public.work_items(org_id);
CREATE INDEX work_items_booking_idx  ON public.work_items(booking_id);
CREATE INDEX work_items_assignee_idx ON public.work_items(assignee_id);
ALTER TABLE public.work_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY work_items_admin ON public.work_items FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));
GRANT SELECT, INSERT, UPDATE, DELETE ON public.work_items TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.work_items TO service_role;  -- created after the blanket service_role grant, so grant explicitly

-- The board reads tasks by work_item_id; booking_id stays for back-compat. (Added
-- after work_items so the FK target exists.)
ALTER TABLE public.tasks ADD COLUMN work_item_id UUID REFERENCES public.work_items(id) ON DELETE CASCADE;
CREATE INDEX tasks_work_item_idx ON public.tasks(work_item_id);

-- Create a card (optionally linked to a booking, whose service task-template is
-- seeded once). SECURITY INVOKER so RLS still scopes writes to the caller's org.
CREATE OR REPLACE FUNCTION public.create_work_item(p_org uuid, p_booking uuid, p_title text)
RETURNS public.work_items LANGUAGE plpgsql SECURITY INVOKER SET search_path=public AS $$
DECLARE v_item public.work_items; v_btitle text; v_svc uuid; tmpl jsonb; t text;
BEGIN
  IF p_booking IS NOT NULL THEN
    SELECT title, service_id INTO v_btitle, v_svc FROM bookings WHERE id = p_booking AND org_id = p_org;
  END IF;
  -- Standalone to-do → straight onto the board; booking-linked → Backlog until the
  -- shoot passes (work_board auto-activates it then) or it's pulled in manually.
  INSERT INTO work_items (org_id, booking_id, title, activated_at)
  VALUES (p_org, p_booking, COALESCE(NULLIF(btrim(p_title),''), v_btitle, 'Untitled'),
          CASE WHEN p_booking IS NULL THEN now() ELSE NULL END)
  RETURNING * INTO v_item;
  IF v_svc IS NOT NULL THEN
    SELECT task_template INTO tmpl FROM services WHERE id = v_svc;
    FOR t IN SELECT jsonb_array_elements_text(COALESCE(tmpl,'[]'::jsonb)) LOOP
      INSERT INTO tasks (org_id, work_item_id, booking_id, title) VALUES (p_org, v_item.id, p_booking, t);
    END LOOP;
  END IF;
  RETURN v_item;
END $$;
GRANT EXECUTE ON FUNCTION public.create_work_item(uuid,uuid,text) TO authenticated;

-- Board read model: each card with its booking date, whether it's active (on the board
-- vs Backlog), and resolved client/service/assignee names. is_active is dynamic — a
-- future shoot's card flips to active the moment its booking ends, with no cron.
CREATE OR REPLACE VIEW public.work_board AS
SELECT
  w.id, w.org_id, w.booking_id, w.title, w.production_status, w.sort,
  w.activated_at, w.assignee_id, w.due_at, w.created_at,
  b.start_at AS booking_start_at, b.end_at AS booking_end_at,
  (w.activated_at IS NOT NULL OR (b.end_at IS NOT NULL AND b.end_at < now())) AS is_active,
  COALESCE(c.name, b.contact_name) AS client_name,
  s.name  AS service_name,
  st.name AS assignee_name
FROM public.work_items w
LEFT JOIN public.bookings b  ON b.id  = w.booking_id
LEFT JOIN public.clients  c  ON c.id  = b.client_id
LEFT JOIN public.services s  ON s.id  = b.service_id
LEFT JOIN public.staff    st ON st.id = w.assignee_id
WHERE (public.is_org_admin(w.org_id) OR public.is_platform_admin()) AND w.deleted_at IS NULL;
GRANT SELECT ON public.work_board TO authenticated;


-- ── 14. Stripe Connect — payout-critical column security ───────────────────
-- The connected-account columns are defined on `organizations` (§2). Each org
-- connects its OWN Standard account; charges go directly on it with an optional
-- platform fee. The platform secret key stays an Edge Function secret — never
-- stored here. stripe_account_id IS NULL ⇒ charge on the platform account.
--
-- SECURITY: org admins must NOT be able to write payout-critical fields.
-- The org_update RLS policy lets an admin UPDATE their org row, and `authenticated`
-- held a TABLE-level UPDATE grant — together that allowed an admin to set
-- `stripe_account_id` (redirecting every payout to an account they control) or flip
-- `stripe_charges_enabled` to bypass onboarding. Postgres RLS is row-level only, so
-- we enforce column-level privileges instead: revoke the blanket UPDATE and grant it
-- back ONLY on the safe, admin-editable columns. The stripe_* / fee columns are then
-- writable solely by `service_role` (Edge Functions via the service key, which holds
-- GRANT ALL above and bypasses RLS). Defence-in-depth: even a compromised admin JWT
-- cannot touch where the money lands.
REVOKE UPDATE ON public.organizations FROM authenticated;
GRANT  UPDATE (name, timezone, currency, booking_params, features, invoice_details)
  ON public.organizations TO authenticated;


-- ── Notes on deposit & invoicing config (columns defined on their tables) ──
-- Deposit policy has two layers: the ORG DEFAULT (booking_params.deposit_percent +
-- deposit_allowed, JSONB) and a PER-BOOKING override (bookings.deposit_percent /
-- deposit_allowed; NULL ⇒ inherit). The override is stored explicitly so changing the
-- org default later never alters an existing payment link.
-- organizations.invoice_details (JSONB) holds the printable-invoice identity:
--   { legal_name, address, phone, email, vat_number, vat_registered, vat_rate (def 18),
--     invoice_prefix (def 'INV'), invoice_footer }. Invoice no. = booking_ref with the
--   prefix swapped (BK-2026-007 → INV-2026-007). When vat_registered is false (Article 11)
--   no VAT is charged; when true, prices are VAT-inclusive and the net/VAT/gross breakdown
--   shows. Admins may edit invoice_details (§14 grant); stripe_* stays service-role-only.


-- ── 15. Invoices — the money record ────────────────────────────────────────
-- An invoice is the unit of MONEY; a booking is the unit of WORK IN THE CALENDAR.
-- An invoice MAY link to a booking (the common case, still 1:1) or stand alone —
-- work billed with no time slot, which is how a self-employed owner actually
-- works. It carries its own client / worker / service / date so it survives its
-- booking being deleted, and so earnings can be reported per worker and per
-- service. `booking_id` is therefore NULLABLE.
--
-- `line_items` JSONB is the LEGACY representation and is still dual-written by
-- save_invoice, because _invoice_bundle, the public invoice page and
-- payment-success all read it. `invoice_lines` (§15b) is the normalised truth
-- used for per-service reporting. Don't drop the JSONB until every reader moves.
CREATE TABLE public.invoices (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id      UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  booking_id  UUID REFERENCES public.bookings(id) ON DELETE CASCADE,   -- NULL = standalone
  -- The invoice's own identity, denormalised so it outlives the booking.
  client_id   UUID REFERENCES public.clients(id)  ON DELETE SET NULL,
  staff_id    UUID REFERENCES public.staff(id)    ON DELETE SET NULL,  -- money survives a worker row going away
  service_id  UUID REFERENCES public.services(id) ON DELETE SET NULL,  -- header-level attribution (reporting groups by LINE)
  contact_name TEXT,                                -- one-off customer, mirrors bookings.contact_name
  title        TEXT,
  service_date DATE,                                -- when the work happened (drives "work done" earnings)
  line_items  JSONB NOT NULL DEFAULT '[]'::jsonb,   -- legacy mirror of invoice_lines
  notes       TEXT,
  issue_date  DATE,
  amount_expenses NUMERIC(10,2) NOT NULL DEFAULT 0, -- the seam a future expenses/VAT module plugs into
  -- One continuous series per org+year (INV-YYYY-NNN), assigned by save_invoice.
  -- NULL until issued, so drafts never consume a number.
  number_year INT,
  number_seq  INT,
  status      TEXT CHECK (status IS NULL OR status IN ('draft','issued','void')),
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now(),
  -- NOTE: deliberately NO unique constraint on booking_id. A booking can carry SEVERAL
  -- invoices — a deposit and a final, or a supplementary one raised when scope grows
  -- after the first was already sent (an issued invoice is a document the client holds;
  -- you don't edit it, you issue another). Dropping it was only safe once the PostgREST
  -- .upsert({onConflict:'booking_id'}) that relied on it as an arbiter had been replaced
  -- by the save_invoice RPC. Everything resolving "the booking's invoice" takes the
  -- OLDEST, so existing links keep pointing at the original document.
  -- (One invoice still belongs to at most one booking; consolidated billing across
  -- several jobs would need a join table and is deliberately not built.)
  deleted_at  TIMESTAMPTZ
);
CREATE INDEX invoices_org_idx     ON public.invoices(org_id);
CREATE INDEX invoices_booking_idx ON public.invoices(booking_id);
CREATE INDEX invoices_client_idx  ON public.invoices(client_id);
CREATE INDEX invoices_staff_idx   ON public.invoices(staff_id);
CREATE INDEX invoices_service_idx ON public.invoices(service_id);
CREATE UNIQUE INDEX invoices_number_key ON public.invoices(org_id, number_year, number_seq)
  WHERE number_seq IS NOT NULL AND deleted_at IS NULL;

ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
-- WITH CHECK also verifies the booking belongs to org_id, so an admin of org A
-- can't attach an invoice to org B's booking (cross-tenant integrity).
-- ⚠️ Both halves of this matter:
--   * Names are QUALIFIED. The previous version compared `b.org_id = org_id`, and
--     inside the subquery both names bound to `bookings` → `b.org_id = b.org_id`,
--     a tautology: the cross-tenant guard never actually ran.
--   * `booking_id IS NULL OR …` — without it a standalone invoice evaluates
--     `b.id = NULL` → no rows → EXISTS false → every insert rejected.
CREATE POLICY inv_admin ON public.invoices FOR ALL
  USING (public.is_org_admin(org_id))
  WITH CHECK (public.is_org_admin(org_id)
              AND (booking_id IS NULL
                   OR EXISTS (SELECT 1 FROM public.bookings b
                               WHERE b.id = invoices.booking_id
                                 AND b.org_id = invoices.org_id)));
GRANT SELECT, INSERT, UPDATE, DELETE ON public.invoices TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.invoices TO service_role;  -- created after the blanket service_role grant, so grant explicitly
CREATE TRIGGER invoices_updated BEFORE UPDATE ON public.invoices
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


-- ── 15b. invoice_lines — normalised charges (per-service reporting) ────────
-- Per-service earnings must group by LINE: one invoice can mix services, so an
-- invoice-level service_id would mis-attribute it. `amount` is frozen at pick
-- time; `service_id` is attribution only and NEVER re-prices the line.
CREATE TABLE public.invoice_lines (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id      UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  invoice_id  UUID NOT NULL REFERENCES public.invoices(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  amount      NUMERIC(10,2) NOT NULL DEFAULT 0,
  service_id  UUID REFERENCES public.services(id) ON DELETE SET NULL,
  hours       NUMERIC(6,2),
  sort        INT NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT now(),
  deleted_at  TIMESTAMPTZ
);
CREATE INDEX invoice_lines_invoice_idx ON public.invoice_lines(invoice_id);
CREATE INDEX invoice_lines_org_idx     ON public.invoice_lines(org_id);
CREATE INDEX invoice_lines_service_idx ON public.invoice_lines(service_id);
ALTER TABLE public.invoice_lines ENABLE ROW LEVEL SECURITY;
CREATE POLICY il_admin ON public.invoice_lines FOR ALL
  USING (public.is_org_admin(org_id)) WITH CHECK (public.is_org_admin(org_id));
GRANT SELECT, INSERT, UPDATE, DELETE ON public.invoice_lines TO authenticated;
GRANT ALL ON public.invoice_lines TO service_role;


-- ── 15c. payments → invoices (added here: invoices must exist first) ───────
-- This is the single change that keeps EVERY Edge Function byte-identical: they
-- all insert a payment with booking_id only, and the trigger below fills in
-- invoice_id. Do not "improve" the Stripe functions to write invoice_id.
ALTER TABLE public.payments
  ADD COLUMN invoice_id UUID REFERENCES public.invoices(id) ON DELETE SET NULL;
CREATE INDEX payments_invoice_idx ON public.payments(invoice_id);
ALTER TABLE public.payments ADD CONSTRAINT payments_has_parent
  CHECK (booking_id IS NOT NULL OR invoice_id IS NOT NULL);

-- A payment inserted with only booking_id adopts that booking's invoice.
-- The ordering is DELIBERATE, not incidental: with a deposit invoice and a final
-- invoice on one booking, a bare `LIMIT 1` would attach money to whichever the planner
-- happened to return first. Rule: the OLDEST invoice that still has something
-- outstanding; if all are settled, the oldest. (A client paying a specific invoice link
-- already carries its invoice_id, so this only governs the booking-keyed fallback that
-- every Edge Function uses.)
CREATE OR REPLACE FUNCTION public.set_payment_invoice() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $f$
BEGIN
  IF NEW.invoice_id IS NULL AND NEW.booking_id IS NOT NULL THEN
    SELECT i.id INTO NEW.invoice_id
      FROM invoices i
     WHERE i.booking_id = NEW.booking_id AND i.deleted_at IS NULL
     ORDER BY
       (COALESCE((SELECT SUM(l.amount) FROM invoice_lines l
                   WHERE l.invoice_id = i.id AND l.deleted_at IS NULL), 0)
        - COALESCE((SELECT SUM(p.amount) FROM payments p
                     WHERE p.invoice_id = i.id AND p.status = 'completed'
                       AND p.deleted_at IS NULL), 0)) > 0 DESC,   -- unsettled first
       i.created_at ASC                                            -- then oldest
     LIMIT 1;
  END IF;
  RETURN NEW;
END $f$;
DROP TRIGGER IF EXISTS payments_set_invoice ON public.payments;
CREATE TRIGGER payments_set_invoice BEFORE INSERT ON public.payments
  FOR EACH ROW EXECUTE FUNCTION public.set_payment_invoice();

-- The reverse race: payments recorded BEFORE the booking's invoice row existed.
-- Restricted to the case it was written for — the booking's ONLY invoice. Without that
-- guard, raising a supplementary invoice on a booking would sweep up and STEAL payments
-- that belong to the original.
CREATE OR REPLACE FUNCTION public.adopt_booking_payments() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $f$
BEGIN
  IF NEW.booking_id IS NOT NULL
     AND (SELECT count(*) FROM invoices i
           WHERE i.booking_id = NEW.booking_id AND i.deleted_at IS NULL) = 1 THEN
    UPDATE payments SET invoice_id = NEW.id
     WHERE booking_id = NEW.booking_id AND invoice_id IS NULL;
  END IF;
  RETURN NEW;
END $f$;
DROP TRIGGER IF EXISTS invoices_adopt_payments ON public.invoices;
CREATE TRIGGER invoices_adopt_payments AFTER INSERT ON public.invoices
  FOR EACH ROW EXECUTE FUNCTION public.adopt_booking_payments();


-- ── 15d. Invoice numbering ─────────────────────────────────────────────────
-- UPDATE … RETURNING takes a row lock, so two concurrent issues can't collide.
-- (set_booking_ref's MAX()+1 still has that race; this deliberately doesn't
-- repeat it.) Reachable ONLY through next_invoice_seq — no grants on the table.
CREATE TABLE public.invoice_counters (
  org_id   UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  year     INT  NOT NULL,
  last_seq INT  NOT NULL DEFAULT 0,
  PRIMARY KEY (org_id, year)
);
ALTER TABLE public.invoice_counters ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.next_invoice_seq(p_org UUID, p_year INT)
RETURNS INT
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_seq INT;
BEGIN
  INSERT INTO invoice_counters (org_id, year, last_seq)
  VALUES (p_org, p_year, 0) ON CONFLICT (org_id, year) DO NOTHING;
  UPDATE invoice_counters SET last_seq = last_seq + 1
   WHERE org_id = p_org AND year = p_year
  RETURNING last_seq INTO v_seq;
  RETURN v_seq;
END $$;
REVOKE ALL ON FUNCTION public.next_invoice_seq(UUID,INT) FROM PUBLIC;


-- ── 15e. save_invoice — the ONLY write path for invoices ───────────────────
-- Replaces the old PostgREST .upsert({onConflict:'booking_id'}), which could only
-- write line_items/notes/issue_date keyed on a booking. An invoice now has its own
-- identity, may have no booking, and its lines must land in invoice_lines in the
-- SAME transaction.
--
-- PATCH SEMANTICS: on update, only keys PRESENT in p_invoice are written. An absent
-- key leaves its column alone; a key present with null clears it. This is load-
-- bearing — booking-form.component.ts sends only line items/notes/issue date, and
-- without it every booking edit would wipe client_id/staff_id/title/service_date.
-- Likewise p_lines = null means "don't touch the lines".
--
-- p_invoice: { id?, booking_id?, new_invoice?, client_id?, staff_id?, service_id?,
--              contact_name?, title?, service_date?, notes?, issue_date?,
--              amount_expenses?, status? }
-- p_lines:   [ { description, amount, serviceId?, hours? }, … ]   (array order = sort)
--
-- `new_invoice: true` raises an ADDITIONAL invoice against a booking that already has
-- one (the supplementary/variation invoice). Without it, a call carrying a booking_id
-- updates that booking's OLDEST invoice — which is what keeps booking-form's
-- every-edit save writing to the original document rather than a later one.
CREATE OR REPLACE FUNCTION public.save_invoice(p_org uuid, p_invoice jsonb, p_lines jsonb)
RETURNS uuid
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_id uuid; v_booking uuid; v_status text; v_year int; v_seq int; v_new boolean;
BEGIN
  IF NOT public.is_org_admin(p_org) THEN
    RAISE EXCEPTION 'forbidden' USING errcode = '42501';
  END IF;

  v_id      := NULLIF(p_invoice->>'id','')::uuid;
  v_booking := NULLIF(p_invoice->>'booking_id','')::uuid;
  v_new     := COALESCE((p_invoice->>'new_invoice')::boolean, false);

  -- Cross-tenant integrity (the guard the old RLS tautology never enforced).
  IF v_booking IS NOT NULL AND NOT EXISTS (
       SELECT 1 FROM bookings b
        WHERE b.id = v_booking AND b.org_id = p_org AND b.deleted_at IS NULL) THEN
    RAISE EXCEPTION 'booking not in org' USING errcode = '42501';
  END IF;

  -- Resolve which invoice to write: the booking's OLDEST. Never the newest, or editing
  -- a booking would start silently overwriting a supplementary invoice.
  IF v_id IS NULL AND v_booking IS NOT NULL AND NOT v_new THEN
    SELECT id INTO v_id FROM invoices
     WHERE booking_id = v_booking AND deleted_at IS NULL
     ORDER BY created_at ASC LIMIT 1;
  END IF;

  IF v_id IS NULL THEN
    INSERT INTO invoices (org_id, booking_id, client_id, staff_id, service_id, contact_name,
                          title, service_date, line_items, notes, issue_date,
                          amount_expenses, status)
    VALUES (p_org, v_booking,
            -- A new invoice INHERITS the booking's identity when the caller doesn't
            -- supply one. booking-form sends only line items, so without this every
            -- invoice it creates would have no client, title or date of its own — and
            -- those are exactly the fields that must outlive the booking if it is ever
            -- detached (delete_booking with "keep the invoice").
            COALESCE(NULLIF(p_invoice->>'client_id','')::uuid,
                     (SELECT b.client_id FROM bookings b WHERE b.id = v_booking)),
            COALESCE(NULLIF(p_invoice->>'staff_id','')::uuid,
                     (SELECT b.staff_id FROM bookings b WHERE b.id = v_booking)),
            NULLIF(p_invoice->>'service_id','')::uuid,
            COALESCE(NULLIF(p_invoice->>'contact_name',''),
                     (SELECT b.contact_name FROM bookings b WHERE b.id = v_booking)),
            COALESCE(NULLIF(p_invoice->>'title',''),
                     (SELECT b.title FROM bookings b WHERE b.id = v_booking)),
            COALESCE(NULLIF(p_invoice->>'service_date','')::date,
                     (SELECT (b.start_at AT TIME ZONE o.timezone)::date
                        FROM bookings b JOIN organizations o ON o.id = b.org_id
                       WHERE b.id = v_booking)),
            COALESCE(p_lines,'[]'::jsonb),
            NULLIF(p_invoice->>'notes',''),
            NULLIF(p_invoice->>'issue_date','')::date,
            COALESCE(NULLIF(p_invoice->>'amount_expenses','')::numeric, 0),
            COALESCE(NULLIF(p_invoice->>'status',''), 'issued'))
    RETURNING id INTO v_id;
  ELSE
    UPDATE invoices SET
      booking_id      = COALESCE(v_booking, booking_id),
      client_id       = CASE WHEN p_invoice ? 'client_id'
                             THEN NULLIF(p_invoice->>'client_id','')::uuid ELSE client_id END,
      staff_id        = CASE WHEN p_invoice ? 'staff_id'
                             THEN NULLIF(p_invoice->>'staff_id','')::uuid ELSE staff_id END,
      service_id      = CASE WHEN p_invoice ? 'service_id'
                             THEN NULLIF(p_invoice->>'service_id','')::uuid ELSE service_id END,
      contact_name    = CASE WHEN p_invoice ? 'contact_name'
                             THEN NULLIF(p_invoice->>'contact_name','') ELSE contact_name END,
      title           = CASE WHEN p_invoice ? 'title'
                             THEN NULLIF(p_invoice->>'title','') ELSE title END,
      service_date    = CASE WHEN p_invoice ? 'service_date'
                             THEN NULLIF(p_invoice->>'service_date','')::date ELSE service_date END,
      notes           = CASE WHEN p_invoice ? 'notes'
                             THEN NULLIF(p_invoice->>'notes','') ELSE notes END,
      issue_date      = CASE WHEN p_invoice ? 'issue_date'
                             THEN NULLIF(p_invoice->>'issue_date','')::date ELSE issue_date END,
      amount_expenses = CASE WHEN p_invoice ? 'amount_expenses'
                             THEN COALESCE(NULLIF(p_invoice->>'amount_expenses','')::numeric, 0)
                             ELSE amount_expenses END,
      status          = CASE WHEN p_invoice ? 'status'
                             THEN COALESCE(NULLIF(p_invoice->>'status',''), status) ELSE status END,
      line_items      = CASE WHEN p_lines IS NOT NULL THEN p_lines ELSE line_items END
    WHERE id = v_id AND org_id = p_org;
    IF NOT FOUND THEN
      RAISE EXCEPTION 'invoice not found in org' USING errcode = '42501';
    END IF;
  END IF;

  -- NOTE: invoice_lines is NOT written here. The invoices_sync_lines trigger (§15f)
  -- projects line_items -> invoice_lines on every write, so there is exactly ONE
  -- writer and the two representations cannot drift apart.

  -- Read the stored status back, so numbering reflects what was actually persisted.
  SELECT status INTO v_status FROM invoices WHERE id = v_id;

  -- Numbering stays DORMANT until invoice_counters is seeded (the Phase 2 backfill).
  -- Before that, invoice numbers are still derived from the booking ref, so issuing
  -- one here must not consume a sequence value and collide with a derived number.
  IF v_status = 'issued'
     AND EXISTS (SELECT 1 FROM invoice_counters WHERE org_id = p_org) THEN
    SELECT number_seq INTO v_seq FROM invoices WHERE id = v_id;
    IF v_seq IS NULL THEN
      -- Year comes from the ISSUE date (falling back to today), NOT the service date.
      -- The series must stay continuous: every historical number was formed from the
      -- year the record was created, and job dates span 2025-2027 while all refs read
      -- 2026. Numbering by service date would hand a 2027 shoot booked today a
      -- JFMB-2027-001 sitting next to JFMB-2026-125 — a second, parallel series.
      v_year := EXTRACT(YEAR FROM COALESCE(
                  NULLIF(p_invoice->>'issue_date','')::date, current_date))::int;
      v_seq  := public.next_invoice_seq(p_org, v_year);
      UPDATE invoices SET number_year = v_year, number_seq = v_seq WHERE id = v_id;
    END IF;
  END IF;

  RETURN v_id;
END $$;
GRANT EXECUTE ON FUNCTION public.save_invoice(uuid, jsonb, jsonb) TO authenticated;


-- ── 15f. invoice_lines is a PROJECTION of line_items ───────────────────────
-- `line_items` JSONB stays the write target (every existing caller writes it, and
-- _invoice_bundle / the public invoice page / payment-success all still read it).
-- This trigger keeps the normalised `invoice_lines` in lockstep, which means the two
-- representations CANNOT drift no matter who writes — save_invoice, a plain table
-- upsert from an older deployed frontend, or a manual fix in SQL. That's why
-- save_invoice deliberately does not write invoice_lines itself.
-- service_id is resolved via a lookup rather than a cast, so a serviceId pointing at
-- a service that no longer exists degrades to NULL instead of failing the FK.
CREATE OR REPLACE FUNCTION public.sync_invoice_lines() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $f$
BEGIN
  IF NEW.deleted_at IS NOT NULL THEN RETURN NULL; END IF;   -- don't revive a deleted invoice's lines
  DELETE FROM invoice_lines WHERE invoice_id = NEW.id;
  INSERT INTO invoice_lines (org_id, invoice_id, description, amount, service_id, hours, sort)
  SELECT NEW.org_id, NEW.id,
         COALESCE(e.value->>'description',''),
         COALESCE((e.value->>'amount')::numeric, 0),
         (SELECT s.id FROM services s WHERE s.id = NULLIF(e.value->>'serviceId','')::uuid),
         NULLIF(e.value->>'hours','')::numeric,
         e.ordinality - 1
    FROM jsonb_array_elements(COALESCE(NEW.line_items,'[]'::jsonb)) WITH ORDINALITY AS e(value, ordinality);
  RETURN NULL;
END $f$;
DROP TRIGGER IF EXISTS invoices_sync_lines ON public.invoices;
CREATE TRIGGER invoices_sync_lines AFTER INSERT OR UPDATE OF line_items ON public.invoices
  FOR EACH ROW EXECUTE FUNCTION public.sync_invoice_lines();


-- ── 15g. invoice_list — the invoice-rooted read model ──────────────────────
-- Mirrors work_board's shape deliberately: drives FROM the entity (invoices) and
-- LEFT JOINs outward, so a standalone invoice keeps its row and the booking-derived
-- columns degrade to NULL. Driving from bookings — as the old Invoices page did —
-- is precisely what made a bookingless invoice impossible to display.
-- A VIEW BYPASSES RLS, so per §18 this carries BOTH the authorization check and
-- every deleted_at filter in its own WHERE/JOINs.
CREATE OR REPLACE VIEW public.invoice_list AS
SELECT
  i.id, i.org_id, i.booking_id,
  (i.booking_id IS NOT NULL AND b.id IS NOT NULL)        AS has_booking,
  i.status, i.title, i.service_date, i.issue_date, i.notes,
  i.number_year, i.number_seq,
  -- Formatted ONCE here rather than in three frontend places. The prefix is per-org
  -- config (organizations.invoice_details.invoice_prefix), NOT a hardcoded 'INV'.
  CASE WHEN i.number_seq IS NULL THEN NULL
       ELSE COALESCE(UPPER(NULLIF(o.invoice_details->>'invoice_prefix','')), 'INV')
            || '-' || i.number_year || '-' || LPAD(i.number_seq::text, 3, '0')
  END                                                    AS invoice_number,
  -- Identity: the invoice's OWN fields win, falling back to the booking's — this is
  -- what lets an invoice outlive the booking it came from.
  i.client_id, i.staff_id, i.service_id,
  COALESCE(cl.name, i.contact_name, bcl.name, b.contact_name) AS client_name,
  st.name AS staff_name,
  sv.name AS service_name,
  -- Booking-derived; NULL for a standalone invoice.
  b.booking_ref, b.start_at AS booking_start_at, b.status AS booking_status,
  -- Gross is the sum of the LINES — never a stored total, which would be the second
  -- source of truth this restructure exists to remove.
  gross.amount_gross,
  gross.amount_gross - COALESCE(i.amount_expenses, 0)    AS amount_net,
  i.amount_expenses,
  paid.amount_paid,
  -- Floored at zero PER INVOICE: one client's overpayment must never cancel out
  -- another client's debt.
  GREATEST(0, gross.amount_gross - paid.amount_paid)     AS balance_due,
  CASE
    WHEN gross.amount_gross > 0
     AND paid.amount_paid >= gross.amount_gross - 0.005 THEN 'paid'
    WHEN paid.amount_paid > 0                           THEN 'partial'
    ELSE 'unpaid'
  END                                                    AS payment_status
FROM public.invoices i
LEFT JOIN LATERAL (
  SELECT COALESCE(SUM(l.amount), 0) AS amount_gross FROM public.invoice_lines l
   WHERE l.invoice_id = i.id AND l.deleted_at IS NULL) gross ON true
LEFT JOIN LATERAL (
  SELECT COALESCE(SUM(p.amount), 0) AS amount_paid FROM public.payments p
   WHERE p.invoice_id = i.id AND p.status = 'completed' AND p.deleted_at IS NULL) paid ON true
LEFT JOIN public.organizations o   ON o.id   = i.org_id
LEFT JOIN public.bookings      b   ON b.id   = i.booking_id AND b.deleted_at IS NULL
LEFT JOIN public.clients       cl  ON cl.id  = i.client_id  AND cl.deleted_at IS NULL
LEFT JOIN public.clients       bcl ON bcl.id = b.client_id  AND bcl.deleted_at IS NULL
LEFT JOIN public.staff         st  ON st.id  = i.staff_id   AND st.deleted_at IS NULL
LEFT JOIN public.services      sv  ON sv.id  = i.service_id AND sv.deleted_at IS NULL
WHERE (public.is_org_admin(i.org_id) OR public.is_platform_admin())
  AND i.deleted_at IS NULL;
GRANT SELECT ON public.invoice_list TO authenticated;


-- ── 15h. get_earnings — ONE definition of the money ────────────────────────
-- The dashboard reads these numbers rather than deriving its own. There are already
-- four divergent payment_status implementations in this codebase; a fifth money
-- calculation in the client would repeat exactly that mistake.
--
-- Two bases, deliberately BOTH returned (the owner asked to see each):
--   * work_done — issued invoices bucketed by SERVICE DATE (when the work happened)
--   * cash      — completed payments bucketed by PAYMENT DATE (when money arrived)
-- The old dashboard chart said "Collected · last 6 months" but bucketed by booking
-- start_at: its total was right while every bar sat in the wrong month.
--
-- There is deliberately NO p_service filter. A payment settles an invoice, not a line,
-- so a service filter could only apply honestly to the work-done half — and a filter
-- that silently doesn't affect one of the numbers on screen is worse than none.
-- Per-service is returned as a BREAKDOWN, grouped by LINE (an invoice can mix services).
CREATE OR REPLACE FUNCTION public.get_earnings(
  p_org   uuid,
  p_from  date DEFAULT NULL,
  p_to    date DEFAULT NULL,
  p_staff uuid DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_tz text; v_result jsonb;
BEGIN
  IF NOT (public.is_org_admin(p_org) OR public.is_platform_admin()) THEN
    RAISE EXCEPTION 'forbidden' USING errcode = '42501';
  END IF;

  SELECT timezone INTO v_tz FROM organizations WHERE id = p_org;
  v_tz := COALESCE(v_tz, 'UTC');

  WITH inv AS (
    SELECT i.id, i.staff_id, i.service_date, i.amount_expenses,
           COALESCE((SELECT SUM(l.amount) FROM invoice_lines l
                      WHERE l.invoice_id = i.id AND l.deleted_at IS NULL), 0) AS gross,
           COALESCE((SELECT SUM(p.amount) FROM payments p
                      WHERE p.invoice_id = i.id
                        AND p.status = 'completed' AND p.deleted_at IS NULL), 0) AS paid
      FROM invoices i
     WHERE i.org_id = p_org
       AND i.deleted_at IS NULL
       AND i.status = 'issued'
       AND (p_staff IS NULL OR i.staff_id = p_staff)
       AND (p_from  IS NULL OR i.service_date >= p_from)
       AND (p_to    IS NULL OR i.service_date <= p_to)
  ),
  pay AS (
    -- Joined through the invoice so the worker filter and org scoping apply;
    -- payments carry no worker of their own.
    SELECT p.amount,
           ((COALESCE(p.paid_at, p.created_at) AT TIME ZONE v_tz))::date AS cash_date,
           i.staff_id
      FROM payments p
      JOIN invoices i ON i.id = p.invoice_id
     WHERE i.org_id = p_org
       AND p.status = 'completed'
       AND p.deleted_at IS NULL
       AND i.deleted_at IS NULL
       AND i.status = 'issued'
       AND (p_staff IS NULL OR i.staff_id = p_staff)
  ),
  pay_scoped AS (
    SELECT * FROM pay
     WHERE (p_from IS NULL OR cash_date >= p_from)
       AND (p_to   IS NULL OR cash_date <= p_to)
  )
  SELECT jsonb_build_object(
    'totals', jsonb_build_object(
      'work_done_gross', COALESCE((SELECT SUM(gross) FROM inv), 0),
      'work_done_net',   COALESCE((SELECT SUM(gross - COALESCE(amount_expenses,0)) FROM inv), 0),
      'cash',            COALESCE((SELECT SUM(amount) FROM pay_scoped), 0),
      -- Floored PER INVOICE: one client's overpayment must never cancel out another's debt.
      'outstanding',     COALESCE((SELECT SUM(GREATEST(0, gross - paid)) FROM inv), 0),
      'invoices',        (SELECT count(*) FROM inv)
    ),
    'work_done_by_month', COALESCE((
      SELECT jsonb_agg(jsonb_build_object('month', m, 'amount', amt) ORDER BY m)
        FROM (SELECT to_char(date_trunc('month', service_date), 'YYYY-MM') AS m, SUM(gross) AS amt
                FROM inv WHERE service_date IS NOT NULL GROUP BY 1) t), '[]'::jsonb),
    'cash_by_month', COALESCE((
      SELECT jsonb_agg(jsonb_build_object('month', m, 'amount', amt) ORDER BY m)
        FROM (SELECT to_char(date_trunc('month', cash_date), 'YYYY-MM') AS m, SUM(amount) AS amt
                FROM pay_scoped GROUP BY 1) t), '[]'::jsonb),
    -- Grouped by LINE, never by invoice. Lines with no service land in a single
    -- "unattributed" bucket (service_id null) rather than being hidden.
    'by_service', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
               'service_id', sid, 'service_name', sname, 'amount', amt) ORDER BY amt DESC)
        FROM (SELECT l.service_id AS sid, s.name AS sname, SUM(l.amount) AS amt
                FROM invoice_lines l
                JOIN inv ON inv.id = l.invoice_id
                LEFT JOIN services s ON s.id = l.service_id
               WHERE l.deleted_at IS NULL
               GROUP BY l.service_id, s.name) t), '[]'::jsonb),
    'by_worker', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
               'staff_id', wid, 'staff_name', wname, 'gross', wgross, 'cash', wcash) ORDER BY wgross DESC)
        FROM (SELECT inv.staff_id AS wid, st.name AS wname, SUM(inv.gross) AS wgross,
                     COALESCE((SELECT SUM(ps.amount) FROM pay_scoped ps
                                WHERE ps.staff_id IS NOT DISTINCT FROM inv.staff_id), 0) AS wcash
                FROM inv
                LEFT JOIN staff st ON st.id = inv.staff_id
               GROUP BY inv.staff_id, st.name) t), '[]'::jsonb)
  ) INTO v_result;

  RETURN v_result;
END $$;
GRANT EXECUTE ON FUNCTION public.get_earnings(uuid, date, date, uuid) TO authenticated;


-- ── 15i. delete_booking — deleting a job ≠ writing off the money ───────────
-- Removing a job from the calendar and discarding its invoice are different
-- decisions, so the app ASKS at the moment of the action rather than applying a
-- fixed policy.
--
-- HOW KEEPING WORKS (and why it needs no session variable / GUC):
-- cascade_soft_delete_booking hides children by `booking_id`, so an invoice that has
-- already been DETACHED (booking_id = NULL) is simply not seen by it.
--
-- The subtlety: that same cascade also hides PAYMENTS by booking_id. Detaching only
-- the invoice would leave its payments to be soft-deleted, and the kept invoice would
-- silently read as UNPAID — its balance jumping back to the full amount. So the
-- payments are detached too; `payments_has_parent` permits a null booking_id
-- precisely because invoice_id is set.
--
-- A kept invoice becomes standalone: same number, status, lines and payments, and it
-- still displays because §15's denormalised client/worker/title/service_date outlive
-- the booking. That is why this must never ship before the backfill has run.
CREATE OR REPLACE FUNCTION public.delete_booking(
  p_booking      uuid,
  p_keep_invoice boolean DEFAULT false
)
RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
-- Handles N invoices: a booking may carry a deposit invoice, a final one, and a
-- supplementary one. Keeping detaches EVERY one of them.
DECLARE v_org uuid; v_ids uuid[]; v_kept int := 0;
BEGIN
  SELECT org_id INTO v_org FROM bookings WHERE id = p_booking AND deleted_at IS NULL;
  IF v_org IS NULL THEN                                   -- already gone → no-op
    RETURN jsonb_build_object('ok', true, 'kept_invoice', false, 'kept_count', 0);
  END IF;

  IF NOT (public.is_org_admin(v_org) OR public.is_platform_admin()) THEN
    RAISE EXCEPTION 'forbidden' USING errcode = '42501';
  END IF;

  SELECT array_agg(id) INTO v_ids
    FROM invoices WHERE booking_id = p_booking AND deleted_at IS NULL;

  IF p_keep_invoice AND v_ids IS NOT NULL THEN
    -- Order matters: detach BEFORE deleted_at fires the cascade. The payments must be
    -- detached too — the cascade hides them by booking_id, and a "kept" invoice whose
    -- payments were hidden reads as UNPAID with its full balance owing.
    UPDATE payments SET booking_id = NULL
     WHERE invoice_id = ANY(v_ids) AND booking_id = p_booking AND deleted_at IS NULL;
    UPDATE invoices SET booking_id = NULL WHERE id = ANY(v_ids);
    v_kept := array_length(v_ids, 1);
  END IF;

  -- SECURITY DEFINER bypasses the restrictive hide_deleted policy, which would
  -- otherwise reject this UPDATE (the row becomes invisible to the writer → 42501).
  UPDATE bookings SET deleted_at = now() WHERE id = p_booking AND deleted_at IS NULL;

  RETURN jsonb_build_object('ok', true, 'kept_invoice', v_kept > 0, 'kept_count', v_kept,
                            'invoice_ids', to_jsonb(COALESCE(v_ids, '{}')));
END $$;
GRANT EXECUTE ON FUNCTION public.delete_booking(uuid, boolean) TO authenticated;

-- ── 15j. Invoice-rooted bundle + share links that address an INVOICE ───────
-- An invoice can be printed and shared on its own, with no booking.
--
-- THREE DELIBERATE SAFETY CHOICES — do not "simplify" any of them:
--
-- 1. The bundle lives in a `private` schema that PostgREST does NOT expose. It is the
--    one function here with no internal authorization, and it was reachable only
--    because of a single REVOKE line. Any future edit that re-created it would restore
--    EXECUTE to PUBLIC and hand anon the org's bank details, every client's address and
--    VAT number, and the full payment history. Schema-level unreachability survives a
--    forgotten grant; a REVOKE does not. (This DB has no ALTER DEFAULT PRIVILEGES, so
--    every new function starts with EXECUTE to PUBLIC — hence the explicit REVOKEs.)
-- 2. public._invoice_bundle(UUID) is KEPT as a thin wrapper. Changing its signature
--    would mean DROP + CREATE, which resets privileges — the hazard above. Wrapping
--    leaves get_invoice and get_invoice_by_token untouched, so every pay link already
--    in a customer's hands keeps working byte for byte.
-- 3. Every RECORD is assigned by an UNCONDITIONAL `SELECT INTO`. In PL/pgSQL a record
--    never assigned raises 55000 on first field access — it is NOT implicitly NULL.
--    Assigning `b` inside `IF p_booking IS NOT NULL` would throw on every standalone
--    invoice: a 100% failure on exactly the case this exists for.
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;

-- A SEPARATE table from booking_links, not a widening of it: a booking_links token is a
-- PAY link (it unlocks card payment and the delivery paywall), so reusing it to share an
-- invoice would hand the recipient more capability than "look at this invoice". Separate
-- tables keep the capability sets disjoint by construction, and mean create-payment-intent
-- and accept-inperson — which read `link.bookings` with no null check — need no edits.
CREATE TABLE public.invoice_links (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id     UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  invoice_id UUID NOT NULL REFERENCES public.invoices(id) ON DELETE CASCADE,
  token      TEXT UNIQUE NOT NULL DEFAULT encode(gen_random_bytes(16), 'hex'),
  expires_at TIMESTAMPTZ,
  is_active  BOOLEAN NOT NULL DEFAULT true,
  opened_at  TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  deleted_at TIMESTAMPTZ
);
CREATE INDEX invoice_links_invoice_idx ON public.invoice_links(invoice_id);
-- No separate token index: UNIQUE(token) already provides one.
ALTER TABLE public.invoice_links ENABLE ROW LEVEL SECURITY;
CREATE POLICY ilink_admin ON public.invoice_links FOR ALL
  USING (public.is_org_admin(org_id))
  WITH CHECK (public.is_org_admin(org_id)
              AND EXISTS (SELECT 1 FROM public.invoices i
                           WHERE i.id = invoice_links.invoice_id
                             AND i.org_id = invoice_links.org_id));
-- SELECT ONLY to authenticated. `token` has a DEFAULT, not a constraint: with INSERT
-- granted a client could CHOOSE its value and plant a token matching another org's live
-- pay link, hijacking that org's circulated URL (UNIQUE is per-table, so no violation
-- would fire). It also removes the ability to UPDATE deleted_at back to NULL and
-- un-revoke a revoked link. Every write goes through the SECURITY DEFINER RPCs below.
GRANT SELECT ON public.invoice_links TO authenticated;
GRANT ALL    ON public.invoice_links TO service_role;  -- created after the blanket grant

CREATE OR REPLACE FUNCTION private._invoice_bundle(p_invoice UUID, p_booking UUID)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  i RECORD; b RECORD; org RECORD; cl RECORD;
  v_booking UUID; v_org UUID; v_prefix TEXT;
  items JSONB; total NUMERIC; paid NUMERIC; pays JSONB;
BEGIN
  SELECT id, org_id, booking_id, client_id, staff_id, contact_name, title,
         service_date, issue_date, notes, line_items, status, number_year, number_seq,
         amount_expenses
    INTO i FROM invoices
   WHERE deleted_at IS NULL
     AND ((p_invoice IS NOT NULL AND id = p_invoice)
       OR (p_invoice IS NULL AND p_booking IS NOT NULL AND booking_id = p_booking))
   ORDER BY created_at
   LIMIT 1;

  v_booking := COALESCE(i.booking_id, p_booking);

  SELECT id, org_id, client_id, contact_name, booking_ref, title, description, location,
         start_at, end_at, price_total, price_expenses, status, deposit_percent
    INTO b FROM bookings WHERE id = v_booking AND deleted_at IS NULL;

  v_org := COALESCE(i.org_id, b.org_id);
  IF v_org IS NULL THEN RETURN NULL; END IF;   -- neither an invoice nor a live booking

  SELECT name, currency, invoice_details INTO org FROM organizations WHERE id = v_org;
  v_prefix := COALESCE(UPPER(NULLIF(org.invoice_details->>'invoice_prefix','')), 'INV');

  -- The invoice's OWN client wins, falling back to the booking's — this is what lets a
  -- detached invoice still name who it bills.
  SELECT name, company, vat_number, billing_address, email, phone
    INTO cl FROM clients
   WHERE id = COALESCE(i.client_id, b.client_id) AND deleted_at IS NULL;

  IF i.line_items IS NOT NULL AND jsonb_array_length(i.line_items) > 0 THEN
    items := i.line_items;
  ELSIF b.id IS NOT NULL THEN
    items := jsonb_build_array(jsonb_build_object(
      'description', COALESCE(NULLIF(b.description, ''), b.title),
      'amount', GREATEST(0, b.price_total - COALESCE(b.price_expenses, 0))));
    IF COALESCE(b.price_expenses, 0) > 0 THEN
      items := items || jsonb_build_object('description', 'Travel & expenses', 'amount', b.price_expenses);
    END IF;
  ELSE
    items := '[]'::jsonb;
  END IF;

  SELECT COALESCE(SUM((e->>'amount')::numeric), 0) INTO total FROM jsonb_array_elements(items) e;
  -- Money keyed on the INVOICE when one exists, else the booking. invoice_list (§15g) and
  -- get_earnings (§15h) key on invoice_id; keying this on booking_id made the printable
  -- receipt disagree with the admin list the moment delete_booking(keep) detached a
  -- payment. The arms are mutually exclusive, so nothing is counted twice.
  SELECT COALESCE(SUM(p.amount), 0) INTO paid FROM payments p
   WHERE p.status = 'completed' AND p.deleted_at IS NULL
     AND ((i.id IS NOT NULL AND p.invoice_id = i.id)
       OR (i.id IS NULL     AND p.booking_id = v_booking));
  SELECT COALESCE(jsonb_agg(jsonb_build_object('amount', p.amount, 'method', p.method, 'paid_at', p.paid_at)
            ORDER BY COALESCE(p.paid_at, p.created_at)), '[]'::jsonb)
    INTO pays FROM payments p
   WHERE p.status = 'completed' AND p.deleted_at IS NULL
     AND ((i.id IS NOT NULL AND p.invoice_id = i.id)
       OR (i.id IS NULL     AND p.booking_id = v_booking));

  RETURN jsonb_build_object(
    'org', jsonb_build_object('name', org.name, 'currency', org.currency,
                              'invoice_details', org.invoice_details),
    'client', CASE
        WHEN cl.name IS NOT NULL THEN jsonb_build_object(
          'name', cl.name, 'company', cl.company, 'vat_number', cl.vat_number,
          'billing_address', cl.billing_address, 'email', cl.email, 'phone', cl.phone)
        WHEN COALESCE(i.contact_name, b.contact_name) IS NOT NULL THEN jsonb_build_object(
          'name', COALESCE(i.contact_name, b.contact_name), 'company', NULL, 'vat_number', NULL,
          'billing_address', NULL, 'email', NULL, 'phone', NULL)
        ELSE NULL END,
    -- NULL for a standalone invoice. Every consumer must null-check this.
    'booking', CASE WHEN b.id IS NULL THEN NULL ELSE jsonb_build_object(
        'id', b.id, 'booking_ref', b.booking_ref, 'location', b.location,
        'start_at', b.start_at, 'end_at', b.end_at, 'status', b.status,
        'price_total', b.price_total, 'deposit_percent', b.deposit_percent) END,
    'invoice', jsonb_build_object(
        'id',          i.id,
        'line_items',  items,
        'notes',       i.notes,
        'issue_date',  i.issue_date,
        'customized',  (i.line_items IS NOT NULL AND jsonb_array_length(i.line_items) > 0),
        'total',       total,
        -- Formatted once, server-side, from the org's prefix. The booking-ref fallback
        -- keeps every pre-existing invoice rendering exactly as it does today.
        'number',      CASE
                         WHEN i.number_seq IS NOT NULL
                           THEN v_prefix || '-' || i.number_year || '-' || LPAD(i.number_seq::text, 3, '0')
                         WHEN b.booking_ref IS NOT NULL
                           THEN v_prefix || '-' || SUBSTRING(b.booking_ref FROM POSITION('-' IN b.booking_ref) + 1)
                         ELSE NULL END,
        'service_date', COALESCE(i.service_date, b.start_at::date),
        'status',       i.status),
    'total_paid', paid, 'payments', pays);
END $$;
REVOKE ALL ON FUNCTION private._invoice_bundle(UUID, UUID) FROM PUBLIC;

-- Thin wrapper: same signature as before, so no DROP and no privilege reset.
CREATE OR REPLACE FUNCTION public._invoice_bundle(p_booking UUID)
RETURNS JSONB
LANGUAGE sql SECURITY DEFINER SET search_path = public
AS $$ SELECT private._invoice_bundle(NULL, p_booking); $$;
REVOKE ALL ON FUNCTION public._invoice_bundle(UUID) FROM PUBLIC;

-- Authed accessor keyed on the INVOICE: org admin of its org, OR the invoice's own
-- client (by the invoice's client_id, or its booking's — a detached invoice keeps the
-- first, which is why §15's denormalised identity matters).
CREATE OR REPLACE FUNCTION public.get_invoice_by_id(p_invoice UUID)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_org UUID; v_client UUID; v_booking_client UUID; v_booking UUID;
BEGIN
  SELECT org_id, client_id, booking_id INTO v_org, v_client, v_booking
    FROM invoices WHERE id = p_invoice AND deleted_at IS NULL;
  IF v_org IS NULL THEN RETURN NULL; END IF;

  SELECT client_id INTO v_booking_client FROM bookings
   WHERE id = v_booking AND deleted_at IS NULL;

  IF NOT (public.is_org_admin(v_org)
          OR (COALESCE(v_client, v_booking_client) IS NOT NULL
              AND COALESCE(v_client, v_booking_client) = public.current_client_id(v_org))) THEN
    RAISE EXCEPTION 'forbidden' USING errcode = '42501';
  END IF;
  RETURN private._invoice_bundle(p_invoice, NULL);
END $$;
-- The REVOKE is NOT optional: this database has no ALTER DEFAULT PRIVILEGES, so a newly
-- created function starts with EXECUTE granted to PUBLIC and the GRANT below would
-- restrict nothing. Same for the two functions after this one.
REVOKE ALL ON FUNCTION public.get_invoice_by_id(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_invoice_by_id(UUID) TO authenticated;

-- Mint (or reuse) a share token for an invoice. Reuse-or-mint so pressing "Copy link"
-- repeatedly doesn't accumulate live tokens for the same invoice.
CREATE OR REPLACE FUNCTION public.create_invoice_link(p_invoice UUID)
RETURNS TEXT LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_org UUID; v_token TEXT;
BEGIN
  SELECT org_id INTO v_org FROM invoices WHERE id = p_invoice AND deleted_at IS NULL;
  IF v_org IS NULL THEN RAISE EXCEPTION 'invoice not found' USING errcode = '42501'; END IF;
  IF NOT public.is_org_admin(v_org) THEN
    RAISE EXCEPTION 'forbidden' USING errcode = '42501';
  END IF;

  SELECT token INTO v_token FROM invoice_links
   WHERE invoice_id = p_invoice AND is_active AND deleted_at IS NULL
     AND (expires_at IS NULL OR expires_at > now())
   ORDER BY created_at DESC LIMIT 1;
  IF v_token IS NOT NULL THEN RETURN v_token; END IF;

  INSERT INTO invoice_links (org_id, invoice_id) VALUES (v_org, p_invoice)
  RETURNING token INTO v_token;
  RETURN v_token;
END $$;
REVOKE ALL ON FUNCTION public.create_invoice_link(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_invoice_link(UUID) TO authenticated;

-- Revoke every share link for an invoice (a leaked link, or work withdrawn).
CREATE OR REPLACE FUNCTION public.revoke_invoice_links(p_invoice UUID)
RETURNS INT LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_org UUID; v_n INT;
BEGIN
  SELECT org_id INTO v_org FROM invoices WHERE id = p_invoice AND deleted_at IS NULL;
  IF v_org IS NULL THEN RETURN 0; END IF;
  IF NOT public.is_org_admin(v_org) THEN
    RAISE EXCEPTION 'forbidden' USING errcode = '42501';
  END IF;
  UPDATE invoice_links SET is_active = false, deleted_at = now()
   WHERE invoice_id = p_invoice AND deleted_at IS NULL;
  GET DIAGNOSTICS v_n = ROW_COUNT;
  RETURN v_n;
END $$;
REVOKE ALL ON FUNCTION public.revoke_invoice_links(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.revoke_invoice_links(UUID) TO authenticated;

-- Authed accessor: org admin of the booking's org OR the booking's own client.
CREATE OR REPLACE FUNCTION public.get_invoice(p_booking UUID)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_org UUID; v_client UUID;
BEGIN
  SELECT org_id, client_id INTO v_org, v_client FROM bookings WHERE id = p_booking;
  IF v_org IS NULL THEN RETURN NULL; END IF;
  IF NOT (public.is_org_admin(v_org) OR (v_client IS NOT NULL AND v_client = public.current_client_id(v_org))) THEN
    RAISE EXCEPTION 'forbidden' USING errcode = '42501';
  END IF;
  RETURN public._invoice_bundle(p_booking);
END;
$$;
GRANT EXECUTE ON FUNCTION public.get_invoice(UUID) TO authenticated;

-- Token accessor: anon-safe. A valid active pay link already grants access to that
-- booking's pay page, so it can also fetch the invoice (for the success page + the
-- printable invoice opened by a customer who isn't signed in).
CREATE OR REPLACE FUNCTION public.get_invoice_by_token(p_token TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_invoice UUID; v_booking UUID;
BEGIN
  -- Probe invoice_links FIRST (a share link addresses the invoice), then fall back to
  -- booking_links so every pay link already in a customer's hands is unaffected. A token
  -- cannot collide across the two tables because neither is client-writable.
  SELECT il.invoice_id INTO v_invoice
    FROM invoice_links il
    JOIN invoices i ON i.id = il.invoice_id AND i.deleted_at IS NULL
                   AND i.org_id = il.org_id
   WHERE il.token = p_token AND il.is_active AND il.deleted_at IS NULL
     AND (il.expires_at IS NULL OR il.expires_at > now());
  IF v_invoice IS NOT NULL THEN
    RETURN private._invoice_bundle(v_invoice, NULL);
  END IF;

  -- `deleted_at IS NULL` matters: this is SECURITY DEFINER, so it bypasses the
  -- restrictive hide_deleted policy (§18). Without it a soft-deleted pay link
  -- still resolved and served its invoice.
  SELECT booking_id INTO v_booking FROM booking_links
   WHERE token = p_token AND is_active
     AND deleted_at IS NULL
     AND (expires_at IS NULL OR expires_at > now());
  IF v_booking IS NULL THEN RETURN NULL; END IF;
  RETURN private._invoice_bundle(NULL, v_booking);
END;
$$;
GRANT EXECUTE ON FUNCTION public.get_invoice_by_token(TEXT) TO anon, authenticated;

-- Token accessor for the PAY PAGE (/book/:token). Replaces the old anon SELECT on
-- bookings/booking_links: RLS cannot see the client's `.eq('token', …)` filter, so a
-- token-less policy plus an anon table grant let anyone with the publishable key
-- enumerate every active pay link platform-wide. Resolution happens in here instead,
-- where the token IS a predicate. Returns exactly the fields the page renders — built
-- with an explicit jsonb_build_object (never to_jsonb(row)) so a future column can't
-- silently start leaking. Also filters both soft-delete flags, so a deleted booking's
-- link correctly reads as invalid.
CREATE OR REPLACE FUNCTION public.get_booking_by_token(p_token TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE b RECORD;
BEGIN
  SELECT bk.booking_ref, bk.title, bk.description, bk.location,
         bk.start_at, bk.end_at, bk.price_total, bk.price_expenses,
         bk.allow_card, bk.allow_inperson, bk.deposit_percent, bk.deposit_allowed,
         bk.status, bk.google_event_id
    INTO b
    FROM booking_links bl
    JOIN bookings bk ON bk.id = bl.booking_id AND bk.deleted_at IS NULL
   WHERE bl.token = p_token
     AND bl.is_active
     AND bl.deleted_at IS NULL
     AND (bl.expires_at IS NULL OR bl.expires_at > now());
  IF NOT FOUND THEN RETURN NULL; END IF;

  RETURN jsonb_build_object(
    'booking_ref', b.booking_ref, 'title', b.title, 'description', b.description,
    'location', b.location, 'start_at', b.start_at, 'end_at', b.end_at,
    'price_total', b.price_total, 'price_expenses', b.price_expenses,
    'allow_card', b.allow_card, 'allow_inperson', b.allow_inperson,
    'deposit_percent', b.deposit_percent, 'deposit_allowed', b.deposit_allowed,
    'status', b.status, 'google_event_id', b.google_event_id);
END;
$$;
GRANT EXECUTE ON FUNCTION public.get_booking_by_token(TEXT) TO anon, authenticated;


-- ── 16. Org creation & membership (platform-admin gated) ───────────────────
-- Orgs are NOT self-serve: only a platform admin can create one. The creator
-- becomes its owner (so it appears in their switcher). Org admins (or platform
-- admins) then add members by email — the invitee must have signed in once
-- (exists in auth.users) since there's no email-invite infra yet. All gated &
-- org-scoped; auth.users is only reachable here via SECURITY DEFINER.
CREATE OR REPLACE FUNCTION public.create_org(p_name TEXT, p_slug TEXT, p_timezone TEXT DEFAULT 'Europe/Malta', p_currency TEXT DEFAULT 'EUR')
RETURNS UUID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_org UUID; v_uid UUID := auth.uid();
BEGIN
  IF v_uid IS NULL THEN RAISE EXCEPTION 'not signed in'; END IF;
  IF NOT public.is_platform_admin() THEN RAISE EXCEPTION 'forbidden' USING errcode = '42501'; END IF;
  INSERT INTO public.organizations (slug, name, timezone, currency)
    VALUES (lower(trim(p_slug)), trim(p_name), p_timezone, upper(p_currency)) RETURNING id INTO v_org;
  INSERT INTO public.org_members (org_id, user_id, role) VALUES (v_org, v_uid, 'owner');
  RETURN v_org;
END $$;
GRANT EXECUTE ON FUNCTION public.create_org(TEXT, TEXT, TEXT, TEXT) TO authenticated;

CREATE OR REPLACE FUNCTION public.add_org_member(p_org UUID, p_email TEXT, p_role TEXT)
RETURNS TEXT LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_uid UUID;
BEGIN
  IF NOT (public.is_org_admin(p_org) OR public.is_platform_admin()) THEN RAISE EXCEPTION 'forbidden' USING errcode = '42501'; END IF;
  IF p_role NOT IN ('owner','admin','staff') THEN RAISE EXCEPTION 'bad_role'; END IF;
  SELECT id INTO v_uid FROM auth.users WHERE lower(email) = lower(trim(p_email));
  IF v_uid IS NULL THEN RETURN 'no_user'; END IF;   -- they must sign in once first
  INSERT INTO public.org_members (org_id, user_id, role) VALUES (p_org, v_uid, p_role)
    ON CONFLICT (org_id, user_id) DO UPDATE SET role = EXCLUDED.role;
  RETURN 'ok';
END $$;
GRANT EXECUTE ON FUNCTION public.add_org_member(UUID, TEXT, TEXT) TO authenticated;

CREATE OR REPLACE FUNCTION public.remove_org_member(p_org UUID, p_user UUID)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT (public.is_org_admin(p_org) OR public.is_platform_admin()) THEN RAISE EXCEPTION 'forbidden' USING errcode = '42501'; END IF;
  IF (SELECT role FROM public.org_members WHERE org_id = p_org AND user_id = p_user) = 'owner'
     AND (SELECT count(*) FROM public.org_members WHERE org_id = p_org AND role = 'owner') <= 1 THEN
    RAISE EXCEPTION 'last_owner';
  END IF;
  DELETE FROM public.org_members WHERE org_id = p_org AND user_id = p_user;
END $$;
GRANT EXECUTE ON FUNCTION public.remove_org_member(UUID, UUID) TO authenticated;

CREATE OR REPLACE FUNCTION public.list_org_members(p_org UUID)
RETURNS TABLE(user_id UUID, email TEXT, role TEXT) LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT (public.is_org_admin(p_org) OR public.is_platform_admin()) THEN RAISE EXCEPTION 'forbidden' USING errcode = '42501'; END IF;
  RETURN QUERY
    SELECT m.user_id, u.email::TEXT, m.role
    FROM public.org_members m JOIN auth.users u ON u.id = m.user_id
    WHERE m.org_id = p_org ORDER BY m.role, u.email;
END $$;
GRANT EXECUTE ON FUNCTION public.list_org_members(UUID) TO authenticated;


-- ── 17. Client deliveries ──────────────────────────────────────────────────
-- What the client GETS after the job: a free-text message and/or N labelled links
-- (Drive / WeTransfer / gallery). Keyed 1:1 to the booking and edited as a whole on
-- the booking-detail screen — same shape as invoices (§15). No file uploads.
-- `links` shape: [{ "label": text, "url": text }, …].
-- VISIBILITY: the client sees it on /book/:token only when the booking is paid in full
-- OR `released_at` is set (goodwill early delivery, and €0-comped bookings which can
-- never be "paid in full"). Enforced server-side in get_delivery_by_token below —
-- locked content NEVER reaches the browser.
CREATE TABLE public.deliveries (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id      UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  booking_id  UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  message     TEXT,
  links       JSONB NOT NULL DEFAULT '[]'::jsonb,
  released_at TIMESTAMPTZ,                       -- manual override: visible regardless of payment
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now(),
  deleted_at  TIMESTAMPTZ,
  UNIQUE (booking_id)                            -- also provides the booking_id index
);
CREATE INDEX deliveries_org_idx ON public.deliveries(org_id);

ALTER TABLE public.deliveries ENABLE ROW LEVEL SECURITY;
-- WITH CHECK also verifies the booking belongs to org_id, so an admin of org A can't
-- attach a delivery to org B's booking (cross-tenant integrity) — mirrors inv_admin.
-- Names QUALIFIED — the previous version's `b.org_id = org_id` bound both sides to
-- `bookings` inside the subquery (`b.org_id = b.org_id`), so the cross-tenant guard
-- never ran. Same bug as the old inv_admin (§15).
CREATE POLICY del_admin ON public.deliveries FOR ALL
  USING (public.is_org_admin(org_id))
  WITH CHECK (public.is_org_admin(org_id)
              AND EXISTS (SELECT 1 FROM public.bookings b
                           WHERE b.id = deliveries.booking_id
                             AND b.org_id = deliveries.org_id));

GRANT SELECT, INSERT, UPDATE, DELETE ON public.deliveries TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.deliveries TO service_role;  -- created after the blanket service_role grant
-- deliberately NOTHING to anon: the public page reads via get_delivery_by_token only.

CREATE TRIGGER deliveries_updated BEFORE UPDATE ON public.deliveries
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Token accessor: anon-safe. Returns the delivery behind an active pay link. Content
-- (message + links) is returned ONLY when unlocked; when locked it still reports
-- `exists` + `link_count` + `remaining` so the page can render a teaser without ever
-- receiving the content. SECURITY DEFINER bypasses RLS, so every table it reads
-- filters deleted_at itself (§18 rule).
CREATE OR REPLACE FUNCTION public.get_delivery_by_token(p_token TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  b RECORD; d RECORD;
  v_paid NUMERIC; v_has BOOLEAN; v_unlocked BOOLEAN;
BEGIN
  SELECT bk.id, bk.price_total INTO b
    FROM booking_links bl
    JOIN bookings bk ON bk.id = bl.booking_id AND bk.deleted_at IS NULL
   WHERE bl.token = p_token
     AND bl.is_active
     AND bl.deleted_at IS NULL
     AND (bl.expires_at IS NULL OR bl.expires_at > now());
  IF NOT FOUND THEN RETURN NULL; END IF;                 -- unresolved / expired token

  SELECT id, message, links, released_at, updated_at INTO d
    FROM deliveries WHERE booking_id = b.id AND deleted_at IS NULL;

  -- "Attached" means there is something to show — a cleared row must look like no row.
  v_has := d.id IS NOT NULL
       AND (NULLIF(btrim(COALESCE(d.message, '')), '') IS NOT NULL
            OR jsonb_array_length(COALESCE(d.links, '[]'::jsonb)) > 0);
  IF NOT v_has THEN RETURN jsonb_build_object('exists', false); END IF;

  SELECT COALESCE(SUM(amount), 0) INTO v_paid
    FROM payments
   WHERE booking_id = b.id AND status = 'completed' AND deleted_at IS NULL;

  -- Paid in full (card OR admin-recorded cash/bank — same ledger), or manually released.
  v_unlocked := d.released_at IS NOT NULL
             OR (v_paid >= b.price_total AND b.price_total > 0);

  RETURN jsonb_build_object(
    'exists',     true,
    'unlocked',   v_unlocked,
    'remaining',  GREATEST(0, ROUND(b.price_total - v_paid, 2)),
    'link_count', jsonb_array_length(COALESCE(d.links, '[]'::jsonb)),
    'message',    CASE WHEN v_unlocked THEN d.message ELSE NULL END,
    'links',      CASE WHEN v_unlocked THEN COALESCE(d.links, '[]'::jsonb) ELSE '[]'::jsonb END,
    'updated_at', CASE WHEN v_unlocked THEN d.updated_at ELSE NULL END);
END;
$$;
GRANT EXECUTE ON FUNCTION public.get_delivery_by_token(TEXT) TO anon, authenticated;


-- ── 18. Soft delete (DB-enforced) ──────────────────────────────────────────
-- Items are never hard-deleted: every item table has `deleted_at` (defined inline
-- above), and deleting sets it. Reads exclude deleted rows at the DB level via a
-- RESTRICTIVE SELECT policy per table — a restrictive policy is AND-ed with every
-- permissive read policy, so ALL paths (admin/staff/client/token/anon) hide deleted
-- rows automatically; service_role (Edge Functions) has BYPASSRLS and still sees them
-- (for restore/cascade). The booking_summary/work_board views and the SECURITY DEFINER
-- functions (get_busy_ranges, _invoice_bundle) bypass RLS, so they filter `deleted_at`
-- explicitly (above). The no-overlap EXCLUDE is `WHERE (blocking AND deleted_at IS NULL)`
-- so a deleted booking frees its slot.
-- RULE: a new item table MUST get `deleted_at` + a hide_deleted policy here; a new
-- SECURITY DEFINER reader MUST filter `deleted_at IS NULL` itself.
DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['bookings','booking_slots','booking_links','payments','invoices','invoice_lines',
                           'invoice_links','deliveries','clients','services','staff','staff_services',
                           'tasks','work_items'] LOOP
    EXECUTE format('DROP POLICY IF EXISTS hide_deleted ON public.%I', t);
    EXECUTE format('CREATE POLICY hide_deleted ON public.%I AS RESTRICTIVE FOR SELECT USING (deleted_at IS NULL)', t);
  END LOOP;
END $$;

-- Soft-deleting a booking cascade-soft-deletes its children (mirrors the old ON DELETE
-- CASCADE, but reversible and audit-preserving).
CREATE OR REPLACE FUNCTION public.cascade_soft_delete_booking() RETURNS TRIGGER
LANGUAGE plpgsql AS $f$
BEGIN
  IF NEW.deleted_at IS NOT NULL AND OLD.deleted_at IS NULL THEN
    UPDATE public.booking_slots SET deleted_at = NEW.deleted_at WHERE booking_id = NEW.id AND deleted_at IS NULL;
    UPDATE public.booking_links SET deleted_at = NEW.deleted_at WHERE booking_id = NEW.id AND deleted_at IS NULL;
    UPDATE public.payments      SET deleted_at = NEW.deleted_at WHERE booking_id = NEW.id AND deleted_at IS NULL;
    UPDATE public.invoices      SET deleted_at = NEW.deleted_at WHERE booking_id = NEW.id AND deleted_at IS NULL;
    UPDATE public.deliveries    SET deleted_at = NEW.deleted_at WHERE booking_id = NEW.id AND deleted_at IS NULL;
    UPDATE public.tasks         SET deleted_at = NEW.deleted_at WHERE booking_id = NEW.id AND deleted_at IS NULL;
    UPDATE public.work_items    SET deleted_at = NEW.deleted_at WHERE booking_id = NEW.id AND deleted_at IS NULL;
  END IF;
  RETURN NEW;
END $f$;
DROP TRIGGER IF EXISTS bookings_cascade_soft_delete ON public.bookings;
CREATE TRIGGER bookings_cascade_soft_delete AFTER UPDATE OF deleted_at ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.cascade_soft_delete_booking();

-- Soft-deleting an invoice hides its lines AND kills its share links. Without the
-- second UPDATE a revoked invoice's token keeps resolving — the exact bug already
-- recorded once for booking links.
CREATE OR REPLACE FUNCTION public.cascade_soft_delete_invoice() RETURNS TRIGGER
LANGUAGE plpgsql AS $f$
BEGIN
  IF NEW.deleted_at IS NOT NULL AND OLD.deleted_at IS NULL THEN
    UPDATE public.invoice_lines SET deleted_at = NEW.deleted_at
     WHERE invoice_id = NEW.id AND deleted_at IS NULL;
    UPDATE public.invoice_links SET deleted_at = NEW.deleted_at, is_active = false
     WHERE invoice_id = NEW.id AND deleted_at IS NULL;
  END IF;
  RETURN NEW;
END $f$;
DROP TRIGGER IF EXISTS invoices_cascade_soft_delete ON public.invoices;
CREATE TRIGGER invoices_cascade_soft_delete AFTER UPDATE OF deleted_at ON public.invoices
  FOR EACH ROW EXECUTE FUNCTION public.cascade_soft_delete_invoice();

-- Soft-deleting a work_item (board card) hides its checklist tasks too.
CREATE OR REPLACE FUNCTION public.cascade_soft_delete_work_item() RETURNS TRIGGER
LANGUAGE plpgsql AS $f$
BEGIN
  IF NEW.deleted_at IS NOT NULL AND OLD.deleted_at IS NULL THEN
    UPDATE public.tasks SET deleted_at = NEW.deleted_at WHERE work_item_id = NEW.id AND deleted_at IS NULL;
  END IF;
  RETURN NEW;
END $f$;
DROP TRIGGER IF EXISTS work_items_cascade_soft_delete ON public.work_items;
CREATE TRIGGER work_items_cascade_soft_delete AFTER UPDATE OF deleted_at ON public.work_items
  FOR EACH ROW EXECUTE FUNCTION public.cascade_soft_delete_work_item();

-- Soft-delete WRITE path. A direct `UPDATE ... SET deleted_at = now()` from the app is
-- rejected by the restrictive hide_deleted SELECT policy (the new row becomes invisible,
-- which Postgres re-checks during the update → 42501). So all app soft-deletes go through
-- this SECURITY DEFINER RPC: it bypasses RLS for the write while still authorizing the
-- caller against the row's own org. Reads stay protected by the restrictive policies above.
-- Cascade triggers (booking → children, work_item → tasks) still fire on the UPDATE.
CREATE OR REPLACE FUNCTION public.soft_delete(p_table text, p_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $f$
DECLARE v_org uuid;
BEGIN
  -- NOTE re 'deliveries': allowed here for completeness/manual use, but the app must NOT
  -- wire a delete button to it — an upsert(onConflict:booking_id) can't resolve its conflict
  -- target against a soft-deleted row (hide_deleted hides it), so "Remove" clears in place.
  IF p_table NOT IN ('bookings','payments','services','staff','work_items','tasks',
                     'deliveries','invoices','invoice_lines') THEN
    RAISE EXCEPTION 'soft_delete: table % not allowed', p_table USING errcode = '42501';
  END IF;
  EXECUTE format('SELECT org_id FROM public.%I WHERE id = $1 AND deleted_at IS NULL', p_table)
    INTO v_org USING p_id;
  IF v_org IS NULL THEN RETURN; END IF;                 -- already gone / not found → no-op
  IF NOT (public.is_org_admin(v_org) OR public.is_platform_admin()) THEN
    RAISE EXCEPTION 'forbidden' USING errcode = '42501';
  END IF;
  EXECUTE format('UPDATE public.%I SET deleted_at = now() WHERE id = $1 AND deleted_at IS NULL', p_table)
    USING p_id;
END $f$;
GRANT EXECUTE ON FUNCTION public.soft_delete(text, uuid) TO authenticated;


-- ── 19. Automatic Google Calendar purge on delete/cancel ───────────────────
-- A booking's Google Calendar event must be removed when the booking is soft-deleted
-- or cancelled, regardless of which client did it (a stale frontend, a bulk action, a
-- direct DB change). Postgres can't call Google, so this trigger fires an async HTTP
-- POST (pg_net) to the `purge-booking-events` Edge Function, which deletes the event(s)
-- (booking row + every slot) and clears the ids. Idempotent: if the frontend already
-- removed them via cancel-booking, the function finds nothing to do.
-- One-time setup (NOT re-runnable from this file — secret value is not stored here):
--   CREATE EXTENSION IF NOT EXISTS pg_net;
--   CREATE EXTENSION IF NOT EXISTS supabase_vault;
--   SELECT vault.create_secret('<random>', 'purge_secret', 'shared secret for purge-booking-events');
--   -- set the SAME value as the PURGE_SECRET env secret on the Edge Function.
CREATE OR REPLACE FUNCTION public.purge_booking_calendar() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $f$
DECLARE v_secret text;
BEGIN
  IF (NEW.deleted_at IS NOT NULL AND OLD.deleted_at IS NULL)
     OR (NEW.status = 'cancelled' AND OLD.status IS DISTINCT FROM 'cancelled') THEN
    SELECT decrypted_secret INTO v_secret FROM vault.decrypted_secrets WHERE name = 'purge_secret';
    PERFORM net.http_post(
      url     := 'https://odmwjhysvvbhxytyefhv.supabase.co/functions/v1/purge-booking-events',
      headers := jsonb_build_object('Content-Type','application/json','x-purge-secret', v_secret),
      body    := jsonb_build_object('bookingId', NEW.id)
    );
  END IF;
  RETURN NEW;
END $f$;
DROP TRIGGER IF EXISTS bookings_purge_calendar ON public.bookings;
CREATE TRIGGER bookings_purge_calendar AFTER UPDATE OF deleted_at, status ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.purge_booking_calendar();
