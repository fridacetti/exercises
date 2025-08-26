// Fra undervisning
console.log("Fra undervisning");
console.log("Tilfældigt tal " + Math.random() * 10); // * 10 giver mere end mellem 0-1, brøk

console.log("Tilfældigt tal " + Math.floor(Math.random() * 10)); //runder nedaf, et decimal, ikke en brøk

console.log("Tilfældigt tal " + Math.ceil(Math.random() * 5)); // Runder op

console.log("Tilfældigt tal " + Math.round(Math.random() * 10)); //  Runder som man normalt gør

// OPGAVE 1 + 2
console.log("OPGAVER");

console.log("Tilfældigt tal " + Math.round(Math.random() * 101)); //  Runder som man normalt gør
document.querySelector("#p1").textContent = "Tilfældigt tal " + Math.round(Math.random() * 100);

// Gæt et tal

window.addEventListener("load", sidenVises);
let tal = Math.round(Math.random() * 101);
console.log("Gæt et tal " + tal);

function sidenVises() {
  document.querySelector("#check").addEventListener("click", clickCheck);
}

function clickCheck() {
  let gæt = Number(document.querySelector("#inputTal").value);
  if (gæt === tal) {
    console.log("Rigtigt!");
    document.querySelector("#p3").textContent = "Rigtigt!";
  } else if (gæt < tal) {
    document.querySelector("#p3").textContent = "For lavt!";
  } else if (gæt > tal) document.querySelector("#p3").textContent = "For højt!";
}
