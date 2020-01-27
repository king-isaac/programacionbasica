var v = document.getElementById("villa");
var papel = v.getContext("2d");
var mapa = "img/tile.png";

var imagen = new Image();
imagen.src =  mapa;
imagen.addEventListener("load", dibujar);

function dibujar()
{
	papel.drawImage(imagen, 0, 0);
}

function aleatorio(min , max)
{
	var resultado;
	resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}