import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const update = function (data) {
  const time = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(`${time}`));
};

player.on('timeupdate', throttle(update, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);
player.setCurrentTime(parsedTime || 0);
