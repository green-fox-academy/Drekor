'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function chessTable(x: number, y: number) {

  ctx.fillRect(x, y, 100, 100);
  ctx.fill();
}

let x = 0;
let y = 0;

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i % 2 == 0) {
      if (j % 2 == 0) {
        x += i * 100;
        chessTable(x, y)
      }
    }
  }
}

