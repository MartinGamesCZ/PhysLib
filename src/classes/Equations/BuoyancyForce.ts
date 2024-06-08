import Math from "../../utils/Math";
import type Fluid from "../Fluid";
import type Object from "../Object";
import type Planet from "../Planet";
import type KilogramPerMeterCubed from "../Unit/kilogram_per_meter_cubed";
import type MeterPerSecondSquared from "../Unit/meter_per_second_squared";
import Newton from "../Unit/newton";

export default class BuoyancyForce {
  object: Object;
  fluid: Fluid;
  planet: Planet;

  value: Newton;

  constructor(object: Object, fluid: Fluid, planet: Planet) {
    this.object = object;
    this.fluid = fluid;
    this.planet = planet;

    this.value = this.calculate(
      fluid.physical_properties.density,
      object.physical_properties.volume,
      planet.physical_properties.gravitational_constant
    );
  }

  calculate(
    fluid_density: KilogramPerMeterCubed,
    object_volume: number,
    gravitational_constant: MeterPerSecondSquared
  ) {
    return new Newton(
      Math.multiply(
        fluid_density.value,
        object_volume,
        gravitational_constant.value
      )
    );
  }
}
