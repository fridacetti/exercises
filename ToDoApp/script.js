// henter elementer i HTML
const submit = document.querySelector("#submit");
const todoNameInput = document.querySelector("#todo_name_input");
const todoContainer = document.querySelector("#todo_container");
const doneContainer = document.querySelector("#done_container");

// Når siden loader: hent HTML fra localStorage
window.addEventListener("load", () => {
  todoContainer.innerHTML = localStorage.getItem("todoHTML") || "";
  doneContainer.innerHTML = localStorage.getItem("doneHTML") || "";
  // genskab click-event på li’er
  addClickListeners();
});

submit.addEventListener("click", subMitTodo);

function subMitTodo() {
  console.log("det virker");

  // laver et <li>-element
  const li = document.createElement("li");

  // Sætter HTML-indholdet i <li> (overskrift + checkbox)
  li.innerHTML = `<input type="checkbox"> &nbsp <h2>${todoNameInput.value}</h2> &nbsp &nbsp`;

  // Opretter slet-knap
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Slet";
  deleteBtn.classList.add("delete-btn"); // til styling
  li.appendChild(deleteBtn);

  // Klik-event på slet-knappen
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // så checkboxens flytte-funktion ikke trigges
    li.remove(); // fjern li fra DOM
    saveHTML(); // opdater localStorage
  });

  // Tilføjer <li> til to-do listen
  todoContainer.appendChild(li);

  // tilføj klik på denne li
  addClickListener(li);

  // gem den nye HTML i localStorage
  saveHTML();
}

function addClickListener(li) {
  const checkbox = li.querySelector("input[type=checkbox]");

  // Checkbox styrer flytningen
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      // flyt til done
      if (li.parentElement === todoContainer) {
        todoContainer.removeChild(li);
        doneContainer.appendChild(li);
      }
    } else {
      // flyt tilbage til todo og fjern flueben
      if (li.parentElement === doneContainer) {
        doneContainer.removeChild(li);
        todoContainer.appendChild(li);
        checkbox.checked = false; // fjern flueben
      }
    }
    saveHTML();
  });
}

function addClickListeners() {
  // finder alle li’er i begge lister og giver dem klik-event igen
  document.querySelectorAll("#todo_container li, #done_container li").forEach((li) => {
    addClickListener(li);
  });
}

function saveHTML() {
  // gem nuværende HTML i localStorage
  localStorage.setItem("todoHTML", todoContainer.innerHTML);
  localStorage.setItem("doneHTML", doneContainer.innerHTML);
}
