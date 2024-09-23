import { Observable } from "rxjs";

import { PropertyResource } from "../resources/property.resource";

export interface IPropertiesBackendRestRepository {
  getProperties(): Observable<PropertyResource[]>;
}
