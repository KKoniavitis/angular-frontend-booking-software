import { OverlayContainer } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, ViewEncapsulation } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { Subscription } from "rxjs";

import { IAuthUseCase } from "@app/auth/usecases/ports/in/IAuthUseCase";

import { SvgIconComponent } from "@shared/components/svg-icon/svg-icon.component";

import { ThemeService } from "@shared/services/theme/theme.service";
import { unsubscribe } from "@shared/utils/observable.utils";
import { Router } from "@angular/router";
import { editProfileMainPath } from "@app/site-overview/adapters/in/edit-profile.routes";

@Component({
  selector: "app-user-account-menu",
  standalone: true,
  imports: [CommonModule, NzDropDownModule, NzMenuModule, SvgIconComponent, TranslateModule],
  templateUrl: "./user-account-menu.component.html",
  styleUrls: ["user-account-menu.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class UserAccountMenuComponent implements OnDestroy {
  private _authLogoutSubscription: Subscription = new Subscription();

  constructor(
    private _overlayContainer: OverlayContainer,
    @Inject("IAuthUseCase")
    private _authUseCase: IAuthUseCase,
    private _themeService: ThemeService,
    private _router: Router
  ) {
    this._overlayContainer.getContainerElement().classList.add("my-custom-overlay-container");
  }

  handleToggleThemeClick(): void {
    this._themeService.toggleTheme().then();
  }

  handleLogoutClick(): void {
    this._authUseCase.logout();
  }

  handleProfileClick(): void {
    this._router.navigate([editProfileMainPath]); // Use the router to navigate
  }

  ngOnDestroy(): void {
    unsubscribe([this._authLogoutSubscription]);
  }
}
