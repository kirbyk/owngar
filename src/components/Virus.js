import Circle from './Circle';
import Constants from '../constants';
import { randBetween } from '../util';


export default class Virus extends Circle {

  constructor(props) {
    super(props);
    this.state = {
      xPos: randBetween(window.innerWidth),
      yPos: randBetween(window.innerHeight),
      radius: Constants.virusRadius,
      color: Constants.virusColor
    };
  }

}
