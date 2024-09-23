import { Observable } from "rxjs";

import { Translations } from "../../../domains/translations.domain";

import { EI18nLocales } from "../../../../shared/models/i18n.model";

export interface ITranslationsRestUseCase {
  getTranslationsByLocale(locale: EI18nLocales): Observable<Translations>;
}
