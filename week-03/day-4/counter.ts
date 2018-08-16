'use strict'
export { };

// Write a recursive function that takes one parameter: n and counts down from

function recursiveF(n: number) {
  while (n > 0) {
    console.log(n);
    return recursiveF(n - 1);
  }
}
recursiveF(10);