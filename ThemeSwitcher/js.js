document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".theme");
  const body = document.body;

  select.addEventListener("change", (event) => {
    body.setAttribute("data-theme", event.target.value);
  });
});
