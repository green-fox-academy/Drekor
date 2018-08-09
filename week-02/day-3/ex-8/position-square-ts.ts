'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


function squareDrawing(x: number, y: number) {

    ctx.fillRect(x, y, 50, 50)
    ctx.fill();
}

for (let i = 0; i < 3; i++) {

    let x = 10 * i*5;
    let y = 10 * i*5;

    squareDrawing(x,y)

}

