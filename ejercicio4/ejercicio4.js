// 4. La operación misteriosa
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
