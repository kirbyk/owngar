import Circle from './Circle';
import Constants from '../constants';
import { randElement } from '../util';


export default class Player extends Circle {

  constructor(props) {
    super(props);
    this.state = {
      xPos: props.xPos,
      yPos: props.yPos,
      radius: Constants.playerInitialRadius,
      color: randElement(Constants.circleColors)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      xPos: nextProps.xPos,
      yPos: nextProps.yPos
    });
  }

}
