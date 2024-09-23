import { inject } from "@angular/core";

import { createSelector } from "@ngrx/store";

import { PropertiesViewPresenter } from "../../../properties/adapters/out/presenters/properties-view-presenter.service";
import { Property } from "../../../properties/domains/property.domain";
import { domainsToModels } from "../../../properties/usecases/mappers/property-model.mapper";
import { propertiesSlice } from "../../../properties/usecases/store/properties.reducer";

export const selectViewProperties = createSelector(propertiesSlice.selectProperties, (properties: Property[]) => {
  const propertiesViewPresenter = inject(PropertiesViewPresenter);

  return propertiesViewPresenter.successView(domainsToModels(properties));
});
