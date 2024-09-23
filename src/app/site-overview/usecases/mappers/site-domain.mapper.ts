import { Site } from "../../../site-overview/domains/site.domain";
import { SiteBackendDto } from "../../../site-overview/usecases/dtos/site-backend.dto";

export const backendDtoToDomain = (dto: SiteBackendDto): Site => {
  return {
    id: dto.id,
    name: dto.name,
    notes: dto.notes,
    siteTypeId: dto.siteTypeId,
    enterpriseId: dto.enterpriseId,
    calculationPeriodId: dto.calculationPeriodId,
    installationDate: dto.installationDate,
    serviceProfileId: dto.serviceProfileId,
    lastUpdated: dto.lastUpdated,
    properties: dto.properties,
    relationships: dto.relationships
  };
};
