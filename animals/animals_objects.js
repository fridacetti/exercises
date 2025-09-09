"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

// Prototype
const Animal = {
  name: "",
  desc: "",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");
  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // Create new object
    const animal = Object.create(Animal);

    // extract data from json Object
    const fullname = jsonObject.fullname;
    const firstSpace = fullname.indexOf(" ");
    const secondSpace = fullname.indexOf(" ", firstSpace + 1);
    const lastSpace = fullname.indexOf(" ");

    const name = fullname.substring(0, firstSpace);
    const desc = fullname.substring(secondSpace + 1, lastSpace);
    const type = fullname.substring(lastSpace + 1);

    // console.log(`name: _${name}_ desc: _${desc}_ type: _${type}_`);

    // put cleaned data into newly created object
    animal.name = name;
    animal.desc = desc;
    animal.type = type;
    animal.age = jsonObject.age;

    // add the object to the global array
    allAnimals.push(animal);
  });

  displayList();
}

function displayList() {
  // ryd listen
  document.querySelector("#list tbody").innerHTML = "";

  // byg ny liste
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // lav klon
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // indsæt data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // tilføj til listen
  document.querySelector("#list tbody").appendChild(clone);
}
