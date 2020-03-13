const canvas = document.querySelector(".js-canvas");
const ctx = canvas.getContext("2d");
const color = document.getElementsByClassName("js-color");
const range = document.querySelector(".js-range");
const option = document.querySelector(".js-option");
const save = document.querySelector(".js-save");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 450;
const DEFAULT_COLOR = "#cdcefc";

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle  = DEFAULT_COLOR;
ctx.lineWidth = 2.5;
console.log(ctx);

let drawing = false;
let painting = false;

function onMouseMove(event) {
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

function colorHandler(event) {
    const picked = event.target.style.backgroundColor;
    ctx.strokeStyle = picked;
    ctx.fillStyle = picked;
}

function rangeChangeHandler(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function optionClickHandler(event) {
    if(painting) {
        painting = false;
        option.innerText = "Paint";
    } else {
        painting = true;
        option.innerText = "Line";
    }
}

function canvasClickHandler(event) {
    if(painting) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function saveClickHandler(event) {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "Drawings @FloatFerry";
    link.click();
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopDrawing);
}

if(color) {
    Array.from(color).forEach(color =>
        color.addEventListener("click", colorHandler)
    )
}

if(range) {
    range.addEventListener("input", rangeChangeHandler);
}

if(option) {
    option.addEventListener("click", optionClickHandler);
}

if(canvas){
    canvas.addEventListener("click", canvasClickHandler);
}

if(save) {
    save.addEventListener("click", saveClickHandler);
}