window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.online){
        console.log('Eta conectado')
    }else{
        console.log('No estas conectado')
    }
}