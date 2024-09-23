import { EnterpriseModel } from "../../../enterprise-overview/usecases/models/enterprise.model";
import { CalculationPeriod, Property } from "../../../properties/domains/property.domain";

import { ServiceProfile } from "../../../shared/models/common.model";

export interface SiteModel {
  id: string;
  name: string;
  notes: string;
  siteTypeId: string;
  enterpriseId: string;
  calculationPeriodId: string;
  installationDate: string;
  serviceProfileId: string;
  lastUpdated: string;
  properties?: Property[];
  relationships?: SiteRelationshipsModel;
}

export interface SiteRelationshipsModel {
  siteType: SiteTypeModel;
  enterprise: EnterpriseModel;
  calculationPeriod: CalculationPeriod;
  serviceProfile: ServiceProfile;
}

export interface SiteTypeModel {
  id: string;
  apcode: string;
  name: string;
}
