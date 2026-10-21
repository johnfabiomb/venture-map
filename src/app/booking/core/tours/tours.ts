import { Tour } from '@booking/ui/tour/tour.service';

/**
 * A tour per module, pointed at real controls.
 *
 * TWO RULES when you change this file:
 *
 * 1. Target `[data-tour="…"]` attributes, never styling classes. A class is renamed the
 *    next time the page is restyled and the tour silently stops pointing at anything.
 * 2. Adding a step means **bumping the tour's `version` and marking the step with the
 *    same `since`**. That is what makes the tour reopen as "New in Bookings" showing only
 *    what changed — which is the entire point: a tour you read once is useless the week a
 *    feature lands.
 */
export const TOURS: Record<string, Tour> = {

  /**
   * The whole platform, across pages. Deliberately about how the modules FEED EACH OTHER
   * rather than what each button does — that is what a per-module tour cannot teach, and
   * it is the thing that makes the app make sense: a job becomes an invoice becomes work
   * becomes money, without being typed in twice.
   */
  platform: {
    key: 'platform', label: 'The whole app', version: 1,
    steps: [
      { title: 'How this all fits together',
        text: 'Five minutes, across the whole app. The short version: a job is entered once, and the invoice, the calendar, the post-production and the money all follow from it.' },

      { target: '[data-tour="nav-scope"]', route: '/bookings/dashboard',
        title: 'Who you are looking at',
        text: 'With more than one worker, this switches the whole app between the business and one person. Every list, every total and every calendar below it follows this. Clients are the exception — they belong to the business, not to whoever shot for them.' },

      { target: '[data-tour="nav-dashboard"]', route: '/bookings/dashboard',
        title: 'Dashboard — what needs you',
        text: 'Jobs waiting to be confirmed, money owed, and what you actually kept after costs. If something needs doing, it appears here first.' },

      { target: '[data-tour="nav-bookings"]', route: '/bookings/list',
        title: 'Bookings — where a job starts',
        text: 'Everything begins here. Creating one sets the time, the charges and the client in a single pass — and the invoice exists the moment the booking does.' },

      { target: '[data-tour="new-booking"]', route: '/bookings/list',
        title: 'One form, the whole job',
        text: 'The time blocks go on the calendar and block the slot for real. Mark a block as post-production and it also creates the work ticket, with its own deadline and reserved time.' },

      { target: '[data-tour="nav-work"]', route: '/bookings/work',
        title: 'Work — after the camera is packed',
        text: 'Editing, grading, delivery. A card appears here on its own once the shoot has happened, so nothing is forgotten; finished work steps aside after a few days so the board stays about this week.' },

      { target: '[data-tour="nav-invoices"]', route: '/bookings/invoices',
        title: 'Invoices — the money record',
        text: 'Mostly these create themselves from bookings. You can also raise one with no job behind it, for work that never had a time slot. Overdue is tracked here, not guessed.' },

      { target: '[data-tour="nav-clients"]', route: '/bookings/clients',
        title: 'Clients — shared by the business',
        text: 'Company, VAT number and billing address live here once, and every invoice for that client uses them. A one-off name on a booking is never saved here, which keeps this list real.' },

      { target: '[data-tour="nav-settings"]', route: '/bookings/settings',
        title: 'Settings — set up once',
        text: 'Your company details and VAT, how deposits work, your Stripe account, sending invoices from your own Gmail, your insurance and permits, and who else can get in.' },

      { target: '[data-tour="nav-help"]',
        title: 'Every screen explains itself',
        text: 'This button changes with the page you are on. When a part of the app gains a feature, its tour reopens by itself showing only what is new — so you are told about it rather than having to find it.' },
    ],
  },

  bookings: {
    key: 'bookings', label: 'Bookings', version: 2,
    steps: [
      { title: 'Your jobs',
        text: 'Everything booked, past and future. Each tab is a different question: what is coming up, what is waiting on you, what is still unpaid.' },
      { target: '[data-tour="booking-tabs"]', title: 'Tabs are filters',
        text: 'They count what is in them, and each one fetches fresh — so a number here is the real number, not a stale cache.' },
      { target: '[data-tour="booking-search"]', title: 'Search',
        text: 'Searches reference, client and title across the whole tab, not just the rows on this page.' },
      { target: '[data-tour="new-booking"]', title: 'Create a job',
        text: 'The form sets up the whole job at once: the time, the charges, the invoice and — if you mark a time block for it — the post-production ticket.',
        since: 2 },
    ],
  },

  bookingForm: {
    key: 'bookingForm', label: 'Creating a booking', version: 2,
    steps: [
      { target: '[data-tour="bf-title"]', title: 'The title writes itself',
        text: 'Leave it alone and it fills in from the client, the location and the charge — "Drone Filming at Mercury Tower". Type your own and it stops for good. Clear it to get the suggestion back.',
        since: 2 },
      { target: '[data-tour="bf-customer"]', title: 'Client or a one-off name',
        text: 'A saved client brings its company, VAT number and billing address onto the invoice. A one-off name bills to that name only and is never saved.' },
      { target: '[data-tour="bf-charges"]', title: 'Charges make the invoice',
        text: 'These are the source of truth for the total. The invoice exists the moment the booking does — there is no second step.' },
      { target: '[data-tour="bf-picker"]', title: 'Pick the time',
        text: 'Tap a start, then an end. Add as many blocks as the job needs, across different days. Your real Google Calendar is checked as you pick, and warns you.' },
      { target: '[data-tour="bf-picker"]', title: 'A block can be the editing',
        text: 'Each block has a Shoot / Post-production switch. Mark one as post-production and it becomes a work ticket with its own type, deadline and owner — and that time is reserved on the calendar, so nothing else can be booked over it.',
        since: 2 },
    ],
  },

  bookingDetail: {
    key: 'bookingDetail', label: 'A booking', version: 2,
    steps: [
      { target: '[data-tour="bd-share"]', title: 'One link for the client',
        text: 'Their whole page for this job: the details, the invoice, paying by card or in person, and the files you deliver once it is paid. The URL is shown so you can check it before you send it.',
        since: 2 },
      { target: '[data-tour="bd-invoices"]', title: 'Invoices live here',
        text: 'Send, chase, print or add another — a job can carry a deposit and a final invoice. An issued invoice is a document the client holds, so you raise a second one rather than editing it.' },
      { target: '[data-tour="bd-documents"]', title: 'Paperwork',
        text: 'Attach your insurance or a permit when a client asks. Kept once in Settings and attached here, so one certificate serves every job — and an expired one is called out in red.',
        since: 2 },
      { target: '[data-tour="bd-costs"]', title: 'What the job cost you',
        text: 'Travel, a rental, a second shooter. Recording it here is what makes the profit figure on the dashboard real rather than a guess.' },
    ],
  },

  work: {
    key: 'work', label: 'Work board', version: 2,
    steps: [
      { title: 'Post-production, as a board',
        text: 'A card is a piece of work, not a booking. It can cover several jobs, or none at all.' },
      { target: '[data-tour="work-new"]', title: 'A card has everything',
        text: 'Title, details, type of work, status, owner, deadline, the jobs it covers, a checklist, and reserved time on the calendar.',
        since: 2 },
      { target: '[data-tour="work-cog"]', title: 'Make it yours',
        text: 'Rename, reorder, recolour or add board columns, and set the kinds of work you do. The colour is the one Google Calendar uses for that stage.',
        since: 2 },
      { target: '[data-tour="work-history"]', title: 'Finished work steps aside',
        text: 'Three days after a card is delivered it leaves the board and lives under History — nothing is deleted, it just stops burying this week.',
        since: 2 },
    ],
  },

  invoices: {
    key: 'invoices', label: 'Invoices', version: 1,
    steps: [
      { title: 'Your money record',
        text: 'Every invoice, whether it sits on a job in the calendar or stands on its own.' },
      { target: '[data-tour="inv-summary"]', title: 'Billed, collected, outstanding',
        text: 'Overdue is counted separately, because it cuts across unpaid and part-paid rather than replacing either.' },
      { target: '[data-tour="inv-new"]', title: 'An invoice without a job',
        text: 'For work that never had a time slot — a licence, a re-edit, a call-out.' },
    ],
  },

  documents: {
    key: 'documents', label: 'Documents', version: 1,
    steps: [
      { title: 'The paperwork clients ask for',
        text: 'Public liability insurance, your UAS operator registration, a remote pilot certificate, a permit. Kept here once.' },
      { target: '[data-tour="doc-add"]', title: 'Add it once',
        text: 'Then attach it to any booking in one click. It is a link, not a copy — one certificate serves every job, and removing it from one leaves the others alone.' },
      { title: 'Expiry matters',
        text: 'Fill in the expiry for anything that lapses. A certificate that ran out last month still looks handled on a booking until someone checks the date, so an expired one is shown in red on the job itself.' },
    ],
  },
};
