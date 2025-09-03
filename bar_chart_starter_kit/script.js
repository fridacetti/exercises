("use strict");

// Kalder funktionen 'genererSojle' hvert sekund (1000 ms)
setInterval(genererSojle, 1000);

function genererSojle() {
  console.log("genererSojle");
  const list = document.querySelector("ul"); // Finder den første <ul> i dokumentet/DOM'en
  const li = document.createElement("li"); // Opretter et nyt <li>-element
  li.style.setProperty("--height", Math.round(Math.random() * 101)); // Sætter en CSS-variabel '--height' til en tilfældig værdi mellem 0 og 100
  list.appendChild(li); // Tilføjer det nye <li>-element til listen (<ul>)
}

setInterval(() => {
  const number_arr = document.querySelectorAll("li"); // Finder alle <li>-elementer
  // Hvis der er mere end 20 elementer, fjernes det første (ældste) element
  if (number_arr.length > 20) {
    number_arr[0].remove();
  }
});
