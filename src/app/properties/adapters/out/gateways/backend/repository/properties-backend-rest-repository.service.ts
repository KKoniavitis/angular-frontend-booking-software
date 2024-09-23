import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, map } from "rxjs";

import { IPropertiesBackendRestRepository } from "../repository/properties-backend-rest-repository.interface";
import { PropertyResource } from "../resources/property.resource";

@Injectable({
  providedIn: "root"
})
export class PropertiesBackendRestRepository implements IPropertiesBackendRestRepository {
  private static readonly PROPERTIES_REST_URI = "/properties";

  constructor(private _httpClient: HttpClient) {}

  getProperties(): Observable<PropertyResource[]> {
    return this._httpClient
      .get<PropertyResource[]>(PropertiesBackendRestRepository.PROPERTIES_REST_URI)
      .pipe(map((response) => response));
  }
}
