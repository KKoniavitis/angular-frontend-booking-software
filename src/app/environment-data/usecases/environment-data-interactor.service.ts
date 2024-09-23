import { Inject, Injectable } from "@angular/core";

import { Observable, filter, map, tap } from "rxjs";

import { IEnvironmentVars } from "@app/environment-data/domains/environment-data.domain";
import { IEnvironmentDataVarsUseCase } from "@app/environment-data/usecases/ports/in/environment-data-vars-usecase.interface";
import { IEnvironmentDataLocalGateway } from "@app/environment-data/usecases/ports/out/environment-data-local-gateway.interface";

import { environment } from "@environments/environment";

import { dotEnvDataToEnvironmentVars } from "@shared/utils/environment.utils";

export let environmentVars: IEnvironmentVars = environment;

@Injectable({
  providedIn: "root"
})
export class EnvironmentDataInteractor implements IEnvironmentDataVarsUseCase {
  constructor(
    @Inject("IEnvironmentDataLocalGateway") private _environmentDataLocalGateway: IEnvironmentDataLocalGateway
  ) {}

  getEnvironmentVars(): Observable<IEnvironmentVars | null> {
    return this._environmentDataLocalGateway.getEnvironmentVars().pipe(
      filter((decryptedEnvVarsData) => !!decryptedEnvVarsData),
      map((decryptedEnvVarsData) => dotEnvDataToEnvironmentVars(decryptedEnvVarsData as string) as IEnvironmentVars),
      tap((envVarsData) => {
        environmentVars = envVarsData;
        //console.log("The environment variables are: ", environmentVars);
      })
      /*map((decryptedEnvVarsData) => {
        if (decryptedEnvVarsData) {
          const envVarsData = dotEnvDataToEnvironmentVars(decryptedEnvVarsData) as IEnvironmentVars;

          environmentVars = envVarsData;

          return envVarsData;
        }

        return null;
      })*/
    );
  }
}
