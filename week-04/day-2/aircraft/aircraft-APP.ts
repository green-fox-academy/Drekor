'use strict'

import { F16 } from "./f16";
import { F35 } from "./f35";
import { Carrier } from "./carrier";

let fox1: F16 = new F16();
let wolf1: F35 = new F35();
let fox2: F16 = new F16();
let wolf2: F35 = new F35();
let fox3: F16 = new F16();
let wolf3: F35 = new F35();

let carrierFox: Carrier = new Carrier(2300);
let carrierWolf: Carrier = new Carrier(2300);

fox1.refill(50);
fox2.refill(50);
fox3.refill(50);
wolf1.refill(50);
wolf2.refill(50);
wolf3.refill(50);

carrierWolf.addF35(wolf1);
carrierWolf.addF35(wolf2);
carrierWolf.addF35(wolf3);
carrierFox.addF16(fox1);
carrierFox.addF16(fox2);
carrierFox.addF16(fox3);

carrierFox.fight(carrierWolf);

carrierWolf.getStatus();
carrierFox.getStatus();