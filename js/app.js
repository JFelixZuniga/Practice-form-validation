/* ------------- Variables ------------- */
//Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formulario = document.querySelector("#enviar-mail");
//Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
  //Cuando la App arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);

  //Campos del formulario
  //"blur" es el evento que ocurre al quitar el focus sobre el input
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

  //Reinicia el formulario
  btnReset.addEventListener("click", resetearFormulario);

  //Enviar email
  formulario.addEventListener("button", enviarEmail);
}

/* ------------- Funciones ------------- */

function iniciarApp() {
  btnEnviar.disabled = true; //Inhabilitams un btn
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

//Valida el formulario
function validarFormulario(e) {
  if (e.target.value.lenght > 0) {
    //Eliminar los errores al compltar los campos
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }

    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");
  } else {
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");
    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }

      e.target.classList.remove("border", "border-red-500");
      e.target.classList.add("border", "border-green-500");
    } else {
      e.target.classList.remove("border", "border-green-500");
      e.target.classList.add("border", "border-red-500");
      mostrarError("Email no válido");
    }
  }

  if (er.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    btnEnviar.disabled = false; //Inhabilitams un btn
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  } else {
    console.log("hay campos por validar");
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
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

//Envía el Email
function enviarEmail(e) {
  e.preventDefault();
  //Mostrar el spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  //Después de 3 segundos ocultar el spinner y mostrar el mensaje
  setTimeout(() => {
    spinner.style.display = "none";

    //Mensaje de envío satisfactorio
    const parrafo = document.createElement("p");
    parrafo.textContent = "Mensaje enviado correctamente";
    parrafo.classList.add(
      "text-center",
      "my-10",
      "p-2",
      "bg-green-500",
      "text-white",
      "font-bold",
      "uppercase"
    );

    //Insertamos el párrafo antes del spinner
    formulario.insertBefore(parrafo, spinner);

    setTimeout(() => {
      //Eliminaos el mensaje de éxito
      parrafo.remove();
      resetearFormulario();
    }, 3000);
  }, 3000);
}

//Función para resetear el formulario
function resetearFormulario() {
  formulario.reset();
  iniciarApp();
}
