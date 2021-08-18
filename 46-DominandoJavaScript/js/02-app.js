
//Hoisting 

//Etapa 1 del hoisting : Registra todas las funciones
//Etapa 2 del hoistng : Ejecuta las funciones

function obtenerCliente(nombre){
    console.log(`El nombre es : ${nombre}`);
}

obtenerCliente('Daniel');

// obtenerClient2('Eduardo'); si usa antes de declararse maraca error

const obtenerClient2 = function(nombre){
    console.log(`El nombre es : ${nombre}`);
}

obtenerClient2('Eduardo');