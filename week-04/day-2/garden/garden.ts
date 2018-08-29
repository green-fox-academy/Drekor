import { Flower } from "./flower";
import { Tree } from "./tree";

'use strict'

export class Garden {

  flowers: Flower[] = [];
  trees: Tree[] = [];

  addFlowers(flower: Flower): void {

    this.flowers.push(flower);

    console.log(`${flower.name} is added to the Garden`);
  }
  addTree(tree: Tree): void {

    this.trees.push(tree);

    console.log(`${tree.name} is added to the Garden`);
  }
  gardenStatus(): void {
    for (let i = 0; i < this.flowers.length; i++) {

      if (this.flowers[i].waterLevel < this.flowers[i].minimumWaterLevel) {
        console.log(`The ${this.flowers[i].color} Flower needs water`);
      } else {
        console.log(`The ${this.flowers[i].color} Flower doesn't need water`);
      }
    }
    for (let j = 0; j < this.trees.length; j++) {

      if (this.trees[j].waterLevel < this.trees[j].minimumWaterLevel) {
        console.log(`The ${this.trees[j].color} Tree needs water`);
      } else {
        console.log(`The ${this.trees[j].color} Tree doesn't need water`);
      }
    }
  }
  addWater(param: number): void {

    console.log(`Watering with ${param}`);

    param = param / (this.flowers.length + this.trees.length);

    for (let i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].waterLevel < this.flowers[i].minimumWaterLevel) {
        this.flowers[i].waterLevel += param / 100 * this.flowers[i].absorb;
      }
    }
    for (let i = 0; i < this.trees.length; i++) {
      if (this.trees[i].waterLevel < this.trees[i].minimumWaterLevel)
        this.trees[i].waterLevel += param / 100 * this.trees[i].absorb;
    }
    this.gardenStatus();
  }
}


