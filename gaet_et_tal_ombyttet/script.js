("use strict");
import { computerGaet, minChoice, maxChoice, resetGaet, enableButtons, disableButtons, updateText } from "/../utils/utils.js";

const startBtn = document.querySelector("#start");
const hojBtn = document.querySelector("#hoj");
const lavBtn = document.querySelector("#lav");
const rightBtn = document.querySelector("#right");
const h2 = document.querySelector("h2");

disableButtons(hojBtn, lavBtn, rightBtn);

hojBtn.addEventListener("click", hojClick);
lavBtn.addEventListener("click", lavClick);
rightBtn.addEventListener("click", rightClick);
startBtn.addEventListener("click", startSpillet);

function startSpillet() {
  disableButtons(startBtn);
  enableButtons(hojBtn, lavBtn, rightBtn);
  const guess = computerGaet();
  console.log("computerChoice", guess);
  updateText(h2, guess);
}
//Funktion til alle knapper

function hojClick() {
  console.log("For højt");
  maxChoice();
  startSpillet();
}
function lavClick() {
  console.log("For lavt");
  minChoice();
  startSpillet();
}
function rightClick() {
  console.log("Rigtig");
  reset();
  updateText(h2, " Du vandt!");
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
}

function reset() {
  resetGaet();
  enableButtons(startBtn);
  disableButtons(hojBtn, lavBtn, rightBtn);
}
