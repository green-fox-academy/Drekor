'use strict'

export abstract class Vehicle {
  speed: number;
  wheels: number;
  smoke: boolean;

  constructor(speed, wheels, smoke) {
    this.speed = speed;
    this.wheels = wheels;
    this.smoke = smoke;
  }
}