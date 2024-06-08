import Physics from "../src";
import KiloGram from "../src/classes/Unit/kilo_gram";
import KilogramPerMeterCubed from "../src/classes/Unit/kilogram_per_meter_cubed";

const physics = new Physics();

const object = new Physics.Object({
  mass: new KiloGram(10),
  shape: null,
  volume: 10,
  density: new KilogramPerMeterCubed(2100),
});

const projectile = new Physics.Projectile({
  initial_velocity: 100,
  object: object,
  velocity: 100,
  acceleration: 9.81,
  angle: 45,
});

const planet = new Physics.Planets.Earth();

const curve = new Physics.Equations.BalisticCurve(projectile, planet);

const maxHeight = curve.max_height.value;

console.log(maxHeight);

// Output: 254.84199796126393 (m)

const landingDistance = curve.landing_distance.value;

console.log(landingDistance);

// Output: 1019.367991845056 (m)

const timeOfFlight = curve.time_of_flight.value;

console.log(timeOfFlight);

// Output: 14.416040391163046 (s)
