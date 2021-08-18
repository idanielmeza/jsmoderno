import nuevaFuncion,{nombreCliente,ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import {Empresa} from './empresa.js';

// console.log(nombreCliente);
// console.log(ahorro);

// console.log(mostrarInformacion(nombreCliente,ahorro));
// tieneSaldo(ahorro);

nuevaFuncion();

const cliente = new Cliente(nombreCliente, ahorro)

console.log(cliente.mostrarInformacion());

const empresa = new Empresa('SyntraxDL', 1000, 'Empresa de Software');

console.log(empresa.mostrarInformacion());

