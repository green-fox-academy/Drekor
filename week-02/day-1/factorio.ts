'use strict'
export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

let example : number = 5;

function factorio( example :number) {
    let startingNumber = 1;
        for(let i = 1 ; i <= example ; i++){
            startingNumber *= i;
    }
    return startingNumber;
}
    console.log(factorio(example));