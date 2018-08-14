declare function require(path: string): any;
'use strict'
export { }

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fileName: string = 'hello.txt'
const stringType = 'utf-8';

function takesString(params: string, stringType: string) {

  try {
    const fs = require('fs');
    let sum: number = 0;
    let fileContent = fs.readFileSync(fileName, stringType)

    fileContent.split('\r\n').forEach(e => {
      sum++;
    });

    console.log(sum);

  } catch (error) {

    console.log(error.message);
  }
}
takesString(fileName, stringType);