'use strict';
export{}

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

let girlsandBoys :string[] = [];

function makingMatches(params: string[]) {

    let temp = "";

    for(let i=0 ; i < 6; i++){

        if( 0 < girls.length ){temp = girls.shift();

        girlsandBoys.push(temp);}
        
        temp = boys.shift();

        girlsandBoys.push(temp);
    }
    return girlsandBoys;
}
console.log(makingMatches(girlsandBoys));


export = makingMatches;