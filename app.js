"use strict";
const timer = document.querySelector(".main-time");
const actionBtns = document.querySelectorAll(".main-menu-item");
const startBtn = document.getElementById("startBtn");
const shortBreak = document.querySelector(".shortBreak");
const longBreak = document.querySelector(".longBreak");
const pomodoro = document.querySelector(".pomodoro");

pomodoro.addEventListener("click", () => {
  pomodoro.style.backgroundColor = "#ff8a8a";
  document.body.style.backgroundColor = "#ff4b4b";
  timer.textContent = "25:00";
});

longBreak.addEventListener("click", () => {
  pomodoro.style.backgroundColor = "#406b8f";
  document.body.style.backgroundColor = "#225680";
  timer.innerHTML = "15:00";
});

shortBreak.addEventListener("click", () => {
  pomodoro.style.backgroundColor = "#89c2f0";
  document.body.style.backgroundColor = "#5faeee";
  timer.innerHTML = "05:00";
});
