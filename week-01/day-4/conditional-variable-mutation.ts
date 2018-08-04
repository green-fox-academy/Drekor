'use strict';

let a: number = 24;
let out: number = 0;

// if a is even increment out by one

console.log(out);

let b: number = 13;
let out2: string = 'Sweet!';

if( b < 20 && b > 10 ){
    console.log(out2);
} else if( b > 20){
    console.log('More');
} else if( b < 10) {
    console.log('Less');
}

// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"


let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if(credits >= 50 && isBonus == false){
    c = c - 2;
} else if(credits < 50 && isBonus == false){
    c = c -1;
} else if(isBonus = true){
    c = c;
}
console.log(c);
// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same


let d: number =  8;
let time: number = 120;
let out3: string = 'check!';

if( d / 4  && time < 200 ){
    console.log(out3);
}else if( time > 200){
    console.log('Time Out');
}else{
    console.log('Run Forest Run!');
}

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

