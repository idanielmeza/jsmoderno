const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', ()=>{
    formulario.addEventListener('submit', validarBusqueda);
})

function validarBusqueda(e){
    e.preventDefault();

    const busqueda = document.querySelector('#busqueda').value;

    if(busqueda.length<2){
        mostrarMensaje('Busqueda muy corta');
        return;
    }

    consultarAPI(busqueda);
}

function mostrarMensaje(mjs){
    const existe = document.querySelector('.alerta');

    if(existe) return;

    const alerta = document.createElement('div');
    alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta');
    alerta.textContent = mjs;

    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    },3000)
}

function consultarAPI(busqueda){
    const githubUrl = `https://jobs.github.com/positions.json?location=usa?search=${busqueda}`;;
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(githubUrl)}`;
    axios.get(url)
        .then(respuesta => mostrarVacantes(JSON.parse(respuesta.data.contents)))
}

function mostrarVacantes(vacantes){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    // console.log(vacantes);
    if(vacantes.length > 0){
        resultado.classList.add('grid');

        vacantes.forEach(vacante=>{
            const {company,title,type,url}= vacante;

            resultado.innerHTML += `
            <div class="shadow bg-white p-6 rounded">
                <h2 class="text-2xl font-light mb-4">${title}</h2>
                <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
            </div>
            `;
        })
    }

    const noResultado = document.createElement('p');
    noResultado.classList.add('text-center','tp-10', 'text-gray-600', 'w-full');
    resultado.classList.remove('grid');
    noResultado.textContent = 'Por el momento no se encontraron vacantes';
    resultado.appendChild(noResultado);
}