'use strict'
export class Flower {

  color: string;
  name: string;
  absorvation: number;
  thirsty: number;

  constructor(color: string, name: string) {
    this.name = name;
    this.color = color;
    this.absorvation = 75;
    this.thirsty = 0
  }
}

