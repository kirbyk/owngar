import Constants from '../constants';
import { randBetween } from '../util';


export default class Circle {

  constructor(context, props) {
    this._context = context;
    this._radius = 1;
    this._color = '#000000';
    this._xPos = randBetween(props.width);
    this._yPos = randBetween(props.height);
  }

  draw() {
    this._createCanvasCircle();
  }

  _createCanvasCircle() {
    const path = new Path2D();
    path.arc(this._xPos, this._yPos, this._radius, 0, Math.PI * 2, true);
    this._context.fillStyle = this._color;
    this._context.fill(path);
  }

}
