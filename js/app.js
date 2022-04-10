"use strict";

const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");

const logintInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

// string 변수로 저장
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// functions
function onLoginSubmit(event) {
  //event.preventDefault(); // preventDefault() : 기본 동작을 막음.
  //submit -> 페이지 새로고침 -> 막음
  //console.dir(logintInput.value);
  const username = logintInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  const hours = String(date.getHours());
  if (hours >= 5 && hours < 12) {
    greeting.innerText = `Good Morning, ${username}`;
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText = `Good Afternoon, ${username}`;
  } else if (hours >= 18 && hours < 20) {
    greeting.innerText = `Good Evening, ${username}`;
  } else {
    greeting.innerText = `Good Night, ${username}`;
  }

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutSubmit(event){
  localStorage.removeItem(USERNAME_KEY);
}

// check
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else {
  //show the greetings
  paintGreetings(savedUsername);
}

if (savedUsername !== null) {
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.addEventListener("submit", onLogoutSubmit);
} 