import { mathExact } from "math-exact";

export default class Math {
  static add(a: number, b: number) {
    return mathExact("Add", a, b);
  }

  static subtract(a: number, b: number) {
    return mathExact("Subtract", a, b);
  }

  static multiply(a: number, b: number) {
    return mathExact("Multiply", a, b);
  }

  static divide(a: number, b: number) {
    return mathExact("Divide", a, b);
  }

  constructor() {}
}
