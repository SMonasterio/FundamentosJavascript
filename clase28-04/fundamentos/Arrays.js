//Array o arreglos
//lista

let alumnos= ['Pablo', 'Fabrizio', 'Gabriela']

//Para acceder a un elemento dentro del arreglo
alumnos[2] //Fabrizio
//cantidad de elementos
alumnos.length //3
//Obtener el último elemento
alumnos [alumnos.length -1] //Gabriela
//Concatenera todos los elementos en un string
alumnos.join()
//alumnos.join("|") "Pablo|Fabrizio|Gabriela"

//Iterar
for (let i = 0; i < alumnos.length; i++) {
    console.log( `Hola soy ${alumnos[i]}`)    
}

//Agregar elementos
alumnos.push('Jorge')
//Eliminar último elemento
alumnos.pop()
//Agregar elemento al ppio
alumnos.unshift('Walter')
//Eliminar primer elemnto
alumnos.shift()

//Encontrar le índice de un elemento
console.log ( alumnos.indexOf("Fabrizio") )
//Encontrar un elemento
console.log (alumnos.includes('Gabriela'))

//Eliminar mediante su posición
let pos = 2
alumnos.splice(pos, 2)
