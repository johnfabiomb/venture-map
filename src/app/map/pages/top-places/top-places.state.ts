import { Injectable, signal } from '@angular/core';
import { TopPlaceFilterId } from './top-places.data';

/**
 * UI state of the 30 Places page that must survive a round trip to a location
 * page: the page is destroyed on navigation, and "Back to list" should land on
 * the same filter and the card the visitor opened, not on the top of the page.
 */
@Injectable({ providedIn: 'root' })
export class TopPlacesState {
  private readonly _filter = signal<TopPlaceFilterId>('all');
  readonly filter = this._filter.asReadonly();

  private _lastOpened: string | null = null;

  setFilter(filter: TopPlaceFilterId): void {
    this._filter.set(filter);
  }

  rememberOpened(slug: string): void {
    this._lastOpened = slug;
  }

  /** Returns the slug once, so a later fresh visit starts at the top. */
  takeLastOpened(): string | null {
    const slug = this._lastOpened;
    this._lastOpened = null;
    return slug;
  }
}
