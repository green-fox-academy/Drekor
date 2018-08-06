'use strict';
export{}

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let myExampleNumber : number = 10;

function sum (numbers: number) {
    let startNumber = 0;
    for(let i = 0 ; i <= numbers ; i++){
        startNumber += i;
    }
    return startNumber;
}
console.log(sum(myExampleNumber));