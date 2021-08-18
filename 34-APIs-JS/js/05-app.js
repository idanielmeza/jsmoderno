document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'visible'){
        console.log('Ejecuta la funcion reproducir video...')
    }else{
        console.log('Detener video');
    }
})