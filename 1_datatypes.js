console.log("1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var primeraVariable = "12";
var segundaVariable = "12";

if (primeraVariable == segundaVariable){
    console.log('Son iguales ')
}else{
    console.log('No son iguales')
}

//crear dos variables con el distinto contenido y comparar si ambas son iguales
var terceraVariable = "20";
var cuartaVariable = "12";

if (terceraVariable == cuartaVariable){
    console.log('Son iguales ')
}else{
    console.log('No son iguales')
}

//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor
var quintaVariable = 20;
var sextaVariable = "Pepe";

if (quintaVariable == sextaVariable){
    console.log('Son iguales ')
}else{
    console.log('No son iguales')
};

//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta
console.log(quintaVariable === sextaVariable);


//crear dos arrays con el mismo contenido y comparar si ambos arrays son iguales
let primerArray = [12,43,55];
let segundoArray = [12,43,55];

if(primerArray == segundoArray){
    console.log('Son iguales ')
}else{
    console.log('No son iguales')
};

//crear dos arrays con el mismo contenido y comparar con "==" si ambos arrays son iguales
let tercerArray = [32,3,76];
let cuartoArray = [32,3,76];

console.log(tercerArray.length == cuartoArray.length);

//ahora comparar el contenido de dichos arrays utilizando un bucle
var sonIguales = true;
for (let i = 0; i < tercerArray.length; i++){
    tercerArray[i] != cuartoArray[i]; {
            sonIguales = false;
    }
}

console.log(sonIguales);
// crear un objeto "usuario", con tres propiedades
const usuario = {
    nombre: "Fulano",
    apellido: "García",
    dni: "938134065J"
};

console.log(usuario);

/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
 const gravedad = 9.807;

console.log(Math.round(gravedad));

//incrementar una variable con otra variable con el operador  +=
var variablePrueba_01 = 5;
var variablePrueba_02 = 10;

console.log(variablePrueba_01 += variablePrueba_02);

//eleva un número a otro utilizando **
var numeroBase = 2;
var numeroExponente = 4;

console.log(numeroBase **= numeroExponente);

//eleva un número a otro utilizando un bucle
var elevadoBucle = 2;

for (let i = 0; i < 3; i++) {
    console.log(elevadoBucle ** i);
}

// generar un número aleatorio del 0 al 100
var numeroAleatorio = Math.floor(Math.random() * 101);

console.log (numeroAleatorio);
// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max

/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"

//crear una variable con frase/cadena de caracteres y comprobar la longitud

//eliminar "script" de la palabra Javascript con el método substr

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
