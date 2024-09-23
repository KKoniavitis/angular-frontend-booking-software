export interface PropertyResource {
  id: string;
  name: string;
  apcode: string;
  measurementTypeId: string;
  engineeringUnitId?: string;
  relationships: PropertyRelationshipResource;
}

export interface PropertyRelationshipResource {
  measurementType?: MeasurementTypeResource;
  engineeringUnit?: EngineeringUnitResource;
}

export interface MeasurementTypeResource {
  id: string;
  apcode: string;
  name: string;
  datatype: string;
}

export interface EngineeringUnitResource {
  id: string;
  name: string;
}
