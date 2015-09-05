import Constants from '../constants';
import { randBetween } from '../util';


export default class Circle {

  constructor(context, props) {
    this._context = context;
    this.props = props;
  }

  draw() {
    this._createCanvasCircle(this._context);
  }

  _getRandXY() {
    return {
      randX: randBetween(this.props.width),
      randY: randBetween(this.props.height)
    }
  }

  _createCanvasCircle(ctx, opts = {
                                    xPos: this.props.width / 2,
                                    yPos: this.props.height / 2,
                                    radius: 1,
                                    color: '#000000'
                                  }) {
    const path = new Path2D();
    path.arc(opts.xPos, opts.yPos, opts.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = opts.color;
    ctx.fill(path);
  }

}
