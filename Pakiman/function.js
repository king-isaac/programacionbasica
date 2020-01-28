var imagenes = [];
imagenes ["vakamon"] = "img/vaka.png";
imagenes ["poshomon"] = "img/posho.png";
imagenes ["celdomon"] = "img/celdo.png";

class Pakiman
{
	constructor(nombrePakiman, vida , ataque)
	{
	this.imagen = new Image();
	this.nombre = nombrePakiman;
	this.vida = vida;
	this.ataque = ataque;

	this.imagen.src = imagenes[this.nombre];

	}
	hablar()
	{
		alert(this.nombre);
	}

	mostrar()
	{
		document.body.appendChild(this.imagen);
		document.write("<p>");
		document.write("<strong>" + this.nombre + "</strong> <br />");
		document.write("Vida " + this.vida + "<br />");
		document.write("Ataque " + this.ataque);
		document.write("</p>");
		document.write("<hr />");
	}
}

var vaka = new Pakiman("vakamon", 100, 30);
var posho = new Pakiman("poshomon", 80, 50);
var celdo = new Pakiman("celdomon", 120, 40);
console.log(vaka, posho, celdo);

vaka.mostrar();
posho.mostrar();
celdo.mostrar();