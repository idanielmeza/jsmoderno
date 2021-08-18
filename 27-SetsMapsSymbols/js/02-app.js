//WeakSet


//Solo se pueden agregar objetos
const prueba = new WeakSet();


const cliente = {
    nombre: 'Daniel',
    saldo: 100
}

prueba.add(cliente);
//metodos
// add constructor delete has

console.log(prueba);