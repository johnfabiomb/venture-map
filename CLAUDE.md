# Project Guide — Venture Map (Malta)

Angular 19 standalone-component app. No new Angular Modules. Routing via `app.routes.ts`.

---

## Living Documents — Always Keep in Sync

All files below must stay accurate at all times. After completing any task that touches the relevant area, update them immediately — before reporting the task as done. Never wait to be asked.

### This file (`CLAUDE.md`)

Update when:
- A new page or route is added or removed
- A new shared component, service, utility, or pattern is introduced
- A feature flag is added, changed, or removed
- A key architectural decision is made (e.g. a new data flow, a new third-party integration)
- A convention documented here changes in practice
- Anything listed in Key Files is added, renamed, or deleted

**What counts as significant:** if a future Claude session would be confused or make a wrong decision without knowing about it — it belongs here.

**What does not belong here:** implementation details, code snippets that duplicate what the code already says, or anything derivable by reading the source files.

### `documentation/CHANGELOG.md`

**Must be updated before every commit.** Add a new entry under `## Unreleased` (or a dated version heading for a release). Keep entries concise — one line per meaningful change, grouped under `### Added`, `### Fixed`, or `### Changed`. Never skip this step.

### `documentation/ADDING_LOCATIONS.md`

Update when:
- A new location is added (bump the max `id` field)
- The location JSON schema changes (new fields, renamed fields, removed fields)
- The image pipeline or scripts change
- The `mapPoints` / `routes` structure changes

### `documentation/DEPLOYMENT.md`

Update when:
- Build commands, npm scripts, or output paths change
- A new deployment target or environment is added
- The version-bump strategy changes

### `documentation/deploy-staging-from-branch.md`

Update when:
- The staging branch name or deploy workflow changes
- The git checkout strategy for `docs/test/` changes

---

## Design System

All shared tokens and reusable classes live in **`src/styles.scss`** — never duplicate them in a component.

### CSS Custom Properties (defined in `body {}`)

```
--color-primary        #F4A922   (brand orange/gold)
--color-primary-hover  #e09a1a
--color-primary-shadow rgba(244, 169, 34, 0.3)
--color-text-base      #111827
--color-text-secondary #374151
--color-text-muted     #6b7280
--color-text-light     #9ca3af
--color-border         #e5e7eb
--color-bg             #fff
--color-bg-light       #f9fafb
--color-bg-muted       #f3f4f6
--color-bg-hover       #eaecef
--radius-sm            6px
--radius-md            8px
--radius-lg            10px
--radius-xl            12px
--shadow-sm            0 1px 5px rgba(0,0,0,0.25)
--shadow-md            0 2px 14px rgba(0,0,0,0.14)
--shadow-panel         0 -4px 24px rgba(0,0,0,0.12)
--transition           0.15s

# Editorial brand palette (landing page look, used by public editorial pages
# such as /malta/30-places-2026, not by the map-app UI)
--color-primary-deep   #d98e12
--color-cream          #fbf7ef
--color-cream-line     #e7ddca
--color-charcoal       #15171c
--color-warm-muted     #6f675b
```

Always use these vars in component SCSS. Never hardcode `#F4A922`, `#e5e7eb`, etc.

### Global Classes (already in `styles.scss`)

**Text utility — preserve user line breaks:** any element rendering free-text a user typed in a textarea (description, notes, invoice charges) must use `class="text-multiline"` (`white-space: pre-line`). Without it HTML collapses the newlines into one run-on line.

**Map page layout** — use for any page that has a map + side panel:
```html
<div class="map-layout">           <!-- 100dvh flex column -->
  <div class="map-layout__main">  <!-- flex row (desktop) / column (mobile) -->
    <div class="map-layout__map"> <!-- fills remaining space -->
      <app-map ...></app-map>
    </div>
    <div class="map-layout__panel" #panelWrap ...> <!-- 380px desktop / 62vh mobile bottom sheet -->
      <button class="collapse-btn" ...>  <!-- desktop-only left-edge arrow -->
      <app-panel-shell ...>
    </div>
  </div>
  <app-footer></app-footer>
</div>
```

Mobile behaviour is automatic: panel stacks below map at 62vh with `margin-top: -20px` overlap and `border-radius: 14px 14px 0 0`. JS drag-to-resize and `applyPanelHeight()` handle the rest.

**Shared map buttons:**
```html
<!-- Re-open panel after it's been hidden -->
<button class="show-panel-btn" *ngIf="mapOnly" (click)="mapOnly = false">
  <i class="fa fa-list"></i>
</button>

<!-- Floating pill back button over map -->
<button class="floating-back-btn" (click)="goBack()">
  <i class="fa fa-chevron-left"></i> Back to map
</button>

<!-- Accent variant (brand color background) -->
<button class="floating-back-btn floating-back-btn--accent" ...>
```

**Badges:**
```html
<span class="badge badge--island">Gozo</span>
<span class="badge badge--hidden">hidden gem</span>
<span class="badge badge--easy">easy</span>
<span class="badge badge--medium">medium</span>
<span class="badge badge--hard">hard</span>
<!-- Dynamic background (e.g. from difficultyColor()): -->
<span class="badge" [style.background]="difficultyColor(item.difficulty)">{{ item.difficulty }}</span>
```

**Filter chips:**
```html
<div class="chip" [class.active]="isActive" (click)="toggle()">Label</div>
```
The `.chip` base is global. `filter-bar.component.scss` overrides sizing for the floating filter bar — that's the only valid override.

**Map filter bar is one single-select row** (`filter-bar.component.ts`): `All · Gems · Experiences · Events · Caves · Beaches · Historical · Gozo · Comino` — content types first, then gem themes. Picking a type shows only that type's pins; picking a theme shows gems filtered to it. The bar injects the bridge directly (no `@Output`) and **derives its active chip from bridge state** (`mapLayers` + `filters`) so it never drifts. `bridge.mapLayers` (`MapLayers` signal, all types on by default) controls visibility; `MapExploreComponent`'s `effect()` maps active types → `experiencePins`/`eventVenuePins`; the map's `showGems` input hides location pins when Gems isn't shown. Keep it simple — don't reintroduce a "Deals" chip (it's the Experiences type) or stacked sub-filter rows.

---

## Page Layout Patterns

### Map + Panel page (map-explore, coupons, location-list)

These three routes share a **persistent map** via `MapShellComponent`. The shell owns the single `<app-map>` instance and a `<router-outlet>` whose child component is swapped without reloading the map.

**Architecture:**
```
MapShellComponent  (path: '' under /malta)
  ├── <app-map>         ← single persistent instance, never destroyed on sub-nav
  └── <router-outlet>
        ├── MapExploreComponent  (path: '', pathMatch: full)
        ├── LocationListComponent (path: 'list')
        └── DealsComponent       (path: 'deals')
```

Non-map routes (`/malta/30-places-2026`, `/malta/plan`) are direct siblings of the shell — **not** children.

**Communication via `MapBridgeService`** (`src/app/shared/services/map-bridge.service.ts`):
- Provided in `MapShellComponent` (scoped, not root)
- Child components inject the bridge to configure map inputs (`filters`, `providerPins`, `selectedLocation`) and UI state (`showFilterBar`, `panelOpen`, `mapOnly`, `floatingBackBtn`)
- Map events flow to children via Subjects: `locationSelected$`, `providerPinSelected$`, `gpsCoord$`
- Children emit via: `floatingBackBtnClicked$`, `scrollToTop$`
- `bridge.panel` is the shared `PanelResize` instance — all three children call `bridge.panel.expand()`, `bridge.panel.minimize()`, `bridge.panel.onDragStart/Move/End()`

**Panel visibility** — critical design:
- The shell's panel `<div>` is **always in the DOM** (never `*ngIf`)
- Hidden via `[class.panel--hidden]` (`display: none`) so the router-outlet and child components stay alive and can subscribe to bridge events
- `bridge.panelOpen.set(true/false)` controls this class

**Each child configures the bridge in `ngOnInit`:**
```typescript
// Example (map-explore)
this.bridge.showFilterBar.set(true);
this.bridge.panelOpen.set(false);  // no location selected initially
this.bridge.floatingBackBtn.set(null);

// Then subscribe to bridge events:
this.bridge.locationSelected$.pipe(takeUntilDestroyed(this.destroyRef))
  .subscribe(loc => this.onLocationSelected(loc));
```

**Panel drag bindings** (in child templates, bound to `bridge.panel`):
```html
[minimized]="bridge.panel.minimized()"
(dragStart)="bridge.panel.onDragStart($event)"
(dragMove)="bridge.panel.onDragMove($event)"
(dragEnd)="bridge.panel.onDragEnd($event)"
(toggleCollapse)="bridge.toggleMinimize()"
```

**Panel close navigation:**
- Always route-navigate on close (not just `mapOnly = true`) so the browser back button works
- Within a page, sub-panels (e.g. provider detail inside deals) can clear state without navigating

**Panel close button on mobile:**
- The `×` close button is visible on all panels by default (no need for `showCloseOnMobile`)
- This is standard — do not hide it on mobile in panel-shell.component.scss

### Full-screen (non-map) pages
Pages like `top-places`, `home`, `privacy` use their own root class and don't use `.map-layout`.

---

## Component File Structure

**Prefer a single `.ts` file** (inline `template` and `styles`) for small, self-contained components — when the template fits in ~50 lines and the styles in ~80 lines. The `pwa-prompt` and `share-button` components are the reference pattern.

Use separate `templateUrl` / `styleUrl` files only when the component is large enough that a single file becomes unwieldy to navigate.

---

## Component SCSS Rules

- **Global** (`styles.scss`): layout, shared buttons, badges, chips, design tokens
- **Component** (`*.component.scss`): only what is unique to that component

If you find yourself writing the same CSS in two components, it belongs in `styles.scss`.

Component SCSS should use `var(--color-primary)` etc. — no hardcoded hex for anything covered by the token list above.

---

## SEO, Prerendering & Analytics

### Build configurations

| Config | Command | Output | Base href | Notes |
|---|---|---|---|---|
| **staging** | `ng build` (default) | `docs/test/` | `/test/` | No optimization, source maps on, uses `feature-flags.staging.ts` and `index.staging.html` |
| **production** | `ng build --configuration production` | `docs/` | `/` | Full optimization, uses `feature-flags.production.ts` |

Both configs use the same `prerender-routes.txt` and `discoverRoutes: false`.

