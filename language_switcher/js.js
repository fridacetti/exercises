"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

//vi let locale så den kan ændres mellem da og de
let locale = "da";
//nu gør vi så teksten ændres nå man bruger selectoren
const select = document.querySelector(".sprog");
//vi laver en eventlistener på selectoren så den kan lytte efter ændringer
select.addEventListener("change", (change) => {
  //nedenfo r ændrer vi locale til det sprog  ved at tage fat i value
  locale = change.target.value;
  updateTexts();
});

function updateTexts() {
  //her laver vi en loop der går igennem alle objekterne i arrayet og ændrer teksten
  texts[locale].texts.forEach((obj) => {
    document.querySelector(obj.location).textContent = obj.text;
  });
}

// Klaus' måde
console.log(texts[locale].texts);
switchLanguage();
function switchLanguage() {
  texts[locale].texts.forEach((each) => {
    console.log("each", each);
    document.querySelector(each.location).textContent = each.text;
  });
}
document.querySelector("header").textContent = "tekst at sætte ind";
