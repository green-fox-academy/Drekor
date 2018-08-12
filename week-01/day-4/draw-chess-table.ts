'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let chessTableSize: number = 8;

for (let i = 0; i < chessTableSize; i++) {
  let row = '';
  if (i % 2 == 0)
    for (let evenNumbers = 0; evenNumbers < chessTableSize / 2; evenNumbers++) {
      row += '% ';
    } else {
    for (let oddNumbers = 0; oddNumbers < chessTableSize / 2; oddNumbers++) {
      row += ' %';
    }
  }
  console.log(row);
}