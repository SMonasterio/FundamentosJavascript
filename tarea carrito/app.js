/*Crear una aplicación de changuito de compras donde se ingresen productos como elementos en un array
----------------------------------

- Las tareas que debe hacer son las siguientes:
 - Agregar producto al carrito
 - Listar los productos del carrito 
 - Buscar un producto en el carrito 
 - Filtrar productos según una palabra
 - Eliminar producto del carrito*/

//Pedir que indique un producto y guardarlo en un carrito

let carrito = [];
let producto = prompt("Indique un producto");

function agregarCarrito() {
  carrito.push(producto);
  console.log("Agregado al carrito");
}

//function listarCarrito() {
//  console.log(`Este es su carrito: ${carrito}`)
//}
/*function listarProductos() {
  console.log('Este es su carrito:')
  for (let i = 0; i < carrito.length; i++) {
   console.log(`${i+1} - ${carrito[i]}`);
  }
}*/
function listarCarrito() {
  console.log(`Este es su carrito: ${carrito}`);
  //carrito.map(function(producto, index) {
  // console.log(`${index +1 } - ${producto}`)
}

while (producto !== null) {
  agregarCarrito();
  producto = prompt("Indique un producto");
}

//listarCarrito()

function buscarProducto(producto = prompt("Ingrese el producto a buscar")) {
  let validar = carrito.includes(producto);
  if (validar) {
    console.log(`El producto ${producto} está en el carrito`);
  } else {
    console.error("El producto no está en el carrito");
  }
}

//buscarProducto()

function eliminarProducto(
  pos = prompt("Ingrese el número del producto a eliminar")
) {
  let producto = carrito[pos - 1];

  if (producto) {
    carrito.splice(pos - 1, 1);
    console.log("Eliminado con éxito");
  } else {
    console.error("El producto no está en el carrito");
  }
}
//Codigo en clase
/*function eliminarProducto() {
  let pos = prompt("Ingrese el número del producto a eliminar");
  if (pos) {
    pos = parseInt(pos);
    let producto = carrito[pos - 1];
    if (producto !== undefined) {
      let validar = confirm(`Esta seguro que quiere eliminar ${producto}`);
      if (validar) {
        carrito.splice(pos - 1, 1);
        console.log(`Eliminado el producto ${producto}`);
        listarProductos();
      }
    } else {
      console.error("No hay producto con esa posición");
    }
  } else {
    console.error("Ocurrió un error y no es posible realizar la acción");
  }
}*/

function filtrarProducto() {
  let producto = prompt("Ingrese producto a filtrar");

  if (producto) {
    let productos = carrito.filter(function (produc) {
      return produc.indexOf(produc) >-1;
    });
  } else {
    console.error('Campo vacio')
  }
}

