const canvas = document.querySelector(".js-canvas");
const ctx = canvas.getContext("2d");

//  캔버스 초기화 작업.
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle  = DEFAULT_COLOR;
ctx.lineWidth = 2.5;

function onMouseMove(event) {   //  마우스의 좌표값을 받아서, drawing의 상태에 따라 색을 채움.
    const X = event.offsetX;
    const Y = event.offsetY;
    if(!drawing) {
        ctx.beginPath();
        ctx.moveTo(X,Y);
    } else {
        ctx.lineTo(X,Y);
        ctx.stroke();
    }
}

function startDrawing(event) {
    drawing = true;
}

function stopDrawing(event) {
    drawing = false;
}

function onMouseUp(event) {
    stopDrawing();
}

function canvasClickHandler(event) {    //  painting의 상태에 따라 캔버스 전체 배경을 채움.
    if(painting) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

//   이벤트 실행부.
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopDrawing);
    canvas.addEventListener("click", canvasClickHandler);
}