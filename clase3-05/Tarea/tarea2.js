/**Tarea 2 - Operaciones con condicionales**

- Recibir dos valores y la operación a realizar (+, -, *, /)
- Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
- Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.
- Si se ingresa una operación que no está contemplada devolver un mensaje de error.
*/

let numero1 = parseFloat(prompt("Ingrese un número"));
let numero2 = parseFloat(prompt("Ingrese otro número"));
let operacion = prompt("¿Operación a realizar?(+, -, *, /");

if (isNaN(numero1)) {
  console.log("El valor no es un número, será convertido a 0");
}
if (isNaN(numero2)) {
  console.log("El valor no es un número, será convertido a 0");
}

switch (operacion) {
  case "+":
    console.log(`${numero1} + ${numero2} es igual a ${numero2 + numero1}`);
    break;
  case "-":
    console.log(`${numero1} - ${numero2} es igual a ${numero2 - numero1}`);
    break;
  case "/":
    console.log(`${numero1} / ${numero2} es igual a ${numero1 / numero2}`);
    break;
  case "*":
    console.log(`${numero1} * ${numero2} es igual a ${numero1 * numero2}`);
    break;
  default:
    console.error("La operación ingresada no existe");
    break;
}
