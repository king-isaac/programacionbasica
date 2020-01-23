var d = document.getElementById("dibujito"); //seleccionar el canvas
var lienzo = d.getContext("2d"); //definir donde vamos a dibujar con su dimension
console.log(lienzo);
/*
lienzo.beginPath(); //como iniciar un camino
lienzo.strokeStyle = "red"; // color de la linea - -- esto es un atributo a diferencia de los demas
lienzo.moveTo(100, 100); //direccion de la linea en coordenadas, desde inicio y fin
lienzo.lineTo(200, 200); //dibujar la linea o mejor dicho "trazar"
lienzo.stroke(); //termianador de declarar la linea
lienzo.closePath(); //terminamos de dibujar
/////////////////////////////////////////////////////////////////
lienzo.beginPath(); 
lienzo.strokeStyle = "blue"; 
lienzo.moveTo(50, 10);
lienzo.lineTo(250, 2); 
lienzo.stroke(); 
lienzo.closePath(); 
*/
 
dibujarLinea("red", 10, 30, 300, 10);
dibujarLinea("blue", 30, 10, 10, 300);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath(); 
	lienzo.strokeStyle = color; 
	lienzo.moveTo(xinicial, xfinal);
	lienzo.lineTo(xfinal, yfinal); 
	lienzo.stroke(); 
	lienzo.closePath();
}














