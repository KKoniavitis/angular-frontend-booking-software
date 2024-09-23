import { Observable } from "rxjs";

export interface IEnvironmentDataLocalhostRepository {
  getEnvironmentVars(): Observable<string>;
}
