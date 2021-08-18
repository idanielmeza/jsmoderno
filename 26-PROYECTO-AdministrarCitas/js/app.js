//Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const pripietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');


/// UI formulario y selccion de citas
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

//Clases

class Citas{
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];

        // console.log(this.citas);
    }
    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaAct){
        this.citas = this.citas.map( cita => cita.id === citaAct.id ? citaAct : cita)
    }
}

class UI{

    imprimirAltera(mensaje,tipo){
        //Crear DIv
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        //Si es tipo error
        if(tipo){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //Mensaje
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //Quitar alerta
        setTimeout(()=>{
            divMensaje.remove();
        },3000)
    }

    imprimirCitas({citas}){
        // console.log(citas);
        this.limpiarHTML();

        citas.forEach(cita =>{
            const {mascota,propietario,telefono,fecha,hora,sintomas, id} = cita; 

            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;

            //Scripting de los elementos de la cita

            const mascotaP = document.createElement('h2');
            mascotaP.classList.add('card-title','font-weight-bolder');
            mascotaP.textContent = mascota;

            const propietarioP = document.createElement('p');
            propietarioP.innerHTML =  `<span class="font-weight-bolder"> Propietario: </span> ${propietario}`;

            const telefonoP = document.createElement('p');
            telefonoP.innerHTML =  `<span class="font-weight-bolder"> Telefono: </span> ${telefono}`;

            const fechaP = document.createElement('p');
            fechaP.innerHTML =  `<span class="font-weight-bolder"> Fecha: </span> ${fecha}`;

            const horaP = document.createElement('p');
            horaP.innerHTML =  `<span class="font-weight-bolder"> Hora: </span> ${hora}`;

            const sintomasP = document.createElement('p');
            sintomasP.innerHTML =  `<span class="font-weight-bolder"> Sintomas: </span> ${sintomas}`;

            //Boton para eliminar esa cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>`;

            btnEliminar.onclick = () =>{
                eliminarCita(id);
            }

            //boton editar cita
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info', 'mr-2');
            btnEditar.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>`;

            btnEditar.onclick = ()=>{
                cargarCita(cita);
            }


            //Agregar los parrafos al div
            divCita.appendChild(mascotaP);
            divCita.appendChild(propietarioP);
            divCita.appendChild(telefonoP);
            divCita.appendChild(fechaP);
            divCita.appendChild(horaP);
            divCita.appendChild(sintomasP);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //Agregar citas a HTML
            contenedorCitas.appendChild(divCita);
        });
    }
    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }

}

const ui = new UI();
const administrarCitas = new Citas();



//Event Listeners

escuchar();
function escuchar(){
    //Escucha cuando hay un cambio en el input
    mascotaInput.addEventListener('change', datosCita);
    pripietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);

    //Cuando se envia el formulario
    formulario.addEventListener('submit', nuevaCita);

}


//Objeto donde se guardaran los campos de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//LLena el objeto con los datos de la cita
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
    // console.log(citaObj);
}

//Valida y agrega una nueva cita la clase de citas
function nuevaCita(e){
    e.preventDefault();

    //Extraer infomracion
    const {mascota,propietario,telefono,fecha,hora,sintomas} = citaObj;

    //validar
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAltera('Llena todos los campos', 'error');
        return;
    }
    if(editando){
        ui.imprimirAltera(`Se actualizo correctamente.`)

        //Pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj});

        //Quitar modo edicion
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        editando = false;
       


    }else{
        //Generar id
        citaObj.id = Date.now();

        //Crear cita
        administrarCitas.agregarCita({...citaObj});
        ui.imprimirAltera(`Cita para ${citaObj.mascota} agregada.`)
    }


    //Restabelcer datos'
    reiniciarObj();
    formulario.reset();

    //Mostrar HTML citas
    ui.imprimirCitas(administrarCitas);

}

function reiniciarObj(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id){
    //Eliminar la cita
    administrarCitas.eliminarCita(id);

    //Muestre un mensaje
    ui.imprimirAltera('La cita se elimino correctamente.')

    //Refrescar citas
    ui.imprimirCitas(administrarCitas);
}

function cargarCita(cita){
    const {mascota,propietario,telefono,fecha,hora,sintomas,id} = cita;

    //llenar input
    mascotaInput.value = mascota;
    pripietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenar objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //Cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}