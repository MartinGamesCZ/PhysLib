import Water from "./Fluid/Water";

export interface FluidPhysicalProperties {
  density: number;
  viscosity: number;
  surfaceTension: number;
  temperature: number;
  compressibility: number;
  pressure: number;
}

export default class Fluid {
  physical_properties: any;

  static Water = Water;

  constructor(physical_properties: FluidPhysicalProperties) {
    this.physical_properties = physical_properties;
  }
}
