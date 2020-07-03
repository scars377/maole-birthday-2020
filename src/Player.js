import Face from './Face';
import Body from './Body';
import { LANES } from './constants';

const { Container, Tween, Ease, Sound } = createjs;

const UP_TIME = 800;
const DOWN_TIME = 800;
const HIT_RANGE = 80;

const HEAD_X = 60;
const HEAD_Y = -240;

class Player extends Container {
  top = 0;
  bottom = 0;
  head = { x: 60, y: -240 };

  _jumping = false;

  constructor() {
    super();

    const layer = new Container();
    this.layer = layer;
    this.addChild(layer);

    // const shape = new createjs.Shape();
    // this.shape = shape;
    // this.addChild(shape);

    this.body = new Body();
    layer.addChild(this.body);

    this.face = new Face();
    layer.addChild(this.face);

    layer.regX = -10;
    layer.regY = -30;

    this.on('added', this.added);
    this.on('removed', this.removed);
  }

  get jumping() {
    return this._jumping;
  }

  set jumping(val) {
    this._jumping = val;
    this.face.jumping = val;
    this.body.jumping = val;
  }

  added = () => {
    this._stage = this.stage;
    this._stage.on('click', this.jump);
    this._stage.on('resize', this.resize);
    this.resize();
    this.on('tick', this.hitTest);

    // this.stage.on('click', (e) => {
    //   console.log(e.stageX, e.stageY);
    //   console.log(this.globalToLocal(e.stageX, e.stageY));
    // });
  };
  removed = () => {
    this._stage.off('click', this.jump);
    this._stage.off('resize', this.resize);
    this.off('tick', this.hitTest);
  };
  hitTest = () => {
    this.icons.icons.forEach((icon) => {
      if (icon.isHit) return;

      const p = this.globalToLocal(icon.x, icon.y);
      const q = icon.good ? this.head : { x: 0, y: 0 };

      if (
        Math.abs(p.x - q.x) < this.hitRange &&
        Math.abs(p.y - q.y) < this.hitRange
      ) {
        icon.hit();
        this.face.gotoAndPlay(icon.good ? 'happy' : 'sad');
        Sound.play(icon.good ? 'eat' : 'stomp');
      }
    });
  };

  resize = () => {
    const { top, mid, bottom } = LANES;
    const { width, height } = this._stage;

    // distance from mouth to foot
    const scale = (height * (bottom - mid)) / -HEAD_Y;

    this.layer.scale = scale;
    this.hitRange = HIT_RANGE * scale;
    this.head = {
      x: HEAD_X * scale,
      y: HEAD_Y * scale,
    };
    // this.shape.graphics
    //   .c()
    //   .f('red')
    //   .r(-4, -4, 8, 8)
    //   .r(this.head.x - 4, this.head.y - 4, 8, 8);

    this.top = height * top;
    this.bottom = height * bottom;
    this.x = width * 0.3;
    this.y = this.bottom;
  };

  jump = () => {
    if (this.jumping) return;
    Sound.play('jump');

    Tween.get(this)
      .set({ jumping: true })
      .to({ y: this.top - this.head.y }, UP_TIME, Ease.sineOut)
      .to({ y: this.bottom }, DOWN_TIME, Ease.sineIn)
      .set({ jumping: false });
  };
}

export default Player;
