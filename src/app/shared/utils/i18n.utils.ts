import { registerLocaleData } from "@angular/common";
import el from "@angular/common/locales/el";
import en from "@angular/common/locales/en";
import elExtra from "@angular/common/locales/extra/el";
import enExtra from "@angular/common/locales/extra/en";

import dayjs from "dayjs";
import elDayjs from "dayjs/locale/el";
import enDayjs from "dayjs/locale/en";
import { el_GR, en_US } from "ng-zorro-antd/i18n";

import { environmentVars } from "../../environment-data/usecases/environment-data-interactor.service";

import { EI18nCountryCodes, EI18nLanguageCodes, EI18nLocales } from "../../shared/models/i18n.model";

export const setLocaleForFramework = (locale: EI18nLocales): void => {
  registerLocaleData(_getLocaleForNg(locale), getLanguageCodeByLocale(locale), _getLocaleForNg(locale, true));
};

export const getLocaleForThemeLibrary = (locale: EI18nLocales) => {
  switch (locale) {
    case EI18nLocales.EN_US:
      return en_US;
    case EI18nLocales.EL_GR:
      return el_GR;
    default:
      return en_US;
  }
};

export const setLocaleForDateLibrary = (locale: EI18nLocales): void => {
  dayjs.tz.setDefault(environmentVars.APP_UI_TIMEZONE);

  switch (locale) {
    case EI18nLocales.EN_US:
      dayjs.locale(EI18nLanguageCodes.EN, enDayjs);
      dayjs.updateLocale(EI18nLanguageCodes.EN, {
        formats: {
          L: environmentVars.APP_UI_DATE_FORMAT
        }
      });
      break;
    case EI18nLocales.EL_GR:
      dayjs.locale(EI18nLanguageCodes.EL, elDayjs);
      dayjs.updateLocale(EI18nLanguageCodes.EL, {
        formats: {
          L: environmentVars.APP_UI_DATE_FORMAT
        }
      });
      break;
    default:
      dayjs.locale(EI18nLanguageCodes.EN, enDayjs);
      dayjs.updateLocale(EI18nLanguageCodes.EN, {
        formats: {
          L: environmentVars.APP_UI_DATE_FORMAT
        }
      });
      break;
  }
};

export const getCountryCodeByLocale = (locale: EI18nLocales): EI18nCountryCodes => {
  switch (locale) {
    case EI18nLocales.EN_US:
      return EI18nCountryCodes.US;
    case EI18nLocales.EL_GR:
      return EI18nCountryCodes.GR;
    default:
      return EI18nCountryCodes.US;
  }
};

export const getLanguageCodeByLocale = (locale: EI18nLocales): EI18nLanguageCodes => {
  switch (locale) {
    case EI18nLocales.EN_US:
      return EI18nLanguageCodes.EN;
    case EI18nLocales.EL_GR:
      return EI18nLanguageCodes.EL;
    default:
      return EI18nLanguageCodes.EN;
  }
};

const _getLocaleForNg = (locale: EI18nLocales, isExtra = false) => {
  switch (locale) {
    case EI18nLocales.EN_US:
      return isExtra ? enExtra : en;
    case EI18nLocales.EL_GR:
      return isExtra ? elExtra : el;
    default:
      return isExtra ? enExtra : en;
  }
};
