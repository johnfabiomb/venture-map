import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingAdminService, AdminService, AdminStaff, StaffServiceRow, MemberLogin, StaffCalendar, GCAL_COLORS, colorHex } from '@booking/core/services/booking-admin.service';
import { SelectComponent, SelectOption } from '@booking/ui/select/select.component';
import { ToastService } from '@booking/ui/toast/toast.service';
import { ConfirmService } from '@booking/ui/confirm/confirm.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';

interface StaffForm {
  id?: string; name: string; email: string; is_bookable: boolean;
  /** The org-member login this worker signs in as ('' = not linked). */
  loginEmail: string;
  /** What it was when the form opened, so an unchanged link is not re-written. */
  originalLogin: string;
}
interface SvcRow { serviceId: string; name: string; assigned: boolean; start: number; end: number; }

@Component({
  selector: 'app-staff-admin',
  standalone: true,
  imports: [FormsModule, SelectComponent],
  templateUrl: './staff-admin.component.html',
  styleUrl: './staff-admin.component.scss',
})
export class StaffAdminComponent implements OnInit {
  private readonly admin = inject(BookingAdminService);
  private readonly auth = inject(BookingsAuthService);
  private readonly toast = inject(ToastService);
  private readonly confirm = inject(ConfirmService);

  readonly staff = signal<AdminStaff[]>([]);
  readonly services = signal<AdminService[]>([]);
  private assignments: StaffServiceRow[] = [];
  readonly loading = signal(true);

  /** Org members who can sign in — a worker is linked to one of these, never to an
   *  arbitrary address, so a login can only ever be someone with access already. */
  // ── Calendars (§28) ──────────────────────────────────────────────────────
  /** Each worker's own Google calendar connection. Their diary is the only calendar read
   *  for their availability; the organisation's shared one is an overview, never read. */
  readonly calendars = signal<StaffCalendar[]>([]);
  readonly calendarBusy = signal('');
  readonly colorOptions: SelectOption[] = [
    { value: '', label: 'No colour' },
    ...GCAL_COLORS.map(c => ({ value: c.id, label: c.name, color: c.hex })),
  ];
  calendarFor(staffId: string): StaffCalendar | undefined {
    return this.calendars().find(c => c.staff_id === staffId);
  }
  hex(id: string | null): string { return colorHex(id); }

  async connectCalendar(s: AdminStaff): Promise<void> {
    if (this.calendarBusy()) return;
    this.calendarBusy.set(s.id);
    try {
      const res = await this.admin.connectStaffCalendar(s.id);
      if (!res.url) { this.toast.error(res.error ?? 'Could not start the Google connection.'); return; }
      // Same-tab redirect, like the Stripe and org-Google flows: Google refuses to render
      // its consent screen inside an iframe, and a popup is blocked as often as not.
      window.location.href = res.url;
    } finally { this.calendarBusy.set(''); }
  }

  async disconnectCalendar(s: AdminStaff): Promise<void> {
    const cal = this.calendarFor(s.id);
    if (!(await this.confirm.ask({
      title: `Disconnect ${s.name}'s calendar`,
      message: `New jobs for ${s.name} will stop appearing on ${cal?.google_email ?? 'their calendar'}, and their real diary will no longer block bookings. Events already created are left alone.`,
      confirmLabel: 'Disconnect', danger: true,
    }))) return;
    this.calendarBusy.set(s.id);
    try {
      const res = await this.admin.disconnectStaffCalendar(s.id);
      if (!res.ok) { this.toast.error(res.error ?? 'Could not disconnect.'); return; }
      await this.reload();
      this.toast.info('Calendar disconnected');
    } finally { this.calendarBusy.set(''); }
  }

  async setColor(s: AdminStaff, colorId: string): Promise<void> {
    await this.admin.setStaffCalendarColor(s.id, colorId || null);
    await this.reload();
  }

  readonly memberLogins = signal<MemberLogin[]>([]);
  readonly loginOptions = computed<SelectOption[]>(() => [
    { value: '', label: 'Not linked', hint: 'this worker has no login' },
    ...this.memberLogins().map(m => ({
      value: m.email,
      label: m.email,
      hint: m.staff_name ? `${m.role} · already linked to ${m.staff_name}` : m.role,
    })),
  ]);
  /** The login currently linked to a worker, for the roster line. */
  loginFor(s: AdminStaff): string | null {
    return this.memberLogins().find(m => m.user_id === s.user_id)?.email ?? null;
  }

  readonly editingStaff = signal<StaffForm | null>(null);
  readonly managing = signal<AdminStaff | null>(null);
  readonly rows = signal<SvcRow[]>([]);
  readonly savingRow = signal<string | null>(null);

