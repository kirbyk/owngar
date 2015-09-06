import Circle from './Circle';
import Constants from '../constants';
import { randElement } from '../util';


export default class Player extends Circle {

  constructor(props) {
    super(props);
    this._xPos = window.innerWidth / 2;
    this._yPos = window.innerHeight / 2;
    this._radius = Constants.playerInitialRadius;
    this._color = randElement(Constants.circleColors);
  }

}
