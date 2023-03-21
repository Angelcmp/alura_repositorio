
const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 21;
let estaAcompanado = false;
let tienePasaporte = true;
let estaCasado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
// A && B || C

    if(ciudadesDisponibles.indexOf(ciudadDestino) > -1 && 
    edadPasajero >=18 && 
    tienePasaporte &&
    !estaCasado){
    console.log("Paquete para solteros disponible para venta");
    } else{
    console.log("Ciudad no disponible para viajar");
}