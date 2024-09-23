import { Injectable } from "@angular/core";

import { PropertyModel } from "@app/properties/usecases/models/property.model";
import { IPropertiesViewPresenter } from "@app/properties/usecases/ports/out/properties-view-presenter.interface";

@Injectable({
  providedIn: "root"
})
export class PropertiesViewPresenter implements IPropertiesViewPresenter {
  constructor() {}

  successView(propertyModels: PropertyModel[]): PropertyModel[] {
    return propertyModels;
  }
}
