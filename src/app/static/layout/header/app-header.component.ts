import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { SUPPORTED_LOCALES } from "../../../infrastructure/ngx-translate/ngx-translate.config";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzSpaceModule } from "ng-zorro-antd/space";

import { UserAccountMenuComponent } from "../../../static/layout/header/user-account-menu/user-account-menu.component";

import { LanguageSwitcherComponent } from "../../../shared/components/language-switcher/language-switcher.component";
import { SvgIconComponent } from "../../../shared/components/svg-icon/svg-icon.component";
import { EI18nLocales } from "../../../shared/models/i18n.model";
import { IAppI18n } from "../../../shared/services/i18n/app-i18n.interface";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.less"],
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NzPageHeaderModule,
    NzAvatarModule,
    NzIconModule,
    NzDropDownModule,
    SvgIconComponent,
    NzSpaceModule,
    LanguageSwitcherComponent,
    UserAccountMenuComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {
  supportedLanguages: EI18nLocales[] = SUPPORTED_LOCALES;
  selectedLanguage: EI18nLocales;

  constructor(@Inject("IAppI18n") private _appI18n: IAppI18n) {
    this.selectedLanguage = this._appI18n.getCurrentLanguage();
  }

  handleLanguageChange(locale: EI18nLocales): void {
    this._appI18n.setLanguage(locale);
  }
}
