import { Overlay } from "@angular/cdk/overlay";
import { Injectable, Injector } from "@angular/core";

import { TranslateService } from "@ngx-translate/core";
import { NzSingletonService } from "ng-zorro-antd/core/services";
import { NzNotificationService } from "ng-zorro-antd/notification";

@Injectable({
  providedIn: "root"
})
export class NotificationService extends NzNotificationService {
  constructor(
    _nzSingletonService: NzSingletonService,
    _overlay: Overlay,
    _injector: Injector,
    private _translateService: TranslateService
  ) {
    super(_nzSingletonService, _overlay, _injector);
  }

  successWithI18NKey(translationKey: string): void {
    this.success(this._translateService.instant("common.success"), this._translateService.instant(translationKey));
  }

  errorWithI18NKey(translationKey: string, interpolateParamsObj?: any): void {
    this.error(
      this._translateService.instant("common.error"),
      this._translateService.instant(translationKey, interpolateParamsObj)
    );
  }
}
