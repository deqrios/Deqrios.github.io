const color = document.getElementsByClassName("js-color");
const range = document.querySelector(".js-range");

function colorHandler(event) { //  이벤트가 발생한 객체의 배경색을 가져와서 DEFAULT_COLOR를 변경.
    const picked = event.target.style.backgroundColor;
    ctx.strokeStyle = picked;
    ctx.fillStyle = picked;
}

function rangeChangeHandler(event) { //   rangebar의 value를 받아와, 라인의 굵기 설정.
    const size = event.target.value;
    ctx.lineWidth = size;
}

if(color) {
    Array.from(color).forEach(color =>
        color.addEventListener("click", colorHandler)
    )
}

if(range) {
    range.addEventListener("input", rangeChangeHandler);
}