var selector_html = document.getElementById("figura1");
var cuadro = selector_html.getContext("2d");

//Este codigo dibuja el romboide
mipentagono("red",100,200,200,200);
mipentagono("red",100,200,80,100);
mipentagono("red",150,50,80,100);
mipentagono("red",220,100,150,50);
mipentagono("red",200,200,220,100);

//es codigo dibuja el marco o margen
mipentagono("black",1,299,1,1);
mipentagono("black",1,1,299,1);
mipentagono("black",299,299,299,1);
mipentagono("black",1,299,299,299);


function mipentagono ( color, xinicial, yinicial, xfinal, yfinal)
{
	cuadro.beginPath();
	cuadro.strokeStyle = color;
	cuadro.moveTo(xinicial,yinicial);
	cuadro.lineTo(xfinal,yfinal);
	cuadro.stroke();
	cuadro.closePath();	
}