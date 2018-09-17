'use strict';

let lineCount: number = 10;

// Write a program that draws a
// diamond like this:
//
//    *  0.sor
//   ***  1.sor
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let sor = 0; sor < lineCount; sor++) {
    let row = '';
    // 0-2, 0.sor, 1.sor, 2.sor 
    if (sor < lineCount / 2) {
        for (let space = 0; space < lineCount / 2 - sor - 1; space++) {
            row += ' ';
        }

    }// 4.sor, 5.sor 6.sor
    else if (sor > lineCount / 2) {
        for (let space2 = lineCount / 2; space2 >= lineCount - sor; space2--) {
            row += ' ';
        }
    }
    // 0.sor, 1.sor, 2.sor
    if (sor < lineCount / 2) {
        for (let star = 0; star <= sor; star++) {

            if (star == 0) {
                row += '*';
            } else {
                row += '**';
            }
        }
        // 3.4.5.6. sor csillagjai
    } else {
        for (let star2 = 0; star2 < lineCount - sor; star2++) {

            if (star2 == 0) {
                row += '*';
            } else {
                row += '**';
            }
        }
    }
    console.log(row);
}


