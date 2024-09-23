import { Location } from "@angular/common";
import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";

import { AppState } from "@infra/auth0/auth0.config";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzTypographyModule } from "ng-zorro-antd/typography";

import { LoginToolbarComponent } from "@app/auth/adapters/in/components/login/login-toolbar/login-toolbar.component";
import { IAuthUseCase } from "@app/auth/usecases/ports/in/IAuthUseCase";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LoginToolbarComponent, NzButtonModule, NzSpaceModule, NzTypographyModule]
})
export class LoginComponent {
  constructor(
    private _location: Location,
    @Inject("IAuthUseCase")
    private _authInteractor: IAuthUseCase
  ) {}

  handleLoginBtnClick(): void {
    const targetUrl = (this._location.getState() as AppState)?.target;
    console.log("[LoginComponent] handleLoginClick", targetUrl);
    this._authInteractor.login(targetUrl).subscribe();
  }
}
