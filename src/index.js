import Stage from './Stage';
import Icons from './Icons';
import Player from './Player';
import Background from './Background';

const { Ticker } = createjs;

const main = () => {
  const stage = new Stage();

  const bg = new Background();
  const player = new Player();
  const icons = new Icons();

  player.icons = icons;

  stage.addChild(bg);
  stage.addChild(player);
  stage.addChild(icons);

  Ticker.setFPS(60);
  Ticker.timingMode = Ticker.RAF_SYNCHED;
  Ticker.on('tick', stage);
};

main();
