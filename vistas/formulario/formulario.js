const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = document.getElementById("edad").value;
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorEdad = document.getElementById("error-edad");
    const errorPais = document.getElementById("error-pais");
    const errorTerminos = document.getElementById("error-terminos");

    errorNombre.style.display = "none";
    errorEmail.style.display = "none";
    errorEdad.style.display = "none";
    errorPais.style.display = "none";
    errorTerminos.style.display = "none";


    if (!nombre) {
        errorNombre.textContent = "Debe ingresar su nombre";
        errorNombre.style.display = "block";
        event.preventDefault();
        return;
    }

    if (nombre.length < 5) {
        errorNombre.textContent = "El nombre debe contener al menos 5 letras";
        errorNombre.style.display = "block";
        event.preventDefault();
        return;
    }

    if (!email) {
        errorEmail.textContent = "Debe ingresar el email";
        errorEmail.style.display = "block";
        event.preventDefault();
        return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        errorEmail.textContent = "Ingrese un email válido";
        errorEmail.style.display = "block";
        event.preventDefault();
        return;
    }

    if (!edad) {
        errorEdad.textContent = "Debe ingresar su edad";
        errorEdad.style.display = "block";
        event.preventDefault();
        return;
    }

    if (edad < 18 || edad > 60) {
        errorEdad.textContent = "Ingrese una edad válida (entre 18 y 60 años)";
        errorEdad.style.display = "block";
        event.preventDefault();
        return;
    }

    if (pais === "") {
        errorPais.textContent = "Debe seleccionar su país";
        errorPais.style.display = "block";
        event.preventDefault();
        return;
    }

    if (!terminos) {
        errorTerminos.textContent = "Debe aceptar los términos y condiciones";
        errorTerminos.style.display = "block";
        event.preventDefault();
        return;
    }

    alert("Usuario registrado correctamente");

});

function limpiarErrores() {
    let errores = document.querySelectorAll(".error");

    errores.forEach(function (error) {
        error.textContent = "";
        error.style.display = "none";
    });
}

formulario.addEventListener("reset", limpiarErrores);