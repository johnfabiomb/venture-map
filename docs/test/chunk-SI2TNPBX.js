import {
  AnalyticsService
} from "./chunk-PZCZSWM6.js";
import {
  SeoService
} from "./chunk-2JSMPRXE.js";
import {
  FEATURES
} from "./chunk-TRSB2AWX.js";
import {
  difficultyColor,
  getIsland,
  getIslandLabel,
  matchesFilter
} from "./chunk-NOU6QLZK.js";
import "./chunk-GCGHXSHH.js";
import {
  locations
} from "./chunk-6MKSXHGS.js";
import {
  Island
} from "./chunk-5FMFH5XE.js";
import {
  takeUntilDestroyed
} from "./chunk-66EPZQA4.js";
import {
  Router,
  RouterLink,
  RouterModule,
  Scroll
} from "./chunk-CPWNAP4Z.js";
import "./chunk-H276UI7Q.js";
import {
  DOCUMENT,
  DestroyRef,
  PLATFORM_ID,
  computed,
  filter,
  inject,
  isPlatformBrowser,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VEX6DIAJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/map/pages/top-places/top-places.data.ts
var TOP_PLACES_2026 = [
  { num: 1, name: "Xwejni Salt Pans", id: 65 },
  { num: 2, name: "Ramla Bay", id: 66 },
  { num: 3, name: "Argotti Botanic Gardens", id: 67 },
  { num: 4, name: "Qarraba Cliffs Trail", id: 72 },
  { num: 5, name: "Hondoq ir-Rummien", id: 68 },
  { num: 6, name: "Rdum il-Qammie\u0127 Viewpoint", id: 69 },
  { num: 7, name: "Wied il-Miela\u0127 Window", id: 23 },
  { num: 8, name: "Ta' Kalanka Sea Cave", id: 49 },
  { num: 9, name: "Fomm ir-Ri\u0127", id: 36 },
  { num: 10, name: "Ta' Marija Cave", id: 44 },
  { num: 11, name: "Tal-Mixta Cave", id: 41 },
  { num: 12, name: "Wied il-G\u0127asri", id: 63 },
  { num: 13, name: "Hidden Rocky Beach near \u0120nejna", id: 70 },
  { num: 14, name: "G\u0127ar ir-Ri\u0127", id: 3 },
  { num: 15, name: "Blata tal-Mel\u0127 Rock Passage", id: 40 },
  { num: 16, name: "Ix-Xaqqa Valley", id: 24 },
  { num: 17, name: "Wied Babu", id: 59 },
  { num: 18, name: "L-G\u0127ar ta' Bla Saqaf", id: 16 },
  { num: 19, name: "Xlendi Tower Coastal Path", id: 73 },
  { num: 20, name: "Mini Inland Sea", id: 52 },
  { num: 21, name: "G\u0127ar \u0126anex Sea Cave", id: 74 },
  { num: 22, name: "Carolina Grotto", id: 58 },
  { num: 23, name: "Il-Kalanka", id: 75 },
  { num: 24, name: "Paradise Bay", id: 55 },
  { num: 25, name: "Im\u0121ieba\u0127 Beach", id: 76 },
  { num: 26, name: "L-G\u0127ar ta' Santa Katarina", id: 77 },
  { num: 27, name: "Tas-Simar Natural Arch", id: 78 },
  { num: 28, name: "Munxar Path", id: 8 },
  { num: 29, name: "Dingli Cliffs", id: 19 },
  { num: 30, name: "Hidden Pool", id: 79 }
];
var TOP_PLACE_FILTERS = [
  { id: "all", label: "All" },
  { id: "malta", label: "Malta" },
  { id: "gozo", label: "Gozo" },
  { id: "comino", label: "Comino" },
  { id: "hidden", label: "Hidden gems" },
  { id: "cave", label: "Caves" },
  { id: "beach", label: "Beaches" },
  { id: "easy", label: "Easy to reach" }
];
function resolveTopPlaces(entries, locations2) {
  const byId = new Map(locations2.map((l) => [l.id, l]));
  return entries.flatMap((entry) => {
    const location = byId.get(entry.id);
    if (!location) {
      console.warn(`30 Places: location ${entry.id} (#${entry.num} ${entry.name}) not found`);
      return [];
    }
    return [{
      num: entry.num,
      rank: String(entry.num).padStart(2, "0"),
      name: entry.name,
      slug: location.slug,
      image: location.card ?? location.img,
      area: formatArea(location),
      island: getIsland(location) ?? Island.Malta,
      difficulty: location.difficulty,
      hidden: !!location.hidden,
      location
    }];
  });
}
function matchesTopPlaceFilter(place, filter2) {
  switch (filter2) {
    case "all":
      return true;
    case "malta":
      return place.island === Island.Malta;
    default:
      return matchesFilter(place.location, filter2);
  }
}
function formatArea(location) {
  const island = getIslandLabel(location) ?? "Malta";
  const place = (location.locality ?? "").replace(/^(Gozo|Comino)-/, "").trim();
  return !place || place === island ? island : `${place}, ${island}`;
}

// src/app/map/pages/top-places/top-places.state.ts
var TopPlacesState = class _TopPlacesState {
  constructor() {
    this._filter = signal("all");
    this.filter = this._filter.asReadonly();
    this._lastOpened = null;
  }
  setFilter(filter2) {
    this._filter.set(filter2);
  }
  rememberOpened(slug) {
    this._lastOpened = slug;
  }
  /** Returns the slug once, so a later fresh visit starts at the top. */
  takeLastOpened() {
    const slug = this._lastOpened;
    this._lastOpened = null;
    return slug;
  }
  static {
    this.\u0275fac = function TopPlacesState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopPlacesState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TopPlacesState, factory: _TopPlacesState.\u0275fac, providedIn: "root" });
  }
};

