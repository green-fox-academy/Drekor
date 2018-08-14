declare function require(path: string): any;
'use strict'
export { }

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fileName: string = 'hellog.txt'
const stringType = 'utf-8';
const fs = require('fs');

function takesString(params: string, stringType: string): number {
  let sum: number = 0;
  try {
    let fileContent: string[] = fs.readFileSync(params, stringType).split('\n');
    fileContent.forEach(element => {
      sum++;
    });
    return sum;
  } catch (error) {
    console.log(0);
  }
}
takesString(fileName, stringType);
