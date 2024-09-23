import { EI18nLocales } from "@shared/models/i18n.model";

export interface IEnvironmentVars extends IExtEnvironmentVars {
  APP_ENV: EAppEnvironment;
  APP_ENV_VARS_URL?: string;
  APP_UI_ENCRYPTION_KEY?: string;
}

export interface IExtEnvironmentVars {
  APP_UI_PORT?: number;
  APP_UI_TIMEZONE?: string;
  APP_UI_DATE_FORMAT?: string;
  APP_UI_DEFAULT_LANGUAGE?: EI18nLocales;
  APP_UI_BASE_URI?: string;
  APP_UI_API_BASE_URI?: string;
  APP_UI_AUTH0_DOMAIN?: string;
  APP_UI_AUTH0_CLIENT_ID?: string;
  APP_UI_AUTH0_REDIRECT_URI?: string;
}

export enum EAppEnvironment {
  LOCAL = "local",
  DEVELOPMENT = "development",
  UAT = "uat",
  PRODUCTION = "production"
}
