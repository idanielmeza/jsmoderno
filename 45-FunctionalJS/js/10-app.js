const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guadarEmail = info =>({
    agregarEmail(email){
        console.log(`Guardando email en ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
});

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
})

function Cliente(nombre,email,empresa){
    let info = {
        nombre,
        email,
        empresa
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guadarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}


function Empleado(nombre,email,puesto){
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guadarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )

}

const cliente = Cliente('Daniel', null, 'DLSyntrax');
cliente.mostrarNombre();
cliente.agregarEmail('email@email.es');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('===========');

const empleado = Empleado('Matias', null, 'Sirviente');
empleado.mostrarNombre();
empleado.agregarEmail('email2@email.es');
empleado.mostrarEmail();
empleado.mostrarPuesto();