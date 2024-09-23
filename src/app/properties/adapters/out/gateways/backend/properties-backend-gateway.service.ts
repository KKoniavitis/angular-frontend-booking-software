import { Inject, Injectable } from "@angular/core";

import { Observable, map } from "rxjs";

import { IPropertiesBackendRestRepository } from "../../../../adapters/out/gateways/backend/repository/properties-backend-rest-repository.interface";
import { PropertyBackendDto } from "../../../../usecases/dtos/property-backend.dto";
import { resourcesToDtos } from "../../../../usecases/mappers/property-dto.mapper";
import { IPropertiesBackendGateway } from "../../../../usecases/ports/out/properties-backend-gateway.interface";

@Injectable({
  providedIn: "root"
})
export class PropertiesBackendGateway implements IPropertiesBackendGateway {
  constructor(
    @Inject("IPropertiesBackendRestRepository") private _propertiesRestRepository: IPropertiesBackendRestRepository
  ) {}

  getProperties(): Observable<PropertyBackendDto[]> {
    return this._propertiesRestRepository.getProperties().pipe(map(resourcesToDtos));
  }
}
