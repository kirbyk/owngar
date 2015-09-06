import Circle from './Circle';
import Constants from '../constants';
import { randBetween } from '../util';


export default class Virus extends Circle {

  constructor(props) {
    super(props);
    this._xPos = randBetween(window.innerWidth);
    this._yPos = randBetween(window.innerHeight);
    this._radius = Constants.virusRadius;
    this._color = Constants.virusColor;
  }

}