  async ngOnInit(): Promise<void> { await this.auth.initialize(); await this.reload(); }

  private async reload(): Promise<void> {
    const org = this.auth.orgId();
    if (org) {
      const [st, sv, asg, logins, cals] = await Promise.all([
        this.admin.listStaff(org), this.admin.listServices(org), this.admin.listStaffServices(),
        this.admin.listMemberLogins(org), this.admin.listStaffCalendars(org),
      ]);
      this.staff.set(st); this.services.set(sv); this.assignments = asg;
      this.memberLogins.set(logins);
      this.calendars.set(cals);
    }
    this.loading.set(false);
  }

  servicesFor(staffId: string): string[] {
    const ids = this.assignments.filter(a => a.staff_id === staffId).map(a => a.service_id);
    return this.services().filter(s => ids.includes(s.id)).map(s => s.name);
  }

  // ── Staff add/edit ────────────────────────────────────────────────
  addStaff(): void {
    this.editingStaff.set({ name: '', email: '', is_bookable: true, loginEmail: '', originalLogin: '' });
  }
  editStaff(s: AdminStaff): void {
    this.editingStaff.set({
      id: s.id, name: s.name, email: s.email ?? '', is_bookable: s.is_bookable,
      loginEmail: this.loginFor(s) ?? '', originalLogin: this.loginFor(s) ?? '',
    });
  }
  cancelStaff(): void { this.editingStaff.set(null); }
  async saveStaff(): Promise<void> {
    const f = this.editingStaff(); const org = this.auth.orgId();
    if (!f || !f.name.trim() || !org) return;
    const isNew = !f.id;
    try {
      const id = await this.admin.saveStaff(org, {
        id: f.id, name: f.name.trim(), email: f.email.trim() || null, is_bookable: f.is_bookable,
      });
      if (!id) { this.toast.error('Could not save the worker. Please try again.'); return; }

      // The login link is a separate, validated write. Reported separately too: the
      // worker IS saved even if the link is refused, and saying "could not save" would
      // be a lie that makes someone retype the whole row.
      const wanted = f.loginEmail.trim();
      if (wanted !== f.originalLogin) {
        const res = await this.admin.linkStaffUser(id, wanted || null);
        if (!res.ok) {
          await this.reload();
          this.editingStaff.set(null);
          this.toast.error(res.error === 'already_linked'
            ? `Worker saved, but ${wanted} is already the login for "${res.staff_name}". One login, one worker.`
            : res.error === 'not_a_member'
              ? `Worker saved, but ${wanted} has no access to this organization yet. Add them under Settings → Team first.`
              : 'Worker saved, but the login could not be linked.', 9000);
          return;
        }
      }
      this.editingStaff.set(null);
      await this.reload();
      this.toast.success(`Worker "${f.name.trim()}" ${isNew ? 'added' : 'updated'}`);
    } catch {
      this.toast.error('Could not save the worker. Please try again.');
    }
  }
  async removeStaff(s: AdminStaff): Promise<void> {
    if (!(await this.confirm.ask({ title: 'Remove worker', message: `Remove worker "${s.name}"?`, confirmLabel: 'Remove', danger: true }))) return;
    try {
      await this.admin.deleteStaff(s.id);
      await this.reload();
      this.toast.success(`Worker "${s.name}" removed`);
    } catch {
      this.toast.error('Could not remove the worker.');
    }
  }

  // ── Service assignment + schedule ─────────────────────────────────
  manageServices(s: AdminStaff): void {
    this.managing.set(s);
    this.rows.set(this.services().map(svc => {
      const a = this.assignments.find(x => x.staff_id === s.id && x.service_id === svc.id);
      const range = (a?.working_hours?.default as { start: number; end: number }[] | undefined)?.[0];
      return { serviceId: svc.id, name: svc.name, assigned: !!a, start: range?.start ?? 9, end: range?.end ?? 17 };
    }));
  }
  closeManage(): void { this.managing.set(null); }

  async saveRow(r: SvcRow): Promise<void> {
    const s = this.managing(); if (!s) return;
    this.savingRow.set(r.serviceId);
    try {
      if (r.assigned) await this.admin.assignService(s.id, r.serviceId, { default: [{ start: Number(r.start), end: Number(r.end) }] });
      else await this.admin.unassignService(s.id, r.serviceId);
      await this.reload();
      this.toast.success(`${r.name} ${r.assigned ? 'assigned to' : 'removed from'} ${s.name}`);
    } catch {
      this.toast.error('Could not update the assignment.');
    } finally { this.savingRow.set(null); }
  }
}
