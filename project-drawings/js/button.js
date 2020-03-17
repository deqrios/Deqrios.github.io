const option = document.querySelector(".js-option");
const save = document.querySelector(".js-save");

function optionClickHandler(event) {    //버튼 내부 text 수정.
    if(painting) {
        painting = false;
        option.innerText = "Paint";
    } else {
        painting = true;
        option.innerText = "Line";
    }
}

function saveClickHandler(event) {      //이미지 다운로드.
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "Drawings @FloatFerry";
    link.click();
}

if(option) {
    option.addEventListener("click", optionClickHandler);
}

if(save) {
    save.addEventListener("click", saveClickHandler);
}