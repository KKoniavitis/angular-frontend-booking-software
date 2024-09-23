import { Observable } from "rxjs";

import { AuthUser } from "@app/auth/domains/auth-user.domain";

export interface IAuthUseCase {
  login(targetUrl?: string): Observable<void>;
  logout(): Observable<void>;
  isAuthenticated(): Observable<boolean>;
  storeAccessTokenToLocalStorage(accessToken: string): void;
  getAccessTokenFromLocalStorage(): string | null;
  getUser(): Observable<AuthUser | null | undefined>;
}
