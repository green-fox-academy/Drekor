'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i = 0; i < lineCount; i++) {
  let row = '';

  if (i == 0 || i == lineCount - 1) {
    for (let fullRow = 0; fullRow < lineCount; fullRow++) {
      row += '%';
    }
  } else {
    for (let rowWithBorder = 0; rowWithBorder < lineCount; rowWithBorder++) {
      if (rowWithBorder == 0 || rowWithBorder == lineCount - 1) {
        row += '%';
      } else {
        row += ' ';
      }
    }
  }
  console.log(row);
}