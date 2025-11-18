const modal = document.querySelector("#modal");
const modalTrigger = document.querySelector("#modal-trigger");

modalTrigger.addEventListener("click", function () {
  //Añade un gestor de evento al click
  modal.classList.remove("hidden");
});

modal.addEventListener("click", function (event) {
  //event.target es el objetivo del evento, en este caso es el elemento html donde hemos hecho el click

  if (event.target.classList.contains("modal-background")) {
    modal.classList.add("hidden");
  }
});

