import Preload from './Preload';
import { MOVE_SPEED } from './constants';

const { Container, Bitmap } = createjs;

const WIDTH = 1280;
const HEIGHT = 720;

export default class extends Container {
  t = 0;
  constructor() {
    super();
    const layer = new Container();
    this.addChild(layer);
    this.layer = layer;

    this.on('added', this.added);
    this.on('removed', this.removed);
  }

  added = () => {
    this.t = Date.now();
    this.on('tick', this.tick);
    this._stage = this.stage;
    this._stage.on('resize', this.resize);
    this.resize();
  };

  removed = () => {
    this.off('tick', this.tick);
    this._stage.off('resize', this.resize);
  };

  resize = () => {
    const { width, height } = this._stage;
    const img = new Bitmap(Preload.get('bg'));
    const scale = height / HEIGHT;
    this.scale = scale;
    this.speed = (MOVE_SPEED * width) / scale;

    this.layer.removeAllChildren();
    const imgs = Math.ceil(width / (WIDTH * scale)) + 1;
    for (let i = 0; i < imgs; i++) {
      const m = img.clone();
      m.x = i * WIDTH;
      this.layer.addChild(m);
    }
  };

  tick = () => {
    const t = Date.now();
    const dt = t - this.t;
    this.t = t;

    this.layer.x -= this.speed * dt;
    if (this.layer.x <= -WIDTH) {
      this.layer.x += WIDTH;
    }
  };
}
