'use strict'
import { Garden } from "./garden"
import { Flower } from "./flower";
import { Tree } from "./tree";

let garden = new Garden();

garden.addFlowers(new Flower('yellow'));
garden.addFlowers(new Flower('blue'));
garden.addTree(new Tree('purple'));
garden.addTree(new Tree('blue'));

garden.gardenStatus();
garden.addWater(40);
garden.addWater(70);
