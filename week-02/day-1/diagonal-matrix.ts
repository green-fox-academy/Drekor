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


let matrix: number[][] = [];

function matrixF(length: number): number[][] {
  let numberOnes: number = length - 1;
  for (let i = 0; i < length; i++) {
    matrix[i] = []; //row='';
    for (let elements = 0; elements < length; elements++) {
      if (elements == numberOnes) {
        matrix[i].push(1);
      } else {
        matrix[i].push(0);
      }
    }
    numberOnes--;
  }
  return matrix;
}

matrixF(4);

matrix.forEach(element => {
  console.log(element);
});

