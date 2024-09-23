import { provideHttpClient } from "@angular/common/http";
import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, importProvidersFrom } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import {
  PreloadAllModules,
  Router,
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withPreloading,
  withViewTransitions
} from "@angular/router";

import { AuthModule } from "@auth0/auth0-angular";
import { initializeRequiredGlobalDataFactory } from "@infra/angular/initializers/required-data.initializer";
import { auth0Config } from "@infra/auth0/auth0.config";
import { dayjsConfig } from "@infra/dayjs/dayjs.config";
import { combinedEffects } from "@infra/ngrx/ngrx.config";
import { CustomTranslationLoader } from "@infra/ngx-translate/custom-translation-loader";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import * as Sentry from "@sentry/angular-ivy";
import { NzModalModule } from "ng-zorro-antd/modal";

import { appSlice } from "@app/app.reducer";
import { appRoutes } from "@app/app.routes";
import { AuthInteractor } from "@app/auth/usecases/auth-interactor.service";
import { EnvironmentDataLocalGateway } from "@app/environment-data/adapters/out/gateways/local/environment-data-local-gateway.service";
import { EnvironmentDataLocalhostRepository } from "@app/environment-data/adapters/out/gateways/local/repository/environment-data-localhost-repository.service";
import { EnvironmentDataInteractor } from "@app/environment-data/usecases/environment-data-interactor.service";
import { PropertiesBackendGateway } from "@app/properties/adapters/out/gateways/backend/properties-backend-gateway.service";
import { PropertiesBackendRestRepository } from "@app/properties/adapters/out/gateways/backend/repository/properties-backend-rest-repository.service";
import { PropertiesViewPresenter } from "@app/properties/adapters/out/presenters/properties-view-presenter.service";
import { PropertiesInteractor } from "@app/properties/usecases/properties-interactor.service";
import { propertiesSlice } from "@app/properties/usecases/store/properties.reducer";
import { TranslationsBackendRestRepository } from "@app/translations/adapters/out/gateways/backend/repository/translations-backend-rest-repository.service";
import { TranslationsBackendGateway } from "@app/translations/adapters/out/gateways/backend/translations-backend-gateway.service";
import { TranslationsInteractor } from "@app/translations/usecases/translations-interactor.service";

import { AppGlobalService } from "@shared/services/app-global/app-global.service";
import { BootstrapService } from "@shared/services/bootstrap/bootstrap.service";
import { I18nService } from "@shared/services/i18n/i18n.service";
import { LoggerService } from "@shared/services/logger/logger.service";
import { NavigationService } from "@shared/services/navigation/navigation.service";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

dayjsConfig();

export const angularAppConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      NgxMaterialTimepickerModule,
      AuthModule.forRoot(auth0Config),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        autoPause: true
      }),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: CustomTranslationLoader,
          deps: [TranslationsInteractor]
        }
      }),
      NzModalModule
    ),
    provideAnimationsAsync(),
    provideStore(),
    provideState(appSlice),
    provideState(propertiesSlice),
    provideEffects(combinedEffects),
    provideHttpClient(),
    //provideNzI18n(en_US),
    /*{
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: environmentVars.APP_UI_DATE_FORMAT }
    },*/
    {
      provide: "IEnvironmentVarsLoader",
      useExisting: BootstrapService
    },
    {
      provide: "IDataLoader",
      useExisting: BootstrapService
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeRequiredGlobalDataFactory,
      multi: true,
      deps: [BootstrapService, BootstrapService]
    },
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules),
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding(),
      withViewTransitions()
    ),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true
      })
    },
    {
      provide: Sentry.TraceService,
      deps: [Router]
    },
    {
      provide: APP_INITIALIZER,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true
    },
    {
      provide: "IEnvironmentDataLocalhostRepository",
      useClass: EnvironmentDataLocalhostRepository
    },
    {
      provide: "IEnvironmentDataLocalGateway",
      useClass: EnvironmentDataLocalGateway
    },
    {
      provide: "IEnvironmentDataVarsUseCase",
      useClass: EnvironmentDataInteractor
    },
    {
      provide: "ITranslationsBackendRestRepository",
      useClass: TranslationsBackendRestRepository
    },
    {
      provide: "ITranslationsBackendGateway",
      useClass: TranslationsBackendGateway
    },
    {
      provide: "ITranslationsRestUseCase",
      useClass: TranslationsInteractor
    },
    {
      provide: "IAppI18n",
      useClass: I18nService
    },
    {
      provide: "IFrameworkI18n",
      useClass: I18nService
    },
    {
      provide: "ILibraryI18n",
      useClass: I18nService
    },
    {
      provide: "ICommonLogger",
      useClass: LoggerService
    },
    {
      provide: "ISimpleLogger",
      useClass: LoggerService
    },
    {
      provide: "ISeverityLogger",
      useClass: LoggerService
    },
    {
      provide: "IPageNavigation",
      useExisting: NavigationService
    },
    {
      provide: "IUriNavigation",
      useExisting: NavigationService
    },
    {
      provide: "IAppGlobalStoreState",
      useClass: AppGlobalService
    },
    {
      provide: "IAuthUseCase",
      useExisting: AuthInteractor
    },
    {
      provide: "IAuthProviderUseCase",
      useExisting: AuthInteractor
    },
    {
      provide: "IPropertiesBackendRestRepository",
      useClass: PropertiesBackendRestRepository
    },
    {
      provide: "IPropertiesBackendGateway",
      useClass: PropertiesBackendGateway
    },
    {
      provide: "IPropertiesViewPresenter",
      useClass: PropertiesViewPresenter
    },
    {
      provide: "IPropertiesRestUseCase",
      useExisting: PropertiesInteractor
    },
    {
      provide: "IPropertiesStoreUseCase",
      useExisting: PropertiesInteractor
    }
  ]
};
