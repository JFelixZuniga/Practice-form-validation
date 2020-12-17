/* ------------- Variables ------------- */

const btnEnviar = document.querySelector("#enviar");

const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListeners();
function eventListeners() {
  //Cuando la App arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);

  //Campos del formulario
  email.addEventListener("blur", validarFormulario); //"blur" es el evento que ocurre al quitar el focus sobre el input
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
  console.log(e.target.value);
  if (e.target.value.lenght > 0) {
    console.log("si hay algo");
  } else {
    // e.target.style.borderBottomColor = "red";
    e.target.classList.add("border", "border-red-500");
  }
}
