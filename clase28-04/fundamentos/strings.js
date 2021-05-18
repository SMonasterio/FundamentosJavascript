let nombre="Eugenio"
let apellido="Perez"
let frase="       Bienvenido a la clase     "

console.log(nombre, apellido);
console.log(nombre + " " +apellido);


//Template String
console.log(`Mi nombre es ${nombre} ${apellido}`)

//Métodos de los String
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase());
console.log(apellido.length);
console.log(nombre.charAt(4));
console.log(apellido.substr(2,3))
console.log(frase.trim())

console.log(apellido.charAt(apellido.length -1 ))