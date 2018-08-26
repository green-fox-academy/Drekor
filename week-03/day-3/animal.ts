'use strict'

class Animal {

  protected hunger: number;
  protected thirst: number;

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  eat() {
    this.hunger -= 1;
  }
  drink() {
    this.thirst -= 1;
  }
  play() {
    this.thirst += 1;
    this.hunger += 1;
  }
}

let sda = new Animal();

sda.drink();
sda.eat();
sda.play();
sda.play();

console.log(sda);