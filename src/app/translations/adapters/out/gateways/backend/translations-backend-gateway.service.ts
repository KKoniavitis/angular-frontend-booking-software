import { Inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { ITranslationsBackendRestRepository } from "../backend/repository/translations-backend-rest-repository.interface";
import { Translations } from "../../../../domains/translations.domain";
import { ITranslationsBackendGateway } from "../../../../usecases/ports/out/translations-backend-gateway.interface";

import { EI18nLocales } from "../../../../../shared/models/i18n.model";

@Injectable({
  providedIn: "root"
})
export class TranslationsBackendGateway implements ITranslationsBackendGateway {
  constructor(
    @Inject("ITranslationsBackendRestRepository")
    private _translationsBackendRestRepository: ITranslationsBackendRestRepository
  ) {}

  getTranslationsByLocale(locale: EI18nLocales): Observable<Translations> {
    return this._translationsBackendRestRepository.getTranslationsByLocale(locale);
  }
}
