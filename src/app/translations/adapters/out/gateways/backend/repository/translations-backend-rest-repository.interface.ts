import { Observable } from "rxjs";

import { Translations } from "../../../../../domains/translations.domain";


export interface ITranslationsBackendRestRepository {
  getTranslationsByLocale(locale: string): Observable<Translations>;
}
