const loaderContainer = document.querySelector(".loaderContainer");

$( window ).ready(function(){
    $(loaderContainer).delay(2000).fadeOut( 1000 );
})

(function() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://iili.io/LPkuOg.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  function faviconIn(){
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';link.rel = 'shortcut icon';
    link.href = 'https://iili.io/LPkuOg.png';
    document.getElementsByTagName('head')[0].appendChild(link)
  };
  
  setTimeout(faviconIn,1000);


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
  