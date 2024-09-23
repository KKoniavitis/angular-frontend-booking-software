import { EAppEnvironment, IEnvironmentVars } from "../../environment-data/domains/environment-data.domain";
import { environmentVars } from "../../environment-data/usecases/environment-data-interactor.service";

import { environment } from "../../../environments/environment";

export const isLocal = (): boolean => environmentVars.APP_ENV === EAppEnvironment.LOCAL;
export const isProduction = (): boolean => environmentVars.APP_ENV === EAppEnvironment.PRODUCTION;

export const dotEnvDataToEnvironmentVars = (dotEnvData: string): IEnvironmentVars | null => {
  if (!dotEnvData?.length) {
    return null;
  }

  return dotEnvData
    .split("\n")
    .filter((line: string) => !line.startsWith("#"))
    .reduce((acc: IEnvironmentVars, cur) => {
      const keyValue = cur.split("=");

      if (keyValue.length === 2) {
        // @ts-ignore
        acc[keyValue[0].trim()] = keyValue[1].trim();
      }

      return acc;
    }, environment);
};
