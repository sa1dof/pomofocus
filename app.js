"use strict";
const timer = document.querySelector(".main-time");
const actionBtns = document.querySelectorAll(".main-menu-item");
const startBtn = document.getElementById("startBtn");
const shortBreak = document.querySelector(".shortBreak");
const longBreak = document.querySelector(".longBreak");
const pomodoro = document.querySelector(".pomodoro");

shortBreak.addEventListener("click", function () {
  document.body.style.background = "blue";
  document.querySelector(".main").style.background = "darkblue";
});
