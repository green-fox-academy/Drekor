'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

//5 szeles, 6 hosszu

for (let i = 1; i <= lineCount; i++) {
  let row = '';

  if (i == 1 || i == lineCount) {
    for (let fullRow = 1; fullRow < lineCount; fullRow++) {
      row += '%';
    }
  } else {
    for (let dinamicRow = 1; dinamicRow <= lineCount - 1; dinamicRow++) {
      if (dinamicRow == 1 || dinamicRow == lineCount - 1) {
        row += '%';
      } else if(dinamicRow == i){
        row += '%';
      }else{
        row += ' ';
      }
    }
  }
  console.log(row);
}