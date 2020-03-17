const weather = document.querySelector(".weather");
const API_KEY = config.API_KEY;
const COORDS = "coords";

function getWeather(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric
    `).then(function(response) {
        return response.json();
    }).then(function(json) {
        // 우리가 원하는 데이터 로딩이 끝났음!
        console.log(json);
        const temp = json.main.temp;
        const city = json.name;
        const wth = json.weather[0].main;
        weather.innerText = `${city} ${temp}도 ${wth}`;
    });
}

function saveCoords(userLocation) {
    localStorage.setItem(COORDS, JSON.stringify(userLocation));
}

function errorHandler() {
    alert("Sorry!");
}

function requestHandler(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const userLocation = {
        // 저장하려는 키랑 벨류 이름이 똑같으면 생략할 수 있음!
        latitude,
        longitude
    };

    saveCoords(userLocation);
}

function askCoords() {
    navigator.geolocation.getCurrentPosition(requestHandler, errorHandler);
}

function getCoords() {
    const loaded = localStorage.getItem(COORDS);

    if (loaded === null) {
        askCoords();
    } else {
        const parsed = JSON.parse(loaded);
        getWeather(parsed.latitude, parsed.longitude);
    }
}

function initWeather() {
    getCoords();
}

initWeather();