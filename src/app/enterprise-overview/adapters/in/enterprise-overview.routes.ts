import { Routes } from "@angular/router";

export const enterpriseOverviewPath = "enterprise-overview";

export const enterpriseOverviewRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("../../../../app/enterprise-overview/adapters/in/components/enterprise-overview.component").then(
        (m) => m.EnterpriseOverviewComponent
      )
  }
];
