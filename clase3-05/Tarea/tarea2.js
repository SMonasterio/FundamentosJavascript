/**Tarea 2 - Operaciones con condicionales**

- Recibir dos valores y la operación a realizar (+, -, *, /)
- Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
- Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.
- Si se ingresa una operación que no está contemplada devolver un mensaje de error.
*/

let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese otro número");
let operacion = prompt("¿Operación a realizar?(suma, resta, multiplicacion, division");
let suma = parseFloat(numero1) + parseFloat(numero2);
let resta = numero2 - numero1;
let division = numero1 / numero2;
let multiplicacion = numero1 * numero2;

switch (operacion) {
  case "suma":
    console.log(`${numero1} + ${numero2} es igual a ${suma}`);
    break;
  case "resta":
    console.log(`${numero1} - ${numero2} es igual a ${resta}`);
    break;
  case "division":
    console.log(`${numero1} / ${numero2} es igual a ${division}`);
    break;
  case "multiplicacion":
    console.log(`${numero1} * ${numero2} es igual a ${multiplicacion}`);
    break;
 default:
        console.error("ERROR");
        break;
}
