import { EI18nLocales } from "../../models/i18n.model";

export interface IFrameworkI18n {
  setFrameworkLocale(locale: EI18nLocales): void;
}
