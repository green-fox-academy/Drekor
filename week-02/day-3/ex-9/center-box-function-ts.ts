'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.



function squareDrawingFun(x: number) {

    let size = x

    for (let i = 0; i < 3; i++) {

        let xPosition = (canvas.width / 2) - size / 2;
        let yPosition = (canvas.height / 2) - size / 2;

        let rgbRandom = `rgb(
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)})`;

        ctx.fillStyle = rgbRandom;
        ctx.fillRect(xPosition, yPosition, size, size);
        ctx.fill();
        size -= 25;
    }
}
squareDrawingFun(100);