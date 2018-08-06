'use strict';

let a: number = 3;

console.log(a + 10);

let b: number = 100;

console.log(b - 7);

let c: number = 44;

console.log(c * 2);

let d: number = 125;

console.log(d / 5);

let e: number = 8;

// console.log(e **);

let f1: number = 123;
let f2: number = 345;
if(f1 > f2){
    console.log('f1 is bigger than f2');
}else{
    console.log('f2 is bigger than f1');
}

let g1: number = 350;
let g2: number = 200;
if(g1 < (g2*2)){
    console.log('g1 is bigger than g2');
}else{
    console.log('g2 is bigger than g1');
}

let h: number = 1357988018575474;
if(h % 11 == 0 ){
console.log('h has 11 as a divisor');
}

let i1: number = 10;
let i2: number = 3;
if( i1 > Math.pow(i2,2) && i1 < Math.pow(i2,3) ){
    console.log('true');
}else{
    console.log('false');
}

let j: number = 1521;
if( j % 3 == 0 || j % 5 == 0){
    console.log('true');
}else{
    console.log('false');
}

let k: string = 'Apple';
for(var i = 0 ; i < 3 ; i ++){
    k+= 'Apple';
}
console.log(k);