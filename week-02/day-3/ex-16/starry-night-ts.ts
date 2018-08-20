'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


function starWars() {
  for (let i = 0; i < Math.random() * 100; i++) {
    let x = Math.floor(Math.random() * canvas.width);
    let y = Math.floor(Math.random() * canvas.height);
    let size = Math.random() * 5;
    let color = "rgb(" + Math.floor(Math.random() * 255) + 170 + "," + Math.floor(Math.random() * 255) + 170 + "," + Math.floor(Math.random() * 255) + 170 + ")";
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
    ctx.fill();
  }
}
starWars();