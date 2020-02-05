/*
Para crear una Queue debemos seguir los siguientes pasos:

Crear un pointer para saber que hay en front y rear
Colocar estos valores en -1 al inicializar
Incrementar en 1 el valor de “rear” cuando agregamos un elemento
Retornar el valor de front al quitar un elemento e incrementar en 1 el valor de front a usar dequeue.
Antes de agregar un elemento revisar si hay espacios
Antes de remover un elemento revisamos que existan elementos
Asegurarnos de que al remover todos los elementos resetear nuestro front y rear a -1
Y agregar el valor de 0 a Front al hacer nuestro primer enqueue
*/

#include<stdio.h>
#define SIZE 5

int items[SIZE], front = -1, rear = -1;

void enQueue (int value ){
	if (rear == SIZE-1) // revisamos que no este lleno
	printf("Nuestra cola esta llena \n");
	else{
		if(front == -1) //la primera vez que agregamos algo a la cola
		front = 0;
		rear++; //si es la primera vez, empezaria por 0
		items[rear] = value; //nuestro items pasa el valor de near que es el indice
		printf("Se inserto en nuestra cola el valor %d correctamente \n", value);
		printf("Se inserto en nuestra cola en la posicion %d correctamente \n", rear);
	}
}


void deQueue (){
	if (front == -1)
		printf("Nuestra cola esta vacio \n");
		else{
			printf("Se elimino el valor %d correctamente \n", items[front]);
			front++;
			if (front > rear)
			front = rear = -1; //resea todo
		}
}


main (int argc, char const *argv[])
{
	enQueue(10);
	enQueue(20);
	enQueue(10);
	enQueue(20);
	deQueue();
	enQueue(10);
	enQueue(20);
	return 0;
}
