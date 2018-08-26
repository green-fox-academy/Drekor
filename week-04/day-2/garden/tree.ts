'use strict'
export class Tree {

  color: string;
  name: string;
  absorvation: number;
  thirsty: number;

  constructor(color: string, name: string) {
    this.name = name;
    this.color = color;
    this.absorvation = 40;
    this.thirsty = 0
  }
}