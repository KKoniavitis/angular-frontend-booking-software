import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzMenuModule } from "ng-zorro-antd/menu";

import { SvgIconComponent } from "@shared/components/svg-icon/svg-icon.component";
import { EI18nLocales } from "@shared/models/i18n.model";
import { getCountryCodeByLocale } from "@shared/utils/i18n.utils";

@Component({
  selector: "app-language-switcher",
  standalone: true,
  imports: [CommonModule, NzDropDownModule, NzMenuModule, SvgIconComponent],
  templateUrl: "./language-switcher.component.html",
  styleUrls: ["./language-switcher.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSwitcherComponent {
  @Input()
  supportedLanguages: EI18nLocales[];

  @Input()
  set selectedLanguage(value: EI18nLocales | null) {
    this._selectedLanguage = value;
  }

  get selectedLanguage(): EI18nLocales | null {
    return this._selectedLanguage;
  }

  @Output() languageChange = new EventEmitter<EI18nLocales>();

  private _selectedLanguage: EI18nLocales | null;

  resolveLangIcon(locale: EI18nLocales): string {
    return `flag-${getCountryCodeByLocale(locale)}`;
  }

  isLanguageSelected(locale: EI18nLocales): boolean {
    return this.selectedLanguage === locale;
  }

  handleLanguageSwitchClick(locale: EI18nLocales): void {
    this.languageChange.emit(locale);
  }
}
