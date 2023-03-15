import Player from '@vimeo/player';  
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(localStorageKey) || 0);

player.on('timeupdate', throttle(updateCurrentTime, 1000));
function updateCurrentTime(event) {
    localStorage.setItem(localStorageKey, event.seconds)
}



