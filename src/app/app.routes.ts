import { Routes } from "@angular/router";

import { authPath } from "../app/auth/adapters/in/auth.routes";

import { anonymousGuard } from "../app/shared/guards/anonymous/anonymousGuard";
import { securedGuard } from "../app/shared/guards/secured/securedGuard";

export const rootPath = "/";
export const homePath = "";

export const appRoutes: Routes = [
  {
    path: homePath,
    canActivate: [securedGuard],
    loadChildren: () => import("../app/static/layout/app-layout.routes").then((m) => m.appLayoutRoutes)
  },
  {
    path: authPath,
    canActivate: [anonymousGuard],
    loadChildren: () => import("../app/auth/adapters/in/auth.routes").then((m) => m.authRoutes)
  },
  {
    path: "**",
    loadComponent: () =>
      import("../app/static/errors/not-found-error-404/not-found-error-404.component").then(
        (m) => m.NotFoundError404Component
      )
  }
];
