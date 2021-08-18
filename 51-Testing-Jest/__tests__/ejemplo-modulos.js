import { suma } from '../js/funciones.js';

describe('suma de 2 numeros', ()=>{
    test('Sumar de 10 y 20 debe dar como resultado 30', ()=>{
        expect(suma(20,10)).toBe(30);
    })
})