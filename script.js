const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

// Dummy data for songs
const songs = [
    {
        title: "JANA SAMJHO NA",
        artist: " Aditya Rikhari",
        src: "WhatsApp Audio 2025-03-09 at 12.19.10_3ae16ac7.mp3",
        cover:"https://c.saavncdn.com/852/Samjho-Na-Hindi-2022-20220209214141-500x500.jpg"},
    {
        title: "SUNIYA SUNIYA",
        artist: " Juss",
        src: "WhatsApp Audio 2025-03-09 at 12.19.10_b2cc3b29.mp3",
        cover: "WhatsApp Image 2025-03-09 at 12.19.11_e83491e8 copy.jpg"
    },
    {
        title: "BELIEVER",
        artist: "Imagine Dragons",
        src: "WhatsApp Audio 2025-03-09 at 12.19.11_cd044106.mp3",
        cover: "https://wallpaperaccess.com/full/3966707.jpg"
    }
];

let currentSongIndex = 0;

function loadSong(song) {
    audio.src = song.src;
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    document.querySelector('.cover img').src = song.cover;
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fa fa-play">p</i>';
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
}

function updateProgress() {
    const progressValue = (audio.currentTime / audio.duration) * 100;
    progress.value = progressValue;
}

function setProgress() {
    const value = progress.value;
    audio.currentTime = (value / 100) * audio.duration;
}

playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('input', setProgress);

loadSong(songs[currentSongIndex]);
