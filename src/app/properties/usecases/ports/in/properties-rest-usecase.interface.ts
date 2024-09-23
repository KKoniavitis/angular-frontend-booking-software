import { Observable } from "rxjs";

import { PropertyModel } from "@app/properties/usecases/models/property.model";

export interface IPropertiesRestUseCase {
  getProperties(): Observable<PropertyModel[]>;
}
