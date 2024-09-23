import { createAction, props } from "@ngrx/store";

export const getProperties = createAction("[Properties] Get Properties");
export const getPropertiesSuccess = createAction("[Properties] Get Properties Success");
export const getPropertiesFailure = createAction("[Properties] Get Properties Failure", props<{ error: any }>());
