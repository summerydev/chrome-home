'use strict'
// html에서 id 가져옴
const clock = document.getElementById("clock");

// html에 Text 초기화
clock.innerText = "";


function getClock() {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());
  clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}

getClock();
setInterval(getClock, 1000);

// "1".padStart(2, "0") => 2글자 아니면 앞에 0 추가해 2자리로
// => "01"

// "1".padEnd(2, "0") => 2글자 아니면 뒤에 0 추가해 2자리로
// => "10"