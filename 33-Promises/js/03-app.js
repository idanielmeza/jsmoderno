const aplicarDescuento = new Promise((resolve,reject)=>{

    const descuento = false;

    if(descuento){
        resolve('Descuento aplciado');
    }else{
        reject('No se aplico el descuento');
    }

})

aplicarDescuento
    .then( resultado => descuento(resultado))
    .catch(error=> console.log(error))


//Hay 3 valores posibles en los promises
//   fulfilled  -- El promise se cumplio
//   reject -- El promise no se cumplio
//   pending -- Aun no se cumple y tampoco fue rechazado

function descuento(mensaje){
    console.log(mensaje);
}