'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
export = appendA;

function appendA(params: string[]): string[] {
  params = params.map(element => element + 'a');
  return params;
}