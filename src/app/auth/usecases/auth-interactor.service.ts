import { Injectable } from "@angular/core";

import { AppState, AuthService } from "@auth0/auth0-angular";
import { RedirectLoginResult } from "@auth0/auth0-spa-js";
import { AUTH_TOKEN_LOCALSTORAGE_KEY } from "@infra/auth0/auth0.config";
import { Observable, catchError, of, tap } from "rxjs";

import { AuthUser } from "@app/auth/domains/auth-user.domain";
import { IAuthProviderUseCase } from "@app/auth/usecases/ports/in/IAuthProviderUseCase";
import { IAuthUseCase } from "@app/auth/usecases/ports/in/IAuthUseCase";

@Injectable({
  providedIn: "root"
})
export class AuthInteractor implements IAuthUseCase, IAuthProviderUseCase {
  constructor(private _authProviderService: AuthService) {}

  login(targetUrl?: string): Observable<void> {
    return this._authProviderService.loginWithRedirect({
      appState: { target: targetUrl } as AppState
    });
  }

  logout(): Observable<void> {
    localStorage.removeItem(AUTH_TOKEN_LOCALSTORAGE_KEY);
    return this._authProviderService.logout();
  }

  isAuthenticated(): Observable<boolean> {
    return this._authProviderService.isAuthenticated$;
  }

  storeAccessTokenToLocalStorage(accessToken: string): void {
    localStorage.setItem(AUTH_TOKEN_LOCALSTORAGE_KEY, accessToken);
  }

  getAccessTokenFromLocalStorage(): string | null {
    return localStorage.getItem(AUTH_TOKEN_LOCALSTORAGE_KEY);
  }

  getUser(): Observable<AuthUser | null | undefined> {
    return this._authProviderService.user$;
  }

  checkCallback(url?: string): Observable<RedirectLoginResult<AppState>> {
    console.log("[AuthInteractorService] checkCallback 1");
    return this._authProviderService.handleRedirectCallback(url).pipe(
      tap((callback) => {
        console.log("[AuthInteractorService] checkCallback 2", callback?.appState?.target);
      }),
      //filter((callback: RedirectLoginResult<AuthProviderCallback | undefined>) => !!callback?.appState?.target),
      //take(1),
      catchError((err) => {
        console.log("[AuthInteractorService] checkCallback 3", err);
        return of({
          appState: {
            target: undefined
          }
        });
      })
    );
  }

  getState(): Observable<AppState> {
    return this._authProviderService.appState$;
  }

  getAccessToken(): Observable<string | null> {
    return this._authProviderService.getAccessTokenSilently().pipe(catchError(() => of(null)));
  }
}
