import Constants from '../constants';
import Circle from './Circle';


export default class Virus extends Circle {

  constructor(context, props) {
    super(context, props);
    this._radius = Constants.virusRadius;
    this._color = Constants.virusColor;
  }

}
