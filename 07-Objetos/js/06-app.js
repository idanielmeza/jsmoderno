const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 350,
    disponible : true,
    informacion : {
        medidas : {
            peso : '1 kg',
            medida: '1m'
        },
        fabricacion : {
            pais : 'Japon'
        }
    }
}

const {nombre,informacion, informacion : {fabricacion : {pais}}} = producto;



console.log(pais);