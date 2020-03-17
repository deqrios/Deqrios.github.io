const form = document.querySelector(".form");
const username = document.querySelector(".username");
const input = document.querySelector("input");

const USER = "current";
const SHOW = "show";

function saveName(current) {
    localStorage.setItem(USER, current);
}

function loadHello(current) {
    form.classList.remove(SHOW);
    username.classList.add(SHOW);
    username.innerText = `Hello ${current}!`;
}

function submitHandler(event) {
    event.preventDefault();
    const current = input.value;
    loadHello(current);
    saveName(current);
}

function askName() {
    form.classList.add(SHOW);
    form.addEventListener("submit", submitHandler);
}

function getName() {
    const current = localStorage.getItem(USER);

    if (current == null) {
        askName();
    } else {
        loadHello(current);
    }
}

function initName() {
    getName();
}

initName();