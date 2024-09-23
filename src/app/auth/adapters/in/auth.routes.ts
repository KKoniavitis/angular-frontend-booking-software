import { Routes } from "@angular/router";

export const authPath = "auth";
export const loginPath = "login";
export const fullLoginPath = `${authPath}/${loginPath}`;
export const authProviderCallbackPath = "provider-callback";
export const fullAuthProviderCallbackPath = `${authPath}/${authProviderCallbackPath}`;

export const authRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: loginPath, pathMatch: "prefix" },
      {
        path: loginPath,
        loadComponent: () =>
          import("../../../../app/auth/adapters/in/components/login/login.component").then((m) => m.LoginComponent)
      },
      {
        path: authProviderCallbackPath,
        loadComponent: () =>
          import("../../../../app/auth/adapters/in/components/provider-callback/auth-provider-callback.component").then(
            (m) => m.AuthProviderCallbackComponent
          )
      }
    ]
  }
];
