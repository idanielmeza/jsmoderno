const busqueda = document.querySelector('.busqueda');


// keydown presiona la tecla
// keyup deja de presional la tecla
busqueda.addEventListener('keydown', ()=>{
    // console.log('Telca pesionada');
})

// entrar al input y salirse
busqueda.addEventListener('blur', ()=>{
    console.log('blur');
})

//copy paste cut
busqueda.addEventListener('copy', ()=>{
    alert('No copies tramposo');
})

//input 
// Se ejecuta cuando escribes, copias,pegas,cortas (no blur)
busqueda.addEventListener('input', (e)=>{
    // console.log(e.data);
    console.log(e.target.value);

})
