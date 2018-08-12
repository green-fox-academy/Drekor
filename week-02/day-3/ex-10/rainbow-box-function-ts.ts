'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let rainbowColors: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function squareDrawingF(size: number, colors: string) {

    ctx.fillStyle = colors;
    ctx.fillRect(canvas.width /2 - size /2 , canvas.height /2 - size /2, size , size);
}
squareDrawingF(50,rainbowColors[0]);

for( let i = 0 ; i < rainbowColors.length ;i++){
    
    squareDrawingF(400 - i*70, rainbowColors[i]);
}