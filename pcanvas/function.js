var selector_html = document.getElementById("figura1");
var cuadro = selector_html.getContext("2d");

cuadro.beginPath();
cuadro.strokeStyle = "red";
cuadro.moveTo(100,200);
cuadro.lineTo(200,200);
cuadro.stroke();
cuadro.closePath();

cuadro.beginPath();
cuadro.strokeStyle = "red";
cuadro.moveTo(80,100);
cuadro.lineTo(100,200);
cuadro.stroke();
cuadro.closePath();

cuadro.beginPath();
cuadro.strokeStyle = "red";
cuadro.moveTo(150,50);
cuadro.lineTo(80,100);
cuadro.stroke();
cuadro.closePath();

cuadro.beginPath();
cuadro.strokeStyle = "red";
cuadro.moveTo(220,100);
cuadro.lineTo(150,50);
cuadro.stroke();
cuadro.closePath();

cuadro.beginPath();
cuadro.strokeStyle = "red";
cuadro.moveTo(200,200);
cuadro.lineTo(220,100);
cuadro.stroke();
cuadro.closePath();