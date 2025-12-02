// 3. El contador de visitas
// Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
// visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
// duplican las visitas. Representa esta situación y determina cuál es el valor final del
// contador.

// se importa la librería prompt-sync para leer entradas del usuario
import number from 'prompt-sync';
// se crea una instancia de prompt-sync
const numero = number();

// se lee el valor inicial del contador desde la entrada del usuario
let contadorVisitas=parseInt(numero('Ingrese el valor inicial del contador de visitas: ')); // Valor inicial del contador

// Aplicamos las operaciones en el orden en que suceden:
// 1) sumar 25, 2) restar 10, 3) duplicar (multiplicar por 2)
let valorFinal= ((contadorVisitas + 25 - 10) * 2);
// se muestra el resultado en la consola
console.log(`El valor final del contador de visitas es: ${valorFinal}`);
