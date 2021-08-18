import * as UI from './interfaz.js';

class API{
    constructor(artista,cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){

        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                const {lyrics} = resultado;
                UI.headingResultado.textContent = `Letra de la cancion : ${this.cancion} de ${this.artista}`;
                UI.divResultado.textContent = lyrics;
            })
            .catch(error=> {
                UI.divResultado.textContent = 'Esa cancion no existe PENDEJO';
                UI.divMensajes.classList.add('error');
                setTimeout(() => {
                    UI.headingResultado.textContent = '';
                    UI.divMensajes.innerHTML = '';
                    UI.divMensajes.classList.remove('error');
                    UI.formularioBuscar.reset();
                    UI.divResultado.textContent = '';
                }, 3000);

           })

        }
}
export default API;