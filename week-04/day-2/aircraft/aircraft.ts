import { F35 } from "./f35";
import { Carrier } from "./carrier";

export class Aircraft {

  aircraftType: any;
  baseDamage: number;
  maxAmmo: number;
  storeAmmo: number;
  damage: number;


  constructor(aircraftType: any, baseDamage: number, maxAmmo: number) {

    this.aircraftType = aircraftType;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.damage = baseDamage * maxAmmo;
    this.storeAmmo = 0;
  }

  fight(InstanceType: Carrier) {
    for (let i = 0; i < this.storeAmmo; i++) {
      InstanceType.healthPoint -= this.storeAmmo * this.baseDamage;
    }
    return InstanceType.healthPoint;
  }

  refill(refillAmmo: number) {
    if (refillAmmo < this.maxAmmo && this.storeAmmo < this.maxAmmo) {
      this.storeAmmo += refillAmmo;
      return 0;
    } else {
      this.storeAmmo += this.maxAmmo;
      return Math.abs(refillAmmo - this.maxAmmo);
    }
  }

  getType() {
    return this.aircraftType.toString();
  }

  getStatus() {
    let status: string = ` Type: ${this.aircraftType}, Ammo: ${this.storeAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.damage}`;
    console.log(status);
  }

  isPriority() {
    if (this.aircraftType == 'F35') {
      return true;
    } else {
      return false;
    }
  }

}