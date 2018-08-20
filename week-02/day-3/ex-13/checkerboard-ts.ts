'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function chessTable(x: number, y: number, size: number) {

  for (let j = 0; j < canvas.width; j++) {
    for (let i = 0; i < canvas.width; i++) {
      ctx.fillRect(x, y, size, size);
      ctx.fillRect(x + size, y + size, size, size);
      ctx.fill();
      x += size * 2;
    }
    x = 0;
    y += size * 2;
  }
}
chessTable(0, 0, canvas.width / Math.floor(Math.random() * 500));
