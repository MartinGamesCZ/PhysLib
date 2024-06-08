import type DegreeCelsius from "./Unit/degree_celsius";
import type KiloGram from "./Unit/kilo_gram";
import type Meter from "./Unit/meter";
import type MeterPerSecondSquared from "./Unit/meter_per_second_squared";
import type Second from "./Unit/second";

export interface PlanetPhysicalProperties {
  gravitational_constant: MeterPerSecondSquared; // g [m/s^2]
  mass: KiloGram; // kg
  radius: Meter; // m
  rotation_period: Second; // s
  surface_temperature: DegreeCelsius; // ˚C
}

export default class Planet {
  physical_properties: PlanetPhysicalProperties;

  constructor(physical_properties: PlanetPhysicalProperties) {
    this.physical_properties = physical_properties;
  }
}
