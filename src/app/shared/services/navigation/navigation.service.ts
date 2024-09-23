import { Injectable } from "@angular/core";
import { ResolveEnd, ResolveStart, Router } from "@angular/router";

import { AppState } from "../../../infrastructure/auth0/auth0.config";
import { Store } from "@ngrx/store";

import { hideAppLoader, showAppLoader } from "../../../app.actions";
import { homePath, rootPath } from "../../../app.routes";
import { AppGlobalState } from "../../../app.store";
import { fullLoginPath } from "../../../auth/adapters/in/auth.routes";

import { IPageNavigation } from "../../services/navigation/page-navigation.interface";
import { IUriNavigation } from "../../services/navigation/uri-navigation.interface";

@Injectable({
  providedIn: "root"
})
export class NavigationService implements IPageNavigation, IUriNavigation {
  constructor(
    private _router: Router,
    private _store: Store<AppGlobalState>
  ) {
    _router.events.subscribe((event) => {
      if (event instanceof ResolveStart) {
        console.log("ResolveStart");
        this._store.dispatch(showAppLoader());
      }
      if (event instanceof ResolveEnd) {
        console.log("ResolveEnd");
        this._store.dispatch(hideAppLoader());
      }
    });
  }

  reload(): void {
    window.location.reload();
  }

  goToHome(): void {
    this._router.navigate([rootPath + homePath]);
  }

  goToLogin(targetUrl?: string): void {
    const appState: AppState = {
      isAuthenticated: false, // Example value, adjust as per your app's logic
      accessToken: null, // Example value, adjust as per your app's logic
      ...{ target: targetUrl }
    };
    this._router.navigate([rootPath + fullLoginPath], { state: appState });
  }

  goTo(path: string): void {
    this._router.navigateByUrl(path);
  }
}
