var d = document.getElementById("dibujito"); //seleccionar el canvas
var lienzo = d.getContext("2d"); //definir donde vamos a dibujar con su dimension
var lineas = 30;
var l = 0;
var y , x;
var borde = "red";

for(l = 0; l < lineas ; l++)
{
	y = 10 * l;
	x = 10 * (l + 1);
	dibujarLinea("#AAF", 0, y, x, 300);
	dibujarLinea("black", 300, y, x, 0);
	
}

dibujarLinea(borde, 1, 1, 1, 299); //no le coloque 0, causa un efecto llamado "anti aliasing" se esta dibujando la mitad y no el pixel completo
dibujarLinea(borde, 299, 1, 1, 1);
dibujarLinea(borde, 1, 299, 299, 299);
dibujarLinea(borde, 299, 299, 299, 1);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath(); 
	lienzo.strokeStyle = color; 
	lienzo.moveTo(xinicial, xfinal);
	lienzo.lineTo(xfinal, yfinal); 
	lienzo.stroke(); 
	lienzo.closePath();
}














