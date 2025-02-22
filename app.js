const audio = document.querySelector("#audio");
const seekbar = document.querySelector("#seek-bar");
const songTitle = document.querySelector("#song-title");
const playButton = document.querySelector(".controls button:nth-child(2)");
const albumCover = document.querySelector("#album-cover");

const songs = ["songs/Attention.mp3","songs/Baatein Ye Kabhi Na.mp3","songs/Chahun Main Ya Naa.mp3","songs/Cheap Thrills.mp3","songs/Dekha Tenu.mp3","songs/Die With a Smile.mp3","songs/Kaise Hua.mp3","songs/Let Me Down Slowly.mp3","songs/On & On.mp3","songs/Pal.mp3"];
const Covers = ["covers/cover1.jpg","covers/cover2.jpg","covers/cover3.jpg","covers/cover4.jpg","covers/cover5.jpg","covers/cover6.jpg","covers/cover7.jpg","covers/cover8.jpg","covers/cover9.jpg","covers/cover10.jpg"];

let songIndex = 0 ;

function loadSong(index) {
    audio.src = songs[index];
    let songName = songs[index].split("/").pop().replace(".mp3","");
    songTitle.innerText = `Playing : ${songName}`;
    albumCover.src = Covers[index];
    audio.play();
    playButton.innerText = "⏸";  
}

audio.addEventListener("ended" ,()=>{
    nextsong();
});

function togglePlayPause() {
    if(audio.paused) {
        audio.play();
        playButton.innerText =  "⏸";
    } else {
        audio.pause();
        playButton.innerText = "▶";
    }
}

function nextsong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
}

function prevsong() {
    songIndex = (songIndex - 1 + songs.length ) % songs.length;
    loadSong(songIndex);
}

audio.addEventListener("timeupdate", ()=>{
    seekbar.value = (audio.currentTime / audio.duration ) * 100;
});

seekbar.addEventListener("input",()=>{
    audio.currentTime = (seekbar.value / 100 ) * audio.duration;
});

loadSong(songIndex);