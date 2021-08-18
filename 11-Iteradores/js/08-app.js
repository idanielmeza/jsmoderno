const pendientes = ['Tarea', 'Comer', 'Dormir'];

const automovil = {
    modelo : 'Carrito chuchu',
    year : 2021,
    motor : '10 cilindros turbo kk'
}

//Itera sobre objetos
for(let pendiente in pendientes){
    console.log(pendiente);
}

for(let propiedad in automovil){
    console.log(automovil[propiedad]);
}

for(let [llave, valor] of Object.entries(automovil)){
    console.log(llave);
    console.log(valor);
}