function crearIterador(carrito){

    let i = 0;

    return {
        siguiente: () =>{
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++]:undefined ;

            return{
                fin,
                valor
            }
        }
    }
}

const carrito = ['P1','P2', 'P3'];

const recorrerCarrito = crearIterador(carrito);


console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());