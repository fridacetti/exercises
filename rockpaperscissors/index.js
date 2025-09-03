"use strict";
import { computerGuess, evaluateResult, animationStart, showResults } from "/./utils/utils.js";

let userChoice;
let computerChoice;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

addEventListenersToButtons();
function addEventListenersToButtons() {
  rockBtn.addEventListener("click", userKlik);
  paperBtn.addEventListener("click", userKlik);
  scissorsBtn.addEventListener("click", userKlik);
}
// klik funktion
function userKlik(evt) {
  // console.log("evt", evt);
  console.log("Choice", evt.target.dataset.choice);
  userChoice = evt.target.dataset.choice;
  // console.log("ROCK")
  // userChoice = "rock"
  handleRound();
}

function handleRound() {
  computerChoice = computerGuess();
  animationStart(player1, player2, () => {
    player1.classList.remove("shake");
    player2.classList.remove("shake");
    player1.classList.remove("rock", "paper", "scissors");
    player2.classList.remove("rock", "paper", "scissors");

    player1.classList.add(userChoice);
    player2.classList.add(computerChoice);

    const result = evaluateResult(userChoice, computerChoice);
    showResults(result);
  });
}
