declare function require(path: string): any;
'use strict'
export { }


// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');
const text: string = 'my-file.txt';

try {
  let fileContent = fs.readFileSync(text, 'utf-8');
  console.log(fileContent);
} catch (error) {
  console.log(error.message + " Unable to read file: my-file.txt")
}
