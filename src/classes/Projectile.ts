export interface ProjectilePhysicalProperties {
  object: Object;
  velocity: number;
  initial_velocity: number;
  acceleration: number;
  angle: number;
}

export default class Projectile {
  physical_properties: ProjectilePhysicalProperties;

  constructor(physical_properties: ProjectilePhysicalProperties) {
    this.physical_properties = physical_properties;
  }
}
