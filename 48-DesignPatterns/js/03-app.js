//Singleton 
let instancia = null;
class Persona{
    constructor(nombre,email){
        if(!instancia){
            this.nombre=nombre;
            this.email=email;
            instancia=this;
        }else{
            return instancia;
        }
    }
}

const persona = new Persona('Daniel', 'correo@es.net');
console.log(persona);

const persona2 = new Persona('Eduardo', 'correo@es.net');
console.log(persona2);