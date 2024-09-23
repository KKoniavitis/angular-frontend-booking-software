import { Directionality } from "@angular/cdk/bidi";
import { Overlay } from "@angular/cdk/overlay";
import { Injectable, Injector } from "@angular/core";

import { NzConfigService } from "ng-zorro-antd/core/config";
import { NzModalService } from "ng-zorro-antd/modal";

@Injectable({
  providedIn: "root"
})
export class ModalService extends NzModalService {
  constructor(
    overlay: Overlay,
    injector: Injector,
    nzConfigService: NzConfigService,
    parentModal: NzModalService,
    directionality: Directionality
  ) {
    super(overlay, injector, nzConfigService, parentModal, directionality);
  }
}
