import { bootstrapApplication } from "@angular/platform-browser";

import { angularAppConfig } from "../src/app/infrastructure/angular/angular-app.config";

import { AppComponent } from "../src/app/app.component";

bootstrapApplication(AppComponent, angularAppConfig)
  .then(() => console.log("Application started successfully!"))
  .catch((err) => console.error("An error occurred while starting the Application!", err));
