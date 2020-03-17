const clockContainer = document.querySelector(".clock");
const clockText = clockContainer.querySelector("h1");   //.clock내의 h1을 불러옴. // 이런 방식으로 의존성 배제가능.

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    clockText.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${secondes < 10 ? `0${secondes}` : secondes}`;
}

function initClock() {
    getTime();  //선 조치!
    setInterval(getTime, 1000);
}

initClock();