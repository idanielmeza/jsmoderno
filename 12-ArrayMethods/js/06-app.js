const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Resiva que todo el arreglo cumpla la condicion
const resultado = carrito.every( producto => producto.precio < 800);
const resultado2 = carrito.every( producto => producto.precio < 600);
console.log(resultado);
console.log(resultado2);