'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


function purpleSquare(x: number, y: number, w: number, h: number) {

  ctx.fillStyle = "magenta";
  ctx.fillRect(x, y, w, h);
  ctx.fill();
}
let x = 0;
let y = 0;
let size = 10;

for (let i = 0; i < 6; i++) {
  x += i * size;
  y += i * size;
  size += i*2;

  purpleSquare(x, y, size, size);
}

//nincs kesz!