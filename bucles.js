//BUCLES
//Se van a ejecutar mientras se cumpla la condicion =/ switch (que cuando se cumple termina la condición x el break;)

//while:
//Mientras se cumpla la condición, se ejecutará la acción

/*let vecesSumar = 10;
let totalSuma = 0

while (vecesSumar > 0) {

    totalSuma += 1
    vecesSumar -= 1

    console.log(`totalSuma: ${totalSuma} | vecesSumar: ${vecesSumar}`)

}

console.log(`Total= ${totalSuma} `);*/

//-----------------------

let respuesta = "HELSINKI";
let acierto = false;
let contador = 0;


while (contador < 3 && acierto === false) {
  let respUsuario = prompt("Capital de Finlandia");
  if (respUsuario.toUpperCase() === respuesta) {
    acierto = true;
    document.write("Acertaste!!");
  }
  contador++
}
if (acierto ===false) {
  document.write('LOSER') 
}

