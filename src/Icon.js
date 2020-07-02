import { MOVE_SPEED } from './constants';
import IconBitmap from './IconBitmap';

const { Container, Tween, Ease } = createjs;
const bads = ['shit', 'snake', 'spider'];
const goods = ['corn', 'pudding', 'ice', 'mango', 'popsicle', 'toast'];
const sample = (arr) => arr[parseInt(Math.random() * arr.length, 10)];

export default class Icon extends Container {
  static bitmaps = {};

  t = 0;
  isHit = false;
  constructor(good) {
    super();

    const id = sample(good ? goods : bads);

    this.good = good;
    if (!Icon.bitmaps[id]) {
      Icon.bitmaps[id] = new IconBitmap(id);
    }
    this.img = Icon.bitmaps[id].clone();

    this.addChild(this.img);

    this.x = 1280 + 200;
    this.y = !good ? 640 : Math.random() < 0.4 ? 400 : 150;

    this.on('added', this.added);
    this.on('removed', this.removed);
  }
  added = () => {
    this.t = Date.now();
    this.on('tick', this.tick);
  };
  removed = () => {
    this.off('tick', this.tick);
  };
  tick = () => {
    const t = Date.now();
    const dt = t - this.t;
    this.t = t;
    this.x -= MOVE_SPEED * dt;

    if (this.x <= -200) {
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
