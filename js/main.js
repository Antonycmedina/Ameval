var num = 1;

var avanzar = function() {
	num++;
	if (num<4) {
		var img = document.getElementById("imagen").src = "img/"+num+".jpg";
	} else if(num==4) {
		num=1;
		var img = document.getElementById("imagen").src = "img/"+num+".jpg";
	}
};

var retroceder = function() {
	num--;
	if (num>0) {
		var img = document.getElementById("imagen").src = "img/"+num+".jpg";
	} else if (num==0) {
		num=3;
		var img = document.getElementById("imagen").src = "img/"+num+".jpg";
	}
};


window.onload = function () {
	//alert(window.outerWidth +"\n"+ window.outerHeight);
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
};
