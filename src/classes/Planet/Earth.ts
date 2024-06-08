import Planet from "../Planet";
import DegreeCelsius from "../Unit/degree_celsius";
import KiloGram from "../Unit/kilo_gram";
import Meter from "../Unit/meter";
import MeterPerSecondSquared from "../Unit/meter_per_second_squared";
import Second from "../Unit/second";

export default class PlanetEarth extends Planet {
  constructor() {
    super({
      mass: new KiloGram(5.97219 * Math.pow(10, 24)),
      radius: new Meter(6.371 * Math.pow(10, 6)),
      rotation_period: new Second(23.9345 * 60 * 60),
      surface_temperature: new DegreeCelsius(20),
      gravitational_constant: new MeterPerSecondSquared(9.81),
    });
  }
}
