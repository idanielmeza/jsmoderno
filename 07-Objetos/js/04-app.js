const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 350,
    disponible : true
}

//Objet desctructuring extrae la variable y crea 
const {nombre} = producto;
const {precio,disponible} = producto;

console.log(producto.nombre);
console.log(nombre,precio,disponible);