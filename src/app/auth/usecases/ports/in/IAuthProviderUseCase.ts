import { AppState } from "@auth0/auth0-angular";
import { RedirectLoginResult } from "@auth0/auth0-spa-js";
import { Observable } from "rxjs";

export interface IAuthProviderUseCase {
  checkCallback(url?: string): Observable<RedirectLoginResult<AppState>>;
  getState(): Observable<AppState>;
  getAccessToken(): Observable<string | null>;
}
