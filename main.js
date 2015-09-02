'use strict';

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var COLORS = ['#AC00FF', // purple
'#E100FF', // lightPurple
'#F9FF00', // yellow
'#00C4FF', // lightBlue
'#FF008B', // pink
'#FF0032', // red
'#36FF00', // limeGreen
'#00FFB4' // teal
];
var FLOWER_RADIUS = 14;

function _$(element) {}

function $(element) {
  return new _$(element);
}

_$.prototype.ready = function (callback) {
  document.addEventListener("DOMContentLoaded", function (event) {
    callback();
  }, false);
};

$(document).ready(function () {
  var canvas = new Canvas();
  window.canvasReset = canvas.reset;

  setInterval(function () {
    canvas.addDot();
  }, 500);
});

var Canvas = (function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    this.reset();
  }

  _createClass(Canvas, [{
    key: 'reset',
    value: function reset() {
      var width = window.innerWidth;
      var height = window.innerHeight;

      var canvas = document.getElementById('canvas');

      canvas.width = width;
      canvas.height = height;

      if (this) {
        this.canvas = canvas;
      }
    }
  }, {
    key: 'addDot',
    value: function addDot() {
      var ctx = this.canvas.getContext('2d');

      var randX = randBetween(this.canvas.width);
      var randY = randBetween(this.canvas.height);

      createCanvasCircle(ctx, {
        xPos: randX,
        yPos: randY,
        radius: FLOWER_RADIUS,
        color: randElement(COLORS)
      });
    }
  }]);

  return Canvas;
})();

var Cell = function Cell() {
  _classCallCheck(this, Cell);
};

var Flower = (function (_Cell) {
  _inherits(Flower, _Cell);

  function Flower() {
    _classCallCheck(this, Flower);

    _get(Object.getPrototypeOf(Flower.prototype), 'constructor', this).apply(this, arguments);
  }

  return Flower;
})(Cell);

var Virus = (function (_Cell2) {
  _inherits(Virus, _Cell2);

  function Virus() {
    _classCallCheck(this, Virus);

    _get(Object.getPrototypeOf(Virus.prototype), 'constructor', this).apply(this, arguments);
  }

  return Virus;
})(Cell);

var Blob = (function (_Cell3) {
  _inherits(Blob, _Cell3);

  function Blob() {
    _classCallCheck(this, Blob);

    _get(Object.getPrototypeOf(Blob.prototype), 'constructor', this).apply(this, arguments);
  }

  return Blob;
})(Cell);

function createCanvasCircle(ctx) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {
    xPos: xPos,
    yPos: yPos,
    radius: 1,
    color: '#000000'
  } : arguments[1];

  var path = new Path2D();
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
