window.addEventListener('scroll', ()=>{
    
    const premium = document.querySelector('.premium');

    //dice a que distancia esta a ese elemento / cordenadas tec
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 748){
        console.log('el elemento ya esta visible');
    }else{
        console.log('el elemento aun no es visible');
    }

    // console.log(ubicacion);

})