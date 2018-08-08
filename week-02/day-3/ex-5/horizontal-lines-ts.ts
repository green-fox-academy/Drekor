'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function horizontalLineDrawing(x:number, y:number) {
    
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y);
    ctx.stroke();

    for(let i = 0 ; i < 3 ; i++){
        x += 0;
        y += 10;
        ctx.beginPath();
        ctx.moveTo(100,y);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

horizontalLineDrawing(300,150);
