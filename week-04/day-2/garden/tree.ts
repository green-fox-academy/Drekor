import { Plant } from "./plant";

'use strict'

export class Tree extends Plant {

  

  constructor(color: string) {
    super('Tree', color, 0, 10, 40);
  }
  
}