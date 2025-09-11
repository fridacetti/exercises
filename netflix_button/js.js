window.addEventListener("load", sidenVises);

function sidenVises() {
  const progress = document.querySelector(".progress");
  progress.classList.add("animate");

  // når animationen er færdig => udfør handling
  progress.addEventListener("animationend", stopSpillet);

  // hvis musen bevæger sig => spring animation til slut uden handling
  window.addEventListener(
    "mousemove",
    () => {
      // fjern animation og sæt direkte til 100%
      progress.style.animation = "none";
      progress.style.width = "100%";
      // fjern eventlistener så vi ikke kører handling
      stopSpillet();
    },
    { once: true }
  );
}

function stopSpillet() {
  // tydelig handling når animation er færdig
  document.body.style.backgroundColor = "#b6f98cff";
}
