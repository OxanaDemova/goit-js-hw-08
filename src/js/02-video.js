import Player from '@vimeo/player';


const throttle = require("lodash.throttle");

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const videoPlayer = document.querySelector("#vimeo-player");

const player = new Player(videoPlayer);

videoPlayer.addEventListener("load", onPlayerLoad);
player.on("timeupdate", throttle(onPlayerRunning, 1000));

function onPlayerRunning({ seconds }) {

  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onPlayerLoad() {
  try {
    const lastVideoPosition = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    player
      .setCurrentTime(lastVideoPosition)
        .then(seconds => (seconds = lastVideoPosition))
        
      .catch(error => {
        console.log(error.name);
        console.log(error.message);
      });

  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}


