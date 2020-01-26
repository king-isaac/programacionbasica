var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas =30;
var l = 0
var yi, xf;
var rojo = "red";
var negro = "black";

for (l = 0; l < lineas; l++)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(rojo, 0, yi, xf, 300);
}

dibujarLinea(negro, 1, 1, 1, 299);
dibujarLinea(negro, 1, 299, 299, 299);

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