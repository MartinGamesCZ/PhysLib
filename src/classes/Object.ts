import type KiloGram from "./Unit/kilo_gram";
import type KilogramPerMeterCubed from "./Unit/kilogram_per_meter_cubed";

export interface ObjectPhysicalProperties {
  mass: KiloGram;
  shape: any;
  volume: any;
  density: KilogramPerMeterCubed;
}

export default class Object {
  physical_properties: ObjectPhysicalProperties;

  constructor(physical_properties: ObjectPhysicalProperties) {
    this.physical_properties = physical_properties;
  }
}
