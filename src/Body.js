import Preload from './Preload';
const { Sprite, SpriteSheet } = createjs;

const width = 220;
const height = 360;

export default class extends Sprite {
  // export default class extends Sprite {
  constructor() {
    const spriteSheet = new SpriteSheet({
      images: [
        Preload.get('run1'),
        Preload.get('run2'),
        Preload.get('run3'),
        Preload.get('run4'),
        Preload.get('run5'),
        Preload.get('run6'),
        Preload.get('run7'),
        Preload.get('run8'),
      ],
      frames: { width, height },
      // frames: {width:50, height:50},
      animations: {
        run: [0, 7],
        jump: 0,
      },
    });
    super(spriteSheet, 'run');
    this.regX = width / 2;
    this.regY = height;
    this.framerate = 12;
  }

  set jumping(val) {
    this.gotoAndPlay(val ? 'jump' : 'run');
  }
}
