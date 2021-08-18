const producto = 'Monitor 24"';


//replace toma primero el valor a sustituir y segundo el valor con el que se sustituira
console.log(producto.replace('"', ' Pulgadas'));


//slice toma como valores de donde empezar hasta donde temrinar 
//si pasas un numero mayor y despues un menor regresa vacio
console.log(producto.slice(0,10));


//Alternativa a slice substring si le pasas un numero mayor de inicio los cambio
console.log(producto.substring(2,1));

const usuario = 'Daniel';

// Regresa el caracter de ese indice
console.log(usuario.charAt(0));
