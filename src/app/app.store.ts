export const APP_STORE_KEY = "app";

export interface AppGlobalState {
  isAppLoaderLoading: boolean;
}

export const APP_INITIAL_STATE: AppGlobalState = {
  isAppLoaderLoading: false
};
