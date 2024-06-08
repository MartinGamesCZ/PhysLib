import BalisticCurve from "./classes/Equations/BalisticCurve";
import BuoyancyForce from "./classes/Equations/BuoyancyForce";
import GravitationalForce from "./classes/Equations/GravitationalForce";
import Fluid from "./classes/Fluid";
import Fluids from "./classes/Fluid/fluids";
import FluidSimulation from "./classes/FluidSimulation";
import Object from "./classes/Object";
import Planet from "./classes/Planet";
import Planets from "./classes/Planet/planets";
import Projectile from "./classes/Projectile";

export default class Physics {
  // Matter
  static Fluid = Fluid;
  static Fluids = Fluids;

  // Space objects
  static Planet = Planet;
  static Planets = Planets;
  static Object = Object;
  static Projectile = Projectile;

  // Equations
  static Equations = {
    GravitationalForce,
    BuoyancyForce,
    BalisticCurve,
  };

  //FluidSimulation = FluidSimulation;
  constructor() {}
}
