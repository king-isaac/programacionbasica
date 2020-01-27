var v = document.getElementById("villa");
var papel = v.getContext("2d");
var mapa = "img/tile.png";

var fondo = new Image();
fondo.src =  mapa;
fondo.addEventListener("load", dibujar);


var vaca = new Image();
vaca.src = "img/vaca.png";
vaca.addEventListener("load", dibujarVacas);

var cerdo = new Image();
cerdo.src = "img/cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

var pollo = new Image();
pollo.src = "img/pollo.png";
pollo.addEventListener("load", dibujarPollos);


function dibujar()
{
	papel.drawImage(fondo, 0, 0);
}

function aleatorio(min , max)
{
	var resultado;
	resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}


function dibujarVacas()
{
	papel.drawImage(vaca, 10, 10);
}

function dibujarCerdos()
{
	papel.drawImage(cerdo, 10, 300);
}

function dibujarPollos()
{
	papel.drawImage(pollo, 300, 150);
}