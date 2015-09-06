import Constants from '../constants';
import React from 'react';
import { Circle as CanvasCircle } from 'react-canvas';
import { randBetween } from '../util';


export default class Circle extends React.Component {

  constructor(props) {
    super(props);
    this._xPos = randBetween(window.innerWidth);
    this._yPos = randBetween(window.innerHeight);
    this._radius = 1;
    this._color = '#000000';
  }

  render() {
    var style = this._getStyle();

    return (
      <CanvasCircle style={style} />
    );
  }

  _getStyle() {
    return {
      xPos: this._xPos,
      yPos: this._yPos,
      radius: this._radius,
      color: this._color
    };
  }

}
