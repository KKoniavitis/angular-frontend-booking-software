import { AuthConfig } from "@auth0/auth0-angular/lib/auth.config";
import { CacheLocation } from "@auth0/auth0-spa-js/src/global";

import { environmentVars } from "@app/environment-data/usecases/environment-data-interactor.service";

export const auth0Config: AuthConfig = {
  domain: environmentVars.APP_UI_AUTH0_DOMAIN as string,
  clientId: environmentVars.APP_UI_AUTH0_CLIENT_ID as string,
  useRefreshTokens: true, // true: refresh tokens are used to fetch new access tokens from the Auth0 server
  cacheLocation: "localstorage" as CacheLocation,
  authorizationParams: {
    redirect_uri: environmentVars.APP_UI_AUTH0_REDIRECT_URI
  }
};

export const AUTH_TOKEN_LOCALSTORAGE_KEY = "authToken";

// auth0.config.ts
export interface AppState {
  isAuthenticated: boolean;
  accessToken: string | null;
  target?: string;
  // Other properties as per your application's needs
}
