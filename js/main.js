var num = 1;

var avanzar = function() {
	num++;
	if (num<4) {
		var img = document.getElementById("home").style.backgroundImage = "url(img/"+num+".jpg)";
	} else if(num==4) {
		num=1;
		var img = document.getElementById("home").style.backgroundImage = "url(img/"+num+".jpg)";
	}
};

var retroceder = function() {
	num--;
	if (num>0) {
		var img = document.getElementById("home").style.backgroundImage = "url(img/"+num+".jpg)";
	} else if (num==0) {
		num=3;
		var img = document.getElementById("home").style.backgroundImage = "url(img/"+num+".jpg)";
	}
};

function ocultar(event) {
	var figureTag = document.getElementsByTagName("figure");
	for (var i = 0; i < figureTag.length; i++) {
		figureTag[i].style.display = "none";
	}
	var dataFigure = event.target.getAttribute("data-figure");
	document.getElementById(dataFigure).style.display = "block";
}

window.onload = function () {
  //header
  var contador = 1;
  document.getElementById("boton-span").addEventListener("click", function () {
    if (contador == 1) {
          document.getElementById("nav").style.width = "80%";
					document.getElementById("nav").style.zIndex = "1000"
          contador = 0;
        } else {
      document.getElementById("nav").style.width = "0%";
      contador = 1;
    }
  });

  //galeria
  document.getElementById("avanzar").onclick = avanzar;
  document.getElementById("retroceder").onclick = retroceder;
	setInterval(avanzar,4000);

	//productos
	var tamanoVentana = document.body.clientWidth;
	if (tamanoVentana < 768) {
		//Esconder Nav después de usar
		var linkA = document.getElementsByClassName("press");
		for (var i = 0; i < linkA.length; i++) {
			linkA[i].onclick = function () {
				document.getElementById("nav").style.width = "0%";
			}
		}

		//Esconder productos
		var titulos = document.getElementsByClassName("titulo");
		for (var i = 0; i < titulos.length; i++) {
			titulos[i].onclick = ocultar;
			}
	}
};
