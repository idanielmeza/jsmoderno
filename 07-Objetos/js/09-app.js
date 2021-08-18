'use strict';
const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 350,
    disponible : true
}

//Te permite editar pero no agregar ni eliminar
Object.seal(producto);