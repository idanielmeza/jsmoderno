// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//Eventos


eventListeners()

function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


//Clases

class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        // console.log(this.gastos);
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado= this.gastos.reduce((total,gasto)=> total + gasto.cantidad, 0 );
        console.log(gastado);
        this.restante = this.presupuesto - gastado;
    }
    
    eliminarGastos(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        // console.log(this.gastos);
        this.calcularRestante();
    }

}

class UI {
    insertarPresupuesto (cantidad){

        //extrayendo valor 
        const {presupuesto, restante} = cantidad;

        //agregar HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje,tipo){
        //Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //insertar en el html

        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        
        //Quitar del HTML
        
        setTimeout(()=>{
            divMensaje.remove()
        },3000)
    }

    agregarGastoListado(gastos){

        this.limpiarHTML();

        //Iterar sobre los gastos

        gastos.forEach( gasto =>{
            const {cantidad,nombre,id} = gasto;

            //Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'lsit-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id', id); vieja forma
            nuevoGasto.dataset.id = id; //nueva forma


            //Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class='badge badge-primary badge-pill'>$${cantidad}</span>`;


            //Boton borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }


            nuevoGasto.appendChild(btnBorrar);

            //Agregar HTML
            gastoListado.appendChild(nuevoGasto);
        })

    }

    limpiarHTML (){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%
        if((presupuesto / 4) > restante){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }else{
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-success');
            formulario.querySelector('button[type="submit"]').disabled = false;
        }


        //Si el total es 0 o menor

        if(restante <=0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');

            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

//Instanciar
const ui = new UI();

let presupuesto;

//Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = Number(prompt('cual es tu presupuesto?'));

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    //Prespuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();
    

    //leer datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad =Number(document.querySelector('#cantidad').value);

    //Validad
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    } else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('La cantidad no es valida', 'error');
        return;
    }

    //Generar objeto con el gasto
    
    const gasto = {nombre,cantidad, id: Date.now()}

    presupuesto.nuevoGasto(gasto);

    ui.imprimirAlerta('Agregado.');
    const {gastos, restante} = presupuesto;
    //Imprimir los gastos
    ui.agregarGastoListado(gastos);

    // console.log(presupuesto);
    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    //Reinicia el formulario
    formulario.reset()

}

function eliminarGasto(id){

    presupuesto.eliminarGastos(id);

    
    const {gastos,restante} = presupuesto;
    ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

}