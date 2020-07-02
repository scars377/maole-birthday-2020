import Preload from './Preload';

const { Sprite, SpriteSheet } = createjs;

const width = 200;
const height = 230;
const TIME = 200;

export default class extends Sprite {
  timer = -1;

  constructor() {
    const spriteSheet = new SpriteSheet({
      images: [
        Preload.get('imgSad'),
        Preload.get('imgHappy'),
        Preload.get('imgUp'),
      ],
      frames: { width, height },
      animations: {
        up: 2,
        sad: [0, 0, 'up', 0.015],
        happy: [1, 1, 'up', 0.015],
      },
    });
    super(spriteSheet, 'up');
    this.regX = width / 2;
    this.regY = height;
    this.x = 30;
    this.y = -220;
    // this.scale = 0.9;
    this.rotation = 1;

    this.on('added', this.startAnim);
    this.on('remove', this.stopAnim);
  }

  startAnim = () => {
    this.stopAnim();
    this.timer = setTimeout(() => {
      this.rotation = -this.rotation;
      this.startAnim();
    }, TIME);
  };

  stopAnim = () => {
    clearTimeout(this.timer);
  };

  set jumping(val) {
    if (val) {
      this.stopAnim();
    } else {
      this.startAnim();
    }
  }
}
