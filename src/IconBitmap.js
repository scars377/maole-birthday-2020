const { Bitmap } = createjs;

export default class extends Bitmap {
  constructor(img) {
    super(img);
    this.image.addEventListener('load', () => {
      this.regX = parseInt(this.image.width / 2, 10);
      this.regY = parseInt(this.image.height / 2, 10);
    });
  }
}
