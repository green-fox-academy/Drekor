class Station {

  gasAmount: number;

  constructor() {
    this.gasAmount = 1000;
  }

  refill(car: Car) {
    if (this.gasAmount >= 100) {

      this.gasAmount -= car.capacity;
      car.gasAmount += car.capacity
    }
  }
}

class Car {

  gasAmount: number;
  capacity: number;

  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }
}

let oto = new Car();
let station = new Station();

station.refill(oto);

console.log(oto, station);