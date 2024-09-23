import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";

import { Observable, map } from "rxjs";

import { fullAuthProviderCallbackPath } from "../../../auth/adapters/in/auth.routes";
import { AuthInteractor } from "../../../auth/usecases/auth-interactor.service";

import { BootstrapService } from "../../services/bootstrap/bootstrap.service";
import { NavigationService } from "../../services/navigation/navigation.service";

export const securedGuard: CanActivateFn = (): Observable<boolean> => {
  const authInteractorService = inject(AuthInteractor);
  const bootstrapService = inject(BootstrapService);
  const navigationService = inject(NavigationService);

  console.log("[SecuredGuard]", window.location.pathname);

  return authInteractorService.isAuthenticated().pipe(
    map((authenticated: boolean) => {
      if (authenticated) {
        console.log("[SecuredGuard] is authenticated");
        bootstrapService.loadRequiredSecuredData();

        return true;
      }

      const targetUrl = window.location.pathname.includes(fullAuthProviderCallbackPath)
        ? undefined
        : window.location.pathname;

      console.log("[SecuredGuard] is not authenticated. Redirect to Login with targetUrl: ", targetUrl);

      navigationService.goToLogin(targetUrl);

      return false;
    })
  );
};
