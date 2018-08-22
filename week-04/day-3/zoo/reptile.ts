'use strict'

import { Animal } from "./animal"

export class Reptile extends Animal {

  constructor(name: string) {
    super('Clocky', 100, `male`, `Water`, true);
  }

  breed(): string {
    return `laying eggs.`
  }
  
} 