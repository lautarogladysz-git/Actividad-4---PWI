const parametros = new URLSearchParams(window.location.search);

const nombre = parametros.get("nombre");
const email = parametros.get("email");
const edad = parametros.get("edad");
const pais = parametros.get("pais");
const terminos = parametros.get("terminos");

const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

if (!nombre || !email || !edad || !pais) {
    resultado.classList.add("oculto");
    error.classList.remove("oculto");

} else {
    document.getElementById("nombre").textContent = nombre;
    document.getElementById("email").textContent = email;
    document.getElementById("edad").textContent = edad;
    document.getElementById("pais").textContent = pais;

    if (terminos) {
        document.getElementById("mensaje-terminos").textContent = "Ha aceptado los términos y condiciones.";
    }
}

const botonVolver = document.getElementById("btn-volver");

botonVolver.addEventListener("click", function () {
    window.location.href = "../../vistas/formulario/formulario.html";
});    

const botonFormulario = document.getElementById("btn-formulario");

botonFormulario.addEventListener("click", function () {
    window.location.href = "../../vistas/formulario/formulario.html";
});    