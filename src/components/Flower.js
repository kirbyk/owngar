import Circle from './Circle';
import Constants from '../constants';
import { randBetween, randElement } from '../util';


export default class Flower extends Circle {

  constructor(props) {
    super(props);
    this.state = {
      xPos: randBetween(window.innerWidth),
      yPos: randBetween(window.innerHeight),
      radius: Constants.flowerRadius,
      color: randElement(Constants.circleColors)
    };
  }

}
