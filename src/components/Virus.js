import Constants from '../constants';
import Circle from './Circle';


export default class Virus extends Circle {

  constructor(context, props) {
    super(context, props);
  }

  draw() {
    const { randX, randY } = this._getRandXY();

    this._createCanvasCircle(this._context, {
      xPos: randX,
      yPos: randY,
      radius: Constants.virusRadius,
      color: Constants.virusColor
    });
  }

}
