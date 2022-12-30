import throttle from 'lodash.throttle';

import Player from '@vimeo/player';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

const videoTime = localStorage.getItem(STORAGE_KEY);

if (videoTime) {
  console.log('videoTime', videoTime);
  player.setCurrentTime(videoTime);
}
