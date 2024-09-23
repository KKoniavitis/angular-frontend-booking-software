import { Property } from "../../../properties/domains/property.domain";
import { PropertyBackendDto } from "../../../properties/usecases/dtos/property-backend.dto";
import { PropertyModel } from "../../../properties/usecases/models/property.model";

export const backendDtoToModel = (resource: PropertyBackendDto): PropertyModel => {
  return {
    id: resource.id,
    name: resource.name,
    apcode: resource.apcode,
    measurementTypeId: resource.measurementTypeId,
    engineeringUnitId: resource.engineeringUnitId,
    relationships: resource.relationships
  };
};

export const backendDtosToModels = (resources: PropertyBackendDto[]): PropertyModel[] => {
  return resources.map(backendDtoToModel);
};

export const domainToModel = (domain: Property): PropertyModel => {
  return {
    id: domain.id,
    name: domain.name,
    apcode: domain.apcode,
    measurementTypeId: domain.measurementTypeId,
    engineeringUnitId: domain.engineeringUnitId,
    relationships: domain.relationships
  };
};

export const domainsToModels = (domains: Property[]): PropertyModel[] => {
  return domains.map(domainToModel);
};
