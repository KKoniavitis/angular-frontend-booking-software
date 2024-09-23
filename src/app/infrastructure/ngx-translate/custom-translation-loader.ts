import { Inject } from "@angular/core";

import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";

import { ITranslationsRestUseCase } from "@app/translations/usecases/ports/in/translations-rest-usecase.inteface";

import { EI18nLocales } from "@shared/models/i18n.model";

export class CustomTranslationLoader implements TranslateLoader {
  constructor(@Inject("ITranslationsRestUseCase") private _translationsRestUseCase: ITranslationsRestUseCase) {}

  getTranslation(locale: string): Observable<any> {
    return this._translationsRestUseCase.getTranslationsByLocale(locale as EI18nLocales);
  }
}
