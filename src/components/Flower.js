import Circle from './Circle';
import Constants from '../constants';
import { randBetween, randElement } from '../util';


export default class Flower extends Circle {

  constructor(props) {
    super(props);
    this._xPos = randBetween(window.innerWidth);
    this._yPos = randBetween(window.innerHeight);
    this._radius = Constants.flowerRadius;
    this._color = randElement(Constants.circleColors);
  }

}
