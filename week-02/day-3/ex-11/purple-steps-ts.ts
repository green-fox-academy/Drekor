'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]



function purpleSquare(x: number, y: number, w: number, h: number) {

  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, w, h);
  ctx.fill();
}

let size = 25;

for (let i = 0; i < 19; i++) {
  let x = i * size;
  let y = i * size;
  purpleSquare(x,y,size,size);
}
