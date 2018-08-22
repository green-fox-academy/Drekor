'use strict'

import { Animal } from "./animal"

export class Reptile extends Animal {

  constructor(name: string) {
    super();
    this.name = 'Clocky';
    this.age = 100;
    this.gender = 'male';
    this.livingPlace = 'Water';
    this.smile = true;
  }
  breed(): string{
    return `laying eggs.`
  }
} 