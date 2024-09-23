import { Inject, Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";

import { PropertyBackendDto } from "../../properties/usecases/dtos/property-backend.dto";
import { PropertyModel } from "../../properties/usecases/models/property.model";
import { IPropertiesRestUseCase } from "../../properties/usecases/ports/in/properties-rest-usecase.interface";
import { IPropertiesStoreUseCase } from "../../properties/usecases/ports/in/properties-store-usecase.interface";
import { IPropertiesBackendGateway } from "../../properties/usecases/ports/out/properties-backend-gateway.interface";
import { IPropertiesViewPresenter } from "../../properties/usecases/ports/out/properties-view-presenter.interface";
import { getProperties } from "../../properties/usecases/store/properties.actions";

@Injectable({
  providedIn: "root"
})
export class PropertiesInteractor implements IPropertiesRestUseCase, IPropertiesStoreUseCase {
  constructor(
    @Inject("IPropertiesBackendGateway")
    private _propertiesBackendGateway: IPropertiesBackendGateway,
    @Inject("IPropertiesViewPresenter")
    private _propertiesViewPresenter: IPropertiesViewPresenter,
    private _store: Store
  ) {}

  getPropertiesByDispatch(): void {
    this._store.dispatch(getProperties());
  }

  getProperties(): Observable<PropertyModel[]> {
    return this._propertiesBackendGateway
      .getProperties()
      .pipe(
        map((propertyBackendDtos: PropertyBackendDto[]) =>
          this._propertiesViewPresenter.successView(propertyBackendDtos)
        )
      );
  }
}
