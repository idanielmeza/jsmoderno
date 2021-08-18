const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 350,
    disponible : true,
    mostrarInfo : function (){
        console.log(`El producto : ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

producto.mostrarInfo();