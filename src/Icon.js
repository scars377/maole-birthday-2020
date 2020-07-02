import shit from './assets/bad-shit.png';
import snake from './assets/bad-snake.png';
import spider from './assets/bad-spider.png';
import corn from './assets/icon-corn.png';
import ice from './assets/icon-ice.png';
import mango from './assets/icon-mango.png';
import popsicle from './assets/icon-popsicle.png';
import pudding from './assets/icon-pudding.png';
import toast from './assets/icon-toast.png';
import { MOVE_SPEED } from './constants';
import IconBitmap from './IconBitmap';

const { Container, Tween, Ease } = createjs;

const bads = [shit, snake, spider];
const goods = [corn, pudding, ice, mango, popsicle, toast];

const badImgs = bads.map((img) => new IconBitmap(img));
const goodImgs = goods.map((img) => new IconBitmap(img));

const sample = (arr) => arr[parseInt(Math.random() * arr.length, 10)];

export default class extends Container {
  t = 0;
  isHit = false;
  constructor(good) {
    super();

    this.good = good;
    this.img = sample(good ? goodImgs : badImgs).clone();
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
