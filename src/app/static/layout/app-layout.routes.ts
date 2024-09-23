import { Routes } from "@angular/router";

import { enterpriseOverviewPath } from "../../enterprise-overview/adapters/in/enterprise-overview.routes";
import { editProfileMainPath } from "@app/site-overview/adapters/in/edit-profile.routes";

export const appLayoutRoutes: Routes = [
  {
    path: "",
    loadComponent: () => import("../../static/layout/app-layout.component").then((m) => m.AppLayoutComponent),
    children: [
      { path: "", redirectTo: enterpriseOverviewPath, pathMatch: "full" },
      {
        path: enterpriseOverviewPath,
        loadChildren: () =>
          import("../../enterprise-overview/adapters/in/enterprise-overview.routes").then(
            (m) => m.enterpriseOverviewRoutes
          )
      },
      {
        path: editProfileMainPath,
        loadChildren: () =>
          import("../../site-overview/adapters/in/edit-profile.routes").then((m) => m.editProfileRoutes)
      }
    ]
  }
];
