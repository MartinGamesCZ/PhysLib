import Fluid from "../Fluid";
import DegreeCelsius from "../Unit/degree_celsius";
import KilogramPerMeterCubed from "../Unit/kilogram_per_meter_cubed";

export default class Water extends Fluid {
  constructor() {
    super({
      density: new KilogramPerMeterCubed(997), // kg/m^3
      viscosity: 1.0016, // Pa*s
      surfaceTension: 0.07275, // J/m^2
      temperature: new DegreeCelsius(20), // ˚C
      compressibility: 5.1e-10, // Pa^-1
      pressure: 1.01325, // Bar
    });
  }
}
