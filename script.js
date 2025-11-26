// 1. El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
// Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
// Diseña un programa en el que él pueda obtener ambos valores.

let base=10; // metros
let altura=5; // metros

// Área: producto de la base por la altura
let area=base*altura;
// Perímetro: suma de los cuatro lados (2*base + 2*altura)
let perimetr0= (base*2)+(altura*2);

console.log("El area del terreno es: " + area + " metros cuadrados");
console.log("El perimetro del terreno es: " + perimetr0 + " metros");

// 2. Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio
// para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres
// valores numéricos, muestre el promedio en pantalla.

let nota1=4.5;
let nota2=4.5;
let nota3=4.5;
// Promedio: suma de las notas dividido entre la cantidad (3)
let promedio=(nota1+nota2+nota3)/3;

console.log(`El promedio del estudiante es: ${promedio}`);

// 4. El contador de visitas
// Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
// visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
// duplican las visitas. Representa esta situación y determina cuál es el valor final del
// contador.

let contadorVisitas=100;

// Aplicamos las operaciones en el orden en que suceden:
// 1) sumar 25, 2) restar 10, 3) duplicar (multiplicar por 2)
let valorFinal= ((contadorVisitas + 25 - 10) * 2);

console.log(`El valor final del contador de visitas es: ${valorFinal}`);

// 5. La operación misteriosa
// Se tiene la expresión matemática siguiente:
// (20+10)/5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20+10)/5+3∗2−4
// Tu reto es implementarla en JavaScript y analizar paso a paso en qué orden se
// ejecutan las operaciones hasta llegar al resultado final.


// Paso 1: Se calcula el numerador siguiendo el orden de operaciones:
// - Paréntesis primero
// - Luego multiplicación y división
// - Por último suma y resta
// (20+10) = 30
// 30/5 = 6
// 3*2 = 6
// 4*(20+10) = 4*30 = 120
// Resultado del numerador: 6 + 6 - 120 = -108

let numerador= (20+10)/5 + 3*2 - 4*(20+10);
// Paso 2: Se calcula el denominador siguiendo el mismo orden:
// 5 + 3*2 - 4*(20+10)/5 + 3*2 - 4
// - Primero paréntesis: (20+10)=30
// - Luego 3*2 = 6
// - Luego 4*(20+10)=120
// - Luego 120/5 = 24
// - Segundo 3*2 = 6
// Se reemplaza todo:
// 5 + 6 - 24 + 6 - 4 = -11
let denominador = 5 + 3*2 - 4*(20+10)/5 + 3*2 - 4;
// Paso 3: Se divide el numerador entre el denominador
// -108 / -11 = 9.818181…
const resultado = numerador / denominador;
// Paso final: mostrar el resultado
console.log(`el resultado es: ${resultado}`)
