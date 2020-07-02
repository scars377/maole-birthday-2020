import Face from './Face';
import Body from './Body';
const { Container, Tween, Ease } = createjs;

const UP_TIME = 800;
const DOWN_TIME = 800;
const HIT_RANGE = 80;

class Player extends Container {
  _jumping = false;

  constructor() {
    super();
    this.body = new Body();
    this.addChild(this.body);

    this.face = new Face();
    this.addChild(this.face);

    this.on('added', this.added);
    this.on('removed', this.removed);

    // this.on('click', (e) => {
    //   console.log(e.stageX, e.stageY);
    //   console.log(this.globalToLocal(e.stageX, e.stageY));
    // });
  }

  get jumping() {
    return this._jumping;
  }

  set jumping(val) {
    this._jumping = val;
    this.face.jumping = val;
    this.body.jumping = val;
  }

  get head() {
    return { x: 80, y: -320 };
  }

  get foot() {
    return { x: 40, y: -80 };
  }

  added = () => {
    this.y = this.getGround();
    this.position();
    this.stage.on('click', this.jump);
    this.stage.on('resize', this.position);
    this.on('tick', this.hitTest);
  };
  removed = () => {
    this.off('tick', this.hitTest);
    this.stage.off('click', this.jump);
    this.stage.off('resize', this.position);
  };
  hitTest = () => {
    this.icons.icons.forEach((icon) => {
      if (icon.isHit) return;

      const p = this.globalToLocal(icon.x, icon.y);
      const q = icon.good ? this.head : this.foot;

      if (Math.abs(p.x - q.x) < HIT_RANGE && Math.abs(p.y - q.y) < HIT_RANGE) {
        icon.hit();
        this.face.gotoAndPlay(icon.good ? 'happy' : 'sad');
      }
    });
  };

  position = () => {
    this.x = this.stage.canvas.width * 0.25;
  };

  getGround = () => {
    return this.stage.height;
  };

  getTop = () => {
    return this.getGround() - 280;
  };

  jump = () => {
    if (this.jumping) return;

    Tween.get(this)
      .set({ jumping: true })
      .to({ y: this.getTop() }, UP_TIME, Ease.sineOut)
      .to({ y: this.getGround() }, DOWN_TIME, Ease.sineIn)
      .set({ jumping: false });
  };
}

export default Player;
