let listaDePaises = document.getElementById('listaDePaises')
let valorNuevoPais = document.getElementById('valorNuevoPais')
let botonAgregar = document.getElementById('botonAgregar')

botonAgregar.addEventListener("click",agregarPais)

function agregarPais() {
        let pais = document.createElement("h4")
        pais.innerText = valorNuevoPais.value
        if (validarPais(valorNuevoPais)== true) {
            listaDePaises.append(pais)
            valorNuevoPais.value = ''
        } 
    } 
 

function validarPais(String){
    let pais = ['Argentina' , 'Brasil' , 'Uruguay' , 'Paraguay','Colombia','Peru','Chile','Estados Unidos','Mexico','España','Italia','Alemania','Rusia','Inglaterra','Escocia','Sudafrica', 'Australia', 'China','Japon', 'Nueva Zelanda']
    if ( pais.includes(valorNuevoPais.value)== true) {
        return true
    }else{
        alert("Ese pais no esta registrado")
    }
}
