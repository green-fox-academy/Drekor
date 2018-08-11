'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let a = 10;
let b = 10;
let c = 10;

ctx.beginPath();
ctx.moveTo(canvas.width /2 , canvas.height);
ctx.lineTo(,);
ctx.stroke();

function horizontalPyramidLIne() {

    ctx.beginPath();
    for( let i = 0, i < canvas.width, i++){

    ctx.moveTo(,);
    ctx.lineTo(,);
    ctx.stroke();
    }

}

function slashOfThePyramid() {

    ctx.beginPath();
    for( let i = 0, i <, i++){

    ctx.moveTo(, );
    ctx.lineTo(, );
    ctx.stroke();
    }
}

function backSlashOfThePyramid() {

    ctx.beginPath();
    for( let i = 0, i <, i++){

    ctx.moveTo(, );
    ctx.lineTo(, );
    ctx.stroke();
    }
}

horizontalPyramidLIne(),
    slashOfThePyramid(),
    backSlashOfThePyramid();