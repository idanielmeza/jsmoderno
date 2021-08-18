function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    console.log(`El cliente ${this.nombre} tiene $${this.saldo}`);
}

//Crear instanica a un objeto

const Matias = new Cliente('Oscar Matias', 500);
Matias.tipoCliente();

console.log(Matias);