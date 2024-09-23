//import * as Sentry from "@sentry/angular-ivy";
import { environmentVars } from "@app/environment-data/usecases/environment-data-interactor.service";

export const sentryConfig = {
  dsn: "https://3f41dc699bc4c8f2037ef5afa3184f34@o4506518318481408.ingest.sentry.io/4506518320578560",
  tracePropagationTargets: ["localhost"],
  environment: environmentVars.APP_ENV,
  integrations: [
    /*new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    }),*/
    /*new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false
    })*/
  ]
  // Performance Monitoring
  //tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  //replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  //replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
};
