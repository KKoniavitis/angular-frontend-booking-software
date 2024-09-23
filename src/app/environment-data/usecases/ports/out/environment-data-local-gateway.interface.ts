import { Observable } from "rxjs";

export interface IEnvironmentDataLocalGateway {
  getEnvironmentVars(): Observable<string | null>;
}
