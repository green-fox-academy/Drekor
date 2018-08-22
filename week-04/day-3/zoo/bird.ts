'use strict'

import { Animal } from "./animal"

export class Bird extends Animal {

  constructor(name: string) {
    super();
    this.name = 'Kiwi';
    this.age = 5;
    this.gender = 'female';
    this.livingPlace = 'Air';
    this.smile = true;
  }
  breed(): string {
    return `laying eggs.`
  }
} 