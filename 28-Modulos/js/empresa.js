import {Cliente} from './cliente.js';

export class Empresa extends Cliente{
    constructor (nombre,ahorro,categoria){
        super(nombre,ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente ${this.nombre} ha ahorrado ${this.ahorro} y su categoria es: ${this.categoria}`;
    }

}