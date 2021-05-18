/*Número 1
Realiza un script que pida cadenas de texto hasta que se pulse
“cancelar”. Al salir con “cancelar” deben mostrarse todas
las cadenas concatenadas con un guión " - ".*/



/*let frase=prompt('Ingrese una frase')
let cadena=[]
if (frase ==null) {
    console.error('Debe ingresar una frase')
} else {
    while (frase !==null) {
        cadena.push(frase)
        frase=prompt('ingrese otra frase o cancele')
    }

 console.log(`Ingresó ${cadena.join('-')}`)
}*/



/*Número 2
Realiza un script que pida números hasta que se pulse “cancelar”.
Si no es un número deberá indicarse con un «alert»
y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total 
de los números introducidos.*/

let numeros=parseInt(prompt('Ingrese un número'));
let suma=[]

if (numeros === null || isNaN(numeros) || numeros ='' ) {
    prompt('Ingrese un NÚMERO')
   
} else(numeros !== isNaN ){
  suma= numeros
} 
console.log(${suma})



















//Número 3
//Realiza un script que cuente el número de vocales que tiene un texto y las muestre en pantalla.
