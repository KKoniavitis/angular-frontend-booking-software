import { Inject, Injectable } from "@angular/core";

import { I18N_LANGUAGE_LOCALSTORAGE_KEY } from "../../../infrastructure/ngx-translate/ngx-translate.config";
import { TranslateService } from "@ngx-translate/core";
import { NzI18nService } from "ng-zorro-antd/i18n";

import { environmentVars } from "../../../environment-data/usecases/environment-data-interactor.service";

import { EI18nLocales } from "../../models/i18n.model";
import { IAppI18n } from "../../services/i18n/app-i18n.interface";
import { IFrameworkI18n } from "../../services/i18n/framework-i18n.interface";
import { ILibraryI18n } from "../../services/i18n/library-i18n.interface";
import { IPageNavigation } from "../../services/navigation/page-navigation.interface";
import { getLocaleForThemeLibrary, setLocaleForDateLibrary, setLocaleForFramework } from "../../utils/i18n.utils";

@Injectable({
  providedIn: "root"
})
export class I18nService implements IAppI18n, IFrameworkI18n, ILibraryI18n {
  constructor(
    private _translateService: TranslateService,
    private _nzI18nService: NzI18nService,
    @Inject("IPageNavigation") private _pageNavigation: IPageNavigation
  ) {}

  getCurrentLanguage(): EI18nLocales {
    return this._translateService.currentLang as EI18nLocales;
  }
  setLanguage(locale?: EI18nLocales | undefined): void {
    const storedLocale = localStorage.getItem(I18N_LANGUAGE_LOCALSTORAGE_KEY);

    if (locale) {
      if (locale === storedLocale) {
        return;
      }

      localStorage.setItem(I18N_LANGUAGE_LOCALSTORAGE_KEY, locale);
      this._pageNavigation.reload();

      return;
    }

    this._setLanguageAndLocale((storedLocale || environmentVars.APP_UI_DEFAULT_LANGUAGE) as EI18nLocales);
  }

  setFrameworkLocale(locale: EI18nLocales): void {
    setLocaleForFramework(locale);
  }

  setTranslationsLibraryLanguage(locale: EI18nLocales): void {
    this._translateService.use(locale);
  }

  setThemeLibraryLocale(locale: EI18nLocales): void {
    this._nzI18nService.setLocale(getLocaleForThemeLibrary(locale));
  }

  setDateLibraryLocale(locale: EI18nLocales): void {
    setLocaleForDateLibrary(locale);
  }

  private _setLanguageAndLocale(locale: EI18nLocales): void {
    this.setFrameworkLocale(locale);
    this.setTranslationsLibraryLanguage(locale);
    this.setThemeLibraryLocale(locale);
    this.setDateLibraryLocale(locale);

    localStorage.setItem(I18N_LANGUAGE_LOCALSTORAGE_KEY, locale);
    console.log("Language and locale set successfully!");
  }
}
