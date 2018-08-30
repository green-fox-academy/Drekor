import { F16 } from "./f16";
import { F35 } from "./f35";

'use strict'

export class Carrier {

  f16s: F16[] = [];
  f35s: F35[] = [];

  storeOfAmmo: number;
  initalAmmo: number;
  healthPoint: number;

  constructor(initialAmmo: number) {

    this.storeOfAmmo = 0;
    this.storeOfAmmo += initialAmmo;
    this.healthPoint = 5000;
  }

  addF16(newAir: F16) {

    this.f16s.push(newAir);
  }

  addF35(newAir: F35) {

    this.f35s.push(newAir);
  }

  fill() {

    for (let i; i < this.f16s.length; i++) {

      if (this.f16s[i].storeAmmo < this.f16s[i].maxAmmo) {

        this.f16s[i].storeAmmo += this.storeOfAmmo;
        this.storeOfAmmo -= Math.abs(this.f16s[i].storeAmmo += this.storeOfAmmo);
      }
    }

    for (let j = 0; j < this.f35s.length; j++) {

      if (this.f35s[j].storeAmmo < this.f35s[j].maxAmmo) {

        this.f35s[j].storeAmmo += this.storeOfAmmo;
        this.storeOfAmmo -= Math.abs(this.f35s[j].storeAmmo += this.storeOfAmmo);
      }
    }
  }

  fight(antoherCarrier: Carrier) {

    for (let i = 0; i < this.f16s.length; i++) {

      for (let j = 0; j < this.f35s.length; j++) {

        antoherCarrier.healthPoint -= this.f16s[i].damage + this.f35s[j].damage;
        this.f16s[i].storeAmmo == 0, this.f35s[i].storeAmmo == 0;

      }
    }
  }

  getStatus() {

    for (let i = 0; i < this.f16s.length; i++) {
      this.f16s[i].getStatus();
    }

    this.f35s.forEach(element => {
      element.getStatus();
    });

    console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.f16s.length}, ${this.f35s.length} ,Ammo Storage: ${this.storeOfAmmo}`);
  }
}
