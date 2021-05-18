//for
/*
for (let i = 0 < 10; i++; ) {
  //acciones
  console.log(i);
}
*/
//Tarea
//Ingresar la tabla que queremos calcular
//Mostrar por consola la tabla

let tabla = parseInt(prompt("Ingrese el número de la tabla a calcular"));

while(tabla){
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
  tabla=parseInt(prompt("número"));
}