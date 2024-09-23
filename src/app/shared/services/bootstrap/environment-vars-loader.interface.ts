import { Observable } from "rxjs";

export interface IEnvironmentVarsLoader {
  loadEnvironmentVariables(): Observable<void>;
}
