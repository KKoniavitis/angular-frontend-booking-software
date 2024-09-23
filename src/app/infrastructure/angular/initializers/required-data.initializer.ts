import { of, switchMap } from "rxjs";

import { IDataLoader } from "@shared/services/bootstrap/data-loader.interface";
import { IEnvironmentVarsLoader } from "@shared/services/bootstrap/environment-vars-loader.interface";
import { isLocal } from "@shared/utils/environment.utils";

export const initializeRequiredGlobalDataFactory = (
  environmentVarsLoader: IEnvironmentVarsLoader,
  dataLoader: IDataLoader
): (() => void) => {
  return () => {
    console.log("[initializeEnvironmentVariablesFactory]");

    if (isLocal()) {
      return of(dataLoader.loadRequiredGlobalData());
    }

    return environmentVarsLoader.loadEnvironmentVariables().pipe(
      switchMap(() => {
        return of(dataLoader.loadRequiredGlobalData());
      })
    );
  };
};
