import { Observable } from "rxjs";

import { SiteBackendDto } from "../../../../site-overview/usecases/dtos/site-backend.dto";

export interface ISiteBackendGateway {
  getSite(siteId: string): Observable<SiteBackendDto>;
}
