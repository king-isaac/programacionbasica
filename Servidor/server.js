/*
require: es una obcion que no existe por defecto pero si en el frontend
*/
var express = require ("express");
var aplicacion = express();

// ("/") asi se define el home en la URL(por get)
aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
	resultado.send("Hola Yenny y Luis");
}


function cursos(peticion, resultado)
{
	resultado.send("Estos son los cursos");
}

aplicacion.listen(8989);