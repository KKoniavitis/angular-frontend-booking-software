export interface Property {
  id: string;
  name: string;
  apcode: string;
  measurementTypeId: string;
  engineeringUnitId?: string;
  relationships: PropertyRelationship;
}

export interface PropertyRelationship {
  measurementType?: MeasurementType;
  engineeringUnit?: EngineeringUnit;
}

export interface MeasurementType {
  id: string;
  apcode: string;
  name: string;
  datatype: string;
}

export interface EngineeringUnit {
  id: string;
  name: string;
}

export interface CalculationPeriod {
  id: string;
  name: string;
  notes: string;
  isAggregated: boolean;
}
