import {
  FEATURES
} from "./chunk-TRSB2AWX.js";
import {
  UserDataService
} from "./chunk-IK77AZ53.js";
import "./chunk-NAY6QGZB.js";
import "./chunk-HHUPO22U.js";
import "./chunk-GCGHXSHH.js";
import "./chunk-ADCVIUEU.js";
import "./chunk-WKJ2S23Y.js";
import "./chunk-5FMFH5XE.js";
import "./chunk-JZYNJ4ST.js";
import {
  inject
} from "./chunk-JW5UDKQ7.js";
import {
  __spreadValues
} from "./chunk-TWWAJFRB.js";

// src/app/map/map.routes.ts
var mapRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-DVKLAQWU.js").then((m) => m.MapRootComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "malta"
      },
      {
        path: "",
        loadComponent: () => import("./chunk-TOAAWAS5.js").then((mod) => mod.HomeComponent)
      },
      {
        path: "privacy",
        loadComponent: () => import("./chunk-SBH6WTNL.js").then((mod) => mod.PrivacyComponent)
      },
      {
        path: "cookies",
        loadComponent: () => import("./chunk-OFGF2SOW.js").then((mod) => mod.CookiesComponent)
      },
      {
        path: "about",
        loadComponent: () => import("./chunk-VOAXTTJ4.js").then((mod) => mod.AboutComponent)
      },
      {
        path: "contact",
        loadComponent: () => import("./chunk-NCQN4FRF.js").then((mod) => mod.ContactComponent)
      },
      {
        path: "malta",
        children: [
          {
            path: "",
            loadComponent: () => import("./chunk-IFRCEA26.js").then((m) => m.MapShellComponent),
            children: [
              {
                path: "",
                pathMatch: "full",
                loadComponent: () => import("./chunk-YE5GJMAA.js").then((mod) => mod.MapExploreComponent)
              },
              {
                path: "list",
                loadComponent: () => import("./chunk-YMYFMXBC.js").then((m) => m.LocationListComponent)
              },
              {
                path: "deals",
                loadComponent: () => import("./chunk-PCY5W72Y.js").then((m) => m.DealsComponent)
              },
              {
                path: "events",
                loadComponent: () => import("./chunk-EXI5WWSZ.js").then((m) => m.EventsComponent)
              },
              {
                path: "providers/:id",
                loadComponent: () => import("./chunk-4BI5SXDW.js").then((m) => m.ProviderPageComponent)
              },
              {
                path: "experiences/:id",
                loadComponent: () => import("./chunk-PVOUFO56.js").then((m) => m.ExperiencePageComponent)
              },
              {
                path: "locations/:slug",
                loadComponent: () => import("./chunk-H5ADTN6M.js").then((m) => m.LocationPageComponent)
              },
              {
                path: "saved",
                loadComponent: () => import("./chunk-F6WFV6OF.js").then((m) => m.SavedPlacesComponent)
              },
              {
                path: "admin",
                canMatch: [() => inject(UserDataService).isAdmin()],
                loadComponent: () => import("./chunk-MVCBEJH2.js").then((m) => m.AdminPanelComponent)
              },
              {
                path: "groups",
                canMatch: [() => FEATURES.GROUPS],
                loadComponent: () => import("./chunk-JS5LBCP4.js").then((m) => m.ExploreTogetherComponent)
              },
              {
                path: "groups/:id",
                canMatch: [() => FEATURES.GROUPS],
                loadComponent: () => import("./chunk-GYDJ2FXT.js").then((m) => m.GroupDetailComponent)
              },
              {
                path: "notifications",
                loadComponent: () => import("./chunk-DVJVXGWW.js").then((m) => m.NotificationsComponent)
              }
            ]
          },
          {
            path: "30-places-2026",
            loadComponent: () => import("./chunk-NQAEWS6O.js").then((m) => m.TopPlacesComponent)
          },
          {
            path: "leaderboard",
            loadComponent: () => import("./chunk-MFIRUKKL.js").then((m) => m.LeaderboardComponent)
          },
          {
            path: "plan",
            canMatch: [() => FEATURES.ROUTE_BUILDER],
            loadComponent: () => import("./chunk-HTGFRNX6.js").then((m) => m.RouteBuilderComponent)
          }
        ]
      },
      {
        path: "pay",
        loadComponent: () => import("./chunk-GFWQF5AB.js").then((m) => m.PaymentComponent)
      }
    ]
  }, false ? { \u0275entryName: "src/app/map/map-root.component.ts" } : {})
];
export {
  mapRoutes
};
//# sourceMappingURL=chunk-VNYINUSA.js.map
