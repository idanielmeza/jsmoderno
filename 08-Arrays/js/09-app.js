const carrito = [
    {nombre: 'Monitor', precio: 200},
    {nombre: 'Celular', precio: 600},
    {nombre: 'Audifonos', precio: 150},
    {nombre: 'Teclado', precio: 50}
];

carrito.forEach(producto =>{
    console.log(`${producto.nombre} - Precio $${producto.precio}`);
});