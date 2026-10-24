import { Component, DestroyRef, PLATFORM_ID, computed, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule, Scroll } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, take } from 'rxjs';
import { locations } from '@assets/locations.json';
import { Location } from '@map/core/models';
import { SeoService } from '@map/core/services/seo.service';
import { AnalyticsService } from '@map/core/services/analytics.service';
import { difficultyColor } from '@map/core/utils/location-filter.util';
import { FEATURES } from '../../feature-flags';
import {
  TOP_PLACES_2026, TOP_PLACE_FILTERS, TopPlace, TopPlaceFilterId,
  matchesTopPlaceFilter, resolveTopPlaces,
} from './top-places.data';
import { TopPlacesState } from './top-places.state';

const PLACES = resolveTopPlaces(TOP_PLACES_2026, locations as Location[]);

const DIFFICULTY_LABEL: Record<TopPlace['difficulty'], string> = {
  easy: 'Easy access',
  moderate: 'Some walking',
  hard: 'Hard to reach',
};

@Component({
  selector: 'app-top-places',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-places.component.html',
  styleUrl: './top-places.component.scss',
})
export class TopPlacesComponent {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly analytics = inject(AnalyticsService);
  private readonly state = inject(TopPlacesState);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly features = FEATURES;
  readonly places = PLACES;
  readonly filter = this.state.filter;

  readonly filters = TOP_PLACE_FILTERS
    .map(f => ({ ...f, count: PLACES.filter(p => matchesTopPlaceFilter(p, f.id)).length }))
    .filter(f => f.count > 0);

  readonly visible = computed(() => PLACES.filter(p => matchesTopPlaceFilter(p, this.filter())));

  readonly stats = {
    places: PLACES.length,
    hidden: PLACES.filter(p => p.hidden).length,
    islands: new Set(PLACES.map(p => p.island)).size,
  };

  constructor() {
    this.seo.setTrendPage(PLACES);
    if (this.isBrowser) {
      this.analytics.pageView(window.location.href, '30 Places to Visit in Malta');
      this.restoreScrollAfterNavigation();
    }
  }

  difficultyLabel(place: TopPlace): string {
    return DIFFICULTY_LABEL[place.difficulty];
  }

  difficultyColor(place: TopPlace): string {
    return difficultyColor(place.difficulty);
  }

  selectFilter(id: TopPlaceFilterId): void {
    if (id === this.filter()) return;
    this.state.setFilter(id);
    this.analytics.event('top_places_filter', { filter: id });

    // Once the visitor has scrolled into the list, a filter change would leave them
    // looking at a random spot mid-list; bring the first result back into view.
    const list = this.document.getElementById('places');
    if (list && list.getBoundingClientRect().top < 0) {
      list.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToList(): void {
    this.document.getElementById('places')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onOpen(place: TopPlace): void {
    this.state.rememberOpened(place.slug);
    this.analytics.event('top_place_click', {
      position: place.num,
      location_title: place.location.title,
      location_id: place.location.id,
    });
  }

  /**
   * The router scrolls to the top on every forward navigation (in-memory scrolling).
   * Waiting for its `Scroll` event and then bringing the last opened card into view
   * is what makes "Back to list" land where the visitor left. Browser back/forward
   * carries its own saved position, which the router restores, so leave that alone.
   */
  private restoreScrollAfterNavigation(): void {
    this.router.events.pipe(
      filter((e): e is Scroll => e instanceof Scroll),
      take(1),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(e => {
      const slug = this.state.takeLastOpened();
      if (!slug || e.position) return;
      requestAnimationFrame(() =>
        this.document.getElementById(`place-${slug}`)?.scrollIntoView({ block: 'center' }));
    });
  }
}
