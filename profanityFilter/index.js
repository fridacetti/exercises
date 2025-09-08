"use strict";
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const p = document.getElementById("text");
document.querySelector("button").addEventListener("click", click);

function click() {
  let text = p.innerHTML;
  let foundBadWord = false;

  curseWords.forEach((word) => {
    if (text.includes(word.bad)) {
      foundBadWord = true;
      text = text.replaceAll(word.bad, `<span class="highlight">${word.good}</span>`);
    }
  });
  if (foundBadWord) {
    p.innerHTML = text;
  } else {
    alert("Det er allerede Safe For Work");
  }
}

// let str = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";
// // str = curseWords.replaceAll("bad", "good");
// console.log(str);

// let isClicked = false;
// document.querySelector("button").addEventListener("click", click);

// function click() {
//   if (isClicked === true) {
//     console.log("Jeg har været klikket");
//   } else {
//     isClicked = true;
//   }
// }

// REPLACE
// let str = "It always seems impossible until it's done";
// // const strArr = str.split(" ");
// // console.log(strArr);
// // console.log(strArr.join(" "));

// str = str.replaceAll("impossible", "possible").replaceAll("done", "gone");
// console.log(str);
