("use strict");

setInterval(genererSojle, 1000);

function genererSojle() {
  console.log("genererSojle");
  const list = document.querySelector("ul");
  const li = document.createElement("li");
  li.style.setProperty("--height", Math.round(Math.random() * 101));
  list.appendChild(li);
}

setInterval(() => {
  const number_arr = document.querySelectorAll("li");

  if (number_arr.length > 20) {
    number_arr[0].remove();
  }
});
