const player = document.querySelector(".js-player");
const video = player.querySelector(".js-video");
const toggle = player.querySelector(".js-toggle");
const progress = player.querySelector(".js-progress");
const progressBar = player.querySelector(".js-pass-progress");
const dataSkip = player.querySelectorAll("[data-skip]");
const range = player.querySelectorAll(".js-slider");

let mouseDown = false;

function moveProgress(event) {
    const time = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = time;
}

function changeRange(event) {
    video[this.name] = this.value;
}

function skipVideo(event) {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress(event) {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function changeButton(event) {
    const icon = this.paused ? ">" : "||";
    toggle.textContent = icon;
}

function togglePlay(event) {
    const method = video.paused ? "play" : "pause";
    video[method]();
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", changeButton);
video.addEventListener("pause", changeButton);
video.addEventListener("timeupdate", handleProgress);
dataSkip.forEach(button => button.addEventListener("click", skipVideo));
range.forEach(range => range.addEventListener("change", changeRange));
range.forEach(range => range.addEventListener("mousemove", changeRange));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
progress.addEventListener("click", moveProgress);
progress.addEventListener("mousemove", event => mouseDown && moveProgress(event));
