'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let color = ["red", "green", "orange", "blue"];

function drawRectangles(x: number, y: number, h: number, j: number) {

  ctx.fillRect(x, y, h, j);
  ctx.fill();

}
for (let i = 0; i < 4; i++) {

  ctx.fillStyle = color[i];
  let x = Math.floor(Math.random() * canvas.width / 2)
  let y = Math.floor(Math.random() * canvas.width / 2)
  let h = Math.floor(Math.random() * canvas.width / 4)
  let j = Math.floor(Math.random() * canvas.width / 4)

  drawRectangles(x, y, h, j);
}