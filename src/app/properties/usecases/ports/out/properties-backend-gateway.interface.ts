import { Observable } from "rxjs";

import { PropertyBackendDto } from "../../../../properties/usecases/dtos/property-backend.dto";

export interface IPropertiesBackendGateway {
  getProperties(): Observable<PropertyBackendDto[]>;
}
