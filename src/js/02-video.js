import Player from '@vimeo/player';
let seconds = 0;
import throttle from 'lodash.throttle'


const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
 


const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on('play', function() {
    console.log('playing');
})
iframePlayer.on('timeupdate', throttle(addTimecode, 1000));
// const throttledAddTimecode = throttle(addTimecode, 1000)
function addTimecode (data) {
    seconds = data.seconds;
    save("videoplayer-current-time", seconds)
};

if (load("videoplayer-current-time")) {
iframePlayer.setCurrentTime(load("videoplayer-current-time"))
}
