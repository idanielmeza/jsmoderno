(function(){
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const forumario = document.querySelector('#formulario');



    document.addEventListener('DOMContentLoaded', ()=>{
        conectarDB();


        //Actualiza Regsitro
        formulario.addEventListener('submit', actualizarCliente);

        //verificar el ID de la URL

        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get('id');
        
        if(idCliente){
            setTimeout(()=>{
                obtenerCliente(idCliente);
            },100)
            
        }
    })


    function actualizarCliente(e){
        e.preventDefault();

        if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        //Actualizar cliente

        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente)
        };

        const transaction = DB.transaction(['crm'] , 'readwrite');
        const objectStore = transaction.objectStore('crm');

        console.log(clienteActualizado);

        objectStore.put(clienteActualizado);
        
        transaction.oncomplete = ()=>{
            imprimirAlerta(`El cliente ${clienteActualizado.nombre} ha sido actualizado.`)

            setTimeout(()=>{
                window.location.href = 'index.html';
            },2000)
        }

        transaction.onerror = ()=>{
            imprimirAlerta('Hubo un error, intentalo nuevamente', 'error');
        }
    }


    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor().onsuccess = function(e){
            const cursor = e.target.result;


            if(cursor){
                if(cursor.value.id === Number(id)){
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
        
    }

    function llenarFormulario(datosCliente){
        const {nombre,email,telefono,empresa} = datosCliente;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }
    
})();