const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const currentSong = document.getElementById("current");

const songs = [
    'song1.mp3' ,
    'song2.mp3' , 
    'song3.mp3'];

let currentSongInd = 0;

function playSong(){
    audio.src = songs[currentSongInd]
    audio.play();
    currentSong.textContent = songs[currentSongInd];

}

playButton.addEventListener("click", () => {
    audio.play();
});

pauseButton.addEventListener("click", () =>{
    audio.pause();
});

nextButton.addEventListener("click", () =>{
    currentSongInd = (currentSongInd+1)%songs.length;
    playSong();
});

prevButton.addEventListener("click", () =>{
    currentSongInd = (currentSongInd-1+songs.length)%songs.length;
    playSong();
});

playSong();