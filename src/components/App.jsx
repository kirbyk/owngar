import Flower from './Flower.jsx';
import React from 'react';
import ReactCanvas from 'react-canvas';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this._getWindowDimensions();
  }

  componentDidMount() {
    this._windowDidResize();
    this._setupCanvas();

    setInterval(() => {
      const flower = new Flower(this._context, this.state);
      flower.draw();
    }, 500);
  }

  _windowDidResize() {
    window.onresize = event => {
      this.setState(this._getWindowDimensions());
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

  render() {
    return (
      <canvas
        width={this.state.width}
        height={this.state.height}
      />
    );
  }

}
