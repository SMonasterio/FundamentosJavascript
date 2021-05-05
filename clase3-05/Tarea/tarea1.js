/**Tarea 1 - Números con condicionales**

- Ingresan dos números
- Si el primero es mayor que el segundo
 mostrar en consola la suma de ambos
- Si el primero es menor que el segundo
 mostrar en consola la resta del segundo menos el primero.
- Si son iguales mostrar en consola la multiplicación de ambos.


*ejemplo del mensaje:
 2 es menor que 5, la resta de 5 - 2 es igual a 3*
*/

let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese otro número");
let suma = parseFloat(numero1) + parseFloat(numero2);
let resta = numero2 - numero1;

if (numero1 > numero2) {
  console.log(`${numero1} es mayor que ${numero2}, la suma de ${numero1}+${numero2} es igual a ${suma}`);
} else {
  numero1 < numero2;
  console.log(`${numero1} es menor que ${numero2}, la resta de ${numero1}-${numero2} es igual a ${resta}`);
}
