const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');


abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarCompleta);

function pantallaCompleta(){
    document.documentElement.requestFullscreen();
}

function cerrarCompleta(){
    document.exitFullscreen()
}