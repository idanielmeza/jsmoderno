const carrito = [
    {nombre: 'Monitor', precio: 200},
    {nombre: 'Celular', precio: 600},
    {nombre: 'Audifonos', precio: 150},
    {nombre: 'Teclado', precio: 50}
];

//Crea un nuevo arreglo
const carrito2 = carrito.map(producto =>{
    return `${producto.nombre} - Precio $${producto.precio}`;
})

console.log(carrito2);