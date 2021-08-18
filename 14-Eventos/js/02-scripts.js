const nav = document.querySelector('nav');

//registrar un evento

//Click click y dblclick
nav.addEventListener('click', () =>{
    console.log('click en el map');
})

//Entrada del mouse
nav.addEventListener('mouseenter', () =>{
    console.log('entrando con el mouse en el map');
})

//Salida del mouse
nav.addEventListener('mouseout', () =>{
    console.log('sliendo con el mouse en el map');
})

// similar a clic
nav.addEventListener('mousedown', () =>{
    console.log('Mouse Down');
})
nav.addEventListener('mouseup', () =>{
    console.log('Mouse UP');
})

