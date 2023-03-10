const vimeoPlEl = document.querySelector('#vimeo-player');

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_KEY = 'videoplayer-current-time';

const player = new Player(vimeoPlEl);
player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(PLAYER_KEY, JSON.stringify(time.seconds));
  }, 1000)
);

if (localStorage.getItem(PLAYER_KEY) !== null) {
  player.setCurrentTime(parseInt(localStorage.getItem(PLAYER_KEY)));
} else {
  player.setCurrentTime(0);
}
