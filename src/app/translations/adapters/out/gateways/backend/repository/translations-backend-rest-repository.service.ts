import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, map } from "rxjs";

import { ITranslationsBackendRestRepository } from "../../../../../adapters/out/gateways/backend/repository/translations-backend-rest-repository.interface";
import { Translations } from "../../../../../domains/translations.domain";

import { EI18nLocales } from "../../../../../../shared/models/i18n.model";

@Injectable({
  providedIn: "root"
})
export class TranslationsBackendRestRepository implements ITranslationsBackendRestRepository {
  private static readonly TRANSLATIONS_REST_URI = "/translations";

  constructor(private _httpClient: HttpClient) {}

  getTranslationsByLocale(locale: EI18nLocales): Observable<Translations> {
    return this._httpClient
      .get<Translations>(`${TranslationsBackendRestRepository.TRANSLATIONS_REST_URI}/${locale}`)
      .pipe(map((response) => response));
  }
}
