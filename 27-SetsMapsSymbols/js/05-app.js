const sym = Symbol('1')
const sym2 = Symbol('1')

if(sym === sym2){
    console.log('Son iguales');
}else{
    console.log('No son iguales');
}

const nombre = Symbol();
const apellido = Symbol();

const persona ={};

//AGREGANDO nombre y apellido como llave sdel objeto
persona[nombre] = 'Daniel'
persona[apellido] = 'Meza'
persona.tipoCliente = 'Premium'
persona.saldo = 4923342;

console.log(persona)
console.log(persona[nombre]);
console.log(persona.nombre);


//Las propiedades que utilizan un simbol no son iterablees

for(let i in persona){
    console.log(i)
}

//Definir una descripcion del simbo

const nombreCliente = Symbol('Nombe del cliente');

const cliente = {}
cliente[nombreCliente] = 'Daniel Meza'

console.log(cliente);
console.log(cliente[nombreCliente]);
