import Math from "../../utils/Math";
import type Object from "../Object";
import type Planet from "../Planet";
import type KiloGram from "../Unit/kilo_gram";
import type MeterPerSecondSquared from "../Unit/meter_per_second_squared";
import Newton from "../Unit/newton";

export default class GravitationalForce {
  object: Object;
  planet: Planet;

  value: Newton;

  constructor(object: Object, planet: Planet) {
    this.object = object;
    this.planet = planet;

    this.value = this.calculate(
      this.object.physical_properties.mass,
      this.planet.physical_properties.gravitational_constant
    );
  }

  calculate(
    object_mass: KiloGram,
    gravitational_constant: MeterPerSecondSquared
  ): Newton {
    return new Newton(
      Math.multiply(object_mass.value, gravitational_constant.value)
    );
  }
}
