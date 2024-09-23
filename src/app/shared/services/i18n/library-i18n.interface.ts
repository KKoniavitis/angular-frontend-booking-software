import { EI18nLocales } from "../../models/i18n.model";

export interface ILibraryI18n {
  setTranslationsLibraryLanguage(locale: EI18nLocales): void;
  setThemeLibraryLocale(locale: EI18nLocales): void;
  setDateLibraryLocale(locale: EI18nLocales): void;
}
