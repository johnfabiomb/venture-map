import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingAdminService, ConnectStatus, OrgMember, InvoiceDetails, InvoiceSettings } from '@booking/core/services/booking-admin.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { GoogleConnection } from '@booking/core/interfaces/invoice.interface';
import { INVOICE_EMAIL_KEY_DEFS, DEFAULT_INVOICE_EMAIL, DEFAULT_REMINDER_EMAIL } from '@booking/core/utils/invoice-email.util';

interface IntStatus { ok: boolean; detail: string; }

// Full IANA timezone + ISO currency lists from the platform (Intl), with a
// sensible fallback for environments that don't support supportedValuesOf.
function supportedList(key: 'timeZone' | 'currency', fallback: string[]): string[] {
  try {
    const fn = (Intl as unknown as { supportedValuesOf?: (k: string) => string[] }).supportedValuesOf;
    if (typeof fn === 'function') return fn(key);
  } catch { /* not supported */ }
  return fallback;
}

@Component({
  selector: 'app-settings-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings-admin.component.html',
  styleUrl: './settings-admin.component.scss',
})
export class SettingsAdminComponent implements OnInit {
  private readonly admin = inject(BookingAdminService);
  private readonly data = inject(BookingDataService);
  readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly saved = signal(false);

  // Which section is shown.
  readonly tabs = ['general', 'booking', 'company', 'email', 'team', 'payments', 'integrations'] as const;
  readonly tab = signal<typeof this.tabs[number]>('general');
  setTab(t: typeof this.tabs[number]): void { this.tab.set(t); }

  // Team (members of the active org) + platform-admin org creation
  readonly members = signal<OrgMember[]>([]);
  readonly membersLoading = signal(false);
  newMemberEmail = '';
  newMemberRole = 'admin';
  readonly addingMember = signal(false);

  // Company & invoicing identity (for invoices)
  legalName = '';
  companyAddress = '';
  companyPhone = '';
  companyEmail = '';
  vatNumber = '';
  vatRegistered = false;
  vatRate = 18;
  vatNote = '';
  invoicePrefix = 'INV';
  invoiceFooter = '';

  // Email & sending — organizations.invoice_settings, a SEPARATE column from
  // invoice_details because _invoice_bundle hands that one to anon wholesale.
  paymentTermsDays = 14;
  emailFrom = '';
  emailFromName = '';
  emailReplyTo = '';
  emailBccSelf = true;
  invoiceSubject = '';
  invoiceBody = '';
  reminderSubject = '';
  reminderBody = '';
  /** Rendered as the placeholder help — Settings never restates the key list. */
  readonly emailKeys = INVOICE_EMAIL_KEY_DEFS;
  readonly gmail = signal<GoogleConnection>({ connected: false });
  readonly gmailBusy = signal(false);

  /**
   * The JSONB blobs exactly as loaded.
   *
   * save() REBUILDS these objects from the fields on this page, so any key written by
   * another code path was silently dropped on the next save. Spreading the loaded object
   * means an unknown key survives — which matters now that two features write config.
   */
  private loadedInvoiceDetails: InvoiceDetails = {};
  private loadedInvoiceSettings: InvoiceSettings = {};
  /** Never write defaults over real data before the load has actually happened. */
  private settingsLoaded = false;

  // Stripe Connect (per-org payouts)
  readonly connect = signal<ConnectStatus | null>(null);
  readonly connectLoading = signal(false);
  readonly connecting = signal(false);

  // Org settings form
  timezone = 'Europe/Malta';
  currency = 'EUR';
  readonly timezones = supportedList('timeZone', ['UTC', 'Europe/Malta', 'Europe/London', 'Europe/Madrid', 'America/New_York']);
  readonly currencies = supportedList('currency', ['EUR', 'USD', 'GBP', 'CHF', 'AUD', 'CAD']);
  depositPercent = 30;
  depositAllowed = true;
  holdMinutes = 15;
  minLeadMinutes = 120;
  cashAllowed = true;
  workBoard = false;

  // Integrations
  readonly checking = signal(false);
  readonly stripe = signal<IntStatus | null>(null);
  readonly google = signal<IntStatus | null>(null);
  readonly intError = signal<string | null>(null);

