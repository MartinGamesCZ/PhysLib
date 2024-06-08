import { mathExact } from "math-exact";

export default class Math {
  static add(a: number, b: number) {
    return mathExact("Add", a, b);
  }

  static subtract(a: number, b: number) {
    return mathExact("Subtract", a, b);
  }

  static multiply(...args: number[]) {
    let res = args[0];

    for (let i = 1; i < args.length; i++) {
      res = mathExact("Multiply", res, args[i]);
    }

    return res;
  }

  static divide(a: number, b: number) {
    return mathExact("Divide", a, b);
  }

  constructor() {}
}
