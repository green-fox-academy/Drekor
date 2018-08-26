class Pirate {

  name: string;
  attackPoint: number;
  healthPoint: number;
  szorzo: number;

  constructor(name: string, attackPoint: number = 10) {

    this.name = name;
    this.attackPoint = attackPoint;
    this.healthPoint = 100;
    this.szorzo = 0;
  }

  drinkSomeRum() {
    this.healthPoint -= this.attackPoint, this.szorzo += 1;
    console.log(`Iam DrunkasFuck!`);
  }

  howItGoingMate() {
    if (this.szorzo <= 4) {

    }
  }

}

let piratefirst = new Pirate('Jozsi');

piratefirst.drinkSomeRum();
piratefirst.drinkSomeRum();

console.log(piratefirst);