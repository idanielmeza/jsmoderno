
self.onload = ()=>{
    console.log('Ventana Lista');
}

const producto = {
    nombre: 'Monitor 20',
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        const self = this;
        return `El Producto ${this.nombre} tiene un precio ${this.precio}`;
    }
}

console.log(producto.mostrarInfo());