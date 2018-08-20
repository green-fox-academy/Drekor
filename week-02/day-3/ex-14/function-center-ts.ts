'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function lineDrawing(x: number, y: number) {
  for (let i = 0; i <= canvas.width / 20; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.moveTo(x, y + canvas.height);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
    x += 20;
  }
  x = 0;
  for (let i = 0; i <= canvas.height / 20; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.moveTo(x + canvas.width, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
    y += 20;
  }
}
lineDrawing(0, 0)