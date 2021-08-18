//mixin

class Persona{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre} email: ${this.email}`)
    }
}

//Añadir funciones personas a clase persona
Object.assign(Persona.prototype, funcionesPersona);

const cliente = new Persona ('Daniel', 'daniel@daniel.es');
cliente.mostrarInformacion();