import { SiteResource } from "../../../site-overview/adapters/out/gateways/backend/resources/site.resource";
import { SiteBackendDto } from "../../../site-overview/usecases/dtos/site-backend.dto";

export const resourceToDto = (resource: SiteResource): SiteBackendDto => {
  return {
    id: resource.id,
    name: resource.name,
    notes: resource.notes,
    siteTypeId: resource.siteTypeId,
    enterpriseId: resource.enterpriseId,
    calculationPeriodId: resource.calculationPeriodId,
    installationDate: resource.installationDate,
    serviceProfileId: resource.serviceProfileId,
    lastUpdated: resource.lastUpdated,
    properties: resource.properties
  };
};
