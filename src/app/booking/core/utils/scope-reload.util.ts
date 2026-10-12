import { effect } from '@angular/core';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';

/**
 * Re-run `reload` whenever the active scope changes — the organization OR the worker
 * being viewed — and once as soon as a scope first resolves.
 *
 * The worker scope is a second axis beside the org: it changes what every page is allowed
 * to show, and `BookingDataService.scoped()` applies it at query time. But a query only
 * re-runs if something asks it to, and each page kept its own fetched state and its own
 * `ngOnInit` — so switching worker left the bookings tabs, their badge counts, the Deleted
 * tab and the invoice list showing the previous person's rows until a manual reload. Every
 * page remembering to re-pull is a rule that is forgotten once per new page; this is the
 * one place that remembers.
 *
 * It replaces a page's initial fetch rather than adding to it: the first run happens as
 * soon as `orgId` is known, so calling `reload()` from `ngOnInit` as well would fetch
 * everything twice on load.
 *
 * Must be called from an injection context (a field initialiser or the constructor).
 */
export function onScopeChange(auth: BookingsAuthService, reload: () => void): void {
  // Not a signal: it is bookkeeping for the effect, and making it reactive would make the
  // effect depend on its own write.
  let lastKey = '';
  effect(() => {
    const org = auth.orgId();
    const key = `${org ?? ''}:${auth.staffId() ?? ''}`;
    // No org yet = still booting. Keyed rather than fired on every emission because auth
    // re-resolves the same org on a token refresh, which must not re-fetch the world.
    if (!org || key === lastKey) return;
    lastKey = key;
    reload();
  });
}
