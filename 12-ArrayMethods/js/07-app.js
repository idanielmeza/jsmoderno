const meses = ['Enero', 'Febrero', 'Marzo'];
const meses2 =  [ 'Abril', 'Mayo'];

const resultado = meses.concat(meses2, 'Otro mes');
console.log(resultado);


const resultado2 = [...meses, ...meses2];
console.log(resultado2);