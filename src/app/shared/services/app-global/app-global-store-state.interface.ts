import { Observable } from "rxjs";

export interface IAppGlobalStoreState {
  selectIsAppLoaderLoading(): Observable<boolean>;
}
