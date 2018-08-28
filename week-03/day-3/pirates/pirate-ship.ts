'use strict'

import { Pirate } from "./pirate";
export class Ship {

  name: string;
  crew: Pirate[] = [];
  captain: Pirate

  constructor(name: string) {
    this.name = name;
    this.crew = [];
    this.captain = this.captain;
  }

  fillShip() {
    this.captain = new Pirate('Captain')
    for (let i = 0; i < Math.floor(Math.random() * 50 + 25); i++) {
      this.crew.push(new Pirate('Pirate'))
    }
  }

  captainStatus() {
    if (this.captain.szorzo > 4 || this.captain.healthPoint == 0) {
      console.log(`Our captain is dead!`);
    } else if (this.captain.szorzo > 0 && this.captain.szorzo < 5) {
      console.log(`Our captain is drunk!`);
    } else {
      console.log(`Our captain is ready to fight!`)
    }
  }

  crewStatus() {
    let livingPirates: number = 0;
    let deadPirates: number = 0;
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i].healthPoint == 0) {
        deadPirates += 1;
      } else {
        livingPirates += 1;
      }
    }
    console.log(`${deadPirates} Pirates dead from ${this.name}`)
    console.log(`${livingPirates} Pirate is alive on ${this.name}`)
  }
  battle(otherShip: Ship): boolean {

    let calculatedScore = this.crew.length + this.captain.szorzo;
    let calculatedScoreForTheEnemy = otherShip.crew.length + otherShip.captain.szorzo;
    let randomNumberPpl = Math.floor(Math.random() * 25 + 5);
    let randomNumberRum = Math.floor(Math.random() * 13 + 5);
    if (calculatedScore > calculatedScoreForTheEnemy) {
      console.log(`${this.name} won the battle and got ${randomNumberRum} Rumz`);
      console.log(`${otherShip.name} lose ${randomNumberPpl} ppl.`);
      for (let i = 0; i < randomNumberPpl; i++) {
        otherShip.crew[i].healthPoint = 0;
      }
      return true;
    } else if (calculatedScore < calculatedScoreForTheEnemy) {
      console.log(`${otherShip.name} won the battle and got ${randomNumberRum} Rumz`);
      console.log(`${this.name} lose ${randomNumberPpl} ppl.`);
      for (let i = 0; i < randomNumberPpl; i++) {
        this.crew[i].healthPoint = 0;
      }
      return false;
    }
  }
}
