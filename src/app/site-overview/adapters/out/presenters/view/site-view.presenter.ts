import { SiteModel } from "../../../../../site-overview/usecases/models/site-model";
import { ISiteViewPresenter } from "../../../../../site-overview/usecases/ports/out/site-view-presenter.interface";

export class SiteViewPresenter implements ISiteViewPresenter {
  constructor() {}

  successView(siteModel: SiteModel): SiteModel {
    return siteModel;
  }
}
