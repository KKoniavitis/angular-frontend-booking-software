export interface PropertyBackendDto {
  id: string;
  name: string;
  apcode: string;
  measurementTypeId: string;
  engineeringUnitId?: string;
  relationships: PropertyRelationshipBackendDto;
}

export interface PropertyRelationshipBackendDto {
  measurementType?: MeasurementTypeBackendDto;
  engineeringUnit?: EngineeringUnitBackendDto;
}

export interface MeasurementTypeBackendDto {
  id: string;
  apcode: string;
  name: string;
  datatype: string;
}

export interface EngineeringUnitBackendDto {
  id: string;
  name: string;
}
