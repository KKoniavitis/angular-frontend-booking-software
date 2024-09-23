import { Routes } from "@angular/router";

export const editProfileMainPath = "edit-profile";
export const siteOverviewIdPath = ":siteId";
export const siteOverviewPath = `${editProfileMainPath}/${siteOverviewIdPath}`;

export const editProfileRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./components/edit-profile.component").then((m) => m.EditProfileComponent)
  }
];
