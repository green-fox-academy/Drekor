'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let color = ["red", "green", "orange", "blue"];

function drawRectangles(x: number, y: number, h: number, j: number) {

    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.fillStyle = color[i];
        ctx.fillRect(x, y, h, j);
        ctx.fill();
        x += (Math.random()*Math.floor(80))
        y += (Math.random()*Math.floor(80))
        h += (Math.random()*Math.floor(80))
        j += (Math.random()*Math.floor(80))

    }
}
drawRectangles(20, 20, 20, 25);