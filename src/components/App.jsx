import Constants from '../constants';
import Flower from './Flower';
import Player from './Player';
import React from 'react';
import ReactCanvas from 'react-canvas';
import Virus from './Virus';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = this._getWindowDimensions();
  }

  componentDidMount() {
    this._windowDidResize();
    this._setupCanvas();
    this._addViruses();
    this._addFlowers();
    this._addPlayer();
  }

  render() {
    return (
      <canvas
        width={this.state.width}
        height={this.state.height}
      />
    );
  }

  _addFlowers() {
    setInterval(() => {
      const flower = new Flower(this._context, this.state);
      flower.draw();
    }, Constants.flowerInsertionInterval);
  }

  _addPlayer() {
    console.log('add player');
    const player = new Player(this._context, this.state);
    player.draw();
  }

  _addViruses() {
    for(let i = 0; i < Constants.numberOfViruses; i++) {
      const virus = new Virus(this._context, this.state);
      virus.draw();
    }
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

  _windowDidResize() {
    window.onresize = event => {
      this.setState(this._getWindowDimensions());
    };
  }

}
