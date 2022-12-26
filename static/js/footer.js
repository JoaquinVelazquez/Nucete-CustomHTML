const URLactual = window.location.pathname;
const categorias = document.querySelector(".contenedor-categorias");

if (URLactual == "/") {
    categorias.classList.toggle("invisible");
}
