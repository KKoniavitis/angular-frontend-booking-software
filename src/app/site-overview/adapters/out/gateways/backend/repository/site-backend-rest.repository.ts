import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, map } from "rxjs";

import { ISiteBackendRestRepository } from "../../../../../adapters/out/gateways/backend/repository/site-backend-rest-repository.interface";
import { SiteResource } from "../../../../../adapters/out/gateways/backend/resources/site.resource";

@Injectable({
  providedIn: "root"
})
export class SiteBackendRestRepository implements ISiteBackendRestRepository {
  private static readonly SITE_REST_URI = "/site";

  constructor(private _httpClient: HttpClient) {}

  getSiteById(siteId: string): Observable<SiteResource> {
    return this._httpClient
      .get<SiteResource>(`${SiteBackendRestRepository.SITE_REST_URI}/${siteId}`)
      .pipe(map((response) => response));
  }
}
