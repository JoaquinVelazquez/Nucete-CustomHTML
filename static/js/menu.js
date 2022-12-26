let nosotrosFlecha = document.querySelector(".nosotros-flecha");
let tiendaFlecha = document.querySelector(".tienda-flecha");

let nosotrosSubcategoria = document.querySelector(".nosotros-subcategoria");
let tiendaSubcategoria = document.querySelector(".tienda-subcategoria");

nosotrosFlecha.addEventListener("click", function(){
    nosotrosSubcategoria.classList.toggle("invisible");
    nosotrosFlecha.classList.toggle("rotacion");
});

tiendaFlecha.addEventListener("click", function(){
    tiendaSubcategoria.classList.toggle("invisible");
    tiendaFlecha.classList.toggle("rotacion");
});

////////////////////////////////////////////////////////////////

let nosotrosFlechaMobile = document.querySelector(".nosotros-flecha-mobile");
let tiendaFlechaMobile = document.querySelector(".tienda-flecha-mobile");

let nosotrosSubcategoriaMobile = document.querySelector(".nosotros-subcategoria-mobile");
let tiendaSubcategoriaMobile = document.querySelector(".tienda-subcategoria-mobile");

nosotrosFlechaMobile.addEventListener("click", function(){
    nosotrosSubcategoriaMobile.classList.toggle("invisible");
    nosotrosFlechaMobile.classList.toggle("rotacion");
});

tiendaFlechaMobile.addEventListener("click", function(){
    tiendaSubcategoriaMobile.classList.toggle("invisible");
    tiendaFlechaMobile.classList.toggle("rotacion");
});

console.log("Desde menu.js");