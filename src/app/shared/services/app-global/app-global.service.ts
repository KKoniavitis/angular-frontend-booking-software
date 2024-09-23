import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { appSlice } from "@app/app.reducer";
import { AppGlobalState } from "@app/app.store";

import { IAppGlobalStoreState } from "@shared/services/app-global/app-global-store-state.interface";

@Injectable({
  providedIn: "root"
})
export class AppGlobalService implements IAppGlobalStoreState {
  constructor(private _store: Store<AppGlobalState>) {}

  selectIsAppLoaderLoading(): Observable<boolean> {
    return this._store.select(appSlice.selectIsAppLoaderLoading);
  }
}
