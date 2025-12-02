// 2. Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio
// para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres
// valores numéricos, muestre el promedio en pantalla.
import number from 'prompt-sync';
const numero= number();

let nota1=parseFloat(numero('Ingrese la primera nota: '));
let nota2=parseFloat(numero('Ingrese la segunda nota: '));;
let nota3=parseFloat(numero('Ingrese la tercera nota: '));;
// Promedio: suma de las notas dividido entre la cantidad (3)
let promedio=(nota1+nota2+nota3)/3;

console.log(`El promedio del estudiante es: ${promedio}`);
