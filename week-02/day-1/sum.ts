'use strict';
export { }

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let myExampleNumber: number = 10;

function sum(params: number) {
    let allSum = 0;
    for (let sumNuber = 1; sumNuber <= params; sumNuber++) {
        allSum += sumNuber;
    }
    return allSum;
}
console.log(sum(myExampleNumber));