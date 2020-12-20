/* ------------- Variables ------------- */

const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListeners();
function eventListeners() {
  //Cuando la App arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);

  //Campos del formulario
  //"blur" es el evento que ocurre al quitar el focus sobre el input
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);
}

/* ------------- Fnciones ------------- */

function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

//Valida el formulario
function validarFormulario(e) {
  if (e.target.value.lenght > 0) {
    console.log("si hay algo");
  } else {
    // e.target.style.borderBottomColor = "red";
    e.target.classList.add("border", "border-red-500");

    mostrarError();
  }
}

function mostrarError() {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = "Todos los campos son obligatorios";
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );

  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }

}
