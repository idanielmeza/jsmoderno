
const suma = (a,b) => a+b;
const restar = (a,b) => a-b;

async function sumaAsync(a,b){
    return Promise.resolve(suma(a,b));
}

let resultado = suma(1,2);
let esperado =3;


resultado = restar(10,5);
esperado = 5;

test('Suma 10+20 el resultado debe ser 30', async()=>{
    const resultado = await sumaAsync(10,20)
    const esperado = 31;
    expected(esperado).toBe(resultado);
})

async function test(mensaje,callback){
    try {
        await callback();
        await console.log(`El test ${mensaje} se ejecuto corretcamente`);
    } catch (error) {
        console.error('Error');
        console.error(error);
    }
}


function expected(esperado) {
    return{
        toBe(resultado){
            
            if(resultado !== esperado){
                console.error(`El resultado ${resultado} es diferente a lo esperado`);
            }else{
                console.log('La prueba paso correctamente');
            }
            
        },
        toEqual(resultado){
            if(resultado !== esperado){
                console.error(`El resultado ${resultado} es diferente a lo esperado`);
            }else{
                console.log('La prueba paso correctamente');
            }
        }
    }
}