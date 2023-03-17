// Palabra const
// Espacio de memoria que luego de asignar su valor no cambia en el tiempo

const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";
console.log(nombrePasajero);
console.log(apellidoPasajero);

// Palabra let
// Espacio de memoria que puede cambiar durante la ejecucion
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);

// Palabra var
// Espacio de memoria que puede cambiar durante la ejecucion
// El alcance de la variable

var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

// Bloque
{
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let: " +nombreCompletoPasajero);
    console.log("Variable con var: " +nombreCompletoDelPasajero);
}
