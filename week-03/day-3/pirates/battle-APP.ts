'use strict'

import { Pirate } from "./pirate";
import { Ship } from "./pirate-ship";

let pirateA = new Pirate('Alkesz');
let piratefirst = new Pirate('Jozsi');
let pirateSec = new Pirate('Bela');


let shipOne = new Ship(`Gatyamadzag`);
let shipTwo = new Ship(`Thunderz`);

shipOne.fillShip();
shipTwo.fillShip();


let captain = shipOne.captain;

captain.drinkSomeRum();
captain.drinkSomeRum();

shipTwo.battle(shipOne);

shipOne.crewStatus();
shipTwo.crewStatus();