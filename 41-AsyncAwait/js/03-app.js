function descargarClientes(){
    return new Promise((resolve,reject)=>{
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('El listado de clientes se descargo');
            }else{
                reject('Error en la conexion');
            }
        },3000);
    })
}


//Async await

const ejecutar = async ()=> {
    try {
        const respuesta = await descargarClientes();

        console.log(2+2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();