// Tipos de datos
// Alfanumerico

let nombrePasajero = "Pedro Silva";

console.log(nombrePasajero);
nombrePasajero = "Ramon Silva";
console.log(nombrePasajero);

// Numerico
let valorBoleto = 1000;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

// Logico  (true, false)
let boletoActivo = true;


// Operaciones aritmeticas
// Suma
//let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;

// Orden de precedencia
let totalBoletos = valorBoleto + valorBoleto*porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos);