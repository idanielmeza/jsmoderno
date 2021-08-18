//Variables
const enviarBtn = document.querySelector('#enviar');
const resetBtn = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
//Expresion regular para validar email
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


//Event litseners
eventLitseners();
function eventLitseners(){
    document.addEventListener('DOMContentLoaded', iniciarApp)

    //Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //Reinicia el formulario
    resetBtn.addEventListener('click', resetearFormulario);

    //Enviar email
    formulario.addEventListener('submit', enviarEmail);

}



//Funciones

function iniciarApp(){
    enviarBtn.disabled = true;
    enviarBtn.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e){

    // console.log(e.target.type);

    if(e.target.value.length > 0){
        //Elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios')
    }
    if(e.target.type === 'email'){
        
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
            

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        }else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');

            mostrarError('Email no valido');
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        enviarBtn.disabled = false;
        enviarBtn.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('P');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}

function enviarEmail(e){
    e.preventDefault();
    // console.log('enviando');

    //Mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';


    //despues de 3 segundos ocultar spinner y mostrar el mensaje
    setTimeout(()=>{
        spinner.style.display = 'none';

        //Mensaje confirmacion enviar

        const parrafo = document.createElement('p');
        parrafo.textContent = 'Mensaje enviado correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
        //Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo,spinner);

        setTimeout(()=>{
            parrafo.remove();
            resetearFormulario();
            
        },5000);

    },3000);
}

//resetear formulario
function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}