localStorage.setItem('nombre', 'Daniel Meza');

const producto = {
    nombre: 'Monitor',
    precio: 300
}


//Funciona en JSON y Arreglos
const productoString = JSON.stringify(producto);

localStorage.setItem('producto', productoString);