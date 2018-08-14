// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrixLength: number = 4;
let matrix: number[][] = [];

for (let i = 0; i < matrixLength; i++) {
  matrix[i] = [];
  for (let j = 0; j < matrixLength; j++) {
    matrix[i] = j;
  }
}
console.log(matrix);
