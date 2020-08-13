const TIPOS_VEHICULOS = {
    auto: 1,
    moto: 2
}

function Auto(marca, modelo, puertas, precio, tipo) {
    return {
        marca: marca,
        modelo: modelo,
        puertas: puertas,
        precio: precio,
        tipo: tipo
    }
}

function Moto(marca, modelo, cilindrada, precio, tipo) {
    return {
        marca: marca,
        modelo: modelo,
        cilindrada: cilindrada,
        precio: precio,
        tipo: tipo
    }
}

let vehiculos = [];


function llenarVehiculos() {
    vehiculos.push(new Auto('Peugeot', "206", 4, 200000, TIPOS_VEHICULOS.auto));
    vehiculos.push(new Auto('Peugeot', "208", 5, 250000, TIPOS_VEHICULOS.auto));
    vehiculos.push(new Moto('Honda', "Titan", 125, 60000, TIPOS_VEHICULOS.moto));
    vehiculos.push(new Moto('Yamaha', "YBR", 160, 80500.50, TIPOS_VEHICULOS.moto));
}


// Vehículo más caro: Peugeot 208

function miVehiculoMasCaro() {
    let vehiculoMasCaro;

    for (let i = 0; i < vehiculos.length; i++) {
        const vehiculo = vehiculos[i];

        if (vehiculoMasCaro == undefined) {
            vehiculoMasCaro = vehiculo;
        } else if (vehiculo.precio > vehiculoMasCaro.precio) {
            vehiculoMasCaro = vehiculo;
        }
    }

    return vehiculoMasCaro;
}




// Vehículo más barato: Honda Titan
function miVehiculoMasBarato() {
    let vehiculoMasBarato;

    for (let i = 0; i < vehiculos.length; i++) {
        const vehiculo = vehiculos[i];

        if (vehiculoMasBarato == undefined) {
            vehiculoMasBarato = vehiculo;
        } else if (vehiculo.precio < vehiculoMasBarato.precio) {

            vehiculoMasBarato = vehiculo;
        }
    }

    return vehiculoMasBarato;
}


// Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR $80.500,50

function buscarModeloConY(){
    let vehiculoConY =[];

    for (let i = 0; i < vehiculos.length; i++) {
            const vehiculo = vehiculos[i];
            if(vehiculo.modelo.includes("Y")==true){
                vehiculoConY.push(vehiculo);
            }
    }
         return vehiculoConY
}


// Ejercicio Extra


// Ejercicio N°1

llenarVehiculos();
for (let i = 0; i < vehiculos.length; i++) {
    const element = vehiculos[i];

    if (element.tipo == TIPOS_VEHICULOS.auto) {
        console.log(`Marca: ${element.marca} //  Modelo: ${element.modelo} // Puertas: ${element.puertas} // Precio: $ ${element.precio}`)
    } else {
        console.log(`Marca: ${element.marca} //  Modelo: ${element.modelo} // Cilindros: ${element.cilindrada} // Precio: $ ${element.precio}`)
    }
}

console.log('=========================')

// Ejercicios N°2
const vehiculoMasCaro = miVehiculoMasCaro();
console.log(`Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}`);


const vehiculoMasBarato = miVehiculoMasBarato();
console.log(`Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}`)

// const vehiculoConY = miVehiculoConY()
// console.log(`Vehículo que contiene en el modelo la letra ‘Y’:  ${vehiculoConY.marca} ${vehiculoConY.modelo}  $${vehiculoConY.precio}`)
//  Yamaha YBR $80.500,50
const vehiculoConY = buscarModeloConY();
for (let i = 0; i < vehiculoConY.length; i++) {
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculoConY[i].marca} ${vehiculoConY[i].modelo} $ ${vehiculoConY[i].precio} `)

    }
// console.log(`Vehículo que contiene en el modelo la letra ‘Y’:  ${vehiculoConY.}`)


console.log('===============================')

//  Ejercicios Extra


//  Vehículos ordenados por precio de mayor a menor:

