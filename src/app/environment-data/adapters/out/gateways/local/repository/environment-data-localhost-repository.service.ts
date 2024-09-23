import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { BYPASS_BASE_URI, BYPASS_RESPONSE_TYPE } from "@infra/angular/interceptors/global-http.interceptor";
import { Observable } from "rxjs";

import { IEnvironmentDataLocalhostRepository } from "@app/environment-data/adapters/out/gateways/local/repository/environment-data-localhost-repository.interface";
import { environmentVars } from "@app/environment-data/usecases/environment-data-interactor.service";

@Injectable({
  providedIn: "root"
})
export class EnvironmentDataLocalhostRepository implements IEnvironmentDataLocalhostRepository {
  constructor(private _httpClient: HttpClient) {}

  getEnvironmentVars(): Observable<string> {
    return this._httpClient.get<string>(environmentVars.APP_ENV_VARS_URL as string, {
      context: new HttpContext().set(BYPASS_RESPONSE_TYPE, "text").set(BYPASS_BASE_URI, "")
    });
  }
}
