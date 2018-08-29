import { Plant } from "./plant";

'use strict'

export class Flower extends Plant {


  constructor(color: string) {
    super('Flower', color, 0, 5, 75);
  }

}