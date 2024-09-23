import { PropertyModel } from "../../../../properties/usecases/models/property.model";

export interface IPropertiesViewPresenter {
  successView(propertyModels: PropertyModel[]): PropertyModel[];
}
