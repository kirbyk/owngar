import React from 'react';
import ReactCanvas from 'react-canvas';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getWindowDimensions();
  }

  componentDidMount() {
    this.windowDidResize();
  }

  windowDidResize() {
    window.onresize = event => {
      this.setState(this.getWindowDimensions());
    };
  }

  getWindowDimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
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
