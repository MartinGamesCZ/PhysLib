# PhysLib

### A physics library for JavaScript & TypeScript.

---

> [!IMPORTANT]
> This library doesn't have 100% accurate physics, but it's a good approximation for most projects.

This library provides a set of physical equations and simulations to help you with your projects that need accurate physics.

## Installation

```bash
bun install physlib
```

## Gettings started

First, you need to import the library:

```typescript
import Physics from "physlib";
```

Then, you need to define new physics:

```typescript
const physics = new Physics();
```

## Usage

### Space objects

#### Planets

Planets are space objects, that are used in a lot of calculations. They include physical properties like mass, radius, ..., but also some properties that are used in lot of calculations, like the gravitational constant.

```typescript
const planet = new Physics.Planet(physical_properties);
```

##### Earth

There is a predefined planet for Earth, that you can use:

```typescript
const earth = new Physics.Planets.Earth();
```

### Objects

Objects are used to define physical objects. They include properties like mass, velocity, position, ...

```typescript
const object = new Physics.Object(physical_properties);
```

### Projectiles

Projectiles are used to simulate projectiles in your projects. They include properties like `Object`, velocity, position, ...

```typescript
const projectile = new Physics.Projectile(physical_properties);
```

### Fluids

Fluids are used to simulate fluids in your projects. They include properties like density, viscosity, ...

```typescript
const fluid = new Physics.Fluid(physical_properties);
```

#### Water

There is a predefined fluid for water, that you can use:

```typescript
const water = new Physics.Fluids.Water();
```

### Equations

The library includes a lot of equations that you can use in your projects.

#### Gravitational force

The gravitational force is the force that object exerts on the planet. It's calculated using the following equation:

```math
FG = m * g
```

In code, you can use it like this:

```typescript
const gravitational_force = new Physics.Equations.GravitationalForce(
  object,
  planet
);
```

The result is a class that includes `value` property, which is the Newton unit class.

#### Buoyant force

The buoyant force is the force that fluid exerts on the object. It's calculated using the following equation:

```math
FB = ρ * V * g
```

In code, you can use it like this:

```typescript
const buoyant_force = new Physics.Equations.BuoyantForce(object, fluid, planet);
```

The result is a class that includes `value` property, which is the Newton unit class.

#### Balistic curve

The balistic curve is the curve that object follows when it's thrown. It includes several properties like the max height, landing distance, time of flight, ...

In code, you can use it like this:

```typescript
const balistic_curve = new Physics.Equations.BalisticCurve(object, planet);
```

The result is a class that includes all the properties of the balistic curve.
