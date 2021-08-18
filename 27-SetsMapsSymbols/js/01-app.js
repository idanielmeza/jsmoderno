const carrito = new Set();

//No almacena valores duplicados

carrito.add('Camisa')
carrito.add('Disco')
carrito.add('Disco')


//Si no existe retorna false
carrito.delete('Disco');

//Retorna True o False
carrito.has('Camisa');

//VACIAR SET
// carrito.clear()

//Sets son iterables
carrito.forEach(producto =>{
    console.log(producto);
})

console.log(carrito);
console.log(carrito.size);


//Del siguiente arreglo eliminar duplicados

const numeros = [10,20,10,30];

const noDuplicados = new Set(numeros);

console.log(numeros);
console.log(noDuplicados);