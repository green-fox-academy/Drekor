declare function require(path: string): any;
'use strict'
export { }


// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');
const text: string = 'my-file.txt';
const name: string = 'Dan';

function writeMyName(texts: string, names: string) {
  try {
    if (fs.existsSync(texts)) {
      fs.writeFileSync(texts, names);
    } else {
      throw new SyntaxError('Unable to write file: my-file.txt');
    }
  } catch (error) {
    console.log(error.message);
  }
}
writeMyName(text, name);