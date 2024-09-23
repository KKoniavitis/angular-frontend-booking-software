import { createFeature, createReducer, on } from "@ngrx/store";

import { hideAppLoader, showAppLoader } from "../app/app.actions";
import { APP_INITIAL_STATE, APP_STORE_KEY, AppGlobalState } from "../app/app.store";

export const appSlice = createFeature({
  name: APP_STORE_KEY,
  reducer: createReducer(
    APP_INITIAL_STATE,
    on(showAppLoader, (state: AppGlobalState) => ({
      ...state,
      isAppLoaderLoading: true
    })),
    on(hideAppLoader, (state: AppGlobalState) => ({
      ...state,
      isAppLoaderLoading: false
    }))
  )
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectAppState, // feature selector
  selectIsAppLoaderLoading // selector for `books` property
} = appSlice;
