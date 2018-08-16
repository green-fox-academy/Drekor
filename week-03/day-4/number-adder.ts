'use strict'
export { };

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function recursiveAdd(n: number) {
  if (n <= 1) {
    return 1;
  } else {
    return n * recursiveAdd(n - 1);
  }
}
console.log(recursiveAdd(5));