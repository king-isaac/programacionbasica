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


var coleccion = [];
coleccion.push(new Pakiman("vakamon", 100, 30));
coleccion.push(new Pakiman("poshomon", 80, 50));
coleccion.push(new Pakiman("celdomon", 120, 40));

//ojo con esto, es muy epecifico por cada objeto del array -in -of
for (var valor of coleccion)
{
	valor.mostrar();
}