import { Observable } from "rxjs";

import { IEnvironmentVars } from "@app/environment-data/domains/environment-data.domain";

export interface IEnvironmentDataVarsUseCase {
  getEnvironmentVars(): Observable<IEnvironmentVars | null>;
}
