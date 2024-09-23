export interface PropertyModel {
  id: string;
  name: string;
  apcode: string;
  measurementTypeId: string;
  engineeringUnitId?: string;
  relationships: PropertyRelationshipModel;
}

export interface PropertyRelationshipModel {
  measurementType?: MeasurementTypeModel;
  engineeringUnit?: EngineeringUnitModel;
}

export interface MeasurementTypeModel {
  id: string;
  apcode: string;
  name: string;
  datatype: string;
}

export interface EngineeringUnitModel {
  id: string;
  name: string;
}
