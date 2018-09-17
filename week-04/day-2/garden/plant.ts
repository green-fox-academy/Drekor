'use strict'

export class Plant {

  protected name: string;
  protected color: string;
  protected waterLevel: number;
  protected minimumWaterLevel: number;
  protected absorb: number;

  constructor(name: string, color: string, waterLevel: number, minimumWaterLevel: number, absorb: number) {

    this.name = name;
    this.color = color;
    this.waterLevel = waterLevel;
    this.minimumWaterLevel = minimumWaterLevel;
    this.absorb = absorb;
  }
  abstract getcolor() {

  }
}