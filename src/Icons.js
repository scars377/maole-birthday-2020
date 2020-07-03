import Icon from './Icon';
const { Container } = createjs;

const TIME = 1800;
const TIME_VARY = 500;

export default class extends Container {
  timer = -1;
  icons = [];
  constructor() {
    super();
    this.layer = new Container();
    this.addChild(this.layer);

    this.on('added', this.added);
    this.on('removed', this.removed);
  }
  added = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.addIcon();
      this.added();
    }, TIME + Math.random() * TIME_VARY);
  };
  removed = () => {
    clearTimeout(this.timer);
  };
  addIcon = () => {
    let icon;
    if (Math.random() < 0.25) {
      icon = new Icon(false);
    } else {
      icon = new Icon(true);
    }
    this.addChild(icon);
    this.icons = [...this.icons, icon];

    icon.on('remove', (e) => {
      this.removeChild(icon);
      this.icons = this.icons.filter((c) => c !== icon);
      e.remove();
    });
  };
}
