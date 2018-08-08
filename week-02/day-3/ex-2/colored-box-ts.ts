'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines
// on each edge.

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.moveTo(400,200);
ctx.lineTo(200,200);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(400,10);
ctx.lineTo(400,200);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle ="green";
ctx.moveTo(200,10);
ctx.lineTo(400,10);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle ="orange";
ctx.moveTo(200,200);
ctx.lineTo(200,10);
ctx.stroke();