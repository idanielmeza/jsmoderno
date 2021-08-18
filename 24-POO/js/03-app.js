
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

//Herencia
class Empresa extends Cliente {
    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){
        return `Bienvenido al cajero de empresas`;
    }
}

const daniel = new Cliente('Daniel',400);
const empresa = new Empresa('Bimbo',3000000);
console.log(empresa.mostrarInformacion());

