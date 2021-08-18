const ciudades = ['Mexico', 'Coatzintla', 'Tomatlan'];
const ordenes = new Set([123,233,213,21]);
const datos = new Map();

datos.set('nombre','Daniel');
datos.set('profesion', 'Desarrollador WEB');

//Entries iterator
for (let entry of ciudades.entries()){
    console.log(entry);
}

for (let entry of ordenes.entries()){
    console.log(entry);
}

//Values iterador
for(let value of ciudades.values()){
    console.log(value);
}


//key iterator
for(let value of ordenes.keys()){
    console.log(value);
}

//default
for(let ciudad of ciudades){
    console.log(ciudad);
}