import Constants from '../constants';
import Flower from './Flower';
import Player from './Player';
import React from 'react';
import Virus from './Virus';
import { Surface } from 'react-canvas';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      flowers: [],
      viruses: []
    };
  }

  componentDidMount() {
    this._windowDidResize();
    this._addViruses();
    this._addFlowers();
  }

  render() {

    return (
      <Surface width={this.state.width} height={this.state.height} left={0} top={0}>
        {this.state.flowers}
        {this.state.viruses}
        <Player />
      </Surface>
    );
  }

  _addFlowers() {
    let i = 0;
    setInterval(() => {
      this.state.flowers.push(<Flower key={`flower-${i}`}/>);
      this.forceUpdate();
      i++;
    }, Constants.flowerInsertionInterval);
  }

  _addViruses() {
    for(let i = 0; i < Constants.numberOfViruses; i++) {
      this.state.viruses.push(<Virus key={`virus-${i}`}/>);
    }
  }

  _windowDidResize() {
    window.onresize = event => {
      this.setState({
        ...this.state,
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
  }

}
