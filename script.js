
/*REMATE DE AUTOS*/

let autos = [
    
        { id: 1, nombre: 'Ferrari', modelo: '2020', precio: 100000},
        { id: 2, nombre: 'Lamborghini', modelo: '2021', precio: 75000},
        { id: 3, nombre: 'Audi', modelo: '2019',precio: 80000},
        { id: 4, nombre: 'Ford', modelo: '2019',precio: 50000},
        { id: 5, nombre: 'Toyota', modelo: '2005',precio: 2500},
        { id: 6, nombre: 'Nissan', modelo: '2012',precio: 5500},
    
]




idElegido = parseInt(prompt("elija id de auto para asignar precio de subasta")) 


if (idElegido >0 && idElegido<autos.length+1) {
    console.log("el auto seleccionado es id "+autos[idElegido-1].id,"marca ",autos[idElegido-1].nombre,"modelo ",autos[idElegido-1].modelo,"precio $",autos[idElegido-1].precio)
    let personaOfertante = autos.slice((idElegido-1),idElegido)
    precioAsignado = parseInt(prompt("Por favor indique el precio a ofertar")) 
        if(precioAsignado>autos[idElegido-1].precio){
            personaOfertante[0].precio = precioAsignado
            console.log("USTED ESTA SELECCIONADO PARA PARTICIPAR EN LA SUBASTA")
            console.log(personaOfertante)}
        else {
            console.log("El precio asignado no supera el precio base, lo esperamos para la proxima subasta, Muchas gracias")
        }


}



/* 
switch (opcion) {
    case value: '1'
        
        break; 
    case value: '2'
        
        break;     

    default:
        break;
}

let autoBusqueda = prompt("ingrese auto a buscar") */