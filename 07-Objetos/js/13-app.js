const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 350,
    disponible : true
}


//Obtiene las llaves del producto (en este caso nombre,precio disponible)
console.log(Object.keys(producto));

//Obtiene los valores

console.log(Object.values(producto));

//Retorna ambos en pares

console.log(Object.entries(producto));