// src/app/map/pages/top-places/top-places.component.ts
var _c0 = (a0) => ["/malta/locations", a0];
var _c1 = () => ({ backTo: "30-places-2026" });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.num;
function TopPlacesComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function TopPlacesComponent_For_52_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectFilter(f_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r2.filter() === f_r2.id);
    \u0275\u0275attribute("aria-pressed", ctx_r2.filter() === f_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.count);
  }
}
function TopPlacesComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" All ", ctx_r2.visible().length, ", in the order of the 2026 series ");
  }
}
function TopPlacesComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", ctx_r2.visible().length, " of ", ctx_r2.places.length, " places ");
  }
}
function TopPlacesComponent_For_59_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "Hidden gem");
    \u0275\u0275elementEnd();
  }
}
function TopPlacesComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 29)(1, "a", 47);
    \u0275\u0275listener("click", function TopPlacesComponent_For_59_Template_a_click_1_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onOpen(p_r5));
    });
    \u0275\u0275elementStart(2, "figure", 48);
    \u0275\u0275element(3, "img", 49);
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TopPlacesComponent_For_59_Conditional_6_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 52)(8, "h2", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 55);
    \u0275\u0275element(13, "span", 56);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "place-" + p_r5.slug);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, p_r5.slug))("queryParams", \u0275\u0275pureFunction0(14, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", p_r5.image, \u0275\u0275sanitizeUrl)("alt", p_r5.name + ", " + p_r5.area);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.rank);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r5.hidden ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.area);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.difficultyColor(p_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.difficultyLabel(p_r5), " ");
  }
}
function TopPlacesComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 57)(1, "span", 34);
    \u0275\u0275text(2, "\u{1F3F7}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4, "Exclusive deals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6, "Discounts from local partners I trust: watersports, boat trips and more.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 58)(8, "span", 34);
    \u0275\u0275text(9, "\u{1F39F}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 35);
    \u0275\u0275text(11, "What's on in Malta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 36);
    \u0275\u0275text(13, "Parties, pool days and live nights, by date, with tickets.");
    \u0275\u0275elementEnd()();
  }
}
var PLACES = resolveTopPlaces(TOP_PLACES_2026, locations);
var DIFFICULTY_LABEL = {
  easy: "Easy access",
  moderate: "Some walking",
  hard: "Hard to reach"
};
var TopPlacesComponent = class _TopPlacesComponent {
  constructor() {
    this.router = inject(Router);
    this.seo = inject(SeoService);
    this.analytics = inject(AnalyticsService);
    this.state = inject(TopPlacesState);
    this.document = inject(DOCUMENT);
    this.destroyRef = inject(DestroyRef);
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.features = FEATURES;
    this.places = PLACES;
    this.filter = this.state.filter;
    this.filters = TOP_PLACE_FILTERS.map((f) => __spreadProps(__spreadValues({}, f), { count: PLACES.filter((p) => matchesTopPlaceFilter(p, f.id)).length })).filter((f) => f.count > 0);
    this.visible = computed(() => PLACES.filter((p) => matchesTopPlaceFilter(p, this.filter())));
    this.stats = {
      places: PLACES.length,
      hidden: PLACES.filter((p) => p.hidden).length,
      islands: new Set(PLACES.map((p) => p.island)).size
    };
    this.seo.setTrendPage(PLACES);
    if (this.isBrowser) {
      this.analytics.pageView(window.location.href, "30 Places to Visit in Malta");
      this.restoreScrollAfterNavigation();
    }
  }
  difficultyLabel(place) {
    return DIFFICULTY_LABEL[place.difficulty];
  }
  difficultyColor(place) {
    return difficultyColor(place.difficulty);
  }
  selectFilter(id) {
    if (id === this.filter())
      return;
    this.state.setFilter(id);
    this.analytics.event("top_places_filter", { filter: id });
    const list = this.document.getElementById("places");
    if (list && list.getBoundingClientRect().top < 0) {
      list.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  scrollToList() {
    this.document.getElementById("places")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onOpen(place) {
    this.state.rememberOpened(place.slug);
    this.analytics.event("top_place_click", {
      position: place.num,
      location_title: place.location.title,
      location_id: place.location.id
    });
  }
  /**
   * The router scrolls to the top on every forward navigation (in-memory scrolling).
   * Waiting for its `Scroll` event and then bringing the last opened card into view
   * is what makes "Back to list" land where the visitor left. Browser back/forward
   * carries its own saved position, which the router restores, so leave that alone.
   */
  restoreScrollAfterNavigation() {
    this.router.events.pipe(filter((e) => e instanceof Scroll), take(1), takeUntilDestroyed(this.destroyRef)).subscribe((e) => {
      const slug = this.state.takeLastOpened();
      if (!slug || e.position)
        return;
      requestAnimationFrame(() => this.document.getElementById(`place-${slug}`)?.scrollIntoView({ block: "center" }));
    });
  }
  static {
    this.\u0275fac = function TopPlacesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopPlacesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopPlacesComponent, selectors: [["app-top-places"]], decls: 85, vars: 5, consts: [[1, "tp"], [1, "tp-hero"], ["routerLink", "/malta", 1, "tp-hero__back"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "15 18 9 12 15 6"], [1, "tp-hero__inner"], [1, "tp-kicker"], [1, "tp-hero__title"], [1, "tp-hero__year"], [1, "tp-hero__lead"], [1, "tp-stats"], [1, "tp-hero__ctas"], ["type", "button", 1, "tp-btn", "tp-btn--primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["points", "19 12 12 19 5 12"], ["routerLink", "/malta", 1, "tp-btn", "tp-btn--ghost"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"], ["x1", "9", "y1", "3", "x2", "9", "y2", "18"], ["x1", "15", "y1", "6", "x2", "15", "y2", "21"], ["href", "https://www.instagram.com/johnfabiomb/", "target", "_blank", "rel", "noopener", 1, "tp-byline"], ["src", "assets/landing/john-badge.jpg", "alt", "", "width", "36", "height", "36"], ["aria-label", "Filter the places", 1, "tp-filters"], [1, "tp-filters__row"], ["type", "button", 1, "tp-chip", 3, "is-active"], ["id", "places", 1, "tp-list"], [1, "tp-list__summary"], [1, "tp-grid"], [3, "id"], ["aria-labelledby", "tp-more-title", 1, "tp-more"], ["id", "tp-more-title", 1, "tp-section-title"], [1, "tp-more__grid"], ["routerLink", "/malta/groups", 1, "tp-tile"], [1, "tp-tile__emoji"], [1, "tp-tile__label"], [1, "tp-tile__desc"], [1, "tp-next"], [1, "tp-next__title"], [1, "tp-next__text"], ["href", "https://www.instagram.com/johnfabiomb/", "target", "_blank", "rel", "noopener", 1, "tp-btn", "tp-btn--primary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "1", "fill", "currentColor"], ["type", "button", 1, "tp-chip", 3, "click"], [1, "tp-chip__count"], [1, "tp-card", 3, "click", "routerLink", "queryParams"], [1, "tp-card__media"], ["loading", "lazy", "decoding", "async", "width", "600", "height", "750", 3, "src", "alt"], [1, "tp-card__num"], [1, "tp-card__gem"], [1, "tp-card__body"], [1, "tp-card__name"], [1, "tp-card__area"], [1, "tp-card__level"], [1, "tp-card__dot"], ["routerLink", "/malta/deals", 1, "tp-tile"], ["routerLink", "/malta/events", 1, "tp-tile"]], template: function TopPlacesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "polyline", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Map ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
        \u0275\u0275text(8, "The complete list \xB7 all 30 revealed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1", 7);
        \u0275\u0275text(10, "30 places to visit");
        \u0275\u0275element(11, "br");
        \u0275\u0275text(12, "in Malta ");
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "p", 9);
        \u0275\u0275text(16, " The spots I filmed this year, from sea caves you can swim into to clifftop sunsets most visitors never find. Every one is pinned on the map, with directions. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ul", 10)(18, "li")(19, "strong");
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " places");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li")(23, "strong");
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " hidden gems");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li")(27, "strong");
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " islands");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 11)(31, "button", 12);
        \u0275\u0275listener("click", function TopPlacesComponent_Template_button_click_31_listener() {
          return ctx.scrollToList();
        });
        \u0275\u0275text(32, " See the 30 places ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(33, "svg", 13);
        \u0275\u0275element(34, "line", 14)(35, "polyline", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "a", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 17);
        \u0275\u0275element(38, "polygon", 18)(39, "line", 19)(40, "line", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " Open the map ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(42, "a", 21);
        \u0275\u0275element(43, "img", 22);
        \u0275\u0275elementStart(44, "span");
        \u0275\u0275text(45, "Filmed by ");
        \u0275\u0275elementStart(46, "strong");
        \u0275\u0275text(47, "John Monta\xF1o");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " \xB7 @johnfabiomb");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "nav", 23)(50, "div", 24);
        \u0275\u0275repeaterCreate(51, TopPlacesComponent_For_52_Template, 4, 5, "button", 25, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "main", 26)(54, "p", 27);
        \u0275\u0275template(55, TopPlacesComponent_Conditional_55_Template, 1, 1)(56, TopPlacesComponent_Conditional_56_Template, 1, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ol", 28);
        \u0275\u0275repeaterCreate(58, TopPlacesComponent_For_59_Template, 15, 15, "li", 29, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "section", 30)(61, "h2", 31);
        \u0275\u0275text(62, "Plan your day out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 32)(64, "a", 33)(65, "span", 34);
        \u0275\u0275text(66, "\u{1F9ED}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span", 35);
        \u0275\u0275text(68, "Explore together");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "span", 36);
        \u0275\u0275text(70, "Join a group heading to the same places, plan the day and chat live.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(71, TopPlacesComponent_Conditional_71_Template, 14, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "footer", 37)(73, "p", 6);
        \u0275\u0275text(74, "Coming in 2027");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "h2", 38);
        \u0275\u0275text(76, "A brand new list of 30");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 39);
        \u0275\u0275text(78, "Follow along on Instagram to see every new place first.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "a", 40);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(80, "svg", 41);
        \u0275\u0275element(81, "rect", 42)(82, "circle", 43)(83, "circle", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275text(84, " Follow @johnfabiomb ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate(ctx.stats.places);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.stats.hidden);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.stats.islands);
        \u0275\u0275advance(23);
        \u0275\u0275repeater(ctx.filters);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.filter() === "all" ? 55 : 56);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.visible());
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.features.PROMOTIONS ? 71 : -1);
      }
    }, dependencies: [RouterModule, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.tp[_ngcontent-%COMP%] {\n  min-height: 100dvh;\n  background: var(--color-cream);\n  color: var(--color-charcoal);\n  overflow-x: hidden;\n}\n.tp-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: var(--color-primary);\n}\n.tp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 13px 22px;\n  border-radius: 999px;\n  border: 2px solid transparent;\n  font: inherit;\n  font-size: 15px;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    transform var(--transition),\n    background var(--transition),\n    box-shadow var(--transition);\n}\n.tp-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.tp-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.tp-btn--primary[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #1a1205;\n  box-shadow: 0 10px 26px var(--color-primary-shadow);\n}\n.tp-btn--primary[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-deep);\n}\n.tp-btn--ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #fff;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.tp-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.tp-section-title[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  font-size: clamp(22px, 3vw, 28px);\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.tp-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: min(88dvh, 760px);\n  display: flex;\n  align-items: flex-end;\n  padding: 72px 20px 40px;\n  color: #fff;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(21, 23, 28, 0.25) 0%,\n      rgba(21, 23, 28, 0.35) 40%,\n      rgba(21, 23, 28, 0.92) 100%),\n    url("./media/fomm.webp") center 40%/cover no-repeat,\n    var(--color-charcoal);\n}\n.tp-hero__back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 14px 8px 10px;\n  border-radius: 999px;\n  background: rgba(21, 23, 28, 0.45);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: background var(--transition);\n}\n.tp-hero__back[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 23, 28, 0.7);\n}\n.tp-hero__inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.tp-hero__title[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: clamp(40px, 9vw, 76px);\n  font-weight: 900;\n  line-height: 0.98;\n  letter-spacing: -0.035em;\n  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);\n}\n.tp-hero__year[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  white-space: nowrap;\n}\n.tp-hero__lead[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 0 22px;\n  font-size: clamp(15px, 2vw, 18px);\n  line-height: 1.55;\n  color: rgba(255, 255, 255, 0.86);\n}\n.tp-hero__ctas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 26px;\n}\n.tp-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 22px;\n  margin: 0 0 26px;\n  padding: 0;\n  list-style: none;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.tp-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  font-size: 22px;\n  font-weight: 800;\n  color: #fff;\n}\n.tp-byline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13.5px;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n}\n.tp-byline[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--color-primary);\n}\n.tp-byline[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.tp-byline[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.tp-filters[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: rgba(251, 247, 239, 0.92);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid var(--color-cream-line);\n}\n.tp-filters__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 12px 20px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.tp-filters__row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tp-chip[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--color-cream-line);\n  background: #fff;\n  font: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-charcoal);\n  cursor: pointer;\n  transition:\n    background var(--transition),\n    border-color var(--transition),\n    color var(--transition);\n}\n.tp-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n}\n.tp-chip__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--color-warm-muted);\n}\n.tp-chip.is-active[_ngcontent-%COMP%] {\n  background: var(--color-charcoal);\n  border-color: var(--color-charcoal);\n  color: #fff;\n}\n.tp-chip.is-active[_ngcontent-%COMP%]   .tp-chip__count[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.tp-list[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 18px 20px 8px;\n  scroll-margin-top: 0;\n}\n.tp-list__summary[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 13.5px;\n  color: var(--color-warm-muted);\n}\n.tp-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n@media (min-width: 720px) {\n  .tp-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 18px;\n  }\n}\n@media (min-width: 1040px) {\n  .tp-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 22px;\n  }\n}\n.tp-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  scroll-margin: 80px 0;\n}\n.tp-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-radius: 16px;\n  overflow: hidden;\n  background: #fff;\n  color: inherit;\n  text-decoration: none;\n  box-shadow: 0 1px 2px rgba(21, 23, 28, 0.06), 0 6px 18px rgba(21, 23, 28, 0.06);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.tp-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 2px 4px rgba(21, 23, 28, 0.06), 0 14px 32px rgba(21, 23, 28, 0.14);\n}\n.tp-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.tp-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.tp-card__media[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  aspect-ratio: 4/5;\n  overflow: hidden;\n  background: var(--color-cream-line);\n}\n.tp-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.tp-card__media[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 45%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.45),\n      transparent);\n  pointer-events: none;\n}\n.tp-card__num[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 12px;\n  z-index: 1;\n  font-size: clamp(30px, 5vw, 40px);\n  font-weight: 900;\n  line-height: 1;\n  letter-spacing: -0.04em;\n  color: #fff;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);\n}\n.tp-card__gem[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n  padding: 4px 9px;\n  border-radius: 999px;\n  background: rgba(21, 23, 28, 0.55);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.tp-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 12px 14px 14px;\n}\n.tp-card__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15.5px;\n  font-weight: 800;\n  line-height: 1.25;\n  letter-spacing: -0.01em;\n}\n.tp-card__area[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--color-warm-muted);\n}\n.tp-card__level[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 4px 0 0;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--color-charcoal);\n}\n.tp-card__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.tp-more[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 48px 20px 8px;\n}\n.tp-more__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 12px;\n}\n.tp-tile[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  column-gap: 14px;\n  row-gap: 4px;\n  align-items: start;\n  padding: 18px;\n  border-radius: 16px;\n  border: 1px solid var(--color-cream-line);\n  background: #fff;\n  color: inherit;\n  text-decoration: none;\n  transition:\n    border-color var(--transition),\n    transform var(--transition),\n    box-shadow var(--transition);\n}\n.tp-tile[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px rgba(21, 23, 28, 0.08);\n}\n.tp-tile__emoji[_ngcontent-%COMP%] {\n  grid-row: span 2;\n  font-size: 26px;\n  line-height: 1;\n}\n.tp-tile__label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n}\n.tp-tile__desc[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  line-height: 1.45;\n  color: var(--color-warm-muted);\n}\n.tp-next[_ngcontent-%COMP%] {\n  margin: 48px 20px 32px;\n  padding: 44px 24px;\n  border-radius: 24px;\n  background: var(--color-charcoal);\n  color: #fff;\n  text-align: center;\n}\n@media (min-width: 1220px) {\n  .tp-next[_ngcontent-%COMP%] {\n    max-width: 1180px;\n    margin-inline: auto;\n  }\n}\n.tp-next__title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: clamp(26px, 4vw, 36px);\n  font-weight: 900;\n  letter-spacing: -0.02em;\n}\n.tp-next__text[_ngcontent-%COMP%] {\n  margin: 0 0 22px;\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.75);\n}\n/*# sourceMappingURL=top-places.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopPlacesComponent, { className: "TopPlacesComponent", filePath: "src/app/map/pages/top-places/top-places.component.ts", lineNumber: 33 });
})();
export {
  TopPlacesComponent
};
//# sourceMappingURL=chunk-SI2TNPBX.js.map
