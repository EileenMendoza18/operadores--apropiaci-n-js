// 1. El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
// Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
// Diseña un programa en el que él pueda obtener ambos valores.

// se importa la librería prompt-sync para leer entradas del usuario
import number from 'prompt-sync';
// se crea una instancia de prompt-sync
const numero = number();

// se leen los valores de base y altura desde la entrada del usuario
let base=parseFloat(numero('Ingrese el valor de la base: ')); // metros
let altura=parseFloat(numero('Ingrese el valor de la altura: '));; // metros

// Área: producto de la base por la altura
let area=base*altura;
// Perímetro: suma de los cuatro lados (2*base + 2*altura)
let perimetr0= (base*2)+(altura*2);

// se muestran los resultados en la consola
console.log("El area del terreno es: " + area + " metros cuadrados");
console.log("El perimetro del terreno es: " + perimetr0 + " metros");