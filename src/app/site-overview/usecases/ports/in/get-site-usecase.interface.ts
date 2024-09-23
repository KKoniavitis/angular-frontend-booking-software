import { Observable } from "rxjs";

import { SiteModel } from "@app/site-overview/usecases/models/site-model";

export interface IGetSiteUseCase {
  getSite(siteId: string): Observable<SiteModel>;
}
