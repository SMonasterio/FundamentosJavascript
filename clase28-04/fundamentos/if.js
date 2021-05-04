/*Estructura de control
si se cumple la condicion
entonces realizar la acción
si no se cumple la condición 
entonces realizar otra cosa
*/

/*if(condicion){
    //acción  
}else{
    //otra acción
}

let num=5;

if(num % 2 === 0){
    console.log("El número es par");
}else{
    console.warn ("El número no es par");
}*/
/*let num = 5;
//el === sirve para comparar valor y tipo de dato
// el == sirve para comparar solo el valor
if (isNaN(num)) {
  console.error("ingrese un numero");
} else {
  if (num == 10) {
    console.log("El número es igual a 10");
  } else if (num > 10) {
    console.log("El número es mayor que 10");
  } else if (num !== 10) {
    console.log(`El valor ${num} es distinto de 10`);
  } else {
    console.log("El número es menor que 10");
  }
}*/

//fiesta
//solo puede entrar un mayor de edad <=18
//si no es mayor de edad debe ir acompañado de un tutor

let edad = 15
let tutor = false

/*if( edad >= 18){
    console.log('Bienvenido a la joda!');
}else if(tutor === true){
    console.log('Bienvenidos a la joda! no se separe de su tutor');
}else {
    console.log('SALGA DE ACA');
}*/

if(edad<18 && tutor===false){
    console.error('Salga de aquí');
}else if (edad>=18 || tutor ===true){
    console.log('Bienvenido');
}