  async ngOnInit(): Promise<void> {
    await this.auth.initialize();
    const org = this.auth.orgId();
    if (org) {
      const s = await this.admin.getOrgSettings(org);
      if (s) {
        this.timezone = s.timezone; this.currency = s.currency;
        const p = s.booking_params ?? {};
        this.depositPercent = p.deposit_percent ?? 30;
        this.depositAllowed = p.deposit_allowed ?? true;
        this.holdMinutes = p.hold_minutes ?? 15;
        this.minLeadMinutes = p.min_lead_minutes ?? 120;
        this.cashAllowed = p.cash_allowed ?? true;
        this.workBoard = s.features?.work_board ?? false;

        const inv = s.invoice_details ?? {};
        this.legalName = inv.legal_name ?? '';
        this.companyAddress = inv.address ?? '';
        this.companyPhone = inv.phone ?? '';
        this.companyEmail = inv.email ?? '';
        this.vatNumber = inv.vat_number ?? '';
        this.vatRegistered = inv.vat_registered ?? false;
        this.vatRate = inv.vat_rate ?? 18;
        this.vatNote = inv.vat_note ?? '';
        this.invoicePrefix = (inv.invoice_prefix ?? 'INV').toUpperCase();
        this.invoiceFooter = inv.invoice_footer ?? '';
        this.loadedInvoiceDetails = inv;

        const es = s.invoice_settings ?? {};
        this.loadedInvoiceSettings = es;
        this.paymentTermsDays = es.payment_terms_days ?? 14;
        this.emailFrom = es.email_from ?? '';
        this.emailFromName = es.email_from_name ?? '';
        this.emailReplyTo = es.email_reply_to ?? '';
        this.emailBccSelf = es.email_bcc_self ?? true;
        // Seeded from the shipped defaults so the boxes are never blank — an empty
        // template would otherwise send an empty email.
        this.invoiceSubject  = es.templates?.invoice?.subject  ?? DEFAULT_INVOICE_EMAIL.subject;
        this.invoiceBody     = es.templates?.invoice?.body     ?? DEFAULT_INVOICE_EMAIL.body;
        this.reminderSubject = es.templates?.reminder?.subject ?? DEFAULT_REMINDER_EMAIL.subject;
        this.reminderBody    = es.templates?.reminder?.body    ?? DEFAULT_REMINDER_EMAIL.body;
        this.settingsLoaded = true;
      }
    }
    this.loading.set(false);
    this.checkIntegrations();
    this.loadMembers();

    // Returning from Stripe's hosted onboarding (?stripe=return|refresh) → re-check + clean the URL.
    const stripeParam = this.route.snapshot.queryParamMap.get('stripe');
    if (stripeParam) {
      this.router.navigate([], { queryParams: { stripe: null }, queryParamsHandling: 'merge', replaceUrl: true });
      if (stripeParam === 'return') this.toast.info('Checking your Stripe connection…');
    }
    this.loadConnect();

    // Returning from Google's consent screen. Mirrors the Stripe handler above: clean the
    // URL so a refresh doesn't re-trigger, and translate the reason into something the
    // owner can act on rather than a bare "error".
    const g = this.route.snapshot.queryParamMap.get('google');
    if (g) {
      const reason = this.route.snapshot.queryParamMap.get('reason');
      this.router.navigate([], { queryParams: { google: null, reason: null }, queryParamsHandling: 'merge', replaceUrl: true });
      if (g === 'connected') this.toast.success('Google connected');
      else if (g === 'denied') this.toast.info('Google sign-in was cancelled');
      else if (reason === 'no_refresh_token') this.toast.error('Google didn\'t return a lasting permission. Remove this app at myaccount.google.com → Third-party access, then connect again.');
      else if (reason === 'scope') this.toast.error('The send-email permission wasn\'t granted. Connect again and allow it.');
      else this.toast.error('Could not connect Google. Please try again.');
      this.tab.set('email');
    }
    this.loadGmail();
  }

  async loadConnect(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    this.connectLoading.set(true);
    try {
      this.connect.set(await this.admin.connectStripeStatus(org));
    } finally { this.connectLoading.set(false); }
  }

  // ── Google / Gmail sending ────────────────────────────────────────
  /** Status only — the refresh token is service-role-only and never reaches the browser. */
  async loadGmail(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    this.gmail.set(await this.data.googleStatus(org));
  }

  /** Redirects to Google's consent screen, exactly like connectStripe does for Stripe. */
  async connectGoogle(): Promise<void> {
    const org = this.auth.orgId();
    if (!org || this.gmailBusy()) return;
    this.gmailBusy.set(true);
    try {
      const res = await this.admin.connectGoogleStart(org);
      if (res.url) { window.location.href = res.url; return; }
      this.toast.error(res.error ?? 'Could not start Google sign-in.');
    } catch {
      this.toast.error('Could not start Google sign-in. Please try again.');
    } finally { this.gmailBusy.set(false); }
  }

  async disconnectGoogle(): Promise<void> {
    const org = this.auth.orgId();
    if (!org || this.gmailBusy()) return;
    if (!(await this.confirm.ask({
      title: 'Disconnect Google',
      message: 'Invoices will stop sending automatically. You can still email them from your own mail app.',
      confirmLabel: 'Disconnect', danger: true,
    }))) return;
    this.gmailBusy.set(true);
    try {
      await this.admin.disconnectGoogle(org);
      await this.loadGmail();
      this.toast.success('Google disconnected');
    } catch {
      this.toast.error('Could not disconnect.');
    } finally { this.gmailBusy.set(false); }
  }

