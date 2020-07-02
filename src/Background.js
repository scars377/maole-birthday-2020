import Preload from './Preload';
import { MOVE_SPEED } from './constants';

const { Container, Bitmap } = createjs;

const width = 1280;
const height = 720;

export default class extends Container {
  t = 0;
  constructor() {
    super();

    const img1 = new Bitmap(Preload.get('bg'));
    const img2 = img1.clone();
    img2.x = width;
    this.regY = height;
    this.addChild(img1);
    this.addChild(img2);
    this.on('added', this.added);
  }

  added = () => {
    this.y = this.stage.height;
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
    if (this.x <= -width) {
      this.x += width;
    }
  };
}
