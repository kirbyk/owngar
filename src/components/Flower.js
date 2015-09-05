import Constants from '../constants';
import Circle from './Circle';
import { randElement } from '../util';


export default class Flower extends Circle {

  constructor(context, props) {
    super(context, props);
    this._radius = Constants.flowerRadius;
    this._color = randElement(Constants.flowerColors);
  }

}
