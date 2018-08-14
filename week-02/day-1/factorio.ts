'use strict'
export { }

// -  Create a function called `factorio`
//    that returns it's input's factorial

let example: number = 5;

function factorio(num: number) {
  let factoral = 1;
  for (let i = 1; i <= num; i++) {
    factoral *= i;
  }
  return factoral;
}
console.log(factorio(example));