const body = document.querySelector("body");
const MAX = 3;

function loadBackground(random) {
    const image = new Image();
    image.src = `images/${random + 1}.jpg`;
    image.classList.add("bg");
    body.prepend(image);
}

function genRandom() {
    const id = Math.floor(Math.random() * MAX);
    return id;
}

function initBackground() {
    const rd = genRandom();
    loadBackground(rd);
}

initBackground();