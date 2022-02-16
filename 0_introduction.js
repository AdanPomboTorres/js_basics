console.log("0.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios básicos introductorios a Javascript");

//Crear una variable para almacenar tu nombre
var nombre = "Adán";

//Crear una variable para almacenar tus apellidos
var primerApellido = "Pombo";
var segundoApellido = "Torres";

//Crear una variable para almacenar tu edad
var edad = "22";

//Almacenar en una constante tu nombre y apellidos
const NOMBRECOMPLETO = "Adán Pombo Torres"; 

//Mostrar por pantalla "Hola, mi nombre es: " junto con tu nombre y apellidos
console.log ("1.Con variables " + "Hola, mi nombre es: " + nombre + primerApellido + segundoApellido);
console.log("2.Con constante " + "Hola, mi nombre es: " + NOMBRECOMPLETO);
console.log(`Hola, mi nombre es: ${NOMBRECOMPLETO}`);

//Muestra por pantalla el valor de una constante vacía
const CONSTANTEVACIA = null;
console.log(CONSTANTEVACIA);

//Muestra por pantalla el valor de una constante sin definir
//console.log(noExiste);

//Intenta reescribir el valor de la constante con tu nombre y muéstralo por pantalla
//NOMBRECOMPLETO = "Reescrito";
console.log(NOMBRECOMPLETO);

//Comprueba el tipo de dato de la variable con tu edad
console.log(typeof (edad));
//Crear una variable "mayorDeEdad" de tipo let, iniciarla a false, y si tu edad es mayor o igual a 18 años se le asignará el valor verdadero. Fuera de esa comprobación (fuera del condicional), mostrar el valor de esa variable por pantalla. Dejar un comentario explicando por qué muestra por pantalla el valor que tiene.
let mayorDeEdad = false;

if(edad >= 18){
    let mayorDeEdad = true;
}

console.log(mayorDeEdad);

//Realizar lo mismo que el enunciado anterior pero con una variable de tipo var
var mayorDeEdad_1 = false;

if(edad >= 18){
    var mayorDeEdad_1= true;
}

console.log(mayorDeEdad_1);
//Crear dos variables con números y realizar las 5 operaciones básicas (suma, resta, multiplicación, división y resto de dividir). Mostrar por pantalla el nombre de la operación el, los números y el resultado en cada uno de los casos
//HACERLO MUCHO MÁS SIMPLE
/*var primerValor;
var segundoValor;
var opcion;

function suma (primerValor, segundoValor){
    return primerValor + segundoValor;
}
function resta (primerValor, segundoValor){
    return primerValor - segundoValor;
}
function multiplicacion (primerValor, segundoValor){
    return primerValor * segundoValor;
}
function division (primerValor, segundoValor){
    return primerValor / segundoValor;
}
function potencia (primerValor, primerValor){
    return primerValor * primerValor;
}

console.log("1.- Suma");
console.log("2.- Resta");
console.log("3.- Multiplicacion);
console.log("4.- Division");
console.log("5.- Potencia);
 
opcion = prompt("Introduce una opción");

switch (opcion){
    case'suma':
        primerValor = prompt("Introduce un número: ");
        segundoValor = prompt("Introduce otro número: ")
        console.log ("Suma: " + primerValor + "+" + segundoValor + "=" + suma);
        break;
    case 'resta':
        primerValor = prompt("Introduce un número: ");
        segundoValor = prompt("Introduce otro número: ")
        console.log ("Resta: " + primerValor + "-" + segundoValor + "=" + suma);
        break;
    case 'multiplicacion':
        primerValor = prompt("Introduce un número: ");
        segundoValor = prompt("Introduce otro número: ")
        console.log ("Multiplicación: " + primerValor +  "x" + segundoValor + "=" + suma);
        break;
    case 'division':
        primerValor = prompt("Introduce un número: ");
        segundoValor = prompt("Introduce otro número: ")
        console.log ("División: " + primerValor + "/" +segundoValor + "=" + suma);
        break;
    case 'potencia':
        primerValor = prompt("Introduce un número: ");
        console.log ("Potencia: " + primerValor +  "º" + primerValor + "=" + suma);
        break;
 }

*/
//👹Hardmode (opcional): realizar el caso anterior con un array de operaciones y con un bucle
/*var operaciones = ['+', '-', '*', '/'];
var resultado = "";

for(elemento of operaciones){
    switch (elemento){
        case +:
            resultado = 'La suma es: ' +  (n1 + n2);
            break;
        case -:
            resultado = 'La resta es: ' + (n1 - n2);
            break;
        case *:
            resultado = 'La multiplicacion es: ' + (+n1 * n2);
            break;
        case /:
            resultado = 'La division es: ' + (n1 / n2);
            break;
       
    }
    console.log('resultado ' + resultado);
}*/
//Calcular el area de un triángulo dada su base y su altura y mostrar por pantalla el resultado
var base = 5;
var altura = 10;
var area = base * altura;

console.log(area);

//Calcular el área de una circunferencia para un radio dado
var radio = 8;
var areaCircunferencia = Math.PI * Math.pow(radio, 2);

console.log('El area de la circunferencia es: ' + areaCircunferencia);

//Calcular el tiempo de caida libre de un objeto para una determinada masa y altura. Mostrar por pantalla resultado y valores
var masa = 5;
var altura = 3;
const GRAVEDAD = 4.5;
var tiempoCaida = Math.sqrt(2 * altura/GRAVEDAD);
console.log('El tiempo de caida libre es de: ' + tiempoCaida);

//Calcular  el volumen de la tierra en base a su diámetro y cuántas veces es mayor el volumen de la tierra que el de la luna (también calculado en base a su diámetro)
const DIAMETROTIERRA = 1274000;
var volumenTierra = 4/3 * Math.PI * Math.pow(DIAMETROTIERRA/2, 3);
const DIAMETROLUNA = 3478800;
var volumenTierra = 4/3 * Math.PI * Math.pow(DIAMETROLUNA/2, 3);
var vecesMayorTierraQueLuna = volumentTierra / volumenLuna;
console.log('La tierra es ' + vecesMayorTierraQueLuna + 'veces que la Luna');