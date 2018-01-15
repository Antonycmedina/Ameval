window.onload = function () {
  var contador = 1;
  document.getElementById("boton-span").addEventListener("click", function () {
    if (contador == 1) {
          document.getElementById("nav").style.width = "80%";
          contador = 0;
        } else {
      document.getElementById("nav").style.width = "0%";
      contador = 1;
    }
  })
}
