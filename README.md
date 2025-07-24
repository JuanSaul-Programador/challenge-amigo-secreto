# Proyecto Amigo Secreto - Challenge Alura Latam

## Descripción

Este proyecto es una aplicación web simple que permite agregar nombres a una lista y sortear un amigo secreto de forma aleatoria. Fue desarrollado como parte del challenge de lógica de programación de Alura Latam, con el objetivo de practicar el manejo de arreglos y manipulación del DOM usando JavaScript.

## Funciones implementadas

- **`agregarAmigo()`**  
  Captura el nombre ingresado por el usuario, valida que no esté vacío y lo agrega al arreglo `amigos`. Luego actualiza la lista visible de amigos en la página.

- **`mostrarListaAmigos()`**  
  Recorre el arreglo `amigos` y muestra todos los nombres en una lista HTML. Antes de mostrar, limpia el contenido anterior para evitar duplicados.

- **`sortearAmigo()`**  
  Valida que haya amigos disponibles para sortear. Luego genera un índice aleatorio con `Math.random()` y `Math.floor()`, obtiene el nombre sorteado y actualiza el DOM mostrando el resultado. Además, limpia la lista de amigos para que solo se vea el resultado del sorteo.


## Uso
1. Escribir el nombre de un amigo en el campo de texto y presionar "Añadir".
2. Repetir para agregar más amigos.
3. Presionar "Sortear amigo" para elegir aleatoriamente un nombre de la lista.
   
## Autor

Desarrollado por Juan Saul Pereyra Acedo.

¡Gracias por revisar mi proyecto!
