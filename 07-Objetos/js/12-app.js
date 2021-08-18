//Object Literal

const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 350,
    disponible : true
}

//Objetc constructor

function Producto (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}


const producto2 = new Producto('Monitor 30"', 500);
console.log(producto2);



