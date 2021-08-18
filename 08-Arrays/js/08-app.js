//Destructuting arreglos


const numeros = [10,20,30,40];

//Se necesita extraer en orden
const [primero, segundo, tercero] = numeros;
const [ , , tercer] = numeros;
//Agrupar los demas en un nuevo arreglo
const [uno , ...demas] = numeros;

console.log(tercero , tercer, demas);