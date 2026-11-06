import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';
import { BookingSummary } from '@booking/core/interfaces/booking.interface';
import { BookingListComponent } from './booking-list.component';

const DAY = 86_400_000;

function job(ref: string, startsInDays: number): BookingSummary {
  const start = new Date(Date.now() + startsInDays * DAY).toISOString();
  const end = new Date(Date.now() + startsInDays * DAY + 3_600_000).toISOString();
  return {
    id: ref, booking_ref: ref, status: 'booked', payment_status: 'unpaid',
    start_at: start, end_at: end, next_start_at: start, next_end_at: end,
    price_total: 100, total_paid: 0, is_external: false,
  } as unknown as BookingSummary;
}

describe('BookingListComponent ordering', () => {
  let component: BookingListComponent;

  beforeEach(() => {
    localStorage.removeItem('jm.bookings.view');
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { queryParamMap: convertToParamMap({}) } } },
        { provide: Router, useValue: { navigate: () => Promise.resolve(true) } },
        { provide: BookingsAuthService,
          useValue: { orgId: signal('org'), staffId: signal(null), setActiveStaff: () => {} } },
        { provide: BookingDataService,
          useValue: { bookings: signal<BookingSummary[]>([]),
                      queryBookingsInPeriod: () => Promise.resolve([]),
                      listDeletedBookings: () => Promise.resolve([]) } },
      ],
    });
    component = TestBed.runInInjectionContext(() => new BookingListComponent());
  });

  const refs = () => component.visible().map(b => b.booking_ref);

  /** Deliberately loaded in the order the server returns: next_start_at descending. */
  function load(): void {
    component.rows.set([job('2027-WEDDING', 300), job('IN-11-DAYS', 11), job('IN-6-DAYS', 6),
                        job('IN-2-DAYS', 2), job('TODAY', 0.1), job('LAST-WEEK', -7),
                        job('LAST-MONTH', -30)]);
  }

  it('puts the next job first when showing Upcoming', () => {
    load();
    component.filterState.set({ when: ['upcoming'] });
    expect(refs()).toEqual(['TODAY', 'IN-2-DAYS', 'IN-6-DAYS', 'IN-11-DAYS', '2027-WEDDING']);
  });

  it('keeps the most recent first when showing Past', () => {
    load();
    component.filterState.set({ when: ['past'] });
    expect(refs()).toEqual(['LAST-WEEK', 'LAST-MONTH']);
  });

  it('leads with what is still to come, then walks back through what happened', () => {
    load();
    component.filterState.set({});
    expect(refs()).toEqual(['TODAY', 'IN-2-DAYS', 'IN-6-DAYS', 'IN-11-DAYS', '2027-WEDDING',
                            'LAST-WEEK', 'LAST-MONTH']);
  });

  it('does not reorder the rows signal underneath itself', () => {
    load();
    const before = component.rows().map(b => b.booking_ref);
    component.visible();
    expect(component.rows().map(b => b.booking_ref)).toEqual(before);
  });

  it('shows the same first job on the page the table renders', () => {
    load();
    component.filterState.set({ when: ['upcoming'] });
    expect(component.paged.items()[0].booking_ref).toBe('TODAY');
  });
});
