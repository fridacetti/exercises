export function getRandomNum() {
  return Math.round(Math.random() * 101);
}

// Rock, paper, scissors

export function computerGuess() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choiceArray[randomNum];
}

export function evaluateResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "draw";
  if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    return "win";
  }
  return "lose";
}

export function animationStart(player1, player2, callback) {
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", callback, { once: true });
  player2.addEventListener("animationend", callback, { once: true });
}

export function showResults(result) {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  if (result === "win") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (result === "lose") {
    document.querySelector("#lose").classList.remove("hidden");
  } else {
    document.querySelector("#draw").classList.remove("hidden");
  }
}

// gæt et tal ombyttet

export let min = 0;
export let max = 101;
export let computerChoice;

export function computerGaet() {
  computerChoice = Math.floor((min + max) / 2);
  return computerChoice;
}
export function minChoice() {
  min = computerChoice;
}

export function maxChoice() {
  max = computerChoice;
}

export function resetGaet() {
  min = 0;
  max = 101;
  computerChoice = 0;
}

export function enableButtons(...buttons) {
  buttons.forEach((btn) => (btn.diabled = false));
}
export function disableButtons(...buttons) {
  buttons.forEach((btn) => (btn.diabled = true));
}
export function updateText(element, value) {
  element.textContent = value;
}
