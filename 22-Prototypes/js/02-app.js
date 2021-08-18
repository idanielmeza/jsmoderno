function Cliente (nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const daniel = new Cliente('Daniel', 1000);

function formatearCliente(cliente){
    const {nombre,saldo} = cliente;
    
    return  `El cliente ${nombre} tiene un saldo de $${saldo}`;
}

console.log(formatearCliente(daniel));

function Empresa (nombre,saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const DL = new Empresa('Daniel Ledezma INC', 210021, 'Genio');

