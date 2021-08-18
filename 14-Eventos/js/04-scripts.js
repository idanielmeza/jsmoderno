const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    console.log('Consumiendo un API');
    console.log(e);
}