const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 350,
    disponible : true
}

const medidas = {
    peso: '1kg',
    medidas : '1m'
}

//Unir objetos

const resultado = Object.assign(producto,medidas);
console.log(resultado);

//Spread operator o Rest Operator

//Toma una copia del objeto ...

const resultado2 = {...producto, ...medidas};
console.log(resultado2);