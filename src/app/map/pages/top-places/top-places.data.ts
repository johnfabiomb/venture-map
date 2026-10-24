import { Difficulty, Island, Location } from '@map/core/models';
import { FilterId, getIsland, getIslandLabel, matchesFilter } from '@map/core/utils/location-filter.util';

/** One entry of the editorial list. Everything else is read from the location record. */
export interface TopPlaceEntry {
  num: number;
  /** The name used in the Instagram series — kept as is so the list matches the reels. */
  name: string;
  id: number;
}

export interface TopPlace {
  num: number;
  /** Two-digit rank as shown on the card, e.g. "07". */
  rank: string;
  name: string;
  slug: string;
  image: string;
  area: string;
  island: Island;
  difficulty: Difficulty;
  hidden: boolean;
  location: Location;
}

export type TopPlaceFilterId = 'all' | 'malta' | Extract<FilterId, 'gozo' | 'comino' | 'hidden' | 'cave' | 'beach' | 'easy'>;

export interface TopPlaceFilter {
  id: TopPlaceFilterId;
  label: string;
}

export const TOP_PLACES_2026: readonly TopPlaceEntry[] = [
  { num: 1,  name: 'Xwejni Salt Pans',               id: 65 },
  { num: 2,  name: 'Ramla Bay',                      id: 66 },
  { num: 3,  name: 'Argotti Botanic Gardens',        id: 67 },
  { num: 4,  name: 'Qarraba Cliffs Trail',           id: 72 },
  { num: 5,  name: 'Hondoq ir-Rummien',              id: 68 },
  { num: 6,  name: 'Rdum il-Qammieħ Viewpoint',      id: 69 },
  { num: 7,  name: 'Wied il-Mielaħ Window',          id: 23 },
  { num: 8,  name: "Ta' Kalanka Sea Cave",           id: 49 },
  { num: 9,  name: 'Fomm ir-Riħ',                    id: 36 },
  { num: 10, name: "Ta' Marija Cave",                id: 44 },
  { num: 11, name: 'Tal-Mixta Cave',                 id: 41 },
  { num: 12, name: 'Wied il-Għasri',                 id: 63 },
  { num: 13, name: 'Hidden Rocky Beach near Ġnejna', id: 70 },
  { num: 14, name: 'Għar ir-Riħ',                    id: 3  },
  { num: 15, name: 'Blata tal-Melħ Rock Passage',    id: 40 },
  { num: 16, name: 'Ix-Xaqqa Valley',                id: 24 },
  { num: 17, name: 'Wied Babu',                      id: 59 },
  { num: 18, name: "L-Għar ta' Bla Saqaf",           id: 16 },
  { num: 19, name: 'Xlendi Tower Coastal Path',      id: 73 },
  { num: 20, name: 'Mini Inland Sea',                id: 52 },
  { num: 21, name: 'Għar Ħanex Sea Cave',            id: 74 },
  { num: 22, name: 'Carolina Grotto',                id: 58 },
  { num: 23, name: 'Il-Kalanka',                     id: 75 },
  { num: 24, name: 'Paradise Bay',                   id: 55 },
  { num: 25, name: 'Imġiebaħ Beach',                 id: 76 },
  { num: 26, name: "L-Għar ta' Santa Katarina",      id: 77 },
  { num: 27, name: 'Tas-Simar Natural Arch',         id: 78 },
  { num: 28, name: 'Munxar Path',                    id: 8  },
  { num: 29, name: 'Dingli Cliffs',                  id: 19 },
  { num: 30, name: 'Hidden Pool',                    id: 79 },
];

export const TOP_PLACE_FILTERS: readonly TopPlaceFilter[] = [
  { id: 'all',    label: 'All' },
  { id: 'malta',  label: 'Malta' },
  { id: 'gozo',   label: 'Gozo' },
  { id: 'comino', label: 'Comino' },
  { id: 'hidden', label: 'Hidden gems' },
  { id: 'cave',   label: 'Caves' },
  { id: 'beach',  label: 'Beaches' },
  { id: 'easy',   label: 'Easy to reach' },
];

/**
 * Joins the editorial list with the location records. An entry whose location is
 * missing is dropped (and logged) rather than rendered as a dead card.
 */
export function resolveTopPlaces(entries: readonly TopPlaceEntry[], locations: readonly Location[]): TopPlace[] {
  const byId = new Map(locations.map(l => [l.id, l]));
  return entries.flatMap(entry => {
    const location = byId.get(entry.id);
    if (!location) {
      console.warn(`30 Places: location ${entry.id} (#${entry.num} ${entry.name}) not found`);
      return [];
    }
    return [{
      num: entry.num,
      rank: String(entry.num).padStart(2, '0'),
      name: entry.name,
      slug: location.slug,
      image: location.card ?? location.img,
      area: formatArea(location),
      island: getIsland(location) ?? Island.Malta,
      difficulty: location.difficulty,
      hidden: !!location.hidden,
      location,
    }];
  });
}

export function matchesTopPlaceFilter(place: TopPlace, filter: TopPlaceFilterId): boolean {
  switch (filter) {
    case 'all':   return true;
    case 'malta': return place.island === Island.Malta;
    default:      return matchesFilter(place.location, filter);
  }
}

/** "Gozo-Xagħra" → "Xagħra, Gozo"; "Mellieħa" → "Mellieħa, Malta"; "Comino" → "Comino". */
function formatArea(location: Location): string {
  const island = getIslandLabel(location) ?? 'Malta';
  const place = (location.locality ?? '').replace(/^(Gozo|Comino)-/, '').trim();
  return !place || place === island ? island : `${place}, ${island}`;
}
