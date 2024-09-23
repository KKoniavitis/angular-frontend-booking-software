import { EAppEnvironment, IEnvironmentVars } from "../app/environment-data/domains/environment-data.domain";


export const environment: IEnvironmentVars = {
  // SYSTEM
  APP_ENV: EAppEnvironment.UAT,
  APP_ENV_VARS_URL: "assets/env/.env.uat",
  APP_UI_ENCRYPTION_KEY: process.env.APP_UI_ENCRYPTION_KEY, // Set at build time

  // MAIN
  APP_UI_PORT: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' from file
  APP_UI_TIMEZONE: undefined, // Set at runtime by retrieving 'APP_UI_TIMEZONE' from file
  APP_UI_DATE_FORMAT: undefined, // Set at runtime by retrieving 'APP_UI_DATE_FORMAT' from file
  APP_UI_DEFAULT_LANGUAGE: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' from file
  APP_UI_BASE_URI: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' from file

  // BACKEND
  APP_UI_API_BASE_URI: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' from file

  // AUTH0
  APP_UI_AUTH0_DOMAIN: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' from file
  APP_UI_AUTH0_CLIENT_ID: undefined, // Set at runtime by retrieving 'APP_ENV_VARS_URL' from file
  APP_UI_AUTH0_REDIRECT_URI: undefined // Set at runtime by retrieving 'APP_ENV_VARS_URL' from file
};
