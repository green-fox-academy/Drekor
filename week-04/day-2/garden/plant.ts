'use strict'

export class Plant {

  name: string;
  color: string;
  waterLevel: number;
  minimumWaterLevel: number;
  absorb: number;

  constructor(name: string, color: string, waterLevel: number, minimumWaterLevel: number, absorb: number) {

    this.name = name;
    this.color = color;
    this.waterLevel = waterLevel;
    this.minimumWaterLevel = minimumWaterLevel;
    this.absorb = absorb;
  }
}