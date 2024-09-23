import { Property } from "../../../properties/domains/property.domain";

import { StandardState } from "../../../shared/models/store-state.model";

export const PROPERTIES_STORE_KEY = "properties";

export interface PropertiesState extends StandardState {
  properties: Property[];
}

export const PROPERTIES_INITIAL_STATE: PropertiesState = {
  properties: [],
  isLoading: false,
  error: undefined
};
