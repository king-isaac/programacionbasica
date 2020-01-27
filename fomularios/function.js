// referente al form - formulario
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

// refente al canvas
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var rojo = "red";
var negro = "black";


function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	if (color == rojo)
	{
		lienzo.strokeStyle = rojo;
	}else{
		lienzo.strokeStyle = negro;
	}
	
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}


function dibujoPorClick()
{
	var lineas = parseInt(texto.value);
	var l = 0
	var yi, xf;
	var espacio = ancho / lineas;

	for (l = 0; l < lineas; l++)
	{
		yi = espacio * l;
		xf = espacio * (l + 1);
		dibujarLinea(rojo, 0, yi, xf, 300);
	}
	dibujarLinea(negro, 1, 1, 1, 299);
	dibujarLinea(negro, 1, 299, 299, 299);

}