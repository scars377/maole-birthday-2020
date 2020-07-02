const { Stage, Shape } = createjs;

export default class extends Stage {
  width = 1280;
  height = 720;
  constructor() {
    super('canvas');
    this.bg = new Shape();
    this.addChild(this.bg);
    this.enableMouseOver();

    window.addEventListener('resize', this.resize);
    this.resize();
  }
  destroy() {
    window.removeEventListener('resize', this.resize);
  }
  resize = () => {
    const { width: w, height: h } = this;
    // const { innerWidth: w, innerHeight: h } = window;
    this.canvas.width = w;
    this.canvas.height = h;
    this.bg.graphics.c().f('#b7e3ec').r(0, 0, w, h);
    this.dispatchEvent('resize');
  };
}
