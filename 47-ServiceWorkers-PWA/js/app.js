if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then(resgitrado => console.log('Se instalo correctamente', resgitrado))
        .catch(error => console.log('Fallo la instalacion', error));
}else{
    console.log('Services Workers no soportados');
}