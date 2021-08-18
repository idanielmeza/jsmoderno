//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');



let tweets = [];
//Event Listeners

eventListeners();

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();
    });
}



//Funciones
function agregarTweet(e){
    e.preventDefault();
    //textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if(tweet === ''){
        mostrarError('Un tweet nopuede ir vacio');
        return; //se ejecuta que se ejecuten mas lineas de codigo
    }
    //Añadir al arreglo de tweets
    const tweetObj = {
        id : Date.now(),
        tweet // Si solamente le agregas uno se pondra como llave y valor
    }
    
    
    tweets= [...tweets, tweetObj];
    console.log(tweets);


    //Crear HTML
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();
}

//Mostrando error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove();
    }, 3000)
}


function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet =>{
            //Agregar boton eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'x';
            
            //Aliminar funcion eliminar
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            //Crear HTML
            const li = document.createElement('li');
            //Añadir texto
            li.innerText = tweet.tweet;

            //Asignar boton
            li.appendChild(btnEliminar);

            //Insertarlo en HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Limpiar HTML 

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}