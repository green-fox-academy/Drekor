export class Aircraft {

  maxAmmo: number;
  baseDamage: number;
  damage: number;
  aircraftName: string;
  store: number;


  constructor(name: string, maxAmmo: number, baseDamage: number) {
    this.aircraftName = name;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.damage = baseDamage * maxAmmo;
    this.store = 0;
  }

  fight() {
    this.damage = this.baseDamage * this.store
    this.store = 0;
    return this.damage;
  }
  refill(refillAmmo: number) {
    if (refillAmmo <= this.maxAmmo && this.store <= this.maxAmmo) {
      this.store += refillAmmo;
      return 0;
    } else {
      this.store += this.maxAmmo;
      return Math.abs(refillAmmo - this.maxAmmo);
    }
  }
  getType() {
    return this.aircraftName.toString();
  }
  getStatus() {
    let status: string = this.aircraftName + ' Ammo: ' + this.store + ' Base Damage: ' + this.baseDamage + ' All Damage: ' + this.damage;
    return status;
  }
  isPriority(aircraftName) {
    if (aircraftName == AircraftF16) {
      return false
    } else {
      return true;
    }
  }
}

let AircraftF16 = new Aircraft('TypeF16', 8, 30);
let AircraftF35 = new Aircraft('TypeF35', 12, 50);

class Carrier {
  aircraftStore: number;
  ammo: number;
  health: number;

  constructor(ammo: number, health: number) {
    this.ammo = ammo;
    this.health = health;
    this.aircraftStore = 0;
  }
  add() {
    
  }
  fill() {

  }
  fight() {

  }
  getStatus() {

  }
}

console.log();
