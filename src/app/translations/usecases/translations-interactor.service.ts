import { Inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { Translations } from "../domains/translations.domain";
import { ITranslationsRestUseCase } from "../usecases/ports/in/translations-rest-usecase.inteface";
import { ITranslationsBackendGateway } from "../usecases/ports/out/translations-backend-gateway.interface";

import { EI18nLocales } from "../../shared/models/i18n.model";

@Injectable({
  providedIn: "root"
})
export class TranslationsInteractor implements ITranslationsRestUseCase {
  constructor(
    @Inject("ITranslationsBackendGateway") private _translationsBackendGateway: ITranslationsBackendGateway
  ) {}

  getTranslationsByLocale(locale: EI18nLocales): Observable<Translations> {
    return this._translationsBackendGateway.getTranslationsByLocale(locale);
  }
}
