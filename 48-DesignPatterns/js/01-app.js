//Class Pattern

class Persona{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Daniel', 'correo@correo.es');

console.log(persona);