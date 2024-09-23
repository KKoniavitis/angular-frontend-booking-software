import { Property } from "../../../../../../properties/domains/property.domain";

export interface SiteResource {
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
}
