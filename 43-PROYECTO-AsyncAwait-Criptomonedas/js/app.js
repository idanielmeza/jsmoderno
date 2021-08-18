const criptoSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

//Crear UN Promise
const obtenerCripto = cripto => new Promise(resolve=>{
    resolve(cripto);
});

document.addEventListener('DOMContentLoaded',()=>{
    consultarCripto();
    formulario.addEventListener('submit', submitFormulario );

    criptoSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
})

async function consultarCripto(){
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;

    // fetch(url)
    //     .then(respuesta=> respuesta.json())
    //     .then(resultado=> obtenerCripto(resultado.Data))
    //     .then(cripto=> selectCripto(cripto));

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    selectCripto(resultado.Data);
    
    
}

function selectCripto(cripto){
    console.log(cripto);
    cripto.forEach(moneda=>{
        const {FullName,Name} = moneda.CoinInfo;

        const option = document.createElement('option');
        option.value= Name;
        option.textContent = FullName;
        criptoSelect.appendChild(option);
    })
}

function submitFormulario(e){
    e.preventDefault();
    //Validar

    const {moneda,criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    //Consultar API
    consultarAPI();

}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
}

function mostrarAlerta(mensaje){
    const existe = document.querySelector('.error');
    if(existe) return;

    const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');

    //mensaje de error
    divMensaje.textContent = mensaje;

    formulario.appendChild(divMensaje);

    setTimeout(()=>{
        divMensaje.remove();
    },2000)
}

async function consultarAPI(){
    const {moneda,criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    mostrarHTML(resultado.DISPLAY[criptomoneda][moneda]);
}

function mostrarHTML(cotizacion) {
    limpiarHTML();

    const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR } = cotizacion;
    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlt = document.createElement('p');
    precioAlt.innerHTML = `Precio mas alto del dia: <span>${HIGHDAY}</span>`;

    const precioLow = document.createElement('p');
    precioLow.innerHTML = `Precio mas bajo del dia: <span>${LOWDAY}</span>`;

    const variacion = document.createElement('p');
    variacion.innerHTML = `Variacion Ultimas 24 HRS: <span>${CHANGEPCT24HOUR}%</span>`;

    const ultimaAct = document.createElement('p');
    ultimaAct.innerHTML = `Ultima actualizacion: <span>En este momento</span>`;


    resultado.appendChild(precio);
    resultado.appendChild(precioAlt);
    resultado.appendChild(precioLow);
    resultado.appendChild(variacion);
    resultado.appendChild(ultimaAct);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHTML();
    const spinner = document.createElement('div');
    spinner.classList.add("spinner");
    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;
    resultado.appendChild(spinner);
}