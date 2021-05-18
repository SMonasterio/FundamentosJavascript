//redondear a un numero mas bajo
console.log(Math.floor(45.89))

//Redondear para ariiba
console.log(Math.round(45.89))

//Obtener el máximo de una lista de números
//Template String
console.log(`El número máximo es ${ Math.max(56.5, 45, 90, 5, 1000)}`);

//Obtener el mínimo
console.log(`El número mínimo es ${Math.min(56.5, 45, 90, 5, 1000)}`);

//Obtener el entero de un número
let numero="67.876533"
console.log(numero);
console.log(parseInt(numero));
let decimal="456.322456"
console.log(parseFloat(decimal));

//Elevar a una potencia
let base=numero
let exponente=2
console.log(`El número ${base} elevado a la potencia ${exponente} es de ${Math.pow(base, exponente)}`);

//calcular raiz cuadrada
console.log(Math.sqrt(64));

//Obtener un número aleatorio
console.log(Math.random());
console.log(Math.round(Math.random()* 10));

//Obtener número con dos o más decimales
decimal=parseFloat(decimal);
console.log(Math.round(decimal*100)/100);

//ToFiexed(2)
console.log(decimal.toFixed(2));
