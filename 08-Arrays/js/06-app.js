const carrito = [];

const producto = {
    nombre: 'Monitor',
    precio : 200
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Audifonos',
    precio: 200
}

let resultado;

resultado = [...carrito, producto];
resultado =[producto3, ...resultado, producto2];

console.table(resultado);