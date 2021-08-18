const notificarBtn = document.querySelector('#notificar');
console.log(notificarBtn);

notificarBtn.addEventListener('click',() =>{
    Notification.requestPermission()
        .then(resultado => console.log(`Resultado ${resultado}`));
        
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', ()=>{
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/ccj.png',
            body: 'Daniel Ledezma'
        });

        notificacion.onclick = function(){
            window.open('http://google.com')
        }
    }
})