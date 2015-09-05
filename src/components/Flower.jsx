import Constants from '../constants';
import { randElement, randBetween } from '../util';

export default class Flower {

  constructor(context, props) {
    this._context = context;
    this.props = props;
  }

  draw() {
    const randX = randBetween(this.props.width);
    const randY = randBetween(this.props.height);

    this._createCanvasCircle(this._context, {
      xPos: randX,
      yPos: randY,
      radius: Constants.flowerRadius,
      color: randElement(Constants.flowerColors)
    });
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

}
