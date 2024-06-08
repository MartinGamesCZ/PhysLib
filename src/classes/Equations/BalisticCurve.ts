import Math from "../../utils/Math";
import type Planet from "../Planet";
import type Projectile from "../Projectile";
import Meter from "../Unit/meter";
import Second from "../Unit/second";

export default class BalisticCurve {
  projectile: Projectile;
  planet: Planet;

  max_height: Meter;
  landing_distance: Meter;
  time_of_flight: Second;

  constructor(projectile: Projectile, planet: Planet) {
    this.projectile = projectile;
    this.planet = planet;

    this.max_height = this.calculateMaxHeight();
    this.landing_distance = this.calculateLandingDistance();
    this.time_of_flight = this.calculateTimeOfFlight();
  }

  calculateMaxHeight(): Meter {
    return new Meter(
      Math.divide(
        Math.multiply(
          Math.M.pow(this.projectile.physical_properties.initial_velocity, 2),
          Math.M.pow(
            Math.M.sin(
              this.projectile.physical_properties.angle * (Math.M.PI / 180)
            ),
            2
          )
        ),
        Math.multiply(
          2,
          this.planet.physical_properties.gravitational_constant.value
        )
      )
    );
  }

  calculateLandingDistance(): Meter {
    return new Meter(
      Math.divide(
        Math.multiply(
          Math.M.pow(this.projectile.physical_properties.initial_velocity, 2),
          Math.M.sin(
            Math.multiply(
              2,
              this.projectile.physical_properties.angle * (Math.M.PI / 180)
            )
          )
        ),
        this.planet.physical_properties.gravitational_constant.value
      )
    );
  }

  calculateTimeOfFlight(): Second {
    return new Second(
      Math.divide(
        Math.multiply(
          2,
          this.projectile.physical_properties.initial_velocity,
          Math.M.sin(
            this.projectile.physical_properties.angle * (Math.M.PI / 180)
          )
        ),
        this.planet.physical_properties.gravitational_constant.value
      )
    );
  }
}
