const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI(){
    const SpeedRecognition = webkitSpeechRecognition;

    const recognition = new SpeedRecognition();

    recognition.start();

    recognition.onstart = ()=>{
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando..';
    }

    recognition.onspeechend= ()=>{
        salida.textContent = 'Se dejo de grabar'; 
        recognition.stop();
    }

    recognition.onresult = function (e){
        console.log(e.results[0][0].transcript);
    }
}