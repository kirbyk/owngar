import Constants from '../constants';
import React from 'react';
import ReactCanvas from 'react-canvas';
import { randElement, randBetween } from '../util';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this._getWindowDimensions();
  }

  componentDidMount() {
    this._windowDidResize();
    this._setupCanvas();

    const randX = randBetween(this.state.width);
    const randY = randBetween(this.state.height);

    this._createCanvasCircle(this._context, {
      xPos: randX,
      yPos: randY,
      radius: Constants.flowerRadius,
      color: randElement(Constants.flowerColors)
    });
  }

  _windowDidResize() {
    window.onresize = event => {
      this.setState(this.getWindowDimensions());
    };
  }

  _getWindowDimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  _setupCanvas() {
    this._canvas = React.findDOMNode(this);
    this._context = this._canvas.getContext('2d');
  }

  _createCanvasCircle(ctx, opts = {
                                    xPos, 
                                    yPos, 
                                    radius: 1,
                                    color: '#000000'
                                  }) {
    const path = new Path2D();
    path.arc(opts.xPos, opts.yPos, opts.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = opts.color;
    ctx.fill(path);
  }

  render() {
    return (
      <canvas
        width={this.state.width}
        height={this.state.height}
      />
    );
  }

}
