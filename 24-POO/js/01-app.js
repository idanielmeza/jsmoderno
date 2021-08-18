
//Class declaration
class Cliente {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente ${this.nombre} con saldo ${this.saldo}`;
    }


    //Pertenece a la clase no al objeto
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const daniel = new Cliente('Daniel',400);
console.log(daniel.mostrarInformacion());

//Class Expresion
// const Cliente2 = class {

// }