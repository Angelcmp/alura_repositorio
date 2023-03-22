const datos = [
    {
        'ciudad': 'Bogota',
        'precio': 500
    },
    {
        'ciudad': 'Lima',
        'precio': 400
    },
    {
        'ciudad': 'Santiago',
        'precio': 300
    },
    {
        'ciudad': 'Montevideo',
        'precio': 200
    },
];

const presupuestoDisponible = 190;

let i = 0;
while(i < datos.length && datos[i].precio > presupuestoDisponible){
    i++;
}
if (i == datos.length)
    console.log("No tenemos pasaje disponibles");
else {
    console.log("Puedes comprar pasaje para: " +datos[i].ciudad);
}

