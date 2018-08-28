'use strict'
export class Pirate {

  public name: string;
  public healthPoint: number;
  public szorzo: number;

  constructor(name: string) {

    this.name = name;
    this.healthPoint = 100;
    this.szorzo = 0;
  }

  drinkSomeRum() {
    if (this.healthPoint >= 1) {
      this.szorzo += 1;
    } else {
      this.die();
    }
  }

  howItGoingMate() {
    if (this.healthPoint >= 1) {
      if (this.szorzo <= 4) {
        console.log(`Pour me anudder!`);
      } else {
        console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
        console.log(`He's sleepin'`)
      }
    } else {
      this.die();
    }
  }

  die() {
    this.healthPoint = 0;
    console.log(this.name + ` is Dead` + ` HP:` + this.healthPoint)
  }


  duel(nameOne: Pirate) {
    if (nameOne.healthPoint >= 1 && this.healthPoint >= 1) {
      let end: number;
      end = Math.floor(Math.random() * 3);
      if (end == 0) {
        nameOne.healthPoint = 0;
        console.log(nameOne.name + ` is murdered by ${this.name}`);
      } else if (end == 1) {
        this.healthPoint = 0;
        console.log(this.name + ` is Murdered`);
      } else {
        nameOne.healthPoint = 0, this.healthPoint = 0;
        console.log(`${nameOne.name} and ${this.name} is murdered by each other (lol..)`);
      }
    } else if (nameOne.healthPoint == 0 && this.healthPoint == 0) {
      console.log(`both of us dead...`);
    } else if (this.healthPoint == 0) {
      console.log(`${this.name} is already dead`);
    } else {
      console.log(`${nameOne.name} is already dead`);
    }
  }
}