const vimeoPlEl = document.querySelector('#vimeo-player');

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_PLAYER_KEY = 'videoplayer-current-time';
const throttleTime = 1000;

const player = new Player(vimeoPlEl);
player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(LOCALSTORAGE_PLAYER_KEY, JSON.stringify(time.seconds));
  }, throttleTime)
);

if (localStorage.getItem(LOCALSTORAGE_PLAYER_KEY) !== null) {
  player.setCurrentTime(
    parseInt(localStorage.getItem(LOCALSTORAGE_PLAYER_KEY))
  );
} else {
  player.setCurrentTime(0);
}
