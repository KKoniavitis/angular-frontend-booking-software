import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { NzPageHeaderModule } from "ng-zorro-antd/page-header";

@Component({
  selector: "app-login-toolbar",
  templateUrl: "./login-toolbar.component.html",
  styleUrls: ["./login-toolbar.component.less"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NzPageHeaderModule]
})
export class LoginToolbarComponent {}
