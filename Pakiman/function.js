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

<<<<<<< HEAD
vaka.mostrar();
posho.mostrar();
celdo.mostrar();
=======
var coleccion = [];
coleccion.push(new Pakiman("vakamon", 100, 30));
coleccion.push(new Pakiman("poshomon", 80, 50));
coleccion.push(new Pakiman("celdomon", 120, 40));

//ojo con esto, es muy epecifico por cada objeto del array -in -of
//in es para indices
//of me muestra la instancia
for (var valor of coleccion)
{
	valor.mostrar();
}
>>>>>>> 2981c221df93767ef3b3a5035441dbc8f8239162
