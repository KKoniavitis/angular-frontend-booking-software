import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

import { Observable, map } from "rxjs";

import { fullAuthProviderCallbackPath } from "@app/auth/adapters/in/auth.routes";
import { AuthInteractor } from "@app/auth/usecases/auth-interactor.service";

import { NavigationService } from "@shared/services/navigation/navigation.service";

export const anonymousGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  const authInteractorService = inject(AuthInteractor);
  const navigationService = inject(NavigationService);

  console.log("[AnonymousGuard]", state.url, route.queryParams);

  if (state.url.includes(fullAuthProviderCallbackPath)) {
    if (route.queryParams.code) {
      console.log("[AnonymousGuard] Auth callback from Provider");
      return true;
    }

    console.log("[AnonymousGuard] Auth callback not from Provider");

    navigationService.goToHome();

    return false;
  }

  return authInteractorService.isAuthenticated().pipe(
    map((authenticated: boolean) => {
      console.log("[AnonymousGuard] isAuthenticated", authenticated);
      if (authenticated) {
        navigationService.goToHome();

        return false;
      }

      return true;
    })
  );
};
