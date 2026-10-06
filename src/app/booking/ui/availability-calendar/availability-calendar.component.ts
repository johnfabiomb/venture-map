import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { CalendarDayCell, CalendarSlotView } from '@booking/core/interfaces/availability.interface';

/**
 * Presentational month-grid + hour-pill calendar shared by the public booking
 * page and the admin availability picker. It is "dumb": it renders the cells
 * and slots it is given and emits clicks — all selection/availability logic
 * lives in the container.
 *
 * Privacy: busy reasons are only rendered when `showBusyReason` is true (admin).
 * The public container leaves it false, so it never receives or shows details.
 */
@Component({
  selector: 'app-availability-calendar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './availability-calendar.component.html',
  styleUrl: './availability-calendar.component.scss',
})
export class AvailabilityCalendarComponent {
  // Month grid
  readonly monthLabel = input.required<string>();
  readonly canGoPrev = input<boolean>(true);
  readonly cells = input.required<CalendarDayCell[]>();
  readonly selectedDate = input<string | null>(null);
  readonly loading = input<boolean>(false);
  readonly error = input<string | null>(null);
  readonly dayLabel = input<string>('Choose a day');

  // Hour slots (for the selected day)
  readonly slots = input<CalendarSlotView[]>([]);
  readonly timeLabel = input<string>('Choose a time');
  readonly timeHint = input<string>('');
  readonly emptyText = input<string>('No times available on this day.');
  readonly showBusyReason = input<boolean>(false);
  readonly hasSelection = input<boolean>(false);
  readonly allowPast = input<boolean>(false);   // admin can book past days; public can't

  readonly prevMonth = output<void>();
  readonly nextMonth = output<void>();
  readonly daySelected = output<CalendarDayCell>();
  readonly slotSelected = output<CalendarSlotView>();
  readonly clearSelection = output<void>();

  readonly dow = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  /** Fold the small hours away behind a toggle. The admin picker renders a full 24 hours
   *  at 30-minute steps — 48 pills, two columns on a phone, roughly 1300px of scrolling
   *  before the owner reaches anything else. The public page already receives only the
   *  worker's working hours, so it leaves this off. */
  readonly collapseQuietHours = input(false);
  readonly showAllHours = signal(false);

  /** Hour from the pill's own label. `hour` cannot be used: the admin picker numbers it
   *  0–47 (half-hour index) while the public page uses the wall-clock hour, and the label
   *  is the one thing both spell the same way. */
  private labelHour(label: string): number { return Number.parseInt(label.slice(0, 2), 10); }

  /** Quiet only when there is genuinely nothing to see: anything busy, selected or part
   *  of this booking stays visible no matter the hour, so folding can never hide a clash
   *  or a block the owner already picked. */
  private isQuiet(s: CalendarSlotView): boolean {
    if (s.mine || s.inRange || s.softBusy || !s.available) return false;
    const h = this.labelHour(s.label);
    return Number.isFinite(h) && (h < 6 || h >= 23);
  }

  readonly visibleSlots = computed<CalendarSlotView[]>(() => {
    const all = this.slots();
    if (!this.collapseQuietHours() || this.showAllHours()) return all;
    return all.filter(s => !this.isQuiet(s));
  });

  readonly hiddenCount = computed(() => this.slots().length - this.visibleSlots().length);
}
