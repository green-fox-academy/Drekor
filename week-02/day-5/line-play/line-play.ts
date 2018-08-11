'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function greenGrid() {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    for (let i = 0; i <= canvas.width; i++) {
        if (i % 30 == 0) {
            ctx.moveTo(0, i);
            ctx.lineTo(i, canvas.width);
            ctx.stroke();
        }
    }
}

function pinkGrid() {
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    for (let i = 0; i <= canvas.height; i++) {
        if (i % 30 == 0) {
            ctx.moveTo(i, 0);
            ctx.lineTo(canvas.height, i);
            ctx.stroke();
        }
    }
}

greenGrid(), pinkGrid();