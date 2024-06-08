import Physics from "../src";
import PlanetEarth from "../src/classes/Planet/Earth";
import KiloGram from "../src/classes/Unit/kilo_gram";
import KilogramPerMeterCubed from "../src/classes/Unit/kilogram_per_meter_cubed";

const physics = new Physics();

const planet = new Physics.Planets.Earth();
const object = new Physics.Object({
  mass: new KiloGram(10),
  shape: null,
  volume: null,
  density: new KilogramPerMeterCubed(10),
});

const F = new Physics.Equations.GravitationalForce(object, planet);

console.log(F.value.value);

// Output: 98.1 (N)
