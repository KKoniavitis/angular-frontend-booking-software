import { Inject, Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { IPropertiesBackendGateway } from "../../../properties/usecases/ports/out/properties-backend-gateway.interface";
import {
  getProperties,
  getPropertiesFailure,
  getPropertiesSuccess
} from "../../../properties/usecases/store/properties.actions";

@Injectable()
export class PropertiesEffects {
  constructor(
    private _actions$: Actions,
    @Inject("IPropertiesBackendGateway")
    private _propertiesBackendGateway: IPropertiesBackendGateway
  ) {}

  getProperties$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getProperties),
      switchMap(() =>
        this._propertiesBackendGateway.getProperties().pipe(
          map(getPropertiesSuccess),
          catchError((error) => of(getPropertiesFailure(error)))
        )
      )
    )
  );
}
