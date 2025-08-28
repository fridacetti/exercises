"use strict";
let userChoice;
let computerChoice;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

addEventListenersToButtons();
function addEventListenersToButtons() {
  rockBtn.addEventListener("click", rockClick);
  paperBtn.addEventListener("click", paperClick);
  scissorsBtn.addEventListener("click", scissorsClick);
}
//Funktion til alle knapper
function rockClick() {
  console.log("ROCK");
  userChoice = "rock";
  computerGuess();
}
function paperClick() {
  console.log("PAPER");
  userChoice = "paper";
  computerGuess();
}
function scissorsClick() {
  console.log("SCISSORS");
  userChoice = "scissors";
  computerGuess();
}

//Computerens gæt
function computerGuess() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choiceArray[randomNum];
  console.log("computerChoice", computerChoice);
  console.log(userChoice);
  animationStart();
}

//Shake animation start
function animationStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", animationEnd);
  player2.addEventListener("animationend", animationEnd);
}

//Shake animation slut
function animationEnd() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);

  showResults();
}

//Evaluering af resultat
function showResults() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  if (userChoice === computerChoice) {
    document.querySelector("#draw").classList.remove("hidden");
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock")) {
    document.querySelector("#win").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
}
