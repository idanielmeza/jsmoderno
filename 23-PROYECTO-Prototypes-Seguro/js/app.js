//Variables
const formulario = document.querySelector('#cotizar-seguro');

//Constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos

Seguro.prototype.cotizarSeguro = function (){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.30
    */

    let cantidad;
    const base = 2000;
   switch(this.marca){
       case '1':
           cantidad = base *1.15;
           break;
       case '2':
           cantidad = base *1.05;
           break;
       case '3':
           cantidad = base *1.35;
           break;
       default:
           break;
   }

   //leer año
   const diferencia = new Date().getFullYear() - this.year;
   //Cada año el costo se reducira 3%
//    console.log((diferencia/100) * cantidad);
   cantidad -= (diferencia/100) * cantidad;
//    console.log(cantidad);

   /*
        SI el seguro es basico se multiplica por u 30%
        si es completo se multiplca por 50%
   */

    if(this.tipo === 'basico'){
        cantidad *= 1.30;

    }else{
        cantidad *= 1.5;
    }
    // console.log(cantidad);
    return cantidad;
}


function UI(){}

//Llena las opciones de los usuarios

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max-20;

    const selectYear = document.querySelector('#year');

    for( let i = max; i> min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }

}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = function (mensaje,tipo) {
    const div = document.createElement('DIV');
    div.classList.add('mensaje','mt-10');
    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.textContent = mensaje;

    //Insertar en HTML
    formulario.insertBefore(div, document.querySelector('#resultado'));
    setTimeout(()=>{
        div.remove();
    },3000)
}

UI.prototype.mostrarResultado = (total,seguro) =>{
    //Crear resultado
    let {marca} = seguro;
    const {year,tipo} = seguro;    

    if(marca === '1'){
        marca = 'Americano';
    }else if(marca === '2'){
        marca = 'Asiatico';
    }else{
        marca = 'Europeo';
    }

    const div = document.createElement('DIV');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class='font-bold'>Marca: <span class= 'font-normal'> ${marca} </span></p>
        <p class='font-bold'>Año: <span class= 'font-normal'> ${year} </span></p>
        <p class='font-bold'>Tipo: <span class= 'font-normal capitalize'> ${tipo} </span></p>
        <p class='font-bold'>Total: <span class= 'font-normal'> $${total} </span></p>

    `;

    const resultadoDiv = document.querySelector('#resultado');


    //Mostrar spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display='block';

    setTimeout(()=>{
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    },3000)
}


//Instanciar UI
const ui = new UI();
// console.log(ui);


document.addEventListener('DOMContentLoaded', ()=>{
    ui.llenarOpciones(); //Llena el select con los años;
})

eventListener();

function eventListener(){
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    //leer marca seleccionada
    const marca = document.querySelector('#marca').value;

    //Leer año seleccionado
    const year = document.querySelector('#year').value;


    //Ler covertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'exito');

    //Ocultar cotizacione previas

    const resultados = document.querySelector('#resultado div');
    if(resultados !=null){
        resultados.remove();
    }

    //Instanciar el seguro
    const seguro = new Seguro(marca,year,tipo);
    const total = seguro.cotizarSeguro();

    //utilizar el prototype que cotizara el seguro
    ui.mostrarResultado(total,seguro);

}