const carrito = [];

const producto = {
    nombre: 'Monitor',
    precio : 200
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

//Agregar al final del arreglo
carrito.push(producto);
carrito.push(producto2);


//Agregar al inicio del carrito
const producto3 = {
    nombre: 'Audifonos',
    precio: 200
}

carrito.unshift(producto3);
console.table(carrito);

//Eliminar ultimo elemento del arreglo

// carrito.pop();
// console.table(carrito);

// //Eliminar el primero del arreglo
// carrito.shift();
// console.table(carrito);

// Toma 2 valores el primero desde que elemento eliminar y como segundo cuantos elementos
carrito.splice(0,1);

console.table(carrito);
