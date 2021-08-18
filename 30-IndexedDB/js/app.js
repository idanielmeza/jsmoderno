let DB;

document.addEventListener('DOMContentLoaded', ()=>{
    crmDB();

    setTimeout(()=>{
        crearCliente();
    },5000);
})

function crmDB(){
    //Crear base de datos 1.0

    let crmDB = window.indexedDB.open('crm',1);

    //Si hay error
    crmDB.onerror = function(){
        console.log('Hubo un erro al crear la DB');
    }

    //Si se creo bien
    crmDB.onsuccess = function(){
        console.log('Base de datos creada');

        DB = crmDB.result;
    }

    //COnfiguracion de la DB
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true

        });
        //Definir columnas

        objectStore.createIndex('nombre', 'nombre', {unique: false });
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});

        console.log('columnas creadas');
    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('Transaccion completada');
    }
    
    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 3721932198,
        nombre: 'Daniel',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}