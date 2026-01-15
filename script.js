document
  .getElementById("opiniao-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("opiniao-form").reset();

    alert("Opinião enviada com sucesso!");
  });

document
  .getElementById("mostrarFormulario")
  .addEventListener("click", function () {
    var formulario = document.querySelector(".form-container");
    if (
      formulario.style.display === "none" ||
      formulario.style.display === ""
    ) {
      formulario.style.display = "block";
    } else {
      formulario.style.display = "none";
    }
  });
