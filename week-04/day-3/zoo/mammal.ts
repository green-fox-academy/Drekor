'use strict'

import { Animal } from "./animal"

export class Mammal extends Animal {

  constructor(name: string) {
    super();
    this.name = 'Koala';
    this.age = 20;
    this.gender = 'male';
    this.livingPlace = 'Earth';
    this.smile = false;
  }
} 