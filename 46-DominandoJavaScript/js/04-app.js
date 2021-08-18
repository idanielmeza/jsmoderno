//Implicit Biding

const usuario = {
    nombre: 'Daniel',
    edad: 21,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
    },
    mascota: {
        nombre: 'Matias',
        edad: 7,
        informacion(){
            console.log(`El nombre de mi mascota es ${this.nombre} y su edad es de ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();