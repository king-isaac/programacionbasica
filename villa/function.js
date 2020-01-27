var v = document.getElementById("villa");
var papel = v.getContext("2d");


var fondo = {
	url: "img/tile.png",
	cargaOk: false
};

var vaca = {
	url: "img/vaca.png",
	cargaOk: false
};

var cantidad = aleatorio (1, 5);

fondo.imagen = new Image();
fondo.imagen.src =  fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);



function cargarFondo()
{
	fondo.cargaOk = true;
	dibujar();

}

function cargarVacas()
{
	vaca.cargaOk = true;
	dibujar();

}

function dibujar()
{
	if (fondo.cargaOk)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if (vaca.cargaOk)
	{
		for(var c = 0; c < cantidad ; c++)
		{
		var x = aleatorio (0,7);
		var y = aleatorio (0,7);
		var x = x * 60;
		var y = y * 60;
		papel.drawImage(vaca.objeto, x, y);
		}
	}
}

function aleatorio(min , max)
{
	var resultado;
	resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}
