import { CommonModule } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { environmentVars } from "../app/environment-data/usecases/environment-data-interactor.service";

import { IAppI18n } from "../app/shared/services/i18n/app-i18n.interface";
import { ISimpleLogger } from "../app/shared/services/logger/simple-logger.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  standalone: true,
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent implements OnInit {
  constructor(
    @Inject("ISimpleLogger") private _simpleLogger: ISimpleLogger,
    @Inject("IAppI18n") private _appI18n: IAppI18n
  ) {
    this._simpleLogger.log(
      "[AppComponent] constructor",
      environmentVars.APP_ENV,
      environmentVars.APP_ENV_VARS_URL,
      environmentVars.APP_UI_ENCRYPTION_KEY,
      environmentVars.APP_UI_PORT,
      this._appI18n.getCurrentLanguage()
    );
  }

  ngOnInit(): void {}
}
