// Estructura condcional
//Switch

let number = 3;

switch (number) {
  case 10:
    //action
    console.log("El número es 10");
    break;
  case 25:
    //action
    console.log("El número es 25");
    break;
  case 3:
    //action
    console.log("El número es 3");
    break;

  default:
    console.log("El número es otro valor");
    break;
}

//---------------------

let diaNumero = new Date().getDay();
switch (diaNumero) {
  case 0:
    console.log("Hoy es Domingo");
    break;
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miercoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;

  default:
    console.log("Hoy es Sábado");
    break;
}

//----------------------------

let comando = prompt("Ingrese un comando(alerta, consola, print)");

switch (comando) {
  case "alerta":
    alert("Esto es una alerta");
    break;
  case "consola":
    console.log("Esto es una consola");
    break;
  case "print":
    document.write("Esto es un navegador");
    break;

  default:
    console.error("No exite ese comando");
    break;
}
