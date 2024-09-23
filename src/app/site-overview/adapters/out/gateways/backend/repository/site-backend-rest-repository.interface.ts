import { Observable } from "rxjs";

import { SiteResource } from "../../../../../adapters/out/gateways/backend/resources/site.resource";

export interface ISiteBackendRestRepository {
  getSiteById(siteId: string): Observable<SiteResource>;
}
