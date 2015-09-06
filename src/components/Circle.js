import Constants from '../constants';
import React from 'react';
import { Circle as CanvasCircle } from 'react-canvas';
import { randBetween } from '../util';


export default class Circle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      xPos: randBetween(window.innerWidth),
      yPos: randBetween(window.innerHeight),
      radius: 1,
      color: '#000000'
    };
  }

  render() {
    var style = this._getStyle();

    return (
      <CanvasCircle style={style} />
    );
  }

  _getStyle() {
    return {
      xPos: this.state.xPos,
      yPos: this.state.yPos,
      radius: this.state.radius,
      color: this.state.color
    };
  }

}
