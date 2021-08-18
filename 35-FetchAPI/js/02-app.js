const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    fetch('data/empleado.json')
        .then(respuesta=> respuesta.json())
        .then(resutlado=>mostrarHTML(resutlado))
}

function mostrarHTML({empresa,id,nombre,trabajo}){
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML =  `
        <p> Empleado : ${nombre}</p>
        <p> ID : ${id} </p>
        <p> Puesto : ${trabajo}</p>
        <p> Empresa : ${empresa}</p>
    `;
}