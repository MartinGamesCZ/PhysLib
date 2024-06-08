import Fluid from "../Fluid";

export default class Water extends Fluid {
  constructor() {
    super({
      density: 997, // kg/m^3
      viscosity: 1.0016, // Pa*s
      surfaceTension: 0.07275, // J/m^2
      temperature: 20, // ˚C
      compressibility: 5.1e-10, // Pa^-1
      pressure: 1.01325, // Bar
    });
  }
}
