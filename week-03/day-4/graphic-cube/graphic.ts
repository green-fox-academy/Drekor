'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function squareS(x: number, y: number, size: number, c: number) {
  if (c != 10) {
    ctx.strokeRect(x + size / 3, y, size / 3, size / 3);

    //ctx.strokeRect(x, y, size, size / 3);


    squareS(x + size / 3, y, size / 3, c + 1);
  }
}
squareS(0, 0, canvas.height, 0);