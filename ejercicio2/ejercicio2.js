// 2. Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio
// para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres
// valores numéricos, muestre el promedio en pantalla.

// se importa la librería prompt-sync para leer entradas del usuario
import number from 'prompt-sync';
// se crea una instancia de prompt-sync
const numero= number();

// se leen las tres notas desde la entrada del usuario
let nota1=parseFloat(numero('Ingrese la primera nota: '));
let nota2=parseFloat(numero('Ingrese la segunda nota: '));;
let nota3=parseFloat(numero('Ingrese la tercera nota: '));;
// Promedio: suma de las notas dividido entre la cantidad (3)
let promedio=(nota1+nota2+nota3)/3;
// se muestra el resultado en la consola
console.log(`El promedio del estudiante es: ${promedio}`);
