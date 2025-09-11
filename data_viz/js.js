"use strict";

// Finder <span> i HTML, så vi kan ændre teksten indeni
const queue = document.getElementById("tal");

// Kører funktionen én gang med det samme
getJSON();

// Kører funktionen igen hvert 10. sekund (10000 ms)
setInterval(getJSON, 10000);

async function getJSON() {
  // Henter data fra API’et
  const response = await fetch("https://kea-alt-del.dk/kata-distortion/");

  // Fortæller at svaret skal være  JSON
  const data = await response.json();

  // Skriver tallet fra "inQueue" ind i <span>
  queue.textContent = data.inQueue;

  // Genererer en tilfældig farve (0–360 i farvecirklen)
  const color = Math.floor(Math.random() * 360);

  // Skifter body’s baggrundsfarve til den nye farve
  document.body.style.backgroundColor = `hsl(${color}, 70%, 50%)`;
}
