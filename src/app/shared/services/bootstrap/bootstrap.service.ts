import { Inject, Injectable } from "@angular/core";

import { Observable, of, switchMap } from "rxjs";

import { environmentVars } from "../../../environment-data/usecases/environment-data-interactor.service";
import { IEnvironmentDataVarsUseCase } from "../../../environment-data/usecases/ports/in/environment-data-vars-usecase.interface";
import { IPropertiesStoreUseCase } from "../../../properties/usecases/ports/in/properties-store-usecase.interface";

import { IDataLoader } from "../../../shared/services/bootstrap/data-loader.interface";
import { IEnvironmentVarsLoader } from "../../../shared/services/bootstrap/environment-vars-loader.interface";
import { IAppI18n } from "../../../shared/services/i18n/app-i18n.interface";
import { ICommonLogger } from "../../../shared/services/logger/common-logger.interface";
import { ThemeService } from "../../../shared/services/theme/theme.service";
import { isLocal } from "../../../shared/utils/environment.utils";

@Injectable({
  providedIn: "root"
})
export class BootstrapService implements IDataLoader, IEnvironmentVarsLoader {
  constructor(
    @Inject("IPropertiesStoreUseCase")
    private _propertiesStoreUseCase: IPropertiesStoreUseCase,
    @Inject("IEnvironmentDataVarsUseCase")
    private _environmentDataVarsUseCase: IEnvironmentDataVarsUseCase,
    @Inject("ICommonLogger") private _commonLogger: ICommonLogger,
    @Inject("IAppI18n") private _appI18n: IAppI18n,
    private _themeService: ThemeService
  ) {}

  loadRequiredGlobalData(): void {
    console.log("[BootstrapService] loadRequiredGlobalData");
    if (!isLocal()) {
      this._commonLogger.init();
    }

    this._appI18n.setLanguage();
    this._themeService.loadTheme().then();
  }

  loadRequiredSecuredData(): void {
    console.log("[BootstrapService] loadRequiredSecuredData");
    this._propertiesStoreUseCase.getPropertiesByDispatch();
  }

  loadEnvironmentVariables(): Observable<void> {
    if (!environmentVars.APP_ENV_VARS_URL || !environmentVars.APP_UI_ENCRYPTION_KEY) {
      return of(void 0);
    }

    console.log("[BootstrapService] loadEnvironmentVariables");

    return this._environmentDataVarsUseCase.getEnvironmentVars().pipe(switchMap(() => of(void 0)));
  }
}
