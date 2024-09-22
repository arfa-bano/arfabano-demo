// Audio controls functionality
const audio = new Audio('song1.mp3');
const playPauseBtn = document.getElementById('play-pause');
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = '⏯';
  } else {
    audio.play();
    playPauseBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
});

document.getElementById('next').addEventListener('click', () => {
  // Next track logic
});

document.getElementById('prev').addEventListener('click', () => {
  // Previous track logic
});

// Track selection
const tracks = document.querySelectorAll('.track');
tracks.forEach(track => {
  track.addEventListener('click', () => {
    audio.src = track.dataset.src;
    audio.play();
    playPauseBtn.textContent = '⏸';
    document.querySelector('.current-track-title').textContent = track.querySelector('.track-title').textContent + " - " + track.querySelector('.artist-name').textContent;
  });
});
