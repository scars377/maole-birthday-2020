import run1 from './assets/run1.png';
import run2 from './assets/run2.png';
import run3 from './assets/run3.png';
import run4 from './assets/run4.png';
import run5 from './assets/run5.png';
import run6 from './assets/run6.png';
import run7 from './assets/run7.png';
import run8 from './assets/run8.png';

const { Sprite, SpriteSheet } = createjs;

const width = 220;
const height = 360;

export default class extends Sprite {
  // export default class extends Sprite {
  constructor() {
    const spriteSheet = new SpriteSheet({
      images: [run1, run2, run3, run4, run5, run6, run7, run8],
      frames: { width, height },
      // frames: {width:50, height:50},
      animations: {
        run: [0, 7],
        jump: 0,
      },
    });
    super(spriteSheet, 'run');
    this.x = -width / 2;
    this.y = -height;
    this.framerate = 12;
  }

  set jumping(val) {
    this.gotoAndPlay(val ? 'jump' : 'run');
  }
}
