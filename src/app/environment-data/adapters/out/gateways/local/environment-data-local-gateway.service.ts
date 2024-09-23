import { Inject, Injectable } from "@angular/core";

import { Observable, from, switchMap } from "rxjs";

import { IEnvironmentDataLocalhostRepository } from "@app/environment-data/adapters/out/gateways/local/repository/environment-data-localhost-repository.interface";
import { environmentVars } from "@app/environment-data/usecases/environment-data-interactor.service";
import { IEnvironmentDataLocalGateway } from "@app/environment-data/usecases/ports/out/environment-data-local-gateway.interface";

import { pgpDecryptor } from "@shared/utils/encryption.utils";

@Injectable({
  providedIn: "root"
})
export class EnvironmentDataLocalGateway implements IEnvironmentDataLocalGateway {
  constructor(
    @Inject("IEnvironmentDataLocalhostRepository")
    private _environmentDataLocalhostRepository: IEnvironmentDataLocalhostRepository
  ) {}

  getEnvironmentVars(): Observable<string | null> {
    return this._environmentDataLocalhostRepository
      .getEnvironmentVars()
      .pipe(
        switchMap((encryptedDotEnvVarsData: string) =>
          from(pgpDecryptor(encryptedDotEnvVarsData, environmentVars.APP_UI_ENCRYPTION_KEY as string))
        )
      );
  }
}
