'use strict'

import { Animal } from "./animal"

export class Bird extends Animal {

  constructor(name: string) {
    super('Kiwi', 5, `female`, `Air`, true);
  }

  breed(): string {
    return `laying eggs.`
  }
} 