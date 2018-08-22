'use strict'

import { Vehicle } from "./vehicle"
import { Flyable } from "./flyable"

export class Helicopter extends Vehicle implements Flyable {

  land(): void {

  }

  fly(): void {

  }

  takeOff(): void {

  }
}

let helicopter2 = new Helicopter(300, 0, false);

console.log(helicopter2);