import Constants from '../constants';
import Circle from './Circle';
import { randElement } from '../util';


export default class Player extends Circle {

  constructor(context, props) {
    super(context, props);
    this._radius = Constants.playerInitialRadius;
    this._color = randElement(Constants.circleColors);
    this._xPos = props.width / 2;
    this._yPos = props.height / 2;
  }

}

