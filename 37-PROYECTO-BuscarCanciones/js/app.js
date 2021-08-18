import * as UI from './interfaz.js';
import API from './api.js';

UI.formulario.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    ///Obetener datos formulario

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista==='' || cancion ===''){
        //Mostrar error

        UI.divMensajes.textContent = 'Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(()=>{
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        },2000)

        return;
    }

    //Consultar API

    const busqueda = new API(artista,cancion);
    busqueda.consultarAPI();
    

}