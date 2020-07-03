import Background from './Background';
import Icons from './Icons';
import Player from './Player';
import Stage from './Stage';
import Preload from './Preload';
import BGM from './BGM';

const { Ticker } = createjs;

window.addEventListener('load', () => {
  const loading = document.querySelector('#loading');
  const bar = document.querySelector('#bar');
  const canvas = document.querySelector('#canvas');
  const start = document.querySelector('#start');

  Preload.init(
    (e) => {
      bar.style.width = `${100 * e.progress}%`;
    },
    () => {
      loading.style.display = 'none';
      start.style.display = 'block';

      start.addEventListener('click', () => {
        start.style.display = 'none';
        canvas.style.display = 'block';

        const stage = new Stage();

        const bg = new Background();
        const player = new Player();
        const icons = new Icons();
        const bgm = new BGM();

        player.icons = icons;

        stage.addChild(bg);
        stage.addChild(player);
        stage.addChild(icons);
        stage.addChild(bgm);

        Ticker.setFPS(60);
        Ticker.timingMode = Ticker.RAF_SYNCHED;
        Ticker.on('tick', stage);
      });
    },
  );
});
