"use strict";
const timer = document.querySelector(".main-time");
const actionBtns = document.querySelectorAll(".main-menu-item");
const startBtn = document.getElementById("startBtn");
const shortBreak = document.querySelector(".shortBreak");
const longBreak = document.querySelector(".longBreak");
const pomodoro = document.querySelector(".pomodoro");

let time = 1500;
let intervalID;

shortBreak.addEventListener("click", function () {
  document.body.style.background = "blue";
  document.querySelector(".main").style.background = "darkblue";
  startBtn.style.color = "blue";
});

longBreak.addEventListener("click", function () {
  document.body.style.background = "yellow";
  document.querySelector(".main").style.background = "rgb(192, 190, 32)";
  startBtn.style.color = "yellow";
});

pomodoro.addEventListener("click", function () {
  document.body.style.background = "rgb(186, 73, 73)";
  document.querySelector(".main").style.background = "#c15c5c";
  startBtn.style.color = "rgb(186, 73, 73)";
});

function timeConvertor(time) {
  const minute = Math.floor(time / 60);
  const second = time % 60;

  let result = (minute < 10 ? "0" : "") + minute;
  result += ":" + (second < 10 ? "0" : "") + second;

  return result;
}

function handleStart() {
  const isActive = startBtn.classList.contains("active");
  startBtn.classList.toggle("active");
  startBtn.innerText = isActive ? "START" : "PAUSE";

  const value = timeConvertor(time);
  console.log("value = ", value);
  if (isActive) {
    clearInterval(intervalID);
  } else {
    intervalID = setInterval(() => {
      time--;
      if (time < 0) {
        return;
      }
      timer.innerText = timeConvertor(time);
    }, 1000);
  }
}
