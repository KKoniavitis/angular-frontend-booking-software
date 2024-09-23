import { EI18nLocales } from "../../models/i18n.model";

export interface IAppI18n {
  getCurrentLanguage(): EI18nLocales;
  setLanguage(locale?: EI18nLocales): void;
}
