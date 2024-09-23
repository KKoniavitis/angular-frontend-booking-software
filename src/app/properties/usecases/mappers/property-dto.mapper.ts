import { PropertyResource } from "../../adapters/out/gateways/backend/resources/property.resource";
import { PropertyBackendDto } from "../../usecases/dtos/property-backend.dto";

export const resourceToDto = (resource: PropertyResource): PropertyBackendDto => {
  return {
    id: resource.id,
    name: resource.name,
    apcode: resource.apcode,
    measurementTypeId: resource.measurementTypeId,
    engineeringUnitId: resource.engineeringUnitId,
    relationships: resource.relationships
  };
};

export const resourcesToDtos = (resources: PropertyResource[]): PropertyBackendDto[] => {
  return resources.map(resourceToDto);
};
