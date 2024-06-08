import Physics from "../src";
import KiloGram from "../src/classes/Unit/kilo_gram";
import KilogramPerMeterCubed from "../src/classes/Unit/kilogram_per_meter_cubed";

const physics = new Physics();

const planet = new Physics.Planets.Earth();
const object = new Physics.Object({
  mass: new KiloGram(10),
  shape: null,
  volume: 10,
  density: new KilogramPerMeterCubed(2100),
});
const fluid = new Physics.Fluids.Water();

const Fb = new Physics.Equations.BuoyancyForce(object, fluid, planet);

console.log(Fb.value.value);

// Output: 97805.7 (N)
