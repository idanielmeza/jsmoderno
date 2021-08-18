//Probar los valores

const suma = (a,b) => a+b;
const restar = (a,b) => a-b;


let resultado = suma(1,2);
let esperado =3;

if(resultado !== esperado){
    console.error(`El resultado ${resultado} es diferente a lo esperado`);
}else{
    console.log('La prueba paso correctamente');
}

resultado = restar(10,5);
esperado = 5;

if(resultado !== esperado){
    console.error(`El resultado ${resultado} es diferente a lo esperado`);
}else{
    console.log('La prueba paso correctamente');
}
