import * as process from "process";

import { EAppEnvironment, IEnvironmentVars } from "@app/environment-data/domains/environment-data.domain";

import { EI18nLocales } from "@shared/models/i18n.model";

export const environment: IEnvironmentVars = {
  // SYSTEM
  APP_ENV: EAppEnvironment.LOCAL,
  APP_ENV_VARS_URL: undefined,
  APP_UI_ENCRYPTION_KEY: process.env.APP_UI_ENCRYPTION_KEY, // Set at build time

  // MAIN
  APP_UI_PORT: 4200,
  APP_UI_TIMEZONE: "Europe/Athens",
  APP_UI_DATE_FORMAT: "dddd, DD/MM/YYYY HH:mm:ss",
  APP_UI_DEFAULT_LANGUAGE: EI18nLocales.EN_US,
  APP_UI_BASE_URI: "http://localhost:4200",

  // BACKEND
  APP_UI_API_BASE_URI: "http://localhost:4000",

  // AUTH0
  APP_UI_AUTH0_DOMAIN: "dev-pjyzivfky6ecgctl.us.auth0.com",
  APP_UI_AUTH0_CLIENT_ID: "ajenHW0KFZ06mYiaK6Crhrt3eYPZKkuT",
  APP_UI_AUTH0_REDIRECT_URI: "http://localhost:4200/auth/provider-callback"
};