  /** Begin (or resume) onboarding — redirects to Stripe's hosted flow. */
  async connectStripe(): Promise<void> {
    const org = this.auth.orgId();
    if (!org || this.connecting()) return;
    this.connecting.set(true);
    try {
      const res = await this.admin.connectStripeStart(org);
      if (res.url) { window.location.href = res.url; return; }
      this.toast.error(res.error ?? 'Could not start Stripe onboarding.');
    } catch {
      this.toast.error('Could not start Stripe onboarding. Please try again.');
    } finally { this.connecting.set(false); }
  }

  async save(): Promise<void> {
    const org = this.auth.orgId();
    if (!org || this.saving()) return;
    this.saving.set(true); this.saved.set(false);
    try {
      await this.admin.updateOrgSettings(org, {
        timezone: this.timezone.trim(), currency: this.currency.trim().toUpperCase(),
        booking_params: {
          deposit_percent: Number(this.depositPercent), deposit_allowed: this.depositAllowed,
          hold_minutes: Number(this.holdMinutes),
          min_lead_minutes: Number(this.minLeadMinutes), cash_allowed: this.cashAllowed,
        },
        features: { work_board: this.workBoard },
        // The spread is load-bearing. This rebuilds the blob from the fields on this page,
        // so WITHOUT it any key written by another code path is silently dropped the next
        // time anyone saves Settings — from any tab, since there is one save() for all.
        invoice_details: {
          ...this.loadedInvoiceDetails,
          legal_name: this.legalName.trim(),
          address: this.companyAddress.trim(),
          phone: this.companyPhone.trim(),
          email: this.companyEmail.trim(),
          vat_number: this.vatNumber.trim(),
          vat_registered: this.vatRegistered,
          vat_rate: Number(this.vatRate) || 18,
          vat_note: this.vatNote.trim(),
          invoice_prefix: (this.invoicePrefix.trim() || 'INV').toUpperCase(),
          invoice_footer: this.invoiceFooter.trim(),
        },
        // Only written once the load has actually populated these fields. Saving from the
        // General tab before that would otherwise write defaults over real templates.
        ...(this.settingsLoaded ? {
          invoice_settings: {
            ...this.loadedInvoiceSettings,
            payment_terms_days: Number(this.paymentTermsDays) || 14,
            email_from: this.emailFrom.trim(),
            email_from_name: this.emailFromName.trim(),
            email_reply_to: this.emailReplyTo.trim(),
            email_bcc_self: this.emailBccSelf,
            templates: {
              invoice:  { subject: this.invoiceSubject.trim(),  body: this.invoiceBody.trim() },
              reminder: { subject: this.reminderSubject.trim(), body: this.reminderBody.trim() },
            },
          },
        } : {}),
      });
      this.saved.set(true);
      setTimeout(() => this.saved.set(false), 2500);
      this.toast.success('Settings saved');
    } catch {
      this.toast.error('Could not save settings. Please try again.');
    } finally { this.saving.set(false); }
  }

  async loadMembers(): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    this.membersLoading.set(true);
    try { this.members.set(await this.admin.listMembers(org)); }
    finally { this.membersLoading.set(false); }
  }

  async addMember(): Promise<void> {
    const org = this.auth.orgId();
    const email = this.newMemberEmail.trim();
    if (!org || !email || this.addingMember()) return;
    this.addingMember.set(true);
    try {
      const res = await this.admin.addMember(org, email, this.newMemberRole);
      if (res === 'ok') {
        this.toast.success('Member added');
        this.newMemberEmail = '';
        this.loadMembers();
        this.auth.refresh();
      } else if (res === 'no_user') {
        this.toast.error('That person must sign in to the booking app once before you can add them.');
      } else {
        this.toast.error('Could not add member.');
      }
    } finally { this.addingMember.set(false); }
  }

  async removeMember(m: OrgMember): Promise<void> {
    const org = this.auth.orgId();
    if (!org) return;
    if (!(await this.confirm.ask({ title: 'Remove member', message: `Remove ${m.email} from this organization?`, confirmLabel: 'Remove', danger: true }))) return;
    const res = await this.admin.removeMember(org, m.user_id);
    if (res.error) {
      this.toast.error(res.error.includes('last_owner') ? "You can't remove the only owner." : 'Could not remove member.');
    } else {
      this.toast.success('Member removed');
      this.loadMembers();
    }
  }

  async checkIntegrations(): Promise<void> {
    this.checking.set(true); this.intError.set(null);
    try {
      const res = await this.admin.checkIntegrations();
      if (res.error) { this.intError.set(res.error); }
      else { this.stripe.set(res.stripe ?? null); this.google.set(res.google ?? null); }
    } catch (e) {
      this.intError.set((e as Error).message);
    } finally { this.checking.set(false); }
  }
}
