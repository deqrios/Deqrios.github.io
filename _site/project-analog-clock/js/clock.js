const hours = document.querySelector(".js-hours");
const minutes = document.querySelector(".js-minutes");
const seconds = document.querySelector(".js-seconds");

function setDate() {
    const current = new Date();

    const hour = current.getHours(); 
    const minute = current.getMinutes();
    const second = current.getSeconds();

    const hourDegree = (hour/12) * 360 + (minute/60) + 90;
    const minDegree = (minute/60) * 360 + (second/60) * 6 + 90;
    const secondDegree = (second/60) * 360 + 90;

    seconds.style.transform = `rotate(${secondDegree}deg)`;
    minutes.style.transform = `rotate(${minDegree}deg)`;
    hours.style.transform = `rotate(${hourDegree}deg)`;
}

function initClock() {
    setDate();
    setInterval(setDate, 1000);
}

initClock();