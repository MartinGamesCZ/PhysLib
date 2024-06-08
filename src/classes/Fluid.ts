import type DegreeCelsius from "./Unit/degree_celsius";
import type KilogramPerMeterCubed from "./Unit/kilogram_per_meter_cubed";

export interface FluidPhysicalProperties {
  density: KilogramPerMeterCubed;
  viscosity: number;
  surfaceTension: number;
  temperature: DegreeCelsius;
  compressibility: number;
  pressure: number;
}

export default class Fluid {
  physical_properties: any;

  constructor(physical_properties: FluidPhysicalProperties) {
    this.physical_properties = physical_properties;
  }
}
