const URLactual = window.location.pathname;
const componentWrapper = document.querySelectorAll(".component-wrapper");
const categorias = document.querySelector(".contenedor-categorias");

if (URLactual == "/") {
  setTimeout(function () {
    $(document).ready(function () {
      $(categorias).insertAfter($(componentWrapper[0]));
    });
  }, 1000);
}
