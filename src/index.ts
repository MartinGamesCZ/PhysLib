import GravitationalForce from "./classes/Equations/GravitationalForce";
import Fluid from "./classes/Fluid";
import FluidSimulation from "./classes/FluidSimulation";
import Object from "./classes/Object";
import Planet from "./classes/Planet";
import Planets from "./classes/Planet/planets";

export default class Physics {
  // Matter
  //static Fluid = Fluid;

  // Space objects
  static Planet = Planet;
  static Planets = Planets;
  static Object = Object;

  // Equations
  static Equations = {
    GravitationalForce,
  };

  //FluidSimulation = FluidSimulation;
  constructor() {}
}
