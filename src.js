const COLORS = [
  '#AC00FF', // purple
  '#E100FF', // lightPurple
  '#F9FF00', // yellow
  '#00C4FF', // lightBlue
  '#FF008B', // pink
  '#FF0032', // red
  '#36FF00', // limeGreen
  '#00FFB4'  // teal
];
const FLOWER_RADIUS = 14;

function _$(element) {
}

function $(element) {
  return new _$(element);
}

_$.prototype.ready = callback => {
  document.addEventListener("DOMContentLoaded", event => {
    callback();
  }, false );
}

$(document).ready(() => { 
  const canvas = new Canvas();
  window.canvasReset = canvas.reset;

  setInterval(() => {
    canvas.addDot();
  }, 500);
});

class Canvas {
  constructor() {
    this.reset();
  }

  reset() {
    const { innerWidth: width, innerHeight: height } = window;

    const canvas = document.getElementById('canvas');

    canvas.width = width;
    canvas.height = height;

    if (this) {
      this.canvas = canvas;
    }
  }

  addDot() {
    const ctx = this.canvas.getContext('2d');

    const randX = randBetween(this.canvas.width);
    const randY = randBetween(this.canvas.height);

    createCanvasCircle(ctx, {
      xPos: randX,
      yPos: randY,
      radius: FLOWER_RADIUS,
      color: randElement(COLORS)
    });
  }
}

class Cell {
  constructor() {
  }
}

class Flower extends Cell {
}

class Virus extends Cell {
}

class Blob extends Cell {
}

function createCanvasCircle(ctx, opts = {
                                          xPos, 
                                          yPos, 
                                          radius: 1,
                                          color: '#000000'
                                        }) {
  const path = new Path2D();
  path.arc(opts.xPos, opts.yPos, opts.radius, 0, Math.PI * 2, true);
  ctx.fillStyle = opts.color;
  ctx.fill(path);
}

function randElement(arr) {
  return arr[randBetween(arr.length)];
}

function randBetween(limit) {
  return Math.floor(Math.random() * limit);
}
