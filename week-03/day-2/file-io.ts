declare function require(path: string): any;
'use strict';
export { }

const fs = require('fs');

const charEncoding = 'utf-8';

function redFromFile(fileName: string): string {
  try {
    return fs.readFileSyns(fileName, charEncoding);
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function writeToAFile(fileName: string, data: string): void {
  fs.writeFileSync(fileName, data);
}

writeToAFile('hell.txt', 'hello');

console.log(redFromFile('hello.txt'));