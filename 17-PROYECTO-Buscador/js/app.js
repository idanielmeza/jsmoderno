//Variables

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;
// console.log(min,max);

//Generar un objeto con la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color: '' 
}

// Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos); //Muestra los automoviles al cargas

    // Llena las opciones de anos

    llenarSelect();

})


// Event listener para los select de la busqueda
marca.addEventListener('change', e=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
year.addEventListener('change', e=>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})
minimo.addEventListener('change', e=>{
    datosBusqueda.minimo =parseInt(e.target.value);
    filtrarAuto();
})
maximo.addEventListener('change', e=>{
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
})
puertas.addEventListener('change', e=>{
    datosBusqueda.puertas =parseInt(e.target.value);
    filtrarAuto();
})
transmision.addEventListener('change', e=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener('change', e=>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
})


//Funciones
function mostrarAutos(autos){

    //Elimina la busqueda antigua;
    limpiarHTML();

    autos.forEach(auto =>{
        const autoHTML = document.createElement('P');
        const {marca,modelo,year,precio,puertas,color,transmision} = auto;
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision ${transmision} - Precio $${precio} - Color ${color}
        `;
        resultado.appendChild(autoHTML);
    })
}


function llenarSelect(){
    for(let i = max; i >= min ; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de a??o al select
    }
}

//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


//Funcion que filtra en base a la busqueda

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    if(resultado == 0){
        noResultado();
    }else{
        mostrarAutos(resultado);
    }
    
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}

function noResultado(){
    limpiarHTML();
    const noResult = document.createElement('div');
    noResult.classList.add('alerta', 'error');
    noResult.textContent = 'No hay resultados para tu busqueda';
    resultado.appendChild(noResult);
}