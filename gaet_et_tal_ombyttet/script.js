("use strict");
let min = 0;
let max = 101;
let computerChoice;

const startBtn = document.querySelector("#start");
const hojBtn = document.querySelector("#hoj");
const lavBtn = document.querySelector("#lav");
const rightBtn = document.querySelector("#right");

hojBtn.addEventListener("click", hojClick);
lavBtn.addEventListener("click", lavClick);
rightBtn.addEventListener("click", rightClick);
startBtn.addEventListener("click", startSpillet);

function startSpillet() {
  computerChoice = Math.floor((min + max) / 2);
  console.log("computerChoice", computerChoice);
  h2.textContent = computerChoice;
}
//Funktion til alle knapper
function lavClick() {
  console.log("For lavt");
  min = computerChoice;
  startSpillet();
}
function hojClick() {
  console.log("For højt");
  max = computerChoice;
  startSpillet();
}

function rightClick() {
  console.log("Rigtig");
  reset();
  h2.textContent = " Du vandt";
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
}

function reset() {
  min = 0;
  max = 101;
  computerChoice = 0;
}
