'use strict';

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let ANGLE_STEP = 0.01;
let SCALE_FACTOR = 20;

ctx.strokeStyle = 'rgb(200, 200, 200)'
ctx.fillStyle = 'rgb(0, 0, 0)';

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawPoint(ctx, x, y) {
    ctx.fillRect(x, y, 1, 1);
}

function drawShape(a, b, m, n1, n2, n3) {
    for (let angle = 0; angle < 2 * Math.PI; angle += ANGLE_STEP) {
        // The superforumla.
        let x = Math.pow(Math.abs(Math.cos(m * angle / 4) / a), n2);
        let y = Math.pow(Math.abs(Math.sin(m * angle / 4) / b), n3);
        let r = Math.pow(x + y, -1 / n1);

        let xC = canvas.width / 2;
        let yC = canvas.height / 2;

        // Convert to Cartesian coordinates for drawing.
        let xP = r * Math.cos(angle) * SCALE_FACTOR + xC;
        let yP = r * Math.sin(angle) * SCALE_FACTOR + yC;

        drawLine(ctx, xC, yC, xP, yP);
        drawPoint(ctx, xP, yP);
    }
}

let a = 1;
let b = 1;
let m = 7;
let n1 = 3;
let n2 = 4;
let n3 = 17;

function draw() {
    drawShape(a, b, m, n1, n2, n3);
}

draw();

