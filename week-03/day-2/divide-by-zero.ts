declare function require(path: string): any;
'use strict'
export { }

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0



function dividesTen(nums: number) {

  try {
    let dividedNumbers;
    if (nums === 0) {
      return 'fail';
    }
    dividedNumbers = (10 / nums);

    return dividedNumbers;

  } catch (err) {
    console.log(err);
  }
}
console.log(dividesTen(0));