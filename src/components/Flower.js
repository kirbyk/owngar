import Constants from '../constants';
import Circle from './Circle';
import { randElement } from '../util';


export default class Flower extends Circle {

  constructor(context, props) {
    super(context, props);
  }

  draw() {
    const { randX, randY } = this._getRandXY();

    this._createCanvasCircle(this._context, {
      xPos: randX,
      yPos: randY,
      radius: Constants.flowerRadius,
      color: randElement(Constants.flowerColors)
    });
  }

}
