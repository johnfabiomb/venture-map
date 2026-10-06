import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BookingDataService } from '@booking/core/services/booking-data.service';
import { ClientEditorComponent } from '@booking/ui/client-editor/client-editor.component';
import { Client } from '@booking/core/interfaces/booking.interface';
import { PaginatorComponent } from '@booking/ui/paginator/paginator.component';
import { paginate } from '@booking/core/utils/pagination.util';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [DatePipe, ClientEditorComponent, PaginatorComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss',
})
export class ClientListComponent {
  readonly data = inject(BookingDataService);

  /** The client list has no filter of its own, so it pages the whole set. */
  readonly paged = paginate(this.data.clients);

  readonly editorOpen = signal(false);
  readonly editClient = signal<Client | null>(null);

  openNew(): void { this.editClient.set(null); this.editorOpen.set(true); }
  openEdit(c: Client): void { this.editClient.set(c); this.editorOpen.set(true); }
}
