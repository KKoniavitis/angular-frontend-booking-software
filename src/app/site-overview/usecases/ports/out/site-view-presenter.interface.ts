import { SiteModel } from "../../../../site-overview/usecases/models/site-model";

export interface ISiteViewPresenter {
  successView(siteModel: SiteModel): SiteModel;
}
