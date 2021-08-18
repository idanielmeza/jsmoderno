
//Class declaration
class Cliente {
    #nombre;
    constructor(nombre,saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente ${this.#nombre} con saldo ${this.saldo}`;
    }


    //Pertenece a la clase no al objeto
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const daniel = new Cliente('Daniel',20);
console.log(daniel.mostrarInformacion());