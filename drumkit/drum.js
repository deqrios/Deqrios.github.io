const keys = Array.from(document.querySelectorAll(".js-key"));  //Array의 내장함수 from으로 js-key들을 다 갖고옴.

function playSound(event) {     //키 값을 입력받았을 때 처리하는 핸들러
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);     //입력된 키 값을 오디오에 대조.
    const keyEffect = document.querySelector(`div[data-key="${event.keyCode}"]`);
    
    if(audio){          //오디오 객체가 존재한다면 실행.
    audio.currentTime = 0;      //currentTime을 0으로 초기화. (초기화하지 않으면 이어서 재생 됨)
    audio.play();
    keyEffect.classList.add("effect");  //이펙트 추가.
    }
}

function removeTransition(event) {      //이벤트 변화가 끝났을 때 이펙트 제거.
    event.target.classList.remove("effect");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition))    //각 js-key들에 이벤트 리스터 등록.

window.addEventListener("keydown", playSound);      //window객체에 이벤트 리스너 등록.
