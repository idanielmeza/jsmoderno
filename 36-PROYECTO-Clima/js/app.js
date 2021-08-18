const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', ()=>{
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e){
    e.preventDefault();

    console.log('Busando el clima')

    //Validar formulario
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais ===''){
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    //Consultar API
    consultarAPI(ciudad,pais);
}

function mostrarError(mensaje){
    const alertaClase = document.querySelector('.bg-red-100');
    if(!alertaClase){
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4','py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class='font-bold'>Error!</strong>
            <span class='block'> ${mensaje}</span>
        `;

        container.appendChild(alerta);

        //Se elimine la alerta despues de 3 segudnos

        setTimeout(()=>{
            alerta.remove();
        },3000)
    }
}

function consultarAPI(ciudad,pais){
    const appID = '69d41a3b00695f356c41eeda3582c8f0';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&units=metric&appid=${appID}`;
    spinner();//Muestra el spinner de carga
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos=> {
            limpiarHTML();
            if(datos.cod === '404'){
                mostrarError('Ciudad invalida')
                return;
            }

            //Imprime en el html la respuesta
            mostrarClima(datos);

        });

}

function mostrarClima(datos){
    const {name, main:{temp,temp_max,temp_min}} = datos;

    const nombreCiudad = document.createElement('p')
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold','text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${Math.round(temp)} &#8451`;
    actual.classList.add('font-bold','text-6xl');

    const maxima = document.createElement('p');
    maxima.innerHTML = `Max : ${Math.round(temp_max)} &#8451`;
    maxima.classList.add('text-xl');
    
    const minima = document.createElement('p');
    minima.innerHTML = `Min : ${Math.round(temp_min)} &#8451`;
    minima.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(maxima);
    resultadoDiv.appendChild(minima);

    resultado.appendChild(resultadoDiv);    

}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function spinner(){
    limpiarHTML();
    const divSpinner= document.createElement('div');
    divSpinner.classList.add('sk-folding-cube');
    divSpinner.innerHTML = `
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
    `;
    resultado.appendChild(divSpinner);
}