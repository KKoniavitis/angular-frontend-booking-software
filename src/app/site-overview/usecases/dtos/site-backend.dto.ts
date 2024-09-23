// @ts-ignore
import { EnterpriseBackendDto } from "../../../enterprise-overview/usecases/dtos/enterprise-backend.dto";
import { CalculationPeriod, Property } from "../../../properties/domains/property.domain";

import { ServiceProfile } from "../../../shared/models/common.model";

export interface SiteBackendDto {
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
  relationships?: SiteRelationshipsBackendDto;
}

export interface SiteRelationshipsBackendDto {
  siteType: SiteTypeBackendDto;
  enterprise: EnterpriseBackendDto;
  calculationPeriod: CalculationPeriod;
  serviceProfile: ServiceProfile;
}

export interface SiteTypeBackendDto {
  id: string;
  apcode: string;
  name: string;
}