> **SSR vs prerendering:** `ssr: false` is set in both configs — the app does **not** run a Node server at request time. Prerendering generates static HTML files at build time only. Angular 17+ requires a `server.ts` entry point for the prerender builder even with `ssr: false`; that file exists but is never served in production.

---

### Prerendering

Routes are prerendered via **`prerender-routes.txt`** (project root). Every route listed there gets a static HTML file at build time, which Google indexes instantly.

**Current prerendered routes:**
```
/                                 (personal LANDING page — LandingComponent, standalone, outside map chrome; was a redirect to /malta)
/malta                            (map explore)
/malta/list                       (location list)
/malta/deals                      (deals)
/malta/30-places-2026             (top places editorial)
/malta/providers/santa-maria-watersports
/malta/locations/:slug            (all 74 location detail pages — see prerender-routes.txt)
/pay, /privacy, /cookies, /about, /contact
```
> The booking app (`/book*`, `/bookings*`, `/pay/success`) is intentionally **NOT prerendered and `noindex`** — no SEO is wanted for it yet. Its routes are served by `docs/404.html` (which `make-404.js` marks `noindex` + a booking OG card). Don't add booking routes to `prerender-routes.txt` or the sitemap.

**Rule: every new public route must be added to `prerender-routes.txt`.**

The only exceptions are:
- Feature-flagged routes (e.g. `/malta/plan` uses `canMatch: [() => FEATURES.ROUTE_BUILDER]`) — omit until the flag is on in production
- Routes that should not be indexed (add `noindex` in SEO service instead, but still consider prerendering for performance)

Location detail pages use clean `/malta/locations/:slug` URLs and **are prerendered**. Each location has an explicit `slug` field in `locations.json` — do not compute slugs from titles at runtime.

---

### SEO checklist — adding a new page

When adding a new public route, do **all four** of these:

1. **`prerender-routes.txt`** — add the route path (e.g. `/malta/new-page`)
2. **`src/app/map/core/services/seo.service.ts`** — add a new key to `setPage()` with `title`, `desc`, `url`. Add `noindex: true` for pages that must not be indexed (e.g. payment success, internal tools)
3. **`src/sitemap.xml`** — add a `<url>` entry with appropriate `priority` and `changefreq` (see priorities below). Update `lastmod` to today's date
4. **Component `ngOnInit`** — call `this.seo.setPage('your-page-key')`

**SEO priorities:**

| Page type | Priority | changefreq |
|---|---|---|
| Home (`/`) | 1.0 | weekly |
| Individual locations (`/malta/locations/:slug`) | 0.8 | daily |
| Browse/discovery pages (`/malta`, `/malta/list`, `/malta/deals`) | 0.7 | weekly |
| Content/editorial pages (`/malta/30-places-2026`) | 0.6 | monthly |
| Utility pages (`/about`, `/contact`, `/privacy`, `/cookies`) | 0.4 | monthly |
| Internal/transactional (`/pay`, `/pay/success`) | omit from sitemap | noindex |

---


### SEO checklist — adding a new location

See **`documentation/ADDING_LOCATIONS.md`** for the full step-by-step workflow including image conversion and thumbnail generation.

SEO-specific requirements when adding to `src/assets/locations.json`:

1. **`slug` field** — freeze it immediately; never change after publishing — it would break indexed URLs.
2. **`prerender-routes.txt`** — add `/malta/locations/{slug}`
3. **`src/sitemap.xml`** — regenerated automatically by `node scripts/generate-sitemap.js`
4. **`location.keywords`** — used by `seo.service.ts` for `<meta name="keywords">`

---

### Analytics

**`AnalyticsService`** (`src/app/map/core/services/analytics.service.ts`) wraps Google Analytics via `gtag`. Two methods:

```typescript
analyticsService.pageView(url: string, title: string)   // fires a GA page_view event
analyticsService.event(name: string, params: Record<string, any>)  // fires a custom GA event
```

**Rules:**
- Every new **page component** must fire `analyticsService.pageView(window.location.href, 'Page Title')` in `ngOnInit` (browser-only — guard with `isPlatformBrowser`)
- Every significant **user interaction** (opening a location, navigating to a map point, clicking a CTA) should fire a named `analyticsService.event()`
- `analyticsService` is currently wired only into `map.component.ts` (location opens) and `location-detail.component.ts` (navigation, recommendations, explore). Static pages (`/about`, `/contact`, etc.) do **not** currently fire pageView — add it if tracking those matters

**Existing event names to stay consistent with:**
- `location_view` — params: `location_title`, `location_id`, `location_tags`
- `navigate_to_point` — params: `location_title`, `point_type`
- `recommendation_click` — params: `from_location`, `to_location`
- `explore_malta_click` — params: `from_location`

---

## Feature Flags

Feature flags live in `src/app/map/feature-flags.ts` and are swapped at build time via `fileReplacements` in `angular.json`. **The `feature-flags.ts` file is only used by `ng serve` — deployed builds always use the environment-specific file.**

| Flag | dev (`ng serve`) | staging | production |
|---|---|---|---|
| `FEATURES.PROMOTIONS` | `true` | `true` | `false` (flip to `true` when ready) |
| `FEATURES.ROUTE_BUILDER` | `false` | `false` | `false` |
| `FEATURES.GROUPS` | `true` | `true` | `true` (teaser visible to all; per-user Supabase field controls real access) |

**Per-user feature access (Groups early access):**
- `FEATURES.GROUPS = true` shows the teaser to all users (locked state)
- `users.feature_access_groups = true` in Supabase gives real access to a specific user
- Checked via `UserDataService.groupsUnlocked()` computed signal (read once at login)
- Admin activates users via the **Users** tab in the admin panel at `/malta/admin` (email input)
- Change takes effect on the user's next login

**Adding a new flag:**
1. Add the key to all three files (`feature-flags.ts`, `feature-flags.staging.ts`, `feature-flags.production.ts`)
2. Default to `false` in production until explicitly ready to ship
3. Use `canMatch: [() => FEATURES.FLAG_NAME]` on the route to gate an entire page, or `*ngIf="FEATURES.FLAG_NAME"` in a template to gate a UI element
4. If the route is gated, **do not** add it to `prerender-routes.txt` or `sitemap.xml` until the flag is on in production

---

## Deploy

The site is hosted on **GitHub Pages** at `johnfabiomb.com` (CNAME in `docs/`). There is no CI pipeline — deploy is manual by pushing the built output.

| Target | Build command | Output dir | URL |
|---|---|---|---|
| Production | `ng build --configuration production` | `docs/` | `https://johnfabiomb.com` |
| Staging | `ng build` (default) | `docs/test/` | `https://johnfabiomb.com/test/` |

**Deploy steps:**
1. Run the build command
2. Commit the `docs/` changes
3. Push to **`page-final`** — that is the branch GitHub Pages actually serves (Pages source: branch `page-final`, path `/docs`, confirmed against the Pages API). **Not `main`:** `origin/main` has had no `docs/` commit since 2026-06-01, so pushing there deploys nothing while appearing to succeed.

Staging (`/test/`) has `<meta name="robots" content="noindex">` in `index.staging.html` and a `[STAGING]` title prefix — it is never indexed by Google.

**Social link previews for dynamic/token pages** (pay link `/book/:token`, invoice `/book/invoice?token=…`, booking `/book`): social crawlers don't run JS, so the client-side `seo.service.ts` can't set their card — that only works on **prerendered** routes. Instead the OG meta is baked into static HTML at build (shared rewriter `scripts/og-meta.js`; branded 1200×630 images from `scripts/gen-og-images.js`):
- **`scripts/make-404.js`** stamps `docs/404.html` (the booking-app fallback for every non-prerendered route, incl. the path-token pay link) with a "Booking" card.
- **`scripts/make-share-pages.js`** emits `docs/<path>/index.html` for literal-path routes (`/book`, `/book/invoice`) with their own cards.
GitHub Pages serves each file for its path (query ignored), so crawlers get a real card while the human boots the SPA in place. Both run in `deploy` after the prod build. Cards are branded (per type), not per-record — per-record needs an edge/SSR endpoint. Token-in-path routes can only use the 404 card (no per-file page). Add a literal-path route to `PAGES` to extend.

---

## Key Files

