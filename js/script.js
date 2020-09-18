/** @format */

let playbutton = document.getElementById("play");
let music = document.getElementById("music");
let musicImg = document.getElementById("musicImg");

playbutton.addEventListener("click", playaudio);
let musicplaying = false;

function playaudio() {
  if (musicplaying == false) {
    music.play();
    musicplaying = true;
    musicImg.classList.add("animate");
    playbutton.classList.remove("fa-play-circle-o");
    playbutton.classList.add("fa-pause-circle-o");
  } else {
    music.pause();
    musicplaying = false;
    musicImg.classList.remove("animate");

    playbutton.classList.remove("fa-pause-circle-o");
    playbutton.classList.add("fa-play-circle-o");
  }
}
