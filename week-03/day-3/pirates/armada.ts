import { Ship } from "./pirate-ship";

'use strict'

export class Armada {

  name: string;
  shipList: Ship[];

  constructor(name: string) {

    this.name = name;
    this.shipList = [];
  }

  war() {
    
  }
}