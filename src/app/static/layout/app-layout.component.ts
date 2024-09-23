import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Observable } from "rxjs";

import { AppFooterComponent } from "../../static/layout/footer/app-footer.component";
import { AppHeaderComponent } from "../../static/layout/header/app-header.component";

import { AppLoaderComponent } from "../../shared/components/app-loader/app-loader.component";
import { IAppGlobalStoreState } from "../../shared/services/app-global/app-global-store-state.interface";

@Component({
  selector: "app-layout",
  templateUrl: "./app-layout.component.html",
  styleUrls: ["./app-layout.component.less"],
  standalone: true,
  imports: [AppHeaderComponent, RouterOutlet, AppFooterComponent, AppLoaderComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent implements OnInit {
  isAppLoaderLoading$: Observable<boolean>;

  constructor(@Inject("IAppGlobalStoreState") private _appGlobalStoreState: IAppGlobalStoreState) {
    console.log("[AppLayoutComponent] constructor");
    this.isAppLoaderLoading$ = this._appGlobalStoreState.selectIsAppLoaderLoading();
  }

  ngOnInit(): void {}
}
