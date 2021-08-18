
function *crearGenerador(){
    yield 1;
    yield 'Daniel';
    yield 3+3;
    yield true;
}


// const itedor = crearGenerador();

// console.log(itedor);
// console.log(itedor.next().value);
// console.log(itedor.next().value);
// console.log(itedor.next().value);
// console.log(itedor.next().value);
// console.log(itedor.next().value);
// console.log(itedor);

//Generador para carrito de compras

function *generadorCarrito(carrito){
    for(let i =0 ; i<carrito.length; i++){
        yield carrito[i];
    }
}

const carrito = ['P1', 'P2', 'P3'];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());