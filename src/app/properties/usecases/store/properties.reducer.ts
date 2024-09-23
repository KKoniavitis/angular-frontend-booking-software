import { createFeature, createReducer, on } from "@ngrx/store";

import {
  getProperties,
  getPropertiesFailure,
  getPropertiesSuccess
} from "../../../properties/usecases/store/properties.actions";
import {
  PROPERTIES_INITIAL_STATE,
  PROPERTIES_STORE_KEY,
  PropertiesState
} from "../../../properties/usecases/store/properties.store";

export const propertiesSlice = createFeature({
  name: PROPERTIES_STORE_KEY,
  reducer: createReducer(
    PROPERTIES_INITIAL_STATE,
    on(getProperties, (state: PropertiesState) => ({ ...state, isLoading: true })),
    on(getPropertiesSuccess, (state: PropertiesState, payload: any) => ({
      ...state,
      isLoading: false,
      properties: payload
    })),
    on(getPropertiesFailure, (state: PropertiesState, payload: any) => ({
      ...state,
      isLoading: false,
      properties: [],
      error: payload
    }))
  )
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectPropertiesState, // feature selector
  selectProperties, // selector for `books` property
  selectIsLoading, // selector for `loading` property
  selectError
} = propertiesSlice;
