import Preload from './Preload';

const { Bitmap } = createjs;

export default class extends Bitmap {
  constructor(id) {
    const img = Preload.get(id);
    super(img);
    this.regX = parseInt(img.width / 2, 10);
    this.regY = parseInt(img.height / 2, 10);
  }
}
