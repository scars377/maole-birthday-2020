import Preload from './Preload';

const { Container, Bitmap, Sound } = createjs;

export default class extends Container {
  _play = false;

  constructor() {
    super();

    this.sndOn = new Bitmap(Preload.get('sndOn'));
    this.sndOff = new Bitmap(Preload.get('sndOff'));
    this.addChild(this.sndOn);
    this.addChild(this.sndOff);

    this.regX = this.sndOn.image.width + 20;
    this.regY = -20;
    this.cursor = 'pointer';

    this.on('added', this.added);
    this.on('removed', this.removed);
    this.on('click', () => (this.play = !this.play));
  }

  added = () => {
    this.instance = Sound.play('intro', { loop: -1, volume: 0.25 });
    const p = this.play;
    this.play = p;
    this._stage = this.stage;
    this._stage.on('resize', this.resize);
    this.resize();
  };
  removed = () => {
    this.play = false;
    this._stage.on('resize', this.resize);
  };

  resize = () => {
    this.x = this._stage.width;
    this.scale = 1;
  };

  get play() {
    try {
      this._play = window.localStorage.getItem('bgm') !== '0';
    } catch {
      //
    }
    return this._play;
  }

  set play(val) {
    this._play = val;

    try {
      window.localStorage.setItem('bgm', val ? '1' : '0');
    } catch {
      //
    }

    if (val) {
      this.removeChild(this.sndOff);
      this.addChild(this.sndOn);
      this.instance.play();
    } else {
      this.removeChild(this.sndOn);
      this.addChild(this.sndOff);
      this.instance.stop();
    }
  }
}
