

// for(let i=1; i<200; i++ ){
//     if(i%2 != 1){
//         console.log(`Numero ${i} es par`);
//     }else{
//         console.log(`Numero ${i} es impar`);
//     }
// }

const carrito = [
    {nombre: 'Monitor', precio: 200},
    {nombre: 'Celular', precio: 600},
    {nombre: 'Audifonos', precio: 150},
    {nombre: 'Teclado', precio: 50}
];


for(let i=0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
    console.log(carrito[i].precio);
}