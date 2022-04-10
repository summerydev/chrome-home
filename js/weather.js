"use strict";

const API_KEY = "0447f6e225222d032546340b46dfc90b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // fetch => promise()
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span");
      if(data.weather[0].main === "Clouds"){
        weather.innerText = `${data.name} ${data.main.temp}°C Clouds☁️`;
      }else if(data.weather[0].main === "Rain"){
        weather.innerText = `${data.name} ${data.main.temp}°C Rain☔`;
      }else if(data.weather[0].main === "Snow"){
        weather.innerText = `${data.name} ${data.main.temp}°C Snow❄️`;
      }else{
        weather.innerText = `${data.name} ${data.main.temp}°C ${data.weather[0].main}`;
      }
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you 😅");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);