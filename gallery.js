const video = document.getElementById('video');
const statusCircle = document.getElementById('statusCircle');

// Function to check if the stream is playing or stopped
function checkStreamStatus() {
  if (video.paused || video.ended || video.readyState < 3) {
    // If the video is paused, ended, or not ready to play, set the circle to red
    statusCircle.classList.remove('green');
    statusCircle.classList.add('red');
  } else {
    // If the video is playing, set the circle to green
    statusCircle.classList.remove('red');
    statusCircle.classList.add('green');
  }
}

// Check the stream status every 1 second
setInterval(checkStreamStatus, 1000);

// Initial check in case the stream is already loaded and playing
checkStreamStatus();

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}