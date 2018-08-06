'use strict';
export{}

// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

//let name : string = 'Greenfox';

let name;

let greet = function (params:string) {     

    if(params == undefined){
    
        return params = 'Greetings, dear mate'
    }else{
        return params = 'Greetings, dear ' + params
    }
}

console.log(greet(name));