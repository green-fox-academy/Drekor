'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


function purpleSquare(x: number, y: number, size: number) {
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = "magenta";
    ctx.fillRect(x, y, size, size);
    ctx.fill();
    x += size;
    y += size;
    size += size /2
  }
}
purpleSquare(0, 0, 10)