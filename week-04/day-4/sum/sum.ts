'use strict'

export class List {

  sum(listOfIntegers: number[]): number {

    let sum: number = 0;

    listOfIntegers.forEach(e => {
      sum += e;
    })
    return sum;
  }
}

