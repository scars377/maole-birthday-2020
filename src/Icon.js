import { MOVE_SPEED } from './constants';
import IconBitmap from './IconBitmap';
import { LANES } from './constants';

const { Container, Tween, Ease } = createjs;
const bads = ['shit', 'snake', 'spider'];
const goods = ['corn', 'pudding', 'ice', 'mango', 'popsicle', 'toast'];
const sample = (arr) => arr[parseInt(Math.random() * arr.length, 10)];

export default class Icon extends Container {
  static bitmaps = {};

  pos = 0;
  t = 0;
  isHit = false;
  speed = 0;
  constructor(good) {
    super();

    const id = sample(good ? goods : bads);

    this.good = good;
    if (!Icon.bitmaps[id]) {
      Icon.bitmaps[id] = new IconBitmap(id);
    }
    this.img = Icon.bitmaps[id].clone();
    this.regY = 40;

    this.addChild(this.img);

    const { top, mid, bottom } = LANES;
    this.pos = {
      x: 1.2,
      y: !good ? bottom : Math.random() < 0.4 ? mid : top,
    };

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
    const { height } = this._stage;
    // const scale = height / 720;

    this.y = this.pos.y * height;
    this.scale = height / 720;
  };
  tick = () => {
    const t = Date.now();
    const dt = t - this.t;
    this.t = t;
    this.pos.x -= MOVE_SPEED * dt;
    this.x = this.pos.x * this._stage.width;
    if (this.pos.x <= -0.2) {
      this.dispatchEvent('remove');
    }
  };
  hit() {
    this.isHit = true;
    return this.good ? this.eaten() : this.flatten();
  }
  eaten = () => {
    Tween.get(this.img)
      .to({ scale: 0 }, 300, Ease.backIn)
      .call(() => this.dispatchEvent('remove'));
  };
  flatten = () => {
    Tween.get(this.img).to({ y: 60, scaleY: 0.1 }, 300, Ease.elasticOut);
  };
}
