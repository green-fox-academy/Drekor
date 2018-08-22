'use strict'

import { Animal } from "./animal"

export class Mammal extends Animal {

  constructor(name: string) {
    super('Koala', 20, 'male', 'Earth', false);
  }

  breed(): string {
    return `pushing miniature versions out.`
  }
} 