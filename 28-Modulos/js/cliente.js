export const nombreCliente = 'Daniel'
export const ahorro = 200;

export function mostrarInformacion(nombre,ahorro){
    return `Cliente ${nombre} ha ahorrado ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log('tiene saldo');
    }else{
        console.log('no tiene saldo');
    }
}


export class Cliente {
    constructor(nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;

    }
    mostrarInformacion() {
        return `Cliente ${this.nombre} ha ahorrado ${this.ahorro}`;
    }

}

export default function nuevaFuncion(){
    console.log('este es el export default');
}