| File | Purpose |
|---|---|
| `src/styles.scss` | Global tokens + shared classes — **and the booking platform's `.btn` / `.btn--danger` / `.field` / `.field__top` / `.field-row`**. ⚠ These MUST be global: `admin.shared.scss` is `@use`d by page components, so it compiles into each PAGE's scoped CSS and never reaches a `ui/` component. A component with its own `.scss` can `@use` the partial; one with **inline `styles: []` cannot**, and silently renders browser defaults — this shipped on eight dialogs. `npm run check:styles` (also gating `npm run deploy`) fails the build naming any component that renders a shared class nothing styles |
| `src/app/map/feature-flags.ts` | Map feature flags for `ng serve` (swapped at build time) |
| `src/environments/feature-flags.production.ts` | Production flag values |
| `src/environments/feature-flags.staging.ts` | Staging flag values |
| `prerender-routes.txt` | Routes Angular prerenders at build time |
| `src/sitemap.xml` | Manually maintained XML sitemap submitted to Google |
| `src/app/app.routes.ts` | Root router — combines booking and map route files |
| `src/app/map/map.routes.ts` | All map module routes |
| `src/app/booking/booking.routes.ts` | All booking module routes |
| `src/app/map/map-root.component.ts` | Map module root — all map overlays (auth modal, welcome popup, modals, PWA prompt). The welcome popup skips `QUIET_PATHS` (the 30 Places page) and shows on the first other page instead |
| `src/app/booking/core/db/supabase.bookings.ts` | Bookings Supabase client (jm-bookings project; swapped at build time — see `angular.json` fileReplacements) |
| `src/environments/supabase.bookings.production.ts` | Production bookings Supabase config |
| `src/app/booking/core/services/bookings-auth.service.ts` | Bookings auth — Google OAuth + magic link; org-scoped access via `org_members` (role `owner`/`admin`). **Never `await` a Supabase call inside `onAuthStateChange` — defer with `setTimeout(0)` or the client deadlocks.** Also owns the **worker scope** (`staffId`, `staff`, `activeStaff`, `isOrgScope`, `setActiveStaff`, `loadStaff`) — a second axis beside `orgId`, persisted in the SAME localStorage entry (⚠ `persistCache()` writes it and `readCache()` must read it back — omitting the key there silently reverted the scope on every page load) and **cleared whenever the org changes** (a staff id from another org filters every query to zero rows). `BookingDataService.scoped(q)` is the single place that applies it to a query; pages must not re-filter themselves. Money rule: a worker scope shows **Contribution** (revenue − direct costs); overheads belong to the organization and are excluded — see `documentation/WORKER_SCOPE_AND_WORK_TASKS.md` |
| `src/app/booking/core/services/booking-data.service.ts` | Loads `booking_summary` + `clients`; scoped to `PlatformShellComponent` (not root) |
| `src/app/booking/core/services/working-hours.service.ts` | Admin working hours config (read/write `admin_settings`) |
| `src/app/booking/core/interfaces/` | Booking domain types — `booking.interface.ts` (`BookingSummary`, `Client`, `NewBookingForm`, `PaymentStatus`) and `working-hours.interface.ts` |
| `src/app/booking/core/guards/booking-auth.guards.ts` | `adminGuard` + `loginGuard` for the `/bookings` routes |
| `supabase/bookings-schema.sql` | jm-bookings Supabase schema — **single source of truth**: multi-tenant tables, org-scoped RLS helpers (`is_org_admin`, `is_org_member`, `current_staff_id`, `current_client_id`, `is_platform_admin`), worker-partitioned no-overlap `EXCLUDE` constraint. Apply changes to the live DB **and** this file together. (The former `core/db/schema.sql` and `supabase/migrations/*` were deleted.) **SOFT DELETE is a hard rule:** every item table has `deleted_at` and a `RESTRICTIVE` RLS policy `hide_deleted (deleted_at IS NULL)` so all reads exclude deleted rows DB-side. Never hard-`DELETE` an item. **Soft-delete WRITES go through the `soft_delete(p_table, p_id)` RPC** — a direct `UPDATE ... deleted_at` from the app is rejected by the restrictive policy (the new row goes invisible → `42501`), so the app calls `rpc('soft_delete', {p_table, p_id})` (SECURITY DEFINER, bypasses RLS for the write, gated on `is_org_admin`; allowlist: bookings/payments/services/staff/work_items/tasks). A new item table MUST get `deleted_at` + the restrictive policy + an allowlist entry in `soft_delete` (current item tables incl. `deliveries`); a new `SECURITY DEFINER` function/view that reads item tables MUST add `deleted_at IS NULL` itself (it bypasses RLS). **Inverse caveat:** any uniqueness/sequence generator (e.g. `set_booking_ref`'s `MAX(...)+1`) must see *all* rows incl. soft-deleted — so it must be `SECURITY DEFINER` (bypass RLS); under invoker rights the restrictive policy hides deleted rows and the generator reuses a value → `UNIQUE` violation. Cascades: `bookings_cascade_soft_delete` (booking → slots/payments/invoices/links/tasks/cards) and `work_items_cascade_soft_delete` (card → tasks); the no-overlap `EXCLUDE` is `WHERE (blocking AND deleted_at IS NULL)` so a deleted booking frees its slot. (`unassignService`/`org_members` removal stay hard — re-creatable links; `resetInvoice` clears the override in place.) **§15 is the money model:** an invoice may link to a booking (**several invoices per booking** — see the many-invoices note below) or stand alone (`booking_id` NULL), and carries its own `client_id`/`staff_id`/`service_id`/`title`/`service_date` so it outlives its booking. Charges live in **`invoice_lines`** (§15b) — per-service reporting groups by LINE, since one invoice can mix services; `line_items` JSONB is a legacy mirror that is still dual-written (don't drop it until `_invoice_bundle`, the public invoice page and payment-success stop reading it). **All invoice writes go through the `save_invoice(p_org, p_invoice, p_lines)` RPC** — never a table upsert; it PATCHES (only keys present in `p_invoice` are written, which is load-bearing: `booking-form` sends only line items and would otherwise wipe the invoice's own client/worker/date). Numbering comes from `invoice_counters` + `next_invoice_seq` (§15d) and takes its **year from the issue date, not the service date**, so the series stays continuous. `payments.invoice_id` is filled by the `set_payment_invoice` trigger from the `booking_id` Edge Functions already write — **never make a Stripe/webhook function write `invoice_id` itself**. Read via the **`invoice_list`** view (§15g), which like `work_board` bypasses RLS and therefore carries its own org check + `deleted_at` filters. **`invoice_lines` is a trigger-maintained PROJECTION of `line_items`** (`invoices_sync_lines`, §15f) — write the JSONB and the normalised rows follow, so the two can never drift no matter who writes; `save_invoice` deliberately doesn't write `invoice_lines` itself. **All earnings come from `get_earnings(p_org, p_from, p_to, p_staff)`** (§15h) — never recompute money in a component; it returns both bases (work done by `service_date`, cash by payment date), plus `by_service` (grouped by LINE, since an invoice can mix services) and `by_worker`. It deliberately has **no service filter**: a payment settles an invoice, not a line. **Deleting a booking goes through `delete_booking(p_booking, p_keep_invoice)`** (§15i), not `soft_delete` — keeping the invoices detaches them **and their payments** before the delete, because the booking cascade hides children by `booking_id` and would otherwise leave a kept invoice reading as unpaid. **A booking may carry SEVERAL invoices** (deposit + final, or a supplementary one raised when scope grows — an issued invoice is a document the client holds, so you raise another rather than editing it). There is deliberately **no `UNIQUE(booking_id)`**; *"the booking's invoice"* means the **OLDEST** everywhere (`save_invoice`, the printable bundle, the editor), so existing share links never silently jump to a later document. `save_invoice`'s `p_invoice.new_invoice = true` raises an additional one; `set_payment_invoice` routes a booking-keyed payment to the oldest invoice **with an outstanding balance**. One invoice still belongs to at most one booking — consolidated billing across several jobs would need a join table and is not built. **Printing/sharing (§15j):** the bundle lives in a `private` schema PostgREST does not expose (`private._invoice_bundle(p_invoice, p_booking)`), entered by either key; `public._invoice_bundle(uuid)` is kept as a thin wrapper so no caller changed and no privileges were reset. Share links use **`invoice_links`** — a token addressing an INVOICE, granting only "view this invoice", unlike a `booking_links` pay token which also unlocks card payment and the delivery paywall; the table is `GRANT SELECT` only, all writes via `create_invoice_link` / `revoke_invoice_links`. **Paying an invoice** goes through the separate **`create-invoice-payment-intent`** Edge Function (balance only, no deposit on invoices; the amount is computed server-side and never sent by the client). `_shared/record-payment.ts` accepts an intent naming **either** a booking or an invoice, and skips the booking-confirm + calendar sync when there is no booking — it must send `invoice_id` **only when set**. It is **not an upsert any more**: both the success page and the webhook record the same intent, and a PostgREST upsert rewrites every column it is given on conflict — which flipped a REFUNDED payment back to `completed` whenever a client re-opened their receipt, and rewrote `paid_at` to now() so re-opening an old receipt moved that payment into the current month. It now INSERTs once (23505 treated as a benign race) and returns a typed result separating a PERMANENT failure from a TRANSIENT one, so `stripe-webhook` can return non-2xx and let Stripe retry instead of silently acknowledging money it never recorded. **§20 is invoice email:** `invoice_sends` is the send log AND the recipient memory (a reminder pre-fills with the union of every address an invoice has reached — `log_invoice_draft` is the only browser-writable path and hardcodes `channel='mailto', status='drafted'` so a browser can never claim a Gmail send). `organizations.invoice_settings` holds payment terms, sender identity and the email templates — deliberately **NOT** `invoice_details`, because `_invoice_bundle` returns that blob wholesale and `get_invoice_by_token` is granted to `anon`. `invoices.due_date` is **materialised at issue** by `save_invoice`, never computed on read, so changing the org's terms can't move a due date the client already holds; `invoice_list` exposes `is_overdue`/`days_overdue`, computed on read because this project has no cron. The per-org Gmail credential lives in `org_google_accounts` (**RLS on, no policies, service_role grants only** — an org admin must not read their own token) with the refresh token in **Supabase Vault**; `google_connection_status` is all the UI ever sees. **The booking form creates EITHER a booking or a standalone work task**, decided by the blocks: all-post-production → `createWorkOnly()` (work item + slots, no booking/invoice/link); any shoot block → the normal path. The two records stay separate on purpose — a booking carries a ref, a price, a deposit and a public pay link, and an editing evening must never acquire those. **§32 is CALENDAR COLOUR:** a shoot's event colour is `bookings.calendar_color_id` (an explicit override) → `organizations.booking_params.booking_color_id` (the org default, seeded `'9'` Blueberry) → `'9'`. Post-production does NOT use it — it takes its colour from `work_stages.color_id` (seeded Banana/yellow), which is what makes editing distinguishable from a shoot on a shared calendar. The override is stored rather than resolved at read time so changing the org default never repaints a deliberate choice, and `update_booking` PATCHES it (an edit omitting the key must not clear it). ⚠ **There are TWO `create_booking` definitions in this file** — the original §5 two-arg one and the §30 three-arg one that replaces it; a change must be made to BOTH or applied from the later one, or it goes live in the dead definition only. **§30 is "a time block can BE the ticket":** `create_booking(p_booking, p_slots, p_work)` — the third argument creates the post-production ticket AND its reserved blocks in the same transaction, mirroring how the invoice is created from the line items. The 2-arg signature was DROPPED (overloads cause PostgREST ambiguity) and `p_work` defaults to NULL, so existing 2-arg callers still resolve. Work blocks are `booking_slots` with `work_item_id` set, NOT `booking_id` — and `p_slots` must therefore exclude them, because the booking's start/end envelope is `min/max` over `p_slots` and an editing evening would otherwise stretch the job's dates. The ticket goes through `create_work_item` (never a bare INSERT) so `booking_id` AND the `work_item_bookings` join row are both written. It stays in the **Backlog** on purpose — `work_board.is_active` promotes it when the shoot ends, which is why the booking form has no Status field. The toggle is available when **editing** too: `update_booking` deletes slots `WHERE booking_id = …` so work blocks survive it untouched, but it cannot create or change a ticket — so the edit path writes it through the work APIs (`addWorkItem`/`updateWorkItem`/`assignCard`/`setDue`/`setWorkSlots`/`syncWorkEvent`) after the booking saves. ⚠ The edit form MUST prefill **both** slot kinds: `setWorkSlots` REPLACES a ticket's blocks, so loading only `getBookingSlots` (which filters by `booking_id`) would silently wipe the reserved editing time on the next save. Clearing all work blocks keeps the ticket and only drops its reserved time — never delete the card, which holds the brief and checklist. `bookings.needs_production` is retained for the legacy trigger and old rows but is **no longer offered in the UI**. **§27 is INVITATIONS:** `org_invites` + `invite_org_member` / `claim_org_invites` / `list_org_invites`. An invitation is written BEFORE the person has an account and claimed on their first sign-in — `bookings-auth.service.ts` calls `claim_org_invites()` inside `resolveRole` **before** reading `org_members`, which is load-bearing: an invited person has no membership row yet, so claiming afterwards would still show them "no access". It can carry `staff_name`/`staff_color` so `apply_invite_staff` creates their worker row on acceptance. Inviting cannot bypass §26 — only an owner may invite an `owner`. **§28 is CALENDARS** (see the Google Calendar note above). **§29 is CHANGE HISTORY:** `record_history` (org_id, table, record, action, changed_by, `{field:{from,to}}` diff) written by the `record_history_trg` AFTER trigger on bookings/invoices/payments/expenses/work_items/clients/services/staff. **SELECT-only for admins, no INSERT/UPDATE/DELETE grant** — an audit trail the audited can edit is not one. A soft delete is recorded as `action='delete'`, not "changed deleted_at". Read via `record_history_for(table, id)`. Deliberately NOT on `booking_slots` (a time edit already shows on its booking) or the credential tables. **§26 is OWNERSHIP + TENANCY GOVERNANCE:** `created_by UUID DEFAULT auth.uid()` on invoices/payments/expenses/work_items/clients — ⚠ on **bookings** the audit column is **`created_by_user`**, because `bookings.created_by` is a pre-existing TEXT `'admin'|'client'` flag that drives `slot_set_blocking` and the client-insert policy; overloading it would break double-booking prevention, and `ADD COLUMN IF NOT EXISTS` hides the clash silently. The default means the value comes from the verified JWT **inside** the DB (unforgeable by the app); a service-role insert records NULL = "the system did this". `ON DELETE SET NULL`, never CASCADE. Resolved for display by `creator_label(org, user)` (prefers the staff name over the email, returns NULL for a user outside that org so it can't enumerate across tenants) and exposed as `created_by_name` on `booking_summary` / `invoice_list` / `work_board`. **Not backfilled** — an invented audit trail is worth nothing. Also: `is_org_owner()` + `add_org_member` now requires OWNER to grant/re-role `owner` (an admin could otherwise self-promote and remove the owner); `link_staff_user(p_staff, p_email)` + `org_member_emails(p_org)` because `staff.user_id` — which `current_staff_id()` and the `bk_staff_r` policy depend on — had no writer at all; and `REVOKE TRUNCATE … FROM anon, authenticated` (RLS does not apply to TRUNCATE, so it bypassed every policy here). **§25 is WORK TASK DETAIL:** `work_items.description` + `work_items.work_type` (a `work_types` KEY — a per-org table, not a TypeScript constant, because `ensureWorkEvent` needs the label too and a constant would have to be duplicated into the Edge Function and would drift on the first rename) + `work_items.done_at`, maintained by the `work_items_track_done` trigger. "Terminal" is always the stage's own `is_done`, **never the string `'delivered'`**. `work_board` gained `description`, `work_type`, `work_type_label`, `stage_label`, `stage_is_done`, `done_at` and `is_archived` — all appended, because `CREATE OR REPLACE VIEW` can only add columns to the end. `is_archived` is computed **on read** (no cron in this project) from `done_at` against `booking_params.work_archive_days`, and it joins `work_stages` for `is_done` rather than trusting `done_at` alone, so un-flagging a stage as terminal returns its cards to the board without touching a row. **§21 is RESTORE:** soft delete is reversible via `restore_booking` / `restore_invoice`, read through `list_deleted_bookings` / `list_deleted_invoices` — all four are `SECURITY DEFINER` because `hide_deleted` is RESTRICTIVE and an admin's own SELECT can never return a deleted row. Restore matches children on the PARENT'S `deleted_at` timestamp (the cascade stamps it), so it reverses exactly one delete and leaves separately-deleted rows alone — never write a blanket `deleted_at IS NOT NULL` un-delete. Slots are restored one at a time inside their own subtransaction, because `booking_slots_no_overlap` would otherwise abort the whole restore when that time has since been re-sold; conflicts are returned in `slots_conflicted`. |
| `src/app/booking/auth/login/` | Login page at `/bookings/login` — Google + magic link |
| `src/app/booking/platform/admin.shared.scss` | Shared admin primitives (`.page`, `.btn`, `.head-actions`, `.menu`) **and the form language** — `.form` (a card laid out as a form), `.sec` + `.sec__title` (a group of fields under a quiet uppercase title, with a rule between groups), `.field__top` (label + its `(i)` on one baseline), `.field .note`, `.field-row` / `--three`. **Use these for every new form.** They were invented in `booking-form` and left local, which is why every other form grew a worse version: explanations crammed into labels, a hint paragraph under every heading, one flat run of fields. Rule of thumb: anything explanatory goes behind an `app-info-hint`, never in the label and never as a paragraph — EXCEPT on setup pages touched once a month (Settings → Email/Payments/Integrations), where visible prose is right. ⚠ `.menu` also exists as three DRIFTED local copies (booking detail / booking list / invoices) that win by source order — new menus use the shared one; deleting those three is a pass of its own |
| `src/app/booking/platform/platform-shell/` | Logged-in studio shell — sidebar nav + `<router-outlet>` for the children below |
| `src/app/booking/platform/dashboard/` | Admin overview at `/bookings/dashboard` (default landing) — KPIs, 6-month revenue chart, upcoming list, attention panel; reuses `BookingDataService` + `BookingAdminService`, no new queries |
| `src/app/booking/platform/bookings/booking-list/` | Bookings table at `/bookings/list` — Ref + kebab open the detail page; Payment column shows paid/total. **Tabs are URL-driven** (`?tab=upcoming\|pending\|unpaid\|paid\|past\|external\|cancelled\|all`, read reactively from `queryParamMap`) and **each tab fetches fresh server-side** — `BookingDataService.queryBookings(tab, search)` runs a filtered+sorted `booking_summary` query on demand (no local filtering of a cached list); search is a debounced server `ilike`; badge counts via `bookingTabCounts()` (per-tab HEAD counts); rows+counts re-pull after approve/decline/cancel/delete. (Top KPI stats + NEXT badge still use the org-wide `data.bookings()` the service maintains for the dashboard.) |
| `src/app/booking/platform/bookings/booking-detail/` | Booking detail at `/bookings/:id` — Total/Paid/Balance, the payment ledger, and a "Record a payment" form (cash/Revolut/bank/card/other). A booking has many `payments`; `total_paid` (booking_summary) sums completed ones. Uses `BookingDataService.getPayments/addPayment/deletePayment` (recording syncs the calendar). Also hosts the **Delivery** card (left column): a message + links the client receives on their pay link once **paid in full**, with a **Release now** override (goodwill / €0 bookings) and a clear-in-place **Remove**. `getDelivery/saveDelivery/setDeliveryReleased/clearDelivery`. **Route `:id` must stay LAST in `booking.routes.ts`** |
| `src/app/booking/platform/bookings/booking-form/` | Create/edit a booking — `/bookings/new` (create) and `/bookings/:id/edit` (edit, prefilled). Admin picks the customer as **either an existing client** (reusable CRM record) **or a one-off "Just a name"** (stored on `bookings.contact_name`, never added to Clients — keeps the CRM clean; bills to the bare name, no company/VAT) → service → assigned worker → **one or more time blocks** (`booking_slots`), **or a "Custom" service** (no `service_id`, any bookable worker, manual price). The **time blocks are chosen from `availability-picker.component.ts`** — a sticky right-hand **worker-based** calendar (24h, free/busy, 30-min granularity) shown once a worker is selected. Tap a start + end to add a block; switch days and add more — added blocks persist, highlight on their own day (`slot--mine`), and are removable from a list above the calendar. The picker holds a `PickedSlot[]` and emits `slotsChange`; the booking total comes from the invoice line items (decoupled from the calendar). Availability is the **worker's** calendar; busy slots show who/what booked them (**admin-only**, via `BookingDataService.getWorkerBusy`, which reads `booking_slots`). Create persists the booking + its slots atomically via the `create_booking` RPC (status from the "already confirmed" checkbox — `booked` if checked, else tentative `pending`, default OFF) + returns a `/book/:token` link; edit replaces the slots via `update_booking`. Uses `BookingDataService.createBooking()`/`getBooking()`/`getBookingSlots()`/`updateBooking()`; no Edge Function |
| `src/app/booking/ui/invoice-actions/` | The invoice row menu (send, reminder, copy share link, view/print, edit, add a cost), shared by the **Invoices page** and the **booking detail** Invoices panel so a job can be invoiced without leaving the booking. Self-contained for open/copy/edit; the two actions needing a dialog are `output`s so the host mounts ONE dialog rather than one per row. **Edit is always keyed on the INVOICE id** — `/bookings/invoice-edit/:bookingId` resolves to a booking's OLDEST invoice, so using it for any row meant editing a second invoice opened the first |
| `src/app/booking/ui/select/` | **The only select in the booking platform** — never add a native `<select>`. Renders itself (a browser-drawn one looked different per machine, could not match the dark sidebar, and could not carry a colour, hint or search). Searchable (`'auto'` = once >7 options), keyboard-driven, clearable, `variant: 'light' \| 'dark'`, `size: 'md' \| 'sm'`. **Multi-select** via `[multiple]="true"` + `[(values)]` (a `string[]`; `value` is ignored then) — the trigger shows removable chips, the panel stays open while picking, and search matches **label AND hint**, which is how the work editor's job picker is searchable by booking reference. Options are `{ value, label, hint?, color?, disabled? }`. The panel uses a **CDK overlay**, not an absolute div, so it is never clipped inside a scrolling sidebar or a modal. Booleans must be bound (`[clearable]="true"`, not `clearable="true"`) — plain `tsc` does not check templates, only `ng build` does. ⚠ **Never style it with a `select` selector.** All 23 native selects are gone, so any rule naming a bare `select` is dead and silently does nothing — that is how the client picker lost its `flex: 1` and stopped filling its row, and how the work-board card broke. It draws its own trigger, so a call site must give it **sizing only**: adding border/padding/background renders a box inside a box. `:host` is `display:block; min-width:0` (it shrinks in a flex row but does not grow) — a call site that wants it to fill says `app-select { flex: 1 }` |
| `src/app/booking/ui/modal/` | Reusable modal shell for the booking platform — overlay + card + header (title + ✕), body via `<ng-content>`, two-way `[(open)]`. **Backdrop click does NOT dismiss by default** (`dismissable=false`) so a mis-click never discards in-progress edits; closing is explicit (✕ / Cancel). **Every booking-platform modal must use this** rather than hand-rolling an overlay |
| `src/app/booking/ui/client-editor/` | Reusable add/edit-client modal (built on `app-modal`) (name + optional email/phone/company/VAT/billing address/notes). Two-way `[(open)]`, emits `(saved)` with the saved `Client`. Used by the **Clients** page and the **booking form** (new client → full details → auto-select), so clients are never created as stubs. Saves via `BookingDataService.saveClient()` (returns the row) |
| `src/app/booking/ui/line-items-editor/` | Reusable invoice line-items editor — guided add (pick a service + hours → pre-fill, or a custom charge). Pass `[services]` to enable the service picker. Service lines carry `serviceId`/`hours` for the invoice description/price only — **decoupled from the calendar** (no Hours field; the booking's time blocks are chosen by range-selecting start+end in `availability-picker.component.ts`, which manages a `PickedSlot[]` and emits `slotsChange`) (rows of `{description, amount}` + add/remove + live total; two-way `[(items)]`). Shared by the **booking form** (set the invoice up front) and the **invoice editor**. Line items are the **source of truth** for a booking's total: the booking form saves them to `invoices.line_items` on create/edit and sets `price_total = sum`; the invoice editor's save also pushes the sum back to the booking via `setAmount` (+ calendar). `LineItem` type in `core/interfaces/invoice.interface.ts` |
| `src/app/booking/ui/availability-calendar/` | Presentational month-grid + hour-pill calendar shared by the public booking page (`public/booking-calendar`, range select) and the admin form's worker picker. "Dumb": renders the `CalendarDayCell[]`/`CalendarSlotView[]` it's given and emits clicks; all availability/selection logic lives in the container. Busy reasons render **only** when `showBusyReason` is true (admin) — the public container never sets it, so details never leak. Wall-clock↔UTC math: `core/utils/timezone.util.ts` |
| `src/app/booking/platform/invoices/` | Invoices at `/bookings/invoices` — reads the **`invoice_list`** view (NOT the bookings list), so invoices with no booking appear. Money is **never computed here**: gross/net/paid/`balance_due`/`payment_status` all come from SQL, and `invoice_number` arrives pre-formatted with the org's prefix (`invoice_details.invoice_prefix`, e.g. `JFMB-2026-125`) — don't re-derive it client-side. Outstanding is summed **per invoice, floored at zero**. A row's `id` is the INVOICE id while `booking_id` is separate and may be null, so anything routing to `/book/invoice/:id` or `invoice-edit/:id` (both keyed on the booking) must be guarded on `has_booking`. `invoice-edit.component.ts` edits line items/notes/date via `BookingDataService.saveInvoice`, and "Reset to booking" via `resetInvoice(orgId, bookingId)` — which goes through `save_invoice` so `invoice_lines` and the `line_items` JSONB are cleared together. **Three routes reach the editor:** `invoices/new` (create a standalone invoice), `invoices/edit/:invoiceId` (keyed on the **invoice** id — the only way to open an invoice that has no booking), and the retained `invoice-edit/:id` (keyed on the **booking** id, which is what the booking-detail page links to). Order is load-bearing in `booking.routes.ts`: `invoices/new` must precede `invoices/edit/:invoiceId` or `new` is captured as an id, and all three are literal-prefixed so they precede the catch-all `:id` |
| `src/app/booking/platform/clients/client-list/` | Clients table at `/bookings/clients` — **New client** button + click any row to **edit** in a modal (name + optional email/phone/company/VAT/billing address/notes) via `BookingDataService.saveClient()`. Billing fields feed that client's invoices through the `client_id` relation (never duplicated on `invoices`) |
| `src/app/booking/ui/work-settings/` | How the Work module behaves, reached from the board's cog: the org's **types of work** (`work_types`, §25 — rename/reorder/add/delete) and **how long delivered work stays on the board** (`organizations.booking_params.work_archive_days`, default 3 — mirrored in SQL by `work_board.is_archived`, so change both). Deleting a type goes through `delete_work_type(p_type)` so the soft-delete and clearing `work_items.work_type` are one transaction; unlike a stage there is nothing to ask, because a type is optional on a card. `booking_params` is **patched, never replaced** — it also holds the deposit policy and the hold window. This is the home for future work settings rather than a fourth button in the board header |
| `src/app/booking/ui/stage-manager/` | Board columns as DATA (§24 `work_stages`): add, rename, reorder, recolour, delete. `work_items.production_status` stores the stage KEY — the label is renameable, the key never changes or every card in that column is orphaned. Colour is **Google's event colour id (1–11)**, not a hex, because Google has no arbitrary event colours — storing the id means the board and the calendar cannot disagree. Deleting goes through `delete_work_stage(stage, move_to)` so the card move and the delete are one transaction; the last column cannot be deleted. **Never compare a stage to the literal `'delivered'`** — use the stage's `is_done` flag |
| `src/app/booking/ui/work-editor/` | Work-task editor modal — a Trello/Jira-style ticket: title, **details** (free text, pushed into the calendar event), **type of work** (`work_types`, §25), **status** (the board column, Backlog included — moves the card from inside the modal via `moveWorkCard`), assignee (always shown, pre-filled from the worker scope, overridable), deliver-by, the jobs it covers, a **checklist**, and reserved time blocks. **Everything is buffered and written on Save** — including the checklist, whose adds/ticks/removals are diffed against what was loaded — so Cancel really cancels. The jobs picker is behind a *"This task covers a job"* checkbox and is a searchable **multi-select** (`app-select` with `[multiple]`); unticking it clears the links rather than hiding them, so the calendar event can never name a job the card says it doesn't cover. **Reuses `app-availability-picker`** (the booking form's), so reserving time shows the worker's real diary. **Work blocks are rows in `booking_slots` with `work_item_id` set, NOT a separate table** (§23): `booking_slots_no_overlap` never mentions `booking_id`, so one constraint covers shoots and post-production alike and a shoot cannot be booked over reserved editing time. A separate table would carry its own constraint and the two could not see each other. Blocks ALWAYS block (`slot_set_blocking` short-circuits for work). `get_busy_ranges` and `getWorkerBusy` both LEFT-join so work blocks surface to the public page and the admin picker. Calendar push via `sync-work-event` → `ensureWorkEvent` (sibling of `ensureBookingEvent`, not a branch inside it — work has no client, money or payment state). Many-to-many with bookings via **`work_item_bookings`** (a re-creatable LINK, so hard-deleted, no `deleted_at`); `work_items.booking_id` is kept as the originating booking. ⚠ **Both must be written.** `work_item_bookings` is what every "which jobs does this cover" reader uses (the editor's picker, the calendar event's `For:` list, `booking_summary.work_count`), while `booking_id` is what decides remove-vs-delete and what `setStage` mirrors to the booking. `create_work_item` writing only `booking_id` meant a card created from a booking showed no linked job anywhere — don't split them again |
| `src/app/booking/platform/work/` | Work board at `/bookings/work` — a Trello-style pipeline: **Backlog → To edit → Editing → To deliver → Delivered**. Its unit is a **`work_items`** row (NOT a booking): a card either **links to a booking** (carries client/service/date, seeds the service's `task_template`) or **stands alone** (`booking_id` null). **Backlog vs board** = `work_items.activated_at` (NULL = backlog); a card is also active once its booking has ended — computed dynamically in the **`work_board` view** (`is_active`, no cron), so future shoots sit in Backlog and surface automatically. `create_work_item` sets `activated_at` (standalone → now, booking-linked → backlog); dragging/▸ a card pulls it onto the board (`activateCard`) or back (`backlogCard`). Cards carry an **assignee** (`assignee_id` → `staff`, `assignCard`) and a **due date** (`due_at`, `setDue`, overdue flag). The board reads the `work_board` view (resolves names + `is_active`); tasks hang off `tasks.work_item_id`. Stage moves on a booking-linked card mirror `production_status` back to the booking (calendar "Progress"). **+ New card** opens the FULL `ui/work-editor/` — there is deliberately no quick-add composer, because a title-only card is one whose type, brief, owner, deadline, checklist and reserved time nobody ever goes back to fill in. **×** removes a card (booking-linked = off board, unflags `needs_production`; standalone = deleted). **Terminal cards age off the board** (§25): `work_board.is_archived` is computed on read from `work_items.done_at` (trigger-maintained, so re-saving a delivered card can't restart the countdown) against `organizations.booking_params.work_archive_days` (default 3); the **History** button renders them back in. The board keeps `allJobs` (everything the server returned) separate from `board` (what is rendered and mutated optimistically by drag-and-drop) — a computed can't be written to mid-drop. A **cog** in the header opens a CDK menu with *Board columns…* (`ui/stage-manager/`) and *Types of work & board…* (`ui/work-settings/`) — new work-module settings belong in the latter, not as another header button. `BookingAdminService.loadJobs/loadJobOptions/addWorkItem/deleteWorkItem/setStage/activateCard/backlogCard/assignCard/setDue/addTask` |
| `src/app/booking/public/book-page/` | The **client link** page at `/book/:token` — call it that, not "payment link": one token is the client's whole page for the job (details, invoice, card or in-person payment, and the delivered files once paid), so "payment link" made the one thing you send sound like one of several. `generateLink` is idempotent — it returns the booking's existing token rather than minting a new one, so showing the URL on the booking page cannot invalidate a link already sent — job details + deposit/full card payment **or** "Arrange payment in person" (cash/bank, via `accept-inperson`). Loads the booking through the **`get_booking_by_token`** RPC — **anon has no table grants**; token resolution must stay inside a `SECURITY DEFINER` function (RLS can't see a client-side `.eq('token', …)` filter). Also renders the **delivery** from `get_delivery_by_token`, gated off that RPC's `unlocked` flag — **never** off `state()`, since a released or €0 booking unlocks outside the `paid` state |
| `src/app/booking/ui/links-editor/` | Reusable label+URL list editor (`[(links)]`), used by the booking-detail Delivery card. Same recipe as `line-items-editor`: `model.required<T[]>()`, `OnPush`, immutable `update()` writes, one-way `[ngModel]` + explicit `(ngModelChange)` per field. Rejects non-`http(s)` URLs via `isDeliveryUrl()` |
| `src/app/booking/public/payment-success/` | Payment success page at `/pay/success` |
| `src/app/booking/ui/booking-invoice/` | Invoice display component |
| `src/app/booking/ui/invoice-sheet/` | The printable A4 invoice, as a presentational `input.required<InvoiceBundle>()` component. Extracted from the public invoice page so it can also be rendered **offscreen** to produce PDF bytes for emailing. Its `:host` IS the sheet (own background/shadow/padding/font) — a custom element isn't block-level, and rendered standalone it can't inherit text styling from a page it isn't on. Owns the `@media print` and 760px blocks; the page keeps its own narrower ones for the toolbar/paybox |
| `src/app/booking/ui/invoice-send/` | Send-by-email dialog (invoice or reminder). Loads its own data from an invoice id, so every caller stays dumb. Two paths: Gmail one-click when the org has connected Google, else the message is composed into the owner's own mail app (`mailto:`) with the PDF downloaded to attach — `mailto` **cannot** carry an attachment, so the dialog stays open showing that as an explicit remaining step rather than a toast. Renders `<app-invoice-sheet>` in an offscreen `position:fixed; left:-10000px` stage (**not** `display:none` — html2canvas can't capture an element with no layout box) |
| `src/app/booking/ui/recipients-editor/` | Editable address list (`[(emails)]`), same recipe as `links-editor`. The "+ Add all previous" chip re-adds every address the invoice has already reached |
| `src/app/booking/core/services/documents.service.ts` | Documents (§31): the paperwork you GIVE a client (insurance, permits, UAS registration) and — next — the letters they SIGN. **One table for both**; the signing columns stay null on a file. Files live in a **private** Supabase Storage bucket (`documents`, 25 MB, PDF/PNG/JPEG/WebP/HEIC) reached only through short-lived signed URLs. ⚠ **Every storage path is `{org_id}/{document_id}/{filename}` and the leading org id is what the storage policy authorises against** — build paths only through the service's `pathFor`, never by hand. The row is INSERTED before the upload (the other order orphans files nothing points at) and is deleted again if the upload fails. `is_library` marks a reusable org document; `booking_documents` attaches it to jobs as a LINK, so one certificate serves many bookings and detaching from one leaves the rest. `document_types` (§31a) is per-org like `work_types`, and `tracks_expiry` decides whether the form asks for a date |
| `src/app/booking/core/utils/booking-title.util.ts` | `suggestBookingTitle({work, location, client})` — the booking form's self-writing title. Rule: **what, and which one** — `"{work} at {location}"` when there is a location (it is what distinguishes jobs for the same client), else `"{work} for {client}"`. The WORK comes from the **line item**, never `bookings.service_id` (the form always saves that as null — the service is picked per charge); a `— 2 hours` tail is stripped. Returns `''` for charges that say nothing ("Custom charge", a bare amount) rather than guessing. **No date or time**, deliberately. The form keeps it in sync while `titleTouched` is false and stops for good once the owner types; edit/clone set `titleTouched` so a saved title is never rewritten |
| `src/app/booking/core/utils/template.util.ts` | `renderTemplate` — one-pass `{placeholder}` substitution whose regex is **derived from the value map**, so there is no second key list to drift. `invoice-footer.util.ts` (which kept its keys in three places) and `invoice-email.util.ts` both build on it |
| `src/app/booking/core/utils/invoice-email.util.ts` | Email template keys, shipped defaults for invoice + reminder, the renderer, and `buildMailto` (comma-separated per RFC 6068; truncates at a paragraph boundary past ~1900 chars and tells the caller, because Outlook drops longer mailto URLs) |
| `documentation/MULTI_TENANT_READINESS.md` | The 2026-10-12 tenancy audit — what is isolated (verified against the live DB), what is still single-tenant (**Google Calendar**: one env-var credential, so a second org gets no calendar at all, silently — `CALENDAR_ORG_ID` stops it leaking into the owner's), what a new org can set up unaided, and the runbook for giving someone access. **Read this before onboarding a second organization.** Inside one org there are NO permissions: an admin sees and can change everything; the worker scope is a view filter, not a permission |
| `src/app/booking/core/utils/scope-reload.util.ts` | `onScopeChange(auth, reload)` — re-runs a page's fetch when the **organisation or the worker scope** changes, and once as soon as a scope first resolves. **It replaces a page's `ngOnInit` fetch rather than adding to it**, or the page loads twice. `BookingDataService` uses it for the shared `bookings()`/`clients()` caches, so a page that only reads those needs no scope logic; any page holding its OWN fetched state (bookings list, invoices list, work board, dashboard) must use it or it will keep showing the previous worker's rows |
| `src/app/booking/ui/tour/` + `core/tours/tours.ts` | Guided tours, one per module (spotlight + card), `TourHostComponent` mounted once in `platform-shell`, opened by the sidebar's "How … works" or automatically. ⚠ **Two rules when editing `tours.ts`:** target `[data-tour="…"]` attributes, never styling classes (a renamed class makes a step silently point at nothing); and adding a step means **bumping the tour's `version` AND marking the step `since: <that version>`** — that is what reopens the tour as "New in …" showing only what changed, which is the whole reason the tours exist. A step whose target has no bounding box is skipped, so any component a tour points at needs `:host { display: block }`. `dismiss()` (× / Escape) does NOT mark it read; only finishing does |
| `src/app/booking/ui/toast/` | App-wide toasts — `ToastService` (root: `success`/`error`/`info`) + `ToastHostComponent` mounted once in `platform-shell`. For any new admin action, call `toast.success(...)`/`toast.error(...)` rather than `alert()` or adding markup |
| `src/app/booking/ui/confirm/` | App-wide confirmations — `ConfirmService.ask({ title, message, confirmLabel, cancelLabel, danger }): Promise<boolean>` + `ConfirmHostComponent` mounted once in `platform-shell` (renders through `app-modal`). **Use this instead of `window.confirm()`** for any destructive/blocking confirmation so it matches the modal style |
| `src/app/map/core/models/enums.ts` | Shared typed enum constants — `Difficulty`, `Island`, `MapPointType`, `GroupStatus`, `GroupRole`, `UserRole` |
| `src/app/map/core/models/` | All domain types — `Location`, `Provider`, `Group`, `GroupMessage`, `User`, etc. |
| `src/app/map/core/services/seo.service.ts` | `setPage()` and `updateMetaData()` for all SEO tags |
| `src/app/map/core/services/analytics.service.ts` | `pageView()` and `event()` wrappers around gtag |
| `src/app/map/core/services/route-builder.service.ts` | Itinerary plan generation logic |
| `src/app/map/core/services/map-bridge.service.ts` | Scoped bridge between persistent shell map and swappable panel children |
| `src/app/map/core/services/groups.service.ts` | All Supabase group operations — realtime channels, mutations, presence |
| `src/app/map/core/services/auth.service.ts` | Supabase auth — Google OAuth + magic link OTP; `userDisplayName()`, `userPhotoURL()`, `userEmail()` |
| `src/app/map/core/services/user-data.service.ts` | User record, XP/level signals, `isAdmin()`, `groupsUnlocked()` |
| `src/app/map/core/services/interaction-tracking.service.ts` | Per-entity interaction stats via `track_interaction` RPC |
| `src/app/map/core/services/navigation.service.ts` | Back-button and panel navigation helpers |
| `src/app/map/core/utils/panel-resize.util.ts` | Drag-to-resize + minimize/expand logic for map panels |
| `src/app/map/core/utils/location-filter.util.ts` | `matchesFilter()`, `getIslandLabel()`, `difficultyColor()` |
| `src/app/map/core/utils/geo.utils.ts` | `haversineKm()`, `haversineM()` distance helpers |
| `src/app/map/core/utils/route-drawing.ts` | Builds OpenLayers features from `mapPoints[]` |
| `src/app/map/core/utils/location-tracker.ts` | GPS dot + heading cone on the map |
| `src/app/map/core/utils/level.utils.ts` | Level thresholds and XP computation |
| `src/app/map/core/utils/provider.utils.ts` | `resolveProviderColor()`, `getProviderCategoryLabel()` |
| `src/app/map/core/config/supabase.config.ts` | Supabase client singleton (staging); swapped at build time for production config |
| `src/app/map/core/models/timestamp.ts` | Drop-in `Timestamp` wrapper used throughout groups feature |
| `src/app/map/features/map/shell/` | Persistent shell that owns `<app-map>` across all `/malta/*` panel routes |
| `src/app/map/features/map/explore/` | Main map page |
| `src/app/map/features/map/deals/` | Exclusive Deals map page |
| `src/app/map/features/map/list/` | Browse Locations map page |
| `src/app/map/features/locations/location-page/` | Location detail route — SEO, back navigation |
| `src/app/map/features/locations/location-detail/` | Location detail panel content |
| `src/app/map/features/providers/provider-page/` | Provider detail route — SEO, Book Now, back navigation |
| `src/app/map/features/providers/provider-detail/` | Provider detail panel content |
| `src/app/map/features/groups/groups-list/` | Explore Together list + create form at `/malta/groups` |
| `src/app/map/features/groups/group-detail/` | Group detail + member list + chat at `/malta/groups/:id` |
| `src/app/map/features/groups/group-card/` | Single group card for the groups list |
| `src/app/map/features/groups/member-avatars/` | Overlapping avatar bubbles with `+N` overflow |
| `src/app/map/features/saved-places/` | Saved locations panel |
| `src/app/map/features/route-builder/` | Route builder (feature-flagged: ROUTE_BUILDER) |
| `src/app/map/pages/admin/` | Admin panel — Groups migration + Users tab + Reports tab |
| `src/app/map/pages/top-places/` | "30 Places to Visit in Malta" editorial. The list lives in `top-places.data.ts` as `{num, name, id}` only; everything else (photo, area, island, difficulty, slug) is resolved from `locations.json`, so never copy location data into it. `name` is the series name from the reels and deliberately omits the island (the card shows the area). Cards use the `card` image. `TopPlacesState` (root) keeps the filter and the last opened card so "Back to list" lands where the visitor left. The 2027 edition should be a sibling data list + route, not an edit of this one (the 2026 URL is what the Instagram "30" DM links to). Share image: `assets/og-30-places-2026.jpg` from `scripts/gen-og-top-places.js` |
| `src/app/map/ui/panel-shell/` | Reusable panel wrapper (header, drag handle, scrollable body) |
| `src/app/map/ui/share-button/` | Copy-to-clipboard share button with `(shared)` output |
| `src/app/map/ui/sign-in-form/` | Shared sign-in form used by auth modal + welcome popup |
| `src/app/map/ui/user-avatar/` | User avatar with level border animation |
| `src/app/map/features/map/map/` | OpenLayers map component |
| `src/assets/locations.json` | All 74 location records |
| `src/assets/providers.json` | All provider/deal records |
| `supabase/schema.sql` | Full PostgreSQL schema — tables, RLS, triggers, RPCs. Re-run updated RPCs in Supabase SQL Editor after changes |

---

## Navigation & Routing

Routes are split by module: `src/app/map/map.routes.ts` owns all map routes; `src/app/booking/booking.routes.ts` owns all booking routes. `src/app/app.routes.ts` combines them. All map-adjacent pages use `/malta/*`.

**Booking module is organized by feature, not by file type** (aliases: `@booking/core/*`, `@booking/auth/*`, `@booking/platform/*`, `@booking/public/*`, `@booking/ui/*`):
- `core/` — infra split into `db/` (Supabase client + `schema.sql`), `services/`, `interfaces/`, `guards/`. Never dump everything flat in `core/`.
- `auth/` — the `/bookings/login` page (signed-out).
- `platform/` — everything behind the auth gate: `platform-shell/` (sidebar + outlet) wrapping `bookings/`, `clients/`, `services/`, `staff/`, `invoices/`, `settings/`.
- `public/` — customer-facing pages not behind login (`book-page`, `payment-success`).
- `ui/` — shared dumb components (`booking-invoice`, `toast`).

**Self-serve booking (Calendly-style, in progress).** Goal: public clients book themselves, sign in (as non-admin `client`, linked to a `clients` row via `clients.user_id`), pick a fixed-duration slot (1–4h, prices in `admin_settings.pricing`), then either pay online (deposit **or** full → auto-confirms + pushed to Google Calendar) or request cash (status `pending` → admin approves, then marks paid). Key invariants:
- **Concurrency is enforced in the DB, never in app code.** A booking is one or more `booking_slots` (time blocks); the `booking_slots_no_overlap` exclusion constraint (`btree_gist`, worker-partitioned) makes overlapping blocking slots impossible — a losing concurrent insert fails with SQLSTATE `23P01`, which the `create_booking`/`update_booking` RPCs propagate; catch it and tell the user "slot just taken." (The old `bookings_no_overlap` on the booking row was dropped in favour of the per-slot constraint; each slot's `blocking` flag is set by the `slot_set_blocking()` trigger from the booking's status.) Booking statuses: `hold` (card checkout, `hold_expires_at` ~15 min) and confirmed (`booked`/`in_progress`/`done`) block the slot; `draft`, `cancelled`, `expired` never do. **`pending` blocks the slot ONLY for admin-created tentative bookings** (`created_by='admin'` — the admin picked that time, so it's held until they confirm/decline); self-serve **client** cash-requests (`created_by='client'`) stay non-blocking (many may request the same slot, first approved wins). This is enforced in `slot_set_blocking()` / `bookings_sync_slot_blocking()`. Admin bookings are created **tentative (`pending`) by default** — the form's "This booking is already confirmed" checkbox (default OFF) is what creates them `booked`; a tentative booking is confirmed by the admin (Confirm in the "To confirm" list → `approve-cash-booking`) or automatically when the client pays by card.
- **Availability for the public calendar** comes from `get_busy_ranges(start,end)` (SECURITY DEFINER, returns time ranges only — no titles/clients) plus a final live Google FreeBusy check at commit. Never expose booking details to anon.
- **Google Calendar is TWO LEVELS (§28).** A **worker's own** calendar (`staff_google_accounts`, per-worker OAuth, refresh token in Vault) is their real diary: it is the **only** calendar ever read for their availability, and it receives their jobs. The **organisation's shared** calendar (`organizations.calendar_mirror` + `calendar_id`, on the org's Google account) is an optional overview of everyone, each worker in their own `staff.calendar_color_id`, and is **WRITE-ONLY**. ⚠ **Never read the shared calendar for availability** — it holds every worker's jobs, so two workers shooting at once look like an overlap; reading it would mark the whole company busy whenever one person was. Resolution lives in `_shared/google-targets.ts` (`bookingCalendars` / `availabilityCalendar`); every function in `_shared/google-calendar.ts` takes an **optional** `CalendarTarget` that falls back to the legacy env credential, which is how this shipped without touching the one calendar already in production. The legacy single token (`GOOGLE_OAUTH_REFRESH_TOKEN` + `GOOGLE_CALENDAR_ID`, gated to `CALENDAR_ORG_ID`) remains the fallback for a worker with no connected calendar. Mirroring defaults **off** — the owner's org's connected account's primary calendar IS the legacy calendar, so mirroring everyone would double every event. Deleting must clear BOTH ids (`booking_slots.google_event_id` and `org_event_id`): a delete aimed at the wrong calendar returns 404, which is treated as success, and would orphan the real event. The Google OAuth consent screen must be **published to production** or refresh tokens expire after 7 days.
- ⚠ **Google event ids are DERIVED from the owning row** (`stableEventId('jm', slotId)`, `'mm'` for the org mirror), never left to Google. Two things sync a paid booking seconds apart — the Stripe webhook and the client's success page, both via `recordSucceededIntent` — and with Google-generated ids each created its own event, leaving an orphan the database knew nothing about (live on BK-2026-150). A repeat create now returns 409, which `createCalendarEvent` treats as success. **Never create an event without an `eventId`**, and never "fix" a duplicate by adding a check-then-create guard: that is the race, not the cure. `updateCalendarEvent` returns `false` when the event is gone (404/410) so the caller recreates rather than throwing. **Calendar event lifecycle is centralized** in `supabase/functions/_shared/booking-event.ts` → `ensureBookingEvent(service, bookingId)`: creates/updates **one Google Calendar event per `booking_slots` block** (so a split day shows separate events, each titled `… (i/N)`; event ids stored on `booking_slots.google_event_id`, the first mirrored to `bookings.google_event_id` for back-compat) or PATCHes their descriptions from current DB state; `cancel-booking` deletes every block's event. The description is a live overview (Client/Service/Total/**Payment**/**Progress**). It's invoked server-side on card payment (`stripe-webhook`), cash approval (`approve-cash-booking`), in-person requests (`accept-inperson` marks the booking `pending` for admin confirmation — it does NOT push the event itself; the admin's confirm does), and via the admin-only `sync-booking-event` function which the frontend calls after recording cash, editing the amount (`BookingDataService`), or moving a production stage (`BookingAdminService.setStage`). **When anything changes a booking's payment or progress, route the calendar update through `ensureBookingEvent` — never build event descriptions ad hoc.** Cancellation deletes the event via `cancel-booking` → `deleteCalendarEvent` (only clears `google_event_id` once the delete confirms, so failures don't orphan events).
- **Schema changes** go in `supabase/migrations/` (timestamped, idempotent), applied to the live jm-bookings DB. `ALTER TYPE ... ADD VALUE` must be committed before the new label is used (run enum step separately).
- **Stripe Connect (per-org payouts).** Each org connects its own **Standard** account in Settings → Payments; charges are **direct charges** on the connected account (optional fee `organizations.application_fee_bps`), routed via `supabase/functions/_shared/stripe.ts` (`resolveOrgStripe` + `chargeRouting`) — used by `start-card-booking`, `create-payment-intent`, `cancel-booking`. ⚠ **`stripe_account_id IS NULL` is NOT a platform-account fallback any more.** It was, and that meant a second org without Stripe took its clients' card money **into the platform owner's account** with no error. The fallback now requires `organizations.platform_charges_allowed`, which **defaults to false** and is `service_role`-write-only (deliberately absent from the §14 column grant). `chargeRouting` throws `payment_setup_incomplete`, which the money functions return as a **400** (`isSetupError`) and the public page renders as a sentence, not a code. Never reintroduce an unconditional fallback, and never infer the permitted org from "no Stripe account" or "the oldest org". See `documentation/MULTI_TENANT_READINESS.md`. **Never route a Stripe charge/refund without going through `_shared/stripe.ts`.** The platform secret key stays in the Edge Function env; the DB stores only the connected account id + onboarding flags, and those `stripe_*`/fee columns are **service-role-write-only** (column-level GRANT in `bookings-schema.sql` §14a) so org admins can't redirect payouts. Onboarding flow: `connect-stripe-start`/`connect-stripe-status` (org-admin-gated, own-org-only).

**Future direction — multi-tenant.** The booking system is planned to become a multi-tenant SaaS platform (companies → services → workers, isolated per org). See **`documentation/MULTI_TENANT_ROADMAP.md`**. Until then, follow its **Forward-Compatibility Principles (F1–F10)** for ALL booking work so the migration stays additive — most importantly: carry `org_id` (+`staff_id`/`service_id`) on new booking-domain rows; never add new global `admin_settings` config singletons (key config per org/staff/service); keep availability DB-driven; keep double-booking prevention in the DB `EXCLUDE` constraint (partition by worker); scope new RPCs/Edge Functions by org even if defaulted; no hardcoded identities (owner email, keys, BASE_URL).

Panel navigation must be route-based:
- Opening a location → `/malta/locations/:slug` (use `location.slug` from JSON — never compute with `toLocationSlug`)
- Opening a provider → `/malta/providers/:id`
- Closing top-level panel → `router.navigate(['/malta'])`
- Closing sub-panel (e.g. provider within deals) → clear state, stay on same route

Old `?locationId=X` and `?title=X` query-param URLs are still handled by `MapExploreComponent` which redirects them to the canonical slug URL (`replaceUrl: true`).

---

## Data

### Location fields (`src/assets/locations.json`)

| Field | Type | Notes |
|---|---|---|
| `id` | `number` | Unique; supports legacy `?locationId=X` redirects |
| `title` | `string` | Display name — changing this does NOT change the URL |
| `slug` | `string` | URL segment used in `/malta/locations/:slug` — explicit, never computed at runtime |
| `description` | `string` | HTML allowed — rendered with `[innerHTML]` |
| `img` | `string` | Cover image path — preloaded by map on startup |
| `thumb` / `card` | `string?` | Generated by `convert-to-webp.js`: 120×120 pin thumb, 600×750 portrait card for photo lists. Never set by hand |
| `images` | `string[]?` | Extra gallery photos — preloaded when location is selected |
| `lat` / `lon` | `number` | Map pin position |
| `difficulty` | `'easy' \| 'moderate' \| 'hard'` | Shown as badge; used in route builder |
| `rating` | `number?` | 0–5, shown in card and panel |
| `tags` | `string[]` | Drive filter chips and route builder scoring — see tags below |
| `hidden` | `boolean?` | Shows "hidden gem" badge |
| `locality` | `string?` | Used to group pins into locality clusters on the map |
| `showLabel` | `boolean?` | Renders a name pill above the map pin |
| `clusterPriority` | `boolean?` | This location's image is used as the cluster representative |
| `mapPoints` | `MapPoint[]?` | Route waypoints drawn on the map when location is open |
| `keywords` | `string?` | Injected into `<meta name="keywords">` by `seo.service.ts` |
| `url` | `string?` | External reference URL |

**Tags used in filter matching:** `beach`, `bay`, `cave`, `sea-cave`, `historical`, `religious`, `fortress`, `fortification`, `cultural`, `hidden`, `easy`, `hard`, `gozo`, `comino`

### Provider fields (`src/assets/providers.json`)

| Field | Type | Notes |
|---|---|---|
| `id` | `string` | Used in `?provider=X` query param |
| `name` / `tagline` / `emoji` | `string` | Display fields |
| `category` | `string` | Used for category badge label |
| `description` | `string?` | Shown in provider detail panel |
| `coverImage` | `string \| null?` | Hero image |
| `images` | `string[]?` | Gallery in provider detail |
| `highlights` | `string[]?` | Bullet list of key selling points |
| `discount` | `ProviderDiscount?` | `{ label, coupon, instructions }` — renders discount box |
| `website` / `instagram` / `phone` | `string?` | Contact links |
| `lat` / `lon` | `number?` | Required for map pin (`showOnMap: true`) |
| `showOnMap` | `boolean?` | Whether a pin appears on the deals map |
| `mapLabel` | `string?` | Text on the map pin pill (defaults to `'Deal'`) |
| `nearLocationIds` | `number[]?` | Location IDs this provider is shown alongside in the location panel |
| `experiences` | `Experience[]?` | What the provider lets you *do* — promoted as map pins (see below) |

### Experiences (provider promo on the map)

The map promotes **experiences** (wakeboarding, a buggy safari, a dive), not provider self-pins. Model: `Provider → experiences[] → spots[]`. One provider has many experiences; one experience can appear at several map spots; deals resolve per experience and fall back to the provider's. Experience pins live **in the cluster layer** alongside location pins (same source) and use the same latitude-based per-feature `zIndex`, so they interleave with location/cluster pins by position rather than always sitting on top. (The provider/group pin layer is separate and still used by Groups.) Detail at `/malta/experiences/:id` ("Offered by" links back to the provider page). All gated by `FEATURES.PROMOTIONS`. **Full schema + how to add one (incl. flipping a pin from icon → photo): `documentation/EXPERIENCES.md`.** Key code: `core/utils/experience.utils.ts`, `core/models/provider.model.ts` (`Experience`/`ExperienceSpot`), `features/experiences/*`, `ui/deal-box/` (shared coupon box).

### Events ("What's On") — `/malta/events`

Malta events (parties, pool days, concerts) from the GetYourTickets **affiliate** listing. Shell panel page like Deals: period + category filters, `EventCardComponent` cards with **Get Tickets** linking to the **affiliate URL** (every link carries the code — always use `eventBookUrl()`). Data in `src/assets/events.json` (`{ events: MaltaEvent[] }`); one entry per event with a `dates[]` array (recurring events keep every occurrence). Map shows **one pin per venue** in the shared cluster layer — a **photo circle** (the next event's poster) with a 🎟️ badge, ticket-disc fallback while decoding; tapping it opens the events page filtered to that venue (`?venue=`), via `bridge.eventVenuePins` / `eventVenueSelected$`. Past events drop out automatically (`upcomingEvents()`). Key code: `core/models/event.model.ts`, `core/utils/event.utils.ts`, `features/events/*`. **Never scrape GetYourTickets directly** (their robots.txt disallows it). **Refresh pipeline** (user saves the Malta page HTML, then): `node scripts/parse-gyt-events.js <file>` → `node scripts/download-event-images.js` (pulls posters local — their CDN has no CORS, so canvas pins need local images) → `node scripts/convert-to-webp.js` (compresses + rewrites refs). Gated by `FEATURES.PROMOTIONS`.

---

## OL Map Controls

**Basemap tiles:** keyless **OpenStreetMap** raster (`tile.openstreetmap.org`), set in `map-functions.ts`. We used CARTO Voyager until CARTO retired free anonymous tiles and started watermarking them "API KEY REQUIRED". To go back to the cleaner Voyager look, get a free key at `carto.com/basemaps/apikey` and append `?api_key=…` to the `rastertiles/voyager` URLs.

Map controls (compass, zoom, locate) are styled globally in `styles.scss` under `.ol-rotate`, `.ol-zoom`, `.ol-attribution`.

- Compass always visible (`autoHide: false`), uses `fa-compass` icon
- Compass turns blue (`#4285F4`) when map is rotated — via `app-map.map-rotated .ol-rotate button`
- All OL control buttons have `outline: none` globally

---

## Commit Policy

Never run `git commit` or `git push` without explicit user instruction.

**Before every commit, update `documentation/CHANGELOG.md`** — see the Living Documents section above for the update rules.

---

## Before Coding

Architecture, scalability, and consistency with existing project standards must always be the priority before implementation.

Do not start coding immediately. First analyze the current architecture and existing patterns in the files provided. Then propose the cleanest approach that fits the project.

Avoid quick fixes, isolated solutions, duplicated logic, or changes that solve the current task but damage maintainability.

If the requested feature can be implemented in multiple ways, choose the option that best respects:
- Existing architecture
- Reusability
- Type safety
- Separation of concerns
- Angular best practices
- Scalability
- Clean and understandable code

Only after that, provide the implementation.

---

## State Management — Signals vs RxJS

Use Angular Signals as the preferred approach for local component state, UI state, derived state, and simple reactive values. Do not force Signals everywhere — analyze the existing architecture first and choose the best tool for the case.

**Use Signals when they improve readability, maintainability, performance, and template simplicity.**

**Keep RxJS when working with:**
- HTTP streams or existing Observable-based services
- Debounced searches
- Complex async flows
- Cancellation
- Multiple stream combinations
- WebSocket / event streams
- Existing project patterns based on Observables

**Signal rules:**
- Prefer `computed()` for derived values.
- Use `effect()` only for real side effects (syncing with external APIs, browser APIs, analytics, storage, or imperative code). Never use `effect()` to copy state from one signal to another.
- Keep writable signals private when possible. Expose readonly signals from services/stores.
- Avoid mixing Signals and RxJS randomly without a clear reason.
- Use Angular RxJS interop utilities (`toSignal()`, `toObservable()`, `takeUntilDestroyed()`, `rxResource()`) when bridging the two.

---

## Engineering Mindset

Act as a senior JavaScript/TypeScript developer specialized in Angular. Every task — whether adding, refactoring, or reviewing — requires thinking about architecture, scalability, maintainability, and long-term impact, not just making the immediate code work.

### 1. Architecture and scalability
- Think about how new functionality fits into the existing project before writing a line.
- Avoid quick fixes that solve the immediate problem but create technical debt.
- Propose solutions that can scale if the feature grows in complexity.
- Keep responsibilities separated: components handle presentation and user interaction; services, helpers, and utilities handle business logic, data transformation, and reusable behaviour.
- Avoid putting business logic inside Angular components.

### 2. Reusability
- Identify logic that can be reused elsewhere and extract it into services, helpers, directives, pipes, or types.
- Never duplicate code. If a pattern already exists in the project, follow it.
- Prefer generic, flexible solutions over hardcoded logic.

### 3. Clean TypeScript
- Use strong typing. Avoid `any` unless there is a documented reason.
- Create clear interfaces, types, enums, or models when needed.
- Keep function signatures explicit. Use meaningful names for variables, functions, classes, and files.
- Keep functions small, focused, and readable. Prefer readable over clever.

### 4. Angular best practices
- Use Angular patterns correctly (standalone components, signals where appropriate, proper DI).
- Move business logic, API logic, and data transformation into services or utilities.
- Use RxJS carefully — avoid memory leaks, prefer `takeUntilDestroyed`, use `async` pipe when possible.
- Avoid unnecessary subscriptions. Use lifecycle hooks correctly.
- Keep templates clean — no complex logic inside HTML.

### 5. OOP and design principles
- Apply SOLID principles where they add real clarity and maintainability.
- Use encapsulation, abstraction, and separation of concerns.
- Prefer composition over inheritance when it leads to simpler code.
- Use classes, interfaces, and inheritance only when they add genuine value.

### 6. Maintainability
- Write code another developer can understand without a walkthrough.
- Comments explain the *why* (a hidden constraint, a non-obvious invariant) — never the *what*.
- Keep naming consistent with the rest of the project.
- Avoid hidden side effects. Make edge cases explicit.

### 7. Performance
- Avoid unnecessary calculations, subscriptions, renders, or API calls.
- Consider lazy loading, memoization, debounce, caching, or optimised change detection when relevant.
- Do not over-optimise prematurely, but flag performance risks when they exist.

### 8. Error handling and edge cases
- Always consider loading states, empty states, null/undefined values, API errors, invalid data, and user mistakes.
- Make the solution resilient. Avoid code that breaks silently. Handle errors cleanly and user-friendly.

### 9. Project consistency
- Before introducing a new pattern, check whether a project convention already exists.
- Match the folder structure, naming, imports, and component patterns already in use.
- If existing code is provided as context, adapt to its style.

### 10. Response format
When providing code, always include:
1. A short explanation of the recommended approach and *why* it is better.
2. The final implementation with all files to create or modify.
3. Any notes about scalability, reusability, or architectural impact.
4. Potential edge cases or follow-up improvements if relevant.

Point out trade-offs when multiple solutions exist. Give the senior-level approach first. Keep explanations practical — avoid theory unless it directly supports the implementation.
