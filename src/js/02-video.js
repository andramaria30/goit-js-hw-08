

import '../css/common.css';
 import Player from './@vimeo/player';


import {throttle} from 'lodash/throttle';


const keystorage = "video-player-current-time";
console.log(keystorage);



const iframe = document.getElementById("vimeo-player");

const player = new Player(iframe);

function onPlay({seconds}) {

    localStorage.setItem(keystorage,seconds)
};
    
    
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(keystorage) || 0);












