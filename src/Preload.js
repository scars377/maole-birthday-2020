import bg from './assets/bg.png';
import shit from './assets/bad-shit.png';
import snake from './assets/bad-snake.png';
import spider from './assets/bad-spider.png';
import corn from './assets/icon-corn.png';
import ice from './assets/icon-ice.png';
import mango from './assets/icon-mango.png';
import popsicle from './assets/icon-popsicle.png';
import pudding from './assets/icon-pudding.png';
import toast from './assets/icon-toast.png';
import run1 from './assets/run1.png';
import run2 from './assets/run2.png';
import run3 from './assets/run3.png';
import run4 from './assets/run4.png';
import run5 from './assets/run5.png';
import run6 from './assets/run6.png';
import run7 from './assets/run7.png';
import run8 from './assets/run8.png';
import imgSad from './assets/maole-sad.png';
import imgHappy from './assets/maole-happy.png';
import imgUp from './assets/maole-up.png';
import sndOn from './assets/snd-on.png';
import sndOff from './assets/snd-off.png';

import eat from './assets/eat.mp3';
import intro from './assets/intro.mp3';
import stomp from './assets/stomp.mp3';
import jump from './assets/jump.mp3';

const { LoadQueue, Sound } = createjs;

const manifest = Object.entries({
  bg,
  shit,
  snake,
  spider,
  corn,
  ice,
  mango,
  popsicle,
  pudding,
  toast,
  run1,
  run2,
  run3,
  run4,
  run5,
  run6,
  run7,
  run8,
  imgSad,
  imgHappy,
  imgUp,
  sndOn,
  sndOff,

  eat,
  intro,
  stomp,
  jump,
}).map(([id, src]) => ({ id, src }));

export default class Preload {
  static init(onComplete) {
    const queue = new LoadQueue();
    queue.installPlugin(Sound);
    queue.on('complete', onComplete);
    queue.loadManifest(manifest);

    Preload.queue = queue;
  }
  static get(id) {
    return Preload.queue.getResult(id);
  }
}
