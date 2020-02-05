//librerias
#include <stdlib.h>//estandar
#include <stdio.h>// imprimir o recuperar informacion
#include <string.h>

struct cliente
{
	char Name [50];
	char Id[10];
	float Credit;
	char Address[100];
};

main (int argc, char const *argv[])
{
	struct cliente cliente1 = {0};
	//copiar un valor
	strcpy(cliente1.Name, "Isaac Requena");
	strcpy(cliente1.Id, "000000009");
	cliente1.Credit = 10000;
	strcpy(cliente1.Address, "Caracas");
	
	printf("El nombre del cliente es: %s \n", cliente1.Name);
	printf("El Id del cliente es: %s \n", cliente1.Id);
	printf("La direccion del cliente es: %s \n", cliente1.Address);
	printf("El Credito del cliente es: %f \n", cliente1.Credit);
	system("pause");

	return 0;
}
