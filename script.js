/* ----------------------------------------------------------------------------------- */
/* Imprime numeros del 1 al 100 en pantalla */

/* let num = 1

do {
    console.log(num)
    num = num + 1
} while (num<=100);
 */





/*-----------------------------------------------------------------------------------*/
/* var usuario = prompt("Ingrese usuario para registrarse")
var constrasenia = prompt("Ingrese una contraseña para registrarse")
let contador = 0


var usuarioComparacion = prompt("Ingrese su usuario para ingresar al sitio")
while(usuario!=usuarioComparacion){
    alert("Usuario incorrecto, intente nuevamente")
    usuarioComparacion = prompt("Ingrese su usuario")
    }

var contraseniaComparacion = prompt("Ingrese su contraseña para ingresar al sitio")
while(constrasenia!=contraseniaComparacion && contador<3){
    alert("contraseña incorrecta, intente nuevamente")
    contador = contador + 1 
    usuarioComparacion = prompt("Ingrese su contraseña")
    }
if(contador==3){
    console.log("Usted ha ingresado erroneamente " ,contador ,"veces la contraseña, debe generarla nuevamente. Gracias")
    constrasenia= "contraseñaInhackeableHastaNuevoTramite"
    exit
}
console.log("Bienvenido, usted ha ingresado al sitio") */

/*-----------------------------------------------------------------------------------*/
/*El factorial de un numero entero en matematicas es el producto de todos los números enteros positivos desde 1 hasta n
Por ejemplo: 5! = 1  x  2  x  3  x  4 x  5= 120.*/

let factorial = parseInt(prompt("Ingrese un numero entero a calcular su factorial"))
let resultado = 1

for (let i = 1; i <= factorial; i++) {
    resultado = i * resultado
 
}
console.log("La factorial de",factorial ,"es: ",resultado)

